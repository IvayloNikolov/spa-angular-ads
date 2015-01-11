adsApp.factory('editProfile', ['$resource', function($resource){
    function edit(data)
    {
        return $resource('http://localhost:1337/api/user/profile', {}, {
            put: {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.access_token
                }
            }
        }).put(data);
    }
    return{
        editUser: edit
    }

}])
