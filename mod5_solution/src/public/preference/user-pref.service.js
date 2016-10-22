(function () {
"use strict";

angular.module('public')
.service('UserPreference', UserPreference);


UserPreference.$inject = ['$http', 'ApiPath'];
function UserPreference($http, ApiPath) {
  var service = this;
  // User preferences
  var pref = {completed:false};

  service.addPreferences = function (userPrefs) {
    service.pref = userPrefs;
    console.log(service.pref);
  };

  service.getPreferences = function () {
    return service.pref;
  };

 service.getMenuItem = function(shortName) {
   var response = $http({
      method: "GET",
      url: (ApiPath + '/menu_items/' + shortName + '.json'),
    });

    return response;
  };
    
};

})();