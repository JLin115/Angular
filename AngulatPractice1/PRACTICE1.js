eApp.controller('PRACTICE1',
	function ($scope) {
 
		var init = function(){
		$scope.custGrads = [{
				"PARAM_ORDER": "1",
				"PARAM_NAME": "一般",
				"PARAM_CODE": "N"
			},
			{
				"PARAM_ORDER": "2",
				"PARAM_NAME": "黃金",
				"PARAM_CODE": "G"
			},
			{
				"PARAM_ORDER": "3",
				"PARAM_NAME": "鑽石",
				"PARAM_CODE": "D"
			}
		]

		$scope.custData = [{
				"CUST_ID": "001",
				"CUST_NAME": "吉米",
				"VIP_CODE": "N",
				"DEPOSIT": 998,
				"ENTRY_DATE": "2012-01-09"
			},
			{
				"CUST_ID": "002",
				"CUST_NAME": "肯",
				"VIP_CODE": "G",
				"DEPOSIT": 780000,
				"ENTRY_DATE": "2016-09-28"
			},
			{
				"CUST_ID": "003",
				"CUST_NAME": "大衛",
				"VIP_CODE": "N",
				"DEPOSIT": 20000,
				"ENTRY_DATE": "2016-06-12"
			},
			{
				"CUST_ID": "004",
				"CUST_NAME": "亞瑟",
				"VIP_CODE": "G",
				"DEPOSIT": 900000,
				"ENTRY_DATE": "2015-05-25"
			},
			{
				"CUST_ID": "005",
				"CUST_NAME": "艾倫",
				"VIP_CODE": "G",
				"DEPOSIT": 556670,
				"ENTRY_DATE": "2014-12-31"
			},
			{
				"CUST_ID": "006",
				"CUST_NAME": "露比",
				"VIP_CODE": "N",
				"DEPOSIT": 100000,
				"ENTRY_DATE": "2012-03-15"
			},
			{
				"CUST_ID": "007",
				"CUST_NAME": "尚",
				"VIP_CODE": "D",
				"DEPOSIT": 10000000,
				"ENTRY_DATE": "2012-03-15"
			},
			{
				"CUST_ID": "008",
				"CUST_NAME": "安妮",
				"VIP_CODE": "D",
				"DEPOSIT": 190020000,
				"ENTRY_DATE": "2016-09-19"
			},
			{
				"CUST_ID": "009",
				"CUST_NAME": "彼得",
				"VIP_CODE": "N",
				"DEPOSIT": 190080,
				"ENTRY_DATE": "2016-02-11"
			},
			{
				"CUST_ID": "010",
				"CUST_NAME": "湯姆",
				"VIP_CODE": "G",
				"DEPOSIT": 606900,
				"ENTRY_DATE": "2016-06-11"
			},
			{
				"CUST_ID": "011",
				"CUST_NAME": "艾瑞",
				"VIP_CODE": "G",
				"DEPOSIT": 559298,
				"ENTRY_DATE": "2012-01-09"
			},
			{
				"CUST_ID": "012",
				"CUST_NAME": "妮可",
				"VIP_CODE": "G",
				"DEPOSIT": 780000,
				"ENTRY_DATE": "2016-09-28"
			},
			{
				"CUST_ID": "013",
				"CUST_NAME": "老王",
				"VIP_CODE": "N",
				"DEPOSIT": 20000,
				"ENTRY_DATE": "2009-08-22"
			},
			{
				"CUST_ID": "014",
				"CUST_NAME": "小王",
				"VIP_CODE": "G",
				"DEPOSIT": 900000,
				"ENTRY_DATE": "2012-01-25"
			},
			{
				"CUST_ID": "015",
				"CUST_NAME": "德瑞克",
				"VIP_CODE": "N",
				"DEPOSIT": 16670,
				"ENTRY_DATE": "2013-11-30"
			},
			{
				"CUST_ID": "016",
				"CUST_NAME": "尚雷諾",
				"VIP_CODE": "N",
				"DEPOSIT": 300000,
				"ENTRY_DATE": "2012-02-12"
			},
			{
				"CUST_ID": "017",
				"CUST_NAME": "潘恩",
				"VIP_CODE": "D",
				"DEPOSIT": 15500200,
				"ENTRY_DATE": "2012-04-15"
			},
			{
				"CUST_ID": "018",
				"CUST_NAME": "瑪麗",
				"VIP_CODE": "D",
				"DEPOSIT": 390020010,
				"ENTRY_DATE": "2016-09-19"
			},
			{
				"CUST_ID": "019",
				"CUST_NAME": "莫妮卡",
				"VIP_CODE": "N",
				"DEPOSIT": 19080,
				"ENTRY_DATE": "2016-07-11"
			},
			{
				"CUST_ID": "020",
				"CUST_NAME": "傑克斯",
				"VIP_CODE": "N",
				"DEPOSIT": 32110,
				"ENTRY_DATE": "2016-07-11"
			},
			{
				"CUST_ID": "021",
				"CUST_NAME": "艾瑪",
				"VIP_CODE": "N",
				"DEPOSIT": 59298,
				"ENTRY_DATE": "2015-01-09"
			},
			{
				"CUST_ID": "022",
				"CUST_NAME": "華森",
				"VIP_CODE": "D",
				"DEPOSIT": 7800000,
				"ENTRY_DATE": "2015-09-28"
			},
			{
				"CUST_ID": "023",
				"CUST_NAME": "柯比",
				"VIP_CODE": "N",
				"DEPOSIT": 20000,
				"ENTRY_DATE": "2016-08-22"
			},
			{
				"CUST_ID": "024",
				"CUST_NAME": "喬恩",
				"VIP_CODE": "N",
				"DEPOSIT": 44980,
				"ENTRY_DATE": "2014-03-30"
			},
			{
				"CUST_ID": "025",
				"CUST_NAME": "奈德",
				"VIP_CODE": "N",
				"DEPOSIT": 16670,
				"ENTRY_DATE": "2014-03-30"
			},
			{
				"CUST_ID": "026",
				"CUST_NAME": "史特朗",
				"VIP_CODE": "N",
				"DEPOSIT": 3900,
				"ENTRY_DATE": "2014-03-12"
			},
			{
				"CUST_ID": "027",
				"CUST_NAME": "安格斯",
				"VIP_CODE": "G",
				"DEPOSIT": 150200,
				"ENTRY_DATE": "2014-04-15"
			},
			{
				"CUST_ID": "028",
				"CUST_NAME": "琳恩",
				"VIP_CODE": "G",
				"DEPOSIT": 900010,
				"ENTRY_DATE": "2014-04-19"
			},
			{
				"CUST_ID": "029",
				"CUST_NAME": "卡夢",
				"VIP_CODE": "G",
				"DEPOSIT": 180680,
				"ENTRY_DATE": "2014-04-20"
			},
			{
				"CUST_ID": "030",
				"CUST_NAME": "羅素",
				"VIP_CODE": "N",
				"DEPOSIT": 92110,
				"ENTRY_DATE": "2014-05-11"
			}
		]
	}
		 
		//clear all input
		$scope.clear = function () {
			if (!angular.isUndefined($scope.inputValue.id) | !angular.isUndefined($scope.inputValue.name)) {
		 
				if ($scope.inputValue.id != ''  | $scope.inputValue.name!= ''  ) {
					$scope.inputValue.id=''
					$scope.inputValue.name='' 
					alert('已經清除輸入') 
				}
			}
		}

		//show id input and name input value
		$scope.query = function () {
			/*if ($scope.inputValue.id  != '' || $scope.inputValue.name.trim() != '') { 
			}*/
			if(angular.isUndefined($scope.inputValue.name)){
				$scope.inputValue.name='' 
			}
			if(angular.isUndefined($scope.inputValue.id)){
				$scope.inputValue.id='' 
			} 
			alert('查詢條件：' + $scope.inputValue.id + " " + $scope.inputValue.name + "!") 
		}
		init();
	}
	
);