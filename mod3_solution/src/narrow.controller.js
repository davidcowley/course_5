(function () {
'use strict';

angular.module('NarrowItDownApp')
.controller('NarrowItDownController', NarrowItDownController);


NarrowItDownController.$inject = ['$rootScope', 'MenuSearchService', '$element', '$timeout'];
function NarrowItDownController($rootScope, MenuSearchService, $element, $timeout) {
  var menuList = this;

  menuList.searchTerm = "";
  menuList.found = [];

  menuList.searchForItems = function () {
    //console.log("NarrowItDownController - searchForItems.");
    //console.log("calling  - MenuSearchService.getMatchedMenuItems with searhTerm: " + menuList.searchTerm);
    if (menuList.searchTerm.trim().length > 0) {
        $rootScope.$broadcast('narrowdown:processing', {on: true});
        var found = MenuSearchService.getMatchedMenuItems(menuList.searchTerm);
        found.then(function (foundItems) {
          //console.log("foundItems: " + foundItems);
          for (var i = 0; i < foundItems.length; i++) {
            var name = foundItems[i].name;
            //console.log("##### Name: " + name);
          }
          if (foundItems.length == 0) {
            var warningElem = $element.find('div.error');
            warningElem.slideDown(900);
          }
          else {
            var warningElem = $element.find('div.error');
            warningElem.slideUp(0);
          }
          $timeout(function () {}, 10000);
          menuList.found = foundItems;
        })
        .catch(function (error) {
         console.log(error);
       })
       .finally(function () {
          $rootScope.$broadcast('narrowdown:processing', { on: false });
       });
    }
    else {
      console.log("Blank Search item");
      menuList.found = [];
      var warningElem = $element.find('div.error');
      warningElem.slideDown(100);
    }
  }


  menuList.removeItem = function (itemIndex) {
    //console.log("Remove Item Index: " + itemIndex);
    menuList.found.splice(itemIndex, 1);
  }

}

})();
