/**
 * Created by htp on 2016/10/28.
 */
(function (anguler) {
	'use strict';


	angular.module('movieCat.joke', ['ngRoute','movieCat.servision.http'])

		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/joke', {
				templateUrl: 'joke/view.html',
				controller: 'jokeCtrl'
			});
		}])

		.controller('jokeCtrl',['$scope' ,'$route','$http','$routeParams','HttpService','AppConfig', function ($scope,$route,$http,$routeParams,HttpService,AppConfig) {



			$scope.loading = true ;
			$scope.jokes = [];


			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				direction: 'vertical',
				slidesPerView: 1,
				paginationClickable: true,
				spaceBetween: 30,
				mousewheelControl: true,
				loop : true,

				autoplay: 4000,
				autoplayDisableOnInteraction: false,

			});





		}]);
})(angular);
