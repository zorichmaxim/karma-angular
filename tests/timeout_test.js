/**
 * Created by 123 on 12.05.2017.
 */
describe('Timeout test', function () {
    var mockScope, controller, mockInterval, mockTimeout;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function ($controller, $rootScope, $interval, $timeout) {
        mockScope = $rootScope.$new();
        mockInterval = $interval;
        mockTimeout = $timeout;


        controller = $controller('appCtrl', {
            $scope: mockScope,
            $interval: mockInterval,
            $timeout: mockTimeout

        });

    }));

    it('Interval test', function () {
        for(var i=0;i<11;i++){
            // Запустим интервал с 5000мс + 10 раз
            mockInterval.flush(5000);
        }
        expect(mockScope.intervalCount).toEqual(10);
    });
    it('Timeout test', function () {
        mockTimeout.flush(30000);
        expect(mockScope.timerCounter).toEqual(1);
    });


});