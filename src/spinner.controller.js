(function (){
  'use strict';
  angular.module('MenuSearchApp')
  .controller('SpinnerController',SpinnerController)

  SpinnerController.$inject = ['$rootScope'];

  function SpinnerController($rootScope){
    var $ctrl = this;

    // $on to put the method in the scope so it can be searched by emit or broadcast
    var cancelListener = $rootScope.$on('shoppinglist:showSpinnerDiv', function(event,data){
      if (data.on)
      {
        $ctrl.showSpinner = true;
      }
      else {
        $ctrl.showSpinner = false;
      }
    });

    $ctrl.$onDestroy = function(){
      cancelListener();
    }
}

})();
