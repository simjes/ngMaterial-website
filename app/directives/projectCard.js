angular.module('proCard', [])
    .directive('projectCard', function () {
        return {
            restrict: 'E',
            scope: {
                project: '='
            },
            templateUrl: './template/projectCard.html',
            replace: false,
            controller: ['$scope', function ($scope) {
                
            }]
        };
    });