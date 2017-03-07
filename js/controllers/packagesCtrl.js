angular.module('devmtnTravel').controller('packagesCtrl', function ($scope, $stateParams, mainSrv) {

    $scope.packagesData = mainSrv.travelInfo;

});
