(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");

MenuDataService.$inject = ['$q', '$http', 'ApiBasePath']
function MenuDataService($q, $http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };

  service.excludeFrom = function (catName,  menuName, menuArry) {
    var found = false;
    var exclude = false;
    for (var j = 0; j<menuArry.length;  j++) {
      if (menuName.indexOf(menuArry[j]) !== -1) {
        found = false;
        exclude = true;
      }
    }
    if (exclude == false) {
      if (menuName.indexOf(catName) !== -1) {
        found = true;
      }

    }
    return found;
  };

  service.findCategory = function (catName,  menuName) {
    var found = false;
    switch(catName) {
        case "C":
            found = service.excludeFrom(catName, menuName,  ["CU", "CM"]);
            break;
        case 'D':
            found = service.excludeFrom(catName, menuName,  ["DS", "DK"]);
            break;
        case 'F':
            found = service.excludeFrom(catName, menuName,  ["FR", "PF", "NF", "FY"]);
            break;
        case 'L':
            found = service.excludeFrom(catName, menuName,  ["NL"]);
            break;
        case 'V':
            found = service.excludeFrom(catName, menuName,  ["VG"]);
            break;
        default:
            if (menuName.indexOf(catName) !== -1) {
              found = true
            }
    }
    return found;
  };

  service.getItemsForCategory = function (categoryShortName) {
    var items = [];
    console.log('Begin');
    console.log(categoryShortName);
    var deferred = $q.defer();
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then( function(response) {
          for (var i = 0; i < response.data.menu_items.length; i++) {
            var short_name = response.data.menu_items[i].short_name;
            if (service.findCategory(categoryShortName, short_name ) === true) {
              items.push(response.data.menu_items[i])
            }
        }
        console.log("Items: " + items.length);
        deferred.resolve(items);
    })
     .catch(function (error) {
       console.log(error);
     });
     return deferred.promise;
  };
};
})();
