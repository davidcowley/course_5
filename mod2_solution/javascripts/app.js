(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getItemsBought();

}

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [
     { name: "Apples",quantity: "5 bags" },
     { name: "Donuts", quantity: "One Dozen" },
     { name: "Eggs", quantity: "1 carton"},
     { name: "Milk", quantity: "1 gallon"},
     { name: "Bacon", quantity: "2 bags"},
     { name: "Hash Browns", quantity: "2 bags"}
  ];
  var itemsBought = [ ];


  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };

  service.buyItem = function (itemIdex) {
    // get the item from the list
    // Add item to the bought list
    itemsBought.push(itemsToBuy[itemIdex]);

    // Remove item from the buy list
    itemsToBuy.splice(itemIdex, 1);
  };


}

})();
