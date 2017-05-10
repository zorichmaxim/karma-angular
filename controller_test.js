/**
 * Created by 123 on 10.05.2017.
 */
describe('Controller test', function () {
   var mackScope = {},
       controller;

   beforeEach(angular.mock.module('app'));

   beforeEach(angular.module.inject(function ($controller, $rootScope) {
       mackScope = $rootScope.new();

       controller = $controller('appCtrl', {
          $scope : mackScope
       })
   }))

    it('Наличие count', function () {
        expect(mackScope.count).toEqual(0)
    });

    it('Работоспособность кнопки', function () {
        mackScope.increment();
        mackScope.increment();
        expect(mackScope.count).toEqual(2)
    })
});