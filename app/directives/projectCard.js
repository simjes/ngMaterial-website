angular.module('webapp', [])
    .directive('projectCard', function () {
        return {
            restrict: 'E',
            scope: {
                project: '='
            },
            templateUrl: './template/projectCard.html',
            replace: true,
            controller: ['$scope', function ($scope) {
                
            }]
        };
    });