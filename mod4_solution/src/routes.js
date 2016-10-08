(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Premade list page
  .state('categoryList', {
    url: '/categoryList',
    templateUrl: 'src/menu/templates/categories.template.html',
    controller: 'CategoriesController as categoryList',
    resolve: {
     categories: ['MenuDataService', function (MenuDataService) {
       return  MenuDataService.getAllCategories();
     }]
    }
  })

  .state('categoryList.itemDetail', {
    //url: '/categoryList1.itemDetail/{categoryId}',
    templateUrl: 'src/menu/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    params: {
     shortName: null
    },
    resolve: {
     items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.shortName)
               .then(function (items) {
                  return items;
            });
      }]
    }

  });

}

})();
