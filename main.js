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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/contact/contact.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/contact/contact.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    font-family: 'Source Sans Pro', sans-serif;\n}\n\n.contact-container {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    max-width: 500px;\n    margin-top: 8rem;\n    margin-bottom: 2rem;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 2rem;\n    background-color: rgba(255, 255, 255, 0.95);\n    border-radius: 10px;\n    box-shadow: 0 12px 25px rgba(65, 43, 27, 0.20);\n}\n\n.contact-container {\n    animation: fadeIn 0.6s ease-out;\n}\n\n.feedback-form input, .feedback-form textarea {\n    width: 100%;\n    margin-bottom: 1.5rem;\n    padding: 0.75rem;\n    font-size: 1rem;\n    border: 1px solid #d4c2a6;\n    border-radius: 6px;\n    transition: all 0.3s ease-in-out;\n    font-family: inherit;\n}\n\n.feedback-form input:focus, .feedback-form textarea:focus {\n    outline: 1px solid #B8860B;\n    outline-offset: 2px;\n    border-color: #8B4513;\n    box-shadow: 0 0 5px rgba(139, 69, 19, 0.3);\n}\n\n\n.feedback-form label {\n    display: block;\n    margin-bottom: 0.5rem;\n    font-weight: bold;\n    font-size: 1.2rem;\n    color: #B8860B;\n    border-left: #8B4513 solid 4px;\n    border-radius: 2px;\n    padding-left: 0.6rem;\n}\n\n.feedback-form textarea {\n    max-height: 200px;\n    resize: vertical;\n}\n\n.feedback-form button {\n    width: 100%;\n    padding: 1rem;\n    font-size: 1.2rem;\n    font-weight: 500;\n    background-color: #8B4513; \n    color: #f4f1eb; \n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    box-shadow: 0 4px 12px rgba(52, 52, 52, 0.3);\n    margin-top: 0.5rem;\n}\n\n.feedback-form button:hover {\n    background-color: #5b2710; \n    transform: translateY(-2px);\n}\n\n.form-h2 {\n    text-align: center;\n    margin-bottom: 2rem;\n    color: #B8860B; \n    font-size: 2rem;\n    font-weight: bold;\n    text-shadow: 1px 1px 3px rgba(65, 43, 27, 0.3);\n}\n\n/* ===== RESPONSIVE DESIGN ===== */\n\n/* Widescreen (1200px and up) */\n@media (min-width: 1200px) {\n    .contact-container {\n        width: 40%;\n        max-width: 600px;\n        padding: 2.5rem;\n    }\n    \n    .form-h2 {\n        font-size: 2.5rem;\n        margin-bottom: 2.5rem;\n    }\n    \n    .feedback-form label {\n        font-size: 1.3rem;\n    }\n    \n    .feedback-form input, .feedback-form textarea {\n        font-size: 1.1rem;\n        padding: 1rem;\n    }\n    \n    .feedback-form button {\n        font-size: 1.3rem;\n        padding: 1.2rem;\n    }\n}\n\n/* Desktop (768px to 1199px) */\n@media (min-width: 768px) and (max-width: 1199px) {\n    .contact-container {\n        width: 60%;\n        max-width: 550px;\n        padding: 2rem;\n        margin-top: 6rem;\n    }\n    \n    .form-h2 {\n        font-size: 2.2rem;\n    }\n    \n    .feedback-form label {\n        font-size: 1.2rem;\n    }\n    \n    .feedback-form input, .feedback-form textarea {\n        font-size: 1rem;\n        padding: 0.8rem;\n    }\n}\n\n/* Tablet (481px to 767px) */\n@media (min-width: 481px) and (max-width: 767px) {\n    .contact-container {\n        width: 80%;\n        max-width: 500px;\n        padding: 1.5rem;\n        margin-top: 4rem;\n    }\n    \n    .form-h2 {\n        font-size: 1.8rem;\n        margin-bottom: 1.5rem;\n    }\n    \n    .feedback-form label {\n        font-size: 1.1rem;\n        padding-left: 0.5rem;\n    }\n    \n    .feedback-form input, .feedback-form textarea {\n        font-size: 0.95rem;\n        padding: 0.7rem;\n        margin-bottom: 1.2rem;\n    }\n    \n    .feedback-form button {\n        font-size: 1.1rem;\n        padding: 0.9rem;\n    }\n}\n\n/* Phone (480px and below) */\n@media (max-width: 480px) {\n    .contact-container {\n        width: 95%;\n        max-width: none;\n        padding: 1rem;\n        top: 45%;\n        margin-top: 4rem;\n    }\n    \n    .form-h2 {\n        font-size: 1.5rem;\n        margin-bottom: 1rem;\n    }\n    \n    .feedback-form label {\n        font-size: 1rem;\n        padding-left: 0.4rem;\n        border-left-width: 3px;\n    }\n    \n    .feedback-form input, .feedback-form textarea {\n        font-size: 0.9rem;\n        padding: 0.6rem;\n        margin-bottom: 1rem;\n    }\n    \n    .feedback-form textarea {\n        max-height: 150px;\n    }\n    \n    .feedback-form button {\n        font-size: 1rem;\n        padding: 0.8rem;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/contact/contact.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home/home.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home/home.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.main-image-div {\n    position: relative;\n    animation: fadeIn 0.8s ease-out;\n}\n\n.main-image-div p {\n    width: 100%;\n    text-align: center;\n    font-size: 2.5rem;\n    font-weight: 300;\n    font-family: 'Playfair Display', serif;\n    z-index: 5;\n    position: absolute;\n    bottom: 8%;\n    left: 0;\n    color: #f4f1eb;\n    background-color: rgba(48, 25, 9, 0.5);\n    padding: 20px 30px;\n    border-radius: 10px;\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);\n    letter-spacing: 1px;\n}\n\n.restaurant-image {\n    width: 100%;\n    height: auto;\n    max-height: 70vh;\n    object-fit: cover;\n}\n\n.food-image {\n    width: 50%;\n    height: auto;\n    margin: 20px;\n    border-radius: 8px;\n    box-shadow: 2px 2px 40px rgba(52, 52, 52, 0.5);\n}\n\n.restaurant-description {\n    width: 40%;\n    font-size: 1.3rem;\n    padding: 20px;\n    background-color: #ffffff;\n    margin: 20px;\n    border-radius: 8px;\n    box-shadow: 2px 2px 40px rgba(52, 52, 52, 0.5);\n}\n\n.info-section {\n    margin-top: 2rem;\n    text-align: justify;\n    padding: 5rem;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.info-section h2 {\n    font-family: 'Playfair Display', serif;\n    margin-bottom: 1rem;\n    font-size: 1.5rem;\n    font-weight: bold;\n    text-align: center;\n}\n\n/* ===== RESPONSIVE DESIGN ===== */\n\n/* Tablet Landscape (1024px and down) */\n@media (max-width: 1024px) {\n    .info-section {\n        padding: 3rem 2rem;\n    }\n    \n    .restaurant-description {\n        width: 45%;\n        font-size: 1.2rem;\n    }\n    \n    .food-image {\n        width: 45%;\n    }\n}\n\n/* Tablet Portrait (768px and down) */\n@media (max-width: 768px) {\n    .main-image-div p {\n        font-size: 2rem;\n        padding: 15px 20px;\n        bottom: 5%;\n    }\n    \n    .info-section {\n        flex-direction: column;\n        padding: 2rem 1rem;\n        text-align: center;\n    }\n    \n    .restaurant-description {\n        width: 90%;\n        margin: 1rem auto;\n        font-size: 1.1rem;\n    }\n    \n    .food-image {\n        width: 80%;\n        margin: 1rem auto;\n        order: -1; /* Image appears first on mobile */\n    }\n    \n    .info-section h2 {\n        font-size: 1.8rem;\n        margin-bottom: 1.5rem;\n    }\n}\n\n/* Mobile Landscape (580px and down) */\n@media (max-width: 580px) {\n    .main-image-div p {\n        font-size: 1.5rem;\n        padding: 12px 16px;\n        bottom: 3%;\n        letter-spacing: 0.5px;\n    }\n    \n    .info-section {\n        padding: 1.5rem 1rem;\n    }\n    \n    .restaurant-description {\n        width: 95%;\n        padding: 15px;\n        margin: 1rem auto;\n        font-size: 1rem;\n    }\n    \n    .food-image {\n        width: 90%;\n        margin: 1rem auto;\n    }\n    \n    .info-section h2 {\n        font-size: 1.5rem;\n    }\n}\n\n/* Mobile Portrait (480px and down) */\n@media (max-width: 480px) {\n    .main-image-div p {\n        font-size: 1.2rem;\n        padding: 10px 12px;\n        bottom: 2%;\n        letter-spacing: 0px;\n    }\n    \n    .info-section {\n        padding: 1rem 0.5rem;\n    }\n    \n    .restaurant-description {\n        width: 98%;\n        padding: 12px;\n        margin: 0.8rem auto;\n        font-size: 0.95rem;\n    }\n    \n    .food-image {\n        width: 95%;\n        margin: 0.8rem auto;\n        border-radius: 6px;\n    }\n    \n    .info-section h2 {\n        font-size: 1.3rem;\n        margin-bottom: 1rem;\n    }\n}\n\n@media (max-width: 360px) {\n    .main-image-div p {\n        font-size: 1rem;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/home/home.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menu/menu.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu/menu.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    font-family: 'Source Sans Pro', sans-serif;\n}\n\n:root {\n    --card-bg: #ffffff;\n    --card-shadow: rgba(0, 0, 0, 0.3);\n    --card-border: rgba(192, 75, 48, 0.5);\n    --card-font: #4a3705;\n}\n\n.menu-title {\n    font-family: 'Playfair Display', serif;\n    font-size: 2.5em;\n    font-weight: 700;\n    text-align: center;\n    margin: 2rem 0 20px 0;\n    margin-top: 5rem;\n    color: var(--card-font);\n    text-shadow: 3px  3px 5px rgba(135, 99, 9, 0.3);\n    letter-spacing: 1px;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    max-width: 1400px;\n    margin: 0 auto;\n    padding: 0 1rem;\n    margin-bottom: 10rem;\n}\n\n.menu-card {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid var(--card-border);\n    box-shadow: 2px 2px 10px var(--card-shadow);\n    margin: 1rem;\n    padding: 1rem;\n    border-radius: 1rem;\n    background-color: var(--card-bg);\n    transition: all 0.2s ease-in-out;\n    height: 500px; \n    animation: fadeInUp 0.6s ease-out;\n}\n\n.menu-card h3 {\n    font-family: 'Playfair Display', serif;\n    font-weight: 600;\n    color: var(--card-font);\n    height: 20%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    font-size: 1.4em;\n    text-align: center;\n    line-height: 1.3;\n}\n\n.menu-card img {\n    height: 50%; \n    width: 100%;\n    object-fit: cover;\n    border-radius: 0.5rem;\n    animation: fadeIn 1.2s ease-out;\n}\n\n.menu-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    overflow-y: auto; \n    padding: 10px 0;\n}\n\n.menu-info p {\n    height: 15%;\n}\n\n.menu-card:hover {\n    transform: translateY(-2px);\n    box-shadow: 2px 4px 12px var(--card-shadow);\n}\n\n/* ===== RESPONSIVE DESIGN ===== */\n\n/* Widescreen (1200px and up) */\n@media (min-width: 1200px) {\n    .menu-container {\n        grid-template-columns: repeat(4, 1fr);\n        gap: 1.5rem;\n    }\n    \n    .menu-card {\n        margin: 0;\n    }\n}\n\n/* Desktop (768px to 1199px) */\n@media (min-width: 768px) and (max-width: 1199px) {\n    .menu-title {\n        font-size: 2.2em;\n    }\n    \n    .menu-container {\n        grid-template-columns: repeat(2, 1fr);\n        gap: 1.5rem;\n    }\n    \n    .menu-card {\n        margin: 0;\n        height: 480px;\n    }\n}\n\n/* Tablet (481px to 767px) */\n@media (min-width: 481px) and (max-width: 767px) {\n    .menu-title {\n        font-size: 1.8em;\n    }\n    \n    .menu-container {\n        grid-template-columns: repeat(2, 1fr);\n        gap: 1rem;\n        margin-bottom: 4rem;\n    }\n    \n    .menu-card {\n        margin: 0;\n        height: 420px;\n        padding: 0.8rem;\n    }\n    \n    .menu-card h3 {\n        font-size: 1.2em;\n    }\n    \n    .menu-info p {\n        font-size: 0.9em;\n    }\n}\n\n/* Phone (480px and below) */\n@media (max-width: 480px) {\n    .menu-title {\n        font-size: 1.5em;\n        margin-bottom: 15px;\n    }\n    \n    .menu-container {\n        grid-template-columns: 1fr;\n        gap: 1rem;\n        padding: 0 0.5rem;\n        margin-bottom: 2rem;\n    }\n    \n    .menu-card {\n        margin: 0;\n        height: 380px;\n        padding: 0.7rem;\n    }\n    \n    .menu-card h3 {\n        font-size: 1.1em;\n        height: 15%;\n    }\n    \n    .menu-card img {\n        height: 60%;\n    }\n    \n    .menu-info p {\n        font-size: 0.85em;\n        text-align: center;\n        margin: 0.3rem 0;\n    }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu/menu.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    font-family: 'Source Sans Pro', sans-serif;\n}\n\nbody {\n    font-family: 'Source Sans Pro', sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #faf8f3;\n}\n\nh1, h2, h3, h4, h5 {\n    font-family: 'Playfair Display', serif;\n}\n\np, span, div, button, input, textarea, label, a {\n    font-family: 'Source Sans Pro', sans-serif;\n}\n\n.nav-container {\n    position: relative;\n}\n\n.nav-container nav {\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    position: absolute;\n    top: 165%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n}\n\nheader {\n    position: relative;\n    background-color: #f7ddc9; \n    padding: 1rem 0;\n    box-shadow: 0 2px 5px rgba(52, 52, 52, 0.3);\n    margin-bottom: 0;\n    text-align: center;\n    z-index: 10;\n}\n\nh1 {\n    text-align: center;\n    margin: 1rem 0;\n    color: #B8860B; \n    font-size: 3rem;\n    font-weight: bold;\n    text-shadow: 2px 2px 5px rgba(65, 43, 27, 0.3);\n}\n\nnav button {\n    font-family: 'Source Sans Pro', sans-serif;\n    margin: 1rem;\n    padding: 1rem 2rem;\n    font-size: 1.5rem;\n    font-weight: 400;\n    cursor: pointer;\n    border: none;\n    background-color: #8B4513; \n    color: #f4f1eb; \n    border-radius: 5px;\n    box-shadow: 2px 2px 10px rgba(52, 52, 52, 0.5);\n    transition: all 0.3s ease-in-out;\n    border: 2px solid #391c09;\n}\n\nnav button:hover {\n    background-color: #A0522D; \n    transform: translateY(-2px);\n}\n\n.footer {\n    background-color: #f7ddc9;\n    color: #412b1b;\n    text-align: center;\n    padding: 2rem 1rem;\n    box-shadow: 0 -2px 5px rgba(52, 52, 52, 0.3);\n}\n\n.footer p {\n    font-family: 'Source Sans Pro', sans-serif;\n    margin: 0.5rem 0;\n    font-size: 1rem;\n    line-height: 1.5;\n}\n\n.footer a {\n    color: #8B4513;\n    text-decoration: none;\n    font-weight: 600;\n    transition: all 0.5s ease-in-out;\n}\n\n.footer a:hover {\n    color: #391c09;\n    text-decoration: underline;\n}\n\n.button-active {\n    background-color: #61280e; \n    box-shadow: 4px 4px 15px rgba(52, 52, 52, 0.7);\n    border: 3px solid #1a1009;\n    transform: translateY(-4px);\n}\n\n@keyframes fadeInUp {\n    from { opacity: 0; transform: translateY(30px); }\n    to { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\n/* ===== RESPONSIVE DESIGN ===== */\n\n/* Widescreen (1200px and up) */\n@media (min-width: 1200px) {\n    h1 {\n        font-size: 3.5rem;\n    }\n    \n    nav button {\n        margin: 1.5rem;\n        padding: 1.2rem 2.5rem;\n        font-size: 1.6rem;\n    }\n    \n    .footer {\n        padding: 2.5rem 2rem;\n    }\n    \n    .footer p {\n        font-size: 1.1rem;\n    }\n}\n\n/* Desktop (768px to 1199px) */\n@media (min-width: 768px) and (max-width: 1199px) {\n    h1 {\n        font-size: 2.8rem;\n    }\n    \n    nav button {\n        margin: 1rem;\n        padding: 1rem 2rem;\n        font-size: 1.4rem;\n    }\n    \n    .footer {\n        padding: 2rem 1.5rem;\n    }\n    \n    .footer p {\n        font-size: 1rem;\n    }\n}\n\n/* Tablet (481px to 767px) */\n@media (min-width: 481px) and (max-width: 767px) {\n    header {\n        padding: 0.8rem 0;\n    }\n    \n    h1 {\n        font-size: 2.2rem;\n        margin: 0.8rem 0;\n    }\n    \n    .nav-container nav {\n        flex-wrap: nowrap;\n        gap: 0.5rem;\n    }\n    \n    nav button {\n        margin: 0.5rem;\n        padding: 0.8rem 1.5rem;\n        font-size: 1.2rem;\n    }\n    \n    .footer {\n        padding: 1.5rem 1rem;\n    }\n    \n    .footer p {\n        font-size: 0.9rem;\n        margin: 0.4rem 0;\n    }\n}\n\n/* Phone (480px and below) */\n@media (max-width: 480px) {\n    header {\n        padding: 0.5rem 0;\n    }\n    \n    h1 {\n        font-size: 1.8rem;\n        margin: 0.5rem 0;\n    }\n    \n    .nav-container nav {\n        flex-direction: row;\n        justify-content: center;\n        gap: 0.3rem;\n    }\n    \n    nav button {\n        margin: 0.2rem;\n        padding: 0.6rem 0.8rem;\n        font-size: 0.9rem;\n        flex: 1;\n        max-width: 100px;\n        min-width: 70px;\n    }\n    \n    .footer {\n        padding: 1rem 0.5rem;\n    }\n    \n    .footer p {\n        font-size: 0.85rem;\n        margin: 0.3rem 0;\n        line-height: 1.4;\n    }\n    \n    .footer a {\n        display: inline-block;\n        padding: 0.2rem 0;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/contact/contact.css":
/*!*********************************!*\
  !*** ./src/contact/contact.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contact.css */ \"./node_modules/css-loader/dist/cjs.js!./src/contact/contact.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/contact/contact.css?\n}");

/***/ }),

/***/ "./src/contact/contact.js":
/*!********************************!*\
  !*** ./src/contact/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    // Create contact container\n    const contactContainer = document.createElement('div');\n    contactContainer.classList.add('contact-container');\n\n    // Create heading\n    const heading = document.createElement('h2');\n    heading.classList.add('form-h2');\n    heading.textContent = 'Send us your feedback';\n    contactContainer.appendChild(heading);\n\n    // Create form\n    const form = document.createElement('form');\n    form.id = 'feedback-form';\n    form.classList.add('feedback-form');\n\n    // Name field\n    const nameGroup = document.createElement('div');\n    nameGroup.classList.add('form-group');\n    const nameLabel = document.createElement('label');\n    nameLabel.setAttribute('for', 'name');\n    nameLabel.textContent = 'Name';\n    const nameInput = document.createElement('input');\n    nameInput.type = 'text';\n    nameInput.id = 'name';\n    nameInput.placeholder = 'Name';\n    nameInput.required = true;\n    nameGroup.appendChild(nameLabel);\n    nameGroup.appendChild(nameInput);\n    form.appendChild(nameGroup);\n\n    // Email field\n    const emailGroup = document.createElement('div');\n    emailGroup.classList.add('form-group');\n    const emailLabel = document.createElement('label');\n    emailLabel.setAttribute('for', 'email');\n    emailLabel.textContent = 'Email';\n    const emailInput = document.createElement('input');\n    emailInput.type = 'email';\n    emailInput.id = 'email';\n    emailInput.placeholder = 'Enter your email';\n    emailInput.required = true;\n    emailGroup.appendChild(emailLabel);\n    emailGroup.appendChild(emailInput);\n    form.appendChild(emailGroup);\n\n    // Message field\n    const messageTextarea = document.createElement('textarea');\n    messageTextarea.id = 'message';\n    messageTextarea.rows = 4;\n    messageTextarea.placeholder = 'Your message';\n    messageTextarea.required = true;\n    form.appendChild(messageTextarea);\n\n    // Submit button\n    const submitButton = document.createElement('button');\n    submitButton.type = 'submit';\n    submitButton.textContent = 'Submit';\n    form.appendChild(submitButton);\n\n    // Append form to contact container\n    contactContainer.appendChild(form);\n\n    return contactContainer;\n}\n\n\n// HTML Structure Reference i used, the idea for the project was to create everything using javascript DOM manipulation:\n/*<div class=\"contact-container\">\n    <h2 class=\"form-h2\">Send us your feedback</h2>\n    <form id=\"feedback-form\" class=\"feedback-form\">\n        <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" id=\"name\" placeholder=\"Name\" required />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" id=\"email\" placeholder=\"Enter your email\" required />\n        </div>\n        <textarea\n            id=\"message\"\n            rows=\"4\"\n            placeholder=\"Your message\"\n            required\n        ></textarea>\n        <button type=\"submit\">Submit</button>\n    </form>\n</div>*/\n\n//# sourceURL=webpack://top-restaurant-page/./src/contact/contact.js?\n}");

/***/ }),

/***/ "./src/home/home.css":
/*!***************************!*\
  !*** ./src/home/home.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ \"./node_modules/css-loader/dist/cjs.js!./src/home/home.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/home/home.css?\n}");

/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant.webp */ \"./src/home/images/restaurant.webp\");\n/* harmony import */ var _images_food_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/food.webp */ \"./src/home/images/food.webp\");\n\n\n\nfunction home() {\n    // Main image section\n    const mainImageDiv = document.createElement('div');\n    mainImageDiv.classList.add('main-image-div');\n\n    const restaurantImage = document.createElement('img');\n    restaurantImage.src = _images_restaurant_webp__WEBPACK_IMPORTED_MODULE_0__;\n    restaurantImage.alt = 'Restaurant Image';\n    restaurantImage.classList.add('restaurant-image');\n\n    const tagline = document.createElement('p');\n    tagline.textContent = 'Where Spanish tradition meets global innovation';\n\n    mainImageDiv.appendChild(restaurantImage);\n    mainImageDiv.appendChild(tagline);\n\n    // Info section\n    const infoSection = document.createElement('div');\n    infoSection.classList.add('info-section');\n\n    // Restaurant description\n    const restaurantDescription = document.createElement('div');\n    restaurantDescription.classList.add('restaurant-description');\n\n    const infoHeading = document.createElement('h2');\n    infoHeading.textContent = 'Experience Casa Serena, modern spanish food';\n\n    const infoTagline = document.createElement('p');\n    infoTagline.textContent = 'Where Spanish tradition meets global innovation';\n\n    const mainDescription = document.createElement('p');\n    mainDescription.textContent = 'Experience the finest Spanish cuisine with a modern twist in the heart of Barcelona. Our chefs blend traditional recipes with international flavors to create an unforgettable dining experience.';\n    \n    const location = document.createElement('p');\n    location.textContent = 'Barcelona City Center';\n\n    restaurantDescription.appendChild(infoHeading);\n    restaurantDescription.appendChild(infoTagline);\n    restaurantDescription.appendChild(mainDescription);\n    restaurantDescription.appendChild(location);\n\n    // Food image\n    const foodImage = document.createElement('img');\n    foodImage.src = _images_food_webp__WEBPACK_IMPORTED_MODULE_1__;\n    foodImage.alt = 'An example of our cuisine';\n    foodImage.classList.add('food-image');\n\n    infoSection.appendChild(restaurantDescription);\n    infoSection.appendChild(foodImage);\n\n    // Combine all sections\n    const homeContainer = document.createElement('div');\n    homeContainer.appendChild(mainImageDiv);\n    homeContainer.appendChild(infoSection);\n\n    return homeContainer;\n}\n\n//# sourceURL=webpack://top-restaurant-page/./src/home/home.js?\n}");

/***/ }),

/***/ "./src/home/images/food.webp":
/*!***********************************!*\
  !*** ./src/home/images/food.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"5590ba645dbaca09ea2d.webp\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/home/images/food.webp?\n}");

/***/ }),

/***/ "./src/home/images/restaurant.webp":
/*!*****************************************!*\
  !*** ./src/home/images/restaurant.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"365f9235ccb7d4220f10.webp\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/home/images/restaurant.webp?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.css */ \"./src/home/home.css\");\n/* harmony import */ var _contact_contact_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.css */ \"./src/contact/contact.css\");\n/* harmony import */ var _menu_menu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.css */ \"./src/menu/menu.css\");\n/* harmony import */ var _home_home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.js */ \"./src/home/home.js\");\n/* harmony import */ var _contact_contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.js */ \"./src/contact/contact.js\");\n/* harmony import */ var _menu_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.js */ \"./src/menu/menu.js\");\n\n\n\n\n\n\n\n\n\nconst content = document.getElementById(\"content\");\nconst homeBtn = document.getElementById(\"home-btn\");\nconst menuBtn = document.getElementById(\"menu-btn\");\n\n// Initial load\ncontent.appendChild((0,_home_home_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\n// Navigation setup for contact\nconst contactBtn = document.getElementById(\"contact-btn\");\ncontactBtn.addEventListener(\"click\", () => {\n    content.innerHTML = \"\";\n    content.appendChild((0,_contact_contact_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n    contactBtn.classList.add(\"button-active\");\n    menuBtn.classList.remove(\"button-active\");\n    homeBtn.classList.remove(\"button-active\");\n});\n\n// Navigation setup for home\nhomeBtn.addEventListener(\"click\", () => {\n    content.innerHTML = \"\";\n    content.appendChild((0,_home_home_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n    homeBtn.classList.add(\"button-active\");\n    menuBtn.classList.remove(\"button-active\");\n    contactBtn.classList.remove(\"button-active\");\n});\n\n// Navigation setup for menu\nmenuBtn.addEventListener(\"click\", () => {\n    content.innerHTML = \"\";\n    content.appendChild((0,_menu_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n    menuBtn.classList.add(\"button-active\");\n    homeBtn.classList.remove(\"button-active\");\n    contactBtn.classList.remove(\"button-active\");\n});\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu/images/churros.webp":
/*!**************************************!*\
  !*** ./src/menu/images/churros.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"976d063bbc2f63ee12ce.webp\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu/images/churros.webp?\n}");

/***/ }),

/***/ "./src/menu/images/croqueta.webp":
/*!***************************************!*\
  !*** ./src/menu/images/croqueta.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"e94610f1a7866ff3c980.webp\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu/images/croqueta.webp?\n}");

/***/ }),

/***/ "./src/menu/images/gambas.webp":
/*!*************************************!*\
  !*** ./src/menu/images/gambas.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"b67663c0ef80dd5103d4.webp\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu/images/gambas.webp?\n}");

/***/ }),

/***/ "./src/menu/images/gazpacho.webp":
/*!***************************************!*\
  !*** ./src/menu/images/gazpacho.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"4f34b7800c3f89445e86.webp\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu/images/gazpacho.webp?\n}");

/***/ }),

/***/ "./src/menu/images/paella-valenciana.webp":
/*!************************************************!*\
  !*** ./src/menu/images/paella-valenciana.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"90a935d31876b91eb124.webp\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu/images/paella-valenciana.webp?\n}");

/***/ }),

/***/ "./src/menu/images/patatas-bravas.webp":
/*!*********************************************!*\
  !*** ./src/menu/images/patatas-bravas.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"e9533b8ece65ebeed908.webp\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu/images/patatas-bravas.webp?\n}");

/***/ }),

/***/ "./src/menu/images/pulpo.webp":
/*!************************************!*\
  !*** ./src/menu/images/pulpo.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"f7af2e0134d8b4b2eef3.webp\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu/images/pulpo.webp?\n}");

/***/ }),

/***/ "./src/menu/images/spanish-tortilla.webp":
/*!***********************************************!*\
  !*** ./src/menu/images/spanish-tortilla.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"d026e143716a2859d53d.webp\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu/images/spanish-tortilla.webp?\n}");

/***/ }),

/***/ "./src/menu/menu.css":
/*!***************************!*\
  !*** ./src/menu/menu.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/menu/menu.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu/menu.css?\n}");

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _images_croqueta_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/croqueta.webp */ \"./src/menu/images/croqueta.webp\");\n/* harmony import */ var _images_churros_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/churros.webp */ \"./src/menu/images/churros.webp\");\n/* harmony import */ var _images_gambas_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/gambas.webp */ \"./src/menu/images/gambas.webp\");\n/* harmony import */ var _images_gazpacho_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/gazpacho.webp */ \"./src/menu/images/gazpacho.webp\");\n/* harmony import */ var _images_paella_valenciana_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/paella-valenciana.webp */ \"./src/menu/images/paella-valenciana.webp\");\n/* harmony import */ var _images_patatas_bravas_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/patatas-bravas.webp */ \"./src/menu/images/patatas-bravas.webp\");\n/* harmony import */ var _images_pulpo_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/pulpo.webp */ \"./src/menu/images/pulpo.webp\");\n/* harmony import */ var _images_spanish_tortilla_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/spanish-tortilla.webp */ \"./src/menu/images/spanish-tortilla.webp\");\n\n\n\n\n\n\n\n\n\nlet menuImages = [\n    _images_paella_valenciana_webp__WEBPACK_IMPORTED_MODULE_4__,\n    _images_spanish_tortilla_webp__WEBPACK_IMPORTED_MODULE_7__,\n    _images_patatas_bravas_webp__WEBPACK_IMPORTED_MODULE_5__,\n    _images_gambas_webp__WEBPACK_IMPORTED_MODULE_2__,\n    _images_croqueta_webp__WEBPACK_IMPORTED_MODULE_0__,\n    _images_gazpacho_webp__WEBPACK_IMPORTED_MODULE_3__,\n    _images_pulpo_webp__WEBPACK_IMPORTED_MODULE_6__,\n    _images_churros_webp__WEBPACK_IMPORTED_MODULE_1__,\n];\n\nclass MenuItem {\n    #name;\n    #description;\n    #price;\n\n    constructor(name, description, price) {\n        this.#name = name;\n        this.#description = description;\n        this.#price = price;\n    }\n\n    getName() {\n        return this.#name;\n    }\n    getDescription() {\n        return this.#description;\n    }\n    getPrice() {\n        return this.#price;\n    }\n}\n\nlet menuItems = [\n    new MenuItem(\n        \"Paella Valenciana\",\n        \"Traditional rice dish with saffron, chicken, rabbit, and seasonal vegetables (can be made seafood-style).\",\n        18.5\n    ),\n    new MenuItem(\n        \"Tortilla Española\",\n        \"Classic Spanish omelette with potatoes and onions, served warm or at room temperature.\",\n        7.0\n    ),\n    new MenuItem(\n        \"Patatas Bravas\",\n        \"Crispy potatoes served with a spicy tomato-brava sauce and alioli.\",\n        6.5\n    ),\n    new MenuItem(\n        \"Gambas al Ajillo\",\n        \"Sizzling garlic prawns cooked in olive oil with a hint of chili and fresh parsley.\",\n        12.0\n    ),\n    new MenuItem(\n        \"Croquetas de Jamón\",\n        \"Creamy ham croquettes, breaded and fried until golden — a popular tapa.\",\n        8.0\n    ),\n    new MenuItem(\n        \"Gazpacho\",\n        \"Refreshing chilled tomato and vegetable soup — perfect for warm days.\",\n        6.0\n    ),\n    new MenuItem(\n        \"Pulpo a la Gallega\",\n        \"Galician-style octopus with smoked paprika, olive oil and potatoes.\",\n        14.0\n    ),\n    new MenuItem(\n        \"Churros con Chocolate\",\n        \"Fried-dough pastry dusted with sugar and served with thick hot chocolate for dipping.\",\n        5.5\n    ),\n];\n\nfunction menu() {\n    // Create title\n    const title = document.createElement(\"h2\");\n    title.textContent = \"Our Menu\";\n    title.classList.add(\"menu-title\");\n\n    //Create menu section\n    const menuContainer = document.createElement(\"div\");\n    menuContainer.classList.add(\"menu-container\");\n\n    menuItems.forEach((item, index) => {\n        // Card title\n        const itemName = document.createElement(\"h3\");\n        itemName.textContent = item.getName();\n\n        // Image\n        const itemImage = document.createElement(\"img\");\n        itemImage.loading = \"lazy\";\n        itemImage.src = menuImages[index];\n        itemImage.alt = item.getName();\n        itemImage.classList.add(\"menu-image\");\n\n        // Card description\n        const itemDescription = document.createElement(\"p\");\n        itemDescription.textContent = item.getDescription();\n\n        // Price\n        const itemPrice = document.createElement(\"p\");\n        itemPrice.textContent = `€${item.getPrice()}`;\n\n        // Info div\n        const itemInfo = document.createElement(\"div\");\n        itemInfo.classList.add(\"menu-info\");\n        itemInfo.appendChild(itemDescription);\n        itemInfo.appendChild(itemPrice);\n\n        // Card div\n        const itemDiv = document.createElement(\"div\");\n        itemDiv.classList.add(\"menu-card\");\n\n        itemDiv.appendChild(itemName);\n        itemDiv.appendChild(itemImage);\n        itemDiv.appendChild(itemInfo);\n\n        menuContainer.appendChild(itemDiv);\n    });\n\n    const menuSection = document.createElement(\"div\");\n    menuSection.appendChild(title);\n    menuSection.appendChild(menuContainer);\n\n    return menuSection;\n}\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu/menu.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/styles.css?\n}");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;