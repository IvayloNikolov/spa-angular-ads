adsApp.controller('PublicAdsCtrl', ['$scope', 'adsData', '$routeParams', function($scope, adsData, $routeParams)
{
    $scope.routeParams = $routeParams;
    if($routeParams.pageId)
    {
        $scope.pageId = $routeParams.pageId;
        $scope.adNumberId = $routeParams.adsNumber;
    }
    else{
        $scope.pageId = 1;
        $scope.adNumberId = 3;
    }
    adsData.getAds($scope.pageId, $scope.adNumberId)
        .$promise
        .then(function(data)
        {
            $scope.ads = data.ads;
            $scope.possiblePages = data.numPages;
            $scope.pages = [];
            for(var i=1; i<=$scope.possiblePages; i++)
            {
                $scope.pages.push(i);
            }
            $scope.ads.forEach(function(ad){
                if(!ad.imageDataUrl) ad.imageDataUrl = 'http://www.konradseidler.de/uploads/pics/nopicture_02.jpg';
            })
        })
}])