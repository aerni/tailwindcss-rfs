const _ = require('lodash');

module.exports = function() {
	return ({ addUtilities, e, theme, variants }) => {
		const fontSizes = theme('fontSize', {});
		const rfsVariants = variants('rfs', []);

		const rfsUtilities = _.map(fontSizes, (value, key) => ({
			[`.rfs-${e(key)}`]: {
				rfs: `${value}`
			}
		}));

		addUtilities(rfsUtilities, rfsVariants);
	};
};