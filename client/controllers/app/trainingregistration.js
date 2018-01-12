angular.module('app').controller('app_trainingregistration', app_trainingregistration);
function app_trainingregistration($scope, app) {
    'use strict';
    app.init($scope);
    $scope.clickSelectedRealization = function(){
     $scope.data.realizationListDropdown = JSON.parse($scope.data.realizationListDropdown);
        app.action('trainingregistration', 'realizationListDropdown.options['+1+'].clicked');
    };
}
