adsApp.controller('publicAdsCtrl', ['$scope', 'adsData', function($scope, adsData)
{
    adsData.getAds()
        .$promise
        .then(function(data)
        {

            $scope.ads = data.ads;

            console.log($scope.ads);
        });
}])