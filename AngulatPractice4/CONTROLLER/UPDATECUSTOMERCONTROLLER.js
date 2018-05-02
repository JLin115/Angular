eApp.controller('UPDATEPANEL', function ($scope, $filter) {

	var init = function () {
		$scope.inputValue = {
			CUST_ID: '',
			ENTRY_DATE: '',
			CUST_NAME: '',
			VIP_CODE: '',
			DEPOSIT: ''
		}
		$scope.$emit('clear','') 
	} 

	$scope.updateCustomer = function (inputValue) {
		//debugger 
		//判斷輸入的資料是否存在表內
		var member = $filter('filter')($scope.custData, function (item) {
			return parseInt(inputValue.CUST_ID) == parseInt(item.CUST_ID) &
				inputValue.CUST_NAME == item.CUST_NAME
		}); 
		if (member.length != 0) {
			var errorMsg = []; 
			angular.forEach($scope.custData, function (data) {
				//找出要修改的資料
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
							data.DEPOSIT = inputValue.DEPOSIT
						}
						if (inputValue.ENTRY_DATE) {
							data.ENTRY_DATE = $filter('date')(inputValue.ENTRY_DATE, 'yyyy-MM-dd')
						}
						if (inputValue.VIP_CODE.PARAM_NAME) {
							data.VIP_CODE = inputValue.VIP_CODE.PARAM_NAME
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
		} else {
			alert('請確認客戶編號及名稱')
		} 
		console.log($scope.custData) 
	}



	$scope.clear = function () {
		init()
	} 
	init()
})