adsApp.controller('loginCtrl', ['$scope', 'signing', '$location', function($scope, signing, $location){
    $scope.login = function(user)
    {
        signing.login(user)
    }
    $scope.page = 'Login'
}])
