import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKResults: '.OLSKResults',
	
	OLSKResultsList: '.OLSKResultsList',
	OLSKResultsListItem: '.OLSKResultsListItem',
	
	OLSKResultsEmpty: '.OLSKResultsEmpty',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKResults_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OLSKResults', function () {
		browser.assert.elements(OLSKResults, 1);
	});
	
	it('hides OLSKResultsList', function () {
		browser.assert.elements(OLSKResultsList, 0);
	});

	it('hides OLSKResultsListItem', function () {
		browser.assert.elements(OLSKResultsListItem, 0);
	});
	
	it('shows OLSKResultsEmpty', function () {
	 	browser.assert.elements(OLSKResultsEmpty, 1);
	});
	
	it('shows TestOLSKResultsEmptySlot', function () {
	 	browser.assert.elements('.TestOLSKResultsEmptySlot', 1);
	});

	context('set single', function() {

		before(function () {
			return browser.pressButton('#TestSetTestItemsSingle');	
		});
		
		it('shows OLSKResultsList', function () {
		 	browser.assert.elements(OLSKResultsList, 1);
		});
		
		it('shows OLSKResultsListItem', function () {
		 	browser.assert.elements(OLSKResultsListItem, 1);
		});
		
		it('hides OLSKResultsEmpty', function () {
			browser.assert.elements(OLSKResultsEmpty, 0);
		});

	});

	context('set multiple', function() {

		before(function () {
			return browser.pressButton('#TestSetTestItemsMultiple');	
		});

		it('shows OLSKResultsListItem', function () {
			browser.assert.elements(OLSKResultsListItem, 3);
		});
		
		it('hides OLSKResultsEmpty', function () {
			browser.assert.elements(OLSKResultsEmpty, 0);
		});

	});

	context('set zero', function() {

		before(function () {
			return browser.pressButton('#TestSetTestItemsZero');	
		});

		it('hides OLSKResultsList', function () {
			browser.assert.elements(OLSKResultsList, 0);
		});

		it('hides OLSKResultsListItem', function () {
			browser.assert.elements(OLSKResultsListItem, 0);
		});
		
		it('shows OLSKResultsEmpty', function () {
		 	browser.assert.elements(OLSKResultsEmpty, 1);
		});

	});

});
