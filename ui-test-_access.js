const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKResults: '.OLSKResults',
	
	OLSKResultsList: '.OLSKResultsList',
	OLSKResultsListItem: '.OLSKResultsListItem',
	
	OLSKResultsEmpty: '.OLSKResultsEmpty',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKResults_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OLSKResults', function () {
		return browser.assert.elements(OLSKResults, 1);
	});
	
	it('hides OLSKResultsList', function () {
		return browser.assert.elements(OLSKResultsList, 0);
	});

	it('hides OLSKResultsListItem', function () {
		return browser.assert.elements(OLSKResultsListItem, 0);
	});
	
	it('shows OLSKResultsEmpty', function () {
	 	return browser.assert.elements(OLSKResultsEmpty, 1);
	});
	
	it('shows TestOLSKResultsEmptySlot', function () {
	 	return browser.assert.elements('.TestOLSKResultsEmptySlot', 1);
	});

	context('set single', function() {

		before(function () {
			return browser.pressButton('#TestSetOLSKResultsListItemsSingle');	
		});
		
		it('shows OLSKResultsList', function () {
		 	return browser.assert.elements(OLSKResultsList, 1);
		});
		
		it('shows OLSKResultsListItem', function () {
		 	return browser.assert.elements(OLSKResultsListItem, 1);
		});
		
		it('hides OLSKResultsEmpty', function () {
			return browser.assert.elements(OLSKResultsEmpty, 0);
		});

	});

	context('set multiple', function() {

		before(function () {
			return browser.pressButton('#TestSetOLSKResultsListItemsMultiple');	
		});

		it('shows OLSKResultsListItem', function () {
			return browser.assert.elements(OLSKResultsListItem, 3);
		});
		
		it('hides OLSKResultsEmpty', function () {
			return browser.assert.elements(OLSKResultsEmpty, 0);
		});

	});

	context('set zero', function() {

		before(function () {
			return browser.pressButton('#TestSetOLSKResultsListItemsZero');	
		});

		it('hides OLSKResultsList', function () {
			return browser.assert.elements(OLSKResultsList, 0);
		});

		it('hides OLSKResultsListItem', function () {
			return browser.assert.elements(OLSKResultsListItem, 0);
		});
		
		it('shows OLSKResultsEmpty', function () {
		 	return browser.assert.elements(OLSKResultsEmpty, 1);
		});

	});

});
