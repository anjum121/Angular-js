/**
 * Created by anjum on 1/6/15.
 */

(function(){
  'use strict';

  angular
    .module("worldMaps.module",[
      'ui.router',
      'maps.services',
      'uiGmapgoogle-maps'
    ])
    .config(function($stateProvider, $urlRouterProvider ) {

      //$urlRouterProvider.otherwise('/welcome');
     // $urlRouterProvider.when('detail', '/overview');


      $stateProvider
        .state('map', {
         url: '/map',
          templateUrl: 'views/map.html',
          controller: 'MapsCtrl as vm'
        })
        .state('detail', {
          abstracts:true,
          url: '/detail/:mapId',
          templateUrl: 'views/mapDetails.html',
          controller:  'MapDetailsCtrl as vm',
          resolve : {
            mapData : "maps",
            mapMoreInfo:function(mapData, $stateParams, $state){

              var getClikedId = $stateParams.mapId;

              return mapData.getMaps().then(function(data){
                  return data[getClikedId]

              });

              //$state.go("detail.overview")
            }
          }
        })
        .state('detail.overview',{
          url:'/overview',
          templateUrl:'views/mapDetail-info.html'
        })
        .state('detail.detailInfo',{
          url: '/detail',
          templateUrl:'views/mapDetail-detail.html'

        })
        .state('detail.map',{
          url:'/map',
          templateUrl:'views/mapDetail-map.html'
        })



    })
    .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
          key: 'AIzaSyCeCJPGWP8nBe5cRCCuHTX7lOK40Rr4Dk4',
           v: '3.17',
           libraries: 'weather,geometry,visualization'
      });
    })


}())
