adsApp.controller('homeCtrl', ['$scope', function($scope){
    $scope.page = 'Home'
    $scope.isAuthenticated = localStorage.getItem('access_token');
}])