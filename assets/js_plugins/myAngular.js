var app = angular.module('sport4U', ['ngRoute', 'ngSanitize']);



app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});




app.controller('sportCtrl', function($scope, $http) {


    $http.get("assets/json/advant-S.json").then(function(response) {
        $scope.swimAdvants = response.data;

    });
    $http.get("assets/json/advant-R.json").then(function(response) {
        $scope.runAdvants = response.data;

    });



    $http.get("assets/json/feedbacks.json").then(function(response) {
        $scope.feedbacks = response.data;

    });
    $http.get("assets/json/programs.json").then(function(response) {
        $scope.programs = response.data;

    });

    // debugger;







});