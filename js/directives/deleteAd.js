adsApp.directive('deleteAd', function(){
    return {
        restrict: 'E',
        templateUrl: 'partials/delete-ad-tag.html',
        controller: 'DeleteAdCtrl'
    }
})