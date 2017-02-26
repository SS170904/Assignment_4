(function (){
  'use strict';

  angular.module('MenuApp')
  .component('categories',{
      templateUrl: 'itemsloaderindicator.html',
      //controller: NarrowItDownController,
      bindings: {
        allCategory: '<',
       onRemove: '&'
     }
})

.component('loadingSpinner', {
    templateUrl: 'spinner.html',
  //  controller: 'SpinnerController as ctrl'
});


})();
