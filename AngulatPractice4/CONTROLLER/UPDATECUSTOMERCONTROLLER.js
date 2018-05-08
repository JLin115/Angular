eApp.controller('UPDATEPANEL', function ($scope, $filter) {

	var init = function () {
		$scope.inputValue = {
			CUST_ID: '',
			ENTRY_DATE: '',
			CUST_NAME: '',
			VIP_CODE: '',
			DEPOSIT: ''
		}
		$scope.lockInput = false;
	}
	var temp = [];

	//將資料放入scope
	var fillData = function (data) {
		if (data.length != 0) {
			$scope.inputValue.CUST_ID = data[0].CUST_ID
			$scope.inputValue.ENTRY_DATE = !data[0].ENTRY_DATE ? '' : new Date(data[0].ENTRY_DATE)
			$scope.inputValue.CUST_NAME = data[0].CUST_NAME
			$scope.inputValue.VIP_CODE = !data[0].VIP_CODE ? '' : $filter('filter')($scope.custGrads, data[0].VIP_CODE)[0].PARAM_CODE
			$scope.inputValue.DEPOSIT = data[0].DEPOSIT
		}
	}

	//將newData放入oldData
	var modifyData = function (oldData, newData) {
		oldData.CUST_NAME = newData.CUST_NAME
		oldData.DEPOSIT = isNaN(parseInt(newData.DEPOSIT)) ? '' : newData.DEPOSIT
		oldData.ENTRY_DATE = !newData.ENTRY_DATE ? '' : $filter('date')(newData.ENTRY_DATE, 'yyyy-MM-dd')
		oldData.VIP_CODE = !newData.VIP_CODE ? "" : newData.VIP_CODE
	}

	//查詢後置入修改欄位
	$scope.$on('update', function ($event, memberdata) {
		if (memberdata.length == 1) {
			temp = memberdata;
			$scope.lockInput = true;
			fillData(memberdata)
		}
	})

	//修改資料
	$scope.updateCustomer = function (inputValue) {
		var inputValueCopy = angular.copy(inputValue)

		var beModified = [];

		//用站存的內容判斷 目前是直接輸入修改面板 還是 查詢帶入 並且比對ID找出要改資料
		if (temp[0]) {
			beModified = $filter('filter')($scope.custData, function (data) {
				return parseInt(data.CUST_ID) == parseInt(temp[0].CUST_ID)
			})
		} else {
			beModified = $filter('filter')($scope.custData, function (data) {
				return parseInt(data.CUST_ID) == parseInt(inputValue.CUST_ID)
			})
		}
		var errorMsg = []
		//若該ID存在 將輸入寫入 否則 放入錯誤訊息
		if (beModified.length != 0) {
			modifyData(beModified[0], inputValue)  
			init()
			temp.length = 0
			alert('修改成功')
		} else {
			errorMsg[0] = '會員編號輸入有誤'
		}

		//若有錯誤訊息 alert
		if (errorMsg.length != 0) {
			angular.forEach(errorMsg, function (data) {
				alert(data)
			})
		}

	}
	//重置
	$scope.reset = function () {
		fillData(temp)
	}
	init()
})