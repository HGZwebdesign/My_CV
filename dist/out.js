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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

$(function(){console.log('JS ready...');var a=$('.navbar'),b=$('.nav a'),c=$('.hamburger a'),d=$('.project'),e=$('.plus-link a'),f=$('.toFadeIn'),g=0,h=0;c.on('click',function(a){a.preventDefault(),b.parent().toggleClass('hidden')}),d.on('mouseover',function(a){a.preventDefault();var b=$(this).find('.board');b.removeClass('hidden')}),d.on('mouseleave',function(a){a.preventDefault();var b=$(this).find('.board');b.addClass('hidden').find('.link').addClass('hidden').parent().find('.plus-link').removeClass('hidden')}),e.on('click',function(a){a.preventDefault(),$(this).parent().addClass('hidden').parent().find('.link').not('.plus-link').removeClass('hidden')}),b.on('click',function(a){var c=this;a.preventDefault(),b.parent().addClass('hidden'),setTimeout(function(){$('html, body').animate({scrollTop:$('.'+$(c).attr('href')).offset().top-25},1e3)},1)});var i=function(c){currentScrollTop=c.scrollTop();var d=+a.css('top').replace('px',''),e=d-h/4;currentScrollTop<g?e=0>e?e:0:(b.parent().addClass('hidden'),e=-e<a.outerHeight()?e:-a.outerHeight()),150>c.scrollTop()&&(e=0),a.css('top',e+'px'),h=currentScrollTop-g,g=currentScrollTop},j=function(){f.each(function(){var a=$(window).scrollTop()+$(window).height(),b=$(this).offset().top+$(this).outerHeight();a>b-150&&$(this).animate({opacity:'1'},1500)})};j(),$(window).on('scroll',function(){j(),i($(this))})});

/***/ })
/******/ ]);