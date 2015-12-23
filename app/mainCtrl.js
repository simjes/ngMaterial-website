angular.module('webapp')
    .controller('mainCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.testVar = "lelels";
        $scope.tstclick = function () {
            $state.go("home");
            console.log('state changed');
        }
    }]);