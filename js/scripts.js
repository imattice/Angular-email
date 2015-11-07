var emailer = angular.module('emailer', []);

emailer.controller('EmailController', ['$scope', function($scope) {
    $scope.emails = [
        { from: 'Broodmother', subject:'Feeding Time', date: 'Jan 1', body:'My brood needs food.',},
        { from: 'Axe', subject:'Axe hacks', date: 'Oct 1', body:'You\'re tougher than Axe thought!', },
        { from: 'Dazzle', subject:'Dazzle!', date: 'Nov 2', body: 'Here comes the Shadow Priest.', },
        { from: 'Winter Wyvern', subject:'On wings of ice', date: 'Nov 2', body: 'I will not abandon my friends to a world without winter', },
    ];

    $scope.isPopupVisible = false;
    $scope.isComposePopupVisible = false;

    $scope.showPopup = function (email) {
        $scope.isPopupVisible = true;
        $scope.selectedEmail = email;
    };

    $scope.closePopup = function() {
        $scope.isPopupVisible = false;
    };

    $scope.showComposePopup = function() {
        $scope.isComposePopupVisible = true;
    };

    $scope.closeComposePopup = function() {
        $scope.isComposePopupVisible = false;
    };
}]);
