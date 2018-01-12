angular.module('app').controller('app_trainingregistration', app_trainingregistration);
function app_trainingregistration($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.clickSelectedRealization = function(){
        
    // $scope.clickWhat = $scope.data.realization;
    
    // console.log(app.data.realizationListDropdown.options['+selectedId+'].label);
    // console.log("realizationDropDown: " + app.data.realizationListDropdown.options[selectedId].label);
    // alert('Why Not Work!!');    

    // var selectedId = $scope.data.realization.$i;
    // var actionUrl = 'realizationListDropdown.options['+selectedId+'].clicked';    

    // app.data.realizationListDropdown.options[selectedId].clicked;
        
    console.log($scope.data.realization.$i);
    console.log($scope.data.realization.label);

    // app.action('trainingregistration', $scope.data.realization.clicked);
    console.log(app.data.realizationDropDown.options[3].label);
    // app.action('trainingregistration', 'realizationListDropdown.options['+$scope.data.realization.$i+'].clicked');
    app.action('trainingregistration', 'realizationListDropdown.options[3].clicked');
    };
}
