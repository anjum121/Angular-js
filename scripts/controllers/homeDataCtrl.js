/**
 * Created by anjum on 1/6/15.
 */

(
  function(){
    "use strict";

    angular
      .module('welcome.module')
      .controller('HomeData', [homeData])


    function homeData(){

      var vm = this;

      vm.welcomeNote = "Some text coming from services";

    }


  }()
);
