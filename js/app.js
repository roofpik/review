var app = angular.module('reviewApp', ['ui.router']);

var config = {
    apiKey: "AIzaSyBSSYFQ2ZhbF7d0fwTIiHVOL1GTHAWpilA",
    authDomain: "roofpik-new.firebaseapp.com",
    databaseURL: "https://roofpik-new.firebaseio.com",
    storageBucket: "roofpik-new.appspot.com",
    messagingSenderId: "362004565118"
};


firebase.initializeApp(config);
var db = firebase.database();

app.run(function($rootScope, $timeout) {
    
});
