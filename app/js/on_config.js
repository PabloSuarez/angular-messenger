function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'HomeCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('Messenger', {
    url: '/Messenger',
    controller: 'MessengerCtrl as MC',
    templateUrl: 'messenger.html',
    title: 'Messenger'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
