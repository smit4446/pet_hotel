myApp.controller('ownerController', function(petService){
    let vm = this;

    vm.showOwners = function(){
        petService.getOwners()
       .then(function(){
           console.log(petService.ownerResults);
           vm.ownersArray = petService.ownerResults;
       })
    }

    vm.deleteOwner = function(index){
        if(confirm('Are you sure you want to delete this owner?')){
            newData = vm.ownersArray[index].id;
            console.log('in deleteOwner', newData );
            petService.deleteOwners(newData)
            .then(function(){
                vm.showOwners()
            })        
        }
    }

    vm.addOwner = function(newOwner) {
        petService.postOwner(newOwner)
        .then(function(){
            console.log('about to show owners');
            vm.showOwners();
            vm.clearFields(); 
        })
    }

    vm.clearFields = function(){
        vm.newOwner.first_name = '';
        vm.newOwner.last_name = '';
    }

    vm.showOwners();
})