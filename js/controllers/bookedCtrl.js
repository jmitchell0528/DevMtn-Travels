angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, $stateParams, mainSrv) {
    var locationId = $stateParams.id
    $scope.bookedData = mainSrv.travelInfo.find(function(location) {
      return location.id.toString() === locationId
    });

    console.log($scope.bookedData)

});
