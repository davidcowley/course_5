(function () {
'use strict';

angular.module('NarrowItDownApp')
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com/");

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    //console.log("MenuSearchService - getMatchedMenuItems.");
    //console.log("searhTerm: " + searchTerm);

    return $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
        }).then( function(response) {
          //console.log("returned from Server: " + response.data.menu_items.length);
          var foundItems = [];
          var searchItemLower = searchTerm.toLowerCase();
          for (var i = 0; i < response.data.menu_items.length; i++) {
            var name = response.data.menu_items[i].name.toLowerCase();
            if (name.indexOf(searchItemLower) !== -1) {
              //console.log("Name: " + name);
              foundItems.push(response.data.menu_items[i])
            }
        }
        //console.log("Found Items: " + foundItems.length);
        return foundItems;
     })
     .catch(function (error) {
       console.log(error);
     })
   };

}

})();
