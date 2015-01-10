adsApp.controller('PublicAdsCtrl', ['$scope', 'adsData', function($scope, adsData)
{
    adsData.getAds()
        .$promise
        .then(function(data)
        {
            $scope.ads = data.ads;
            $scope.ads.forEach(function(ad){
                if(!ad.imageDataUrl) ad.imageDataUrl = 'http://www.konradseidler.de/uploads/pics/nopicture_02.jpg';
        })
        })

}])