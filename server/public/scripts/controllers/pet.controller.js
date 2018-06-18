myApp.controller('petController', function(petService){
    let vm = this;

    vm.showPets = function(){
       petService.getPets()
       .then(function(){
           vm.petsArray = petService.results;
       })
    };
   
    vm.deletePet = function(index){
        if(confirm('Are you sure you want to delete this guest?')){
        newData = vm.petsArray[index].id;
        console.log('in deletePet', newData );
        petService.deletePet(newData)
        .then(function(){
            vm.showPets()
        })        
    }
}

    vm.addPet = function(){
        vm.newPetIn = {
            name: vm.petNameIn,
            color: vm.petColorIn,
            breed: vm.petBreedIn,
            owner_id: vm.ownerIn,
            is_checked_in: 'IN'
        }
        console.log(vm.ownerIn.id);
        
        petService.newPet = vm.newPetIn;
        console.log('in addPet', vm.newPetIn)
        petService.postPet()
        .then(function(){
            vm.showPets();
            vm.clearFields();
        })
    }

    vm.petToggle = function(pet){
        if(confirm('Are you sure you want to check out this guest?')){
            let checkedInStatus = pet.is_checked_in == 'OUT' ? 'IN' : 'OUT';
            vm.checkedIn = {
                is_checked_in: checkedInStatus,
                id: pet.id
            }
            petService.petUpdate = vm.checkedIn;
            petService.putPet()
            .then(function(){
                vm.showPets();
            })
        }   
    }

    vm.clearFields = function(){
        vm.petNameIn = '';
        vm.petColorIn = '';
        vm.petBreedIn = '';
    }

    vm.showPets();
 });