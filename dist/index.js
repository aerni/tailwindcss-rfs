const _ = require('lodash');

const tailwindcssRfs = function(userConfig = {}) {
    return ({ addUtilities, e, theme, variants }) => {
        const defaultOptions = {
            prefix: 'rfs-',
            suffix: '',
            fontSizeUtilities: true,
            paddingUtilities: true,
            marginUtilities: true,
        };

        const options = _.defaults({}, userConfig, defaultOptions);

        const prefixNegativeModifiers = function(base, modifier) {
            if (modifier === '-') {
                return `-${base}`;
            }
            if (_.startsWith(modifier, '-')) {
                return `-${options.prefix}${base}-${modifier.slice(1)}${options.suffix}`;
            }
            return `${options.prefix}${base}-${modifier}${options.suffix}`;
        };

        const fontSizeGenerator = (size, modifier) => ({
            [`.${e(`${options.prefix}text-${modifier}${options.suffix}`)}`]: { 'font-size': `rfs(${size})` },
        });

        const paddingGenerator = (size, modifier) => ({
            [`.${e(`${options.prefix}p-${modifier}${options.suffix}`)}`]: { padding: `rfs(${size})` },
            [`.${e(`${options.prefix}py-${modifier}${options.suffix}`)}`]: { 'padding-top': `rfs(${size})`, 'padding-bottom': `rfs(${size})` },
            [`.${e(`${options.prefix}px-${modifier}${options.suffix}`)}`]: { 'padding-left': `rfs(${size})`, 'padding-right': `rfs(${size})` },
            [`.${e(`${options.prefix}pt-${modifier}${options.suffix}`)}`]: { 'padding-top': `rfs(${size})` },
            [`.${e(`${options.prefix}pr-${modifier}${options.suffix}`)}`]: { 'padding-right': `rfs(${size})` },
            [`.${e(`${options.prefix}pb-${modifier}${options.suffix}`)}`]: { 'padding-bottom': `rfs(${size})` },
            [`.${e(`${options.prefix}pl-${modifier}${options.suffix}`)}`]: { 'padding-left': `rfs(${size})` },
        });

        const marginGenerator = (size, modifier) => ({
            [`.${e(prefixNegativeModifiers('m', modifier))}`]: { margin: `rfs(${size})` },
            [`.${e(prefixNegativeModifiers('my', modifier))}`]: { 'margin-top': `rfs(${size})`, 'margin-bottom': `rfs(${size})` },
            [`.${e(prefixNegativeModifiers('mx', modifier))}`]: { 'margin-left': `rfs(${size})`, 'margin-right': `rfs(${size})` },
            [`.${e(prefixNegativeModifiers('mt', modifier))}`]: { 'margin-top': `rfs(${size})` },
            [`.${e(prefixNegativeModifiers('mr', modifier))}`]: { 'margin-right': `rfs(${size})` },
            [`.${e(prefixNegativeModifiers('mb', modifier))}`]: { 'margin-bottom': `rfs(${size})` },
            [`.${e(prefixNegativeModifiers('ml', modifier))}`]: { 'margin-left': `rfs(${size})` },
        });

        const fontSizeUtilities = _.flatMap(theme('fontSize'), fontSizeGenerator);
        const paddingUtilities = _.flatMap(theme('padding'), paddingGenerator);
        const marginUtilities = _.flatMap(theme('margin'), marginGenerator);

        if (options.fontSizeUtilities) addUtilities(fontSizeUtilities, variants('rfsFontSize'));
        if (options.paddingUtilities) addUtilities(paddingUtilities, variants('rfsPadding'));
        if (options.marginUtilities) addUtilities(marginUtilities, variants('rfsMargin'));
    };
};

module.exports = tailwindcssRfs;
