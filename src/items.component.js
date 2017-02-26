(function (){
  'use strict';

  angular.module('MenuApp')
  .component('items',{
      templateUrl: 'items.template.html',
      //controller: NarrowItDownController,
      bindings: {
        menuItems: '<'
     }
})

.component('loadingSpinner', {
    templateUrl: 'spinner.html',
  //  controller: 'SpinnerController as ctrl'
});


})();
