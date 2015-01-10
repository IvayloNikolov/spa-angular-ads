adsApp.factory('adsData', ['$resource', function($resource){
    var resource = $resource('http://localhost:1337/api/ads/');
    function getAllAds()
    {
        return resource.get();
    }
    var resource2 = $resource('http://localhost:1337/api/user/ads/', {}, {
        get: {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.access_token
            }
        }
    })
    function getPrivateAds()
    {
        return resource2.get();
    }
    return{
        getAds: getAllAds,
        getPrivateAds: getPrivateAds
    }
}])
