"use strict";
(self["webpackChunkdynamic_user_interface_interactions"] = self["webpackChunkdynamic_user_interface_interactions"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./carousel/images/0.png */ "./src/carousel/images/0.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
}

.menu-container {
  position: relative;
  cursor: pointer;
}

.root-menu {
  width: 100px;
  background-color: fuchsia;
}

.sub-menu {
  display: none;
  position: absolute;

  bottom: 0px;

  width: 100px;
  background-color: greenyellow;
}

.layer-0 {
  z-index: 1;
}

.layer-minus-1 {
  z-index: -1;
}

.offset-layer {
  animation-name: offset-layer;
  animation-duration: 0.1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes offset-layer {
  from {
    opacity: 0%;
  }

  to {
    transform: translateY(100%);
    opacity: 100%;
  }
}

.sub-menu-item:hover {
  background-color: aqua;
}

.visible {
  display: block;
}

.carousel-container {
  display: flex;
  flex-direction: column;
}

.picture-frame-container {
  display: flex;
  justify-content: center;
}

.picture-frame {
  display: flex;
  overflow: hidden;

  width: calc(256px + 10px + 10px);
  height: calc(256px + 10px + 10px);
  border: 10px solid rgb(0, 0, 0);
}

.slide-show-transition-translate {
  transition: translate 0.5s ease-in-out;
}

#slide-show {
  display: flex;
  /* width: 1280px;
  justify-content: space-between; */
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 256px;
  height: 256px;
  font-size: 10rem;
}

.placeholder-slide-start {
  order: -1;
  background-color: rgb(158, 158, 158);
}

.last-slide {
  order: 1;
}

.placeholder-slide-end {
  order: 1;
  background-color: rgb(158, 158, 158);
}

.first-slide {
  order: -1;
}

#slide-0 {
  background-color: aqua;
}

#slide-0-image {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#slide-1 {
  background-color: rgb(162, 0, 255);
}

#slide-2 {
  background-color: rgb(255, 0, 106);
}

#slide-3 {
  background-color: rgb(0, 255, 98);
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

#controls {
  display: flex;
  justify-content: center;
}

#buttons {
  display: flex;
  justify-content: space-between;
  width: calc(256px + 10px + 10px);
}

.control-button {
  width: 50px;
  height: 50px;
}

#circles {
  display: flex;
  align-items: center;
}

.jump-circle {
  width: 20px;
  height: 20px;
  border: 2px solid black;
  border-radius: 10px;
}

.jump-circle-filled {
  background-color: black;
}

/* #slide-showj */
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kBAAkB;;EAElB,WAAW;;EAEX,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,4BAA4B;EAC5B,wBAAwB;EACxB,4BAA4B;EAC5B,6BAA6B;EAC7B,sCAAsC;AACxC;;AAEA;EACE;IACE,WAAW;EACb;;EAEA;IACE,2BAA2B;IAC3B,aAAa;EACf;AACF;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,gBAAgB;;EAEhB,gCAAgC;EAChC,iCAAiC;EACjC,+BAA+B;AACjC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb;mCACiC;AACnC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,oCAAoC;AACtC;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,QAAQ;EACR,oCAAoC;AACtC;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,gDAAuC;AACzC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA,iBAAiB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n}\n\n.menu-container {\n  position: relative;\n  cursor: pointer;\n}\n\n.root-menu {\n  width: 100px;\n  background-color: fuchsia;\n}\n\n.sub-menu {\n  display: none;\n  position: absolute;\n\n  bottom: 0px;\n\n  width: 100px;\n  background-color: greenyellow;\n}\n\n.layer-0 {\n  z-index: 1;\n}\n\n.layer-minus-1 {\n  z-index: -1;\n}\n\n.offset-layer {\n  animation-name: offset-layer;\n  animation-duration: 0.1s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease-in-out;\n}\n\n@keyframes offset-layer {\n  from {\n    opacity: 0%;\n  }\n\n  to {\n    transform: translateY(100%);\n    opacity: 100%;\n  }\n}\n\n.sub-menu-item:hover {\n  background-color: aqua;\n}\n\n.visible {\n  display: block;\n}\n\n.carousel-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.picture-frame-container {\n  display: flex;\n  justify-content: center;\n}\n\n.picture-frame {\n  display: flex;\n  overflow: hidden;\n\n  width: calc(256px + 10px + 10px);\n  height: calc(256px + 10px + 10px);\n  border: 10px solid rgb(0, 0, 0);\n}\n\n.slide-show-transition-translate {\n  transition: translate 0.5s ease-in-out;\n}\n\n#slide-show {\n  display: flex;\n  /* width: 1280px;\n  justify-content: space-between; */\n}\n\n.slide {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 256px;\n  height: 256px;\n  font-size: 10rem;\n}\n\n.placeholder-slide-start {\n  order: -1;\n  background-color: rgb(158, 158, 158);\n}\n\n.last-slide {\n  order: 1;\n}\n\n.placeholder-slide-end {\n  order: 1;\n  background-color: rgb(158, 158, 158);\n}\n\n.first-slide {\n  order: -1;\n}\n\n#slide-0 {\n  background-color: aqua;\n}\n\n#slide-0-image {\n  content: url('./carousel/images/0.png');\n}\n\n#slide-1 {\n  background-color: rgb(162, 0, 255);\n}\n\n#slide-2 {\n  background-color: rgb(255, 0, 106);\n}\n\n#slide-3 {\n  background-color: rgb(0, 255, 98);\n}\n\n.order-0 {\n  order: 0;\n}\n\n.order-1 {\n  order: 1;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.order-3 {\n  order: 3;\n}\n\n#controls {\n  display: flex;\n  justify-content: center;\n}\n\n#buttons {\n  display: flex;\n  justify-content: space-between;\n  width: calc(256px + 10px + 10px);\n}\n\n.control-button {\n  width: 50px;\n  height: 50px;\n}\n\n#circles {\n  display: flex;\n  align-items: center;\n}\n\n.jump-circle {\n  width: 20px;\n  height: 20px;\n  border: 2px solid black;\n  border-radius: 10px;\n}\n\n.jump-circle-filled {\n  background-color: black;\n}\n\n/* #slide-showj */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/carousel/logic/carouselLogic.js":
/*!*********************************************!*\
  !*** ./src/carousel/logic/carouselLogic.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setAutoAdvance: () => (/* binding */ setAutoAdvance)
/* harmony export */ });
const minIndex = 0;
const maxIndex = 3;

let slideIndex = 0;
const translateDistance = 256;

const slideShowHolder = document.querySelector('#slide-show-holder');
const slideShow = document.querySelector('#slide-show');

const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');

const slides = [...document.querySelectorAll('.slide')];
const jumpCircles = [...document.querySelectorAll('.jump-circle')];

jumpCircles.at(0).classList.add('jump-circle-filled');

let jumpDifference;

let transitionState;
let transitionDirection;

// const addPlaceholderSlideToStart = () => {
//   const placeholderSlide = document.createElement('div');
//   placeholderSlide.classList.add('slide', 'placeholder-slide-start');
//   slideShow.appendChild(placeholderSlide);
// };

// const addPlaceholderSlideToEnd = () => {
//   const placeholderSlide = document.createElement('div');
//   placeholderSlide.classList.add('slide', 'placeholder-slide-end');
//   slideShow.appendChild(placeholderSlide);
// };

const setAllSlideOrders = function setAllSlideOrders() {
  slides.forEach((slide, index) => {
    slide.style.order = `${index}`;
  });
};

setAllSlideOrders();

const moveLeftmostOverflowSlidesToEnd = () => {
  const slidesToAppend = slides.splice(0, jumpDifference);
  slides.push(...slidesToAppend);
  setAllSlideOrders();
};

const moveRightmostOverflowSlidesToStart = () => {
  const slidesToPrepend = slides.splice(-1 * jumpDifference);
  slides.unshift(...slidesToPrepend);
  setAllSlideOrders();
};

const addSlideShowTransitionClass = () => {
  slideShow.classList.add('slide-show-transition-translate');
};

const removeSlideShowTransitionClass = () => {
  slideShow.classList.remove('slide-show-transition-translate');
};

const translateSlideShowHolder = (value) => {
  slideShowHolder.style.translate = value;
};

const translateSlideShow = (value) => {
  slideShow.style.translate = value;
};

slideShow.addEventListener('transitionstart', () => {
  transitionState = 'started';
});

slideShow.addEventListener('transitionend', () => {
  transitionState = 'ended';

  if (transitionDirection === 'forwards') {
    moveLeftmostOverflowSlidesToEnd();

    removeSlideShowTransitionClass();

    const translateValue = '0px';
    translateSlideShow(translateValue);
  }

  if (transitionDirection === 'backwards') {
    removeSlideShowTransitionClass();

    let translateValue = '0px';
    translateSlideShowHolder(translateValue);

    translateValue = '0px';
    translateSlideShow(translateValue);
  }
});

const toggleCircle = function toggleCircle(circleIndex) {
  jumpCircles.at(circleIndex).classList.toggle('jump-circle-filled');
};

const next = function next() {
  if (transitionState === 'started') {
    return;
  }

  jumpDifference = 1;
  transitionDirection = 'forwards';
  toggleCircle(slideIndex);
  slideIndex += 1;

  if (slideIndex > maxIndex) {
    slideIndex = minIndex;
  }

  toggleCircle(slideIndex);

  addSlideShowTransitionClass();
  const translateValue = `${-1 * translateDistance}px`;
  translateSlideShow(translateValue);
};

const setupPrevious = function setupPrevious() {
  if (transitionState === 'started') {
    return;
  }

  jumpDifference = 1;
  moveRightmostOverflowSlidesToStart();

  const translateValue = `${-1 * translateDistance}px`;
  translateSlideShowHolder(translateValue);
};

const previous = function previous() {
  if (transitionState === 'started') {
    return;
  }

  transitionDirection = 'backwards';
  toggleCircle(slideIndex);
  slideIndex -= 1;

  if (slideIndex < minIndex) {
    slideIndex = maxIndex;
  }

  toggleCircle(slideIndex);

  addSlideShowTransitionClass();
  const translateValue = `${1 * translateDistance}px`;
  translateSlideShow(translateValue);
};

const setAutoAdvance = function setAutoAdvance(delay) {
  const intervalID = setInterval(() => {
    next();
  }, delay);

  return intervalID;
};

nextButton.addEventListener('click', () => {
  next();
});

previousButton.addEventListener('click', () => {
  setupPrevious();
});

previousButton.addEventListener('click', () => {
  previous();
});

const jumpForwards = function jumpForwards(targetIndex) {
  if (transitionState === 'started') {
    return;
  }

  transitionDirection = 'forwards';
  toggleCircle(slideIndex);
  slideIndex = targetIndex;

  if (slideIndex > maxIndex) {
    slideIndex = minIndex;
  }

  toggleCircle(slideIndex);

  addSlideShowTransitionClass();
  const translateValue = `${-1 * jumpDifference * translateDistance}px`;
  translateSlideShow(translateValue);
};

const jumpBackwards = function jumpBackwards(targetIndex) {
  if (transitionState === 'started') {
    return;
  }

  moveRightmostOverflowSlidesToStart();

  let translateValue = `${-1 * jumpDifference * translateDistance}px`;
  translateSlideShowHolder(translateValue);

  transitionDirection = 'backwards';
  toggleCircle(slideIndex);
  slideIndex = targetIndex;

  if (slideIndex > maxIndex) {
    slideIndex = minIndex;
  }

  toggleCircle(slideIndex);

  addSlideShowTransitionClass();
  translateValue = `${1 * jumpDifference * translateDistance}px`;
  translateSlideShow(translateValue);
};

const jump = function jump(targetIndex) {
  const indexDifference = targetIndex - slideIndex;
  const direction = Math.sign(indexDifference);
  jumpDifference = Math.abs(indexDifference);

  if (direction === 0) {
    return;
  }

  if (direction < 0) {
    jumpBackwards(targetIndex);
  }

  if (direction > 0) {
    jumpForwards(targetIndex);
  }
};

jumpCircles.forEach((circle, circleIndex) => {
  circle.addEventListener('click', () => {
    // toggleCircle(slideIndex);
    // toggleCircle(circleIndex);

    jump(circleIndex);
  });
});




/***/ }),

/***/ "./src/dropDownMenu.js":
/*!*****************************!*\
  !*** ./src/dropDownMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showSubMenu = function showSubMenu(event, subMenu) {
  subMenu.classList.add('layer-minus-1');
  subMenu.classList.remove('layer-0');

  subMenu.classList.add('visible');
  subMenu.classList.add('offset-layer');
};

const hideSubMenu = function hideSubMenu(subMenu) {
  subMenu.classList.remove('visible');
  subMenu.classList.remove('offset-layer');
};

const setupMenus = function setupMenus() {
  const menuContainers = document.querySelectorAll('.menu-container');
  menuContainers.forEach((menuContainer) => {
    const subMenu = [...menuContainer.children].find((element) =>
      element.classList.contains('sub-menu'),
    );

    menuContainer.addEventListener('mouseenter', (event) => {
      showSubMenu(event, subMenu);
    });

    menuContainer.addEventListener('mouseleave', () => {
      hideSubMenu(subMenu);
    });

    subMenu.addEventListener('animationend', () => {
      subMenu.classList.remove('layer-minus-1');
      subMenu.classList.add('layer-0');
    });

    [...subMenu.children].forEach((subMenuItem) => {
      subMenuItem.addEventListener('click', () => {
        console.log(subMenuItem.textContent);
      });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupMenus);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _carousel_logic_carouselLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel/logic/carouselLogic */ "./src/carousel/logic/carouselLogic.js");
/* harmony import */ var _dropDownMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropDownMenu */ "./src/dropDownMenu.js");






(0,_dropDownMenu__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_carousel_logic_carouselLogic__WEBPACK_IMPORTED_MODULE_1__.setAutoAdvance)(5000);


/***/ }),

/***/ "./src/carousel/images/0.png":
/*!***********************************!*\
  !*** ./src/carousel/images/0.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbb56531da47e9f69da8.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0Qix3Q0FBd0M7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQkFBMEIsd0NBQXdDO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsdUNBQXVDO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUV5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDdFAxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekNMOztBQUUyQzs7QUFFeEI7O0FBRXhDLHlEQUFVO0FBQ1YsNkVBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvY2Fyb3VzZWwvbG9naWMvY2Fyb3VzZWxMb2dpYy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9kcm9wRG93bk1lbnUuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vY2Fyb3VzZWwvaW1hZ2VzLzAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm9vdC1tZW51IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmdWNoc2lhO1xufVxuXG4uc3ViLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgYm90dG9tOiAwcHg7XG5cbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuLmxheWVyLTAge1xuICB6LWluZGV4OiAxO1xufVxuXG4ubGF5ZXItbWludXMtMSB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ub2Zmc2V0LWxheWVyIHtcbiAgYW5pbWF0aW9uLW5hbWU6IG9mZnNldC1sYXllcjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjFzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgb2Zmc2V0LWxheWVyIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMCU7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIG9wYWNpdHk6IDEwMCU7XG4gIH1cbn1cblxuLnN1Yi1tZW51LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG4udmlzaWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2Fyb3VzZWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBpY3R1cmUtZnJhbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5waWN0dXJlLWZyYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICB3aWR0aDogY2FsYygyNTZweCArIDEwcHggKyAxMHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDI1NnB4ICsgMTBweCArIDEwcHgpO1xuICBib3JkZXI6IDEwcHggc29saWQgcmdiKDAsIDAsIDApO1xufVxuXG4uc2xpZGUtc2hvdy10cmFuc2l0aW9uLXRyYW5zbGF0ZSB7XG4gIHRyYW5zaXRpb246IHRyYW5zbGF0ZSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4jc2xpZGUtc2hvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIHdpZHRoOiAxMjgwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cbn1cblxuLnNsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgd2lkdGg6IDI1NnB4O1xuICBoZWlnaHQ6IDI1NnB4O1xuICBmb250LXNpemU6IDEwcmVtO1xufVxuXG4ucGxhY2Vob2xkZXItc2xpZGUtc3RhcnQge1xuICBvcmRlcjogLTE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDE1OCwgMTU4KTtcbn1cblxuLmxhc3Qtc2xpZGUge1xuICBvcmRlcjogMTtcbn1cblxuLnBsYWNlaG9sZGVyLXNsaWRlLWVuZCB7XG4gIG9yZGVyOiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAxNTgsIDE1OCk7XG59XG5cbi5maXJzdC1zbGlkZSB7XG4gIG9yZGVyOiAtMTtcbn1cblxuI3NsaWRlLTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG4jc2xpZGUtMC1pbWFnZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuI3NsaWRlLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYyLCAwLCAyNTUpO1xufVxuXG4jc2xpZGUtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDEwNik7XG59XG5cbiNzbGlkZS0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgOTgpO1xufVxuXG4ub3JkZXItMCB7XG4gIG9yZGVyOiAwO1xufVxuXG4ub3JkZXItMSB7XG4gIG9yZGVyOiAxO1xufVxuXG4ub3JkZXItMiB7XG4gIG9yZGVyOiAyO1xufVxuXG4ub3JkZXItMyB7XG4gIG9yZGVyOiAzO1xufVxuXG4jY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiBjYWxjKDI1NnB4ICsgMTBweCArIDEwcHgpO1xufVxuXG4uY29udHJvbC1idXR0b24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4jY2lyY2xlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5qdW1wLWNpcmNsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uanVtcC1jaXJjbGUtZmlsbGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi8qICNzbGlkZS1zaG93aiAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjs7RUFFbEIsV0FBVzs7RUFFWCxZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjs7RUFFaEIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7bUNBQ2lDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFFBQVE7RUFDUixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnREFBdUM7QUFDekM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxpQkFBaUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yb290LW1lbnUge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZnVjaHNpYTtcXG59XFxuXFxuLnN1Yi1tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICBib3R0b206IDBweDtcXG5cXG4gIHdpZHRoOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4ubGF5ZXItMCB7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubGF5ZXItbWludXMtMSB7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLm9mZnNldC1sYXllciB7XFxuICBhbmltYXRpb24tbmFtZTogb2Zmc2V0LWxheWVyO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgb2Zmc2V0LWxheWVyIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uc3ViLW1lbnUtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNhcm91c2VsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBpY3R1cmUtZnJhbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBpY3R1cmUtZnJhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICB3aWR0aDogY2FsYygyNTZweCArIDEwcHggKyAxMHB4KTtcXG4gIGhlaWdodDogY2FsYygyNTZweCArIDEwcHggKyAxMHB4KTtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5zbGlkZS1zaG93LXRyYW5zaXRpb24tdHJhbnNsYXRlIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zbGF0ZSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jc2xpZGUtc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogd2lkdGg6IDEyODBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG59XFxuXFxuLnNsaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICB3aWR0aDogMjU2cHg7XFxuICBoZWlnaHQ6IDI1NnB4O1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG59XFxuXFxuLnBsYWNlaG9sZGVyLXNsaWRlLXN0YXJ0IHtcXG4gIG9yZGVyOiAtMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDE1OCwgMTU4KTtcXG59XFxuXFxuLmxhc3Qtc2xpZGUge1xcbiAgb3JkZXI6IDE7XFxufVxcblxcbi5wbGFjZWhvbGRlci1zbGlkZS1lbmQge1xcbiAgb3JkZXI6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAxNTgsIDE1OCk7XFxufVxcblxcbi5maXJzdC1zbGlkZSB7XFxuICBvcmRlcjogLTE7XFxufVxcblxcbiNzbGlkZS0wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbiNzbGlkZS0wLWltYWdlIHtcXG4gIGNvbnRlbnQ6IHVybCgnLi9jYXJvdXNlbC9pbWFnZXMvMC5wbmcnKTtcXG59XFxuXFxuI3NsaWRlLTEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MiwgMCwgMjU1KTtcXG59XFxuXFxuI3NsaWRlLTIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMTA2KTtcXG59XFxuXFxuI3NsaWRlLTMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgOTgpO1xcbn1cXG5cXG4ub3JkZXItMCB7XFxuICBvcmRlcjogMDtcXG59XFxuXFxuLm9yZGVyLTEge1xcbiAgb3JkZXI6IDE7XFxufVxcblxcbi5vcmRlci0yIHtcXG4gIG9yZGVyOiAyO1xcbn1cXG5cXG4ub3JkZXItMyB7XFxuICBvcmRlcjogMztcXG59XFxuXFxuI2NvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2J1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiBjYWxjKDI1NnB4ICsgMTBweCArIDEwcHgpO1xcbn1cXG5cXG4uY29udHJvbC1idXR0b24ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbiNjaXJjbGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uanVtcC1jaXJjbGUge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5qdW1wLWNpcmNsZS1maWxsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi8qICNzbGlkZS1zaG93aiAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgbWluSW5kZXggPSAwO1xuY29uc3QgbWF4SW5kZXggPSAzO1xuXG5sZXQgc2xpZGVJbmRleCA9IDA7XG5jb25zdCB0cmFuc2xhdGVEaXN0YW5jZSA9IDI1NjtcblxuY29uc3Qgc2xpZGVTaG93SG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLXNob3ctaG9sZGVyJyk7XG5jb25zdCBzbGlkZVNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGUtc2hvdycpO1xuXG5jb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25leHQtYnV0dG9uJyk7XG5jb25zdCBwcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aW91cy1idXR0b24nKTtcblxuY29uc3Qgc2xpZGVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpXTtcbmNvbnN0IGp1bXBDaXJjbGVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qdW1wLWNpcmNsZScpXTtcblxuanVtcENpcmNsZXMuYXQoMCkuY2xhc3NMaXN0LmFkZCgnanVtcC1jaXJjbGUtZmlsbGVkJyk7XG5cbmxldCBqdW1wRGlmZmVyZW5jZTtcblxubGV0IHRyYW5zaXRpb25TdGF0ZTtcbmxldCB0cmFuc2l0aW9uRGlyZWN0aW9uO1xuXG4vLyBjb25zdCBhZGRQbGFjZWhvbGRlclNsaWRlVG9TdGFydCA9ICgpID0+IHtcbi8vICAgY29uc3QgcGxhY2Vob2xkZXJTbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICBwbGFjZWhvbGRlclNsaWRlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlJywgJ3BsYWNlaG9sZGVyLXNsaWRlLXN0YXJ0Jyk7XG4vLyAgIHNsaWRlU2hvdy5hcHBlbmRDaGlsZChwbGFjZWhvbGRlclNsaWRlKTtcbi8vIH07XG5cbi8vIGNvbnN0IGFkZFBsYWNlaG9sZGVyU2xpZGVUb0VuZCA9ICgpID0+IHtcbi8vICAgY29uc3QgcGxhY2Vob2xkZXJTbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICBwbGFjZWhvbGRlclNsaWRlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlJywgJ3BsYWNlaG9sZGVyLXNsaWRlLWVuZCcpO1xuLy8gICBzbGlkZVNob3cuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJTbGlkZSk7XG4vLyB9O1xuXG5jb25zdCBzZXRBbGxTbGlkZU9yZGVycyA9IGZ1bmN0aW9uIHNldEFsbFNsaWRlT3JkZXJzKCkge1xuICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGluZGV4KSA9PiB7XG4gICAgc2xpZGUuc3R5bGUub3JkZXIgPSBgJHtpbmRleH1gO1xuICB9KTtcbn07XG5cbnNldEFsbFNsaWRlT3JkZXJzKCk7XG5cbmNvbnN0IG1vdmVMZWZ0bW9zdE92ZXJmbG93U2xpZGVzVG9FbmQgPSAoKSA9PiB7XG4gIGNvbnN0IHNsaWRlc1RvQXBwZW5kID0gc2xpZGVzLnNwbGljZSgwLCBqdW1wRGlmZmVyZW5jZSk7XG4gIHNsaWRlcy5wdXNoKC4uLnNsaWRlc1RvQXBwZW5kKTtcbiAgc2V0QWxsU2xpZGVPcmRlcnMoKTtcbn07XG5cbmNvbnN0IG1vdmVSaWdodG1vc3RPdmVyZmxvd1NsaWRlc1RvU3RhcnQgPSAoKSA9PiB7XG4gIGNvbnN0IHNsaWRlc1RvUHJlcGVuZCA9IHNsaWRlcy5zcGxpY2UoLTEgKiBqdW1wRGlmZmVyZW5jZSk7XG4gIHNsaWRlcy51bnNoaWZ0KC4uLnNsaWRlc1RvUHJlcGVuZCk7XG4gIHNldEFsbFNsaWRlT3JkZXJzKCk7XG59O1xuXG5jb25zdCBhZGRTbGlkZVNob3dUcmFuc2l0aW9uQ2xhc3MgPSAoKSA9PiB7XG4gIHNsaWRlU2hvdy5jbGFzc0xpc3QuYWRkKCdzbGlkZS1zaG93LXRyYW5zaXRpb24tdHJhbnNsYXRlJyk7XG59O1xuXG5jb25zdCByZW1vdmVTbGlkZVNob3dUcmFuc2l0aW9uQ2xhc3MgPSAoKSA9PiB7XG4gIHNsaWRlU2hvdy5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1zaG93LXRyYW5zaXRpb24tdHJhbnNsYXRlJyk7XG59O1xuXG5jb25zdCB0cmFuc2xhdGVTbGlkZVNob3dIb2xkZXIgPSAodmFsdWUpID0+IHtcbiAgc2xpZGVTaG93SG9sZGVyLnN0eWxlLnRyYW5zbGF0ZSA9IHZhbHVlO1xufTtcblxuY29uc3QgdHJhbnNsYXRlU2xpZGVTaG93ID0gKHZhbHVlKSA9PiB7XG4gIHNsaWRlU2hvdy5zdHlsZS50cmFuc2xhdGUgPSB2YWx1ZTtcbn07XG5cbnNsaWRlU2hvdy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uc3RhcnQnLCAoKSA9PiB7XG4gIHRyYW5zaXRpb25TdGF0ZSA9ICdzdGFydGVkJztcbn0pO1xuXG5zbGlkZVNob3cuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgdHJhbnNpdGlvblN0YXRlID0gJ2VuZGVkJztcblxuICBpZiAodHJhbnNpdGlvbkRpcmVjdGlvbiA9PT0gJ2ZvcndhcmRzJykge1xuICAgIG1vdmVMZWZ0bW9zdE92ZXJmbG93U2xpZGVzVG9FbmQoKTtcblxuICAgIHJlbW92ZVNsaWRlU2hvd1RyYW5zaXRpb25DbGFzcygpO1xuXG4gICAgY29uc3QgdHJhbnNsYXRlVmFsdWUgPSAnMHB4JztcbiAgICB0cmFuc2xhdGVTbGlkZVNob3codHJhbnNsYXRlVmFsdWUpO1xuICB9XG5cbiAgaWYgKHRyYW5zaXRpb25EaXJlY3Rpb24gPT09ICdiYWNrd2FyZHMnKSB7XG4gICAgcmVtb3ZlU2xpZGVTaG93VHJhbnNpdGlvbkNsYXNzKCk7XG5cbiAgICBsZXQgdHJhbnNsYXRlVmFsdWUgPSAnMHB4JztcbiAgICB0cmFuc2xhdGVTbGlkZVNob3dIb2xkZXIodHJhbnNsYXRlVmFsdWUpO1xuXG4gICAgdHJhbnNsYXRlVmFsdWUgPSAnMHB4JztcbiAgICB0cmFuc2xhdGVTbGlkZVNob3codHJhbnNsYXRlVmFsdWUpO1xuICB9XG59KTtcblxuY29uc3QgdG9nZ2xlQ2lyY2xlID0gZnVuY3Rpb24gdG9nZ2xlQ2lyY2xlKGNpcmNsZUluZGV4KSB7XG4gIGp1bXBDaXJjbGVzLmF0KGNpcmNsZUluZGV4KS5jbGFzc0xpc3QudG9nZ2xlKCdqdW1wLWNpcmNsZS1maWxsZWQnKTtcbn07XG5cbmNvbnN0IG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICBpZiAodHJhbnNpdGlvblN0YXRlID09PSAnc3RhcnRlZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBqdW1wRGlmZmVyZW5jZSA9IDE7XG4gIHRyYW5zaXRpb25EaXJlY3Rpb24gPSAnZm9yd2FyZHMnO1xuICB0b2dnbGVDaXJjbGUoc2xpZGVJbmRleCk7XG4gIHNsaWRlSW5kZXggKz0gMTtcblxuICBpZiAoc2xpZGVJbmRleCA+IG1heEluZGV4KSB7XG4gICAgc2xpZGVJbmRleCA9IG1pbkluZGV4O1xuICB9XG5cbiAgdG9nZ2xlQ2lyY2xlKHNsaWRlSW5kZXgpO1xuXG4gIGFkZFNsaWRlU2hvd1RyYW5zaXRpb25DbGFzcygpO1xuICBjb25zdCB0cmFuc2xhdGVWYWx1ZSA9IGAkey0xICogdHJhbnNsYXRlRGlzdGFuY2V9cHhgO1xuICB0cmFuc2xhdGVTbGlkZVNob3codHJhbnNsYXRlVmFsdWUpO1xufTtcblxuY29uc3Qgc2V0dXBQcmV2aW91cyA9IGZ1bmN0aW9uIHNldHVwUHJldmlvdXMoKSB7XG4gIGlmICh0cmFuc2l0aW9uU3RhdGUgPT09ICdzdGFydGVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGp1bXBEaWZmZXJlbmNlID0gMTtcbiAgbW92ZVJpZ2h0bW9zdE92ZXJmbG93U2xpZGVzVG9TdGFydCgpO1xuXG4gIGNvbnN0IHRyYW5zbGF0ZVZhbHVlID0gYCR7LTEgKiB0cmFuc2xhdGVEaXN0YW5jZX1weGA7XG4gIHRyYW5zbGF0ZVNsaWRlU2hvd0hvbGRlcih0cmFuc2xhdGVWYWx1ZSk7XG59O1xuXG5jb25zdCBwcmV2aW91cyA9IGZ1bmN0aW9uIHByZXZpb3VzKCkge1xuICBpZiAodHJhbnNpdGlvblN0YXRlID09PSAnc3RhcnRlZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cmFuc2l0aW9uRGlyZWN0aW9uID0gJ2JhY2t3YXJkcyc7XG4gIHRvZ2dsZUNpcmNsZShzbGlkZUluZGV4KTtcbiAgc2xpZGVJbmRleCAtPSAxO1xuXG4gIGlmIChzbGlkZUluZGV4IDwgbWluSW5kZXgpIHtcbiAgICBzbGlkZUluZGV4ID0gbWF4SW5kZXg7XG4gIH1cblxuICB0b2dnbGVDaXJjbGUoc2xpZGVJbmRleCk7XG5cbiAgYWRkU2xpZGVTaG93VHJhbnNpdGlvbkNsYXNzKCk7XG4gIGNvbnN0IHRyYW5zbGF0ZVZhbHVlID0gYCR7MSAqIHRyYW5zbGF0ZURpc3RhbmNlfXB4YDtcbiAgdHJhbnNsYXRlU2xpZGVTaG93KHRyYW5zbGF0ZVZhbHVlKTtcbn07XG5cbmNvbnN0IHNldEF1dG9BZHZhbmNlID0gZnVuY3Rpb24gc2V0QXV0b0FkdmFuY2UoZGVsYXkpIHtcbiAgY29uc3QgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBuZXh0KCk7XG4gIH0sIGRlbGF5KTtcblxuICByZXR1cm4gaW50ZXJ2YWxJRDtcbn07XG5cbm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5leHQoKTtcbn0pO1xuXG5wcmV2aW91c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2V0dXBQcmV2aW91cygpO1xufSk7XG5cbnByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwcmV2aW91cygpO1xufSk7XG5cbmNvbnN0IGp1bXBGb3J3YXJkcyA9IGZ1bmN0aW9uIGp1bXBGb3J3YXJkcyh0YXJnZXRJbmRleCkge1xuICBpZiAodHJhbnNpdGlvblN0YXRlID09PSAnc3RhcnRlZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cmFuc2l0aW9uRGlyZWN0aW9uID0gJ2ZvcndhcmRzJztcbiAgdG9nZ2xlQ2lyY2xlKHNsaWRlSW5kZXgpO1xuICBzbGlkZUluZGV4ID0gdGFyZ2V0SW5kZXg7XG5cbiAgaWYgKHNsaWRlSW5kZXggPiBtYXhJbmRleCkge1xuICAgIHNsaWRlSW5kZXggPSBtaW5JbmRleDtcbiAgfVxuXG4gIHRvZ2dsZUNpcmNsZShzbGlkZUluZGV4KTtcblxuICBhZGRTbGlkZVNob3dUcmFuc2l0aW9uQ2xhc3MoKTtcbiAgY29uc3QgdHJhbnNsYXRlVmFsdWUgPSBgJHstMSAqIGp1bXBEaWZmZXJlbmNlICogdHJhbnNsYXRlRGlzdGFuY2V9cHhgO1xuICB0cmFuc2xhdGVTbGlkZVNob3codHJhbnNsYXRlVmFsdWUpO1xufTtcblxuY29uc3QganVtcEJhY2t3YXJkcyA9IGZ1bmN0aW9uIGp1bXBCYWNrd2FyZHModGFyZ2V0SW5kZXgpIHtcbiAgaWYgKHRyYW5zaXRpb25TdGF0ZSA9PT0gJ3N0YXJ0ZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbW92ZVJpZ2h0bW9zdE92ZXJmbG93U2xpZGVzVG9TdGFydCgpO1xuXG4gIGxldCB0cmFuc2xhdGVWYWx1ZSA9IGAkey0xICoganVtcERpZmZlcmVuY2UgKiB0cmFuc2xhdGVEaXN0YW5jZX1weGA7XG4gIHRyYW5zbGF0ZVNsaWRlU2hvd0hvbGRlcih0cmFuc2xhdGVWYWx1ZSk7XG5cbiAgdHJhbnNpdGlvbkRpcmVjdGlvbiA9ICdiYWNrd2FyZHMnO1xuICB0b2dnbGVDaXJjbGUoc2xpZGVJbmRleCk7XG4gIHNsaWRlSW5kZXggPSB0YXJnZXRJbmRleDtcblxuICBpZiAoc2xpZGVJbmRleCA+IG1heEluZGV4KSB7XG4gICAgc2xpZGVJbmRleCA9IG1pbkluZGV4O1xuICB9XG5cbiAgdG9nZ2xlQ2lyY2xlKHNsaWRlSW5kZXgpO1xuXG4gIGFkZFNsaWRlU2hvd1RyYW5zaXRpb25DbGFzcygpO1xuICB0cmFuc2xhdGVWYWx1ZSA9IGAkezEgKiBqdW1wRGlmZmVyZW5jZSAqIHRyYW5zbGF0ZURpc3RhbmNlfXB4YDtcbiAgdHJhbnNsYXRlU2xpZGVTaG93KHRyYW5zbGF0ZVZhbHVlKTtcbn07XG5cbmNvbnN0IGp1bXAgPSBmdW5jdGlvbiBqdW1wKHRhcmdldEluZGV4KSB7XG4gIGNvbnN0IGluZGV4RGlmZmVyZW5jZSA9IHRhcmdldEluZGV4IC0gc2xpZGVJbmRleDtcbiAgY29uc3QgZGlyZWN0aW9uID0gTWF0aC5zaWduKGluZGV4RGlmZmVyZW5jZSk7XG4gIGp1bXBEaWZmZXJlbmNlID0gTWF0aC5hYnMoaW5kZXhEaWZmZXJlbmNlKTtcblxuICBpZiAoZGlyZWN0aW9uID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA8IDApIHtcbiAgICBqdW1wQmFja3dhcmRzKHRhcmdldEluZGV4KTtcbiAgfVxuXG4gIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gICAganVtcEZvcndhcmRzKHRhcmdldEluZGV4KTtcbiAgfVxufTtcblxuanVtcENpcmNsZXMuZm9yRWFjaCgoY2lyY2xlLCBjaXJjbGVJbmRleCkgPT4ge1xuICBjaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gdG9nZ2xlQ2lyY2xlKHNsaWRlSW5kZXgpO1xuICAgIC8vIHRvZ2dsZUNpcmNsZShjaXJjbGVJbmRleCk7XG5cbiAgICBqdW1wKGNpcmNsZUluZGV4KTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IHsgc2V0QXV0b0FkdmFuY2UgfTtcbiIsImNvbnN0IHNob3dTdWJNZW51ID0gZnVuY3Rpb24gc2hvd1N1Yk1lbnUoZXZlbnQsIHN1Yk1lbnUpIHtcbiAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCdsYXllci1taW51cy0xJyk7XG4gIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbGF5ZXItMCcpO1xuXG4gIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoJ29mZnNldC1sYXllcicpO1xufTtcblxuY29uc3QgaGlkZVN1Yk1lbnUgPSBmdW5jdGlvbiBoaWRlU3ViTWVudShzdWJNZW51KSB7XG4gIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29mZnNldC1sYXllcicpO1xufTtcblxuY29uc3Qgc2V0dXBNZW51cyA9IGZ1bmN0aW9uIHNldHVwTWVudXMoKSB7XG4gIGNvbnN0IG1lbnVDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY29udGFpbmVyJyk7XG4gIG1lbnVDb250YWluZXJzLmZvckVhY2goKG1lbnVDb250YWluZXIpID0+IHtcbiAgICBjb25zdCBzdWJNZW51ID0gWy4uLm1lbnVDb250YWluZXIuY2hpbGRyZW5dLmZpbmQoKGVsZW1lbnQpID0+XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc3ViLW1lbnUnKSxcbiAgICApO1xuXG4gICAgbWVudUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBzaG93U3ViTWVudShldmVudCwgc3ViTWVudSk7XG4gICAgfSk7XG5cbiAgICBtZW51Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICBoaWRlU3ViTWVudShzdWJNZW51KTtcbiAgICB9KTtcblxuICAgIHN1Yk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdsYXllci1taW51cy0xJyk7XG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoJ2xheWVyLTAnKTtcbiAgICB9KTtcblxuICAgIFsuLi5zdWJNZW51LmNoaWxkcmVuXS5mb3JFYWNoKChzdWJNZW51SXRlbSkgPT4ge1xuICAgICAgc3ViTWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN1Yk1lbnVJdGVtLnRleHRDb250ZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwTWVudXM7XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHsgc2V0QXV0b0FkdmFuY2UgfSBmcm9tICcuL2Nhcm91c2VsL2xvZ2ljL2Nhcm91c2VsTG9naWMnO1xuXG5pbXBvcnQgc2V0dXBNZW51cyBmcm9tICcuL2Ryb3BEb3duTWVudSc7XG5cbnNldHVwTWVudXMoKTtcbnNldEF1dG9BZHZhbmNlKDUwMDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9