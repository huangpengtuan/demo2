/**
 * Created by htp on 2016/10/28.
 */
(function (anguler) {
	'use strict';


	angular.module('movieCat.movieDetail', ['ngRoute','movieCat.servision.http'])

		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/detail/:id', {
				templateUrl: 'movie_detail/view.html',
				controller: 'movieDetailCtrl'
			});
		}])

		.controller('movieDetailCtrl',['$scope' ,'$route','$routeParams','HttpService','AppConfig', function ($scope,$route,$routeParams,HttpService,AppConfig) {
			$scope.movie = [];
			$scope.errors= '';

			$scope.loading=true;

			var id = $routeParams.id;
			HttpService.jsonp(AppConfig.detailApiAddress+id,
				{},
				function (data) {
					$scope.movie =data;
					$scope.loading=false;

					$scope.$apply();
			});

		}]);
})(angular);
