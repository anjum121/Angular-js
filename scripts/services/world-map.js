/**
 * Created by anjum on 1/6/15.
 */
(function(){
  "use strict";

  angular
    .module("maps.services")
    .factory("maps",
    ["Restangular", maps]);

  function maps(Restangular) {
    var restAngular =
      Restangular.withConfig(function (Configurer) {
        Configurer.setBaseUrl('api/');
      });

    var _messageService = restAngular.all('response.json').getList();
    var _getCountry = restAngular.all('response.json').getList();
    return {
      getMaps: function () {
        return _messageService;
      },
      getMapById: function(id){
       // this._oneItem =  restAngular.one('response.json',id).get();
        var _oneItem =  _getCountry.then(function(data){


           return data[id] ;


        });

      }
    };

  }
}())

