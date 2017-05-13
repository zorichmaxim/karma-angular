/**
 * Created by 123 on 12.05.2017.
 */
/**
 * Created by 123 on 13.05.2017.
 */
describe('Filter test', function () {
    var mockScope, compileService;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function ($rootScope, $compile) {
        mockScope = $rootScope.$new();
        compileService = $compile;
        mockScope.data = [
            {name:'item 1', price: 1},
            {name:'item 2', price: 1},
            {name:'item 3', price: 1}]
    }));

    it('Creating the list from directive', function () {
        var compileFn = compileService("<div my-directive='data'></div>"),
            elem = compileFn(mockScope);

        expect(elem.find('ol').length).toEqual(1);
        expect(elem.find('li').length).toEqual(3);
        expect(elem.find('li').eq(0).text()).toEqual("item 1");
        expect(elem.find('li').eq(1).text()).toEqual("item 2");
        expect(elem.find('li').eq(2).text()).toEqual("item 3");

    });

});