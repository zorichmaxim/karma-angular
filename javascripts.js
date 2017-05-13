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
        
    })
    .filter("changeCase", function(){
        return function(value, toUpper){
            if(angular.isString(value)){
                var processValue = toUpper ? value.toUpperCase() : value.toLowerCase();
                return processValue;
            } else {
                return value
            }
        }
    })
    .directive('myDirective', function () {
        return function (scope, element, attributes) {
            var attrValue = attributes['myDirective'],
                data = scope[attrValue];

            if(angular.isArray(data)){
                var e = angular.element("<ol>");
                element.append(e);
                for(var i=0;i<data.length;i++){
                    e.append(angular.element("<li>").text(data[i].name))
                }
            }
        }
    })
    .factory('myService', function () {
        var count = 0;
        return {
            incrementCount : function () {
                count++
            },
            getCount: function () {
                return count
            }
        }
    });