angular.module('webapp')
    .controller('tabsCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.onTabSelected = function (tab) {
            switch (tab) {
                case 0:
                    $state.go("home");
                    break;
                case 1:
                    $state.go("projects");
                    break;
            }
        }
        
        /*$scope.$watch(function() {
            return $state.current.name;
        }, function(newVal, oldVal) {
            console.log(newVal);
        });*/
    }]);