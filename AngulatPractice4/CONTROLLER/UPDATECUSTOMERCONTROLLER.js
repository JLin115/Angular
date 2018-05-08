eApp.controller('UPDATEPANEL', function ($scope, $filter) {

	var init = function () {
		$scope.inputValue = {
			CUST_ID: '',
			ENTRY_DATE: '',
			CUST_NAME: '',
			VIP_CODE: '',
			DEPOSIT: ''
		}
	}
	var temp = [];

	//將資料顯示到前端
	var fillData = function (data) {
		$scope.inputValue.CUST_ID = data[0].CUST_ID
		$scope.inputValue.ENTRY_DATE = !data[0].ENTRY_DATE ? '' : new Date(data[0].ENTRY_DATE)
		$scope.inputValue.CUST_NAME = data[0].CUST_NAME
		$scope.inputValue.VIP_CODE = !data[0].VIP_CODE ? '' : $filter('filter')($scope.custGrads, data[0].VIP_CODE)[0].PARAM_CODE
		$scope.inputValue.DEPOSIT = data[0].DEPOSIT
	}

	//將newData放入oldData
	var modifyData = function (oldData, newData) {
		oldData.CUST_NAME = newData.CUST_NAME
		oldData.DEPOSIT = isNaN(parseInt(newData.DEPOSIT)) ? '' : newData.DEPOSIT
		oldData.ENTRY_DATE =!newData.ENTRY_DATE ? '': $filter('date')(newData.ENTRY_DATE, 'yyyy-MM-dd')
		oldData.VIP_CODE = !newData.VIP_CODE ? "" : newData.VIP_CODE
	}

	//查詢後置入修改欄位
	$scope.$on('update', function ($event, memberdata) {
		if (memberdata.length == 1) {
			temp = memberdata;
			fillData(memberdata)
		}
	})

	//修改資料
	$scope.updateCustomer = function (inputValue) {
		var inputValueCopy = angular.copy(inputValue)
		//非從 查詢面板或查詢結果帶入
		var errorMsg = []
		angular.forEach($scope.custData, function (data) {

			if (!temp[0]) {
				if (parseInt(data.CUST_ID) == parseInt(inputValueCopy.CUST_ID)) {
					modifyData(data, inputValue)
				} else {
					errorMsg[errorMsg.length] = '會員編號輸入有誤'
				}
			} else {
				if (parseInt(temp[0].CUST_ID) == parseInt(data.CUST_ID)) {
					modifyData(data, inputValue)
					temp[0] = angular.copy(data)
					console.log(temp[0])
				} 
			}  
		})

	}


	$scope.reset = function () {
		fillData(temp)
	}
	init()
})