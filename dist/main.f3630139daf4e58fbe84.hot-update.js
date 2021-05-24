/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefood"]("main",{

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  // Tabs\n  var tabs = document.querySelectorAll('.tabheader__item'),\n      tabsContent = document.querySelectorAll('.tabcontent'),\n      tabsParent = document.querySelector('.tabheader__items');\n\n  function hideTabContent() {\n    tabsContent.forEach(function (item) {\n      item.classList.add('hide');\n      item.classList.remove('show', 'fade');\n    });\n    tabs.forEach(function (item) {\n      item.classList.remove('tabheader__item_active');\n    });\n  }\n\n  function showTabContent() {\n    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    tabsContent[i].classList.add('show', 'fade');\n    tabsContent[i].classList.remove('hide');\n    tabs[i].classList.add('tabheader__item_active');\n  }\n\n  hideTabContent();\n  showTabContent();\n  tabsParent.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target && target.classList.contains('tabheader__item')) {\n      tabs.forEach(function (item, i) {\n        if (target == item) {\n          hideTabContent();\n          showTabContent(i);\n        }\n      });\n    }\n  }); // Timer\n\n  var deadline = '2022-01-01';\n\n  function getTimeRemaining(endtime) {\n    var t = Date.parse(endtime) - Date.parse(new Date()),\n        days = Math.floor(t / (1000 * 60 * 60 * 24)),\n        seconds = Math.floor(t / 1000 % 60),\n        minutes = Math.floor(t / 1000 / 60 % 60),\n        hours = Math.floor(t / (1000 * 60 * 60) % 24);\n    return {\n      'total': t,\n      'days': days,\n      'hours': hours,\n      'minutes': minutes,\n      'seconds': seconds\n    };\n  }\n\n  function getZero(num) {\n    if (num >= 0 && num < 10) {\n      return '0' + num;\n    } else {\n      return num;\n    }\n  }\n\n  function setClock(selector, endtime) {\n    var timer = document.querySelector(selector),\n        days = timer.querySelector(\"#days\"),\n        hours = timer.querySelector('#hours'),\n        minutes = timer.querySelector('#minutes'),\n        seconds = timer.querySelector('#seconds'),\n        timeInterval = setInterval(updateClock, 1000);\n    updateClock();\n\n    function updateClock() {\n      var t = getTimeRemaining(endtime);\n      days.innerHTML = getZero(t.days);\n      hours.innerHTML = getZero(t.hours);\n      minutes.innerHTML = getZero(t.minutes);\n      seconds.innerHTML = getZero(t.seconds);\n\n      if (t.total <= 0) {\n        clearInterval(timeInterval);\n      }\n    }\n  }\n\n  setClock('.timer', deadline); // Modal\n\n  var modalTrigger = document.querySelectorAll('[data-modal]'),\n      modal = document.querySelector('.modal');\n\n  function openModal() {\n    modal.classList.add('show', 'fade');\n    modal.classList.remove('hide');\n    document.body.style.overflow = 'hidden';\n    clearInterval(modalTimerId);\n  }\n\n  modalTrigger.forEach(function (btn) {\n    btn.addEventListener('click', openModal);\n  });\n\n  function closeModal() {\n    modal.classList.add('hide');\n    modal.classList.remove('show', 'fade');\n    document.body.style.overflow = '';\n  }\n\n  modal.addEventListener('click', function (e) {\n    if (e.target === modal || e.target.getAttribute('data-close') == '') {\n      closeModal();\n    }\n  });\n  document.addEventListener('keydown', function (e) {\n    if (e.code === \"Escape\" && modal.classList.contains('show')) {\n      closeModal();\n    }\n  });\n  var modalTimerId = setTimeout(openModal, 500000);\n\n  function showModalByScroll() {\n    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {\n      openModal();\n      window.removeEventListener('scroll', showModalByScroll);\n    }\n  }\n\n  window.addEventListener('scroll', showModalByScroll); // Классы для карточек\n\n  var MenuCard = /*#__PURE__*/function () {\n    function MenuCard(src, alt, title, descr, price, parentSelector) {\n      _classCallCheck(this, MenuCard);\n\n      this.src = src;\n      this.alt = alt;\n      this.title = title;\n      this.descr = descr;\n      this.price = price;\n\n      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {\n        classes[_key - 6] = arguments[_key];\n      }\n\n      this.classes = classes;\n      this.parent = document.querySelector(parentSelector);\n      this.transfer = 73;\n      this.changeToRUB();\n    }\n\n    _createClass(MenuCard, [{\n      key: \"changeToRUB\",\n      value: function changeToRUB() {\n        this.price = this.price * this.transfer;\n      }\n    }, {\n      key: \"render\",\n      value: function render() {\n        var element = document.createElement('div');\n\n        if (this.classes.length === 0) {\n          this.element = 'menu__item';\n          element.classList.add(this.element);\n        } else {\n          this.classes.forEach(function (className) {\n            return element.classList.add(className);\n          });\n        }\n\n        element.innerHTML = \"\\n\\t\\t\\t\\t<img src=\\\"\".concat(this.src, \"\\\" alt=\\\"\").concat(this.alt, \"\\\">\\n\\t\\t\\t\\t<h3 class=\\\"menu__item-subtitle\\\">\").concat(this.title, \"</h3>\\n\\t\\t\\t\\t<div class=\\\"menu__item-descr\\\">\").concat(this.descr, \"</div>\\n\\t\\t\\t\\t<div class=\\\"menu__item-divider\\\"></div>\\n\\t\\t\\t\\t<div class=\\\"menu__item-price\\\">\\n\\t\\t\\t\\t\\t<div class=\\\"menu__item-cost\\\">\\u0426\\u0435\\u043D\\u0430:</div>\\n\\t\\t\\t\\t\\t<div class=\\\"menu__item-total\\\"><span>\").concat(this.price, \"</span> \\u0440\\u0443\\u0431/\\u0434\\u0435\\u043D\\u044C</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\");\n        this.parent.append(element);\n      }\n    }]);\n\n    return MenuCard;\n  }();\n\n  var getResource = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(url);\n\n            case 2:\n              res = _context.sent;\n\n              if (res.ok) {\n                _context.next = 5;\n                break;\n              }\n\n              throw new Error(\"Could not fetch \".concat(url, \", status: \").concat(res.status));\n\n            case 5:\n              _context.next = 7;\n              return res.json();\n\n            case 7:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getResource(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  getResource('http://localhost:3000/menu').then(function (data) {\n    data.forEach(function (_ref2) {\n      var img = _ref2.img,\n          alt = _ref2.alt,\n          title = _ref2.title,\n          descr = _ref2.descr,\n          price = _ref2.price;\n      new MenuCard(img, alt, title, descr, price, '.menu .container').render();\n    });\n  }); // getResource('http://localhost:3000/menu')\n  //     .then(data => createCard(data));\n  // function createCard(data) {\n  //     data.forEach(({img, alt, title, descr, price}) => {\n  //         const element = document.createElement('div');\n  //         element.classList.add('menu__item');\n  //         element.innerHTML = `\n  //             <img src=\"${img}\" alt=\"${alt}\">\n  //             <h3 class=\"menu__item-subtitle\">${title}</h3>\n  //             <div class=\"menu__item-descr\">${descr}</div>\n  //             <div class=\"menu__item-divider\"></div>\n  //             <div class=\"menu__item-price\">\n  //                 <div class=\"menu__item-cost\">Цена:</div>\n  //                 <div class=\"menu__item-total\"><span>${price}</span> руб/день</div>\n  //             </div>\n  //         `;\n  //         document.querySelector('.menu .container').append(element);\n  //     })\n  // }\n  // Forms\n\n  var forms = document.querySelectorAll('form');\n  var message = {\n    loading: 'img/loading.svg',\n    success: 'Спасибо, скоро мы с вами свяжемся',\n    failure: 'Что-то пошло не так...'\n  };\n  forms.forEach(function (item) {\n    bindPostData(item);\n  });\n\n  var postData = /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, data) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return fetch(url, {\n                method: 'POST',\n                headers: {\n                  'Content-type': 'application/json'\n                },\n                body: data\n              });\n\n            case 2:\n              res = _context2.sent;\n              _context2.next = 5;\n              return res.json();\n\n            case 5:\n              return _context2.abrupt(\"return\", _context2.sent);\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function postData(_x2, _x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  function bindPostData(form) {\n    form.addEventListener('submit', function (e) {\n      e.preventDefault();\n      var statusMessage = document.createElement('img');\n      statusMessage.src = message.loading;\n      statusMessage.style.cssText = \"\\n\\t\\t\\t\\tdisplay: block;\\n\\t\\t\\t\\tmargin: 0 auto;\\n\\t\\t\\t\";\n      form.insertAdjacentElement('afterend', statusMessage);\n      var formData = new FormData(form);\n      var json = JSON.stringify(Object.fromEntries(formData.entries()));\n      postData('http://localhost:3000/requests', json).then(function (data) {\n        console.log(data);\n        showThanksModal(message.success);\n        statusMessage.remove();\n      })[\"catch\"](function () {\n        showThanksModal(message.failure);\n      })[\"finally\"](function () {\n        form.reset();\n      });\n    });\n  }\n\n  function showThanksModal(message) {\n    var prevModalDialog = document.querySelector('.modal__dialog');\n    prevModalDialog.classList.add('hide');\n    openModal();\n    var thanksModal = document.createElement('div');\n    thanksModal.classList.add('modal__dialog');\n    thanksModal.innerHTML = \"\\n\\t\\t\\t<div class='modal__content'>\\n\\t\\t\\t\\t<div class='modal__close' data-close>&times;</div>\\n\\t\\t\\t\\t<div class='modal__title'>\".concat(message, \"</div>\\n\\t\\t\\t</div>\\n\\t\\t\");\n    document.querySelector('.modal').append(thanksModal);\n    setTimeout(function () {\n      thanksModal.remove();\n      prevModalDialog.classList.add('show');\n      prevModalDialog.classList.remove('hide');\n      closeModal();\n    }, 4000);\n  }\n});\n\n//# sourceURL=webpack://food/./src/js/main.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2419fef2bdd3b3c5f0a9")
/******/ })();
/******/ 
/******/ }
);