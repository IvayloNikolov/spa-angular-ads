adsApp.controller('PrivateAdsCtrl', ['$scope','$resource', 'signing', 'adsData', function($scope, $resource, signing, adsData){
    adsData.getPrivateAds()
        .$promise
        .then(function(data)
        {
            $scope.privateAds = data;
        });
    $scope.isAuthenticated = signing.isAuthenticated;
}])
