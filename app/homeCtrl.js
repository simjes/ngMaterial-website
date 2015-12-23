angular.module('webapp')
    .controller('homeCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.testVar = "lelels";
        $scope.tstclick = function () {
            $state.go("home");
            console.log('state changed');
        }
    }]);