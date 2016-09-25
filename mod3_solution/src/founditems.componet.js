(function () {
'use strict';

angular.module('NarrowItDownApp')
.component('foundItems', {
  templateUrl: 'src/founditems.template.html',
  controller: foundItemsController,
  bindings: {
    found: '<',
    onRemove: '&'
  }
});


foundItemsController.$inject = ['$rootScope', '$element', '$q']
function foundItemsController($rootScope, $element, $q) {
  var $ctrl = this;

  $ctrl.remove = function (myIndex) {
    $ctrl.onRemove({ index: myIndex });
  };
}

})();
