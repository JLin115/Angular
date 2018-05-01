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


	$scope.updateCustomer = function (inputValue) {
		debugger

		var member = $filter('filter')($scope.custData, function (item) {
			return inputValue.CUST_ID == item.CUST_ID &
				inputValue.CUST_NAME == item.CUST_NAME
		});


		if (member.length != 0) {
			angular.forEach($scope.custData, function(data){  
				 if(inputValue.CUST_ID == data.CUST_ID &
					inputValue.CUST_NAME == data.CUST_NAME){
						data.DEPOSIT = 	inputValue.DEPOSIT 
					}
			});  
		} else {
			alert('Confirm your input')
		}

		console.log($scope.custData)


	}



	$scope.clear = function () {
		init()
	}


	init()
})