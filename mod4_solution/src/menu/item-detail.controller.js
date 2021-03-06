(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['items'];
function ItemDetailController(items) {
  var itemsCtrl = this;
  itemsCtrl.items = items;
}

})();
