/**
 * Created by 123 on 10.05.2017.
 */
describe('Controller test', function () {
   var mackScope = {},
       controller;

   beforeEach(angular.mock.module('app'));

   beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        // создание нового scope
        mackScope = $rootScope.$new();

        // сервис $controller испольльзуется для инстанциирования объекта контроллера
        // метод принимает 2 аргумента имя контроллера и объект содержащий свойства, которые используются для разрешения зависимостей
        controller = $controller("appCtrl", {
            $scope: mackScope
        });
    }));
    it('Наличие count', function () {
        expect(mackScope.count).toEqual(0)
    });

    it('Работоспособность кнопки', function () {
        mackScope.increment();
        mackScope.increment();
        expect(mackScope.count).toEqual(2)
    })
});