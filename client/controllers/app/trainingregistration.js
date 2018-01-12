angular.module('app').controller('app_trainingregistration', app_trainingregistration);
function app_trainingregistration($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.clickSelectedRealization = function(){
        
    // $scope.clickWhat = $scope.data.realization;
    
    console.log($scope.data.realization.$i);
    console.log($scope.data.realization.label);
    
    var selectedId = $scope.data.realization.$i;
    var actionUrl = 'realizationListDropdown.options['+selectedId+'].clicked';
    var actionLabel = realizationListDropdown.options[+2+].label;
    console.log(actionLabel);
    
    // console.log(app.data.realizationListDropdown.options['+selectedId+'].label);

    console.log("realizationDropDown: " + app.data.realizationListDropdown.options[selectedId].label);
    
    alert('Why Not Work!!');    
    
    // app.data.realizationListDropdown.options[selectedId].clicked;
    // app.action('trainingregistration', actionUrl);
    
    // app.action('trainingregistration', 'realizationListDropdown.options['+$scope.data.realization.$i+'].clicked');
    };
}
