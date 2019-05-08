angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.packages', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/packages.html',
        controller: 'packagesCtrl'
      }
    }
  })

  .state('menu.contact', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.clean', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clean.html',
        controller: 'cleanCtrl'
      }
    }
  })

  .state('menu.gradient', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gradient.html',
        controller: 'gradientCtrl'
      }
    }
  })

  .state('menu.neptune', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/neptune.html',
        controller: 'neptuneCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});