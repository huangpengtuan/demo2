/**
 * Created by htp on 2016/10/28.
 */
(function (anguler) {
	'use strict';


	angular.module('movieCat.help', ['ngRoute','movieCat.servision.http'])

		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/help', {
				templateUrl: 'help/view.html',
				controller: 'helpCtrl'
			});
		}])

		.controller('helpCtrl',['$scope' ,'$route','$http','$routeParams','HttpService','AppConfig', function ($scope,$route,$http,$routeParams,HttpService,AppConfig) {
			var widths=document.getElementById('zhoushi').offsetWidth;
			var heights=document.getElementById('zhoushi').offsetHeight;
			var stage=new Konva.Stage({
				container:"container",
				width:widths,
				height:heights,
			});
			var canx=stage.width()/2;
			var cany=stage.height()/2;

			console.log(widths);
			console.log(heights);

			var backgroundlayer=new Konva.Layer();
			stage.add(backgroundlayer);
			var animatelayer=new Konva.Layer();
			stage.add(animatelayer);

			var group1=new Konva.Group({
				x:canx,
				y:cany,
			});

			var group2=new Konva.Group({
				x:canx,
				y:cany,
			});
			var group3=new Konva.Group({
				x:canx,
				y:cany,
			});

			var bg_circletext1=new circletext({
				x: 0,
				y: 0,
				innerRadius: 132 / 2,
				outerRadius: 75,
				innerstyle: '#525A82',
				outerstyle: '#E1E1E1',
				text: 'WEB全栈',
			});
			bg_circletext1.addtogrouporlayer(group1);

			var innerRadius=130;
			var outerRadius=220;
			var bg_circletext2=new Konva.Circle({
				x:0,
				y:0,
				Radius:innerRadius,
				dash: [10,4], //设置虚线，10实线， 4像素空
				strokeWidth:"4",
				stroke: '#ccc',
			});
			group1.add(bg_circletext2);

			var bg_circletext3=new Konva.Circle({
				x:0,
				y:0,
				Radius:220,
				dash: [10,4], //设置虚线，10实线， 4像素空
				strokeWidth:"4",
				stroke: '#ccc',
			});
			group1.add(bg_circletext3);

			var bg_circletext4=new Konva.Circle({
				x:0,
				y:0,
				Radius:350,
				dash: [10,4], //设置虚线，10实线， 4像素空
				strokeWidth:"4",
				stroke: '#ccc',
			});
			group1.add(bg_circletext4);

			backgroundlayer.add(group1);
			backgroundlayer.draw();

			var  animate_circletext1=new circletext({
				x:innerRadius*Math.cos(60*Math.PI/180),
				y:innerRadius*Math.sin(60*Math.PI/180),
				innerRadius: 30,
				outerRadius: 37,
				innerstyle: '#F8D5DB',
				outerstyle: '#EBEBEB',
				text: 'CSS3',
			});
			animate_circletext1.addtogrouporlayer(group2);


			var  animate_circletext2=new circletext({
				x:innerRadius*Math.cos(210*Math.PI/180),
				y:innerRadius*Math.sin(210*Math.PI/180),
				innerRadius: 30,
				outerRadius: 33,
				innerstyle: '#FCB430',
				outerstyle: '#EBEBEB',
				text: 'HTML 5',
			});
			animate_circletext2.addtogrouporlayer(group2);
			animatelayer.add(group2);

			var  animate_circletext3=new circletext({
				x:outerRadius*Math.cos(250*Math.PI/180),
				y:outerRadius*Math.sin(250*Math.PI/180),
				innerRadius: 40,
				outerRadius: 46,
				innerstyle: '#A4C9F6',
				outerstyle: '#EBEBEB',
				text: 'JS',
			});
			animate_circletext3.addtogrouporlayer(group3);
			animatelayer.add(group3);

			var  animate_circletext3_1=new circletext({
				x:outerRadius*Math.cos(300*Math.PI/180),
				y:outerRadius*Math.sin(300*Math.PI/180),
				innerRadius: 25,
				outerRadius: 30,
				innerstyle: '#5bc0de',
				outerstyle: '#EBEBEB',
				text: 'jquery',
			});
			animate_circletext3_1.addtogrouporlayer(group3);
			animatelayer.add(group3);

			var  animate_circletext4=new circletext({
				x:350*Math.cos(180*Math.PI/180),
				y:350*Math.sin(180*Math.PI/180),
				innerRadius: 30,
				outerRadius: 40,
				innerstyle: '#d9534f',
				outerstyle: '#EBEBEB',
				text: 'Angular',
			});
			animate_circletext4.addtogrouporlayer(group3);
			animatelayer.add(group3);


			var  animate_circletext5=new circletext({
				x:350*Math.cos(360*Math.PI/180),
				y:350*Math.sin(360*Math.PI/180),
				innerRadius: 40,
				outerRadius:42,
				innerstyle: '#5cb85c',
				outerstyle: '#EBEBEB',
				text: 'Bootstrap',
			});
			animate_circletext5.addtogrouporlayer(group3);
			animatelayer.add(group3);


			animatelayer.draw();

			var animate=new Konva.Animation(function (frames) {
				group2.rotate(1);
				group2.getChildren().each(function(item,index){
					item.rotate(-1);
				});

				group3.rotate(-0.5);
				group3.getChildren().each(function(item,index){
					item.rotate(0.5);
				});

			},animatelayer);
			animate.start();






		}]);
})(angular);
