"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PropertyListener = (function () {
  function PropertyListener(callback) {
    _classCallCheck(this, PropertyListener);

    this.on = true;
    this.callback = callback;
  }

  _createClass(PropertyListener, [{
    key: "call",
    value: function call() {
      var args = Array.prototype.slice.call(arguments);
      this.callback(args);
    }
  }, {
    key: "off",
    value: function off() {
      this.on = false;
    }
  }, {
    key: "on",
    value: function on() {
      this.on = true;
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.on;
    }
  }]);

  return PropertyListener;
})();

exports["default"] = PropertyListener;
module.exports = exports["default"];