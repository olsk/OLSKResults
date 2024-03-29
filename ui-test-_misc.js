const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKResults_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('binds OLSKResultsListItemSelected', function () {
		browser.assert.elements('.OLSKResultsListItemSelected', 0);
		browser.assert.text('#TestItemSelected', 'null');
	});

	describe('set_OLSKResultsListItems', function () {

		before(function() {
			return browser.pressButton('#TestSetOLSKResultsListItemsMultiple');
		});

		it('selects none', function() {
			return browser.assert.elements('.OLSKResultsListItemSelected', 0);
		});

	});

	describe('set_OLSKResultsListItemSelected', function () {
	
		before(function () {
			return browser.pressButton('#TestSetOLSKResultsListItemSelectedBravo');
		});

		it('classes OLSKResultsListItemSelected', function() {
			return browser.assert.text('.OLSKResultsListItemSelected', 'bravo');
		});

	});

	describe('ArrowDown', function () {

		context('no items', function () {
			
			before(function () {
				return browser.pressButton('#TestSetOLSKResultsListItemsZero');
			});
			
			before(function () {
				return browser.pressButton('#TestSetOLSKResultsListItemSelectedNull');
			});
			
			before(function () {
				browser.assert.text('#TestOLSKResultsDispatchArrow', '0');
				browser.assert.text('#TestOLSKResultsDispatchArrowData', 'undefined');
			});

			before(function () {
				return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowDown');
			});

			it('sends no OLSKResultsDispatchArrow', function() {
				return browser.assert.text('#TestOLSKResultsDispatchArrow', '0');
			});
		
		});

		context('no selection', function () {
			
			before(function () {
				return browser.pressButton('#TestSetOLSKResultsListItemsMultiple');
			});

			before(function () {
				return browser.assert.text('#TestOLSKResultsDispatchArrow', '0');
			});

			before(function () {
				return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowDown');
			});

			it('sends OLSKResultsDispatchArrow', function() {
				browser.assert.text('#TestOLSKResultsDispatchArrow', '1');
				browser.assert.text('#TestOLSKResultsDispatchArrowData', 'alfa');
			});
		
		});

		context('selection', function () {
			
			before(function () {
				return browser.pressButton('#TestSetOLSKResultsListItemSelectedBravo');
			});

			before(function () {
				return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowDown');
			});

			it('sends OLSKResultsDispatchArrow', function() {
				browser.assert.text('#TestOLSKResultsDispatchArrow', '2');
				browser.assert.text('#TestItemSelected', 'charlie');
			});
		
		});

	});

	describe('ArrowUp', function () {
	
		context('no items', function () {
			
			before(function () {
				return browser.pressButton('#TestSetOLSKResultsListItemsZero');
			});
			
			before(function () {
				return browser.pressButton('#TestSetOLSKResultsListItemSelectedNull');
			});
			
			before(function () {
				browser.assert.text('#TestOLSKResultsDispatchArrow', '2');
				browser.assert.text('#TestOLSKResultsDispatchArrowData', 'charlie');
			});

			before(function () {
				return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowUp');
			});

			it('sends no OLSKResultsDispatchArrow', function() {
				return browser.assert.text('#TestOLSKResultsDispatchArrow', '2');
			});
		
		});

		context('no selection', function () {
			
			before(function () {
				return browser.pressButton('#TestSetOLSKResultsListItemsMultiple');
			});

			before(function () {
				return browser.assert.text('#TestOLSKResultsDispatchArrow', '2');
			});

			before(function () {
				return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowUp');
			});

			it('sends OLSKResultsDispatchArrow', function() {
				browser.assert.text('#TestOLSKResultsDispatchArrow', '3');
				browser.assert.text('#TestOLSKResultsDispatchArrowData', 'charlie');
			});
		
		});

		context('selection', function () {
			
			before(function () {
				return browser.pressButton('#TestSetOLSKResultsListItemSelectedBravo');
			});

			before(function () {
				return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowUp');
			});

			it('sends OLSKResultsDispatchArrow', function() {
				browser.assert.text('#TestOLSKResultsDispatchArrow', '4');
				browser.assert.text('#TestItemSelected', 'alfa');
			});
		
		});

	});

	describe('change items exclude selected', function () {
	
		before(function () {
			return browser.pressButton('#TestSetOLSKResultsListItemsMultiple');
		});

		before(function () {
			return browser.pressButton('#TestSetOLSKResultsListItemSelectedBravo');
		});

		before(function () {
			return browser.pressButton('#TestSetOLSKResultsListItemsSingle');
		});

		it('selects none', function () {
			return browser.assert.elements('.OLSKResultsListItemSelected', 0);
		});

	});

	describe('click item', function () {

		before(function () {
			return browser.assert.text('#TestOLSKResultsDispatchClick', '0');
		});
	
		before(function () {
			return browser.click(OLSKResultsListItem);
		});

		it('classes OLSKResultsListItemSelected', function () {
			browser.assert.elements('.OLSKResultsListItemSelected', 1);
			browser.assert.text('.OLSKResultsListItemSelected', 'alfa');
		});

		it('sends ResultListDispatchClick', function() {
			return browser.assert.text('#TestOLSKResultsDispatchClick', '1');
		});

		it('sends detail', function() {
			return browser.assert.text('#TestItemSelected', 'alfa');
		});

	});

	describe('set items include selected', function () {

		before(function () {
			return browser.pressButton('#TestSetOLSKResultsListItemsSingle');
		});
	
		it('keeps previous selection', function () {
			return browser.assert.text('.OLSKResultsListItemSelected', 'alfa');
		});

	});

	describe('ArrowUp on first item', function () {

		before(function () {
			return browser.pressButton('#TestSetOLSKResultsListItemsMultiple');
		});
	
		before(function () {
			return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowUp');
		});
	
		it('keeps previous selection', function () {
			return browser.assert.text('.OLSKResultsListItemSelected', 'alfa');
		});

		context('OLSKResultsEnableLooping', function () {
			
			before(function () {
				return browser.pressButton('#TestSetOLSKResultsEnableLooping');
			});
	
			before(function () {
				return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowUp');
			});

			it('sets to last', function() {
				browser.assert.elements('.OLSKResultsListItemSelected', 1);
				browser.assert.text('.OLSKResultsListItemSelected', 'charlie');
			});

			after(function () {
				return browser.pressButton('#TestSetOLSKResultsEnableLooping');
			});
		
		});

	});

	describe('ArrowDown on last item', function () {
	
		before(function () {
			return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowDown');
		});
	
		it('keeps previous selection', function () {
			return browser.assert.text('.OLSKResultsListItemSelected', 'charlie');
		});

		context('OLSKResultsEnableLooping', function () {
			
			before(function () {
				return browser.pressButton('#TestSetOLSKResultsEnableLooping');
			});
	
			before(function () {
				return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowDown');
			});

			it('sets to first', function() {
				browser.assert.elements('.OLSKResultsListItemSelected', 1);
				browser.assert.text('.OLSKResultsListItemSelected', 'alfa');
			});

			after(function () {
				return browser.pressButton('#TestSetOLSKResultsEnableLooping');
			});
		
		});

	});

	describe('OLSKResultsIgnoreKeyboard', function() {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKResultsIgnoreKeyboard: true,
			});
		});

		before(function () {
			return browser.pressButton('#TestSetOLSKResultsListItemsMultiple');
		});

		before(function () {
			return browser.pressButton('#TestSetOLSKResultsListItemSelectedNull');
		});
		
		context('ArrowDown', function () {

			before(function () {
				return browser.assert.text('#TestOLSKResultsDispatchArrow', '0');
			});

			before(function () {
				return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowDown');
			});

			it('sends no OLSKResultsDispatchArrow', function() {
				return browser.assert.text('#TestOLSKResultsDispatchArrow', '0');
			});
		
		});
		
		context('ArrowUp', function () {

			before(function () {
				return browser.assert.text('#TestOLSKResultsDispatchArrow', '0');
			});

			before(function () {
				return browser.OLSKFireKeyboardEvent(browser.window, 'ArrowUp');
			});

			it('sends no OLSKResultsDispatchArrow', function() {
				return browser.assert.text('#TestOLSKResultsDispatchArrow', '0');
			});
		
		});

	});

});
