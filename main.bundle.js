/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// require('./index.js')

	function Tile(x, y, height, width) {
	  this.x = x;
	  this.y = y;
	  this.height = 100;
	  this.width = 100;
	}

	// function moveRight() {};
	//
	// function moveLeft() {};
	//
	// function moveUp() {};
	//
	// function moveDown() {};

	// if the Tile has a position of 0,y it can't move left.
	// if the Tile has a position of 3,y it can't move right.
	// if the Tile has a position of x,0 it can't move up.
	// if the Tile has a position of x,3 it can't move down.

	// the Tile will have a tileValue property
	// The Tile  will have default tileValue of 2.
	//

/***/ }
/******/ ]);