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

Add `tailwindcss-rfs` to the plugins array of your Tailwind config:

```js
module.exports = {
    plugins: [
        require('tailwindcss-rfs')
    ],
}
```

## Usage

Simply apply the `rfs` variant to any sizing utility. This will pass the utility's value to the `rfs()` function and output the processed value.

**Template:**

```html
<div class="rfs:p-24">
    <p class="rfs:text-6xl">This text resizes magically!</p>
</div>
```

**Output:**

```css
.rfs\:text-6xl {
  font-size: calc(1.5rem + 3vw);
  line-height: 1;
}

.rfs\:p-24 {
  padding: calc(1.725rem + 5.7vw);
}
```

You can also stack the `rfs` variant with other variants like `hover`:

```html
<div class="rfs:p-24 hover:rfs:p-20">
    <p class="rfs:text-6xl hover:rfs:text-5xl">This text resizes magically!</p>
</div>
```
