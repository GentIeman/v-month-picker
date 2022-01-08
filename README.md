# v-month-picker
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![Latest Version on NPM](https://img.shields.io/npm/v/v-month-picker.svg?style=flat-square)](https://www.npmjs.com/package/v-month-picker)
[![npm](https://img.shields.io/npm/dt/v-month-picker.svg?style=flat-square)](https://www.npmjs.com/package/v-month-picker)
[![Vue 2.x](https://img.shields.io/badge/vue-2.x-brightgreen.svg?style=flat-square)](https://vuejs.org)

## Description

Simple year and month picker inspired by vuetify's monthpicker. <br>
Vue component compatible with Vue 2.x

- [Demo](#demo)
- [Install](#install)
- [Usage](#usage)
- [Props](#available-props)
- [Dependencies](#dependencies)
- [License](#license)

## Demo
To view a demo online: [CodeSandBox](https://codesandbox.io/s/cranky-https-wi3iy?file=/src/App.vue) <br>
To view demo examples locally clone the repo and run ``npm install && npm run serve``

## Install
Use npm: ```npm i v-month-picker  --save```

## Add to project
### global
```js
// main.js
import MonthPicker from "v-month-picker";
Vue.component('MonthPicker', MonthPicker);
```
### locale
``` javascript
import MonthPicker from 'v-month-picker';

export default {
  components: {
    MonthPicker
  }
  // your code...
}
```
## Usage
Below code in the ```<template>```:<br>
```html 
<MonthPicker horizontal-align="left" vertical-align="bottom" locale="en" v-model="date"/>
```

## Available props
| Prop               | Type     | Default | Description                         |
|--------------------|----------|---------|-------------------------------------|
| v-model (required) | `String` |         | Date in ISO format                  |
| horizontal-align   | `String` | bottom  | Horizontal positioning of the popup |
| vertical-align     | `String` | center  | Vertical positioning of the popup   |
| locale             | `String` | ru      | Translation for months              |
| first-year         | `String` | 1950    | Start year                          |
| last-year          | `String` | 2049    | End year                            |

## Dependencies
- [v-click-outside](https://www.npmjs.com/package/v-click-outside)
- [vue](https://www.npmjs.com/package/vue)

## License
MIT

This is my first npm package, please don't hit me ;)
