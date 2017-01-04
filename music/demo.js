/**
 * Created by htp on 2016/10/28.
 */
(function (anguler) {
	'use strict';


	angular.module('movieCat.music', ['ngRoute','movieCat.servision.http'])

		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/music', {
				templateUrl: 'music/view.html',
				controller: 'musicCtrl'
			});
		}])

		.controller('musicCtrl',['$scope' ,'$route','$routeParams','HttpService','AppConfig', function ($scope,$route,$routeParams,HttpService,AppConfig) {
			$scope.loads=false;

			$scope.palyerss= function () {
					$scope.loads=!$scope.loads;
					console.log($scope.loads);
			};

			$scope.ups = 5482 ;
			$scope.thumbsup = function(){
				$scope.ups++;
			}

			$scope.downs=255 ;
			$scope.ups = 5482 ;
			$scope.thumbsdowns = function(){
				$scope.downs++;
			}

		}]);
})(angular);
