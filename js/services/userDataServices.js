adsApp.factory('userDataService', ['$resource', function($resource){
    function getUserInfo(){
        return $resource('http://localhost:1337/api/user/profile', {}, {
            get: {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.access_token
                }
            }
        }).get();
    }

    return{
        getUserInfo: getUserInfo
    }
}])
