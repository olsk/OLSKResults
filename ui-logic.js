const mod = {

	OLSKResultsConstrainIndex (param1, param2) {
		if (!Array.isArray(param1)) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param2 !== 'number') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (param2 < 0) {
			return param1.length - 1;
		}

		if (param2 >= param1.length) {
			return 0;
		}

		return param2;
	},

};

Object.assign(exports, mod);
