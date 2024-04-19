/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    padding:0px;
    margin:0px;
    box-sizing:border-box ;
}

::root {
    font-family: 'Courier New', Courier, monospace;
    font-size: 1em;
}

body {
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 6fr;
    width: 100vw;
    height:100vh;
    background-color:linen;
}

header {
    display:grid;
    grid-area: 1/1/2/2;
    grid-template-columns: 4fr repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    background-color:linen;
    border-bottom: 3px;
    border-color: brown;
    border-style: solid;
}

div#headName {
    display:grid;
    grid-area: 1/1/3/2;
    justify-content: left;
    align-items: center;
    padding-left:20px;
}

/* original in index.js */
.restName {
    font-size: 5rem;
    font-weight: 700;
    color: blue;
} 

/* this to test import from functions.js */
.rest_Name {
    font-size: 5rem;
    font-weight: 700;
    color: brown;
}

header>nav {
    display:grid;
    grid-area: 2/2/3/5;
    background-color: linen;
    justify-content: space-evenly;
    align-items: center;
}

button {
    background-color: brown;
    color:beige;
    width: 100px;
    height: 2rem;
    border-radius: 30px;
    align-content:center;
    margin-bottom: 5px;
}

button#btn1 {
    display:grid;
    grid-area: 1/2/2/3; 
}

button#btn2 {
    display:grid;
    grid-area: 1/3/2/4;
}

button#btn3 {
    display:grid;
    grid-area: 1/4/2/5;
}


div.container{
    display:grid;
    grid-area: 2/1/3/2;
    grid-template-columns: 1fr 4fr;
    height:100%;
    width:100%;

}

div#sideBar{
/*div.sideBar{*/
    display:grid;
    grid-area: 1/1/2/2;
    background-color:linen ;
    height:100%;
    width: 350px;
    border-right: 3px;
    border-color: brown;
    border-style: solid;
    border-top: none;
    border-bottom: none;
    border-left: none;
    grid-template-columns: 1fr;
}

.sideText_home {
    font-size: 3rem;
    font-weight: 400;
    color: brown;
    padding-left: 20px;;
}

.sideText_menu {
    font-size: 3rem;
    font-weight: 400;
    color: blue;
    padding-left: 20px;;
}

.sideText_about {
    font-size: 3rem;
    font-weight: 400;
    color: green;
    padding-left: 20px;;
}

div#content {
    display:grid;
    grid-area: 1/2/2/3;
    justify-content: center;
    align-items: center;
}

ul {
    list-style: none;
  }

.tab {
    display: grid;  
}

.active {
    color: orange;
    font-weight: 800;           
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,8CAA8C;IAC9C,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,0BAA0B;IAC1B,2BAA2B;IAC3B,YAAY;IACZ,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,yCAAyC;IACzC,2BAA2B;IAC3B,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA,yBAAyB;AACzB;IACI,eAAe;IACf,gBAAgB;IAChB,WAAW;AACf;;AAEA,0CAA0C;AAC1C;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;;AAGA;IACI,YAAY;IACZ,kBAAkB;IAClB,8BAA8B;IAC9B,WAAW;IACX,UAAU;;AAEd;;AAEA;AACA,eAAe;IACX,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;EAClB;;AAEF;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB","sourcesContent":["*{\n    padding:0px;\n    margin:0px;\n    box-sizing:border-box ;\n}\n\n::root {\n    font-family: 'Courier New', Courier, monospace;\n    font-size: 1em;\n}\n\nbody {\n    display:grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 6fr;\n    width: 100vw;\n    height:100vh;\n    background-color:linen;\n}\n\nheader {\n    display:grid;\n    grid-area: 1/1/2/2;\n    grid-template-columns: 4fr repeat(3, 1fr);\n    grid-template-rows: 1fr 1fr;\n    background-color:linen;\n    border-bottom: 3px;\n    border-color: brown;\n    border-style: solid;\n}\n\ndiv#headName {\n    display:grid;\n    grid-area: 1/1/3/2;\n    justify-content: left;\n    align-items: center;\n    padding-left:20px;\n}\n\n/* original in index.js */\n.restName {\n    font-size: 5rem;\n    font-weight: 700;\n    color: blue;\n} \n\n/* this to test import from functions.js */\n.rest_Name {\n    font-size: 5rem;\n    font-weight: 700;\n    color: brown;\n}\n\nheader>nav {\n    display:grid;\n    grid-area: 2/2/3/5;\n    background-color: linen;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\nbutton {\n    background-color: brown;\n    color:beige;\n    width: 100px;\n    height: 2rem;\n    border-radius: 30px;\n    align-content:center;\n    margin-bottom: 5px;\n}\n\nbutton#btn1 {\n    display:grid;\n    grid-area: 1/2/2/3; \n}\n\nbutton#btn2 {\n    display:grid;\n    grid-area: 1/3/2/4;\n}\n\nbutton#btn3 {\n    display:grid;\n    grid-area: 1/4/2/5;\n}\n\n\ndiv.container{\n    display:grid;\n    grid-area: 2/1/3/2;\n    grid-template-columns: 1fr 4fr;\n    height:100%;\n    width:100%;\n\n}\n\ndiv#sideBar{\n/*div.sideBar{*/\n    display:grid;\n    grid-area: 1/1/2/2;\n    background-color:linen ;\n    height:100%;\n    width: 350px;\n    border-right: 3px;\n    border-color: brown;\n    border-style: solid;\n    border-top: none;\n    border-bottom: none;\n    border-left: none;\n    grid-template-columns: 1fr;\n}\n\n.sideText_home {\n    font-size: 3rem;\n    font-weight: 400;\n    color: brown;\n    padding-left: 20px;;\n}\n\n.sideText_menu {\n    font-size: 3rem;\n    font-weight: 400;\n    color: blue;\n    padding-left: 20px;;\n}\n\n.sideText_about {\n    font-size: 3rem;\n    font-weight: 400;\n    color: green;\n    padding-left: 20px;;\n}\n\ndiv#content {\n    display:grid;\n    grid-area: 1/2/2/3;\n    justify-content: center;\n    align-items: center;\n}\n\nul {\n    list-style: none;\n  }\n\n.tab {\n    display: grid;  \n}\n\n.active {\n    color: orange;\n    font-weight: 800;           \n}"],"sourceRoot":""}]);
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   image3_component: () => (/* binding */ image3_component),
/* harmony export */   sideBarText_about: () => (/* binding */ sideBarText_about)
/* harmony export */ });
/* harmony import */ var _assets_images_potatoSalad_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/potatoSalad.png */ "./assets/images/potatoSalad.png");
//imports


//about tab -----------------------------------------------------------------------------

//sidebar text about page version
const sideBarText_about = () => {
    const listItem = document.createElement('li');
    const heading = document.createElement('h3');
    heading.innerText="About text";
    listItem.appendChild(heading);
    listItem.classList.add("sideText_about");
    listItem.classList.add("tab");
    listItem.dataset.tabIndex = 2;
    return listItem;
}

// image
// aboutpage image image_3
const image3_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_3 = new Image();
    image_3.src = _assets_images_potatoSalad_png__WEBPACK_IMPORTED_MODULE_0__;
    if(image_3 && image_3.style) {
        image_3.style.height = '450px';
        image_3.style.width = '550px';
    }
    element.appendChild(image_3);
    element.dataset.tabIndex = 2;
    return element;     
}

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   head_name: () => (/* binding */ head_name)
/* harmony export */ });

// --------------  MOVED TO SEPARATE MODULES -----------------------------------------
//imports
//import image1 from '../assets/images/garlicBread.png';
//import image2 from '../assets/images/mapleSprouts.png';
//import image3 from '../assets/images/potatoSalad.png';

//text --------------------------------------------------------------------------------
//restaurant name
const head_name = () => {
    const element = document.createElement('h1');
    element.innerText="Occasions";
    element.classList.add("rest_Name");
    return element;
}

/* -------------  MOVED TO SEPARATE MODULES --------------------------------------------
//home tab -----------------------------------------------------------------------------

//sidebar text home page version
export const sideBarText_home = () => {
    const listItem = document.createElement('li');
    const heading = document.createElement('h3');
    heading.innerText="Sumptuous dining, relaxed environment, excellent service";
    listItem.appendChild(heading);
    listItem.classList.add("sideText_home");
    listItem.classList.add("tab");
    listItem.dataset.tabIndex = 0;
    return listItem;
}

// image
//homepage image image_1
export const image1_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_1 = new Image();
    image_1.src = image1;
    element.appendChild(image_1);
    element.dataset.tabIndex = 0;
    return element;     
}

//menu tab -----------------------------------------------------------------------------

//sidebar text menu page version
export const sideBarText_menu = () => {
    const listItem = document.createElement('li');
    const heading = document.createElement('h3');
    heading.innerText="Menu text";
    listItem.appendChild(heading);
    listItem.classList.add("sideText_menu");
    listItem.classList.add("tab");
    listItem.dataset.tabIndex = 1;
    return listItem;
}

// image
// menupage image image_2
export const image2_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_2 = new Image();
    image_2.src = image2;
    element.appendChild(image_2);
    element.dataset.tabIndex = 1;
    return element;     
}


//about tab -----------------------------------------------------------------------------

//sidebar text about page version
export const sideBarText_about = () => {
    const listItem = document.createElement('li');
    const heading = document.createElement('h3');
    heading.innerText="About text";
    listItem.appendChild(heading);
    listItem.classList.add("sideText_about");
    listItem.classList.add("tab");
    listItem.dataset.tabIndex = 2;
    return listItem;
}

// image
// aboutpage image image_3
export const image3_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_3 = new Image();
    image_3.src = image3;
    element.appendChild(image_3);
    element.dataset.tabIndex = 2;
    return element;     
}

//------------------------------------------------------------------------------------  */


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   image1_component: () => (/* binding */ image1_component),
/* harmony export */   sideBarText_home: () => (/* binding */ sideBarText_home)
/* harmony export */ });
/* harmony import */ var _assets_images_garlicBread_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/garlicBread.png */ "./assets/images/garlicBread.png");
//imports


//home tab -----------------------------------------------------------------------------

//sidebar text home page version
const sideBarText_home = () => {
    const listItem = document.createElement('li');
    const heading = document.createElement('h3');
    heading.innerText="Sumptuous dining, relaxed environment, excellent service";
    listItem.appendChild(heading);
    listItem.classList.add("sideText_home");
    listItem.classList.add("tab");
    listItem.dataset.tabIndex = 0;
    return listItem;
}

// image
//homepage image image_1
const image1_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_1 = new Image();
    image_1.src = _assets_images_garlicBread_png__WEBPACK_IMPORTED_MODULE_0__;
    if(image_1 && image_1.style) {
        image_1.style.height = '450px';
        image_1.style.width = '550px';
    }
    element.appendChild(image_1);
    element.dataset.tabIndex = 0;
    //element.style.width = '300px';
    //element.style.height = 'auto';
    
    return element;     
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   image2_component: () => (/* binding */ image2_component),
/* harmony export */   sideBarText_menu: () => (/* binding */ sideBarText_menu)
/* harmony export */ });
/* harmony import */ var _assets_images_mapleSprouts_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/mapleSprouts.png */ "./assets/images/mapleSprouts.png");
//imports


//menu tab -----------------------------------------------------------------------------

//sidebar text menu page version
const sideBarText_menu = () => {
    const listItem = document.createElement('li');
    const heading = document.createElement('h3');
    heading.innerText="Menu text";
    listItem.appendChild(heading);
    listItem.classList.add("sideText_menu");
    listItem.classList.add("tab");
    listItem.dataset.tabIndex = 1;
    return listItem;
}

// image
// menupage image image_2
const image2_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_2 = new Image();
    image_2.src = _assets_images_mapleSprouts_png__WEBPACK_IMPORTED_MODULE_0__;
    if(image_2 && image_2.style) {
        image_2.style.height = '450px';
        image_2.style.width = '550px';
    }
    element.appendChild(image_2);
    element.dataset.tabIndex = 1;
    return element;     
}


/***/ }),

/***/ "./assets/images/garlicBread.png":
/*!***************************************!*\
  !*** ./assets/images/garlicBread.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad42e99d1f65295da81a.png";

/***/ }),

/***/ "./assets/images/mapleSprouts.png":
/*!****************************************!*\
  !*** ./assets/images/mapleSprouts.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23581247ebc129387114.png";

/***/ }),

/***/ "./assets/images/potatoSalad.png":
/*!***************************************!*\
  !*** ./assets/images/potatoSalad.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5073bd43cc74b0958692.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/about.js");








//set the Restaurant name
document.querySelector('#headName').appendChild((0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.head_name)());

const contentTabsList = document.querySelector('.tabs-content');
//console.log(`at 11: ${contentTabsList}`);
contentTabsList.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.image1_component)());
contentTabsList.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.image2_component)());
contentTabsList.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_4__.image3_component)());
//console.log(`at 15: ${contentTabsList}`);


const sideBarTabsList = document.querySelector('.tabs-sidebar');
//console.log(`at 17: ${sideBarTabsList}`);
sideBarTabsList.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.sideBarText_home)());
sideBarTabsList.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.sideBarText_menu)());
sideBarTabsList.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_4__.sideBarText_about)());
//console.log(`at 22: ${sideBarTabsList}`);

let tabIndex = 0; //default
const buttonContainer = document.querySelector("nav");

// Converting HTML collection to array
const buttons = [...buttonContainer.children];

//find default tab button and tab index
let defaultTabIndex = -1;
buttons.forEach(findDefault);

function findDefault(item, index, arr){
 //console.log(`index: ${index}, item: ${arr[index]} buttonNumber: ${arr[index].dataset.num}`);
 if(arr[index].classList.contains('default-tab')) { 
    defaultTabIndex = index;
    buttons[defaultTabIndex].classList.add('active');
  }
}
//console.log(`defaultTabIndex = ${defaultTabIndex}`);

// Selecting sideBar and content containers
const sidebarContainer = document.querySelector('.tabs-sidebar');
//console.log(`sidebarContainer: ${JSON.stringify(sidebarContainer)}`);
const contentContainer = document.querySelector('.tabs-content');
//console.log(`contentContainer: ${JSON.stringify(contentContainer)}`);
// Converting HTML collections to arrays
/*
const tabSidebar = [...sidebarContainer.children];
const tabContents = [...contentContainer.children];
*/
const tabSidebar = [...sideBarTabsList.children];
const tabContents = [...contentTabsList.children];

//console.log(`tabSidebar: ${tabSidebar}`);
//console.log(`tabContents: ${tabContents}`);

//prevent display if not default

tabIndex = defaultTabIndex;
//console.log(`tabIndex: ${tabIndex}`);

/*
//sidebar
tabSidebar.forEach(showCurrentSidebar);

function showCurrentSidebar(item, index, arr) {
  arr[index].style['display'] = 'none';
  //console.log(`at func sidebar, index ${index}, tabIndex: ${tabIndex}`);
  if(index === tabIndex){
    arr[index].style['display'] = 'grid';
    console.log(`arr: ${arr}, arr[${index}].style: ${arr[index].style}`);
  }
}
*/

//content
tabContents.forEach(showCurrentContent);

function showCurrentContent(item, index, arr){
  arr[index].style['display'] = 'none';
  //console.log(`at func content tabIndex: ${tabIndex}`);
  if(index === tabIndex){
    arr[index].style['display'] = 'grid';
    //console.log(`arr: ${arr}, arr[${index}].style: ${arr[index].style}`);
  }
}

//sideBar
tabSidebar.forEach(showCurrentSidebar);

function showCurrentSidebar(item, index, arr) {
    item.style.display = 'none';
    if(index === tabIndex){
      item.style.display= 'grid';
    }
}

//button event listener(s)

buttonContainer.addEventListener ("click", function(event) {
  let e = event.target.closest('button');
  if (!e) return;
  console.log('button '+e.id +" data-num: "+ e.dataset.num);
  switch(parseInt(e.dataset.num)) {
    case 0:
      tabIndex = 0;
      break;
    case 1:
      tabIndex = 1;
      break;
    case 2:
      tabIndex = 2;
      break;
    default:
      tabIndex = 0;
      break
  }
  //clear indication of active button
  buttons.forEach( (item, index, arr) =>{
    buttons[index].classList.remove('active');
  });
  //indicate active button
  buttons[tabIndex].classList.add('active');

  //update display
  console.log(`btn event tabIndex: ${tabIndex}`);
  tabSidebar.forEach(showCurrentSidebar);
  tabContents.forEach(showCurrentContent);
  
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyw0QkFBNEIsMERBQWdCO0FBQzVDLDRCQUE0Qiw0REFBaUI7QUFDN0Msd0JBQXdCLGdCQUFnQjs7QUFFeEMsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLE1BQU0sVUFBVSxZQUFZLGdCQUFnQix1QkFBdUI7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7O0FBRW5EO0FBQ0E7QUFDQSxtQ0FBbUMsaUNBQWlDO0FBQ3BFO0FBQ0EsbUNBQW1DLGlDQUFpQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsV0FBVztBQUN4Qyw4QkFBOEIsWUFBWTs7QUFFMUM7O0FBRUE7QUFDQSwyQkFBMkIsU0FBUzs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTSxjQUFjLFNBQVM7QUFDdkU7QUFDQTtBQUNBLHdCQUF3QixJQUFJLFFBQVEsTUFBTSxXQUFXLGlCQUFpQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBLDBCQUEwQixJQUFJLFFBQVEsTUFBTSxXQUFXLGlCQUFpQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIG1hcmdpbjowcHg7XG4gICAgYm94LXNpemluZzpib3JkZXItYm94IDtcbn1cblxuOjpyb290IHtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6MTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaW5lbjtcbn1cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpbmVuO1xuICAgIGJvcmRlci1ib3R0b206IDNweDtcbiAgICBib3JkZXItY29sb3I6IGJyb3duO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbmRpdiNoZWFkTmFtZSB7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtYXJlYTogMS8xLzMvMjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbn1cblxuLyogb3JpZ2luYWwgaW4gaW5kZXguanMgKi9cbi5yZXN0TmFtZSB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IGJsdWU7XG59IFxuXG4vKiB0aGlzIHRvIHRlc3QgaW1wb3J0IGZyb20gZnVuY3Rpb25zLmpzICovXG4ucmVzdF9OYW1lIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogYnJvd247XG59XG5cbmhlYWRlcj5uYXYge1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLWFyZWE6IDIvMi8zLzU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGluZW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbiAgICBjb2xvcjpiZWlnZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5idXR0b24jYnRuMSB7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtYXJlYTogMS8yLzIvMzsgXG59XG5cbmJ1dHRvbiNidG4yIHtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC1hcmVhOiAxLzMvMi80O1xufVxuXG5idXR0b24jYnRuMyB7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtYXJlYTogMS80LzIvNTtcbn1cblxuXG5kaXYuY29udGFpbmVye1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG5cbn1cblxuZGl2I3NpZGVCYXJ7XG4vKmRpdi5zaWRlQmFyeyovXG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpbmVuIDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAzcHg7XG4gICAgYm9yZGVyLWNvbG9yOiBicm93bjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbn1cblxuLnNpZGVUZXh0X2hvbWUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiBicm93bjtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7O1xufVxuXG4uc2lkZVRleHRfbWVudSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4Oztcbn1cblxuLnNpZGVUZXh0X2Fib3V0IHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4Oztcbn1cblxuZGl2I2NvbnRlbnQge1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuLnRhYiB7XG4gICAgZGlzcGxheTogZ3JpZDsgIFxufVxuXG4uYWN0aXZlIHtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7ICAgICAgICAgICBcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QywyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQSwwQ0FBMEM7QUFDMUM7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxVQUFVOztBQUVkOztBQUVBO0FBQ0EsZUFBZTtJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztBQUVGO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzowcHg7XFxuICAgIG1hcmdpbjowcHg7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveCA7XFxufVxcblxcbjo6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaW5lbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGluZW47XFxuICAgIGJvcmRlci1ib3R0b206IDNweDtcXG4gICAgYm9yZGVyLWNvbG9yOiBicm93bjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuZGl2I2hlYWROYW1lIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLWFyZWE6IDEvMS8zLzI7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XFxufVxcblxcbi8qIG9yaWdpbmFsIGluIGluZGV4LmpzICovXFxuLnJlc3ROYW1lIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogYmx1ZTtcXG59IFxcblxcbi8qIHRoaXMgdG8gdGVzdCBpbXBvcnQgZnJvbSBmdW5jdGlvbnMuanMgKi9cXG4ucmVzdF9OYW1lIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogYnJvd247XFxufVxcblxcbmhlYWRlcj5uYXYge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtYXJlYTogMi8yLzMvNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGluZW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG4gICAgY29sb3I6YmVpZ2U7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG5idXR0b24jYnRuMSB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zOyBcXG59XFxuXFxuYnV0dG9uI2J0bjIge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtYXJlYTogMS8zLzIvNDtcXG59XFxuXFxuYnV0dG9uI2J0bjMge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtYXJlYTogMS80LzIvNTtcXG59XFxuXFxuXFxuZGl2LmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuXFxufVxcblxcbmRpdiNzaWRlQmFye1xcbi8qZGl2LnNpZGVCYXJ7Ki9cXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGluZW4gO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDNweDtcXG4gICAgYm9yZGVyLWNvbG9yOiBicm93bjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG5cXG4uc2lkZVRleHRfaG9tZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgY29sb3I6IGJyb3duO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7O1xcbn1cXG5cXG4uc2lkZVRleHRfbWVudSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDs7XFxufVxcblxcbi5zaWRlVGV4dF9hYm91dCB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7O1xcbn1cXG5cXG5kaXYjY29udGVudCB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgfVxcblxcbi50YWIge1xcbiAgICBkaXNwbGF5OiBncmlkOyAgXFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbiAgICBmb250LXdlaWdodDogODAwOyAgICAgICAgICAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9pbXBvcnRzXG5pbXBvcnQgaW1hZ2UzIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcG90YXRvU2FsYWQucG5nJztcblxuLy9hYm91dCB0YWIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy9zaWRlYmFyIHRleHQgYWJvdXQgcGFnZSB2ZXJzaW9uXG5leHBvcnQgY29uc3Qgc2lkZUJhclRleHRfYWJvdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRpbmcuaW5uZXJUZXh0PVwiQWJvdXQgdGV4dFwiO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlVGV4dF9hYm91dFwiKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xuICAgIGxpc3RJdGVtLmRhdGFzZXQudGFiSW5kZXggPSAyO1xuICAgIHJldHVybiBsaXN0SXRlbTtcbn1cblxuLy8gaW1hZ2Vcbi8vIGFib3V0cGFnZSBpbWFnZSBpbWFnZV8zXG5leHBvcnQgY29uc3QgaW1hZ2UzX2NvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAvLyBBZGQgdGhlIGltYWdlIHRvIG91ciA8bGk+LlxuICAgIGNvbnN0IGltYWdlXzMgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZV8zLnNyYyA9IGltYWdlMztcbiAgICBpZihpbWFnZV8zICYmIGltYWdlXzMuc3R5bGUpIHtcbiAgICAgICAgaW1hZ2VfMy5zdHlsZS5oZWlnaHQgPSAnNDUwcHgnO1xuICAgICAgICBpbWFnZV8zLnN0eWxlLndpZHRoID0gJzU1MHB4JztcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZV8zKTtcbiAgICBlbGVtZW50LmRhdGFzZXQudGFiSW5kZXggPSAyO1xuICAgIHJldHVybiBlbGVtZW50OyAgICAgXG59IiwiXG4vLyAtLS0tLS0tLS0tLS0tLSAgTU9WRUQgVE8gU0VQQVJBVEUgTU9EVUxFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9pbXBvcnRzXG4vL2ltcG9ydCBpbWFnZTEgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9nYXJsaWNCcmVhZC5wbmcnO1xuLy9pbXBvcnQgaW1hZ2UyIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWFwbGVTcHJvdXRzLnBuZyc7XG4vL2ltcG9ydCBpbWFnZTMgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wb3RhdG9TYWxhZC5wbmcnO1xuXG4vL3RleHQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vcmVzdGF1cmFudCBuYW1lXG5leHBvcnQgY29uc3QgaGVhZF9uYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGVsZW1lbnQuaW5uZXJUZXh0PVwiT2NjYXNpb25zXCI7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVzdF9OYW1lXCIpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tICBNT1ZFRCBUTyBTRVBBUkFURSBNT0RVTEVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL2hvbWUgdGFiIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vc2lkZWJhciB0ZXh0IGhvbWUgcGFnZSB2ZXJzaW9uXG5leHBvcnQgY29uc3Qgc2lkZUJhclRleHRfaG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGVhZGluZy5pbm5lclRleHQ9XCJTdW1wdHVvdXMgZGluaW5nLCByZWxheGVkIGVudmlyb25tZW50LCBleGNlbGxlbnQgc2VydmljZVwiO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlVGV4dF9ob21lXCIpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG4gICAgbGlzdEl0ZW0uZGF0YXNldC50YWJJbmRleCA9IDA7XG4gICAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG4vLyBpbWFnZVxuLy9ob21lcGFnZSBpbWFnZSBpbWFnZV8xXG5leHBvcnQgY29uc3QgaW1hZ2UxX2NvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAvLyBBZGQgdGhlIGltYWdlIHRvIG91ciA8bGk+LlxuICAgIGNvbnN0IGltYWdlXzEgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZV8xLnNyYyA9IGltYWdlMTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGltYWdlXzEpO1xuICAgIGVsZW1lbnQuZGF0YXNldC50YWJJbmRleCA9IDA7XG4gICAgcmV0dXJuIGVsZW1lbnQ7ICAgICBcbn1cblxuLy9tZW51IHRhYiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vL3NpZGViYXIgdGV4dCBtZW51IHBhZ2UgdmVyc2lvblxuZXhwb3J0IGNvbnN0IHNpZGVCYXJUZXh0X21lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRpbmcuaW5uZXJUZXh0PVwiTWVudSB0ZXh0XCI7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGVUZXh0X21lbnVcIik7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgICBsaXN0SXRlbS5kYXRhc2V0LnRhYkluZGV4ID0gMTtcbiAgICByZXR1cm4gbGlzdEl0ZW07XG59XG5cbi8vIGltYWdlXG4vLyBtZW51cGFnZSBpbWFnZSBpbWFnZV8yXG5leHBvcnQgY29uc3QgaW1hZ2UyX2NvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAvLyBBZGQgdGhlIGltYWdlIHRvIG91ciA8bGk+LlxuICAgIGNvbnN0IGltYWdlXzIgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZV8yLnNyYyA9IGltYWdlMjtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGltYWdlXzIpO1xuICAgIGVsZW1lbnQuZGF0YXNldC50YWJJbmRleCA9IDE7XG4gICAgcmV0dXJuIGVsZW1lbnQ7ICAgICBcbn1cblxuXG4vL2Fib3V0IHRhYiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vL3NpZGViYXIgdGV4dCBhYm91dCBwYWdlIHZlcnNpb25cbmV4cG9ydCBjb25zdCBzaWRlQmFyVGV4dF9hYm91dCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGVhZGluZy5pbm5lclRleHQ9XCJBYm91dCB0ZXh0XCI7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGVUZXh0X2Fib3V0XCIpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG4gICAgbGlzdEl0ZW0uZGF0YXNldC50YWJJbmRleCA9IDI7XG4gICAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG4vLyBpbWFnZVxuLy8gYWJvdXRwYWdlIGltYWdlIGltYWdlXzNcbmV4cG9ydCBjb25zdCBpbWFnZTNfY29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIDxsaT4uXG4gICAgY29uc3QgaW1hZ2VfMyA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlXzMuc3JjID0gaW1hZ2UzO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VfMyk7XG4gICAgZWxlbWVudC5kYXRhc2V0LnRhYkluZGV4ID0gMjtcbiAgICByZXR1cm4gZWxlbWVudDsgICAgIFxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgKi9cbiIsIi8vaW1wb3J0c1xuaW1wb3J0IGltYWdlMSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2dhcmxpY0JyZWFkLnBuZyc7XG5cbi8vaG9tZSB0YWIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy9zaWRlYmFyIHRleHQgaG9tZSBwYWdlIHZlcnNpb25cbmV4cG9ydCBjb25zdCBzaWRlQmFyVGV4dF9ob21lID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5nLmlubmVyVGV4dD1cIlN1bXB0dW91cyBkaW5pbmcsIHJlbGF4ZWQgZW52aXJvbm1lbnQsIGV4Y2VsbGVudCBzZXJ2aWNlXCI7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGVUZXh0X2hvbWVcIik7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgICBsaXN0SXRlbS5kYXRhc2V0LnRhYkluZGV4ID0gMDtcbiAgICByZXR1cm4gbGlzdEl0ZW07XG59XG5cbi8vIGltYWdlXG4vL2hvbWVwYWdlIGltYWdlIGltYWdlXzFcbmV4cG9ydCBjb25zdCBpbWFnZTFfY29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIDxsaT4uXG4gICAgY29uc3QgaW1hZ2VfMSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlXzEuc3JjID0gaW1hZ2UxO1xuICAgIGlmKGltYWdlXzEgJiYgaW1hZ2VfMS5zdHlsZSkge1xuICAgICAgICBpbWFnZV8xLnN0eWxlLmhlaWdodCA9ICc0NTBweCc7XG4gICAgICAgIGltYWdlXzEuc3R5bGUud2lkdGggPSAnNTUwcHgnO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGltYWdlXzEpO1xuICAgIGVsZW1lbnQuZGF0YXNldC50YWJJbmRleCA9IDA7XG4gICAgLy9lbGVtZW50LnN0eWxlLndpZHRoID0gJzMwMHB4JztcbiAgICAvL2VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIFxuICAgIHJldHVybiBlbGVtZW50OyAgICAgXG59XG4iLCIvL2ltcG9ydHNcbmltcG9ydCBpbWFnZTIgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tYXBsZVNwcm91dHMucG5nJztcblxuLy9tZW51IHRhYiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vL3NpZGViYXIgdGV4dCBtZW51IHBhZ2UgdmVyc2lvblxuZXhwb3J0IGNvbnN0IHNpZGVCYXJUZXh0X21lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRpbmcuaW5uZXJUZXh0PVwiTWVudSB0ZXh0XCI7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGVUZXh0X21lbnVcIik7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgICBsaXN0SXRlbS5kYXRhc2V0LnRhYkluZGV4ID0gMTtcbiAgICByZXR1cm4gbGlzdEl0ZW07XG59XG5cbi8vIGltYWdlXG4vLyBtZW51cGFnZSBpbWFnZSBpbWFnZV8yXG5leHBvcnQgY29uc3QgaW1hZ2UyX2NvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAvLyBBZGQgdGhlIGltYWdlIHRvIG91ciA8bGk+LlxuICAgIGNvbnN0IGltYWdlXzIgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZV8yLnNyYyA9IGltYWdlMjtcbiAgICBpZihpbWFnZV8yICYmIGltYWdlXzIuc3R5bGUpIHtcbiAgICAgICAgaW1hZ2VfMi5zdHlsZS5oZWlnaHQgPSAnNDUwcHgnO1xuICAgICAgICBpbWFnZV8yLnN0eWxlLndpZHRoID0gJzU1MHB4JztcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZV8yKTtcbiAgICBlbGVtZW50LmRhdGFzZXQudGFiSW5kZXggPSAxO1xuICAgIHJldHVybiBlbGVtZW50OyAgICAgXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2hlYWRfbmFtZX0gZnJvbSAnLi9mdW5jdGlvbnMuanMnO1xuXG5pbXBvcnQge3NpZGVCYXJUZXh0X2hvbWUsaW1hZ2UxX2NvbXBvbmVudH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7c2lkZUJhclRleHRfbWVudSxpbWFnZTJfY29tcG9uZW50fSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHtzaWRlQmFyVGV4dF9hYm91dCxpbWFnZTNfY29tcG9uZW50fSBmcm9tICcuL2Fib3V0LmpzJztcblxuXG4vL3NldCB0aGUgUmVzdGF1cmFudCBuYW1lXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZE5hbWUnKS5hcHBlbmRDaGlsZChoZWFkX25hbWUoKSk7XG5cbmNvbnN0IGNvbnRlbnRUYWJzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJzLWNvbnRlbnQnKTtcbi8vY29uc29sZS5sb2coYGF0IDExOiAke2NvbnRlbnRUYWJzTGlzdH1gKTtcbmNvbnRlbnRUYWJzTGlzdC5hcHBlbmRDaGlsZChpbWFnZTFfY29tcG9uZW50KCkpO1xuY29udGVudFRhYnNMaXN0LmFwcGVuZENoaWxkKGltYWdlMl9jb21wb25lbnQoKSk7XG5jb250ZW50VGFic0xpc3QuYXBwZW5kQ2hpbGQoaW1hZ2UzX2NvbXBvbmVudCgpKTtcbi8vY29uc29sZS5sb2coYGF0IDE1OiAke2NvbnRlbnRUYWJzTGlzdH1gKTtcblxuXG5jb25zdCBzaWRlQmFyVGFic0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFicy1zaWRlYmFyJyk7XG4vL2NvbnNvbGUubG9nKGBhdCAxNzogJHtzaWRlQmFyVGFic0xpc3R9YCk7XG5zaWRlQmFyVGFic0xpc3QuYXBwZW5kQ2hpbGQoc2lkZUJhclRleHRfaG9tZSgpKTtcbnNpZGVCYXJUYWJzTGlzdC5hcHBlbmRDaGlsZChzaWRlQmFyVGV4dF9tZW51KCkpO1xuc2lkZUJhclRhYnNMaXN0LmFwcGVuZENoaWxkKHNpZGVCYXJUZXh0X2Fib3V0KCkpO1xuLy9jb25zb2xlLmxvZyhgYXQgMjI6ICR7c2lkZUJhclRhYnNMaXN0fWApO1xuXG5sZXQgdGFiSW5kZXggPSAwOyAvL2RlZmF1bHRcbmNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5cbi8vIENvbnZlcnRpbmcgSFRNTCBjb2xsZWN0aW9uIHRvIGFycmF5XG5jb25zdCBidXR0b25zID0gWy4uLmJ1dHRvbkNvbnRhaW5lci5jaGlsZHJlbl07XG5cbi8vZmluZCBkZWZhdWx0IHRhYiBidXR0b24gYW5kIHRhYiBpbmRleFxubGV0IGRlZmF1bHRUYWJJbmRleCA9IC0xO1xuYnV0dG9ucy5mb3JFYWNoKGZpbmREZWZhdWx0KTtcblxuZnVuY3Rpb24gZmluZERlZmF1bHQoaXRlbSwgaW5kZXgsIGFycil7XG4gLy9jb25zb2xlLmxvZyhgaW5kZXg6ICR7aW5kZXh9LCBpdGVtOiAke2FycltpbmRleF19IGJ1dHRvbk51bWJlcjogJHthcnJbaW5kZXhdLmRhdGFzZXQubnVtfWApO1xuIGlmKGFycltpbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWZhdWx0LXRhYicpKSB7IFxuICAgIGRlZmF1bHRUYWJJbmRleCA9IGluZGV4O1xuICAgIGJ1dHRvbnNbZGVmYXVsdFRhYkluZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxufVxuLy9jb25zb2xlLmxvZyhgZGVmYXVsdFRhYkluZGV4ID0gJHtkZWZhdWx0VGFiSW5kZXh9YCk7XG5cbi8vIFNlbGVjdGluZyBzaWRlQmFyIGFuZCBjb250ZW50IGNvbnRhaW5lcnNcbmNvbnN0IHNpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFicy1zaWRlYmFyJyk7XG4vL2NvbnNvbGUubG9nKGBzaWRlYmFyQ29udGFpbmVyOiAke0pTT04uc3RyaW5naWZ5KHNpZGViYXJDb250YWluZXIpfWApO1xuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJzLWNvbnRlbnQnKTtcbi8vY29uc29sZS5sb2coYGNvbnRlbnRDb250YWluZXI6ICR7SlNPTi5zdHJpbmdpZnkoY29udGVudENvbnRhaW5lcil9YCk7XG4vLyBDb252ZXJ0aW5nIEhUTUwgY29sbGVjdGlvbnMgdG8gYXJyYXlzXG4vKlxuY29uc3QgdGFiU2lkZWJhciA9IFsuLi5zaWRlYmFyQ29udGFpbmVyLmNoaWxkcmVuXTtcbmNvbnN0IHRhYkNvbnRlbnRzID0gWy4uLmNvbnRlbnRDb250YWluZXIuY2hpbGRyZW5dO1xuKi9cbmNvbnN0IHRhYlNpZGViYXIgPSBbLi4uc2lkZUJhclRhYnNMaXN0LmNoaWxkcmVuXTtcbmNvbnN0IHRhYkNvbnRlbnRzID0gWy4uLmNvbnRlbnRUYWJzTGlzdC5jaGlsZHJlbl07XG5cbi8vY29uc29sZS5sb2coYHRhYlNpZGViYXI6ICR7dGFiU2lkZWJhcn1gKTtcbi8vY29uc29sZS5sb2coYHRhYkNvbnRlbnRzOiAke3RhYkNvbnRlbnRzfWApO1xuXG4vL3ByZXZlbnQgZGlzcGxheSBpZiBub3QgZGVmYXVsdFxuXG50YWJJbmRleCA9IGRlZmF1bHRUYWJJbmRleDtcbi8vY29uc29sZS5sb2coYHRhYkluZGV4OiAke3RhYkluZGV4fWApO1xuXG4vKlxuLy9zaWRlYmFyXG50YWJTaWRlYmFyLmZvckVhY2goc2hvd0N1cnJlbnRTaWRlYmFyKTtcblxuZnVuY3Rpb24gc2hvd0N1cnJlbnRTaWRlYmFyKGl0ZW0sIGluZGV4LCBhcnIpIHtcbiAgYXJyW2luZGV4XS5zdHlsZVsnZGlzcGxheSddID0gJ25vbmUnO1xuICAvL2NvbnNvbGUubG9nKGBhdCBmdW5jIHNpZGViYXIsIGluZGV4ICR7aW5kZXh9LCB0YWJJbmRleDogJHt0YWJJbmRleH1gKTtcbiAgaWYoaW5kZXggPT09IHRhYkluZGV4KXtcbiAgICBhcnJbaW5kZXhdLnN0eWxlWydkaXNwbGF5J10gPSAnZ3JpZCc7XG4gICAgY29uc29sZS5sb2coYGFycjogJHthcnJ9LCBhcnJbJHtpbmRleH1dLnN0eWxlOiAke2FycltpbmRleF0uc3R5bGV9YCk7XG4gIH1cbn1cbiovXG5cbi8vY29udGVudFxudGFiQ29udGVudHMuZm9yRWFjaChzaG93Q3VycmVudENvbnRlbnQpO1xuXG5mdW5jdGlvbiBzaG93Q3VycmVudENvbnRlbnQoaXRlbSwgaW5kZXgsIGFycil7XG4gIGFycltpbmRleF0uc3R5bGVbJ2Rpc3BsYXknXSA9ICdub25lJztcbiAgLy9jb25zb2xlLmxvZyhgYXQgZnVuYyBjb250ZW50IHRhYkluZGV4OiAke3RhYkluZGV4fWApO1xuICBpZihpbmRleCA9PT0gdGFiSW5kZXgpe1xuICAgIGFycltpbmRleF0uc3R5bGVbJ2Rpc3BsYXknXSA9ICdncmlkJztcbiAgICAvL2NvbnNvbGUubG9nKGBhcnI6ICR7YXJyfSwgYXJyWyR7aW5kZXh9XS5zdHlsZTogJHthcnJbaW5kZXhdLnN0eWxlfWApO1xuICB9XG59XG5cbi8vc2lkZUJhclxudGFiU2lkZWJhci5mb3JFYWNoKHNob3dDdXJyZW50U2lkZWJhcik7XG5cbmZ1bmN0aW9uIHNob3dDdXJyZW50U2lkZWJhcihpdGVtLCBpbmRleCwgYXJyKSB7XG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGlmKGluZGV4ID09PSB0YWJJbmRleCl7XG4gICAgICBpdGVtLnN0eWxlLmRpc3BsYXk9ICdncmlkJztcbiAgICB9XG59XG5cbi8vYnV0dG9uIGV2ZW50IGxpc3RlbmVyKHMpXG5cbmJ1dHRvbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyIChcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGxldCBlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpO1xuICBpZiAoIWUpIHJldHVybjtcbiAgY29uc29sZS5sb2coJ2J1dHRvbiAnK2UuaWQgK1wiIGRhdGEtbnVtOiBcIisgZS5kYXRhc2V0Lm51bSk7XG4gIHN3aXRjaChwYXJzZUludChlLmRhdGFzZXQubnVtKSkge1xuICAgIGNhc2UgMDpcbiAgICAgIHRhYkluZGV4ID0gMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIHRhYkluZGV4ID0gMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHRhYkluZGV4ID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0YWJJbmRleCA9IDA7XG4gICAgICBicmVha1xuICB9XG4gIC8vY2xlYXIgaW5kaWNhdGlvbiBvZiBhY3RpdmUgYnV0dG9uXG4gIGJ1dHRvbnMuZm9yRWFjaCggKGl0ZW0sIGluZGV4LCBhcnIpID0+e1xuICAgIGJ1dHRvbnNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcbiAgLy9pbmRpY2F0ZSBhY3RpdmUgYnV0dG9uXG4gIGJ1dHRvbnNbdGFiSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gIC8vdXBkYXRlIGRpc3BsYXlcbiAgY29uc29sZS5sb2coYGJ0biBldmVudCB0YWJJbmRleDogJHt0YWJJbmRleH1gKTtcbiAgdGFiU2lkZWJhci5mb3JFYWNoKHNob3dDdXJyZW50U2lkZWJhcik7XG4gIHRhYkNvbnRlbnRzLmZvckVhY2goc2hvd0N1cnJlbnRDb250ZW50KTtcbiAgXG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==