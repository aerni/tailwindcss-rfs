module.exports = {
    purge: [],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            fontSize: ['rfs'],
            lineHeight: ['rfs'],
            space: ['rfs'],
            padding: ['rfs'],
            margin: ['rfs'],
            width: ['rfs'],
            minWidth: ['rfs'],
            maxWidth: ['rfs'],
            height: ['rfs'],
            minHeight: ['rfs'],
            maxHeight: ['rfs'],
            gap: ['rfs'],
            inset: ['rfs'],
            translate: ['rfs'],
        },
    },
    plugins: [require('./dist/index')],
}
