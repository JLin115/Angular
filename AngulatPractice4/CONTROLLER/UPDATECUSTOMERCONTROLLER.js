eApp.controller('UPDATEPANEL', function ($scope) {

 

	$scope.updateCustomer = function () { 
		$scope.test();
		$scope.$on("custData",function(event,data){
			$scope.data=data 
		})

	}
	$scope.clear = function () {
		$scope.inputValue = {
			CUST_ID: '',
			ENTRY_DATE: '',
			CUST_NAME: '',
			VIP_CODE: ''
		}
	} 
})

 