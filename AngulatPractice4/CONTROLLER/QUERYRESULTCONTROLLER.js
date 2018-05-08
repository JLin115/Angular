eApp.controller('QUERYRESULTPANEL', function ($scope, $filter) {

    //初始化
    var init = function () {
        $scope.inputValue = ''
        $scope.custData = ''
        $scope.orderFlag = 1;
        $scope.orderFlag = 'CUST_ID'; //default
        $scope.reverse = false;
        $scope.pageSize = 10;
        $scope.pageNow = 0;
        $scope.pageTotal = [];
    }

    //監聽查詢結果
    $scope.$on('query2', function ($event, member) {
        //將總頁數歸零
        $scope.pageTotal.length = 0;
        //算出總頁數
        for (var i = 0; i < Math.round(member.length / $scope.pageSize); i++) {
            $scope.pageTotal[i] = i;
        }
        //查詢後將目前頁數導到第一頁
        if (member.length != 0  ) {
            $scope.pageNow = 1;
        }
        $scope.custData = member
    })

    //改變頁數
    $scope.changePage = function (page) {
        console.log(page)
        if (page <= $scope.pageTotal.length && page > 0) {
            $scope.pageNow = parseInt(page)
        }
    }

    //修改面板開啟時 點選id  將會員資料傳到修改面板 
    $scope.toUpdate = function (data) {
        if ($scope.updatePanelSwitch) {
            var dataCopy = angular.copy(data)
            var temp = [dataCopy]
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
    return function (gradTable, data) {
        if (data == '') {
            return ' '
        } else {
            return $filter('filter')(gradTable, data)
        }
    }
})

eApp.filter('memberDEPOSITFilter', function ($filter) {
    return function (data) {
        if (data == '') {
            return ''
        } else {
            return $filter('number')(data, 0)
        }
    }
})

//分頁
eApp.filter('custLimitTo', function ($filter) {
    return function (data, pageNow, pageTotal) {
        if (data.length < 5) {
            return data
        } else {
            if (pageNow < 4) {
                data = $filter('limitTo')(data, 5, 0)
            } else {
                if ((pageTotal.length - pageNow) >= 2) {
                    data = $filter('limitTo')(data, 5, pageNow - 3)
                } else {
                    data = $filter('limitTo')(data, 5, pageTotal.length - 5)
                }
            } 
            return data
        }
    }
})