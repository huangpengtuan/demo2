'use strict';

// Declare app level module which depends on views, and components
angular.module('movieCat', [
  'ngRoute',
  //'movieCat.in_theaters',
  //'movieCat.coming_soon',
  //'movieCat.top100',
	'movieCat.music',
	'movieCat.books',
	'movieCat.joke',
	'movieCat.help',
	'movieCat.movieDetail',
	'movieCat.movie_list'

])
	.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}])
	//建立恒量公共类,为模块定义一些常量
	.constant('AppConfig',{
		pageSize: 6,
		listApiAddress: 'http://api.douban.com/v2/movie/',
		detailApiAddress: 'http://api.douban.com/v2/movie/subject/'
	})

	//建立一个公共的控制器控制公共局域
	.controller('navController',['$scope','$location', function ($scope, $location) {

		//右侧三个按钮焦点的跟随
		//因为watch只能监视$scope的对象成员，所以要把$location给$scope
		$scope.$location = $location;
		$scope.type='';
		$scope.$watch('$location.path()', function (now) {
			if(now.startsWith('/in_theaters')){
				$scope.type='in_theaters';
			}else if(now.startsWith('/coming_soon')){
				$scope.type='coming_soon';
			}else if(now.startsWith('/top250')){
				$scope.type='top250';
			}
		})

	}])
	//搜索框控制器
	.controller('SearchController',['$scope','$route','AppConfig', '$location','$routeParams',function ($scope, $route,AppConfig,$location,$routeParams) {
		$scope.$location = $location;
		$scope.input = '';


		$scope.search = function () {
			//为了解决在电影详情界面不能使用搜索功能的bug
			$scope.$watch('$location.path()', function (now,old) {
				if(old.startsWith('/detail')){
					$location.url('/search/1?q='+$scope.input);
				}
			});
			//$route.updateParams（{？：！}）更新路由上？值，把变化的！给？{？：！}可以按照自己需要设定条件
			$route.updateParams( {moviecate:'search',q : $scope.input});

		}
	}])




