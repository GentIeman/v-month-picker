(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["monthpicker"] = factory();
	else
		root["monthpicker"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0d0e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("dcc0");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("eaf1450e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "57d5":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap);"]);
// Module
exports.push([module.i, ":root{--primary-color:#1867c0;--secondary-color:#7ca9db}*,:after,:before{margin:0;padding:0;box-sizing:border-box}.date-picker{display:grid;place-items:center;position:relative;width:150px;height:-webkit-min-content;height:-moz-min-content;height:min-content}.h-side-left{place-items:start}.h-side-right{place-items:end}.v-side-top{top:-360px}.v-side-bottom{top:35px}.date{display:grid;grid-template-areas:\"txt txt btn\" \"line line line\";place-items:center start;place-content:space-between;position:relative;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.date__display{display:flex;justify-content:flex-end;grid-area:txt}.display{font:normal 1em sans-serif;color:#333;text-transform:capitalize;cursor:pointer}.date__calendar-btn{position:relative;width:25px;height:25px;grid-area:btn;cursor:pointer;margin-left:5px}.calendar-btn{border:none;background-color:transparent;outline:none}.calendar-btn>svg>path{transition:all .5s}.date__calendar-btn_focus:focus svg>path,.date__calendar-btn_focus svg>path,.date__calendar-btn_hover:hover svg>path{fill:var(--primary-color,#1867c0)}.date__line{width:0;height:1.5px;background-color:#ccc;grid-area:line;transition:all .5s;opacity:0}.date__line_active{width:100%;opacity:1}@media (prefers-reduced-motion:no-preference){.fade-down-enter-active,.fade-down-leave-active{transition:all .5s ease}.fade-down-enter,.fade-down-leave-to{opacity:0;transform:translateY(-10px)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "740e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSelectorModal_vue_vue_type_style_index_0_id_4d11339e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0d0e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSelectorModal_vue_vue_type_style_index_0_id_4d11339e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSelectorModal_vue_vue_type_style_index_0_id_4d11339e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "77fc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("57d5");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("15dbc322", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7a6c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSelectorModalAccordeon_vue_vue_type_style_index_0_id_93681324_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e7a4");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSelectorModalAccordeon_vue_vue_type_style_index_0_id_93681324_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSelectorModalAccordeon_vue_vue_type_style_index_0_id_93681324_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "c28b":
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(this,function(){var e="undefined"!=typeof window,n="undefined"!=typeof navigator,t=e&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var n=e.event,t=e.handler;(0,e.middleware)(n)&&t(n)}function r(e,n){var r=function(e){var n="function"==typeof e;if(!n&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:n?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||t,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(n.value),d=r.handler,o=r.middleware,a=r.detectIframe;if(r.isActive){if(e["__v-click-outside"]=r.events.map(function(n){return{event:n,srcTarget:document.documentElement,handler:function(n){return function(e){var n=e.el,t=e.event,r=e.handler,d=e.middleware,o=t.path||t.composedPath&&t.composedPath();(o?o.indexOf(n)<0:!n.contains(t.target))&&i({event:t,handler:r,middleware:d})}({el:e,event:n,handler:d,middleware:o})}}}),a){var c={event:"blur",srcTarget:window,handler:function(n){return function(e){var n=e.el,t=e.event,r=e.handler,d=e.middleware;setTimeout(function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!n.contains(e)&&i({event:t,handler:r,middleware:d})},0)}({el:e,event:n,handler:d,middleware:o})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[c])}e["__v-click-outside"].forEach(function(n){var t=n.event,i=n.srcTarget,r=n.handler;return setTimeout(function(){e["__v-click-outside"]&&i.addEventListener(t,r,!1)},0)})}}function d(e){(e["__v-click-outside"]||[]).forEach(function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)}),delete e["__v-click-outside"]}var o=e?{bind:r,update:function(e,n){var t=n.value,i=n.oldValue;JSON.stringify(t)!==JSON.stringify(i)&&(d(e),r(e,{value:t}))},unbind:d}:{};return{install:function(e){e.directive("click-outside",o)},directive:o}});
//# sourceMappingURL=v-click-outside.umd.js.map


/***/ }),

/***/ "d8f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthPicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("77fc");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthPicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthPicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dcc0":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".popup[data-v-4d11339e]{position:absolute;width:300px;height:350px;border:solid 2px var(--primary-color);border-radius:5px;background-color:#fff;z-index:2;overflow:hidden}.popup__header[data-v-4d11339e]{display:flex;position:relative;width:100%;height:100px;background-color:var(--primary-color)}.popup__header .popup__header-container[data-v-4d11339e]{margin-left:20px;align-self:center}.popup__current-month[data-v-4d11339e]{color:#fff;font:normal 2em Roboto,sans-serif;text-transform:capitalize}.popup__current-month[data-v-4d11339e],.popup__current-year[data-v-4d11339e]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.popup__current-year[data-v-4d11339e]{display:inline-block;color:var(--secondary-color,#7ca9db);font:normal 1.4em Roboto,sans-serif;transition:color .3s}.popup__current-year_hover[data-v-4d11339e]:hover{color:#4392e3}.years-slider[data-v-4d11339e]{display:flex;width:100%;height:40px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.years-slider__inner[data-v-4d11339e]{display:flex;margin:auto;justify-content:center;align-items:center;width:90%}.years-slider__selected-year[data-v-4d11339e]{display:flex;justify-content:center;margin:auto;width:100px;transition:all .5s}.years-slider__selected-year_focus[data-v-4d11339e]:focus,.years-slider__selected-year_hover[data-v-4d11339e]:hover{color:#333}.selected-year[data-v-4d11339e]{font:normal 1.1rem sans-serif;color:#a8a8a8;outline:none}.years-slider__btn-left[data-v-4d11339e],.years-slider__btn-right[data-v-4d11339e]{display:flex;justify-content:center;align-items:center;padding:5px;border-radius:50%}.btn[data-v-4d11339e]{background:none;outline:none;border:none;cursor:pointer}.btn>svg[data-v-4d11339e]{transition:all .5s}.btn_hover:hover svg[data-v-4d11339e]{fill:var(--secondary-color)}.years-slider__btn-left_focused[data-v-4d11339e]:focus,.years-slider__btn-right_focused[data-v-4d11339e]:focus{background-color:#e8e8e8}.months-grid[data-v-4d11339e]{position:relative;width:100%;height:200px}.months-grid .months-grid__list[data-v-4d11339e]{display:grid;position:relative;list-style:none;justify-items:center;width:100%;height:inherit;grid-template-columns:repeat(auto-fit,minmax(80px,1fr))}.months-grid .months-grid__item[data-v-4d11339e]{padding:10px}.months-grid__month[data-v-4d11339e]{width:80px;height:30px;border:1px solid red;border-radius:5px}.months-grid__month.months-grid__month-current[data-v-4d11339e]{background-color:rgba(24,103,192,.2);color:var(--primary-color)}.months-grid__month_hover[data-v-4d11339e]:not(.months-grid__month_selected,.months-grid__month-current):hover{background-color:#ece5e5;color:#a39d9d}.month[data-v-4d11339e]{background-color:transparent;color:#a39d9d;font-size:1.05em;border:none;transition:all .2s;cursor:pointer;outline:none;text-transform:capitalize}.months-grid__month.months-grid__month_selected[data-v-4d11339e]{background-color:var(--primary-color);color:#fff}.months-grid__month_focused[data-v-4d11339e]:not(.months-grid__month_selected,.months-grid__month-current):focus{background-color:#ece5e5;color:#a39d9d}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e7a4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("eaba");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0c958662", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "eaba":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".years-accordeon[data-v-93681324]::-webkit-scrollbar{width:0}.years-accordeon[data-v-93681324]{display:flex;justify-content:center;background-color:#fff;width:100%;height:247px;overflow-y:scroll;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;scrollbar-width:none}.years-accordeon .years-accordeon__list[data-v-93681324]{display:grid;grid-auto-rows:auto;list-style:none;width:100%}.years-accordeon .years-accordeon__item[data-v-93681324]{display:flex;justify-content:center;padding:10px 0;color:#000;font:normal .9rem sans-serif;cursor:pointer;transition:all .5s}.years-accordeon__item.years-accordeon__current-year[data-v-93681324]{color:var(--secondary-color);font:700 1rem sans-serif}.years-accordeon__item.years-accordeon__item_selected[data-v-93681324]{color:#2879d3;font-weight:700;font-size:1.3rem;background-color:#e3e3e3}.years-accordeon__item_hover[data-v-93681324]:not(.years-accordeon__item_selected):hover{background-color:#f1f0f0}@media (prefers-reduced-motion:no-preference){.fade-enter-active[data-v-93681324],.fade-leave-active[data-v-93681324]{transition:all .2s ease}.fade-enter[data-v-93681324],.fade-leave-to[data-v-93681324]{opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13b5369e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MonthPicker.vue?vue&type=template&id=4a86e1f6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.externalClick),expression:"externalClick"}],staticClass:"date-picker",class:_vm.getHorizontalPosition},[_c('div',{staticClass:"date",on:{"click":function($event){_vm.click = !_vm.click}}},[_c('p',{staticClass:" date__display display"},[_vm._v(_vm._s(_vm.month)+" "+_vm._s(_vm.year))]),_c('button',{staticClass:"date__calendar-btn calendar-btn date__calendar-btn_hover",class:{'date__calendar-btn_focus':_vm.click}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20","height":"22","viewBox":"0 0 20 22"}},[_c('path',{attrs:{"d":"M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z","transform":"translate(-2 -1)","fill":"#bdc3c7"}})])]),_c('div',{staticClass:"date__line",class:{'date__line_active': _vm.click}})]),_c('transition',{attrs:{"name":"fade-down"}},[(_vm.click === true)?_c('DateSelectorModal',{class:_vm.getVerticalPosition,attrs:{"currentMonth":_vm.month,"selectedMonthGraph":_vm.selectedMonthGraph,"currentYear":_vm.year,"firstYear":_vm.validatedFirstYear,"lastYear":_vm.validatedLastYear,"locale":_vm.validatedLocale},on:{"yearChanged":function($event){return _vm.getYear($event)},"monthChanged":function($event){return _vm.getMonth($event)},"update:currentMonth":function($event){_vm.month=$event},"update:current-month":function($event){_vm.month=$event},"selectedMonth":function($event){return _vm.getSelectedMonth($event)},"update:currentYear":function($event){_vm.year=$event},"update:current-year":function($event){_vm.year=$event},"index":function($event){return _vm.getIndex($event)}}}):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MonthPicker.vue?vue&type=template&id=4a86e1f6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13b5369e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DateSelectorModal.vue?vue&type=template&id=4d11339e&scoped=true&
var DateSelectorModalvue_type_template_id_4d11339e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"popup"},[_c('header',{staticClass:"popup__header"},[_c('div',{staticClass:"popup__header-container"},[_c('h1',{staticClass:"popup__current-month",on:{"click":function($event){_vm.showYearsList = false}}},[_vm._v(" "+_vm._s(_vm.currentMonth))]),_c('h3',{staticClass:"popup__current-year popup__current-year_hover",on:{"click":function($event){_vm.showYearsList = !_vm.showYearsList}}},[_vm._v(" "+_vm._s(_vm.selectedYear)+" ")])])]),_c('DateSelectorModalAccordeon',{attrs:{"showYearsList":_vm.showYearsList,"selectedYear":_vm.selectedYear,"arrYear":_vm.years},on:{"hideYearsList":function($event){_vm.showYearsList = false},"selectedYear":function($event){return _vm.getAccorderonYear($event)}}}),(_vm.showYearsList === false)?_c('section',{staticClass:"years-slider"},[_c('div',{staticClass:"years-slider__inner"},[_c('button',{staticClass:"years-slider__btn-left years-slider__btn-left_focused btn btn_hover btn_focused",on:{"click":function($event){return _vm.yearListStepper(-1)}}},[_c('svg',{attrs:{"width":"15","height":"15","viewBox":"0 0 496 793","fill":"#C5C2C2","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M169.896 396.024L474.645 119.557C502.005 92.197 502.005 47.88 474.645 20.52C447.285 -6.84 402.968 -6.84 375.609 20.52L21.11 342.161C6.327 356.944 -0.192002 376.699 1.026 396.058C-0.192002 415.417 6.327 435.172 21.11 449.955L375.641 771.561C403.001 798.921 447.318 798.921 474.678 771.561C502.038 744.201 502.038 699.884 474.678 672.525L169.896 396.024Z"}})])]),_c('div',{staticClass:"years-slider__selected-year selected-year years-slider__selected-year_hover years-slider__selected-year_focus",attrs:{"tabindex":"0"},on:{"click":function($event){_vm.showYearsList = !_vm.showYearsList}}},[_vm._v(" "+_vm._s(_vm.selectedYear)+" ")]),_c('button',{staticClass:"years-slider__btn-right years-slider__btn-right_focused btn btn_hover btn_focused",on:{"click":function($event){return _vm.yearListStepper(1)}}},[_c('svg',{attrs:{"width":"15","height":"15","viewBox":"0 0 496 793","fill":"#C5C2C2","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M326.184 396.057L21.4354 672.524C-5.92464 699.884 -5.92464 744.201 21.4354 771.561C48.7954 798.921 93.1124 798.921 120.471 771.561L474.97 449.92C489.753 435.137 496.272 415.382 495.054 396.023C496.272 376.664 489.753 356.909 474.97 342.126L120.439 20.52C93.0794 -6.83998 48.7624 -6.83998 21.4024 20.52C-5.9576 47.88 -5.9576 92.197 21.4024 119.556L326.184 396.057Z"}})])])])]):_vm._e(),(_vm.showYearsList === false)?_c('section',{staticClass:"months-grid"},[_c('ul',{staticClass:"months-grid__list"},_vm._l((_vm.monthsShort),function(month,index){return _c('li',{key:index,staticClass:"months-grid__item"},[_c('button',{staticClass:"months-grid__month months-grid__month_hover months-grid__month_focused month",class:{'months-grid__month-current': month === _vm.currentMonthShort, 'months-grid__month_selected': month === _vm.selectedMonth},on:{"click":function($event){return _vm.selectMonth(month)},"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.selectMonth(month)}}},[_vm._v(" "+_vm._s(month)+" ")])])}),0)]):_vm._e()],1)}
var DateSelectorModalvue_type_template_id_4d11339e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DateSelectorModal.vue?vue&type=template&id=4d11339e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13b5369e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DateSelectorModalAccordeon.vue?vue&type=template&id=93681324&scoped=true&
var DateSelectorModalAccordeonvue_type_template_id_93681324_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.showYearsList === true)?_c('section',{staticClass:"years-accordeon"},[_c('ul',{staticClass:"years-accordeon__list"},_vm._l((_vm.arrYear),function(item){return _c('li',{key:item,ref:"year",refInFor:true,staticClass:"years-accordeon__item years-accordeon__item_hover",class:{'years-accordeon__current-year': item === _vm.currentYearAccordeon, 'years-accordeon__item_selected' : item == _vm.selectedYear},on:{"click":function($event){return _vm.selectYear(item)}}},[_vm._v(" "+_vm._s(item)+" ")])}),0)]):_vm._e()])}
var DateSelectorModalAccordeonvue_type_template_id_93681324_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DateSelectorModalAccordeon.vue?vue&type=template&id=93681324&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DateSelectorModalAccordeon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DateSelectorModalAccordeonvue_type_script_lang_js_ = ({
  name: "DateSelectorModalAccordeon",
  props: ['showYearsList', 'selectedYear', 'arrYear'],
  data() {
    return {
      currentYearAccordeon: new Date().getFullYear(),
    }
  },
  updated() {
    this.handlerScroll()
  },
  methods: {
    selectYear(item) {
      this.$emit('selectedYear', this.tempYear = item)
      this.$emit('hideYearsList')
    },
    handlerScroll() {
      this.$refs.year.forEach(item => {
        if (item.innerText == this.selectedYear) {
          item.scrollIntoView({block: 'center'})
        }
      })
    }
  }
});

// CONCATENATED MODULE: ./src/components/DateSelectorModalAccordeon.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DateSelectorModalAccordeonvue_type_script_lang_js_ = (DateSelectorModalAccordeonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/DateSelectorModalAccordeon.vue?vue&type=style&index=0&id=93681324&scoped=true&lang=css&
var DateSelectorModalAccordeonvue_type_style_index_0_id_93681324_scoped_true_lang_css_ = __webpack_require__("7a6c");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/DateSelectorModalAccordeon.vue






/* normalize component */

var component = normalizeComponent(
  components_DateSelectorModalAccordeonvue_type_script_lang_js_,
  DateSelectorModalAccordeonvue_type_template_id_93681324_scoped_true_render,
  DateSelectorModalAccordeonvue_type_template_id_93681324_scoped_true_staticRenderFns,
  false,
  null,
  "93681324",
  null
  
)

/* harmony default export */ var DateSelectorModalAccordeon = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DateSelectorModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var DateSelectorModalvue_type_script_lang_js_ = ({
  name: "DateSelectorModal",
  components: {DateSelectorModalAccordeon: DateSelectorModalAccordeon},
   props: ['currentMonth', 'currentYear', 'selectedMonthGraph', 'firstYear', 'lastYear', 'locale'],
  data() {
    return {
      currentMonthShort: new Date().toLocaleString(this.locale, {month: "short"}).replace(/\.$/, ""),
      years: [],
      selectedMonth: this.selectedMonthGraph,
      selectedYear: this.currentYear,
      showYearsList: false,
      monthsShort: [],
      monthsLong: [],
    }
  },
  created() {
    for (let year = Number(this.firstYear); year <= Number(this.lastYear); year++) this.years.push(year)

    this.monthsShort = new Array(12).fill(0).map((item, i) => {
      return new Date(`${this.currentYear}-${i + 1}`) // ${this.currentYear}- firefox
        .toLocaleDateString(this.locale, {month: 'short'})
        .replace(/\.$/, "")
    })

    this.monthsLong = new Array(12).fill(0).map((item, i) => {
      return new Date(`${this.currentYear}-${i + 1}`) // ${this.currentYear}- firefox
        .toLocaleDateString(this.locale, {month: 'long'})
    })
  },
  methods: {
    yearListStepper(dir) {
      let pos = this.years.findIndex(item => item === this.selectedYear)
      this.selectedYear = this.years[pos + dir > this.years.length - 1 ? 0 : pos + dir < 0 ? this.years.length - 1 : pos + dir]
      this.$emit('yearChanged', this.selectedYear)
    },
    selectMonth(item) {
      this.selectedMonth = this.monthsShort[this.monthsShort.findIndex(pos => pos === item)]
      this.$emit('monthChanged', this.monthsLong[this.monthsShort.findIndex(pos => pos === item)])
      this.$emit('index', this.monthsShort.indexOf(item) + 1)
      this.$emit('selectedMonth', this.selectedMonth)
    },
    getAccorderonYear(item) {
      this.$emit('yearChanged', this.selectedYear = item)
    }
  }
});

// CONCATENATED MODULE: ./src/components/DateSelectorModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DateSelectorModalvue_type_script_lang_js_ = (DateSelectorModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/DateSelectorModal.vue?vue&type=style&index=0&id=4d11339e&scoped=true&lang=css&
var DateSelectorModalvue_type_style_index_0_id_4d11339e_scoped_true_lang_css_ = __webpack_require__("740e");

// CONCATENATED MODULE: ./src/components/DateSelectorModal.vue






/* normalize component */

var DateSelectorModal_component = normalizeComponent(
  components_DateSelectorModalvue_type_script_lang_js_,
  DateSelectorModalvue_type_template_id_4d11339e_scoped_true_render,
  DateSelectorModalvue_type_template_id_4d11339e_scoped_true_staticRenderFns,
  false,
  null,
  "4d11339e",
  null
  
)

/* harmony default export */ var DateSelectorModal = (DateSelectorModal_component.exports);
// EXTERNAL MODULE: ./node_modules/v-click-outside/dist/v-click-outside.umd.js
var v_click_outside_umd = __webpack_require__("c28b");
var v_click_outside_umd_default = /*#__PURE__*/__webpack_require__.n(v_click_outside_umd);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MonthPicker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var MonthPickervue_type_script_lang_js_ = ({
  name: "month-picker",
  components: { DateSelectorModal: DateSelectorModal },
  directives: {
    clickOutside: v_click_outside_umd_default.a.directive
  },
  props: {
    horizontalAlign: {
      default: "center",
      type: String
    },
    verticalAlign: {
      default: "bottom",
      type: String
    },
    firstYear: {
      default: "1950",
      type: String
    },
    lastYear: {
      default: "2049",
      type: String
    },
    locale: {
      default: "en",
      type: String
    },
    value: {
      default: new Date().toISOString(),
      type: String
    }
  },
  data() {
    return {
      click: false,
      date: this.value,
      month: '',
      year: new Date().getFullYear(),
      monthIndex: new Date().getMonth() + 1,
      selectedMonthGraph: ""
    };
  },
  methods: {
    getSelectedMonth(item) {
      this.selectedMonthGraph = item;
    },
    externalClick() {
      this.click = false;
    },
    getYear(item) {
      this.year = item;
    },
    getMonth(item) {
      this.month = item;
    },
    getIndex(item) {
      this.monthIndex = item;
    },
    formatDateISO() {
      if (this.monthIndex < 2) this.monthIndex = "0" + this.monthIndex;
      this.date = this.year + "-" + this.monthIndex + "-00";
      this.$emit('input', this.date)
      this.$emit('changed')
    },
    parseValue() {
      if (this.value.length > 4) {
        let temp = new Date(this.value)
        this.year = temp.getFullYear()
        this.monthIndex = (temp.getMonth() + 1) < 10 ? '0' + (temp.getMonth() + 1) : temp.getMonth() + 1
      }
    }
  },
  watch: {
    year() {
      this.formatDateISO();
    },
    monthIndex() {
      this.formatDateISO();
    }
  },
  created() {
    if (this.verticalAlign !== "bottom" && this.verticalAlign !== "top") {
      throw new ReferenceError(`Attribute vertical-align has an unidentified meaning`);
    }

    if (this.horizontalAlign !== "center" && this.horizontalAlign !== "left" && this.horizontalAlign !== "right") {
      throw new ReferenceError(`Attribute horizontal-align has an unidentified meaning`);
    }

    this.month = new Date(this.value).toLocaleString(this.validatedLocale, { month: "long" })
    this.parseValue()
    this.formatDateISO()
  },
  computed: {
    validatedLocale(){
      return (this.locale.length < 1 ) ? "en" : this.locale
    },
    validatedFirstYear() {
      return (Number(this.firstYear) > 1 ) ? +this.firstYear : 1950
    },
    validatedLastYear() {
      return ((isNaN(+this.lastYear) || Number(this.lastYear)) < this.validatedFirstYear)  ? +this.validatedFirstYear + 100 : +this.lastYear
    },
    getHorizontalPosition() {
      return `h-side-${this.horizontalAlign.toLocaleLowerCase()}`;
    },
    getVerticalPosition() {
      return `v-side-${this.verticalAlign.toLocaleLowerCase()}`;
    }
  }
});

// CONCATENATED MODULE: ./src/components/MonthPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MonthPickervue_type_script_lang_js_ = (MonthPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/MonthPicker.vue?vue&type=style&index=0&lang=css&
var MonthPickervue_type_style_index_0_lang_css_ = __webpack_require__("d8f1");

// CONCATENATED MODULE: ./src/components/MonthPicker.vue






/* normalize component */

var MonthPicker_component = normalizeComponent(
  components_MonthPickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MonthPicker = (MonthPicker_component.exports);
// CONCATENATED MODULE: ./src/lib.js

/* harmony default export */ var lib = (MonthPicker);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ })

/******/ });
});
//# sourceMappingURL=monthpicker.umd.js.map