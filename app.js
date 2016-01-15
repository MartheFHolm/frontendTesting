//app.js
(function() {
'use strict';

    angular
        .module('app', [])
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log'];
    function HomeController(dependency1) {
        var vm = this;
        vm.title ="Hello you!";


        activate();

        ////////////////

        function activate() { }
    }
})();