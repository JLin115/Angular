eApp.controller('PRACTICE1',
	function ($scope) {
		//clear all input
		$scope.clear = function () {
			if (!angular.isUndefined($scope.inputValue.id) | !angular.isUndefined($scope.inputValue.name)) {

				if ($scope.inputValue.id != '' | $scope.inputValue.name != '') {
					$scope.inputValue.id = ''
					$scope.inputValue.name = ''
					alert('已經清除輸入')
				}
			}
		}

		//show id input and name input value
		$scope.query = function () {
			if (angular.isUndefined($scope.inputValue.name)) {
				$scope.inputValue.name = ''
			}
			if (angular.isUndefined($scope.inputValue.id)) {
				$scope.inputValue.id = ''
			}
			alert('查詢條件：' + $scope.inputValue.id + " " + $scope.inputValue.name + "!")
		} 
	} 
);