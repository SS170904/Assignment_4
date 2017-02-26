(function (){
  'use strict';

  angular.module('MenuApp')
  .component('categoryItems',{
      templateUrl: 'template/itemsloaderindicator.html',
      //controller: NarrowItDownController,
      bindings: {
        allItems: '<',
       onRemove: '&'
     }
})

.component('loadingSpinner', {
    templateUrl: 'spinner.html',
  //  controller: 'SpinnerController as ctrl'
});


})();
