/*!
 * Cropper v@VERSION
 * https://github.com/OddPrints/cropper forked from https://github.com/fengyuanchen/cropper
 *
 * Copyright (c) 2015-@YEAR OddPrints and contributors originally 2014-@YEAR Fengyuan Chen and contributors
 * Released under the MIT license
 *
 * Date: @DATE
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node / CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals.
    factory(jQuery);
  }
})(function ($) {

  'use strict';
