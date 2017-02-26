(function () {
'use strict';
     angular.module('MenuApp')
    .controller('NarrowItDownController',  NarrowItDownController);

    NarrowItDownController.$inject = ['$rootScope', 'items'];
    //  NarrowItDownController.$inject = ['$rootScope','MenuSearchService'];

function NarrowItDownController($rootScope,items) {

  var searchCtrl = this;
  //searchCtrl.items = items;
  searchCtrl.found = items;
//searchCtrl.MenuItemsByCat = menuItems;
}
})();
