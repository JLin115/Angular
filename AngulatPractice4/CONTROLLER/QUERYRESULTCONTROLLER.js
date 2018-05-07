eApp.controller('QUERYRESULTPANEL', function ($scope, $filter) {

    //初始化
    var init = function () {
        $scope.inputValue = ''
        $scope.custData = ''
        $scope.orderFlag = 1;
        $scope.orderFlag = 'CUST_ID'; //default
        $scope.reverse = false;
    }
    //$scope.pageNow;
    //$scope.pageTotal;

    //監聽查詢結果
    $scope.$on('query2', function ($event, queryResult) {
        $scope.custData = queryResult

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

    init()
})

eApp.filter('memberGradFilter', function ($filter) {
    return function (gradTable,data) {
        if (data == '') { 
            return ' '
        } else {   
            return $filter('filter')(gradTable,data)
        } 
    }
})

eApp.filter('memberDEPOSITFilter', function ($filter) {
    return function (data) {
        if (data == '') { 
            return ''
        } else {   
            return $filter('number')(data,0)
        } 
    }
})