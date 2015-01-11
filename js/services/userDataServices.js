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
    function editUserInfo(){
        return $resource('http://localhost:1337/api/user/profile', {}, {
            put: {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.access_token
                }
            }
        }).put();
    }

    return{
        getUserInfo: getUserInfo,
        editUserInfo: editUserInfo
    }
}])
