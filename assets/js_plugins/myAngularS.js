var app = angular.module('sport4U', ['ngRoute', 'ngSanitize']);



app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});




app.controller('sportCtrl', function($scope, $http) {


    $http.get("assets/json/data-S.json").then(function(response) {
        $scope.data = response.data;

    });
});