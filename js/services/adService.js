/**
 * Created by Ivaylo on 11.1.2015 г..
 */
adsApp.factory('adService', ['$resource', function($resource){
        function getAdById(id){
            return $resource('http://localhost:1337/api/user/ads/' + id, {}, {
            get: {
                method: 'get',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.access_token
                },
                data: id
            }
            })
            .get();
        }
        function editById(id, data){
            return $resource('http://localhost:1337/api/user/ads/' + id, {}, {
                put: {
                    method: 'put',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.access_token
                    }
                }
            })
                .put(data);
        }

    return {
        getAdById: getAdById,
        editById: editById
    }
}])
