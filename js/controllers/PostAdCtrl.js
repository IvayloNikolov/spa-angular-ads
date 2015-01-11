adsApp.controller('PostAdCtrl', ['$scope', 'signing', 'categoriesData', 'townsData', 'postAds', function($scope, signing, categoriesData, townsData, postAds){
    $scope.isAuthenticated = signing.isAuthenticated;
    $scope.categories = categoriesData.getCategories();
    $scope.towns = townsData.getTowns();
    $scope.postAd = function(ad)
    {
        postAds.postAd(ad);
    }
}])
