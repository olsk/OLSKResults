const { throws, deepEqual } = require('assert');

const mainModule = require('./ui-logic.js');

describe('OLSKResultsConstrainIndex', function test_OLSKResultsConstrainIndex() {

	it('throws error if param1 not array', function() {
		throws(function() {
			mainModule.OLSKResultsConstrainIndex(null, 0);
		}, /OLSKErrorInputNotValid/);
	});

	it('throws error if param2 not number', function() {
		throws(function() {
			mainModule.OLSKResultsConstrainIndex([], null);
		}, /OLSKErrorInputNotValid/);
	});

	it('returns last if param2 below 0', function() {
		deepEqual(mainModule.OLSKResultsConstrainIndex(['alfa', 'bravo', 'charlie'], -1), 2);
	});

	it('returns first if param2 above length', function() {
		deepEqual(mainModule.OLSKResultsConstrainIndex(['alfa', 'bravo', 'charlie'], 3), 0);
	});

	it('returns param2', function() {
		deepEqual(mainModule.OLSKResultsConstrainIndex([], 0), 0);
	});

});
