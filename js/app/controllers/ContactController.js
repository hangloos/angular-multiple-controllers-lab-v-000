function ContactController(){
  this.name = "Eric Loos";
  this.email = "ericloos00@gmail.com";
  this.phone = "8479770315";

  var vm = this;
  this.changeName = function(){
    vm.name = "Eric Edgar Loos"
  }

  }

angular
  .module('app')
  .controller('ContactController', ContactController);