angular.module('app').controller('app_trainingregistration', app_trainingregistration);
function app_trainingregistration($scope, app) {
    'use strict';
    app.init($scope);
    $scope.clickSelectedRealization = function(){

        app.action('trainingregistration', 'realizationListDropdown.options['+$scope.data.realization+'].clicked');
    };
}
