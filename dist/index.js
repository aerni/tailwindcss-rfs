const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addVariant }) {
    addVariant('rfs', ({ container, separator }) => {
        container.walkRules(rule => {
            rule.selector = `.\\rfs${separator}${rule.selector.slice(1)}`
            rule.walkDecls(decl => {
                decl.value = `rfs(${decl.value})`
            })
        })
    })
})
