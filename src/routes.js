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
    templateUrl: 'template/home.template.html'
  })

/*
  .state('categories', {
    url:'/listCat',
    templateUrl : 'template/categories.template.html',
    controller: 'NarrowItDownController as searchCtrl',
    controller: function($scope){
         $scope.contacts = [{ name: 'Alice' }, { name: 'Bob' }];
       }
  })
*/

  // Premade list page
  .state('categories', {
    url:'/listCat',
    templateUrl : 'template/categories.template.html',
    controller: 'NarrowItDownController as categoryCtrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })


  .state('itemDetail', {
    url:'/items/{catShortName}',
    templateUrl : 'template/itemDetail.template.html',
    controller: 'itemDetailController as itemCtrl',
    resolve: {
      menuItems: ['$stateParams','MenuDataService',
                function ($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.catShortName);
                }]
              }
  });

}

})();
