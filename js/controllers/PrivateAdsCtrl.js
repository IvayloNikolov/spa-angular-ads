adsApp.controller('PrivateAdsCtrl', ['$scope','$resource', 'adsData', function($scope, $resource, adsData){
    adsData.getPrivateAds()
        .$promise
        .then(function(data)
        {
            $scope.privateAds = data;
            console.log(data);
        });
}])
