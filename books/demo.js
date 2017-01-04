/**
 * Created by htp on 2016/10/28.
 */
(function (anguler) {
	'use strict';


	angular.module('movieCat.books', ['ngRoute','movieCat.servision.http'])

		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/books', {
				templateUrl: 'books/view.html',
				controller: 'booksCtrl'
			});
		}])

		.controller('booksCtrl',['$scope' ,'$route','$http','$routeParams','HttpService','AppConfig', function ($scope,$route,$http,$routeParams,HttpService,AppConfig) {

			$scope.loading = true ;
			$scope.books = [];


			$http.get('../app/books/booksText.json').then(function (ero) {
				if(ero.status == 200){
					$scope.books = ero.data.books;
					$scope.loading = false ;
					$('.masonry').imagesLoaded(function() {
						$('.masonry').masonry({
							itemSelector: '.item',
							//isFitWidth: true,//// 是否可调整大小 Boolean
							isRTL:false ////使用从右到左的布局 Boolean
						});
					});

					$scope.$apply();
				}
			}, function (err) {
				$scope.errors = '请求失败'+err.statusText;

			});



		}]);
})(angular);
