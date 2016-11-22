myContactApp.controller('MainCtrl', ['$scope','DataService', function($scope, DataService){
    
    var getContacts = function(){
        DataService.getContacts().then(
            function(results){
                $scope.contacts = results.data;
            },
            function(error){
                console.log("Error");
            }
        )
    };
    
    
    getContacts();
    
    $scope.addContact = function(name,company,phoneMobile,phoneWork,phoneHome,email, addressStreet,addressCity,addressState,addressZip,note){
        
        $scope.contacts.push({
                name: name,
                company: company,
                phone: {
                    mobile: phoneMobile,
                    work: phoneWork,
                    home: phoneHome
                },
                email: email,
                address: {
                    street: addressStreet,
                    city: addressCity,
                    state: addressState,
                    zip: addressZip,

                },
                note: note,
                edit: false
            });
//            $scope.name='',
//            $scope.company='',
//            $scope.phone.mobile='',
//            $scope.phone.work='',
//            $scope.phone.home='',
//            $scope.email='',
//            $scope.address.street='',
//            $scope.address.city='',
//            $scope.address.state='',
//            $scope.address.zip='',
//            $scope.note='',
            $scope.name='';
            $scope.company='';
            $scope.phone.mobile='';
            $scope.phone.work='';
            $scope.phone.home='';
            $scope.email='';
            $scope.address.street='';
            $scope.address.city='';
            $scope.address.state='';
            $scope.address.zip='';
            $scope.note='';
        
    };
    
    
    $scope.edit = false;
    
    $scope.editShow = function(data){
        if(data.edit == false){
            data.edit = true;
        }else{
            data.edit = false;
        }
    }
    
    $scope.removeContact = function(contact){
        var index = $scope.contacts.indexOf(contact);
        
        return $scope.contacts.splice(index, 1);
    };
    
    $scope.showFullContact = function(data){
        
        return $scope.fullContact = data;
    };
    
}]);