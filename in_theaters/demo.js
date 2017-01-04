(function (anguler) {
'use strict';


angular.module('movieCat.movie_list', ['ngRoute','movieCat.servision.http'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:moviecate/:page', {
    templateUrl: 'in_theaters/view.html',
    controller: 'movieCtrl'
  });
}])

.controller('movieCtrl',['$scope' ,'$route','$routeParams','HttpService','AppConfig', function ($scope,$route,$routeParams,HttpService,AppConfig) {
			var count=5;     //每页有多少条
			var page=parseInt($routeParams.page);    //页码
			var start=(page-1)*count;    //当前页从哪里开始

	//控制器分两步，1.设计暴露数据  2.设计暴露的行为
	//	因为是异步请求，angular有可能先于请求完成渲染，所以需要在请求前在界面留坑
	//	暴露数据
		$scope.subjects = [] ;
		$scope.errors= '';
		$scope.title='loading...';
		$scope.totalcount=0;
		$scope.loading=true;
		$scope.totalPages=0;
		$scope.currentPage = page;
		$scope.categss = false;     //徽章控制器
		HttpService.jsonp(AppConfig.listApiAddress+$routeParams.moviecate,
			//$routeParams的数据来源：1.路由匹配出来的  2.？参数,此时q属于？
			{ start:start,count:AppConfig.pageSize,q:$routeParams.q },
			function(data){
				if($routeParams.moviecate == 'coming_soon'){
					$scope.categss = true;
				}
				$scope.subjects = data.subjects;
				$scope.totalcount=data.total;
				$scope.totalPages=Math.ceil($scope.totalcount/AppConfig.pageSize);
				$scope.loading=false;
				$scope.title=data.title;
				$scope.$apply();
		});

		//暴露行为
		$scope.go= function (page) {
			//传过来第几页我就跳第几页去
			//需要验证页数的合法范围
			if(page >= 1 && page <=$scope.totalPages){

				//$route.updateParams（{？：！}）更新路由上？值，把变化的！给？{？：！}可以按照自己需要设定条件
				$route.updateParams({page:page});
			}
		};

























		//开发过程中绝对路径可能会发生改变，所以尽量不要用绝对路径
		//$http.get('/angular/shibai1/app/in_theaters/data.json').then(function (ero) {
		//	if(ero.status == 200){
		//		$scope.subjects = ero.data.subjects;
		//		console.log(data);
		//	}
		//}, function (err) {
		//	$scope.errors = '请求失败'+err.statusText;
		//	console.log(err);
		//})

		// var doubanApiAddress = 'http://api.douban.com/v2/movie/in_theaters';
		//var aa=Math.random().toString().replace('.','');
		// // 测试$http服务
		// // 在Angular中使用JSONP的方式做跨域请求，
		// // 就必须给当前地址加上一个参数 callback=JSON_CALLBACK
		// $http.jsonp(doubanApiAddress+'?callback=JSON_CALLBACK'+aa).then(function(ero) {
		//   // 此处代码是在异步请求完成过后才执行（需要等一段时间）
		//   if (ero.status == 200) {
		//	 $scope.subjects = ero.data.subjects;
		//   } else {
		//	 $scope.errors = '获取数据错误，错误信息：' + ero.statusText;
		//   }
		// }, function(err) {
		//   console.log(err);
		//   $scope.errors = '获取数据错误，错误信息：' + err.statusText;
		// });

	}]);
})(angular);
