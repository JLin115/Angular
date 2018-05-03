eApp.controller('QUERYRESULTPANEL', function ($scope, $filter) {

    //監聽查詢結果
    $scope.$on('query2', function ($event, inputValue, custData) {
        
        inputValue.ENTRY_DATE = $filter('date')(inputValue.ENTRY_DATE, 'yyyy-MM-dd')
        $scope.inputValue = inputValue
        $scope.custData = custData
        
    })

    //修改面板開啟時 點選id  將會員資料傳到修改面板 
    $scope.toUpdate = function (data) {
        if ($scope.updatePanelSwitch) {
            var temp = [data]
            $scope.$emit('toUpdate', temp)
        }
    }

    //排序部分  
    $scope.booleanChoose = function (input) {
        $scope.reverse = ($scope.orderFlag === input) ? !$scope.reverse : false;
        $scope.orderFlag = input 
    }

    //監聽清除面板資料
    $scope.$on('clear2', function ($event) {
        init()
    })

    var init = function () {
        $scope.inputValue = ''
        $scope.custData = ''
        $scope.orderFlag = 1; 
        $scope.orderFlag = 'CUST_ID'; //default
        $scope.reverse = false;
    }
    init()
})