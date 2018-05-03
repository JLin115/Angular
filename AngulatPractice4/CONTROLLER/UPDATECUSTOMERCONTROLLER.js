eApp.controller('UPDATEPANEL', function ($scope, $filter) {

	var init = function () {
		$scope.inputValue = {
			CUST_ID: '',
			ENTRY_DATE: '',
			CUST_NAME: '',
			VIP_CODE: '',
			DEPOSIT: ''
		}
		$scope.$emit('clear', '')
	}

	//查詢後置入修改欄位
	$scope.$on('update', function ($event, memberdata) {
		if (memberdata.length == 1) {
			$scope.inputValue.CUST_ID = memberdata[0].CUST_ID
			$scope.inputValue.ENTRY_DATE = new Date(memberdata[0].ENTRY_DATE)
			$scope.inputValue.CUST_NAME = memberdata[0].CUST_NAME
			$scope.inputValue.VIP_CODE = $filter('filter')($scope.custGrads, memberdata[0].VIP_CODE)[0]
			$scope.inputValue.DEPOSIT = memberdata[0].DEPOSIT
		}
	})

	//修改資料
	$scope.updateCustomer = function (inputValue) {
		//判斷輸入的資料是否存在表內
		var member = $filter('filter')($scope.custData, function (item) {
			return parseInt(inputValue.CUST_ID) == parseInt(item.CUST_ID) &
				inputValue.CUST_NAME == item.CUST_NAME
		});
		if (member.length != 0) {
			var errorMsg = []; 
			if (inputValue.ENTRY_DATE || inputValue.DEPOSIT || inputValue.VIP_CODE) {
				//找出要修改的資料
				angular.forEach($scope.custData, function (data) {
					if (parseInt(inputValue.CUST_ID) == parseInt(data.CUST_ID) &&
						inputValue.CUST_NAME == data.CUST_NAME
					) {
						//存款輸入有誤
						if (inputValue.DEPOSIT &&
							(isNaN(parseInt(inputValue.DEPOSIT)) || (parseInt(inputValue.DEPOSIT) < 0))) {
							errorMsg[errorMsg.length] = "存款輸入有誤"
						}
						//若無錯誤將值寫入
						if (errorMsg.length == 0) {
							if (inputValue.DEPOSIT) {
								data.DEPOSIT = parseInt(inputValue.DEPOSIT)
							}
							if (inputValue.ENTRY_DATE) {
								data.ENTRY_DATE = $filter('date')(inputValue.ENTRY_DATE, 'yyyy-MM-dd')
							}
							if (inputValue.VIP_CODE.PARAM_NAME) {
								data.VIP_CODE = inputValue.VIP_CODE.PARAM_CODE
							}
							alert('修改成功!')
						} else {
							//若錯誤秀出錯誤訊息
							angular.forEach(errorMsg, function (msg) {
								alert(msg)
							})
						}
					}
				});
				console.log($scope.custData)
			} else {
				alert('請輸入要修改的內容')
			}
		} else {
			alert('請確認客戶編號及名稱')
		}
	}


	$scope.clear = function () {
		init()
	}
	init()
})