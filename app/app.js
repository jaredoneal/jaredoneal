'use strict';

// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Good People IPA',
      abv: '8%',
      ibu: '75',
      srm: '55',
      id:'2',
      snippet: 'A double IPA.'
    }, {
      name: 'Good People Pale Ale',
      abv: '8%',
      ibu: '75',
      srm: '55',
      id:'1',
      snippet: 'A double IPA.'
    }, {
      name: 'Good People Snake Handler',
      abv: '8%',
      ibu: '75',
      srm: '55',
      id:'3',
      snippet: 'A double IPA.'
    }
    , {
      name: 'Good People Snake Handler',
      abv: '8%',
      ibu: '75',
      srm: '55',
      id:'4',
      snippet: 'A double IPA.'
    }
    , {
      name: 'Good People Snake Handler',
      abv: '8%',
      ibu: '75',
      srm: '55',
      id:'5',
      snippet: 'A double IPA.'
    }
    , {
      name: 'Good People Snake Handler',
      abv: '8%',
      ibu: '75',
      srm: '55',
      id:'6',
      snippet: 'A double IPA.'
    }
    , {
      name: 'Good People Snake Handler',
      abv: '8%',
      ibu: '75',
      srm: '55',
      id:'7',
      snippet: 'A double IPA.'
    }
  ];
});
