eApp.controller('PRACTICE',
	function($scope) {
		 
	$scope.custDatas= 
	[
	{A:"王大明", B:"市話：022345555, 地址：新北市中和區景平路188號3樓,手機：0988333223"},
	{A:"張小小", B:"市話：034556665,手機：0925988677, 地址：新北市板橋區文化路104號1樓"},
	{A:"吳天", B:"手機：0958120211,市話：043454000, 地址：台北市中山區中山北路二段100號2-2樓"},
	{A:"歐陽信教", B:"市話：032445567,手機：0980003203, 地址：台北市文山區興隆路99號"},
	{A:"林木森", B:"手機：0918333543,市話：022742055, 地址：新北市淡水區淡金街9號"}
	]
    } 
); 

//format customer name
eApp.filter('formatName',function(){
	return function(item){
		var name='';  
		if(item.length <= 3){
			name = item[0] + '*' + '*';
		}else{
			name = item[0] + item[1] + '*' + '*';
		}
		return name ;
	}
}) 

//format customer personal data
eApp.filter('formatData',function(){
	return function(item){
		item = item.split(','); 
		for(x in item){ 
			if(item[x].trim().startsWith("市話：")){
				item[x] = item[x].substring(0,8)+'****' 
			}
			if(item[x].trim().startsWith("手機：")){
				item[x] = item[x].substring(0,7)+'******' 
			}
			if(item[x].trim().startsWith("地址：")){
				item[x] = item[x].substring(0,10)+'***' 
			}
		} 
		return item[0]+'<br>'+item[1]+'<br>'+item[2]  ;
	}
})

//trust Html filter
eApp.filter('trustAsHtml',['$sce', function($sce) {
    return function(text) {
      return $sce.trustAsHtml(text);
    };
}]);
