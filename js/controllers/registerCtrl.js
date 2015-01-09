adsApp.controller('registerCtrl', ['$scope', 'townsData', 'signing', function($scope, townsData, signing){
    townsData.getTowns
        .$promise
        .then(function(data)
        {
            $scope.towns = data;
            console.log(data);
        });

    $scope.register = function(user)
    {
        signing.register(user)
            .$promise
            .then(function(data)
            {
                console.log(data)
            })
    }
}])