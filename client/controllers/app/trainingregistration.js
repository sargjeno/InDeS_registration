angular.module('app').controller('app_trainingregistration', app_trainingregistration);
function app_trainingregistration($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.clickSelectedRealization = function(){
        
    // $scope.clickWhat = $scope.data.realization;
    // console.log(trainingregistration); -->> not exist on the page...         
    console.log($scope.data.realization.$i);
    console.log($scope.data.realization.label);
    var selectedId = $scope.data.realization.$i;
    console.log(selectedId);
    
    
    alert('Why Not Work!!');
    console.log("realizationDropDown: " + app.data.realizationListDropdown.options[0].label);

    app.action('trainingregistration', 'realizationListDropdown.options['+$scope.data.realization.$i+'].clicked');
    };
}
