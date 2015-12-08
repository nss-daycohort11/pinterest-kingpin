var app = angular.module("kingpin", 
	["firebase", "ngRoute"]);

app.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider
			.when('/splash', {
				templateUrl: './app/partials/splash.html',
				controller: 'loginCtrl'
			})
			.when('/profile', {
				templateUrl: './app/partials/profilePage.html',
				controller: 'profileCtrl'
			})
			.otherwise('/splash');
	}]);