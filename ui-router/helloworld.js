var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function ($stateProvider) {
    var helloState = {
        name: 'root',
        url: '',
       template: '<h3>hello</h3>'
    }

    var aboutState = {
        name: 'home',
        url: '/home',
        controller:'MainHomeCtrl',
        templateUrl: 'main.home.html'
    }
    var home = {
        name: 'guides',
        url: '/home/:guide',
        controller: 'guideCtrl',
        templateUrl: 'list.html'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
    $stateProvider.state(home);
});

myApp.controller("MainHomeCtrl", function ($scope) {
    console.log("hello");

    $scope.guideshelp = [
        {
            helpid: 1,
            helpname: 'andriod'
        },
        {
            helpid: 2,
            helpname: 'IOS'
        },
        {
            helpid: 3,
            helpname: 'Window'
        },
        {
            helpid: 4,
            helpname: 'platform'
        }
    ];

   // console.log($scope.guideshelp[0]);
})
myApp.controller("guideCtrl", function ($scope, $stateParams) {
  //  console.log('$scope.guideshelp[0]');

    $scope.guideshelp = [
        {
            helpid: 1,
            helpname: 'andriod'
        },
        {
            helpid: 2,
            helpname: 'IOS'
        },
        {
            helpid: 3,
            helpname: 'Window'
        },
        {
            helpid: 4,
            helpname: 'platform'
        }
    ];

    console.log("guideCtrl");
    //debugger
    $scope.helpname = $stateParams.guide
    //debugger
  //  console.log($scope.list);
})