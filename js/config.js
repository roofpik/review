app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'signup.html',
        controller: 'signupCtrl'
    });

    $stateProvider.state('mobile', {
        url: '/mobile',
        templateUrl: 'mobile.html',
        controller: 'mobileCtrl'
    });


    $stateProvider.state('write-review', {
        url: '/write-review',
        templateUrl: 'write-review.html',
        controller: 'writeReviewCtrl'
    });

    $urlRouterProvider.otherwise('/register');

}]);
