adsApp.factory('adsData', ['$resource', function($resource){
    function getAllAds(numberOfAds,Page)
    {
        var resource = $resource('http://localhost:1337/api/ads?StartPage='+numberOfAds+'&PageSize='+Page);
        return resource.get();
    }
    function getPossiblePages(numberOfAds,Page)
    {
        var resource = $resource('http://localhost:1337/api/ads?StartPage='+numberOfAds+'&PageSize='+Page);
        return resource.get().numPages;
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
        getPrivateAds: getPrivateAds,
        getPossiblPages: getPossiblePages
    }
}])
