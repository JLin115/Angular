eApp.controller('CONTROLPANEL', function ($scope, $filter, $rootScope) {
	$scope.queryPanel = function (queryPanelValue) {
		$scope.$emit('queryPanelValue', queryPanelValue)
	}
	$scope.updatePanel = function (updatePanelValue) {
		$scope.$emit('updatePanelValue', updatePanelValue)
	}
})