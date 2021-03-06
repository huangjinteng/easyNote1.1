// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ion-datetime-picker'])

  .run(function ($ionicPlatform, $rootScope, $ionicSideMenuDelegate) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      //alert("$ionicPlatform.ready");
      //cool.toast.showToast();
    });

    var locationChangeStartOff = $rootScope.$on('$locationChangeStart', locationChangeStart);
//
    function locationChangeStart(event, newUrl, currentUrl) {
      //调试用信息，测试无误后可删除
      console.log('arguments = ', arguments);
      console.log('newUrl = ', newUrl);
      console.log('decode -> newUrl = ', decodeURIComponent(newUrl));
      console.log('currentUrl = ', currentUrl);
      if (decodeURIComponent(newUrl).indexOf("/list") >= 0) {
        console.log('newUrl.indexof = ', newUrl.indexOf('/list'));
        $ionicSideMenuDelegate.canDragContent(false);
        return;
      }else {
        $ionicSideMenuDelegate.canDragContent(true);
      }
      console.log('判断结束 ');
    }
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    //
    //$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    //$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
    //
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })
      // Each tab has its own nav history stack:

      .state('tab.list', {
        url: '/list',
        cache: false,
        views: {
          'tab-list': {
            templateUrl: 'templates/tab-list.html',
            controller: 'ListCtrl'
          }
        }
      })
      .state('tab.cardList', {
        url: '/cardList',
        cache: false,
        views: {
          'tab-cardList': {
            templateUrl: 'templates/tab-cardList.html',
            controller: 'CardListCtrl'
          }
        }
      })

      .state('tab.create', {
        url: '/list/create',
        cache: false,
        views: {
          'tab-list': {
            templateUrl: 'templates/create.html',
            controller: 'CreateCtrl'
          }
        }
      })
    //详情页面
    //.state('tab.detail', {
    //  url: '/list/detail',
    //  views: {
    //    'tab-list': {
    //      templateUrl: 'templates/detail.html',
    //      controller: 'DetailCtrl'
    //    }
    //  }
    //})
    //个人信息页面
    //.state('tab.account', {
    //  url: '/account',
    //  views: {
    //    'tab-account': {
    //      templateUrl: 'templates/tab-account.html',
    //      controller: 'AccountCtrl'
    //    }
    //  }
    //});

// if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/cardList');

  })

//.config(function (ionicTimePickerProvider) {
//  var timePickerObj = {
//    inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
//    format: 12,
//    step: 15,
//    setLabel: 'Set',
//    closeLabel: 'Close'
//  };
//  ionicTimePickerProvider.configTimePicker(timePickerObj);
//})

//.config(function (ionicDatePickerProvider) {
//  var datePickerObj = {
//    inputDate: new Date(),
//    setLabel: 'Set',
//    todayLabel: 'Today',
//    closeLabel: 'Close',
//    mondayFirst: false,
//    weeksList: ["S", "M", "T", "W", "T", "F", "S"],
//    monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
//    templateType: 'popup',
//    from: new Date(2012, 8, 1),
//    to: new Date(2018, 8, 1),
//    showTodayButton: true,
//    dateFormat: 'dd MMMM yyyy',
//    closeOnSelect: false,
//    disableWeekdays: [6],
//  };
//  ionicDatePickerProvider.configDatePicker(datePickerObj);
//})
