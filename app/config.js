angular.module('app.config', ['ui.router'])
  .config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider) {
      $locationProvider.html5Mode({enabled: true, requireBase: false});

      var home = {
        name: 'home',
        url: '/',
        templateUrl: 'components/home/index.html'
      };
      $stateProvider.state(home);

      var login = {
        name: 'login',
        url: '/',
        templateUrl: 'components/login/index.html'
      };
      $stateProvider.state(login);

      $urlRouterProvider.when('', '/');
      $urlRouterProvider.otherwise('/404');

      addState = function (name, url, options) {
        $stateProvider.state(angular.extend({
          url: url,
          templateUrl: 'components/' + name + '/index.html'
        }));
      };

      // addState(   'login',      '/login');
    }
  ]);
