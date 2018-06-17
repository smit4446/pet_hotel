myApp.controller('petController', function(petService){
    let vm = this;

    vm.showPets = function(){
       petService.getPets()
       .then(function(){
           console.log(petService.results);
           vm.petsArray = petService.results;
       })
    };
   
    vm.deletePet = function(index){
        newData = vm.petsArray[index].id;
        console.log('in deletePet', newData );
        petService.deletePet(newData)
        .then(function(){
            vm.showPets()
        })        
    }

    vm.addPet = function(){
        vm.newPet = {
            name: vm.petNameIn,
            color: vm.petColorIn,
            breed: vm.petBreedIn,
            owner_id: vm.ownerIn,
            is_checked_in: 'IN'
        }
        petService.newPet = vm.newPet
        console.log('in addPet', vm.newPet)
        petService.postPet()
        .then(function(){
            console.log('about to show pets');
            vm.showPets();
            vm.clearFields();
        })
    }

    vm.petToggle = function(pet){
        console.log('in pet toggle',pet);
        vm.checkedIn = {
            id: pet.id,
            is_checked_in: 'OUT'
         }
         petService.petUpdate = vm.checkedIn;
         petService.putPet()
         .then(function(){
             console.log('about to update a pet');
             vm.showPets();
         })
    }

    vm.clearFields = function(){
        vm.petNameIn = '';
        vm.petColorIn = '';
        vm.petBreedIn = '';
    }

    vm.showPets();
 });