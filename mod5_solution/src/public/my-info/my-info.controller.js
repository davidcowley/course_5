(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserPreference', 'pref', 'ApiPath'];
function MyInfoController(UserPreference, pref, ApiPath) {
  var ctrl = this;
  ctrl.pref = pref; 
  ctrl.ApiPath = ApiPath;
}

})();
