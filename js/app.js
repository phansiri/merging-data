angular.module('AddressBook', [])
    .controller('AddressController', function($scope) {
        $scope.employees = pawneeEmployees;
        $scope.searchString = '';
        $scope.sortCol = 'lastName';
        $scope.order = function(colName) {
            $scope.sortCol = colName;
        };
    });