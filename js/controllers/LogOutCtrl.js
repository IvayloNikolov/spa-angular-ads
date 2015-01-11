adsApp.controller('LogOutCtrl', ['$location', 'signing', function ($location, signing){
    signing.logout();
}])
