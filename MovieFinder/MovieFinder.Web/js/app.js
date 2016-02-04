angular.module('app', []);

angular.module('app').controller('indexController', function ($scope, $http) {

    $scope.searchTerm = "";

    $scope.searchForMovie = function () {
        $http.get('http://www.omdbapi.com/?s=' + $scope.searchTerm)
                .success(function (data) {
                    $scope.movies = data.Search;
                })
                .error(function (error) {
                    alert(error);
                });
    };
});
