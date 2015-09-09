angular.module('places')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'src/tabs/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.myplace', {
      url: '/myplace',
      views: {
        'tab-myplace': {
          templateUrl: 'src/tabs/views/tab-myplace.html',
          controller: 'MyPlaceCtrl'
        }
      }
    })

    .state('tab.addplace', {
        url: '/addplace',
        views: {
          'tab-addplace': {
            templateUrl: 'src/tabs/views/tab-addplace.html',
            controller: 'AddPlaceCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'src/tabs/views/tab-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'src/tabs/views/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  });