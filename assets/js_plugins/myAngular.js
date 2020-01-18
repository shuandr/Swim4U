var app = angular.module('sport4U', ['ngRoute', 'ngSanitize']);



app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});




app.controller('sportCtrl', function($scope, $http) {


    $http.get("assets/json/advant.json").then(function(response) {
        $scope.advants = response.data;

    });

    $http.get("assets/json/gallery.json").then(function(response) {
        $scope.gallery = response.data;

    });
    
    $http.get("assets/json/feedbacks.json").then(function(response) {
        $scope.feedbacks = response.data;

    });
$http.get("assets/json/programs.json").then(function(response) {
        $scope.programs = response.data;

    });

    // debugger;







});