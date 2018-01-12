angular.module('app').controller('app_trainingregistration', app_trainingregistration);
function app_trainingregistration($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.clickSelectedRealization = function(){
    console.log($scope.data.realization.$i);
    console.log($scope.data.realization.label);

    // $scope.clickWhat = $scope.data.realization;
    // console.log(trainingregistration); -->> not exist on the page... 

    console.log('trainingregistration');
    alert('Why Not Work!!');
    
    console.log(app.data.realizationListDropdown.options[0]);

    app.action('trainingregistration', 'realizationListDropdown.options['+$scope.data.realization.$i+'].clicked');
    };
}
