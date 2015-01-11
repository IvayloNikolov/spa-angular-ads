adsApp.factory('signing', ['$resource', function($resource){
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
            },function(error){
                n.error()
            });;
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
        authenticate: authenticate,
        isAuthenticated: isAuthenticated
    }

}])
