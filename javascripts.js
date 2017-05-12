/**
 * Created by 123 on 10.05.2017.
 */
angular.module('app',[])
    .controller('appCtrl', function($scope,$http, $interval, $timeout){
        $scope.count = 0;

        $scope.intervalCount = 0;
        $scope.timerCounter = 0;

        $scope.increment = function () {
            $scope.count++
        };
  //      $http.get('package.json').then(function (result) {
  //          $scope.data = result.data;
  //      });

        $interval(function () {
            $scope.intervalCount++
        }, 5000, 10);
        
        $timeout(function () {
            $scope.timerCounter++
        },30000)
        
    });