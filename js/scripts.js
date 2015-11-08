var emailer = angular.module('emailer', []);

emailer.controller('EmailController', ['$scope', function($scope) {
    $scope.emails = [
        { to: 'me', from: 'Broodmother', subject:'Feeding Time', date: 'Jan 1', body:'My brood needs food.',},
        { to: 'me', from: 'Axe', subject:'Axe hacks', date: 'Oct 1', body:'You\'re tougher than Axe thought!', },
        { to: 'me', from: 'Dazzle', subject:'Dazzle!', date: 'Nov 2', body: 'Here comes the Shadow Priest.', },
        { to: 'me', from: 'Winter Wyvern', subject:'On wings of ice', date: 'Nov 2', body: 'I will not abandon my friends to a world without winter', },
    ];

    $scope.sentEmails = [
        { to: 'Invoker', from: 'me', subject:'Mid lane', date: 'Nov 7', body: 'Bottom is missing! Careful!', },

    ]

    $scope.isEmailVisible = false;
    $scope.isComposeEmailVisible = false;
    $scope.composeEmail = {};
    $scope.activeTab='inbox';

    $scope.showEmail = function (email) {
        $scope.isEmailVisible = true;
        $scope.selectedEmail = email;
    };

    $scope.closeEmail = function() {
        $scope.isEmailVisible = false;
    };

    $scope.showComposeEmail = function() {
        $scope.composeEmail = {};
        $scope.isComposeEmailVisible = true;
    };

    $scope.forward = function() {
        $scope.isEmailVisible = false;
        $scope.composeEmail = {};
        //copy the data from the selectedEmail into composeEmail

        angular.copy($scope.selectedEmail, $scope.composeEmail);

        //edit the body and prefix it with a line and the original email information
        $scope.composeEmail.body=
        '\n------------------------------------------\n'+
        'from:' + $scope.composeEmail.from + '\n' +
        'sent:' + $scope.composeEmail.date + '\n' +
        'to:' + $scope.composeEmail.to + '\n' +
        'subject' + $scope.composeEmail.subject + '\n' +
        $scope.composeEmail.body;

        //prefix subject with "re:"
        $scope.composeEmail.subject = 'FW:' + $scope.composeEmail.subject;
        //the email is going to the person who sent it to us so populate the to field with the from field
        $scope.composeEmail.to = '';
        $scope.composeEmail.from = 'me';
        $scope.isComposeEmailVisible = true;
    };

    $scope.reply = function() {
        $scope.isEmailVisible = false;
        $scope.composeEmail = {};
        //copy the data from the selectedEmail into composeEmail

        angular.copy($scope.selectedEmail, $scope.composeEmail);

        //edit the body and prefix it with a line and the original email information
        $scope.composeEmail.body=
        '\n------------------------------------------\n'+
        'from:' + $scope.composeEmail.from + '\n' +
        'sent:' + $scope.composeEmail.date + '\n' +
        'to:' + $scope.composeEmail.to + '\n' +
        'subject' + $scope.composeEmail.subject + '\n' +
        $scope.composeEmail.body;

        //prefix subject with "re:"
        $scope.composeEmail.subject = 'RE:' + $scope.composeEmail.subject;
        //the email is going to the person who sent it to us so populate the to field with the from field
        $scope.composeEmail.to = $scope.composeEmail.from;
        $scope.composeEmail.from = 'me';
        $scope.isComposeEmailVisible = true;
    };

    $scope.closeComposeEmail = function() {
        $scope.isComposeEmailVisible = false;
    };

    $scope.sendEmail = function() {
        $scope.composeEmail.date = new Date();
        $scope.composeEmail.from = 'me';
        $scope.sentEmails.push($scope.composeEmail);
        $scope.isComposeEmailVisible = false;
    };
}]);
