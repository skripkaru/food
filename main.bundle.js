/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  // Tabs\n  var tabs = document.querySelectorAll('.tabheader__item'),\n      tabsContent = document.querySelectorAll('.tabcontent'),\n      tabsParent = document.querySelector('.tabheader__items');\n\n  function hideTabContent() {\n    tabsContent.forEach(function (item) {\n      item.classList.add('hide');\n      item.classList.remove('show', 'fade');\n    });\n    tabs.forEach(function (item) {\n      item.classList.remove('tabheader__item_active');\n    });\n  }\n\n  function showTabContent() {\n    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    tabsContent[i].classList.add('show', 'fade');\n    tabsContent[i].classList.remove('hide');\n    tabs[i].classList.add('tabheader__item_active');\n  }\n\n  hideTabContent();\n  showTabContent();\n  tabsParent.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target && target.classList.contains('tabheader__item')) {\n      tabs.forEach(function (item, i) {\n        if (target == item) {\n          hideTabContent();\n          showTabContent(i);\n        }\n      });\n    }\n  }); // Timer\n\n  var deadline = '2022-01-01';\n\n  function getTimeRemaining(endtime) {\n    var t = Date.parse(endtime) - Date.parse(new Date()),\n        days = Math.floor(t / (1000 * 60 * 60 * 24)),\n        seconds = Math.floor(t / 1000 % 60),\n        minutes = Math.floor(t / 1000 / 60 % 60),\n        hours = Math.floor(t / (1000 * 60 * 60) % 24);\n    return {\n      'total': t,\n      'days': days,\n      'hours': hours,\n      'minutes': minutes,\n      'seconds': seconds\n    };\n  }\n\n  function getZero(num) {\n    if (num >= 0 && num < 10) {\n      return '0' + num;\n    } else {\n      return num;\n    }\n  }\n\n  function setClock(selector, endtime) {\n    var timer = document.querySelector(selector),\n        days = timer.querySelector(\"#days\"),\n        hours = timer.querySelector('#hours'),\n        minutes = timer.querySelector('#minutes'),\n        seconds = timer.querySelector('#seconds'),\n        timeInterval = setInterval(updateClock, 1000);\n    updateClock();\n\n    function updateClock() {\n      var t = getTimeRemaining(endtime);\n      days.innerHTML = getZero(t.days);\n      hours.innerHTML = getZero(t.hours);\n      minutes.innerHTML = getZero(t.minutes);\n      seconds.innerHTML = getZero(t.seconds);\n\n      if (t.total <= 0) {\n        clearInterval(timeInterval);\n      }\n    }\n  }\n\n  setClock('.timer', deadline); // Modal\n\n  var modalTrigger = document.querySelectorAll('[data-modal]'),\n      modal = document.querySelector('.modal'),\n      modalCloseBtn = document.querySelector('[data-close]');\n\n  function openModal() {\n    modal.classList.add('show', 'fade');\n    modal.classList.remove('hide');\n    document.body.style.overflow = 'hidden';\n    clearInterval(modalTimerId);\n  }\n\n  modalTrigger.forEach(function (btn) {\n    btn.addEventListener('click', openModal);\n  });\n\n  function closeModal() {\n    modal.classList.add('hide');\n    modal.classList.remove('show', 'fade');\n    document.body.style.overflow = '';\n  }\n\n  modalCloseBtn.addEventListener('click', closeModal);\n  modal.addEventListener('click', function (e) {\n    if (e.target === modal) {\n      closeModal();\n    }\n  });\n  document.addEventListener('keydown', function (e) {\n    if (e.code === \"Escape\" && modal.classList.contains('show')) {\n      closeModal();\n    }\n  }); // const modalTimerId = setTimeout(openModal, 5000);\n\n  function showModalByScroll() {\n    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {\n      openModal();\n      window.removeEventListener('scroll', showModalByScroll);\n    }\n  }\n\n  window.addEventListener('scroll', showModalByScroll);\n});\n\n//# sourceURL=webpack://food/./src/js/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_switch_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/switch.svg */ \"./src/icons/switch.svg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap&subset=cyrillic-ext);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_icons_switch_svg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Roboto', sans-serif; }\\n\\na {\\n  text-decoration: none; }\\n\\n.btn {\\n  width: 220px;\\n  height: 65px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: #fff;\\n  font-size: 18px;\\n  font-weight: bold;\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\\n  cursor: pointer;\\n  transition: 0.3s all;\\n  outline: none; }\\n  .btn_white {\\n    background-color: #fff; }\\n  .btn_dark {\\n    background-color: #303030;\\n    color: #fff;\\n    border: none; }\\n  .btn_min {\\n    height: 50px; }\\n  .btn:hover {\\n    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3); }\\n\\n.container {\\n  max-width: 1200px;\\n  margin: 0 auto; }\\n\\n.divider {\\n  width: 330px;\\n  height: 1px;\\n  margin: 0 auto;\\n  background-color: rgba(0, 0, 0, 0.5); }\\n\\n.title {\\n  font-size: 36px;\\n  font-weight: 400; }\\n\\n.hide {\\n  display: none; }\\n\\n.show {\\n  display: block; }\\n\\n.fade {\\n  animation-name: fade;\\n  animation-duration: 1.5s; }\\n\\n@keyframes fade {\\n  from {\\n    opacity: 0.1; }\\n  to {\\n    opacity: 1; } }\\n\\n.header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: 150px;\\n  padding: 0 100px; }\\n  .header__left-block {\\n    display: flex;\\n    justify-content: space-between;\\n    min-width: 550px; }\\n  .header__logo {\\n    max-width: 170px; }\\n    .header__logo img {\\n      width: 100%; }\\n  .header__links {\\n    display: flex;\\n    align-items: center; }\\n  .header__link {\\n    position: relative;\\n    margin-right: 45px;\\n    font-weight: bold;\\n    font-size: 18px;\\n    color: #303030; }\\n    .header__link:after {\\n      content: '';\\n      position: absolute;\\n      display: block;\\n      width: 110%;\\n      left: -5%;\\n      bottom: -1px;\\n      z-index: -1;\\n      height: 8px;\\n      background: #54ED39; }\\n    .header__link:last-child {\\n      margin-right: 0; }\\n\\n.sidepanel {\\n  position: fixed;\\n  left: 60px;\\n  top: 240px;\\n  height: 400px;\\n  width: 25px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center; }\\n  .sidepanel__text {\\n    width: 120px;\\n    height: 120px;\\n    font-size: 14px; }\\n    .sidepanel__text span {\\n      display: flex;\\n      transform: rotate(-90deg) translateX(-50px); }\\n  .sidepanel__divider {\\n    width: 1px;\\n    height: 165px;\\n    background-color: #000; }\\n  .sidepanel__icon {\\n    width: 24px;\\n    height: 24px; }\\n    .sidepanel__icon img {\\n      width: 100%; }\\n\\n.preview {\\n  padding: 28px 0 100px 0;\\n  position: relative; }\\n  .preview__life {\\n    font-weight: bold;\\n    font-size: 20px;\\n    margin-left: 35px;\\n    margin-top: 35px; }\\n\\n.bgc_blue {\\n  position: absolute;\\n  right: 0;\\n  top: -155px;\\n  width: 50vw;\\n  height: 900px;\\n  background: rgba(146, 242, 255, 0.15);\\n  z-index: -1; }\\n\\n.tabcontainer {\\n  display: flex;\\n  width: 1130px;\\n  margin: 0 auto;\\n  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25); }\\n\\n.tabcontent {\\n  width: 850px;\\n  position: relative; }\\n  .tabcontent img {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover; }\\n  .tabcontent__descr {\\n    position: absolute;\\n    top: 300px;\\n    right: -177px;\\n    width: 550px;\\n    height: 359px;\\n    background: rgba(251, 254, 93, 0.8);\\n    padding: 50px;\\n    font-size: 24px;\\n    font-weight: 300;\\n    line-height: 36px;\\n    color: rgba(0, 0, 0, 0.7); }\\n\\n.tabheader {\\n  width: 280px;\\n  padding: 35px 30px;\\n  background-color: #fff; }\\n  .tabheader h3 {\\n    font-weight: bold;\\n    font-size: 16px; }\\n  .tabheader__items {\\n    margin-top: 35px;\\n    padding-left: 26px;\\n    border-left: 1px solid black; }\\n  .tabheader__item {\\n    font-weight: bold;\\n    font-size: 18px;\\n    font-weight: 300;\\n    margin-top: 10px;\\n    color: rgba(0, 0, 0, 0.6);\\n    cursor: pointer;\\n    transition: 0.3s all; }\\n    .tabheader__item_active {\\n      color: #000;\\n      font-size: 22px;\\n      font-weight: 700; }\\n\\n.offer {\\n  padding: 70px 0 100px 0;\\n  position: relative; }\\n  .offer .container {\\n    display: flex;\\n    justify-content: space-between; }\\n  .offer .bgc_y {\\n    position: absolute;\\n    width: 1109px;\\n    height: 780px;\\n    background: rgba(243, 255, 222, 0.45);\\n    z-index: -1;\\n    top: 50px; }\\n  .offer__text {\\n    width: 580px; }\\n  .offer__descr {\\n    font-size: 18px;\\n    margin-top: 30px;\\n    font-weight: 300;\\n    line-height: 24px; }\\n  .offer__action {\\n    display: flex;\\n    align-items: center;\\n    justify-content: flex-end; }\\n  .offer__advantages {\\n    width: 330px;\\n    margin-top: 50px; }\\n    .offer__advantages h2 {\\n      font-weight: bold;\\n      font-size: 20px;\\n      margin-top: 20px; }\\n      .offer__advantages h2:first-child {\\n        margin-top: 70px; }\\n    .offer__advantages-text {\\n      margin-top: 20px;\\n      font-size: 18px;\\n      font-weight: 300;\\n      line-height: 21px; }\\n  .offer__slider {\\n    width: 650px;\\n    margin-top: 50px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-end; }\\n    .offer__slider-counter {\\n      display: flex;\\n      width: 180px;\\n      align-items: center;\\n      font-size: 24px;\\n      color: rgba(0, 0, 0, 0.5); }\\n    .offer__slider-wrapper {\\n      width: 100%;\\n      margin-top: 15px;\\n      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25); }\\n    .offer__slider-prev {\\n      margin-right: 10px;\\n      cursor: pointer; }\\n    .offer__slider-next {\\n      margin-left: 10px;\\n      cursor: pointer; }\\n    .offer__slider #current {\\n      font-size: 48px;\\n      font-weight: bold;\\n      color: black; }\\n  .offer__slide {\\n    width: 100%;\\n    height: 390px; }\\n    .offer__slide img {\\n      width: 100%;\\n      height: 100%;\\n      object-fit: cover; }\\n\\n.calculating {\\n  padding: 50px 0; }\\n  .calculating .title {\\n    text-align: center; }\\n  .calculating__field {\\n    width: 100%;\\n    margin-top: 50px;\\n    background: rgba(146, 242, 255, 0.15);\\n    padding: 30px 0 40px 0; }\\n  .calculating__subtitle {\\n    text-align: center;\\n    font-size: 18px;\\n    font-weight: bold;\\n    margin-top: 30px; }\\n    .calculating__subtitle:first-child {\\n      margin-top: 0; }\\n  .calculating #gender:after {\\n    content: '';\\n    position: absolute;\\n    top: 50%;\\n    transform: translateY(-50%);\\n    display: block;\\n    width: 16px;\\n    height: 16px;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") center center/cover no-repeat; }\\n  .calculating__choose {\\n    position: relative;\\n    display: flex;\\n    margin-top: 30px;\\n    justify-content: center; }\\n    .calculating__choose-item {\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      width: 170px;\\n      height: 50px;\\n      padding: 0 10px;\\n      background: #FFFFFF;\\n      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\\n      border: none;\\n      text-align: center;\\n      font-size: 14px;\\n      cursor: pointer;\\n      outline: none;\\n      transition: 0.3s all; }\\n      .calculating__choose-item_active {\\n        color: #fff;\\n        background-color: #54ED39; }\\n    .calculating__choose_medium {\\n      width: 743px;\\n      justify-content: space-between;\\n      margin: 30px auto 0 auto; }\\n    .calculating__choose_big {\\n      width: 930px;\\n      justify-content: space-between;\\n      margin: 30px auto 0 auto; }\\n      .calculating__choose_big .calculating__choose-item {\\n        width: 200px; }\\n  .calculating__divider {\\n    width: 490px;\\n    height: 1px;\\n    margin: 40px auto;\\n    background-color: rgba(0, 0, 0, 0.2); }\\n  .calculating__total {\\n    width: 490px;\\n    margin: 0 auto;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center; }\\n  .calculating__result {\\n    font-size: 18px;\\n    font-weight: bold; }\\n    .calculating__result span {\\n      font-size: 42px; }\\n\\n.menu {\\n  padding: 40px 0 50px 0; }\\n  .menu .container {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: flex-start; }\\n  .menu .title {\\n    text-align: center; }\\n  .menu__field {\\n    margin-top: 50px;\\n    padding: 50px 0;\\n    width: 100%;\\n    background: rgba(249, 254, 126, 0.25); }\\n  .menu__item {\\n    width: 320px;\\n    min-height: 450px;\\n    background: #FFFFFF;\\n    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);\\n    font-size: 16px;\\n    font-weight: 300; }\\n    .menu__item img {\\n      width: 100%;\\n      height: 200px;\\n      object-fit: cover; }\\n    .menu__item-subtitle {\\n      font-weight: bold;\\n      font-size: 18px;\\n      padding: 0 20px;\\n      margin-top: 20px; }\\n    .menu__item-descr {\\n      margin-top: 20px;\\n      padding: 0 20px; }\\n    .menu__item-divider {\\n      width: 100%;\\n      height: 1px;\\n      background-color: rgba(0, 0, 0, 0.25);\\n      margin-top: 40px; }\\n    .menu__item-price {\\n      display: flex;\\n      justify-content: space-between;\\n      align-items: center;\\n      padding: 10px 20px; }\\n      .menu__item-price span {\\n        font-size: 24px;\\n        font-weight: bold; }\\n\\n.order {\\n  padding-bottom: 80px; }\\n  .order .title {\\n    text-align: center; }\\n  .order__form {\\n    margin-top: 70px;\\n    padding: 0 100px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center; }\\n    .order__form img {\\n      transform: scale(1.5); }\\n  .order__input {\\n    width: 280px;\\n    height: 50px;\\n    background: #FFFFFF;\\n    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\\n    border: none;\\n    font-size: 18px;\\n    text-align: center;\\n    padding: 0 20px;\\n    outline: none; }\\n\\n.promotion {\\n  padding: 70px 0 240px 0;\\n  position: relative; }\\n  .promotion .container {\\n    display: flex; }\\n  .promotion .bgc_y {\\n    position: absolute;\\n    width: 50%;\\n    height: 499px;\\n    background: rgba(243, 255, 222, 0.35);\\n    z-index: -1;\\n    top: -50px;\\n    left: 0; }\\n  .promotion__text {\\n    width: 50%; }\\n  .promotion__descr {\\n    margin-top: 40px;\\n    font-size: 20px;\\n    line-height: 24px;\\n    font-weight: 300; }\\n    .promotion__descr span {\\n      font-weight: bold;\\n      font-size: 26px; }\\n  .promotion__timer {\\n    width: 50%; }\\n    .promotion__timer .title {\\n      text-align: right; }\\n    .promotion__timer .timer {\\n      margin-top: 60px;\\n      padding-left: 95px;\\n      display: flex;\\n      justify-content: space-between;\\n      align-items: center; }\\n      .promotion__timer .timer__block {\\n        width: 102px;\\n        height: 120px;\\n        background: #FFFFFF;\\n        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);\\n        font-size: 16px;\\n        font-weight: 300;\\n        text-align: center; }\\n        .promotion__timer .timer__block span {\\n          display: block;\\n          margin-top: 20px;\\n          margin-bottom: 5px;\\n          font-size: 56px;\\n          font-weight: bold; }\\n\\n.footer {\\n  min-height: 180px;\\n  background-color: #303030;\\n  padding: 45px 0 50px 0;\\n  color: #fff; }\\n  .footer .container {\\n    height: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: flex-end; }\\n  .footer .subtitle {\\n    font-size: 20px; }\\n  .footer .link {\\n    display: block;\\n    margin-top: 15px;\\n    font-size: 16px;\\n    color: #fff; }\\n  .footer .call {\\n    text-align: right; }\\n\\n.modal {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  z-index: 1050;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n  background-color: rgba(0, 0, 0, 0.5); }\\n  .modal__dialog {\\n    max-width: 500px;\\n    margin: 40px auto; }\\n  .modal__content {\\n    position: relative;\\n    width: 100%;\\n    padding: 40px;\\n    background-color: #fff;\\n    border: 1px solid rgba(0, 0, 0, 0.2);\\n    border-radius: 4px;\\n    max-height: 80vh;\\n    overflow-y: auto; }\\n  .modal__close {\\n    position: absolute;\\n    top: 8px;\\n    right: 14px;\\n    font-size: 30px;\\n    color: #000;\\n    opacity: .5;\\n    font-weight: 700;\\n    border: none;\\n    background-color: transparent;\\n    cursor: pointer; }\\n  .modal__title {\\n    text-align: center;\\n    font-size: 22px;\\n    text-transform: uppercase; }\\n  .modal__input {\\n    display: block;\\n    margin: 20px auto 20px auto;\\n    width: 280px;\\n    height: 50px;\\n    background: #FFFFFF;\\n    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\\n    border: none;\\n    font-size: 18px;\\n    text-align: center;\\n    padding: 0 20px;\\n    outline: none; }\\n  .modal .btn {\\n    display: block;\\n    width: 280px;\\n    margin: 0 auto; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://food/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://food/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://food/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://food/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://food/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/icons/switch.svg":
/*!******************************!*\
  !*** ./src/icons/switch.svg ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDhDMTUgMTEuODY2IDExLjg2NiAxNSA4IDE1QzQuMTM0MDEgMTUgMSAxMS44NjYgMSA4QzEgNC4xMzQwMSA0LjEzNDAxIDEgOCAxQzExLjg2NiAxIDE1IDQuMTM0MDEgMTUgOFoiIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGQ9Ik01IDhMNy4yNSA0LjUzNTlMNy4yNSAxMS40NjQxTDUgOFoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cGF0aCBkPSJNMTEgOEw4Ljc1IDExLjQ2NDFMOC43NSA0LjUzNTlMMTEgOFoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4K\";\n\n//# sourceURL=webpack://food/./src/icons/switch.svg?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;