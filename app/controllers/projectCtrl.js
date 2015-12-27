angular.module('webapp')
    .controller('projectCtrl', ['$scope', '$http', '$mdMedia', function ($scope, $http, $mdMedia) {
        $scope.contentLoaded = false;

        $scope.getProjects = function () {
            $http.get('./projects.json').then(function (result) {
                $scope.projectResults = result.data.projects;
                $scope.projectColumns = getProjectInfo(result.data.projects);
                
                //contentloaded after tab change animation?
                setTimeout(function () {
                    $scope.contentLoaded = true;
                }, 75);
            }); // handle error
            
        }

        function getProjectInfo(projects) {
            if (projects) {
                var columns = findColumns();
                var numberOfCards = projects.length;
                var cardsPerColumn = Math.ceil(numberOfCards / columns);
                var cardCounter = 0;
                var allColumnInfo = [];

                for (var i = 0; i < columns; i++) {
                    var columnCards = {};
                    for (j = 0; j < cardsPerColumn; j++) {
                        if (cardCounter < numberOfCards) {
                            columnCards[j] = projects[cardCounter];
                            cardCounter++;
                        }
                    }
                    allColumnInfo.push(columnCards);
                }
                return allColumnInfo;
            }
        }

        function findColumns() {
            if ($mdMedia('xs')) {
                return 1;
            } else if ($mdMedia('sm')) {
                return 2;
            } else if ($mdMedia('md')) {
                return 3;
            } else {
                return 4;
            }
        }

        $scope.$watch(function () {
            return $mdMedia('xs');
        }, function (newVal, oldVal) {
            if (newVal) {
                $scope.projectColumns = getProjectInfo($scope.projectResults);
            }
        });

        $scope.$watch(function () {
            return $mdMedia('sm');
        }, function (newVal, oldVal) {
            if (newVal) {
                $scope.projectColumns = getProjectInfo($scope.projectResults);
            }
        });

        $scope.$watch(function () {
            return $mdMedia('md');
        }, function (newVal, oldVal) {
            if (newVal) {
                $scope.projectColumns = getProjectInfo($scope.projectResults);
            }
        });

        $scope.$watch(function () {
            return $mdMedia('lg');
        }, function (newVal, oldVal) {
            if (newVal) {
                $scope.projectColumns = getProjectInfo($scope.projectResults);
            }
        });

        $scope.$watch(function () {
            return $mdMedia('xl');
        }, function (newVal, oldVal) {
            if (newVal) {
                $scope.projectColumns = getProjectInfo($scope.projectResults);
            }
        });
    }]);