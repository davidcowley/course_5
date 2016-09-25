(function () {
'use strict';

angular.module('Loader')
.component('itemsLoaderIndicator', {
  templateUrl: 'loader/itemsloaderindicator.template.html',
  controller: LoaderIndicatorController
});


LoaderIndicatorController.$inject = ['$rootScope']
function LoaderIndicatorController($rootScope) {
  var $ctrl = this;

  var cancelListener = $rootScope.$on('narrowdown:processing', function (event, data) {
    console.log("Event: ", event);
    console.log("Data: ", data);

    if (data.on) {
      $ctrl.loadIndicator = true;
    }
    else {
      $ctrl.loadIndicator = false;
    }
  });

  $ctrl.$onDestroy = function () {
    cancelListener();
  };

};

})();
