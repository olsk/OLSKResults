const { throws, deepEqual } = require('assert');

const mod = require('./ui-logic.js');

describe('OLSKResultsConstrainIndex', function test_OLSKResultsConstrainIndex() {

	it('throws error if param1 not array', function() {
		throws(function() {
			mod.OLSKResultsConstrainIndex(null, 0);
		}, /OLSKErrorInputNotValid/);
	});

	it('throws error if param2 not number', function() {
		throws(function() {
			mod.OLSKResultsConstrainIndex([], null);
		}, /OLSKErrorInputNotValid/);
	});

	it('returns last if param2 below 0', function() {
		deepEqual(mod.OLSKResultsConstrainIndex(['alfa', 'bravo', 'charlie'], -1), 2);
	});

	it('returns first if param2 above length', function() {
		deepEqual(mod.OLSKResultsConstrainIndex(['alfa', 'bravo', 'charlie'], 3), 0);
	});

	it('returns param2', function() {
		deepEqual(mod.OLSKResultsConstrainIndex([], 0), 0);
	});

});
