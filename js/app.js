var myContactApp = angular.module("myContacts",['ngRoute']);

myContactApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.
    when('/',{
        templateUrl: 'pages/main.html',
        controller:"MainCtrl"
    }).
    otherwise({redirectTo:'/'})

    $locationProvider.html5Mode({
    	enable: true,
    	requireBase: false
    });
}]);