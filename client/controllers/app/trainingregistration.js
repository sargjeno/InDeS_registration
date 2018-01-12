angular.module('app').controller('app_trainingregistration', app_trainingregistration);
function app_trainingregistration($scope, app) {
    'use strict';
    app.init($scope);
    $scope.clickSelectedRealization = function(){
console.log($scope.data.realization);
        $scope.clickWhat = JSON.parse($scope.data.realization);
        app.action('trainingregistration', 'realizationListDropdown.options['+$scope.clickWhat.$i+'].clicked');
    };
}
