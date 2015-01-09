adsApp.factory('adsData', ['$resource', function($resource){
    var resource = $resource('http://localhost:1337/api/ads');
    function getAllAds()
    {
        return resource.get();
    }
    return{
        getAds: getAllAds
    }
}])
