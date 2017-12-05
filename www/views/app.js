angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function(
    $ionicPlatform, $rootScope, $ionicHistory, $state, $ionicSideMenuDelegate, $window
  ){

  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(false);
    }
    if (window.StatusBar) {
      StatusBar.backgroundColorByHexString("#0D5787");
    }
  });

  $rootScope.goBack = function() {
    $ionicHistory.goBack();
  };

  $rootScope.openSidebar = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $rootScope.sidebarClick = function(index) {
  }
  $rootScope.sidebarContents = [
    {title: 'Home', icon: 'ion-ios-person-outline'},
    {title: 'Example1', icon: 'ion-ios-list-outline'},
    {title: 'Example2', icon: 'ion-ios-flag-outline'}
  ]

  $state.go('home');
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'views/home/home.html',
    controller: 'homeCtrl'
  });

  $urlRouterProvider.otherwise('/home');

});

var app = angular.module('starter.controllers', []);