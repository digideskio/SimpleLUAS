angular.module('simpleluas.controllers', [])

.controller('HomeCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.activeLine = $rootScope.defaultActiveLine;

    $scope.isActiveLine = function (line) {
        return line === $scope.activeLine;
    };

    $scope.setActiveLine = function (line) {
        $scope.activeLine = line.toLowerCase();
        console.log('setActiveLine(),', $scope.activeLine);
    }
}]);
