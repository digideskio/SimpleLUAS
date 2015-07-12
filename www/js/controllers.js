angular.module('simpleluas.controllers', [])

.controller('HomeCtrl', ['$rootScope', '$scope', 'Stations', function($rootScope, $scope, Stations) {
    $scope.activeLine = $rootScope.defaultActiveLine;

    Stations.getAll().then(function(data) {
        $scope.stations = data.stations;
        console.log('Stations.getAll() initialisation, ', $scope.stations);
    });

    $scope.isActiveLine = function (line) {
        return line === $scope.activeLine;
    };

    $scope.setActiveLine = function (line) {
        $scope.activeLine = line.toLowerCase();
        console.log('setActiveLine(),', $scope.activeLine);
    };
}]);
