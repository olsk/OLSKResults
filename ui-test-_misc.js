import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKResults_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('binds OLSKResultsListItemSelected', function () {
		browser.assert.elements('.OLSKResultsListItemSelected', 0);
		browser.assert.text('#TestItemSelected', 'null');
	});

	context('set initial', function () {

		before(function() {
			browser.pressButton('#TestSetTestItemsMultiple');
		});

		it('selects none', function() {
			browser.assert.elements('.OLSKResultsListItemSelected', 0);
		});

	});

	context('select', function () {
	
		before(function () {
			browser.pressButton('#TestSetTestItemSelected');
		});

		it('sets class', function() {
			browser.assert.elements('.OLSKResultsListItemSelected', 1);
			browser.assert.text('.OLSKResultsListItemSelected', 'bravo');
		});

	});

	context('ArrowDown', function () {

		before(function () {
			browser.assert.text('#TestOLSKResultsDispatchArrow', '0');
		});
	
		before(function () {
			return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowDown');
		});

		it('sets class', function() {
			browser.assert.elements('.OLSKResultsListItemSelected', 1);
			browser.assert.text('.OLSKResultsListItemSelected', 'charlie');
		});

		it('sends ResultListDispatchArrow', function() {
			browser.assert.text('#TestOLSKResultsDispatchArrow', '1');
		});

		it('sends detail', function() {
			browser.assert.text('#TestItemSelected', 'charlie');
		});

	});

	context('ArrowUp', function () {
	
		before(function () {
			return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowUp');
		});

		it('sets class', function() {
			browser.assert.elements('.OLSKResultsListItemSelected', 1);
			browser.assert.text('.OLSKResultsListItemSelected', 'bravo');
		});

		it('sends ResultListDispatchArrow', function() {
			browser.assert.text('#TestOLSKResultsDispatchArrow', '2');
		});

		it('sends detail', function() {
			browser.assert.text('#TestItemSelected', 'bravo');
		});

	});

	context('change items exclude selected', function () {
	
		before(function () {
			browser.pressButton('#TestSetTestItemsSingle');
		});

		it('selects none', function () {
			browser.assert.elements('.OLSKResultsListItemSelected', 0);
		});

	});

	context('click item', function () {

		before(function () {
			browser.assert.text('#TestOLSKResultsDispatchClick', '0');
		});
	
		before(function () {
			return browser.click(OLSKResultsListItem);
		});

		it('sets class', function () {
			browser.assert.elements('.OLSKResultsListItemSelected', 1);
			browser.assert.text('.OLSKResultsListItemSelected', 'alfa');
		});

		it('sends ResultListDispatchClick', function() {
			browser.assert.text('#TestOLSKResultsDispatchClick', '1');
		});

		it('sends detail', function() {
			browser.assert.text('#TestItemSelected', 'alfa');
		});

	});

	context('set items include selected', function () {

		before(function () {
			browser.pressButton('#TestSetTestItemsSingle');
		});
	
		it('keeps previous selection', function () {
			browser.assert.text('.OLSKResultsListItemSelected', 'alfa');
		});

	});

	context('ArrowUp on first item', function () {

		before(function () {
			return browser.pressButton('#TestSetTestItemsMultiple');
		});
	
		before(function () {
			return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowUp');
		});

		it('sets to last', function() {
			browser.assert.elements('.OLSKResultsListItemSelected', 1);
			browser.assert.text('.OLSKResultsListItemSelected', 'charlie');
		});

	});

	context('ArrowDown on last item', function () {
	
		before(function () {
			return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowDown');
		});

		it('sets to first', function() {
			browser.assert.elements('.OLSKResultsListItemSelected', 1);
			browser.assert.text('.OLSKResultsListItemSelected', 'alfa');
		});

	});

});
