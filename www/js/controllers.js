angular.module('simpleluas.controllers', [])

.controller('HomeCtrl', ['$rootScope', '$scope', '$filter', 'Stations', function($rootScope, $scope, $filter, Stations) {
    var allStations;
    $scope.activeLine = $rootScope.defaultActiveLine;

    function updateStationList() {
        $scope.stations = $filter('filter')(allStations, $scope.activeLine);
        $scope.selectedStation = $scope.stations[0];
        console.log('updateStationList(), ', $scope.stations, $scope.selectedStation);
    }

    Stations.getAll().then(function(data) {
        allStations = data.stations;
        console.log('Stations.getAll() initialisation, ', allStations);
        updateStationList();
    });

    $scope.isActiveLine = function(line) {
        return line === $scope.activeLine;
    };

    $scope.setActiveLine = function(line) {
        $scope.activeLine = line.toLowerCase();
        console.log('setActiveLine(),', $scope.activeLine);
        updateStationList();
    };
}]);
