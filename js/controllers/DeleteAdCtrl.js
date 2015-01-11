adsApp.controller('DeleteAdCtrl', ['$scope', 'townsData','categoriesData', 'adService', '$routeParams', function($scope, townData, categoriesData, adService, $routeParams) {
    $scope.page = 'Delete Profile'
    $scope.isAuthenticated = localStorage.getItem('access_token');
    $scope.towns = townData.getTowns();
    $scope.categories = categoriesData.getCategories();
    var id = parseInt($routeParams.id);
    $scope.ad =  adService.getAdById(id);
    $scope.deleteAd = function(){
        adService.deleteById(id)
    }
}])