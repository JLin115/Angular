eApp.controller('INDEX',
	function ($scope, $http) { 

		$http.get('custData.json').success(function (data) {　　　　
			$scope.custData = data
		}).
		error(function (data) {
			alert('error')
		});
 
	});