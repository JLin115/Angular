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
		$scope.inputValue.ENTRY_DATE = new Date(data[0].ENTRY_DATE)
		$scope.inputValue.CUST_NAME = data[0].CUST_NAME
		$scope.inputValue.VIP_CODE = data[0].VIP_CODE=='' ? '' :$filter('filter')($scope.custGrads, data[0].VIP_CODE)[0]
		$scope.inputValue.DEPOSIT = data[0].DEPOSIT
	}

	//將newData放入oldData
	var modifyData = function (oldData, newData) {
		oldData.CUST_NAME = newData.CUST_NAME
		oldData.DEPOSIT = isNaN(parseInt(newData.DEPOSIT)) ? '' : newData.DEPOSIT
		oldData.ENTRY_DATE = $filter('date')(newData.ENTRY_DATE, 'yyyy-MM-dd')
		oldData.VIP_CODE = !newData.VIP_CODE ? "" : newData.VIP_CODE
	} 

	//監聽查詢後置入修改欄位
	$scope.$on('update', function ($event, memberdata) {
		if (memberdata.length == 1) {
			temp = memberdata
			fillData(memberdata)  
		}
	})
 
	//修改資料
	$scope.updateCustomer = function (inputValue) {

		//資料是直接在修改面板填入
		if (temp.length == 0) {
			//判斷輸入的資料是否存在表內
			var confirmInput = $filter('filter')($scope.custData, function (item) {
				return parseInt(inputValue.CUST_ID) == parseInt(item.CUST_ID)
			});
			if (confirmInput.length != 0) {
				var errorMsg = [];
				//找出要修改的資料
				angular.forEach($scope.custData, function (data) {
					if (parseInt(inputValue.CUST_ID) == parseInt(data.CUST_ID)) {
						//存款輸入有誤
						var re = /\D+/
						if (inputValue.DEPOSIT &&
							(re.test(inputValue.DEPOSIT) || (parseInt(inputValue.DEPOSIT) < 0))) {
							errorMsg[errorMsg.length] = "存款輸入有誤"
						}

						//若無錯誤將值寫入
						if (errorMsg.length == 0) {
							modifyData(data, inputValue)
							temp[0] = inputValue
							alert('修改成功!')
							console.log(temp[0])
						} else {
							//若錯誤秀出錯誤訊息
							angular.forEach(errorMsg, function (msg) {
								alert(msg)
							})
						}
					}
				});
			} else {
				alert('請確認客戶編號')
			}
		} else { //資料是由 查詢 或是 查詢結果帶入的
			var confirmInput = $filter('filter')($scope.custData, temp[0])
			modifyData(confirmInput[0], inputValue)
			alert('修改成功!')
		}
	}


	$scope.reset = function () { 
 		fillData(temp)
	}

	init()
})