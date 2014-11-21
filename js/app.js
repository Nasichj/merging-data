/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/
var addressBookMod = angular.module('AddressBook', []);

addressBookMod.controller('AddressController', function($scope) {

// controller initialization goes here
    $scope.employees = pawneeEmployees;
    $scope.sortCol = 'lastName';
});