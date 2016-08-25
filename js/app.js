var myContactApp = angular.module("myContacts",['ngRoute']);

myContactApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/',{
        templateUrl: 'pages/main.html',
        controller:"MainCtrl"
    }).
    otherwise({redirectTo:'/'})
}]);