/**
 * Created by 123 on 12.05.2017.
 */
describe('Services testing', function(){
    beforeEach(angular.mock.module('app'));

    it('Service unit test', function () {
        angular.mock.inject(function (myService) {
            expect(myService.getCount()).toEqual(0);
            myService.incrementCount();
            expect(myService.getCount()).toEqual(1);
        })
    })
});