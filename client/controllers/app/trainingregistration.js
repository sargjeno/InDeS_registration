angular.module('app').controller('app_trainingregistration', app_trainingregistration);
function app_trainingregistration($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.clickSelectedRealization = function(){
    console.log($scope.data.realization.$i);
    console.log($scope.data.realization.label);
    // console.log($scope.data.realization.clicked);
    // $scope.clickWhat = $scope.data.realization;
    // console.log(trainingregistration); -->> not exist on the page... 

    console.log($scope.clickWhat);

    app.action('trainingregistration', 'realizationListDropdown.options['+$scope.data.realization.$i+'].clicked');
    };
}
