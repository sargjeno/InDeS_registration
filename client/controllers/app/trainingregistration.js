angular.module('app').controller('app_trainingregistration', app_trainingregistration);
function app_trainingregistration($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.clickSelectedRealization = function(){
    console.log($scope.data.realization.$i);
    console.log($scope.data.realization.label);
    // $scope.clickWhat = $scope.data.realization;
    console.log(realizationListDropdown.options);
    app.action('trainingregistration', 'realizationListDropdown.options[2].clicked');
    // app.action('trainingregistration', 'realizationListDropdown.options['+$scope.data.realization.$i+'].clicked');
    };
}
