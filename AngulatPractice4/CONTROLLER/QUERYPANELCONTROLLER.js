eApp.controller('QUERYPANEL', function ($scope, $filter, $rootScope) {

	//初始化
	var init =  function(){
		$scope.inputValue = {
			CUST_ID: '',
			ENTRY_DATE: '',
			CUST_NAME: '',
			VIP_CODE: '',
		} 

	}

	//查詢會員資料
	$scope.queryCustomer = function () { 
		var inputValue = angular.copy($scope.inputValue)
		inputValue.ENTRY_DATE = $filter('date')(inputValue.ENTRY_DATE , 'yyyy-MM-dd')  
		//暫時處理 問題: 查詢面板 > 等級選擇後查詢一次 再把他選到 "請選擇" 得到的值會是null
		if (inputValue.VIP_CODE == null) {
			inputValue.VIP_CODE = ''
		}
		if (inputValue.ENTRY_DATE == null) {
			inputValue.ENTRY_DATE = ''
		} 
		//找出資料
		var member = $filter('filter')($scope.custData, inputValue) 
		
		
		if (member.length == 0) {
			alert('查無結果')
			$scope.$emit('clear', '')
		} else {
			$scope.$emit('query', member)
		}　
		
	 
	}

	//清除
	$scope.clear = function () {
		init()
	} 
	 
	init()
})