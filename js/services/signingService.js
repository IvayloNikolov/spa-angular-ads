adsApp.factory('signing', ['$resource', '$location', function($resource, $location){
    function registerUser(user){
        return $resource('http://localhost:1337/api/user/register').save(user)
            .$promise
            .then(function (data) {
                n.success();
            },function(error){
                n.error()
            });;
    }
    function loginUser(user){
        return $resource('http://localhost:1337/api/user/login').save(user)
            .$promise
            .then(function (data) {
                n.success();
                authenticate(data);
                $location.path('/');
            },function(error){
                n.error()
            });;
    }
    function logoutUserFromServer(){
        return $resource('http://localhost:1337/api/user/logout/', {}, {
            post: {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.access_token
                }
            }
        }).post()
            .$promise
            .then(function()
            {
                console.log('success');
            });
    }

    function authenticate(data)
    {
        localStorage.setItem('access_token', data.access_token);
    }
    function isAuthenticated()
    {
        if(localStorage.getItem('access_token')) return true;
        return false;
    }

    return{
        register: registerUser,
        login: loginUser,
        logout: logoutUserFromServer,
        authenticate: authenticate,
        isAuthenticated: isAuthenticated
    }

}])
