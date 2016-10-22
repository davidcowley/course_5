(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserPreference'];
function SignUpController(UserPreference) {
  var ctrl = this;
  
  ctrl.submit = function () {
    ctrl.pref.completed = true;
    console.log(ctrl.pref);
    UserPreference.addPreferences(ctrl.pref);
  };
    
  ctrl.findItem = function () {
    var promise = UserPreference.getMenuItem(ctrl.pref.menuitem);

    promise.then(function (response) {
      console.log(response.data);
      ctrl.pref.name = response.data.name;
      ctrl.pref.description = response.data.description;
    })
    .catch(function (error) {
      ctrl.pref.menuitem = '';
      console.log(error);
    })
  };   
    
    
}

})();
