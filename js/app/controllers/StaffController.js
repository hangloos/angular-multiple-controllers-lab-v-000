function StaffController(){
  this.name = "Molly";
  this.email = "test@gmail.com";
  this.phone = "8305701378";
}

angular
  .module('app')
  .controller('StaffController', StaffController);