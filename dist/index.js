const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addVariant }) {
    addVariant('rfs', ({ container, separator }) => {
        container.walkRules(rule => {
            rule.selector = rule.selector.slice(1)

            if (isGeneralUtility(rule.selector)) {
                handleGeneralUtilities(rule)
            } else {
                handleSpaceBetweenUtilities(rule)
            }

            rule.selector = `.rfs\\${separator}${rule.selector}`
        })
    })

    const isGeneralUtility = function (selector) {
        if (/^-?space-(x|y)-/.test(selector)) return false

        return true
    }

    const handleGeneralUtilities = function (rule) {
        rule.walkDecls(decl => {
            decl.value = `rfs(${decl.value})`
        })
    }

    const handleSpaceBetweenUtilities = function (rule) {
        rule.walkDecls(decl => {
            let rawValue = decl.value.replace('calc(', '').split(' ')[0]
            let rfs = `rfs(${rawValue})`

            decl.value = decl.value.replace(rawValue, rfs)
        })
    }
})
