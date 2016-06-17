'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _propertyListener = require('property-listener');

var _propertyListener2 = _interopRequireDefault(_propertyListener);

var Model = (function () {
  function Model(props) {
    var _this = this;

    _classCallCheck(this, Model);

    this.props = {};
    this.listeners = {};
    var keys = Object.keys(props);
    keys.forEach(function (key) {
      return _this.props[key] = props[key];
    });
  }

  _createClass(Model, [{
    key: 'subscribe',
    value: function subscribe(prop, callback) {
      if (this.props[prop]) {
        if (!Array.isArray(this.listeners[prop])) {
          this.listeners[prop] = [];
        }
        this.listeners[prop].push(new _propertyListener2['default'](callback));
      }
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(prop, callback) {
      if (Array.isArray(this.listeners[prop])) {
        this.listeners[prop].forEach(function (listener) {
          if (listener.callback === callback) {
            listener.off();
          }
        });
      }
    }
  }, {
    key: 'notify',
    value: function notify(prop, value) {
      var listeners = this.listeners[prop].filter(function (listener) {
        return listener.isActive();
      });
      listeners.forEach(function (listener) {
        return listener.call(value);
      });
    }
  }, {
    key: 'set',
    value: function set(prop, value) {
      this.props[prop] = value;
      this.notify(prop, value);
    }
  }, {
    key: 'get',
    value: function get(prop) {
      return this.props[prop];
    }
  }]);

  return Model;
})();

exports['default'] = Model;
module.exports = exports['default'];