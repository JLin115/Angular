eApp.controller('QUERYRESULTPANEL', function ($scope) {


	
})


eApp.filter('custGragFilter', function ($rootScope) {
	return function (input) { 
		var res = ''; 
		for (x in  $rootScope.custGrads) { 
			if ($rootScope.custGrads[x].PARAM_CODE == input) { 
				res = $rootScope.custGrads[x].PARAM_NAME;
			}
		}
		return res;
	};
});