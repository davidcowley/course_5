(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu_items = "";
  $scope.menu_msg = "";

  $scope.menu_btn = function () {

    if ($scope.menu_items.trim().length == 0) {
       $scope.menu_msg = "Please enter data first";
       $scope.customStyle.colorClass = "red";
    } else  {
       var number_of_items = splitString($scope.menu_items, ",");
       if (number_of_items <= 3) {
          $scope.menu_msg = "Enjoy!";
          $scope.customStyle.colorClass = "green";
       } else {
          $scope.menu_msg = "Too Many!";
          $scope.customStyle.colorClass = "green";
       }
    }
    $scope.menu_items = "";
};

$scope.customStyle = {};

}

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  return arrayOfStrings.length;
}


})();
