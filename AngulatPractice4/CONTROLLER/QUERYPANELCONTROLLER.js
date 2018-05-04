eApp.controller('QUERYPANEL', function ($scope, $filter, $rootScope) {

	//查詢會員資料
	$scope.queryCustomer = function () {
		/*	$rootScope.queryResult.length=0; 
			var formatDate = $filter('date')( $scope.inputValue.ENTRY_DATE, "yyyy-MM-dd"); 
			for(var i = 0  ;  i < $scope.custData.length ; i++){  
				if(angular.isUndefined($scope.inputValue.CUST_ID ) || $scope.inputValue.CUST_ID == ''  || $scope.inputValue.CUST_ID == $scope.custData[i].CUST_ID){ 
					if(angular.isUndefined($scope.inputValue.CUST_NAME ) || $scope.inputValue.CUST_NAME == ''  || $scope.inputValue.CUST_NAME == $scope.custData[i].CUST_NAME){
						if($scope.inputValue.RESETGRADSELECT =='' ||$scope.inputValue.RESETGRADSELECT == $scope.custData[i].VIP_CODE){
							if(!formatDate || angular.isUndefined(formatDate) || formatDate == ''  || formatDate == $scope.custData[i].ENTRY_DATE){
								$rootScope.queryResult[$rootScope.queryResult.length] = $scope.custData[i];
							}
						}
					}
				} 
			}*/
		var inputValue = angular.copy($scope.inputValue)

		//暫時處理 問題: 等級選擇後查詢一次 再把他選到 "請選擇" 得到的值會是null
		if (inputValue.VIP_CODE == null) {
			inputValue.VIP_CODE = ''
		}
		if (inputValue.ENTRY_DATE == null) {
			inputValue.ENTRY_DATE = ''
		}

		var member = $filter('filter')($scope.custData, inputValue)

		if (member.length == 0) {
			alert('查無結果')
			$scope.$emit('clear', '')
		} else {
			$scope.$emit('query', inputValue)
		}
		 
		//查詢時 判斷 若 面板有開  會員ID 姓名 都有輸入 將篩選結果傳給 update 
		if (inputValue.CUST_NAME && inputValue.CUST_ID && $scope.updatePanelSwitch) { 
			if (member.length == 1) {
				$scope.$emit('toUpdate', member)
			}
		}
	}


	$scope.clear = function () {
		$scope.inputValue = {
			CUST_ID: '',
			ENTRY_DATE: '',
			CUST_NAME: '',
			VIP_CODE: '',
		}
		$scope.$emit('clear', '')
	}
})