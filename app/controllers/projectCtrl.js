angular.module('webapp')
    .controller('projectCtrl', ['$scope', '$http', '$mdMedia', function ($scope, $http, $mdMedia) {
        $scope.getProjects = function () {
            $http.get('./projects.json').then(function (result) {
                $scope.projectColumns = getProjectInfo(result.data.projects);
                console.log($scope.projectColumns);

            }); // handle error
        }

        function getProjectInfo(projects) {
            var columns = findSize();
            var numberOfCards = projects.length;
            var cardsPerColumn = findCardsPerColumn(numberOfCards);
            var cardCounter = 0;
            var allColumnInfo = [];

            for (var i = 0; i < columns; i++) {
                var columnCards = {};
                for (j = 0; j < cardsPerColumn; j++) {
                    if (cardCounter < numberOfCards) {
                        columnCards["card" + j] = projects[cardCounter];
                        cardCounter++;
                    }   
                }
                allColumnInfo.push(columnCards);
            }
            return allColumnInfo;
        }

        function findSize() {
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

        function findCardsPerColumn(numberOfCards) {
            if ($mdMedia('xs')) {
                return numberOfCards;
            } else if ($mdMedia('sm')) {
                return Math.ceil(numberOfCards / 2);
            } else if ($mdMedia('md')) {
                return Math.ceil(numberOfCards / 3);
            } else {
                return Math.ceil(numberOfCards / 4);
            }
        }
    }]);