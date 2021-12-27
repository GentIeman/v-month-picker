# v-month-picker
<a href="https://www.npmjs.com/package/v-month-picker"><img src="https://img.shields.io/npm/dt/v-month-picker.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/v-month-picker"><img src="https://img.shields.io/npm/v/v-month-picker.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/v-month-picker"><img src="https://img.shields.io/npm/l/v-month-picker.svg" alt="License"></a>

Simple year and month picker inspired by vuetify's monthpicker. <br>
Vue component compatible with Vue 2.x

- [Demo](#demo)
- [Install](#install)
- [Usage](#usage)
- [Props](#available-props)
- [License](#license)
- [Dependencies](#dependencies)

### Demo
To view a demo online: [CodeSandBox](https://codesandbox.io/s/jovial-glade-tyjd1?file=/src/App.vue) <br>
To view demo examples locally clone the repo and run ``npm install && npm run serve``

### Install
Use npm: ```npm i v-month-picker  --save```
``` javascript
import MonthPicker from 'v-month-picker';

export default {
  components: {
    MonthPicker
  }
  // your code...
}
```
### Usage
Below code in the ```<template>```:
```html 
<MonthPicker :horizontal-position="top" locale="en" />
```

### Available props
| Prop                | Type   | Default | Description                         |
|---------------------|--------|---------|-------------------------------------|
| horizontal-position | String | bottom  | Horizontal positioning of the popup |
| vertical-position   | String | center  | Vertical positioning of the popup   |
| locale              | String | ru      | Translation for months              |
| first-year          | String | 1950    | Start year                          |
| last-year           | String | 2049    | End year                            |

### Dependencies
- [v-click-outside](https://www.npmjs.com/package/v-click-outside)
- [vue](https://www.npmjs.com/package/vue)

### License
MIT
