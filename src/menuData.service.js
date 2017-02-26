(function (){
  'use strict';

    angular.module('MenuData')
    .service('MenuDataService',  MenuDataService  );

     MenuDataService.$inject = ['$http', 'ApiBasePath','$q'];
    function MenuDataService($http, ApiBasePath, $q) {

        var menuService = this;
        var found = [];

        menuService.getAllCategories   = function()  {
          var promise =  $http({
            method: "GET",
            url: (ApiBasePath + "/categories.json")
          })
          .then(function(response){
            var i = 0;
            return response.data;
          })
          .catch(function(error){
            console.log("Something went wrong !");
          });
          return promise;
        }
        menuService. getItemsForCategory = function (shortName){
          var prm =  $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json?category=" + shortName)
          })
          .then
          (function(response){
            var i = 0;
            return response.data;
          })
          .catch(function(error){
            console.log("Something went wrong !");
          });
          return prm;
        }
      }

  })();
