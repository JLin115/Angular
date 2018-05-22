eApp.controller('PRACTICE',
	function ($scope, $filter) {

		$scope.data = [{
				A: 'KENT',
				B: '小朋友',
				date: ['2017-05-12', '2016-05-12', '2016-05-12', '2017-05-12', '2018-05-12']
			},
			{
				A: 'JIMMY',
				B: '大朋友',
				date: ['2017-04-12', '2017-03-12', '2016-02-12', '2018-01-12', '2018-03-12']
			},
			{
				A: 'TOM',
				B: '普通朋友',
				date: ['2015-11-12', '2016-10-12', '2016-9-12', '2017-10-12']
			},
			{
				A: 'ALLEN',
				B: '超級好朋友',
				date: ['2016-01-12', '2015-03-12', '2017-04-12', '2018-04-12', '2018-07-12']
			},
			{
				A: 'SEAN',
				B: '小朋友',
				date: ['2017-02-12', '2016-01-12', '2017-09-12', '2016-12-12', '2018-3-12']
			},
			{
				A: 'DAVID',
				B: '大朋友',
				date: ['2017-03-12', '2017-05-12', '2016-04-12', '2017-07-12', '2018-01-12']
			},
			{
				A: 'ERIC',
				B: '普通朋友',
				date: ['2016-02-12', '2017-04-12', '2016-01-12', '2018-7-12']
			},
			{
				A: 'MOMO',
				B: '普通好朋友',
				date: ['2017-05-12', '2018-05-12', '2018-04-12', '2017-05-12', '2016-05-12']
			},
			{
				A: 'MIMI',
				B: '普通朋友',
				date: ['2016-12-12', '2017-02-12', '2018-03-12']
			},
			{
				A: 'CATHY',
				B: '超級好朋友',
				date: ['2017-12-12', '2017-11-12', '2018-1-12']
			}
		]


		$scope.getcol = function (min, max) {
			let set = new Set();
			if (min && max) {
				min = $filter('date')(min, 'yyyy-MM').split('-')
				max = $filter('date')(max, 'yyyy-MM').split('-')
				while (min != max) {
					if (max < min) {
						break;
					} //年份相同 比較月份
					if (max[0] == min[0]) {
						if (max[1] > min[1]) {
							set.add(max[0] + '-' + (max[1].toString().length == 1 ? ('0' + max[1]) : max[1]))
							max[1] = parseInt(max[1]) - 1;
						} else {
							set.add(max[0] + '-' + (max[1].toString().length == 1 ? ('0' + max[1]) : max[1]))
							break;
						}
					} //年份不同 減月份 直到年份相同
					if (max[0] > min[0]) {
						if (max[1] == 1) {
							set.add(max[0] + '-' + (max[1].toString().length == 1 ? ('0' + max[1]) : max[1]))
							max[0] = parseInt(max[0]) - 1;
							max[1] = 12;
						} else {
							set.add(max[0] + '-' + (max[1].toString().length == 1 ? ('0' + max[1]) : max[1]))
							max[1] = parseInt(max[1]) - 1;
						}
					}
				}
			}
			$scope.res = angular.copy(Array.from(set).sort())
		}
	});

eApp.filter('dateFilter', function () {
	return function (z, y) {
		let i = 0;
		angular.forEach(y, function (value) {
			if (value.substring(0, 7) == z.substring(0, 7)) {
				i++;
			}
		})
		return i.toString();
	}
})