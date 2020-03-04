![GitHub release (latest by date)](https://img.shields.io/github/v/release/aerni/tailwindcss-rfs?style=flat-square)
![npm](https://img.shields.io/npm/dt/tailwindcss-rfs?style=flat-square)
![GitHub](https://img.shields.io/github/license/aerni/tailwindcss-rfs?style=flat-square)

# RFS Plugin for Tailwind CSS

This is a Tailwind CSS plugin to generate utility classes for RFS. 

## About RFS
RFS is a unit resizing engine which automatically calculates the appropriate values based on the dimensions of the browser viewport. 

[Learn more about RFS](https://github.com/twbs/rfs)

**Important!**
This plugin requires a working PostCSS setup of RFS in order to make use of the resizing engine of RFS. The plugin by itself only generates utility classes which then are transformed by RFS itself. You can check out the `webpack.mix.js` file for a working setup using Laravel Mix.

## Requirements
This plugin requires Tailwind CSS v1.2.0 or later. If your project uses an older version of Tailwind, you should install v2.1.1 of this plugin.

```yarn
yarn add tailwindcss-rfs@2.1.1
```

## Installation
```
yarn add tailwindcss-rfs
```

## Usage
Add the plugin to your Tailwind configuration:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-rfs')
  ]
};
```

### Options
The plugin exposes the following options:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-rfs')({
      prefix: 'rfs-',
      suffix: '',
      fontSizeUtilities: true,
      paddingUtilities: true,
      marginUtilities: true,
      widthUtilities: false,
      maxWidthUtilities: false,
      minWidthUtilities: false,
      heightUtilities: false,
      maxHeightUtilities: false,
      minHeightUtilities: false,
    })
  ]
};
```

#### Prefix
By default all generated class names will start with `rfs-`. You can override this behaviour by changing the value of `prefix`:

```js
prefix: '', // default: 'rfs-'
```

#### Suffix
You can also choose to use a `suffix` at the end of the generated class names:

```js
suffix: '-rfs', // default: ''
```

#### Utilities
By default this plugin generates utility classes for `fontSize`, `padding` and `margin`. Optionally you can activate the generation of utility classes for `width`, `maxWidth`, `minWidth`, `height`, `maxHeight` and `minHeight` as well.

```js
fontSizeUtilities: true, // default: true
paddingUtilities: true, // default: true
marginUtilities: true, // default: true
widthUtilities: false, // default: false
maxWidthUtilities: false, // default: false
minWidthUtilities: false, // default: false
heightUtilities: false, // default: false
maxHeightUtilities: false, // default: false
minHeightUtilities: false, // default: false
```

### Variants
You can also generate variants for the utility classes like this:

```js
// tailwind.config.js
module.exports = {
  variants: {
    rfsFontSize: ['responsive'], // default: []
    rfsPadding: ['responsive'], // default: []
    rfsMargin: ['responsive'], // default: []
    rfsWidth: ['responsive'], // default: []
    rfsMaxWidth: ['responsive'], // default: []
    rfsMinWidth: ['responsive'], // default: []
    rfsHeight: ['responsive'], // default: []
    rfsMaxHeight: ['responsive'], // default: []
    rfsMinHeight: ['responsive'], // default: []
  }
};
```

## Generated Utility Classes
This plugin generates utility classes based on the keys of `fontSize`, `padding`, `margin`, `width`, `maxWidth`, `minWidth`, `height`, `maxHeight` and `minHeight` in the `theme` section of your `tailwind.config.js`. The generated class names follow the naming convention of Tailwind. By default all generated class names have a prefix of `rfs-`.

### fontSize
```css
.rfs-text-[key]
```

### padding
```css
.rfs-p-[key]
.rfs-py-[key]
.rfs-px-[key]
.rfs-pt-[key]
.rfs-pr-[key]
.rfs-pb-[key]
.rfs-pl-[key]
```

### margin
```css
.rfs-m-[key]
.rfs-my-[key]
.rfs-mx-[key]
.rfs-mt-[key]
.rfs-mr-[key]
.rfs-mb-[key]
.rfs-ml-[key]
.-rfs-m-[key]
.-rfs-my-[key]
.-rfs-mx-[key]
.-rfs-mt-[key]
.-rfs-mr-[key]
.-rfs-mb-[key]
.-rfs-ml-[key]
```

### width
```css
.rfs-w-[key]
```

### maxWidth
```css
.rfs-max-w-[key]
```

### minWidth
```css
.rfs-min-w-[key]
```

### height
```css
.rfs-h-[key]
```

### maxHeight
```css
.rfs-max-h-[key]
```

### minHeight
```css
.rfs-min-h-[key]
```

**Note: You might want to disable the `corePlugins` in your Tailwind configuration for the utilities that you enabled in the options.**

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-rfs')({
      prefix: 'rfs-',
      suffix: '',
      fontSizeUtilities: true,
      paddingUtilities: true,
      marginUtilities: true,
      widthUtilities: true,
      maxWidthUtilities: true,
      minWidthUtilities: true,
      heightUtilities: true,
      maxHeightUtilities: true,
      minHeightUtilities: true,
    })
  ],
  corePlugins: {
    fontSize: false,
    padding: false,
    margin: false,
    width: false,
    maxWidth: false,
    minWidth: false,
    height: false,
    maxHeight: false,
    minHeight: false,
  }
}
```
