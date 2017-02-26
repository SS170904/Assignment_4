(function () {
'use strict';

angular.module('MenuSearchApp')
.controller('MainShoppingListController', MainShoppingListController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
MainShoppingListController.$inject = ['item1'];
function MainShoppingListController( item1) {
  var mainList = this;

  mainList.item1 = item1;


  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
