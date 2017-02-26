(function () {
'use strict';
     angular.module('MenuApp')
    .controller('itemDetailController',  itemDetailController);

    itemDetailController.$inject = ['$rootScope', 'menuItems'];

function itemDetailController($rootScope,menuItems) {

  var searchCtrl = this;
  searchCtrl.MenuCategoryName = menuItems.category.name;
  searchCtrl.MenuItemsByCat = menuItems.menu_items;
}
})();
