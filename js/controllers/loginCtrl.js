adsApp.controller('loginCtrl', ['$scope', 'signing', '$location', function($scope, signing, $location){
    $scope.login = function(user)
    {
        signing.login(user)
            .$promise
            .then(function(data)
            {
                signing.authenticate(data);
                $scope.isAuthenticated = true;
                $location.path('/');

            })
    }
    $scope.page = 'Login'
}])
