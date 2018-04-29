eApp.controller('QUERYPANEL', function ($scope,$filter,$rootScope) {
	//$filter('date')($scope.inputValue.ENTRY_DATE, 'yyyy-MM-dd')
	$scope.queryCustomer = function () { 
		 
			$rootScope.queryResult.length=0;
			   
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
			}
		}

		$scope.clear = function () {
			$scope.inputValue = {
				CUST_ID: '',
				ENTRY_DATE: '',
				CUST_NAME: '',
				RESETGRADSELECT: '',
				
			}
			$rootScope.queryResult.length=0;
		}
	})
	
	