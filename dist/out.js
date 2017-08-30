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

$(function () {
  console.log("JS ready...");

  var navbar = $('.navbar');
  var navbarLink = $('.nav a');
  var hamburgerLink = $('.hamburger a');
  var project = $('.project');
  var plusLink = $('.plus-link a');
  var toFadeIn = $('.toFadeIn');

  var lastScrollTop = 0;
  var step = 0;

  /**
  * -----------------------------------------------------------------------
  *                          Event: Scroll to links
  * -----------------------------------------------------------------------
  */

  navbarLink.on("click", function (e) {
    var _this = this;

    e.preventDefault();
    navbarLink.parent().addClass('hidden');
    setTimeout(function () {
      $('html, body').animate({
        scrollTop: $('.' + $(_this).attr('href')).offset().top - 25
      }, 1000);
    }, 1);
  });

  /**
  * -----------------------------------------------------------------------
  *                  Event: Navbar hiding on scrolling down
  * -----------------------------------------------------------------------
  */

  $(window).on('scroll', function (e) {
    currentScrollTop = $(this).scrollTop();
    var lastPosition = Number(navbar.css('top').replace('px', ''));
    var newPosition = lastPosition - step / 4;

    if (currentScrollTop < lastScrollTop) {
      // console.log('scroll up');
      newPosition = newPosition < 0 ? newPosition : 0;
    } else {
      // console.log('scroll down');
      navbarLink.parent().addClass('hidden');
      newPosition = -newPosition < navbar.outerHeight() ? newPosition : -navbar.outerHeight();
    }

    if ($(window).scrollTop() < 150) {
      // console.log('top of the page area');
      newPosition = 0;
    }

    navbar.css('top', newPosition + 'px');
    step = currentScrollTop - lastScrollTop;
    lastScrollTop = currentScrollTop;
  });

  /**
  * -----------------------------------------------------------------------
  *            Events: add/remove class hidden of navbar sections
  * -----------------------------------------------------------------------
  */

  hamburgerLink.on("click", function (e) {
    e.preventDefault();
    navbarLink.parent().toggleClass('hidden');
  });

  /**
  * -----------------------------------------------------------------------
  *            Events: add/remove class hidden of board elements
  * -----------------------------------------------------------------------
  */

  project.on("mouseover", function (e) {
    e.preventDefault();
    $(this).find(".board").removeClass('hidden');
  });

  project.on("mouseleave", function (e) {
    e.preventDefault();
    $(this).find(".board").addClass('hidden').find('.link').addClass('hidden').parent().find('.plus-link').removeClass('hidden');
  });

  plusLink.on("click", function (e) {
    e.preventDefault();
    $(this).parent().addClass('hidden').parent().find('.link').not('.plus-link').removeClass('hidden');
  });

  /**
  * -----------------------------------------------------------------------
  *                  Event: elements fadeIn on scrolling down
  * -----------------------------------------------------------------------
  */

  $(window).scroll(function () {

    toFadeIn.each(function (i) {
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();

      if (bottom_of_window > bottom_of_object - 150) {
        $(this).animate({
          'opacity': '1'
        }, 1500);
      }
    });
  });
});

/***/ })
/******/ ]);