eApp.controller('QUERYRESULTPANEL', function ($scope) {

    var init = function () {
        $scope.inputValue = '';
        $scope.custData = '';
    }

    $scope.$on('query2', function ($event, inputValue, custData ) {
            $scope.inputValue = inputValue;
            $scope.custData = custData;
    })
    init();
})