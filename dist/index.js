const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addVariant, e }) {
    addVariant('rfs', ({ container, separator }) => {
        container.walkRules(rule => {
            rule.selector = `.${e(`rfs${separator}${rule.selector.slice(1)}`)}`
            rule.walkDecls(decl => {
                decl.value = `rfs(${decl.value})`
            })
        })
    })
})
