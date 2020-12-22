![GitHub release (latest by date)](https://img.shields.io/github/v/release/aerni/tailwindcss-rfs?style=flat-square)
![npm](https://img.shields.io/npm/dt/tailwindcss-rfs?style=flat-square)
![GitHub](https://img.shields.io/github/license/aerni/tailwindcss-rfs?style=flat-square)

# RFS Plugin for Tailwind CSS

This plugin generates RFS variants of Tailwind utility classes.

## Requirements
This plugin requires a working PostCSS setup of the [RFS PostCSS plugin](https://github.com/twbs/rfs). You can check out the `webpack.mix.js` file for a working setup using Laravel Mix.

## Installation
```
npm install tailwindcss-rfs
```

## Usage
1. Add the plugin to your Tailwind config
2. Add the `rfs` variant to any utility you want

```js
// tailwind.config.js

module.exports = {
    variants: {
        extend: {
            fontSize: ['rfs'],
            padding: ['rfs'],
            margin: ['rfs'],
            gap: ['rfs'],
        },
    },
    plugins: [
        require('tailwindcss-rfs')
    ],
}
```

## Example Output
```css
/* Original */
.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

/* RFS Variant */
.rfs\:text-6xl {
  font-size: calc(1.5rem + 3vw);
  line-height: 1;
}
```
