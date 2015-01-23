/**
 * Created by anjum on 1/10/15.
 */

(function(){

  "use strict";

  angular
    .module('worldMaps.module')
    .controller("MapDetailsCtrl" ,['mapMoreInfo' , mapDetailsCtrl])

  function mapDetailsCtrl(mapMoreInfo){

    var vm = this;

    vm.data = mapMoreInfo
    vm.name = vm.data.name;
    vm.capital = vm.data.capital;
    vm.getLat = vm.data.latlng[0];
    vm.getLang = vm.data.latlng[1];
    console.log("getting Lat : " + vm.getLat,  vm.getLang)

    vm.map = {center: {latitude: vm.getLat, longitude: vm.getLang }, zoom: 6 };
    vm.options = {scrollwheel: false};


    vm.showMosam = false;
    vm.mosamToggle = function(){
      vm.showMosam = !vm.showMosam
    }

    vm.showWeather = vm.showMosam;

    vm.showMap = false;

    vm.mapToggle =function(){

      vm.showMap = !vm.showMap

    }

  }


}());
