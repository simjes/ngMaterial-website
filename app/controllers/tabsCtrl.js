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

        $scope.$watch(function () {
            return $state.current;
        }, function (newVal) {
            if (newVal.name == "projects") {
                $scope.selectedIndex = 1;
            } else {
                $scope.selectedIndex = 0;
            }
        });
    }]);