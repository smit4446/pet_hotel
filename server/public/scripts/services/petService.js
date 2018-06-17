myApp.service('petService', function($http){
    let vm = this;
 
    vm.getPets = function(){
       return $http({
          method: 'GET', 
          url: `/pets`
       }).then(function(response){
          console.log(`Response from /pets`, response.data);
          vm.results = response.data;
       }).catch(function(error){
          console.log(`Error handling GET for /pets`, error);
       })
    } // end getPets

    vm.getOwners = function(){
        return $http({
            method: 'GET',
            url: '/owners'
        }).then(function(response){
            console.log('Response from /owners', response.data);
            vm.ownerResults = response.data;
        }).catch(function(error){
            console.log('Error handing get for /owners', error);
        })
    }

    vm.deletePet = function(newData){
        return $http({
            method: 'DELETE',
            url: `/pets/${newData}`
        })
    }

    vm.deleteOwners = function(newData){
        return $http({
            method: 'DELETE',
            url: `/owners/${newData}`
        })
    }

    vm.postPet = function () {
        return $http({
            method: 'POST',
            url: '/pets',
            data: vm.newPet
        }).then((response) => {
            console.log('added pet in POST', vm.newPet);
            vm.getPets();
        }).catch((error) => {
            console.log('error adding pet in POST', error);
        });
    }

    vm.postOwner = function (newOwner) {
        return $http({
            method: 'POST',
            url: '/owners',
            data: newOwner
        }).then((response) => {
            console.log('added owner in POST', newOwner);
            vm.getOwners();
        }).catch((error) => {
            console.log('error adding owner in POST', error);
        });
    }

    vm.putPet = function(){
        return $http({
            method: 'PUT',
            url: '/pets',
            data: vm.petUpdate
        }).then((response) => {
            vm.getPets();
        }).catch((error)=>{
            console.log('error updating pet', error);   
        })
    }

 });