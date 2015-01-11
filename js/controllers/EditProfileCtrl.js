adsApp.controller('EditProfileCtrl', ['$scope', 'townsData','userDataService', 'editProfile', function($scope, townsData, userDataService, editProfile) {
    $scope.page = 'Edit Profile'
    $scope.isAuthenticated = localStorage.getItem('access_token');
    $scope.towns = townsData.getTowns();
    $scope.user = userDataService.getUserInfo();
    $scope.update = function(user)
    {
        if(!(user.name)) user.name = $scope.user.name;
        if(!(user.email)) user.email = $scope.user.email;
        if(!(user.phoneNumber)) user.phoneNumber = $scope.user.phoneNumber;
        if(!(user.townId)) user.townId = $scope.user.townId;
        editProfile.editUser(user);
    }
}])