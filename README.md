# RFS Plugin for Tailwind CSS

This is a Tailwind CSS plugin to generate utility classes for RFS. 

## About RFS
RFS is a unit resizing engine which automatically calculates the appropriate values based on the dimensions of the browser viewport. 

[Learn more about RFS](https://github.com/twbs/rfs)

**Important!**
This plugin requires a working PostCSS setup of RFS in order to make use of the resizing engine of RFS. The plugin by itself only generates utility classes which then are transformed by RFS itself. You can check out the `webpack.mix.js` file for a working setup using Laravel Mix.

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
    require('tailwindcss-rfs')()
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
By default this plugin generates utility classes for `fontSize`, `padding` and `margin`. You can choose to disable the utilities that you don't need. 

```js
fontSizeUtilities: true, // default: true
paddingUtilities: false, // default: true
marginUtilities: false, // default: true
```

### Variants
You can also generate variants for the classes:

```js
// tailwind.config.js
module.exports = {
  variants: {
    rfsFontSize: ['responsive'], // default: []
    rfsPadding: ['responsive'], // default: []
    rfsMargin: ['responsive'], // default: []
  }
};
```

## Generated Utility Classes
This plugin generates utility classes based on the keys of `fontSize`, `padding` and `margin` in the `theme` section of your `tailwind.config.js`. The generated class names follow the naming convention of Tailwind. By default all generated class names have a prefix of `rfs-`.

### Font Size
```css
.rfs-text-[key]
```

### Padding
```css
.rfs-p-[key]
.rfs-py-[key]
.rfs-px-[key]
.rfs-pt-[key]
.rfs-pr-[key]
.rfs-pb-[key]
.rfs-pl-[key]
```

### Margin
```css
.rfs-m-[key]
.rfs-my-[key]
.rfs-mx-[key]
.rfs-mt-[key]
.rfs-mr-[key]
.rfs-mb-[key]
.rfs-ml-[key]
```

### Negative Margin
```css
.-rfs-m-[key]
.-rfs-my-[key]
.-rfs-mx-[key]
.-rfs-mt-[key]
.-rfs-mr-[key]
.-rfs-mb-[key]
.-rfs-ml-[key]
```

**Note: You might want to disable the `corePlugins` for `fontSizes`, `padding` and `margin` in your Tailwind configuration.**

```js
// tailwind.config.js
module.exports = {
  corePlugins: {
    fontSize: false,
    padding: false,
    margin: false,
  }
}
```
