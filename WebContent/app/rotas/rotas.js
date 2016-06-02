var app = angular.module('app', [ 'ui.router']);

app.run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
	    $rootScope.$state = $state;
	    $rootScope.$stateParams = $stateParams;
    }
  ]
)

app.config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider,   $urlRouterProvider) {

	/////////////////////////////
	// Redirects and Otherwise //
	/////////////////////////////

	$urlRouterProvider
	.otherwise('/');

	//////////////////////////
	// State Configurations //
	//////////////////////////

	// Use $stateProvider to configure your states.
	$stateProvider
	.state("login", {
		url: "/",
		templateUrl: "app/pages/login.html",
		controller: 'MainController'
	})
	
	$stateProvider
	.state("modelo", {
		url: "/modelo",
		templateUrl: "app/pages/modelo.html",
		controller: 'TaskController'
	})
	
	$stateProvider
	.state("inicio", {
		url: "/inicio",
		templateUrl: "app/pages/inicio.html",
		controller: 'TaskController'
	})
	
	$stateProvider
	.state("monitor", {
		url: "/monitor",
		templateUrl: "app/pages/monitor.html",
		controller: 'MainController'
	})
	
	$stateProvider
	.state("concorrer", {
		url: "/concorrer",
		templateUrl: "app/pages/concorrer.html",
		controller: 'MainController'
	})
 
}]);