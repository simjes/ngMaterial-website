angular.module('webapp')
    .controller('projectCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.getProjects = function () {
            $http.get('./projects.json').then( function( result) {
                console.log(result);
                $scope.projects = result.data.projects;
            }); // handle errir
        }
    }]);