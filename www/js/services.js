angular.module('simpleluas.services', [])

.factory('Stations', ['$http', '$q', function($http, $q) {

    var all = function () {
        var deferred = $q.defer();

        $http.get('js/stations.json')
        .success(function (data) {
            deferred.resolve(data);
        })
        .error(function (data, status) {
            deferred.reject('Error Code: ' + status);
        });

        return deferred.promise;
    };

    return {
        getAll: function () {
            return all();
        }
    };
}]);
