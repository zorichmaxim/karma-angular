/**
 * Created by 123 on 10.05.2017.
 */
angular.module('app',[])
    .controller('appCtrl', function($scope,$http){
        $scope.count = 0;
        $scope.increment = function () {
            $scope.count++
        };
        $http.get('package.json').then(function (result) {
            $scope.data = result.data;
        })

    });