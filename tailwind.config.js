module.exports = {
    variants: {
        rfsFontSize: [], // default: []
        rfsPadding: [], // default: []
        rfsMargin: [], // default: []
        rfsWidth: [], // default: []
        rfsMaxWidth: [], // default: []
        rfsMinWidth: [], // default: []
        rfsHeight: [], // default: []
        rfsMaxHeight: [], // default: []
        rfsMinHeight: [], // default: []
    },
    plugins: [
        require('./dist/index')({
            prefix: 'rfs-', // default: 'rfs-'
            suffix: '', // default: ''
            fontSizeUtilities: true, // default: true
            paddingUtilities: true, // default: true
            marginUtilities: true, // default: true
            widthUtilities: false, // default: false
            maxWidthUtilities: false, // default: false
            minWidthUtilities: false, // default: false
            heightUtilities: false, // default: false
            maxHeightUtilities: false, // default: false
            minHeightUtilities: false, // default: false
        }),
    ],
    corePlugins: {
        fontSize: false,
        padding: false,
        margin: false,
        width: true,
        maxWidth: true,
        minWidth: true,
        height: true,
        maxHeight: true,
        minHeight: true,
    },
};
