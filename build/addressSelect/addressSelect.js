/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)
var $app_template$ = __webpack_require__(5)
var $app_style$ = __webpack_require__(6)
var $app_script$ = __webpack_require__(7)

$app_define$('@app-component/addressSelect', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/addressSelect',{ packagerName:'fa-toolkit', packagerVersion: '2.1.0-Stable.300'})

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(2)
var $app_style$ = __webpack_require__(3)
var $app_script$ = __webpack_require__(4)

$app_define$('@app-component/card_box', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "card_box"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "title_box"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.titleMsg.logoUrl}
          },
          "classList": [
            "title_logo"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.titleMsg.name}
          },
          "classList": [
            "title"
          ]
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "↻"
          },
          "classList": [
            "refresh"
          ],
          "events": {
            "click": "refreshClick"
          }
        }
      ]
    },
    {
      "type": "slot",
      "attr": {}
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "button_box"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": function () {return this.menuMsg},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.menuMsg[this.$idx].buttonText}
              },
              "classList": [
                "menu"
              ],
              "events": {
                "click": function(evt){this.menuClick(this.$idx,evt)}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  ".text-color-primary": {
    "color": "rgba(0,0,0,0.9)"
  },
  ".text-color-secondary": {
    "color": "rgba(0,0,0,0.6)"
  },
  ".text-color-tertiary": {
    "color": "rgba(0,0,0,0.38)"
  },
  ".card_box": {
    "flexDirection": "column",
    "paddingLeft": "33.33333px",
    "paddingRight": "33.33333px"
  },
  ".title_box": {
    "height": "100px",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".title_logo": {
    "width": "33.33333px",
    "height": "33.33333px",
    "borderRadius": "8.33333px"
  },
  ".title": {
    "marginLeft": "16.66667px",
    "color": "rgba(0,0,0,0.9)",
    "fontSize": "25px"
  },
  ".button_box": {
    "height": "100px",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".menu": {
    "marginRight": "50px",
    "color": "#007dff",
    "fontWeight": "500",
    "fontSize": "29.16667px"
  },
  ".refresh": {
    "position": "absolute",
    "right": "16.66667px",
    "backgroundColor": "#ffffff",
    "color": "rgba(0,0,0,0.9)"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  props: ['titleMsg', 'menuMsg'],
  menuClick: function menuClick(idx) {
    this.$dispatch('menu-click', {
      'idx': idx
    });
  },
  refreshClick: function refreshClick() {
    this.$dispatch('refresh-click', {});
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "type": "card_box",
  "attr": {
    "titleMsg": function () {return this.disPlayContent.ability},
    "menuMsg": function () {return this.disPlayContent.buttonLinkArray},
    "refreshClick": function () {return this.getnotes}
  },
  "children": [
    {
      "type": "progress",
      "attr": {
        "type": "circular",
        "show": function () {return this.isDataFetching}
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "contentBox"
      ],
      "repeat": function () {return this.viewNotesData},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "upAddressBox"
          ],
          "events": {
            "click": "itemClicked"
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.upImgUrl}
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.title}
              },
              "classList": [
                "upAddress"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.createTime}
              },
              "classList": [
                "createTime"
              ]
            }
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$item.desc}
          },
          "classList": [
            "address_title"
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  ".text-color-primary": {
    "color": "rgba(0,0,0,0.9)"
  },
  ".text-color-secondary": {
    "color": "rgba(0,0,0,0.6)"
  },
  ".text-color-tertiary": {
    "color": "rgba(0,0,0,0.38)"
  },
  ".contentBox": {
    "flexDirection": "column"
  },
  ".address_title": {
    "flex": 1,
    "fontSize": "25px",
    "marginLeft": "62.5px",
    "color": "rgba(0,0,0,0.6)",
    "marginBottom": "4.16667px"
  },
  ".upAddress": {
    "fontSize": "31.25px",
    "marginLeft": "16.66667px",
    "color": "rgba(0,0,0,0.9)"
  },
  ".upAddressBox": {
    "marginBottom": "12.5px"
  },
  ".offAddress": {
    "fontSize": "37.5px",
    "marginLeft": "16.66667px",
    "color": "rgba(0,0,0,0.6)"
  },
  ".offAddressBox": {
    "marginBottom": "50px"
  },
  ".createTime": {
    "position": "absolute",
    "fontSize": "16.66667px",
    "top": "0px",
    "right": "16.66667px",
    "backgroundColor": "#ffffff",
    "color": "rgba(0,0,0,0.6)"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _img_url = __webpack_require__(8);

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    notes: [],
    viewNotesData: [],
    viewMore: false,
    isDataFetching: "false",
    disPlayContent: {
      "ability": {
        "name": "Notes",
        "logoUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAbo0lEQVR4Xu2dC5RcRZnHf9XdM5MX6du8FliQ8AzIIrAiu7iwhoccXBWCioqyCqi4gi6wopikO7TpTsDHAQIu+AaOPHQReegK6yJk1wVEZQMqChJC8IHgAtM9ec5M99SeuslImMx0V/W9t7vuvVXnzEnO6aqvvu9f9b9VXz2+ErjkEHAITImAcNg4BBwCUyPgCOJ6h0OgBQKOIK57OAQcQeztA7VPUegfYLvmKLOlYLbSVEiGsn0MDQuGCmVq9mqffM3cCBJBG8sys2pN9hOCvRljbwT7IpmDYAekTwJFhu0EzNCpXsIGAUNI1iL8f18EngaeIsNq2eApb4QnxedZryPP5dFHwBFEH6ttcsoy0+oN/l7C6wXsD+yDIgXsGEBskKIv+KSRrJbwG5Hh/nyG+0WZDUGEprmsI4hB648TAsEbpGSegNch6DMQ0f2sklEp+ImQrABW5HM84Aij3wyOIC2wkhcwvT6To4F5COYhOdx6QrRre0eYdgi94ndHkAlwyTKZeoPjgbOA+QgGjBCNX+ZNwHcQfD2/hHsFyPiZEJ3GjiBbsN24iD03ZfggkvcLwR7RQW6vZCl5BrhumuTa6Uv9/6c+pZogago1NIN3SOGPFm9AkGo8/swG6Y8i9wnB12bXuFVcxXBamZLKDlEvs/1Yk/MEfBTYPq2Nr2n3S1JyVSbHlfkyL2mWSUy2VBFkQ5ndhxtcCHxQCGYmphW7YIiUrM/Al3NjfG7mMv7YhSqtqCIVBBkqMncMLgJOj/0qVO+7zQiSb4gcl+bLrOq9OtFqkGiCDJY4TEiKCOYDmWihTJ30MSS3SsElhQork2p9IgmyfiG7jmZYjuDUpDacVXZJbu7LceHMMs9apVcIyiSKIPJs+uo7c6GERc7HCKF3GIiQsE5IluRzXC7KNAyKWp01MQSpFTkWwVfAPwvlUq8QkDwhM3yksIT7eqVCmPXGniBbNviWCzg5TGCcrIAISL7TLzl/xlJ+F1BST4vHmiD1IhdLQbmnCLrKWyIgJIvzVSpxhSmWBNkyatwh4JC4Ap8yvR8eGOPtcTy+EjuCDC3m5KbkBgGzUtbJYm2ucuKzgtNnL+GOOBkSG4LIjzFQ97gSODtOADtdJyAguSZf54K4nO+KBUFqZfaWTe4UcJDrcPFHQMJjIstJXpnVtltjPUEGi5wJXOX2NWzvSmb6+ffsxzjDW8otZiW7m9tqggyWuGrLidvuouJq6x4Ckku8Kgu7V6FZTVYSRIKol7gJeLeZOS53HBGQkuu9KmfaeJvROoLIMv21BrcKwVvi2NhO584QkJLveTneLsqMdCYhmlJWEWRLPKm7BfxdNOY6qTYjIOF+L8sJNkVdsYYgaxewUyPHDwUcbHMjOt0iR2ClyHK8LbcXrSCI2hkfzvhxm+ZEDr+rIA4IrOrPcsyMMr/vtbI9J8jaBby6keUeIdi112C4+u1BQMKzWcmxs6s80UutekoQdUd8pMnDwM69BMHVbSkCkuf7Ja/r5YngnhFERRaRTX7q7m9Y2jltUUvylMhxRK98kp4QRMWjqs3iQXca15ZeaL0eK/NZjurF6lbXCSJPJVufyz1+rFuXHAK6CEjuzed4oygzplskjHxdJ0itxLeBt4ehvJORLgQk3FCo8I/dtLqrBKmVuAb4p24a6OpKHAKf9yp8oltWdY0gtSIXIbi0W4a5epKLgIBz8xWu7oaFXSFIbTFvRPKDbhjk6kgBAhIp4dhC1d9cjjRFTpD1ZXYbbfIY4EVqiROeLgQkL/bleE3UweoiJYi/YnUADwGvTVfrOWu7hMBP849zpLiFZlT1RUqQwSJXCMF5USnv5DoEkHzOq/LJqJCIjCBDRd4yJvhuVIo7uQ6BcQSE4MT8Ev4jCkQiIciGi3nV8BiPudA8UTSZkzkJArW+LAdF4Y+EThBZJldr8LAQvMY1pUOgiwhE4o+ETpB6kZIULOkiMK4qh4CPgIBSvkI1TDhCJYh/fL3BqhQ8nazdBhlvDn0HnkzugPlkdz0UMS381W65qUbzj4/QXLOCkZXXM1Zbo61fojJKhvtz7BvmRatQCTJY5A4hOClRoHdojCLCwJHnMXBM92Nrj6y8jk13XYAiTgrTbV6Ft4Vld2gEGSwyT4hkvAkRFFw1asw47TZ/xOhVUqPIhptP8UeW1CXJcV6Ve8OwOxSCqFA99Sa/dpef8KdQs85ZiSJJr5MaQdZfe0waSbI6n2VuGC9dhUKQeonFEj7d6w5hQ/0zz7yP3F72XHVRI8i6aw6zAZpu67DIq7AsaKWBCeIc85eboO/A+f7Uyra06b5PM3xf932hXuKgYv8OZJkb1GEPTBDnmL/cDWZ9ZGVP/Y6pOqTyR9Zetlcv+2uv6r7Vq/COIJUHIoj/Djn8bxAFklJW+R6zFw5aa46aZqXSYYfDvYofOaejFIwgRb7rYuhuxl35Hcr/sDWlcZq1pS0CLft2TBAV8K2Z5ZcItYHpUv9hZzD9lGutBSK1BJFIAXPzVZ7spHE67tyDRW4Qgvd2UmkSyziC2NuqAq7LV/yHmIxTRwRRp3VHxngayBjXmNACbopldcM2+pq8auYy/miqZUcEqZX4V+Ac08qSnN856Xa3rpQsL1Q531RLY4IMLWCHsRzPAv2mlSU9/6xzHiG7i31Pt4/VnmHtZb3f2e9l+0vJRnLsVihjdEDNmCC1IssQLOilsb2oW40Q7Tp/bs+jGDgu1NPWoZg68qNLGX3ybl+WHK6ndbkXCUsKFS42AdWIILLMtFqD54Qgb1JJHPOOH1PvO/QMKzf/gmKqzmmN/vp2Gr++ndHH7wgqLi7lX8qvY3dxORt1FTYiSH0Rp8mM/7hmYpMaKaa96XLUqlRaktpA3HT3BTSejjzMVM8hFXBavsI3dRUxIkityL8j+Add4XHLp46nq82+KC41xQELdV5L7ZckOanHQgtV3qprozZBBst4osELCLK6wuOUL+3kGG8rddlq420dbRnEo7klTZljR11nXZsg9SIfk4Ir44GCmZZqxNjuX55O7cgxES1FEEWUpCaT2L7aBKkVeQjBEUkEbfop19F/2PuTaFpHNikHXp3+TeqVXSl5oFDVe2pciyC1InshWN0R2pYXUqtVavRw6ZUIJP3sVn+WPXTuimgRZLBIWQiz9eO4dLiBI8/3V61ceiUCSb9DohsiSIsgtRJPJfW+uRo9gt4fVzvVtoXaUTZlvD0D8V7dZ0/w0u8qr8J+7QBqSxD/WHvOf74gcUmtXKlbgKZJEWLkwSv8jTbbiDHRFmWj2uxU+zpimtn+roqxtfG25O4HCcn+7Y7BtyVIvcQ5Ev9wYuJSJ8758IPL/fvdcXNgN2+AXmG8GDG0rBA7W7U7quRsr8pXWuVvS5BakX9DcKp2pTHJ2MnSbhKWP00/CkmwuUWXvMmrtL7T1J4gJV4Eto9Jv9dW0/SCU5KmGzPPWkFuzhu0sEpy2CAJzxYq/GXHI0iS/Q/T+FVJmmqYLm2rPRHbfS0ttk+SqZ0f0nIESar/YdpBkjR6jPcRk1FE+V2b7jK+a9Rpn+1uuTZ+SEuCJNX/UAGlpx2jfy0gicudJlNMtSChRtCEppZ+SGuCJNT/MNn7SPJtvNkLa9pLvyoQtlrWTlpq54dMSZCk+h+m4UHVMwLDD16RtH7h26OWfdUTDTpJXaracNN8nayxy9PKD5mSILUSZwNfip21bRQ2XeZMknM+ERpTXyypzrqEDxQqfH2yrjMlQeolLpeYR4GwmVCmkUeS6JxPbB8TZz2po6mAy/IVPm5EkCTeHjQ9mJhE53xiJzBx1pN6gLHVLcNWUywVqnFfm0cEU91Moq8n2TmfiJuJs57QINi/8SrM1R5BZJlMvcFIkq7Xmh5MTOp0YrJOYOKsJ3LaKWnmc/SLMmMT8Zl0BBkqMndM8LjpF9rm/CadQNmRZOc8iLOe1NuGIst++TKr9AiymLeOSe60ucOb6qbe7tCNVpLIr2QbwEyc9SQeYBSSN+erfF+LIINFPi4EnzfthLbmN3FElQ1pcM6DOOvqEpXCKElJSM7PV1muRZBayd//UPsgiUgz3nM7fQecrGVLmpzzIM56AvdErvYqnKtFkMESKwTonYfW6na9y2S6GZbE6YMu+iZ+WuKCOkju8aq8UYsgtRJPAPvrAmtzPpO9D7mp7kdBj9ttwbDwN/mYJG1PREp+WahysBZBBkv8QcBuYQHfSzkmBxPT6JxPbBsTZz1hBxjXeBW2eQp40mXewRJ1AbN72bHDqNv01aeEboIZQWmyoJGwD8oLXoWdtEaQWolmEp5XMzmY2HzuUdZdfahRZ0pqZpOd9QTtF23yKkxvSxB5AdPrs9gQ18Yfjwel9jymv+067b0PtXTZXJP88P867Zo7YL72myjqKoB6Y0Slxpr/0hFvbZ784+TELf7g8Oe0zRRr7QJ2aub4k7VWTKKYIsPAMReTmzNPu2HjZF9cdB1/lGf0ketjGXAuP4InPkO9JUHiFodXXZ3tP/J87ZEiLp0t7nqqEVk9yqOiosQl9Y+x+4yl/KElQdaVOLgBP7fdKDVqzDjtNpQj7pKdCKgRRe0rxeWqbkZywOyqv8Ux9RRrqMSRY/CAnZBv1kqRQ4XtUSd0XbIfgRgtBx/uVXi4JUHqizhCZnjIZtinn3Jtqt4QtLktdHRTI4k6u2X7dEvAEfkKP21JENuDNZgGXdBpQJcnegTicMAxk+XA2eVXXvPYZhVrwyL2GMnw2+gh66wGk53xzmpwpaJCwPZT0lpOeu1TFOjjpahACiLX9FZgkLpc2fARsH3nPZ8lL8oMtZxiSRD10rZXD8OHy1yiyWlTc+muRNQI2B6hMV8hI0C2JIj6sVZkE4KBqAEzlW9ykG4y2eMvQamGUith6i+7yyGmaqQqvzrh3Hzu5b2MoJjZOs2SsKFQYebExp30sGKt6L+HvoNtPcEkKsnWuquhfeTHV0y6iqKOpvQddgbqWLzpC0y24ROmPurYyPgrWtt0mmmev4qoYhybYmYrQZA871XZRY8gJdSzr3PCBDwMWfklrxj92opUX78NN8/XOvagiKJuHqZ9RFGYqUjuOu+kj593072tqRrM4gtpk75ZOPlx9yK/EIK/atsDu5zBhCCqodXpXJN3LfwNyLNWpJYkCrP1184z3q8wOTVt8U3ElV6Fv9YdQX4A214/7DIftqnOhCCd3u3Y/DTbGuOpQ6+xCaP+Tr/uJh8Wawki+b5X5c1aBBks8gUhtr3AHkYjBJGhS5Cgy4kml4aC2GNTWeVzrP965+fadC+n2UoQKVleqG4bi3rSKVa9yHlSYF3Mf12ChBFxw+TSkE0dvVNdwjgvNeucR9pOT20liIBz8xWu1hpB6ot5k5TbBtHqFPywyukQJKywPSbz6rDs66Wc+uK277m2VU/n5S5bCYLgBG8J/6lHkDL7yiYqeLVVSYcgQacK4wbrNLZV4ARQJizMdKZZthJkYIw505fyjBZBbA1erUOQsBogTYciU08QybBXZdpk35hWzx9YFxtLhyBhPRXmRhDzISmuI4iExwqVybc1piTIYInvCbZd9jKHLbwSOgQJ6+H7NJ37CuuMlE6QvrBG+PB6Fer01e1elVOMRpB6kcuk4IJQFQkoTIcgqoowQtGk7Vh9p/tGWzepTgxkKwkCn/UqXGREkFqRDyH4csA+HWpxXYIEbYQ0+R/jDRR070j3KkLQtgm1Q20RJiVnFapca0SQtUUObAp+FYVCncrUJUiQR17UrvCsc1aizmalLQUZRVSMAJ0AGjYSZLJgDeNt33Lx27ZTvboEUcZ1esUzzffdlf+mTtuaBu828dcsJMifvAp/MdXHsDVBSnwLeKctX1ITgiidVbgZdb5Ip8HVyDHtTZenPhiEKUkUZso5103WEURys1flPZ0RpMhHENtuv+uCEXY+U4Ko+tVpXvUgZ6vYTGpqoEaONE6rJmsj9UHZfOT9+imbUGE2MO9irWnV1kKsIwh82KtM7Wu3HEFs80M6Ich44yiiKJLI2hr/OHemMIfMLoeiHHJHjMl5MB5KVGGmpqw+Zt4cTGL3TpRsG0GEZP98depTI20P4NjkhwQhSNijmZPXGQKWEaSl/6EsbE8Qi/wQR5DOOqVNpWwiiJTcWKhyeit82hPEIj/EEcSmrt6ZLjYRBPiQV+GrgQhikx/iCNJZp7SplE0EEVn2y5dZFYggqnCt5Dsx+/YaaEeQXrdA8PotIshqr8I+7SxqO8VSAgaLlIXg4nbCov7dESRqhKOXbxFBFnkVlrWzWIsgtSL7IFoPRe0qCuN3R5AwUOytDFsIMlkc3smQ0SKIP80q8hCCI3oJryNIL9EPp24bCCLh/kKFo3Qs0iZIvcQ/S1iuIzSqPI4gUSHbPbk2EATJOV6Va3Ss1ibI2jI7Nxs8iyCrIziKPI4gUaDaXZk9J4ikKXPsWChT07FcmyBbpll3IThRR3AUeRxBokC1uzJ7TRAJ3y1UOEnXaiOC1EucLuEbusLDzucIEjai3ZfXa4Iwxru9pf4pda1kRBB5ITPr0/k94GlJ70GmsEhkbRTyCDAN+qzEuEoxwKyWz7KrKLNJF0YjgvjTrBJLgYW6FXQ7nyOIOeJpIYiEaqFCyQQhY4IMldmx2eC3QjDdpKJu5XUEMUc6DQSRko3eKLuKz1A3QciYIEr4YImrBHzUpKJu5XUEMUc6JQSZNDh1O7Q6Isj6hew6mvVfws21q6DbvzuCmCOeAoI0cln2mFXmOVN0OiLIllHkegHvM60w6vyOIOYIJ54gkmu9KmeZI6NxYWoqofUi+0l4AtH+0lUninVaxhHEHLlEE0QiRY792x1rnwq1jkcQf0WryG0I5ps3SXQl1OtQGW/PwBUEiREVuPIuC0g4Qb7tVTm1U0iDEaTEa4GfdVp5FOXCauww3suIwr4oZOqEDNWp18Z9kGyDg7a7pPMAiIEIsmUUuRXB23QA7EaeMB6+CesRnm7YG0YdOkGndeqx7qMi+ZZX5d06ukcyxVJCN5TZfaTBKgQDQRQJq2wYcXWHH1zux4VKS1KhfFSw7iAprGcnguiwdVm179E3xl6zlvF8EJmBR5Ato8giBNUgioRZVuetvKnq6+T56DB175WsoNMsC6dXF3kVPhsUz1AIIsvk6k3Ugzt7B1UojPK6kcYnq0tFYRx+0Lr3S8OApaUMNYqoD4uYljeuK2hkeOMK2xdYnc8yV5RptM/aOkcoBNkyihyL4IdBFQqrfCdPOVvY0GHBoSVHfVhmnrnCiCTN5x5l3dWHasnvViYpOaZQZUUY9YVGEKXMYInbBZwchmJhyFDxY2ecdrtWg/f8GHYYBocgQ5FEYaazVG6lryYJtKw7EcJQCWKbw66MVVHb+48834/aPrHRlb+h4vUO31f2g1y79DICCi+FW3aXQ14Bi8KssWYFIw9e4cfrtSmF5ZhvbVOoBFGC6yUWS/i0TcCN66Lm2SoAs0oqMLMKYu1Smzn4NA81qsQCM8lCr8olYbZp6ASRZ9NX35mfILBrYhomak6WdQhIeNTLcngYjnmkI4gSvnERe24S/EIItrMOSadQ4hCQkrXTJAdPX8ozYRsX+ggyruBgkflCcFvYCjt5DoGJCGQkJ8+ucmcUyERGEKVsrcgXEXw4CsWdTIfAFgSu9iqcGxUakRJEfoyBmsfDAg6KygAnN70ISPiVl+WQsP2OyH2QrSuol9l3rMmjAmaktymd5WEjIGGDkLzGq/JU2LK7ShB/qrWId5Hhm1Ea4mSnDIEx3ukt5ZaorY50irW18oMlrLyiGzXATn4ECEi+5lX5YASStxHZNYL4/kiee4Xg9d0wzNWRTASk5L+9P3G8+DKj3bCwawRRxsgys+pN7gVe1w3jXB2JQ+Dh/DqOFpezsVuWdZUgPkkuIl/r5363stWtJk5GPVLycy/H0aLMUDct6jpBlHFrF7BTM8ePbbk/0k3AXV0dICB5kgZ/413KYAelAxXpCUGUxurk73CThwTsFsgCVzjRCEjJ7/pyHNFJ0LcwgOkZQZTyfmwtwf8AO4dhjJORMAQk/ydzHFEo07O7CD0liD/dKnFQE+4BdklY8zpzgiAgeT6TY97sMo8HERO0bM8JMj7dGmlynw1vsQcF1JUPAQHJE/2S42Ys5Q8hSAskwgqC+NOtMtvLBuqJt56+pBsITVc4OAKSn+VzHNft1aqpFLeGIEpBWWZavcEdCE4IjrSTEDsEJPfk67xFXMWwLbpbRRCfJKeSrR/ADRAsIp4tADs99BCQkhu9HO8TZcb0SnQnl3UE8UkCol7iUuCT3YHB1dJTBCSXeFU7n/WzkiDjjVUvcq6Eq2x7YqGnnSlJlUskgnO8Cl+01SyrCeI770VOlIIbge1tBdHp1RECLyF4p7fEnmCDk1lhPUGU0uvL7Dba8N8icStcHfVFuwpJyQP9OU6dWeZZuzTbVptYEGTLCpeK/6tiHl1oO6hOvykQ2Dyl+lz+cRaKW2jGAafYEGQrv+TEMfimEJhHWY5DiyRXx5eE5L35KnfHycTYEUSBu2ERe4xkuAM4LE5gp1ZXyU/6cpwShynVxDaKJUG2Gk1KUrAktR0vDoZLil6VpXFQNbZOeitwB8vMocFyITgpro2QRL2l5M6BHOfOKPP7ONsX6xFka+BrRU5A8CVgc3Rql3qFwGokH/Kq/tXq2KfEEES1hAoMMeTxiTHJQiGYHvvWiZEBKk5VBi6Z/Tyf6VZAhW7AkyiCjAPmO/GCK217w70bDdqTOiTf6c9xXtynU4n0QVp1iPoi/nZMsEDAW91xlZCpo/Y04A61SFKosDJk6daIS+QIMhHdtQt4dSPHRQLeA+SsQT+OikhGJdyUyVHNl1kVRxNMdE4FQf489bqYVw03uRDBB1ysYJNuAlKyHvhqf47PxnE/w8zal3OniiDjZqvbi2MNzhfwUQSFTsFLSbmXJHxBjHJFL8Lu9BrjVBJkHHT/BmOTkyScLiQnIujrdYNYUf/madRdQnBjPsudoswmK/TqgRKpJsjWeNc+RYE+3rWFLK9PnVMv1SyK+xUpGOVbaRwtUreK1ekHR72xOJzhvUhOR3Bgp3LiUE7CY0JyY7/khhlL+V0cdO6mjm4EaYO2egBINjke/L9jYn9xS/Ii+CGWVCyye6J+gKabnTmKuhxBDFCVZTL1EQ4lu5kwUnKU7Tv2UrJRwI8Q/JAm9+SXsVL41/5d0kHAEUQHpRZ5aos5To5xtID9gX0Q7A3sGFBsp8VfAJ5CslrAExJ+lJQzUZ0CErScI0hQBCcp77+DMsL+5NgLyT4+cSRzEOyAZDYwWwq2092L8d/jgyEkaxH+v2qa9LRPhgyrpWS1l+VJUWZdBOakWqQjSI+bX62e9Q+wXXPUJ40iD0IylO1jaFgwVChT67GKqa7eESTVze+Mb4eAI0g7hNzvqUbAESTVze+Mb4eAI0g7hNzvqUbg/wFgBQVfJYfkigAAAABJRU5ErkJggg=="
      },
      "items": [{
        "carImageUrl": {
          "small": {
            "url": "https://example.com/car_comfort_small@1x.png",
            "widthPixels": 72,
            "heightPixels": 72
          },
          "medium": {
            "url": "https://example.com/car_comfort_small@2x.png",
            "widthPixels": 172,
            "heightPixels": 172
          },
          "large": {
            "url": "https://example.com/car_comfort_small@3x.png",
            "widthPixels": 280,
            "heightPixels": 280
          }
        },
        "productType": "Special car",
        "rideTypeDisplayNameCn": "Comfortable",
        "currencyCode": "CNY",
        "estimatePrice": 12.01,
        "time": 15,
        "distance": 8.02,
        "srcAddrDisplayName": "Nanjing South Railway Station",
        "dstAddrDisplayName": "New interface pedestrian street",
        "buttonLinkArray": [{
          "buttonImageURL": "",
          "buttonText": "Calling a car",
          "webURL": "",
          "deepLink": {
            "url": "OneTravel://flash/action?param1=xxx&param2=yyy",
            "appName": "DiDi",
            "appPackage": "com.didi.chuxing",
            "minVersion": "",
            "minAndroidAPILevel": "23"
          },
          "quickApp": {
            "url": "hap://app/com.example/home?biz=flash&action=call&slat=32.03766&slng=118.78706&tlng=118.7909&tlat=32.024117",
            "minPlatformVersion": "",
            "minVersion": ""
          }
        }],
        "dynamic": 1.5
      }],
      "buttonLinkArray": [{
        "buttonText": "View more"
      }]
    },
    upImgUrl: _img_url.URL.upUrl,
    offImgUrl: _img_url.URL.offUrl
  },
  getnotes: function getnotes() {
    var that = this;
    this.isDataFetching = "true";

    _system["default"].fetch({
      url: 'https://huaweinote-ce91a.firebaseio.com/notes.json',
      header: {
        auth: "AIzaSyBfxNOUWZM2lP8Ne4FhDdeD_zKPKuFXL48"
      },
      success: function success(response) {
        var notes = [];
        var data = JSON.parse(response.data);

        for (var k in data) {
          if (data.hasOwnProperty(k)) {
            notes.push(data[k]);
          }
        }

        that.notes = notes.reverse();
        that.viewNotesData = that.viewMore ? that.notes : that.notes.slice(0, 3);
        that.isDataFetching = "false";
        console.log(notes);
      },
      fail: function fail(data, code) {
        console.log("handling fail, code = " + code);
        that.isDataFetching = "false";
      }
    });
  },
  onInit: function onInit() {
    this.$on('menu-click', this.menuClick);
    this.$on('refresh-click', this.getnotes);
    this.getnotes();
  },
  itemClicked: function itemClicked() {
    console.log("itemClicked");
  },
  menuClick: function menuClick(event) {
    switch (event.detail.idx) {
      case 0:
        this.viewMore = !this.viewMore;
        this.disPlayContent.buttonLinkArray[0].buttonText = this.viewMore ? "View less" : "View more";
        this.viewNotesData = this.viewMore ? this.notes : this.notes.slice(0, 3);
        break;

      case 1:
        break;

      default:
        break;
    }
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URL = void 0;
var URL = {
  "upUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAplJREFUeAHtmT1LBDEQhicruoVgIweiltoo2AlWiq2CYGOh/gpbwUKw9V+cxTWCoO2BlWCnaKOlXyA2gsUqXsy7y8KdyBEzs7vizcDd7nFJ3syTyW4yIVJTAkpACSgBJaAElIASUAJKQAkoASWgBHqNgCnN4avGAL18LFKrteI0p4jsKJFxH5h9cPfuQ9cURUc03N+k6bX39K+Cv4oH0GyMkEl2nB8bZO2Qlz/GvLpydbLxLi2uPXnVCSxUHICbk5juX7bJ0pYb4cGw/pk3MrRPY8N7NLmUhLXRvVYxALJRP3QjPtdd3vNfY85cNKwWEQ3yAE4PZqj1eeycH/d0z6+YMXdkzBItbF76VfArJQsgG/lzcedzXwDBxrOSkRDlbbOvmPMmQdjLjnx7x9A2NKAlZHIA0gee0Jzv5hyeK9ASMpkpgNCn5Db8af9bb9zbgeIJiakgEwHpez70Vfdb51HeaWVri5DKHXX4EYAV3nPy7Oa+3yKnQ57xA4ulWlzjrhj5EYDlbdnOgxs0oc00PoBsbc/sRmB1AW0+gHRjE+gAv5rbVPFMAAB2dVUZX1sAQL6lrQICX1sAQBWO55rW5nehVwEASGZUZo9cZQEAaSaH24/A+nxtAQAujVWdsbX5AJDDq8oEtPkAkMDMcnjlYoAmtJnGB5Blb+vMfoRUr3P3ARDlA0AryN4StqhlmdNKNfl6MgCQukb2tiyDllC6XAYAHEfqGtnbog0a0BIyOQDI2yN1jcRlUZYlRVclzwjkAMBphGXUt1wIhDwtLhT6+RjJAkCr8+sXaepacjpkByOz0mcC6C4/JYZWfrKePhprB9Kzh6PtEHD/R4/Hv3dTfysBJaAElIASUAJKQAkoASWgBJSAElAC/5/AFyX3yNpu52xjAAAAAElFTkSuQmCC",
  "offUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAspJREFUeAHtmTFLXEEQx2fuRE8EQUIgSIiNVQo74cpIqigEUmiT75DiQJuAhcFG4Yp8h2uSQhBMmoitkC4BqzSKqBBCICDnCXGd2X0PzkbXnXnvCTcDd+8dt7v/md+bfW93HoCZETACRsAIGAEjYASMgBEwAkbACBgBIzBoBLCsgN2nxWE4+jsH7v9r0nwOgJMAjj5seELn9IEDwPo2PJvYw6XPl/6vgr8KB+A25p8AXqxSHG/BufGoeBD/UbsOuMYarnw5i+qT2KgwAO7jqxHoXb6nK9uiwMeS/EM8p+xow8jwOr772ksa445OhQDwVx26W6TdvEM/9u99gNE3RWSDOgC3+XIG3NUORfY0NrrIdscwVJ/H1refke2jmqkCyK78d1LWDj4P5pgyYVYzE2r5yNKjn/Mh7YsKnl2ksbtbQUvqceivBiDc8NTm/G3RNTOt29pE/6cyBbJH3a/ku320u1lDfjq4xrTGVNDJAH7Opz7q7hs8t2etsLZI6X2jjzgD/Arv8M9vcipukXNDXvCDF0tTjx5LV4zyDPDL25KDZ24MnLWFJgcQ1vZCNxK7K2jLAfiNTWIA8m60qZKZAgDe1VVlcm0FAPmWtgoIcm0FAFUEnmk6cFJ1BQBczKjIEE+lygoAfCVH6kdif7m2AgAqY1VnYm05AK7hVWUK2nIAVMCEUMMrFwNrsrbQxACytXhH6EdK9450H8CiYgDec6reUhZQAbMkC9vhNQ01FQBhX07V29IM2xq1AHZXBYCPm0rXdKTqbeG2z2VyLRVxPaDfkYEuijIIn5ZYW6BTqt6qWyiLK78p0psCWby4vPuDS9f0U3M68IuRWe13AuyyOgAe1GdCo/ECsPZB9HTguz2PQWNp3fTYv35TvQf0D5yfZxXjwXs5mgPIjw/19Xjunx2NgBEwAkbACBgBI2AEjIARMAJGwAgYgcEhcA3esslu0Wp+GwAAAABJRU5ErkJggg=="
};
exports.URL = URL;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXGFkZHJlc3NTZWxlY3RcXGFkZHJlc3NTZWxlY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL2UwMDU1NjIzNi8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9jb20uYWJpbGl0eWdhbGxlcnkubm90ZXMvc3JjL2FkZHJlc3NTZWxlY3QvYWRkcmVzc1NlbGVjdC51eCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvZTAwNTU2MjM2Ly5xdWlja2FwcC1pZGUvd29ya3NwYWNlL2NvbS5hYmlsaXR5Z2FsbGVyeS5ub3Rlcy9zcmMvY29tbW9uL2NvbXBvbmVudC9jYXJkX2JveC9jYXJkX2JveC51eCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvZTAwNTU2MjM2Ly5xdWlja2FwcC1pZGUvd29ya3NwYWNlL2NvbS5hYmlsaXR5Z2FsbGVyeS5ub3Rlcy9zcmMvY29tbW9uL2NvbXBvbmVudC9jYXJkX2JveC9jYXJkX2JveC51eD83NDVhIiwid2VicGFjazovLy9jOi9Vc2Vycy9lMDA1NTYyMzYvLnF1aWNrYXBwLWlkZS93b3Jrc3BhY2UvY29tLmFiaWxpdHlnYWxsZXJ5Lm5vdGVzL3NyYy9jb21tb24vY29tcG9uZW50L2NhcmRfYm94L2NhcmRfYm94LnV4Pzg5MmMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL2UwMDU1NjIzNi8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9jb20uYWJpbGl0eWdhbGxlcnkubm90ZXMvc3JjL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3gvY2FyZF9ib3gudXg/YWIwOCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvZTAwNTU2MjM2Ly5xdWlja2FwcC1pZGUvd29ya3NwYWNlL2NvbS5hYmlsaXR5Z2FsbGVyeS5ub3Rlcy9zcmMvYWRkcmVzc1NlbGVjdC9hZGRyZXNzU2VsZWN0LnV4P2JlMWMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL2UwMDU1NjIzNi8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9jb20uYWJpbGl0eWdhbGxlcnkubm90ZXMvc3JjL2FkZHJlc3NTZWxlY3QvYWRkcmVzc1NlbGVjdC51eD8zN2U1Iiwid2VicGFjazovLy9jOi9Vc2Vycy9lMDA1NTYyMzYvLnF1aWNrYXBwLWlkZS93b3Jrc3BhY2UvY29tLmFiaWxpdHlnYWxsZXJ5Lm5vdGVzL3NyYy9hZGRyZXNzU2VsZWN0L2FkZHJlc3NTZWxlY3QudXg/MzFkNyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvZTAwNTU2MjM2Ly5xdWlja2FwcC1pZGUvd29ya3NwYWNlL2NvbS5hYmlsaXR5Z2FsbGVyeS5ub3Rlcy9zcmMvQ29tbW9uL2pzL2ltZ191cmwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwicmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuLi9jb21tb24vY29tcG9uZW50L2NhcmRfYm94L2NhcmRfYm94LnV4P25hbWU9Y2FyZF9ib3hcIilcbnZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2FkZHJlc3NTZWxlY3QudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXGUwMDU1NjIzNlxcXFwucXVpY2thcHAtaWRlXFxcXHdvcmtzcGFjZVxcXFxjb20uYWJpbGl0eWdhbGxlcnkubm90ZXNcXFxcc3JjXFxcXGFkZHJlc3NTZWxlY3RcXFxcYWRkcmVzc1NlbGVjdC51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFxlMDA1NTYyMzZcXFxcLnF1aWNrYXBwLWlkZVxcXFx3b3Jrc3BhY2VcXFxcY29tLmFiaWxpdHlnYWxsZXJ5Lm5vdGVzXFxcXHNyY1xcXFxhZGRyZXNzU2VsZWN0XFxcXGFkZHJlc3NTZWxlY3QudXghLi9hZGRyZXNzU2VsZWN0LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2FkZHJlc3NTZWxlY3QudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9hZGRyZXNzU2VsZWN0JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9hZGRyZXNzU2VsZWN0Jyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzIuMS4wLVN0YWJsZS4zMDAnfSkiLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jYXJkX2JveC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcZTAwNTU2MjM2XFxcXC5xdWlja2FwcC1pZGVcXFxcd29ya3NwYWNlXFxcXGNvbS5hYmlsaXR5Z2FsbGVyeS5ub3Rlc1xcXFxzcmNcXFxcY29tbW9uXFxcXGNvbXBvbmVudFxcXFxjYXJkX2JveFxcXFxjYXJkX2JveC51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFxlMDA1NTYyMzZcXFxcLnF1aWNrYXBwLWlkZVxcXFx3b3Jrc3BhY2VcXFxcY29tLmFiaWxpdHlnYWxsZXJ5Lm5vdGVzXFxcXHNyY1xcXFxjb21tb25cXFxcY29tcG9uZW50XFxcXGNhcmRfYm94XFxcXGNhcmRfYm94LnV4IS4vY2FyZF9ib3gudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY2FyZF9ib3gudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9jYXJkX2JveCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY2FyZF9ib3hcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0aXRsZV9ib3hcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlTXNnLmxvZ29Vcmx9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRpdGxlX2xvZ29cIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVNc2cubmFtZX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidGl0bGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuKGu1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJlZnJlc2hcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInJlZnJlc2hDbGlja1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzbG90XCIsXG4gICAgICBcImF0dHJcIjoge31cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbl9ib3hcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYmxvY2tcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1lbnVNc2d9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubWVudU1zZ1t0aGlzLiRpZHhdLmJ1dHRvblRleHR9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm1lbnVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMubWVudUNsaWNrKHRoaXMuJGlkeCxldnQpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnRleHQtY29sb3ItcHJpbWFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC45KVwiXG4gIH0sXG4gIFwiLnRleHQtY29sb3Itc2Vjb25kYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjYpXCJcbiAgfSxcbiAgXCIudGV4dC1jb2xvci10ZXJ0aWFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC4zOClcIlxuICB9LFxuICBcIi5jYXJkX2JveFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMzLjMzMzMzcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMzLjMzMzMzcHhcIlxuICB9LFxuICBcIi50aXRsZV9ib3hcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnRpdGxlX2xvZ29cIjoge1xuICAgIFwid2lkdGhcIjogXCIzMy4zMzMzM3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMy4zMzMzM3B4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4LjMzMzMzcHhcIlxuICB9LFxuICBcIi50aXRsZVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTYuNjY2NjdweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuOSlcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiXG4gIH0sXG4gIFwiLmJ1dHRvbl9ib3hcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLm1lbnVcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDdkZmZcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjkuMTY2NjdweFwiXG4gIH0sXG4gIFwiLnJlZnJlc2hcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogXCIxNi42NjY2N3B4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC45KVwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm9wczogWyd0aXRsZU1zZycsICdtZW51TXNnJ10sXG4gIG1lbnVDbGljazogZnVuY3Rpb24gbWVudUNsaWNrKGlkeCkge1xuICAgIHRoaXMuJGRpc3BhdGNoKCdtZW51LWNsaWNrJywge1xuICAgICAgJ2lkeCc6IGlkeFxuICAgIH0pO1xuICB9LFxuICByZWZyZXNoQ2xpY2s6IGZ1bmN0aW9uIHJlZnJlc2hDbGljaygpIHtcbiAgICB0aGlzLiRkaXNwYXRjaCgncmVmcmVzaC1jbGljaycsIHt9KTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImNhcmRfYm94XCIsXG4gIFwiYXR0clwiOiB7XG4gICAgXCJ0aXRsZU1zZ1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGlzUGxheUNvbnRlbnQuYWJpbGl0eX0sXG4gICAgXCJtZW51TXNnXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kaXNQbGF5Q29udGVudC5idXR0b25MaW5rQXJyYXl9LFxuICAgIFwicmVmcmVzaENsaWNrXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5nZXRub3Rlc31cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwicHJvZ3Jlc3NcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImNpcmN1bGFyXCIsXG4gICAgICAgIFwic2hvd1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXNEYXRhRmV0Y2hpbmd9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb250ZW50Qm94XCJcbiAgICAgIF0sXG4gICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmlld05vdGVzRGF0YX0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInVwQWRkcmVzc0JveFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiaXRlbUNsaWNrZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVwSW1nVXJsfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInVwQWRkcmVzc1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5jcmVhdGVUaW1lfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjcmVhdGVUaW1lXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uZGVzY31cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYWRkcmVzc190aXRsZVwiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnRleHQtY29sb3ItcHJpbWFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC45KVwiXG4gIH0sXG4gIFwiLnRleHQtY29sb3Itc2Vjb25kYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjYpXCJcbiAgfSxcbiAgXCIudGV4dC1jb2xvci10ZXJ0aWFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC4zOClcIlxuICB9LFxuICBcIi5jb250ZW50Qm94XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5hZGRyZXNzX3RpdGxlXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjYyLjVweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNilcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQuMTY2NjdweFwiXG4gIH0sXG4gIFwiLnVwQWRkcmVzc1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjI1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxNi42NjY2N3B4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC45KVwiXG4gIH0sXG4gIFwiLnVwQWRkcmVzc0JveFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMi41cHhcIlxuICB9LFxuICBcIi5vZmZBZGRyZXNzXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzcuNXB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTYuNjY2NjdweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNilcIlxuICB9LFxuICBcIi5vZmZBZGRyZXNzQm94XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcHhcIlxuICB9LFxuICBcIi5jcmVhdGVUaW1lXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTYuNjY2NjdweFwiLFxuICAgIFwidG9wXCI6IFwiMHB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjE2LjY2NjY3cHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjYpXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbWdfdXJsID0gcmVxdWlyZShcIi4uL0NvbW1vbi9qcy9pbWdfdXJsLmpzXCIpO1xuXG52YXIgX3N5c3RlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5mZXRjaFwiKSk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5yb3V0ZXJcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IHtcbiAgICBub3RlczogW10sXG4gICAgdmlld05vdGVzRGF0YTogW10sXG4gICAgdmlld01vcmU6IGZhbHNlLFxuICAgIGlzRGF0YUZldGNoaW5nOiBcImZhbHNlXCIsXG4gICAgZGlzUGxheUNvbnRlbnQ6IHtcbiAgICAgIFwiYWJpbGl0eVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIk5vdGVzXCIsXG4gICAgICAgIFwibG9nb1VybFwiOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTWdBQUFESUNBWUFBQUN0V0s2ZUFBQWJvMGxFUVZSNFh1MmRDNVJjUlpuSGY5WGRNNU1YNmR1OEZsaVE4QXpJSXJBaXU3aXdob2NjWEJXQ2lvcXlDcWk0Z2k2d29waWtPN1RwVHNESEFRSXUrQWFPUEhRUmVlZ0s2eUprMXdWRVpRTXFDaEpDOElIZ0F0TTllYzVNOTlTZXVzbEltTXgwVi9XOXQ3dnV2VlhuekVuTzZhcXZ2dTlmOWI5Vlh6MitFcmprRUhBSVRJbUFjTmc0QkJ3Q1V5UGdDT0o2aDBPZ0JRS09JSzU3T0FRY1FlenRBN1ZQVWVnZllMdm1LTE9sWUxiU1ZFaUdzbjBNRFF1R0NtVnE5bXFmZk0zY0NCSkJHOHN5czJwTjloT0N2UmxqYndUN0lwbURZQWVrVHdKRmh1MEV6TkNwWHNJR0FVTkkxaUw4ZjE4RW5nYWVJc05xMmVBcGI0UW54ZWRacnlQUDVkRkh3QkZFSDZ0dGNzb3kwK29OL2w3QzZ3WHNEK3lESWdYc0dFQnNrS0l2K0tTUnJKYndHNUhoL255RyswV1pEVUdFcHJtc0k0aEI2NDhUQXNFYnBHU2VnTmNoNkRNUTBmMnNrbEVwK0ltUXJBQlc1SE04NEFpajN3eU9JQzJ3a2hjd3ZUNlRvNEY1Q09ZaE9keDZRclJyZTBlWWRnaTk0bmRIa0Fsd3lUS1plb1BqZ2JPQStRZ0dqQkNOWCtaTndIY1FmRDIvaEhzRnlQaVpFSjNHamlCYnNOMjRpRDAzWmZnZ2t2Y0x3UjdSUVc2dlpDbDVCcmh1bXVUYTZVdjkvNmMrcFpvZ2FnbzFOSU4zU09HUEZtOUFrR284L3N3RzZZOGk5d25CMTJiWHVGVmN4WEJhbVpMS0RsRXZzLzFZay9NRWZCVFlQcTJOcjJuM1MxSnlWU2JIbGZreUwybVdTVXkyVkJGa1E1bmRoeHRjQ0h4UUNHWW1waFc3WUlpVXJNL0FsM05qZkc3bU12N1loU3F0cUNJVkJCa3FNbmNNTGdKT2ovMHFWTys3elFpU2I0Z2NsK2JMck9xOU90RnFrR2lDREpZNFRFaUtDT1lEbVdpaFRKMzBNU1MzU3NFbGhRb3JrMnA5SWdteWZpRzdqbVpZanVEVXBEYWNWWFpKYnU3TGNlSE1NczlhcFZjSXlpU0tJUEpzK3VvN2M2R0VSYzdIQ0tGM0dJaVFzRTVJbHVSelhDN0tOQXlLV3AwMU1RU3BGVGtXd1ZmQVB3dmxVcThRa0R3aE0zeWtzSVQ3ZXFWQ21QWEduaUJiTnZpV0N6ZzVUR0NjcklBSVNMN1RMemwveGxKK0YxQlNUNHZIbWlEMUloZExRYm1uQ0xyS1d5SWdKSXZ6VlNweGhTbVdCTmt5YXR3aDRKQzRBcDh5dlI4ZUdPUHRjVHkrRWp1Q0RDM201S2JrQmdHelV0YkpZbTJ1Y3VLemd0Tm5MK0dPT0JrU0c0TElqekZROTdnU09EdE9BRHRkSnlBZ3VTWmY1NEs0bk8rS0JVRnFaZmFXVGU0VWNKRHJjUEZIUU1KaklzdEpYcG5WdGx0alBVRUdpNXdKWE9YMk5XenZTbWI2K2Zmc3h6akRXOG90WmlXN205dHFnZ3lXdUdyTGlkdnVvdUpxNng0Q2trdThLZ3U3VjZGWlRWWVNSSUtvbDdnSmVMZVpPUzUzSEJHUWt1dTlLbWZhZUp2Uk9vTElNdjIxQnJjS3dWdmkyTmhPNTg0UWtKTHZlVG5lTHNxTWRDWWhtbEpXRVdSTFBLbTdCZnhkTk9ZNnFUWWpJT0YrTDhzSk5rVmRzWVlnYXhld1V5UEhEd1VjYkhNak90MGlSMkNseUhLOExiY1hyU0NJMmhrZnp2aHhtK1pFRHIrcklBNElyT3JQY3N5TU1yL3Z0Ykk5SjhqYUJieTZrZVVlSWRpMTEyQzQrdTFCUU1LeldjbXhzNnM4MFV1dGVrb1FkVWQ4cE1uRHdNNjlCTUhWYlNrQ2t1ZjdKYS9yNVluZ25oRkVSUmFSVFg3cTdtOVkyamx0VVV2eWxNaHhSSzk4a3A0UVJNV2pxczNpUVhjYTE1WmVhTDBlSy9OWmp1ckY2bGJYQ1NKUEpWdWZ5ejErckZ1WEhBSzZDRWp1emVkNG95Z3pwbHNrakh4ZEowaXR4TGVCdDRlaHZKT1JMZ1FrM0ZDbzhJL2R0THFyQkttVnVBYjRwMjRhNk9wS0hBS2Y5eXA4b2x0V2RZMGd0U0lYSWJpMFc0YTVlcEtMZ0lCejh4V3U3b2FGWFNGSWJURnZSUEtEYmhqazZrZ0JBaElwNGRoQzFkOWNqalJGVHBEMVpYWWJiZklZNEVWcWlST2VMZ1FrTC9ibGVFM1V3ZW9pSllpL1luVUFEd0d2VFZmck9XdTdoTUJQODQ5enBMaUZabFQxUlVxUXdTSlhDTUY1VVNudjVEb0VrSHpPcS9MSnFKQ0lqQ0JEUmQ0eUp2aHVWSW83dVE2QmNRU0U0TVQ4RXY0akNrUWlJY2lHaTNuVjhCaVB1ZEE4VVRTWmt6a0pBclcrTEFkRjRZK0VUaEJaSmxkcjhMQVF2TVkxcFVPZ2l3aEU0bytFVHBCNmtaSVVMT2tpTUs0cWg0Q1BnSUJTdmtJMVREaENKWWgvZkwzQnFoUThuYXpkQmhsdkRuMEhua3p1Z1Bsa2R6MFVNUzM4MVc2NXFVYnpqNC9RWExPQ2taWFhNMVpibzYxZm9qSktodnR6N0J2bVJhdFFDVEpZNUE0aE9DbFJvSGRvakNMQ3dKSG5NWEJNOTJOcmo2eThqazEzWFlBaVRnclRiVjZGdDRWbGQyZ0VHU3d5VDRoa3ZBa1JGRncxYXN3NDdUWi94T2hWVXFQSWhwdFA4VWVXMUNYSmNWNlZlOE93T3hTQ3FGQTk5U2EvZHBlZjhLZFFzODVaaVNKSnI1TWFRZFpmZTB3YVNiSTZuMlZ1R0M5ZGhVS1Flb25GRWo3ZDZ3NWhRLzB6ejd5UDNGNzJYSFZSSThpNmF3NnpBWnB1NjdESXE3QXNhS1dCQ2VJYzg1ZWJvTy9BK2Y3VXlyYTA2YjVQTTN4ZjkzMmhYdUtnWXY4T1pKa2IxR0VQVEJEbm1ML2NEV1o5WkdWUC9ZNnBPcVR5UjlaZXRsY3YrMnV2NnI3VnEvQ09JSlVISW9qL0RqbjhieEFGa2xKVytSNnpGdzVhYTQ2YVpxWFNZWWZEdllvZk9hZWpGSXdnUmI3cll1aHV4bDM1SGNyL3NEV2xjWnExcFMwQ0xmdDJUQkFWOEsyWjVaY0l0WUhwVXY5aFp6RDlsR3V0QlNLMUJKRklBWFB6Vlo3c3BIRTY3dHlEUlc0UWd2ZDJVbWtTeXppQzJOdXFBcTdMVi95SG1JeFRSd1JScDNWSHhuZ2F5QmpYbU5BQ2JvcGxkY00yK3BxOGF1WXkvbWlxWlVjRXFaWDRWK0FjMDhxU25OODU2WGEzcnBRc0wxUTUzMVJMWTRJTUxXQ0hzUnpQQXYybWxTVTkvNnh6SGlHN2kzMVB0NC9Wbm1IdFpiM2YyZTlsKzB2SlJuTHNWaWhqZEVETm1DQzFJc3NRTE9pbHNiMm9XNDBRN1RwL2JzK2pHRGd1MU5QV29aZzY4cU5MR1gzeWJsK1dISzZuZGJrWENVc0tGUzQyQWRXSUlMTE10RnFENTRRZ2IxSkpIUE9PSDFQdk8vUU1LemYvZ21LcXptbU4vdnAyR3IrK25kSEg3d2dxTGk3bFg4cXZZM2R4T1J0MUZUWWlTSDBScDhtTS83aG1ZcE1hS2FhOTZYTFVxbFJha3RwQTNIVDNCVFNlamp6TVZNOGhGWEJhdnNJM2RSVXhJa2l0eUw4aitBZGQ0WEhMcDQ2bnE4MitLQzQxeFFFTGRWNUw3WmNrT2FuSFFndFYzcXByb3paQkJzdDRvc0VMQ0xLNnd1T1VMKzNrR0c4cmRkbHE0MjBkYlJuRW83a2xUWmxqUjExblhac2c5U0lmazRJcjQ0R0NtWlpxeE5qdVg1NU83Y2d4RVMxRkVFV1VwQ2FUMkw3YUJLa1ZlUWpCRVVrRWJmb3AxOUYvMlB1VGFGcEhOaWtIWHAzK1RlcVZYU2w1b0ZEVmUycGNpeUMxSW5zaFdOMFIycFlYVXF0VmF2Unc2WlVJSlAzc1ZuK1dQWFR1aW1nUlpMQklXUWl6OWVPNGRMaUJJOC8zVjYxY2VpVUNTYjlEb2hzaVNJc2d0UkpQSmZXK3VSbzlndDRmVnp2VnRvWGFVVFpsdkQwRDhWN2RaMC93MHU4cXI4Sis3UUJxU3hEL1dIdk9mNzRnY1VtdFhLbGJnS1pKRVdMa3dTdjhqVGJiaURIUkZtV2oydXhVK3pwaW10bityb3F4dGZHMjVPNEhDY24rN1k3QnR5Vkl2Y1E1RXY5d1l1SlNKODc1OElQTC9mdmRjWE5nTjIrQVhtRzhHREcwckJBN1c3VTdxdVJzcjhwWFd1VnZTNUJha1g5RGNLcDJwVEhKMk1uU2JoS1dQMDAvQ2ttd3VVV1h2TW1ydEw3VDFKNGdKVjRFdG85SnY5ZFcwL1NDVTVLbUd6UFBXa0Z1emh1MHNFcHkyQ0FKenhZcS9HWEhJMGlTL1EvVCtGVkptbXFZTG0yclBSSGJmUzB0dGsrU3FaMGYwbklFU2FyL1lkcEJralI2alBjUmsxRkUrVjJiN2pLK2E5UnBuKzF1dVRaK1NFdUNKTlgvVUFHbHB4MmpmeTBnaWN1ZEpsTk10U0NoUnRDRXBwWitTR3VDSk5UL01ObjdTUEp0dk5rTGE5cEx2eW9RdGxyV1RscHE1NGRNU1pDaytoK200VUhWTXdMREQxNlJ0SDdoMjZPV2ZkVVREVHBKWGFyYWNOTjhuYXl4eTlQS0Q1bVNJTFVTWndOZmlwMjFiUlEyWGVaTWtuTStFUnBUWHl5cHpycUVEeFFxZkgyeXJqTWxRZW9sTHBlWVI0R3dtVkNta1VlUzZKeFBiQjhUWnoycG82bUF5L0lWUG01RWtDVGVIalE5bUpoRTUzeGlKekJ4MXBONmdMSFZMY05XVXl3VnFuRmZtMGNFVTkxTW9xOG4yVG1maUp1SnM1N1FJTmkvOFNyTTFSNUJaSmxNdmNGSWtxN1htaDVNVE9wMFlySk9ZT0tzSjNMYUtXbm1jL1NMTW1NVDhabDBCQmtxTW5kTThManBGOXJtL0NhZFFObVJaT2M4aUxPZTFOdUdJc3QrK1RLcjlBaXltTGVPU2U2MHVjT2I2cWJlN3RDTlZwTElyMlFid0V5YzlTUWVZQlNTTitlcmZGK0xJSU5GUGk0RW56ZnRoTGJtTjNGRWxRMXBjTTZET092cUVwWENLRWxKU003UFYxbXVSWkJheWQvL1VQc2dpVWd6M25NN2ZRZWNyR1ZMbXB6eklNNTZBdmRFcnZZcW5LdEZrTUVTS3dUb25ZZlc2bmE5eTJTNkdaYkU2WU11K2laK1d1S0NPa2p1OGFxOFVZc2d0UkpQQVB2ckFtdHpQcE85RDdtcDdrZEJqOXR0d2JEd04vbVlKRzFQUkVwK1dhaHlzQlpCQmt2OFFjQnVZUUhmU3prbUJ4UFQ2SnhQYkJzVFp6MWhCeGpYZUJXMmVRcDQwbVhld1JKMUFiTjcyYkhEcU52MDFhZUVib0laUVdteW9KR3dEOG9MWG9XZHRFYVFXb2xtRXA1WE16bVkySHp1VWRaZGZhaFJaMHBxWnBPZDlRVHRGMjN5S2t4dlN4QjVBZFByczlnUTE4WWZqd2VsOWp5bXYrMDY3YjBQdFhUWlhKUDg4UDg2N1pvN1lMNzJteWpxS29CNlkwU2x4cHIvMGhGdmJaNzg0K1RFTGY3ZzhPZTB6UlJyN1FKMmF1YjRrN1ZXVEtLWUlzUEFNUmVUbXpOUHUySGpaRjljZEIxL2xHZjBrZXRqR1hBdVA0SW5Qa085SlVIaUZvZFhYWjN0UC9KODdaRWlMcDB0N25xcUVWazl5cU9pb3NRbDlZK3grNHlsL0tFbFFkYVZPTGdCUDdmZEtEVnF6RGp0TnBRajdwS2RDS2dSUmUwcnhlV3Fia1p5d095cXY4VXg5UlJycU1TUlkvQ0FuWkJ2MWtxUlE0WHRVU2QwWGJJZmdSZ3RCeC91VlhpNEpVSHFpemhDWm5qSVp0aW5uM0p0cXQ0UXRMa3RkSFJUSTRrNnUyWDdkRXZBRWZrS1AyMUpFTnVETlpnR1hkQnBRSmNuZWdUaWNNQXhrK1hBMmVWWFh2UFlaaFZyd3lMMkdNbncyK2doNjZ3R2s1M3h6bXB3cGFKQ3dQWlQwbHBPZXUxVEZPampwYWhBQ2lMWDlGWmdrTHBjMmZBUnNIM25QWjhsTDhvTXRaeGlTUkQxMHJaWEQ4T0h5MXlpeVdsVGMrbXVSTlFJMkI2aE1WOGhJMEMySklqNnNWWmtFNEtCcUFFemxXOXlrRzR5MmVNdlFhbUdVaXRoNmkrN3l5R21hcVFxdnpyaDNIenU1YjJNb0pqWk9zMlNzS0ZRWWViRXhwMzBzR0t0NkwrSHZvTnRQY0VrS3NuV3VxdWhmZVRIVjB5NmlxS09wdlFkZGdicVdMenBDMHkyNFJPbVB1cll5UGdyV3R0MG1tbWV2NHFvWWh5YlltWXJRWkE4NzFYWlJZOGdKZFN6cjNQQ0JEd01XZmtscnhqOTJvcFVYNzhOTjgvWE92YWdpS0p1SHFaOVJGR1lxVWp1T3Ura2o1OTMwNzJ0cVJyTTRndHBrNzVaT1BseDl5Sy9FSUsvYXRzRHU1ekJoQ0Nxb2RYcFhKTjNMZndOeUxOV3BKWWtDclAxMTg0ejNxOHdPVFZ0OFUzRWxWNkZ2OVlkUVg0QTIxNC83RElmdHFuT2hDQ2QzdTNZL0RUYkd1T3BRNit4Q2FQK1RyL3VKaDhXYXdraStiNVg1YzFhQkJrczhnVWh0cjNBSGtZakJKR2hTNUNneTRrbWw0YUMyR05UV2VWenJQOTY1K2ZhZEMrbjJVb1FLVmxlcUc0YmkzclNLVmE5eUhsU1lGM01mMTJDaEJGeHcrVFNrRTBkdlZOZHdqZ3ZOZXVjUjlwT1QyMGxpSUJ6OHhXdTFocEI2b3Q1azVUYkJ0SHFGUHl3eXVrUUpLeXdQU2J6NnJEczY2V2MrdUsyNzdtMlZVL241UzViQ1lMZ0JHOEovNmxIa0RMN3lpWXFlTFZWU1ljZ1FhY0s0d2JyTkxaVjRBUlFKaXpNZEtaWnRoSmtZSXc1MDVmeWpCWkJiQTFlclVPUXNCb2dUWWNpVTA4UXliQlhaZHBrMzVoV3p4OVlGeHRMaHlCaFBSWG1SaER6SVNtdUk0aUV4d3FWeWJjMXBpVElZSW52Q2JaZDlqS0hMYndTT2dRSjYrSDdOSjM3Q3V1TWxFNlF2ckJHK1BCNkZlcjAxZTFlbFZPTVJwQjZrY3VrNElKUUZRa29USWNncW9vd1F0R2s3Vmg5cC90R1d6ZXBUZ3hrS3drQ24vVXFYR1JFa0ZxUkR5SDRjc0ErSFdweFhZSUViWVEwK1IvakRSUjA3MGozS2tMUXRnbTFRMjBSSmlWbkZhcGNhMFNRdFVVT2JBcCtGWVZDbmNyVUpVaVFSMTdVcnZDc2MxYWl6bWFsTFFVWlJWU01BSjBBR2pZU1pMSmdEZU50MzNMeDI3WlR2Ym9FVWNaMWVzVXp6ZmZkbGYrbVR0dWFCdTgyOGRjc0pNaWZ2QXAvTWRYSHNEVkJTbndMZUtjdFgxSVRnaWlkVmJnWmRiNUlwOEhWeURIdFRaZW5QaGlFS1VrVVpzbzUxMDNXRVVSeXMxZmxQWjBScE1oSEVOdHV2K3VDRVhZK1U0S28rdFZwWHZVZ1o2dllUR3Bxb0VhT05FNnJKbXNqOVVIWmZPVDkraW1iVUdFMk1POWlyV25WMWtLc0l3aDgyS3RNN1d1M0hFRnM4ME02SWNoNDR5aWlLSkxJMmhyL09IZW1NSWZNTG9laUhISkhqTWw1TUI1S1ZHR21wcXcrWnQ0Y1RHTDNUcFJzRzBHRVpQOThkZXBUSTIwUDROamtod1FoU05pam1aUFhHUUtXRWFTbC82RXNiRThRaS93UVI1RE9PcVZOcFd3aWlKVGNXS2h5ZWl0ODJoUEVJai9FRWNTbXJ0NlpMallSQlBpUVYrR3JnUWhpa3gvaUNOSlpwN1NwbEUwRUVWbjJ5NWRaRllnZ3FuQ3Q1RHN4Ky9ZYWFFZVFYcmRBOFBvdElzaHFyOEkrN1N4cU84VlNBZ2FMbElYZzRuYkNvdjdkRVNScWhLT1hieEZCRm5rVmxyV3pXSXNndFNMN0lGb1BSZTBxQ3VOM1I1QXdVT3l0REZzSU1sa2Mzc21RMFNLSVA4MHE4aENDSTNvSnJ5TklMOUVQcDI0YkNDTGgva0tGbzNRczBpWkl2Y1EvUzFpdUl6U3FQSTRnVVNIYlBiazJFQVRKT1Y2VmEzU3MxaWJJMmpJN054czhpeUNySXppS1BJNGdVYURhWFprOUo0aWtLWFBzV0NoVDA3RmNteUJicGxsM0lUaFJSM0FVZVJ4Qm9rQzF1eko3VFJBSjN5MVVPRW5YYWlPQzFFdWNMdUVidXNMRHp1Y0lFamFpM1pmWGE0SXd4cnU5cGY0cGRhMWtSQkI1SVRQcjAvazk0R2xKNzBHbXNFaGtiUlR5Q0RBTitxekV1RW94d0t5V3o3S3JLTE5KRjBZamd2alRyQkpMZ1lXNkZYUTdueU9JT2VKcElZaUVhcUZDeVFRaFk0SU1sZG14MmVDM1FqRGRwS0p1NVhVRU1VYzZEUVNSa28zZUtMdUt6MUEzUWNpWUlFcjRZSW1yQkh6VXBLSnU1WFVFTVVjNkpRU1pORGgxTzdRNklzajZoZXc2bXZWZndzMjFxNkRidnp1Q21DT2VBb0kwY2xuMm1GWG1PVk4wT2lMSWxsSGtlZ0h2TTYwdzZ2eU9JT1lJSjU0Z2ttdTlLbWVaSTZOeFlXb3FvZlVpKzBsNEF0SCswbFVuaW5WYXhoSEVITGxFRTBRaVJZNzkyeDFybndxMWprY1FmMFdyeUcwSTVwczNTWFFsMU90UUdXL1B3QlVFaVJFVnVQSXVDMGc0UWI3dFZUbTFVMGlERWFURWE0R2ZkVnA1Rk9YQ2F1d3czc3VJd3I0b1pPcUVETldwMThaOWtHeURnN2E3cFBNQWlJRUlzbVVVdVJYQjIzUUE3RWFlTUI2K0Nlc1JubTdZRzBZZE9rR25kZXF4N3FNaStaWlg1ZDA2dWtjeXhWSkNONVRaZmFUQktnUURRUlFKcTJ3WWNYV0hIMXp1eDRWS1MxS2hmRlN3N2lBcHJHY25ndWl3ZFZtMTc5RTN4bDZ6bHZGOEVKbUJSNUF0bzhnaUJOVWdpb1JaVnVldHZLbnE2K1Q1NkRCMTc1V3NvTk1zQzZkWEYza1ZQaHNVejFBSUlzdms2azNVZ3p0N0IxVW9qUEs2a2NZbnEwdEZZUngrMExyM1M4T0FwYVVNTllxb0Q0dVlsamV1SzJoa2VPTUsyeGRZbmM4eVY1UnB0TS9hT2tjb0JOa3lpaHlMNElkQkZRcXJmQ2RQT1Z2WTBHSEJvU1ZIZlZobW5ybkNpQ1RONXg1bDNkV0hhc252VmlZcE9hWlFaVVVZOVlWR0VLWE1ZSW5iQlp3Y2htSmh5RkR4WTJlY2RydFdnL2Y4R0hZWUJvY2dRNUZFWWFhelZHNmxyeVlKdEt3N0VjSlFDV0tidzY2TVZWSGIrNDg4MzQvYVBySFJsYitoNHZVTzMxZjJnMXk3OURJQ0NpK0ZXM2FYUTE0Qmk4S3NzV1lGSXc5ZTRjZnJ0U21GNVpodmJWT29CRkdDNnlVV1MvaTBUY0NONjZMbTJTb0FzMG9xTUxNS1l1MVNtem40TkE4MXFzUUNNOGxDcjhvbFliWnA2QVNSWjlOWDM1bWZJTEJyWWhvbWFrNldkUWhJZU5UTGNuZ1lqbm1rSTRnU3ZuRVJlMjRTL0VJSXRyTU9TYWRRNGhDUWtyWFRKQWRQWDhvellSc1grZ2d5cnVCZ2tmbENjRnZZQ2p0NURvR0pDR1FrSjgrdWNtY1V5RVJHRUtWc3JjZ1hFWHc0Q3NXZFRJZkFGZ1N1OWlxY0d4VWFrUkpFZm95Qm1zZkRBZzZLeWdBbk43MElTUGlWbCtXUXNQMk95SDJRclN1b2w5bDNyTW1qQW1ha3R5bWQ1V0VqSUdHRGtMekdxL0pVMkxLN1NoQi9xcldJZDVIaG0xRWE0bVNuRElFeDN1a3Q1WmFvclk1MGlyVzE4b01sckx5aUd6WEFUbjRFQ0VpKzVsWDVZQVNTdHhIWk5ZTDQva2llZTRYZzlkMHd6TldSVEFTazVMKzlQM0c4K0RLajNiQ3dhd1JSeHNneXMrcE43Z1ZlMXczalhCMkpRK0RoL0RxT0ZwZXpzVnVXZFpVZ1Bra3VJbC9yNTM2M3N0V3RKazVHUFZMeWN5L0gwYUxNVURjdDZqcEJsSEZyRjdCVE04ZVBiYmsvMGszQVhWMGRJQ0I1a2daLzQxM0tZQWVsQXhYcENVR1V4dXJrNzNDVGh3VHNGc2dDVnpqUkNFako3L3B5SE5GSjBMY3dnT2taUVpUeWZtd3R3ZjhBTzRkaGpKT1JNQVFrL3lkekhGRW8wN083Q0QwbGlEL2RLbkZRRSs0QmRrbFk4enB6Z2lBZ2VUNlRZOTdzTW84SEVSTzBiTThKTWo3ZEdtbHludzF2c1FjRjFKVVBBUUhKRS8yUzQyWXM1UThoU0Fza3dncUMrTk90TXR2TEJ1cUp0NTYrcEJzSVRWYzRPQUtTbitWekhOZnQxYXFwRkxlR0lFcEJXV1phdmNFZENFNElqclNURURzRUpQZms2N3hGWE1Xd0xicGJSUkNmSktlU3JSL0FEUkFzSXA0dEFEczk5QkNRa2h1OUhPOFRaY2IwU25RbmwzVUU4VWtDb2w3aVV1Q1QzWUhCMWRKVEJDU1hlRlU3bi9XemtpRGpqVlV2Y3E2RXEyeDdZcUdublNsSmxVc2tnbk84Q2wrMDFTeXJDZUk3NzBWT2xJSWJnZTF0QmRIcDFSRUNMeUY0cDdmRW5tQ0RrMWxoUFVHVTB1dkw3RGJhOE44aWNTdGNIZlZGdXdwSnlRUDlPVTZkV2VaWnV6VGJWcHRZRUdUTENwZUsvNnRpSGwxb082aE92eWtRMkR5bCtseitjUmFLVzJqR0FhZllFR1FyditURU1maW1FSmhIV1k1RGl5Ulh4NWVFNUwzNUtuZkh5Y1RZRVVTQnUyRVJlNHhrdUFNNExFNWdwMVpYeVUvNmNwd1NoeW5WeERhS0pVRzJHazFLVXJBa3RSMHZEb1pMaWw2VnBYRlFOYlpPZWl0d0I4dk1vY0Z5SVRncHJvMlFSTDJsNU02QkhPZk9LUFA3T05zWDZ4RmthK0JyUlU1QThDVmdjM1JxbDNxRndHb2tIL0txL3RYcTJLZkVFRVMxaEFvTU1lVHhpVEhKUWlHWUh2dldpWkVCS2s1VkJpNlovVHlmNlZaQWhXN0FreWlDakFQbU8vR0NLMjE3dzcwYkRkcVRPaVRmNmM5eFh0eW5VNG4wUVZwMWlQb2kvblpNc0VEQVc5MXhsWkNwby9ZMDRBNjFTRktvc0RKazZkYUlTK1FJTWhIZHRRdDRkU1BIUlFMZUErU3NRVCtPaWtoR0pkeVV5VkhObDFrVlJ4Tk1kRTRGUWY0ODlicVlWdzAzdVJEQkIxeXNZSk51QWxLeUh2aHFmNDdQeG5FL3c4emFsM09uaWlEalpxdmJpMk1Oemhmd1VRU0ZUc0ZMU2JtWEpIeEJqSEpGTDhMdTlCcmpWQkprSEhUL0JtT1RreVNjTGlRbkl1anJkWU5ZVWYvbWFkUmRRbkJqUHN1ZG9zd21LL1RxZ1JLcEpzaldlTmMrUllFKzNyV0ZMSzlQblZNdjFTeUsreFVwR09WYmFSd3RVcmVLMWVrSFI3MnhPSnpodlVoT1IzQmdwM0xpVUU3Q1kwSnlZNy9raGhsTCtWMGNkTzZtam00RWFZTzJlZ0JJTmprZS9MOWpZbjl4Uy9JaStDR1dWQ3l5ZTZKK2dLYWJuVG1LdWh4QkRGQ1ZaVEwxRVE0bHU1a3dVbktVN1R2MlVySlJ3SThRL0pBbTkrU1hzVkw0MS81ZDBrSEFFVVFIcFJaNWFvczVUbzV4dElEOWdYMFE3QTNzR0ZCc3A4VmZBSjVDc2xyQUV4SitsSlF6VVowQ0VyU2NJMGhRQkNjcDc3K0RNc0wrNU5nTHlUNCtjU1J6RU95QVpEWXdXd3EyMDkyTDhkL2pneUVrYXhIK3YycWE5TFJQaGd5cnBXUzFsK1ZKVVdaZEJPYWtXcVFqU0krYlg2MmU5USt3WFhQVUo0MGlEMEl5bE8xamFGZ3dWQ2hUNjdHS3FhN2VFU1RWemUrTWI0ZUFJMGc3aE56dnFVYkFFU1RWemUrTWI0ZUFJMGc3aE56dnFVYmcvd0ZnQlFWZkpZZmtpZ0FBQUFCSlJVNUVya0pnZ2c9PVwiXG4gICAgICB9LFxuICAgICAgXCJpdGVtc1wiOiBbe1xuICAgICAgICBcImNhckltYWdlVXJsXCI6IHtcbiAgICAgICAgICBcInNtYWxsXCI6IHtcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9jYXJfY29tZm9ydF9zbWFsbEAxeC5wbmdcIixcbiAgICAgICAgICAgIFwid2lkdGhQaXhlbHNcIjogNzIsXG4gICAgICAgICAgICBcImhlaWdodFBpeGVsc1wiOiA3MlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtZWRpdW1cIjoge1xuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2V4YW1wbGUuY29tL2Nhcl9jb21mb3J0X3NtYWxsQDJ4LnBuZ1wiLFxuICAgICAgICAgICAgXCJ3aWR0aFBpeGVsc1wiOiAxNzIsXG4gICAgICAgICAgICBcImhlaWdodFBpeGVsc1wiOiAxNzJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGFyZ2VcIjoge1xuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2V4YW1wbGUuY29tL2Nhcl9jb21mb3J0X3NtYWxsQDN4LnBuZ1wiLFxuICAgICAgICAgICAgXCJ3aWR0aFBpeGVsc1wiOiAyODAsXG4gICAgICAgICAgICBcImhlaWdodFBpeGVsc1wiOiAyODBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicHJvZHVjdFR5cGVcIjogXCJTcGVjaWFsIGNhclwiLFxuICAgICAgICBcInJpZGVUeXBlRGlzcGxheU5hbWVDblwiOiBcIkNvbWZvcnRhYmxlXCIsXG4gICAgICAgIFwiY3VycmVuY3lDb2RlXCI6IFwiQ05ZXCIsXG4gICAgICAgIFwiZXN0aW1hdGVQcmljZVwiOiAxMi4wMSxcbiAgICAgICAgXCJ0aW1lXCI6IDE1LFxuICAgICAgICBcImRpc3RhbmNlXCI6IDguMDIsXG4gICAgICAgIFwic3JjQWRkckRpc3BsYXlOYW1lXCI6IFwiTmFuamluZyBTb3V0aCBSYWlsd2F5IFN0YXRpb25cIixcbiAgICAgICAgXCJkc3RBZGRyRGlzcGxheU5hbWVcIjogXCJOZXcgaW50ZXJmYWNlIHBlZGVzdHJpYW4gc3RyZWV0XCIsXG4gICAgICAgIFwiYnV0dG9uTGlua0FycmF5XCI6IFt7XG4gICAgICAgICAgXCJidXR0b25JbWFnZVVSTFwiOiBcIlwiLFxuICAgICAgICAgIFwiYnV0dG9uVGV4dFwiOiBcIkNhbGxpbmcgYSBjYXJcIixcbiAgICAgICAgICBcIndlYlVSTFwiOiBcIlwiLFxuICAgICAgICAgIFwiZGVlcExpbmtcIjoge1xuICAgICAgICAgICAgXCJ1cmxcIjogXCJPbmVUcmF2ZWw6Ly9mbGFzaC9hY3Rpb24/cGFyYW0xPXh4eCZwYXJhbTI9eXl5XCIsXG4gICAgICAgICAgICBcImFwcE5hbWVcIjogXCJEaURpXCIsXG4gICAgICAgICAgICBcImFwcFBhY2thZ2VcIjogXCJjb20uZGlkaS5jaHV4aW5nXCIsXG4gICAgICAgICAgICBcIm1pblZlcnNpb25cIjogXCJcIixcbiAgICAgICAgICAgIFwibWluQW5kcm9pZEFQSUxldmVsXCI6IFwiMjNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJxdWlja0FwcFwiOiB7XG4gICAgICAgICAgICBcInVybFwiOiBcImhhcDovL2FwcC9jb20uZXhhbXBsZS9ob21lP2Jpej1mbGFzaCZhY3Rpb249Y2FsbCZzbGF0PTMyLjAzNzY2JnNsbmc9MTE4Ljc4NzA2JnRsbmc9MTE4Ljc5MDkmdGxhdD0zMi4wMjQxMTdcIixcbiAgICAgICAgICAgIFwibWluUGxhdGZvcm1WZXJzaW9uXCI6IFwiXCIsXG4gICAgICAgICAgICBcIm1pblZlcnNpb25cIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIFwiZHluYW1pY1wiOiAxLjVcbiAgICAgIH1dLFxuICAgICAgXCJidXR0b25MaW5rQXJyYXlcIjogW3tcbiAgICAgICAgXCJidXR0b25UZXh0XCI6IFwiVmlldyBtb3JlXCJcbiAgICAgIH1dXG4gICAgfSxcbiAgICB1cEltZ1VybDogX2ltZ191cmwuVVJMLnVwVXJsLFxuICAgIG9mZkltZ1VybDogX2ltZ191cmwuVVJMLm9mZlVybFxuICB9LFxuICBnZXRub3RlczogZnVuY3Rpb24gZ2V0bm90ZXMoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHRoaXMuaXNEYXRhRmV0Y2hpbmcgPSBcInRydWVcIjtcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmZldGNoKHtcbiAgICAgIHVybDogJ2h0dHBzOi8vaHVhd2Vpbm90ZS1jZTkxYS5maXJlYmFzZWlvLmNvbS9ub3Rlcy5qc29uJyxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBhdXRoOiBcIkFJemFTeUJmeE5PVVdaTTJsUDhOZTRGaERkZURfektQS3VGWEw0OFwiXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICB2YXIgbm90ZXMgPSBbXTtcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgIGZvciAodmFyIGsgaW4gZGF0YSkge1xuICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICBub3Rlcy5wdXNoKGRhdGFba10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoYXQubm90ZXMgPSBub3Rlcy5yZXZlcnNlKCk7XG4gICAgICAgIHRoYXQudmlld05vdGVzRGF0YSA9IHRoYXQudmlld01vcmUgPyB0aGF0Lm5vdGVzIDogdGhhdC5ub3Rlcy5zbGljZSgwLCAzKTtcbiAgICAgICAgdGhhdC5pc0RhdGFGZXRjaGluZyA9IFwiZmFsc2VcIjtcbiAgICAgICAgY29uc29sZS5sb2cobm90ZXMpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGZhaWwsIGNvZGUgPSBcIiArIGNvZGUpO1xuICAgICAgICB0aGF0LmlzRGF0YUZldGNoaW5nID0gXCJmYWxzZVwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLiRvbignbWVudS1jbGljaycsIHRoaXMubWVudUNsaWNrKTtcbiAgICB0aGlzLiRvbigncmVmcmVzaC1jbGljaycsIHRoaXMuZ2V0bm90ZXMpO1xuICAgIHRoaXMuZ2V0bm90ZXMoKTtcbiAgfSxcbiAgaXRlbUNsaWNrZWQ6IGZ1bmN0aW9uIGl0ZW1DbGlja2VkKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaXRlbUNsaWNrZWRcIik7XG4gIH0sXG4gIG1lbnVDbGljazogZnVuY3Rpb24gbWVudUNsaWNrKGV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5kZXRhaWwuaWR4KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXMudmlld01vcmUgPSAhdGhpcy52aWV3TW9yZTtcbiAgICAgICAgdGhpcy5kaXNQbGF5Q29udGVudC5idXR0b25MaW5rQXJyYXlbMF0uYnV0dG9uVGV4dCA9IHRoaXMudmlld01vcmUgPyBcIlZpZXcgbGVzc1wiIDogXCJWaWV3IG1vcmVcIjtcbiAgICAgICAgdGhpcy52aWV3Tm90ZXNEYXRhID0gdGhpcy52aWV3TW9yZSA/IHRoaXMubm90ZXMgOiB0aGlzLm5vdGVzLnNsaWNlKDAsIDMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxOlxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVVJMID0gdm9pZCAwO1xudmFyIFVSTCA9IHtcbiAgXCJ1cFVybFwiOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFBWE5TUjBJQXJzNGM2UUFBQXBsSlJFRlVlQUh0bVQxTEJERVFoaWNydW9WZ0l3ZWlsdG9vMkFsV2lxMkNZR09oL2dwYndVS3c5VitjeFRXQ29PMkJsV0NuYUtPbFh5QTJnc1VxWHN5N3k4S2R5QkV6czd2aXpjRGQ3bkZKM3N5VHlXNHlJVkpUQWtwQUNTZ0JKYUFFbElBU1VBSktRQWtvQVNXZ0JIcU5nQ25ONGF2R0FMMThMRktydGVJMHA0anNLSkZ4SDVoOWNQZnVROWNVUlVjMDNOK2s2YlgzOUsrQ3Y0b0gwR3lNa0VsMm5COGJaTzJRbHovR3ZMcHlkYkx4TGkydVBYblZDU3hVSElDYms1anVYN2JKMHBZYjRjR3cvcGszTXJSUFk4TjdOTG1VaExYUnZWWXhBTEpSUDNRalB0ZGQzdk5mWTg1Y05Ld1dFUTN5QUU0UFpxajFlZXljSC9kMHo2K1lNWGRrekJJdGJGNzZWZkFySlFzZ0cvbHpjZWR6WHdEQnhyT1NrUkRsYmJPdm1QTW1RZGpMam54N3g5QTJOS0FsWkhJQTBnZWUwSnp2NWh5ZUs5QVNNcGtwZ05DbjVEYjhhZjliYjl6YmdlSUppYWtnRXdIcGV6NzBWZmRiNTFIZWFXVnJpNURLSFhYNEVZQVYzblB5N09hKzN5S25RNTd4QTR1bFdsempyaGo1RVlEbGJkbk9neHMwb2MwMFBvQnNiYy9zUm1CMUFXMCtnSFJqRStnQXY1cmJWUEZNQUFCMmRWVVpYMXNBUUw2bHJRSUNYMXNBUUJXTzU1clc1bmVoVndFQVNHWlVabzljWlFFQWFTYUgyNC9BK254dEFRQXVqVldkc2JYNUFKRERxOG9FdFBrQWtNRE1jbmpsWW9BbXRKbkdCNUJsYit2TWZvUlVyM1AzQVJEbEEwQXJ5TjRTdHFobG1kTktOZmw2TWdDUXVrYjJ0aXlEbGxDNlhBWUFIRWZxR3RuYm9nMGEwQkl5T1FESTJ5TjFqY1JsVVpZbFJWY2x6d2prQU1CcGhHWFV0MXdJaER3dExoVDYrUmpKQWtDcjgrc1hhZXBhY2pwa0J5T3owbWNDNkM0L0pZWldmcktlUGhwckI5S3poNlB0RUhEL1I0L0h2M2RUZnlzQkphQUVsSUFTVUFKS1FBa29BU1dnQkpTQUVsQUMvNS9BRnlYM3lOcHU1MnhqQUFBQUFFbEZUa1N1UW1DQ1wiLFxuICBcIm9mZlVybFwiOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFBWE5TUjBJQXJzNGM2UUFBQXNwSlJFRlVlQUh0bVRGTFhFRVF4MmZ1UkU4RVFVSWdTSWlOVlFvNzRjcElxaWdFVW1pVDc1RGlRSnVBaGNGRzRZcDhoMnVTUWhCTW1vaXRrQzRCcXpTS3FCQkNJQ0RuQ1hHZDJYMFB6a2JYblhudkNUY0RkKzhkdDd2L21kK2JmVzkzSG9DWkVUQUNSc0FJR0FFallBU01nQkV3QWtiQUNCZ0JJekJvQkxDc2dOMm54V0U0K2pzSDd2OXIwbndPZ0pNQWpqNXNlRUxuOUlFRHdQbzJQSnZZdzZYUGwvNnZncjhLQitBMjVwOEFYcXhTSEcvQnVmR29lQkQvVWJzT3VNWWFybnc1aStxVDJLZ3dBTzdqcXhIb1hiNm5LOXVpd01lUy9FTThwK3hvdzhqd09yNzcya3NhNDQ1T2hRRHdWeDI2VzZUZHZFTS85dTk5Z05FM1JXU0RPZ0MzK1hJRzNOVU9SZlkwTnJySWRzY3dWSi9IMXJlZmtlMmptcWtDeUs3OGQxTFdEajRQNXBneVlWWXpFMnI1eU5Lam4vTWg3WXNLbmwya3NidGJRVXZxY2VpdkJpRGM4TlRtL0czUk5UT3QyOXBFLzZjeUJiSkgzYS9rdTMyMHUxbERmanE0eHJUR1ZOREpBSDdPcHo3cTdoczh0MmV0c0xaSTZYMmpqemdEL0FydjhNOXZjaXB1a1hORFh2Q0RGMHRUang1TFY0enlEUERMMjVLRFoyNE1uTFdGSmdjUTF2WkNOeEs3SzJqTEFmaU5UV0lBOG02MHFaS1pBZ0RlMVZWbGNtMEZBUG1XdGdvSWNtMEZBRlVFbm1rNmNGSjFCUUJjektqSUVFK2x5Z29BZkNWSDZrZGlmN20yQWdBcVkxVm5ZbTA1QUs3aFZXVUsybklBVk1DRVVNTXJGd05yc3JiUXhBQ3l0WGhINkVkSzk0NTBIOENpWWdEZWM2cmVVaFpRQWJNa0M5dmhOUTAxRlFCaFgwN1YyOUlNMnhxMUFIWlhCWUNQbTByWGRLVHFiZUcyejJWeUxSVnhQYURma1lFdWlqSUluNVpZVzZCVHF0NnFXeWlMSzc4cDBwc0NXYnk0dlB1RFM5ZjBVM002OEl1UldlMTNBdXl5T2dBZTFHZENvL0VDc1BaQjlIVGd1ejJQUVdOcDNmVFl2MzVUdlFmMEQ1eWZaeFhqd1hzNW1nUElqdy8xOVhqdW54Mk5nQkV3QWtiQUNCZ0JJMkFFaklBUk1BSkd3QWdZZ2NFaGNBM2Vzc2x1MFdwK0d3QUFBQUJKUlU1RXJrSmdnZz09XCJcbn07XG5leHBvcnRzLlVSTCA9IFVSTDsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==