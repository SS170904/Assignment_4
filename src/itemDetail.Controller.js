(function () {
'use strict';
     angular.module('MenuApp')
    .controller('itemDetailController',  itemDetailController);

    itemDetailController.$inject = ['$rootScope', 'menuItems'];
    //  NarrowItDownController.$inject = ['$rootScope','MenuSearchService'];

function itemDetailController($rootScope,menuItems) {

  var searchCtrl = this;
  //searchCtrl.items = items;
  searchCtrl.MenuCategoryName = menuItems.category.name;
  searchCtrl.MenuItemsByCat = menuItems.menu_items;
}
})();
