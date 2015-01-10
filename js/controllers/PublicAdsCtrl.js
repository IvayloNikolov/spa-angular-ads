adsApp.controller('publicAdsCtrl', ['$scope', 'adsData', function($scope, adsData)
{

    function getBase64Image(imgElem) {
// imgElem must be on the same server otherwise a cross-origin error will be thrown "SECURITY_ERR: DOM Exception 18"
        var canvas = document.createElement("canvas");
        canvas.width = imgElem.clientWidth;
        canvas.height = imgElem.clientHeight;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(imgElem, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }
    adsData.getAds()
        .$promise
        .then(function(data)
        {
            $scope.ads = data.ads;
            $scope.ads.forEach(function(ad){
                if(!ad.imageDataUrl) ad.imageDataUrl = 'http://www.konradseidler.de/uploads/pics/nopicture_02.jpg';
        })
            console.log($scope.ads);
        })

}])