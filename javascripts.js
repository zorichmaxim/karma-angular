/**
 * Created by 123 on 10.05.2017.
 */
angular.module('app',[])
    .controller('appCtrl', function($scope){
        $scope.count = 0;
        $scope.increment = function () {
            $scope.count++
        }
    });