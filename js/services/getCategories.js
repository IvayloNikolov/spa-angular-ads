adsApp.factory('categoriesData', ['$resource', function($resource){
    var resource = $resource('http://localhost:1337/api/Categories');
    function getAllCategories(){
        return resource.query();
    }
    return{
        getCategories: getAllCategories
    }
}])
