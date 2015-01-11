adsApp.controller('registerCtrl', ['$scope', 'townsData', 'signing', '$location', function($scope, townsData, signing, $location){
    townsData.getTowns()
        .$promise
        .then(function(data)
        {
            $scope.towns = data;
        });

    $scope.register = function(user)
    {
        signing.register(user)
            .$promise
            .then(function(data)
            {
                console.log(data);
                signing.authenticate(data)
                $location.path('/');

            })
    }
    $scope.page = 'register'

}])