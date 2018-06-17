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

    vm.addPet = function(newPet){
        console.log('in addPet', newPet);
        petService.postPet(newPet)
        vm.showPets();
    }

    vm.clearFields = function(){
        vm.petNameIn = '';
        vm.petColorIn = '';
        vm.petBreedIn = '';
    }

    vm.showPets();
 });