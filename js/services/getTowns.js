adsApp.factory('townsData', ['$resource', function($resource){
    var resource = $resource('http://localhost:1337/api/towns');
    function getAllTowns(){
        return resource.query();
    };
    return{
        getTowns: getAllTowns
    }

}])
