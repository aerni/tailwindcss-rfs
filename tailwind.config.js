module.exports = {
    variants: {
        rfsFontSize: [], // default: []
        rfsPadding: [], // default: []
        rfsMargin: [], // default: []
    },
    plugins: [
        require('./dist/index')({
            prefix: 'rfs-', // default: 'rfs-'
            suffix: '', // default: ''
            fontSizeUtilities: true, // default: true
            paddingUtilities: true, // default: true
            marginUtilities: true, // default: true
        }),
    ],
    corePlugins: {
        fontSize: false,
        padding: false,
        margin: false,
    },
};
