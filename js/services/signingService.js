adsApp.factory('signing', ['$resource', function($resource){
    function registerUser(user){
        return $resource('http://localhost:1337/api/user/register').save(user);
    }
    function loginUser(user){
        return $resource('http://localhost:1337/api/user/login').save(user);
    }
    return{
        register: registerUser,
        login: loginUser
    }

}])
