/**
 * Created by 123 on 13.05.2017.
 */
describe('Filter test', function () {
    var filterInstance;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function ($filter) {
        filterInstance = $filter('changeCase')
    }));

    it('To Lower Case', function () {
        var res = filterInstance('Hello World');
        expect(res).toEqual('hello world');
    });

    it('To Upper Case', function () {
        var res = filterInstance('Hello World', true);
        expect(res).toEqual('HELLO WORLD')
    })
});