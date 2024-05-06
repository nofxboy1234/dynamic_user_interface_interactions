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
  /* overflow: hidden; */

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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kBAAkB;;EAElB,WAAW;;EAEX,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,4BAA4B;EAC5B,wBAAwB;EACxB,4BAA4B;EAC5B,6BAA6B;EAC7B,sCAAsC;AACxC;;AAEA;EACE;IACE,WAAW;EACb;;EAEA;IACE,2BAA2B;IAC3B,aAAa;EACf;AACF;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,gCAAgC;EAChC,iCAAiC;EACjC,+BAA+B;AACjC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb;mCACiC;AACnC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,oCAAoC;AACtC;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,QAAQ;EACR,oCAAoC;AACtC;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,gDAAuC;AACzC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n}\n\n.menu-container {\n  position: relative;\n  cursor: pointer;\n}\n\n.root-menu {\n  width: 100px;\n  background-color: fuchsia;\n}\n\n.sub-menu {\n  display: none;\n  position: absolute;\n\n  bottom: 0px;\n\n  width: 100px;\n  background-color: greenyellow;\n}\n\n.layer-0 {\n  z-index: 1;\n}\n\n.layer-minus-1 {\n  z-index: -1;\n}\n\n.offset-layer {\n  animation-name: offset-layer;\n  animation-duration: 0.1s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease-in-out;\n}\n\n@keyframes offset-layer {\n  from {\n    opacity: 0%;\n  }\n\n  to {\n    transform: translateY(100%);\n    opacity: 100%;\n  }\n}\n\n.sub-menu-item:hover {\n  background-color: aqua;\n}\n\n.visible {\n  display: block;\n}\n\n.carousel-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.picture-frame-container {\n  display: flex;\n  justify-content: center;\n}\n\n.picture-frame {\n  display: flex;\n  /* overflow: hidden; */\n\n  width: calc(256px + 10px + 10px);\n  height: calc(256px + 10px + 10px);\n  border: 10px solid rgb(0, 0, 0);\n}\n\n.slide-show-transition-translate {\n  transition: translate 0.5s ease-in-out;\n}\n\n#slide-show {\n  display: flex;\n  /* width: 1280px;\n  justify-content: space-between; */\n}\n\n.slide {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 256px;\n  height: 256px;\n  font-size: 10rem;\n}\n\n.placeholder-slide-start {\n  order: -1;\n  background-color: rgb(158, 158, 158);\n}\n\n.last-slide {\n  order: 1;\n}\n\n.placeholder-slide-end {\n  order: 1;\n  background-color: rgb(158, 158, 158);\n}\n\n.first-slide {\n  order: -1;\n}\n\n#slide-0 {\n  background-color: aqua;\n}\n\n#slide-0-image {\n  content: url('./carousel/images/0.png');\n}\n\n#slide-1 {\n  background-color: rgb(162, 0, 255);\n}\n\n#slide-2 {\n  background-color: rgb(255, 0, 106);\n}\n\n#slide-3 {\n  background-color: rgb(0, 255, 98);\n}\n\n.order-0 {\n  order: 0;\n}\n\n.order-1 {\n  order: 1;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.order-3 {\n  order: 3;\n}\n\n#controls {\n  display: flex;\n  justify-content: center;\n}\n\n#buttons {\n  display: flex;\n  justify-content: space-between;\n  width: calc(256px + 10px + 10px);\n}\n\n.control-button {\n  width: 50px;\n  height: 50px;\n}\n\n#circles {\n  display: flex;\n  align-items: center;\n}\n\n.jump-circle {\n  width: 20px;\n  height: 20px;\n  border: 2px solid black;\n  border-radius: 10px;\n}\n\n.jump-circle-filled {\n  background-color: black;\n}\n"],"sourceRoot":""}]);
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
const slideShow = document.querySelector('#slide-show');

const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');

const slides = [...document.querySelectorAll('.slide')];
const jumpCircles = [...document.querySelectorAll('.jump-circle')];

jumpCircles.at(0).classList.add('jump-circle-filled');

// let transitionState;
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

const moveLeftOverflowSlideToEnd = () => {
  const slideToAppend = slides.shift();
  slides.push(slideToAppend);
  setAllSlideOrders();
};

const moveRightOverflowSlideToStart = () => {
  const slideToPrepend = slides.pop();
  slides.unshift(slideToPrepend);
  setAllSlideOrders();
};

// const moveRightOverflowSlideToStart = () => {
//   if (slideIndex === 3) {
//     return;
//   }

//   const slideToPrepend = slides.at(-1);
//   slideToPrepend.classList.toggle('first-slide');
// };

// const removeAllPlaceholderSlides = () => {
//   const placeholderSlides = document.querySelectorAll(
//     '.placeholder-slide-start',
//   );
//   placeholderSlides.forEach((element) => {
//     element.remove();
//   });
// };

// const resetSlideIndex = () => {
//   slideIndex = minIndex;
// };

// const toggleLastSlideClassOnAllSlides = () => {
//   const normalSlides = document.querySelectorAll('.slide');
//   normalSlides.forEach((element) => {
//     element.classList.toggle('last-slide');
//   });
// };

// const toggleSlideShowTransitionClass = () => {
//   slideShow.classList.toggle('slide-show-transition-translate');
// };

const addSlideShowTransitionClass = () => {
  slideShow.classList.add('slide-show-transition-translate');
};

const removeSlideShowTransitionClass = () => {
  slideShow.classList.remove('slide-show-transition-translate');
};

const translateSlideShow = (value) => {
  slideShow.style.translate = value;
};

// slideShow.addEventListener('transitionstart', () => {
//   console.log('transitionstart');
//   transitionState = 'started';
// });

slideShow.addEventListener('transitionend', () => {
  // transitionState = 'ended';

  if (transitionDirection === 'forwards') {
    moveLeftOverflowSlideToEnd();

    removeSlideShowTransitionClass();
    const translateValue = '0px';
    translateSlideShow(translateValue);
  }

  if (transitionDirection === 'backwards') {
    removeSlideShowTransitionClass();
    // const translateValue = '0px';
    // translateSlideShow(translateValue);
  }
});

const toggleCircle = function toggleCircle(circleIndex) {
  jumpCircles.at(circleIndex).classList.toggle('jump-circle-filled');
};

const next = function next() {
  // if (transitionState === 'started') {
  //   return;
  // }

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

const previous = function previous() {
  // if (transitionState === 'started') {
  //   return;
  // }

  transitionDirection = 'backwards';
  toggleCircle(slideIndex);
  slideIndex -= 1;

  if (slideIndex < minIndex) {
    slideIndex = maxIndex;
  }

  toggleCircle(slideIndex);

  moveRightOverflowSlideToStart();

  let translateValue;
  translateValue = `${-1 * translateDistance}px`;
  translateSlideShow(translateValue);

  translateValue = `${0 * translateDistance}px`;
  addSlideShowTransitionClass();
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
  previous();
});

const jump = function jump(index) {
  slideIndex = index;

  const translateValue = `${-1 * slideIndex * translateDistance}px`;

  translateSlideShow(translateValue);
};

jumpCircles.forEach((circle, circleIndex) => {
  circle.addEventListener('click', () => {
    toggleCircle(slideIndex);
    slideIndex = circleIndex;
    toggleCircle(slideIndex);

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
// setAutoAdvance(5000);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFlBQVksVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLDZCQUE2QixjQUFjLGVBQWUsMkJBQTJCLEdBQUcsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsR0FBRyxxQkFBcUIsdUJBQXVCLG9CQUFvQixHQUFHLGdCQUFnQixpQkFBaUIsOEJBQThCLEdBQUcsZUFBZSxrQkFBa0IsdUJBQXVCLGtCQUFrQixtQkFBbUIsa0NBQWtDLEdBQUcsY0FBYyxlQUFlLEdBQUcsb0JBQW9CLGdCQUFnQixHQUFHLG1CQUFtQixpQ0FBaUMsNkJBQTZCLGlDQUFpQyxrQ0FBa0MsMkNBQTJDLEdBQUcsNkJBQTZCLFVBQVUsa0JBQWtCLEtBQUssVUFBVSxrQ0FBa0Msb0JBQW9CLEtBQUssR0FBRywwQkFBMEIsMkJBQTJCLEdBQUcsY0FBYyxtQkFBbUIsR0FBRyx5QkFBeUIsa0JBQWtCLDJCQUEyQixHQUFHLDhCQUE4QixrQkFBa0IsNEJBQTRCLEdBQUcsb0JBQW9CLGtCQUFrQix5QkFBeUIseUNBQXlDLHNDQUFzQyxvQ0FBb0MsR0FBRyxzQ0FBc0MsMkNBQTJDLEdBQUcsaUJBQWlCLGtCQUFrQixxQkFBcUIsb0NBQW9DLEtBQUssWUFBWSxrQkFBa0IsNEJBQTRCLHdCQUF3QixtQkFBbUIsa0JBQWtCLHFCQUFxQixHQUFHLDhCQUE4QixjQUFjLHlDQUF5QyxHQUFHLGlCQUFpQixhQUFhLEdBQUcsNEJBQTRCLGFBQWEseUNBQXlDLEdBQUcsa0JBQWtCLGNBQWMsR0FBRyxjQUFjLDJCQUEyQixHQUFHLG9CQUFvQiw0Q0FBNEMsR0FBRyxjQUFjLHVDQUF1QyxHQUFHLGNBQWMsdUNBQXVDLEdBQUcsY0FBYyxzQ0FBc0MsR0FBRyxjQUFjLGFBQWEsR0FBRyxjQUFjLGFBQWEsR0FBRyxjQUFjLGFBQWEsR0FBRyxjQUFjLGFBQWEsR0FBRyxlQUFlLGtCQUFrQiw0QkFBNEIsR0FBRyxjQUFjLGtCQUFrQixtQ0FBbUMscUNBQXFDLEdBQUcscUJBQXFCLGdCQUFnQixpQkFBaUIsR0FBRyxjQUFjLGtCQUFrQix3QkFBd0IsR0FBRyxrQkFBa0IsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsd0JBQXdCLEdBQUcseUJBQXlCLDRCQUE0QixHQUFHLHFCQUFxQjtBQUMvNkg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4TTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQyxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3Qzs7QUFFQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQSw0QkFBNEIsb0NBQW9DOztBQUVoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7OztBQzFNMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pDTDs7QUFFMkM7O0FBRXhCOztBQUV4Qyx5REFBVTtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2Nhcm91c2VsL2xvZ2ljL2Nhcm91c2VsTG9naWMuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvZHJvcERvd25NZW51LmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Nhcm91c2VsL2ltYWdlcy8wLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvb3QtbWVudSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZnVjaHNpYTtcbn1cblxuLnN1Yi1tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGJvdHRvbTogMHB4O1xuXG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG59XG5cbi5sYXllci0wIHtcbiAgei1pbmRleDogMTtcbn1cblxuLmxheWVyLW1pbnVzLTEge1xuICB6LWluZGV4OiAtMTtcbn1cblxuLm9mZnNldC1sYXllciB7XG4gIGFuaW1hdGlvbi1uYW1lOiBvZmZzZXQtbGF5ZXI7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4xcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIG9mZnNldC1sYXllciB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDAlO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICBvcGFjaXR5OiAxMDAlO1xuICB9XG59XG5cbi5zdWItbWVudS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuLnZpc2libGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcm91c2VsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5waWN0dXJlLWZyYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGljdHVyZS1mcmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG5cbiAgd2lkdGg6IGNhbGMoMjU2cHggKyAxMHB4ICsgMTBweCk7XG4gIGhlaWdodDogY2FsYygyNTZweCArIDEwcHggKyAxMHB4KTtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbn1cblxuLnNsaWRlLXNob3ctdHJhbnNpdGlvbi10cmFuc2xhdGUge1xuICB0cmFuc2l0aW9uOiB0cmFuc2xhdGUgMC41cyBlYXNlLWluLW91dDtcbn1cblxuI3NsaWRlLXNob3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiB3aWR0aDogMTI4MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG59XG5cbi5zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHdpZHRoOiAyNTZweDtcbiAgaGVpZ2h0OiAyNTZweDtcbiAgZm9udC1zaXplOiAxMHJlbTtcbn1cblxuLnBsYWNlaG9sZGVyLXNsaWRlLXN0YXJ0IHtcbiAgb3JkZXI6IC0xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAxNTgsIDE1OCk7XG59XG5cbi5sYXN0LXNsaWRlIHtcbiAgb3JkZXI6IDE7XG59XG5cbi5wbGFjZWhvbGRlci1zbGlkZS1lbmQge1xuICBvcmRlcjogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMTU4LCAxNTgpO1xufVxuXG4uZmlyc3Qtc2xpZGUge1xuICBvcmRlcjogLTE7XG59XG5cbiNzbGlkZS0wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuI3NsaWRlLTAtaW1hZ2Uge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbiNzbGlkZS0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MiwgMCwgMjU1KTtcbn1cblxuI3NsaWRlLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAxMDYpO1xufVxuXG4jc2xpZGUtMyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDk4KTtcbn1cblxuLm9yZGVyLTAge1xuICBvcmRlcjogMDtcbn1cblxuLm9yZGVyLTEge1xuICBvcmRlcjogMTtcbn1cblxuLm9yZGVyLTIge1xuICBvcmRlcjogMjtcbn1cblxuLm9yZGVyLTMge1xuICBvcmRlcjogMztcbn1cblxuI2NvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNidXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogY2FsYygyNTZweCArIDEwcHggKyAxMHB4KTtcbn1cblxuLmNvbnRyb2wtYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuI2NpcmNsZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uanVtcC1jaXJjbGUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmp1bXAtY2lyY2xlLWZpbGxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjs7RUFFbEIsV0FBVzs7RUFFWCxZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7bUNBQ2lDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFFBQVE7RUFDUixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnREFBdUM7QUFDekM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvb3QtbWVudSB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBmdWNoc2lhO1xcbn1cXG5cXG4uc3ViLW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gIGJvdHRvbTogMHB4O1xcblxcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxufVxcblxcbi5sYXllci0wIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5sYXllci1taW51cy0xIHtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ub2Zmc2V0LWxheWVyIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBvZmZzZXQtbGF5ZXI7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBvZmZzZXQtbGF5ZXIge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcblxcbi5zdWItbWVudS1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY2Fyb3VzZWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGljdHVyZS1mcmFtZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGljdHVyZS1mcmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG5cXG4gIHdpZHRoOiBjYWxjKDI1NnB4ICsgMTBweCArIDEwcHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDI1NnB4ICsgMTBweCArIDEwcHgpO1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLnNsaWRlLXNob3ctdHJhbnNpdGlvbi10cmFuc2xhdGUge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNsYXRlIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNzbGlkZS1zaG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiB3aWR0aDogMTI4MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbn1cXG5cXG4uc2xpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHdpZHRoOiAyNTZweDtcXG4gIGhlaWdodDogMjU2cHg7XFxuICBmb250LXNpemU6IDEwcmVtO1xcbn1cXG5cXG4ucGxhY2Vob2xkZXItc2xpZGUtc3RhcnQge1xcbiAgb3JkZXI6IC0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMTU4LCAxNTgpO1xcbn1cXG5cXG4ubGFzdC1zbGlkZSB7XFxuICBvcmRlcjogMTtcXG59XFxuXFxuLnBsYWNlaG9sZGVyLXNsaWRlLWVuZCB7XFxuICBvcmRlcjogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDE1OCwgMTU4KTtcXG59XFxuXFxuLmZpcnN0LXNsaWRlIHtcXG4gIG9yZGVyOiAtMTtcXG59XFxuXFxuI3NsaWRlLTAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuI3NsaWRlLTAtaW1hZ2Uge1xcbiAgY29udGVudDogdXJsKCcuL2Nhcm91c2VsL2ltYWdlcy8wLnBuZycpO1xcbn1cXG5cXG4jc2xpZGUtMSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYyLCAwLCAyNTUpO1xcbn1cXG5cXG4jc2xpZGUtMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAxMDYpO1xcbn1cXG5cXG4jc2xpZGUtMyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCA5OCk7XFxufVxcblxcbi5vcmRlci0wIHtcXG4gIG9yZGVyOiAwO1xcbn1cXG5cXG4ub3JkZXItMSB7XFxuICBvcmRlcjogMTtcXG59XFxuXFxuLm9yZGVyLTIge1xcbiAgb3JkZXI6IDI7XFxufVxcblxcbi5vcmRlci0zIHtcXG4gIG9yZGVyOiAzO1xcbn1cXG5cXG4jY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IGNhbGMoMjU2cHggKyAxMHB4ICsgMTBweCk7XFxufVxcblxcbi5jb250cm9sLWJ1dHRvbiB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuI2NpcmNsZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5qdW1wLWNpcmNsZSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmp1bXAtY2lyY2xlLWZpbGxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBtaW5JbmRleCA9IDA7XG5jb25zdCBtYXhJbmRleCA9IDM7XG5cbmxldCBzbGlkZUluZGV4ID0gMDtcbmNvbnN0IHRyYW5zbGF0ZURpc3RhbmNlID0gMjU2O1xuY29uc3Qgc2xpZGVTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlLXNob3cnKTtcblxuY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0LWJ1dHRvbicpO1xuY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlvdXMtYnV0dG9uJyk7XG5cbmNvbnN0IHNsaWRlcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUnKV07XG5jb25zdCBqdW1wQ2lyY2xlcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanVtcC1jaXJjbGUnKV07XG5cbmp1bXBDaXJjbGVzLmF0KDApLmNsYXNzTGlzdC5hZGQoJ2p1bXAtY2lyY2xlLWZpbGxlZCcpO1xuXG4vLyBsZXQgdHJhbnNpdGlvblN0YXRlO1xubGV0IHRyYW5zaXRpb25EaXJlY3Rpb247XG5cbi8vIGNvbnN0IGFkZFBsYWNlaG9sZGVyU2xpZGVUb1N0YXJ0ID0gKCkgPT4ge1xuLy8gICBjb25zdCBwbGFjZWhvbGRlclNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIHBsYWNlaG9sZGVyU2xpZGUuY2xhc3NMaXN0LmFkZCgnc2xpZGUnLCAncGxhY2Vob2xkZXItc2xpZGUtc3RhcnQnKTtcbi8vICAgc2xpZGVTaG93LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyU2xpZGUpO1xuLy8gfTtcblxuLy8gY29uc3QgYWRkUGxhY2Vob2xkZXJTbGlkZVRvRW5kID0gKCkgPT4ge1xuLy8gICBjb25zdCBwbGFjZWhvbGRlclNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIHBsYWNlaG9sZGVyU2xpZGUuY2xhc3NMaXN0LmFkZCgnc2xpZGUnLCAncGxhY2Vob2xkZXItc2xpZGUtZW5kJyk7XG4vLyAgIHNsaWRlU2hvdy5hcHBlbmRDaGlsZChwbGFjZWhvbGRlclNsaWRlKTtcbi8vIH07XG5cbmNvbnN0IHNldEFsbFNsaWRlT3JkZXJzID0gZnVuY3Rpb24gc2V0QWxsU2xpZGVPcmRlcnMoKSB7XG4gIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaW5kZXgpID0+IHtcbiAgICBzbGlkZS5zdHlsZS5vcmRlciA9IGAke2luZGV4fWA7XG4gIH0pO1xufTtcblxuc2V0QWxsU2xpZGVPcmRlcnMoKTtcblxuY29uc3QgbW92ZUxlZnRPdmVyZmxvd1NsaWRlVG9FbmQgPSAoKSA9PiB7XG4gIGNvbnN0IHNsaWRlVG9BcHBlbmQgPSBzbGlkZXMuc2hpZnQoKTtcbiAgc2xpZGVzLnB1c2goc2xpZGVUb0FwcGVuZCk7XG4gIHNldEFsbFNsaWRlT3JkZXJzKCk7XG59O1xuXG5jb25zdCBtb3ZlUmlnaHRPdmVyZmxvd1NsaWRlVG9TdGFydCA9ICgpID0+IHtcbiAgY29uc3Qgc2xpZGVUb1ByZXBlbmQgPSBzbGlkZXMucG9wKCk7XG4gIHNsaWRlcy51bnNoaWZ0KHNsaWRlVG9QcmVwZW5kKTtcbiAgc2V0QWxsU2xpZGVPcmRlcnMoKTtcbn07XG5cbi8vIGNvbnN0IG1vdmVSaWdodE92ZXJmbG93U2xpZGVUb1N0YXJ0ID0gKCkgPT4ge1xuLy8gICBpZiAoc2xpZGVJbmRleCA9PT0gMykge1xuLy8gICAgIHJldHVybjtcbi8vICAgfVxuXG4vLyAgIGNvbnN0IHNsaWRlVG9QcmVwZW5kID0gc2xpZGVzLmF0KC0xKTtcbi8vICAgc2xpZGVUb1ByZXBlbmQuY2xhc3NMaXN0LnRvZ2dsZSgnZmlyc3Qtc2xpZGUnKTtcbi8vIH07XG5cbi8vIGNvbnN0IHJlbW92ZUFsbFBsYWNlaG9sZGVyU2xpZGVzID0gKCkgPT4ge1xuLy8gICBjb25zdCBwbGFjZWhvbGRlclNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4vLyAgICAgJy5wbGFjZWhvbGRlci1zbGlkZS1zdGFydCcsXG4vLyAgICk7XG4vLyAgIHBsYWNlaG9sZGVyU2xpZGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbi8vICAgICBlbGVtZW50LnJlbW92ZSgpO1xuLy8gICB9KTtcbi8vIH07XG5cbi8vIGNvbnN0IHJlc2V0U2xpZGVJbmRleCA9ICgpID0+IHtcbi8vICAgc2xpZGVJbmRleCA9IG1pbkluZGV4O1xuLy8gfTtcblxuLy8gY29uc3QgdG9nZ2xlTGFzdFNsaWRlQ2xhc3NPbkFsbFNsaWRlcyA9ICgpID0+IHtcbi8vICAgY29uc3Qgbm9ybWFsU2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlJyk7XG4vLyAgIG5vcm1hbFNsaWRlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4vLyAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdsYXN0LXNsaWRlJyk7XG4vLyAgIH0pO1xuLy8gfTtcblxuLy8gY29uc3QgdG9nZ2xlU2xpZGVTaG93VHJhbnNpdGlvbkNsYXNzID0gKCkgPT4ge1xuLy8gICBzbGlkZVNob3cuY2xhc3NMaXN0LnRvZ2dsZSgnc2xpZGUtc2hvdy10cmFuc2l0aW9uLXRyYW5zbGF0ZScpO1xuLy8gfTtcblxuY29uc3QgYWRkU2xpZGVTaG93VHJhbnNpdGlvbkNsYXNzID0gKCkgPT4ge1xuICBzbGlkZVNob3cuY2xhc3NMaXN0LmFkZCgnc2xpZGUtc2hvdy10cmFuc2l0aW9uLXRyYW5zbGF0ZScpO1xufTtcblxuY29uc3QgcmVtb3ZlU2xpZGVTaG93VHJhbnNpdGlvbkNsYXNzID0gKCkgPT4ge1xuICBzbGlkZVNob3cuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtc2hvdy10cmFuc2l0aW9uLXRyYW5zbGF0ZScpO1xufTtcblxuY29uc3QgdHJhbnNsYXRlU2xpZGVTaG93ID0gKHZhbHVlKSA9PiB7XG4gIHNsaWRlU2hvdy5zdHlsZS50cmFuc2xhdGUgPSB2YWx1ZTtcbn07XG5cbi8vIHNsaWRlU2hvdy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uc3RhcnQnLCAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKCd0cmFuc2l0aW9uc3RhcnQnKTtcbi8vICAgdHJhbnNpdGlvblN0YXRlID0gJ3N0YXJ0ZWQnO1xuLy8gfSk7XG5cbnNsaWRlU2hvdy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAvLyB0cmFuc2l0aW9uU3RhdGUgPSAnZW5kZWQnO1xuXG4gIGlmICh0cmFuc2l0aW9uRGlyZWN0aW9uID09PSAnZm9yd2FyZHMnKSB7XG4gICAgbW92ZUxlZnRPdmVyZmxvd1NsaWRlVG9FbmQoKTtcblxuICAgIHJlbW92ZVNsaWRlU2hvd1RyYW5zaXRpb25DbGFzcygpO1xuICAgIGNvbnN0IHRyYW5zbGF0ZVZhbHVlID0gJzBweCc7XG4gICAgdHJhbnNsYXRlU2xpZGVTaG93KHRyYW5zbGF0ZVZhbHVlKTtcbiAgfVxuXG4gIGlmICh0cmFuc2l0aW9uRGlyZWN0aW9uID09PSAnYmFja3dhcmRzJykge1xuICAgIHJlbW92ZVNsaWRlU2hvd1RyYW5zaXRpb25DbGFzcygpO1xuICAgIC8vIGNvbnN0IHRyYW5zbGF0ZVZhbHVlID0gJzBweCc7XG4gICAgLy8gdHJhbnNsYXRlU2xpZGVTaG93KHRyYW5zbGF0ZVZhbHVlKTtcbiAgfVxufSk7XG5cbmNvbnN0IHRvZ2dsZUNpcmNsZSA9IGZ1bmN0aW9uIHRvZ2dsZUNpcmNsZShjaXJjbGVJbmRleCkge1xuICBqdW1wQ2lyY2xlcy5hdChjaXJjbGVJbmRleCkuY2xhc3NMaXN0LnRvZ2dsZSgnanVtcC1jaXJjbGUtZmlsbGVkJyk7XG59O1xuXG5jb25zdCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgLy8gaWYgKHRyYW5zaXRpb25TdGF0ZSA9PT0gJ3N0YXJ0ZWQnKSB7XG4gIC8vICAgcmV0dXJuO1xuICAvLyB9XG5cbiAgdHJhbnNpdGlvbkRpcmVjdGlvbiA9ICdmb3J3YXJkcyc7XG4gIHRvZ2dsZUNpcmNsZShzbGlkZUluZGV4KTtcbiAgc2xpZGVJbmRleCArPSAxO1xuXG4gIGlmIChzbGlkZUluZGV4ID4gbWF4SW5kZXgpIHtcbiAgICBzbGlkZUluZGV4ID0gbWluSW5kZXg7XG4gIH1cblxuICB0b2dnbGVDaXJjbGUoc2xpZGVJbmRleCk7XG5cbiAgYWRkU2xpZGVTaG93VHJhbnNpdGlvbkNsYXNzKCk7XG4gIGNvbnN0IHRyYW5zbGF0ZVZhbHVlID0gYCR7LTEgKiB0cmFuc2xhdGVEaXN0YW5jZX1weGA7XG4gIHRyYW5zbGF0ZVNsaWRlU2hvdyh0cmFuc2xhdGVWYWx1ZSk7XG59O1xuXG5jb25zdCBwcmV2aW91cyA9IGZ1bmN0aW9uIHByZXZpb3VzKCkge1xuICAvLyBpZiAodHJhbnNpdGlvblN0YXRlID09PSAnc3RhcnRlZCcpIHtcbiAgLy8gICByZXR1cm47XG4gIC8vIH1cblxuICB0cmFuc2l0aW9uRGlyZWN0aW9uID0gJ2JhY2t3YXJkcyc7XG4gIHRvZ2dsZUNpcmNsZShzbGlkZUluZGV4KTtcbiAgc2xpZGVJbmRleCAtPSAxO1xuXG4gIGlmIChzbGlkZUluZGV4IDwgbWluSW5kZXgpIHtcbiAgICBzbGlkZUluZGV4ID0gbWF4SW5kZXg7XG4gIH1cblxuICB0b2dnbGVDaXJjbGUoc2xpZGVJbmRleCk7XG5cbiAgbW92ZVJpZ2h0T3ZlcmZsb3dTbGlkZVRvU3RhcnQoKTtcblxuICBsZXQgdHJhbnNsYXRlVmFsdWU7XG4gIHRyYW5zbGF0ZVZhbHVlID0gYCR7LTEgKiB0cmFuc2xhdGVEaXN0YW5jZX1weGA7XG4gIHRyYW5zbGF0ZVNsaWRlU2hvdyh0cmFuc2xhdGVWYWx1ZSk7XG5cbiAgdHJhbnNsYXRlVmFsdWUgPSBgJHswICogdHJhbnNsYXRlRGlzdGFuY2V9cHhgO1xuICBhZGRTbGlkZVNob3dUcmFuc2l0aW9uQ2xhc3MoKTtcbiAgdHJhbnNsYXRlU2xpZGVTaG93KHRyYW5zbGF0ZVZhbHVlKTtcbn07XG5cbmNvbnN0IHNldEF1dG9BZHZhbmNlID0gZnVuY3Rpb24gc2V0QXV0b0FkdmFuY2UoZGVsYXkpIHtcbiAgY29uc3QgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBuZXh0KCk7XG4gIH0sIGRlbGF5KTtcblxuICByZXR1cm4gaW50ZXJ2YWxJRDtcbn07XG5cbm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5leHQoKTtcbn0pO1xuXG5wcmV2aW91c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcHJldmlvdXMoKTtcbn0pO1xuXG5jb25zdCBqdW1wID0gZnVuY3Rpb24ganVtcChpbmRleCkge1xuICBzbGlkZUluZGV4ID0gaW5kZXg7XG5cbiAgY29uc3QgdHJhbnNsYXRlVmFsdWUgPSBgJHstMSAqIHNsaWRlSW5kZXggKiB0cmFuc2xhdGVEaXN0YW5jZX1weGA7XG5cbiAgdHJhbnNsYXRlU2xpZGVTaG93KHRyYW5zbGF0ZVZhbHVlKTtcbn07XG5cbmp1bXBDaXJjbGVzLmZvckVhY2goKGNpcmNsZSwgY2lyY2xlSW5kZXgpID0+IHtcbiAgY2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZUNpcmNsZShzbGlkZUluZGV4KTtcbiAgICBzbGlkZUluZGV4ID0gY2lyY2xlSW5kZXg7XG4gICAgdG9nZ2xlQ2lyY2xlKHNsaWRlSW5kZXgpO1xuXG4gICAganVtcChjaXJjbGVJbmRleCk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCB7IHNldEF1dG9BZHZhbmNlIH07XG4iLCJjb25zdCBzaG93U3ViTWVudSA9IGZ1bmN0aW9uIHNob3dTdWJNZW51KGV2ZW50LCBzdWJNZW51KSB7XG4gIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCgnbGF5ZXItbWludXMtMScpO1xuICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2xheWVyLTAnKTtcblxuICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCdvZmZzZXQtbGF5ZXInKTtcbn07XG5cbmNvbnN0IGhpZGVTdWJNZW51ID0gZnVuY3Rpb24gaGlkZVN1Yk1lbnUoc3ViTWVudSkge1xuICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvZmZzZXQtbGF5ZXInKTtcbn07XG5cbmNvbnN0IHNldHVwTWVudXMgPSBmdW5jdGlvbiBzZXR1cE1lbnVzKCkge1xuICBjb25zdCBtZW51Q29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNvbnRhaW5lcicpO1xuICBtZW51Q29udGFpbmVycy5mb3JFYWNoKChtZW51Q29udGFpbmVyKSA9PiB7XG4gICAgY29uc3Qgc3ViTWVudSA9IFsuLi5tZW51Q29udGFpbmVyLmNoaWxkcmVuXS5maW5kKChlbGVtZW50KSA9PlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Yi1tZW51JyksXG4gICAgKTtcblxuICAgIG1lbnVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChldmVudCkgPT4ge1xuICAgICAgc2hvd1N1Yk1lbnUoZXZlbnQsIHN1Yk1lbnUpO1xuICAgIH0pO1xuXG4gICAgbWVudUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgaGlkZVN1Yk1lbnUoc3ViTWVudSk7XG4gICAgfSk7XG5cbiAgICBzdWJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbGF5ZXItbWludXMtMScpO1xuICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCdsYXllci0wJyk7XG4gICAgfSk7XG5cbiAgICBbLi4uc3ViTWVudS5jaGlsZHJlbl0uZm9yRWFjaCgoc3ViTWVudUl0ZW0pID0+IHtcbiAgICAgIHN1Yk1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzdWJNZW51SXRlbS50ZXh0Q29udGVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXR1cE1lbnVzO1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IHNldEF1dG9BZHZhbmNlIH0gZnJvbSAnLi9jYXJvdXNlbC9sb2dpYy9jYXJvdXNlbExvZ2ljJztcblxuaW1wb3J0IHNldHVwTWVudXMgZnJvbSAnLi9kcm9wRG93bk1lbnUnO1xuXG5zZXR1cE1lbnVzKCk7XG4vLyBzZXRBdXRvQWR2YW5jZSg1MDAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==