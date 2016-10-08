(function () {
'use strict';

angular.module('MenuApp')
.component('categoryComp', {
  templateUrl: 'src/menu/templates/category.component.template.html',
  bindings: {
    categories: '<'
  }
});

})();
