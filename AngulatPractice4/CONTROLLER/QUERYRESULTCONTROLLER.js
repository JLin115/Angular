eApp.controller('QUERYRESULTPANEL', function ($scope) {

    $scope.$on('query2',function($event, inputValue,custData){ 
        $scope.inputValue=inputValue
        $scope.custData=custData
    }) 
    $scope.$on('clear2',function($event){ 
        init()
    })

    var init =  function () {
        $scope.inputValue=''
        $scope.custData=''
    }

    
    init() 
})


 