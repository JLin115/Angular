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

		//暫時處理 問題: 查詢面板 > 等級選擇後查詢一次 再把他選到 "請選擇" 得到的值會是null
		if (inputValue.VIP_CODE == null) {
			inputValue.VIP_CODE = ''
		}
		if (inputValue.ENTRY_DATE == null) {
			inputValue.ENTRY_DATE = ''
		}


		var member = $filter('filter')($scope.custData, inputValue)

		if (member.length == 0) {
			alert('查無結果')
			$scope.$emit('clear', '')
		} else {
			$scope.$emit('query', member)
		}　
		
		//查詢時 判斷 若 面板有開  會員ID 姓名 都有輸入 將篩選結果傳給 update 
		if (  $scope.updatePanelSwitch &&　member.length == 1) { 
				var dataCopy = angular.copy(member)　　
				$scope.$emit('toUpdate', dataCopy)　
		}
	}

	//清除
	$scope.clear = function () {
		init()
	} 
	 
	init()
})