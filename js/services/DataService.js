myContactApp.factory('DataService', ['$http', function($http){
    var getContacts = function(){
        return $http.get('tables/contacts.json');
    };
    
    return {
        getContacts: getContacts
    }
}]);