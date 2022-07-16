import { h } from './index-b1d1dbc1.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getDefaultExportFromNamespaceIfPresent (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var svgson_umd = createCommonjsModule(function (module, exports) {
(function (global, factory) {
  'object' === 'object' && 'object' !== 'undefined' ? module.exports = factory() :
  typeof undefined === 'function' && undefined.amd ? undefined(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.svgson = factory());
}(commonjsGlobal, (function () { 'use strict';

  /*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */

  var isobject$1 = function isObject(val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
  };

  function isObjectObject(o) {
    return isobject$1(o) === true
      && Object.prototype.toString.call(o) === '[object Object]';
  }

  var isPlainObject = function isPlainObject(o) {
    var ctor,prot;

    if (isObjectObject(o) === false) return false;

    // If has modified constructor
    ctor = o.constructor;
    if (typeof ctor !== 'function') return false;

    // If has modified prototype
    prot = ctor.prototype;
    if (isObjectObject(prot) === false) return false;

    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
      return false;
    }

    // Most likely a plain Object
    return true;
  };

  var toString$2 = {}.toString;

  var isarray = Array.isArray || function (arr) {
    return toString$2.call(arr) == '[object Array]';
  };

  var isobject = function isObject(val) {
    return val != null && typeof val === 'object' && isarray(val) === false;
  };

  /*!
   * has-values <https://github.com/jonschlinkert/has-values>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   */

  var hasValues = function hasValue(o, noZero) {
    if (o === null || o === undefined) {
      return false;
    }

    if (typeof o === 'boolean') {
      return true;
    }

    if (typeof o === 'number') {
      if (o === 0 && noZero === true) {
        return false;
      }
      return true;
    }

    if (o.length !== undefined) {
      return o.length !== 0;
    }

    for (var key in o) {
      if (o.hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  };

  /*!
   * get-value <https://github.com/jonschlinkert/get-value>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   */

  var getValue = function(obj, prop, a, b, c) {
    if (!isObject(obj) || !prop) {
      return obj;
    }

    prop = toString$1(prop);

    // allowing for multiple properties to be passed as
    // a string or array, but much faster (3-4x) than doing
    // `[].slice.call(arguments)`
    if (a) prop += '.' + toString$1(a);
    if (b) prop += '.' + toString$1(b);
    if (c) prop += '.' + toString$1(c);

    if (prop in obj) {
      return obj[prop];
    }

    var segs = prop.split('.');
    var len = segs.length;
    var i = -1;

    while (obj && (++i < len)) {
      var key = segs[i];
      while (key[key.length - 1] === '\\') {
        key = key.slice(0, -1) + '.' + segs[++i];
      }
      obj = obj[key];
    }
    return obj;
  };

  function isObject(val) {
    return val !== null && (typeof val === 'object' || typeof val === 'function');
  }

  function toString$1(val) {
    if (!val) return '';
    if (Array.isArray(val)) {
      return val.join('.');
    }
    return val;
  }

  var hasValue = function(obj, prop, noZero) {
    if (isobject(obj)) {
      return hasValues(getValue(obj, prop), noZero);
    }
    return hasValues(obj, prop);
  };

  var unsetValue = function unset(obj, prop) {
    if (!isobject$1(obj)) {
      throw new TypeError('expected an object.');
    }
    if (obj.hasOwnProperty(prop)) {
      delete obj[prop];
      return true;
    }

    if (hasValue(obj, prop)) {
      var segs = prop.split('.');
      var last = segs.pop();
      while (segs.length && segs[segs.length - 1].slice(-1) === '\\') {
        last = segs.pop().slice(0, -1) + '.' + last;
      }
      while (segs.length) obj = obj[prop = segs.shift()];
      return (delete obj[last]);
    }
    return true;
  };

  var omitDeep = function omitDeep(value, keys) {
    if (typeof value === 'undefined') {
      return {};
    }

    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        value[i] = omitDeep(value[i], keys);
      }
      return value;
    }

    if (!isPlainObject(value)) {
      return value;
    }

    if (typeof keys === 'string') {
      keys = [keys];
    }

    if (!Array.isArray(keys)) {
      return value;
    }

    for (var j = 0; j < keys.length; j++) {
      unsetValue(value, keys[j]);
    }

    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        value[key] = omitDeep(value[key], keys);
      }
    }

    return value;
  };

  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */

  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually
  var isBuffer_1 = function (obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
  };

  function isBuffer (obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
  }

  // For Node v0.10 support. Remove this eventually.
  function isSlowBuffer (obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
  }

  var toString = Object.prototype.toString;

  /**
   * Get the native `typeof` a value.
   *
   * @param  {*} `val`
   * @return {*} Native javascript type
   */

  var kindOf = function kindOf(val) {
    // primitivies
    if (typeof val === 'undefined') {
      return 'undefined';
    }
    if (val === null) {
      return 'null';
    }
    if (val === true || val === false || val instanceof Boolean) {
      return 'boolean';
    }
    if (typeof val === 'string' || val instanceof String) {
      return 'string';
    }
    if (typeof val === 'number' || val instanceof Number) {
      return 'number';
    }

    // functions
    if (typeof val === 'function' || val instanceof Function) {
      return 'function';
    }

    // array
    if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
      return 'array';
    }

    // check for instances of RegExp and Date before calling `toString`
    if (val instanceof RegExp) {
      return 'regexp';
    }
    if (val instanceof Date) {
      return 'date';
    }

    // other objects
    var type = toString.call(val);

    if (type === '[object RegExp]') {
      return 'regexp';
    }
    if (type === '[object Date]') {
      return 'date';
    }
    if (type === '[object Arguments]') {
      return 'arguments';
    }
    if (type === '[object Error]') {
      return 'error';
    }

    // buffer
    if (isBuffer_1(val)) {
      return 'buffer';
    }

    // es6: Map, WeakMap, Set, WeakSet
    if (type === '[object Set]') {
      return 'set';
    }
    if (type === '[object WeakSet]') {
      return 'weakset';
    }
    if (type === '[object Map]') {
      return 'map';
    }
    if (type === '[object WeakMap]') {
      return 'weakmap';
    }
    if (type === '[object Symbol]') {
      return 'symbol';
    }

    // typed arrays
    if (type === '[object Int8Array]') {
      return 'int8array';
    }
    if (type === '[object Uint8Array]') {
      return 'uint8array';
    }
    if (type === '[object Uint8ClampedArray]') {
      return 'uint8clampedarray';
    }
    if (type === '[object Int16Array]') {
      return 'int16array';
    }
    if (type === '[object Uint16Array]') {
      return 'uint16array';
    }
    if (type === '[object Int32Array]') {
      return 'int32array';
    }
    if (type === '[object Uint32Array]') {
      return 'uint32array';
    }
    if (type === '[object Float32Array]') {
      return 'float32array';
    }
    if (type === '[object Float64Array]') {
      return 'float64array';
    }

    // must be a plain object
    return 'object';
  };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var renameKeys = createCommonjsModule(function (module) {
  (function() {

    function rename(obj, fn) {
      if (typeof fn !== 'function') {
        return obj;
      }

      var res = {};
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          res[fn(key, obj[key]) || key] = obj[key];
        }
      }
      return res;
    }

    if (module.exports) {
      module.exports = rename;
    } else {
      {
        window.rename = rename;
      }
    }
  })();
  });

  /**
   * Expose `renameDeep`
   */

  var deepRenameKeys = function renameDeep(obj, cb) {
    var type = kindOf(obj);

    if (type !== 'object' && type !== 'array') {
      throw new Error('expected an object');
    }

    var res = [];
    if (type === 'object') {
      obj = renameKeys(obj, cb);
      res = {};
    }

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var val = obj[key];
        if (kindOf(val) === 'object' || kindOf(val) === 'array') {
          res[key] = renameDeep(val, cb);
        } else {
          res[key] = val;
        }
      }
    }
    return res;
  };

  var eventemitter3 = createCommonjsModule(function (module) {

  var has = Object.prototype.hasOwnProperty
    , prefix = '~';

  /**
   * Constructor to create a storage for our `EE` objects.
   * An `Events` instance is a plain object whose properties are event names.
   *
   * @constructor
   * @api private
   */
  function Events() {}

  //
  // We try to not inherit from `Object.prototype`. In some engines creating an
  // instance in this way is faster than calling `Object.create(null)` directly.
  // If `Object.create(null)` is not supported we prefix the event names with a
  // character to make sure that the built-in object properties are not
  // overridden or used as an attack vector.
  //
  if (Object.create) {
    Events.prototype = Object.create(null);

    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
  }

  /**
   * Representation of a single event listener.
   *
   * @param {Function} fn The listener function.
   * @param {Mixed} context The context to invoke the listener with.
   * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
   * @constructor
   * @api private
   */
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }

  /**
   * Minimal `EventEmitter` interface that is molded against the Node.js
   * `EventEmitter` interface.
   *
   * @constructor
   * @api public
   */
  function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
  }

  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   *
   * @returns {Array}
   * @api public
   */
  EventEmitter.prototype.eventNames = function eventNames() {
    var names = []
      , events
      , name;

    if (this._eventsCount === 0) return names;

    for (name in (events = this._events)) {
      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }

    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }

    return names;
  };

  /**
   * Return the listeners registered for a given event.
   *
   * @param {String|Symbol} event The event name.
   * @param {Boolean} exists Only check if there are listeners.
   * @returns {Array|Boolean}
   * @api public
   */
  EventEmitter.prototype.listeners = function listeners(event, exists) {
    var evt = prefix ? prefix + event : event
      , available = this._events[evt];

    if (exists) return !!available;
    if (!available) return [];
    if (available.fn) return [available.fn];

    for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
      ee[i] = available[i].fn;
    }

    return ee;
  };

  /**
   * Calls each of the listeners registered for a given event.
   *
   * @param {String|Symbol} event The event name.
   * @returns {Boolean} `true` if the event had listeners, else `false`.
   * @api public
   */
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return false;

    var listeners = this._events[evt]
      , len = arguments.length
      , args
      , i;

    if (listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

      switch (len) {
        case 1: return listeners.fn.call(listeners.context), true;
        case 2: return listeners.fn.call(listeners.context, a1), true;
        case 3: return listeners.fn.call(listeners.context, a1, a2), true;
        case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }

      for (i = 1, args = new Array(len -1); i < len; i++) {
        args[i - 1] = arguments[i];
      }

      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length
        , j;

      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

        switch (len) {
          case 1: listeners[i].fn.call(listeners[i].context); break;
          case 2: listeners[i].fn.call(listeners[i].context, a1); break;
          case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
          case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
          default:
            if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
              args[j - 1] = arguments[j];
            }

            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }

    return true;
  };

  /**
   * Add a listener for a given event.
   *
   * @param {String|Symbol} event The event name.
   * @param {Function} fn The listener function.
   * @param {Mixed} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @api public
   */
  EventEmitter.prototype.on = function on(event, fn, context) {
    var listener = new EE(fn, context || this)
      , evt = prefix ? prefix + event : event;

    if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
    else if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [this._events[evt], listener];

    return this;
  };

  /**
   * Add a one-time listener for a given event.
   *
   * @param {String|Symbol} event The event name.
   * @param {Function} fn The listener function.
   * @param {Mixed} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @api public
   */
  EventEmitter.prototype.once = function once(event, fn, context) {
    var listener = new EE(fn, context || this, true)
      , evt = prefix ? prefix + event : event;

    if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
    else if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [this._events[evt], listener];

    return this;
  };

  /**
   * Remove the listeners of a given event.
   *
   * @param {String|Symbol} event The event name.
   * @param {Function} fn Only remove the listeners that match this function.
   * @param {Mixed} context Only remove the listeners that have this context.
   * @param {Boolean} once Only remove one-time listeners.
   * @returns {EventEmitter} `this`.
   * @api public
   */
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return this;
    if (!fn) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
      return this;
    }

    var listeners = this._events[evt];

    if (listeners.fn) {
      if (
           listeners.fn === fn
        && (!once || listeners.once)
        && (!context || listeners.context === context)
      ) {
        if (--this._eventsCount === 0) this._events = new Events();
        else delete this._events[evt];
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (
             listeners[i].fn !== fn
          || (once && !listeners[i].once)
          || (context && listeners[i].context !== context)
        ) {
          events.push(listeners[i]);
        }
      }

      //
      // Reset the array, or remove it completely if we have no more listeners.
      //
      if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
      else if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }

    return this;
  };

  /**
   * Remove all listeners, or those of the specified event.
   *
   * @param {String|Symbol} [event] The event name.
   * @returns {EventEmitter} `this`.
   * @api public
   */
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;

    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) {
        if (--this._eventsCount === 0) this._events = new Events();
        else delete this._events[evt];
      }
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }

    return this;
  };

  //
  // Alias methods names because people roll like that.
  //
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  //
  // This function doesn't apply anymore.
  //
  EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
    return this;
  };

  //
  // Expose the prefix.
  //
  EventEmitter.prefixed = prefix;

  //
  // Allow `EventEmitter` to be imported as module namespace.
  //
  EventEmitter.EventEmitter = EventEmitter;

  //
  // Expose the module.
  //
  {
    module.exports = EventEmitter;
  }
  });

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


  var noop = function noop() {};

  var State = {
      data: 'state-data',
      cdata: 'state-cdata',
      tagBegin: 'state-tag-begin',
      tagName: 'state-tag-name',
      tagEnd: 'state-tag-end',
      attributeNameStart: 'state-attribute-name-start',
      attributeName: 'state-attribute-name',
      attributeNameEnd: 'state-attribute-name-end',
      attributeValueBegin: 'state-attribute-value-begin',
      attributeValue: 'state-attribute-value'
  };

  var Action = {
      lt: 'action-lt',
      gt: 'action-gt',
      space: 'action-space',
      equal: 'action-equal',
      quote: 'action-quote',
      slash: 'action-slash',
      char: 'action-char',
      error: 'action-error'
  };

  var Type$1 = {
      text: 'text',
      openTag: 'open-tag',
      closeTag: 'close-tag',
      attributeName: 'attribute-name',
      attributeValue: 'attribute-value'
  };

  var charToAction = {
      ' ': Action.space,
      '\t': Action.space,
      '\n': Action.space,
      '\r': Action.space,
      '<': Action.lt,
      '>': Action.gt,
      '"': Action.quote,
      "'": Action.quote,
      '=': Action.equal,
      '/': Action.slash
  };

  var getAction = function getAction(char) {
      return charToAction[char] || Action.char;
  };

  /**
   * @param  {Object} options
   * @param  {Boolean} options.debug
   * @return {Object}
   */
  var create$1 = function create(options) {
      var _State$data, _State$tagBegin, _State$tagName, _State$tagEnd, _State$attributeNameS, _State$attributeName, _State$attributeNameE, _State$attributeValue, _State$attributeValue2, _lexer$stateMachine;

      options = Object.assign({ debug: false }, options);
      var lexer = new eventemitter3();
      var state = State.data;
      var data = '';
      var tagName = '';
      var attrName = '';
      var attrValue = '';
      var isClosing = '';
      var openingQuote = '';

      var emit = function emit(type, value) {
          // for now, ignore tags like: '?xml', '!DOCTYPE' or comments
          if (tagName[0] === '?' || tagName[0] === '!') {
              return;
          }
          var event = { type: type, value: value };
          if (options.debug) {
              console.log('emit:', event);
          }
          lexer.emit('data', event);
      };

      lexer.stateMachine = (_lexer$stateMachine = {}, _defineProperty(_lexer$stateMachine, State.data, (_State$data = {}, _defineProperty(_State$data, Action.lt, function () {
          if (data.trim()) {
              emit(Type$1.text, data);
          }
          tagName = '';
          isClosing = false;
          state = State.tagBegin;
      }), _defineProperty(_State$data, Action.char, function (char) {
          data += char;
      }), _State$data)), _defineProperty(_lexer$stateMachine, State.cdata, _defineProperty({}, Action.char, function (char) {
          data += char;
          if (data.substr(-3) === ']]>') {
              emit(Type$1.text, data.slice(0, -3));
              data = '';
              state = State.data;
          }
      })), _defineProperty(_lexer$stateMachine, State.tagBegin, (_State$tagBegin = {}, _defineProperty(_State$tagBegin, Action.space, noop), _defineProperty(_State$tagBegin, Action.char, function (char) {
          tagName = char;
          state = State.tagName;
      }), _defineProperty(_State$tagBegin, Action.slash, function () {
          tagName = '';
          isClosing = true;
      }), _State$tagBegin)), _defineProperty(_lexer$stateMachine, State.tagName, (_State$tagName = {}, _defineProperty(_State$tagName, Action.space, function () {
          if (isClosing) {
              state = State.tagEnd;
          } else {
              state = State.attributeNameStart;
              emit(Type$1.openTag, tagName);
          }
      }), _defineProperty(_State$tagName, Action.gt, function () {
          if (isClosing) {
              emit(Type$1.closeTag, tagName);
          } else {
              emit(Type$1.openTag, tagName);
          }
          data = '';
          state = State.data;
      }), _defineProperty(_State$tagName, Action.slash, function () {
          state = State.tagEnd;
          emit(Type$1.openTag, tagName);
      }), _defineProperty(_State$tagName, Action.char, function (char) {
          tagName += char;
          if (tagName === '![CDATA[') {
              state = State.cdata;
              data = '';
              tagName = '';
          }
      }), _State$tagName)), _defineProperty(_lexer$stateMachine, State.tagEnd, (_State$tagEnd = {}, _defineProperty(_State$tagEnd, Action.gt, function () {
          emit(Type$1.closeTag, tagName);
          data = '';
          state = State.data;
      }), _defineProperty(_State$tagEnd, Action.char, noop), _State$tagEnd)), _defineProperty(_lexer$stateMachine, State.attributeNameStart, (_State$attributeNameS = {}, _defineProperty(_State$attributeNameS, Action.char, function (char) {
          attrName = char;
          state = State.attributeName;
      }), _defineProperty(_State$attributeNameS, Action.gt, function () {
          data = '';
          state = State.data;
      }), _defineProperty(_State$attributeNameS, Action.space, noop), _defineProperty(_State$attributeNameS, Action.slash, function () {
          isClosing = true;
          state = State.tagEnd;
      }), _State$attributeNameS)), _defineProperty(_lexer$stateMachine, State.attributeName, (_State$attributeName = {}, _defineProperty(_State$attributeName, Action.space, function () {
          state = State.attributeNameEnd;
      }), _defineProperty(_State$attributeName, Action.equal, function () {
          emit(Type$1.attributeName, attrName);
          state = State.attributeValueBegin;
      }), _defineProperty(_State$attributeName, Action.gt, function () {
          attrValue = '';
          emit(Type$1.attributeName, attrName);
          emit(Type$1.attributeValue, attrValue);
          data = '';
          state = State.data;
      }), _defineProperty(_State$attributeName, Action.slash, function () {
          isClosing = true;
          attrValue = '';
          emit(Type$1.attributeName, attrName);
          emit(Type$1.attributeValue, attrValue);
          state = State.tagEnd;
      }), _defineProperty(_State$attributeName, Action.char, function (char) {
          attrName += char;
      }), _State$attributeName)), _defineProperty(_lexer$stateMachine, State.attributeNameEnd, (_State$attributeNameE = {}, _defineProperty(_State$attributeNameE, Action.space, noop), _defineProperty(_State$attributeNameE, Action.equal, function () {
          emit(Type$1.attributeName, attrName);
          state = State.attributeValueBegin;
      }), _defineProperty(_State$attributeNameE, Action.gt, function () {
          attrValue = '';
          emit(Type$1.attributeName, attrName);
          emit(Type$1.attributeValue, attrValue);
          data = '';
          state = State.data;
      }), _defineProperty(_State$attributeNameE, Action.char, function (char) {
          attrValue = '';
          emit(Type$1.attributeName, attrName);
          emit(Type$1.attributeValue, attrValue);
          attrName = char;
          state = State.attributeName;
      }), _State$attributeNameE)), _defineProperty(_lexer$stateMachine, State.attributeValueBegin, (_State$attributeValue = {}, _defineProperty(_State$attributeValue, Action.space, noop), _defineProperty(_State$attributeValue, Action.quote, function (char) {
          openingQuote = char;
          attrValue = '';
          state = State.attributeValue;
      }), _defineProperty(_State$attributeValue, Action.gt, function () {
          attrValue = '';
          emit(Type$1.attributeValue, attrValue);
          data = '';
          state = State.data;
      }), _defineProperty(_State$attributeValue, Action.char, function (char) {
          openingQuote = '';
          attrValue = char;
          state = State.attributeValue;
      }), _State$attributeValue)), _defineProperty(_lexer$stateMachine, State.attributeValue, (_State$attributeValue2 = {}, _defineProperty(_State$attributeValue2, Action.space, function (char) {
          if (openingQuote) {
              attrValue += char;
          } else {
              emit(Type$1.attributeValue, attrValue);
              state = State.attributeNameStart;
          }
      }), _defineProperty(_State$attributeValue2, Action.quote, function (char) {
          if (openingQuote === char) {
              emit(Type$1.attributeValue, attrValue);
              state = State.attributeNameStart;
          } else {
              attrValue += char;
          }
      }), _defineProperty(_State$attributeValue2, Action.gt, function (char) {
          if (openingQuote) {
              attrValue += char;
          } else {
              emit(Type$1.attributeValue, attrValue);
              data = '';
              state = State.data;
          }
      }), _defineProperty(_State$attributeValue2, Action.slash, function (char) {
          if (openingQuote) {
              attrValue += char;
          } else {
              emit(Type$1.attributeValue, attrValue);
              isClosing = true;
              state = State.tagEnd;
          }
      }), _defineProperty(_State$attributeValue2, Action.char, function (char) {
          attrValue += char;
      }), _State$attributeValue2)), _lexer$stateMachine);

      var step = function step(char) {
          if (options.debug) {
              console.log(state, char);
          }
          var actions = lexer.stateMachine[state];
          var action = actions[getAction(char)] || actions[Action.error] || actions[Action.char];
          action(char);
      };

      lexer.write = function (str) {
          var len = str.length;
          for (var i = 0; i < len; i++) {
              step(str[i]);
          }
      };

      return lexer;
  };

  var lexer = {
      State: State,
      Action: Action,
      Type: Type$1,
      create: create$1
  };

  var Type = lexer.Type;

  var NodeType = {
      element: 'element',
      text: 'text'
  };

  var createNode = function createNode(params) {
      return Object.assign({
          name: '',
          type: NodeType.element,
          value: '',
          parent: null,
          attributes: {},
          children: []
      }, params);
  };

  var create = function create(options) {
      options = Object.assign({
          stream: false,
          parentNodes: true,
          doneEvent: 'done',
          tagPrefix: 'tag:',
          emitTopLevelOnly: false,
          debug: false
      }, options);

      var lexer$1 = void 0,
          rootNode = void 0,
          current = void 0,
          attrName = void 0;

      var reader = new eventemitter3();

      var handleLexerData = function handleLexerData(data) {
          switch (data.type) {

              case Type.openTag:
                  if (current === null) {
                      current = rootNode;
                      current.name = data.value;
                  } else {
                      var node = createNode({
                          name: data.value,
                          parent: current
                      });
                      current.children.push(node);
                      current = node;
                  }
                  break;

              case Type.closeTag:
                  var parent = current.parent;
                  if (!options.parentNodes) {
                      current.parent = null;
                  }
                  if (current.name !== data.value) {
                      // ignore unexpected closing tag
                      break;
                  }
                  if (options.stream && parent === rootNode) {
                      rootNode.children = [];
                      // do not expose parent node in top level nodes
                      current.parent = null;
                  }
                  if (!options.emitTopLevelOnly || parent === rootNode) {
                      reader.emit(options.tagPrefix + current.name, current);
                      reader.emit('tag', current.name, current);
                  }
                  if (current === rootNode) {
                      // end of document, stop listening
                      lexer$1.removeAllListeners('data');
                      reader.emit(options.doneEvent, current);
                      rootNode = null;
                  }
                  current = parent;
                  break;

              case Type.text:
                  if (current) {
                      current.children.push(createNode({
                          type: NodeType.text,
                          value: data.value,
                          parent: options.parentNodes ? current : null
                      }));
                  }
                  break;

              case Type.attributeName:
                  attrName = data.value;
                  current.attributes[attrName] = '';
                  break;

              case Type.attributeValue:
                  current.attributes[attrName] = data.value;
                  break;
          }
      };

      reader.reset = function () {
          lexer$1 = lexer.create({ debug: options.debug });
          lexer$1.on('data', handleLexerData);
          rootNode = createNode();
          current = null;
          attrName = '';
          reader.parse = lexer$1.write;
      };

      reader.reset();
      return reader;
  };

  var parseSync = function parseSync(xml, options) {
      options = Object.assign({}, options, { stream: false, tagPrefix: ':' });
      var reader = create(options);
      var res = void 0;
      reader.on('done', function (ast) {
          res = ast;
      });
      reader.parse(xml);
      return res;
  };

  var reader = {
      parseSync: parseSync,
      create: create,
      NodeType: NodeType
  };
  var reader_1 = reader.parseSync;

  var parseInput = function parseInput(input) {
    var parsed = reader_1("<root>".concat(input, "</root>"), {
      parentNodes: false
    });
    var isValid = parsed.children && parsed.children.length > 0 && parsed.children.every(function (node) {
      return node.name === 'svg';
    });

    if (isValid) {
      return parsed.children.length === 1 ? parsed.children[0] : parsed.children;
    } else {
      throw Error('nothing to parse');
    }
  };
  var removeAttrs = function removeAttrs(obj) {
    return omitDeep(obj, ['parent']);
  };
  var camelize = function camelize(node) {
    return deepRenameKeys(node, function (key) {
      if (!notCamelcase(key)) {
        return toCamelCase(key);
      }

      return key;
    });
  };
  var toCamelCase = function toCamelCase(prop) {
    return prop.replace(/[-|:]([a-z])/gi, function (all, letter) {
      return letter.toUpperCase();
    });
  };

  var notCamelcase = function notCamelcase(prop) {
    return /^(data|aria)(-\w+)/.test(prop);
  };

  var escapeText = function escapeText(text) {
    if (text) {
      var str = String(text);
      return /[&<>]/.test(str) ? "<![CDATA[".concat(str.replace(/]]>/, ']]]]><![CDATA[>'), "]]>") : str;
    }

    return '';
  };
  var escapeAttr = function escapeAttr(attr) {
    return String(attr).replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  var svgsonSync = function svgsonSync(input) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$transformNode = _ref.transformNode,
        transformNode = _ref$transformNode === void 0 ? function (node) {
      return node;
    } : _ref$transformNode,
        _ref$camelcase = _ref.camelcase,
        camelcase = _ref$camelcase === void 0 ? false : _ref$camelcase;

    var applyFilters = function applyFilters(input) {
      var n;
      n = removeAttrs(input);
      n = transformNode(n);

      if (camelcase) {
        n = camelize(n);
      }

      return n;
    };

    return applyFilters(parseInput(input));
  };
  function svgson() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      try {
        var res = svgsonSync.apply(void 0, args);
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  var stringify = function stringify(_ast) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$transformAttr = _ref.transformAttr,
        transformAttr = _ref$transformAttr === void 0 ? function (key, value, escape) {
      return "".concat(key, "=\"").concat(escape(value), "\"");
    } : _ref$transformAttr,
        _ref$transformNode = _ref.transformNode,
        transformNode = _ref$transformNode === void 0 ? function (node) {
      return node;
    } : _ref$transformNode,
        _ref$selfClose = _ref.selfClose,
        selfClose = _ref$selfClose === void 0 ? true : _ref$selfClose;

    if (Array.isArray(_ast)) {
      return _ast.map(function (ast) {
        return stringify(ast, {
          transformAttr: transformAttr,
          selfClose: selfClose,
          transformNode: transformNode
        });
      }).join('');
    }

    var ast = transformNode(_ast);

    if (ast.type === 'text') {
      return escapeText(ast.value);
    }

    var attributes = '';

    for (var attr in ast.attributes) {
      var attrStr = transformAttr(attr, ast.attributes[attr], escapeAttr, ast.name);
      attributes += attrStr ? " ".concat(attrStr) : '';
    }

    return ast.children && ast.children.length > 0 || !selfClose ? "<".concat(ast.name).concat(attributes, ">").concat(stringify(ast.children, {
      transformAttr: transformAttr,
      transformNode: transformNode,
      selfClose: selfClose
    }), "</").concat(ast.name, ">") : "<".concat(ast.name).concat(attributes, "/>");
  };

  var indexUmd = Object.assign({}, {
    parse: svgson,
    parseSync: svgsonSync,
    stringify: stringify
  });

  return indexUmd;

})));
});

function getOutStyle({ color, rotate, opacity, size }) {
  const styleConfig = {
    display: "inline-block",
    color,
    opacity,
    width: `${size}px`,
    height: `${size}px`
  };
  if (Number.isSafeInteger(rotate)) {
    styleConfig.transform = `rotate(${rotate}deg)`;
  }
  return styleConfig;
}
const Icons = (props) => {
  const { svgData, size, spin, color } = props;
  svgData.attributes = Object.assign(Object.assign({}, svgData.attributes), { width: size, height: size, fill: color });
  const outStyle = getOutStyle(props);
  return (h("span", { class: `svg-wrap ${spin ? 'gf-icon-loading' : ''}`, innerHTML: svgson_umd.stringify(svgData), style: outStyle }));
};

const svgData$G = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M330.666667 768a53.333333 53.333333 0 1 1 0 106.666667 53.333333 53.333333 0 0 1 0-106.666667z m384 0a53.333333 53.333333 0 1 1 0 106.666667 53.333333 53.333333 0 0 1 0-106.666667zM94.762667 160h54.741333a96 96 0 0 1 92.906667 71.786667l1.024 4.394666L256.64 298.666667 796.096 298.666667a64 64 0 0 1 62.677333 76.949333l-61.653333 298.666667A64 64 0 0 1 734.442667 725.333333H332.224a64 64 0 0 1-62.677333-51.050666l-60.586667-293.418667-0.405333 0.085333-27.733334-131.562666a32 32 0 0 0-28.309333-25.237334l-2.986667-0.149333H94.741333v-64h54.741334zM565.333333 405.333333h-64v74.666667H426.666667v64h74.666666V618.666667h64v-74.666667H640v-64h-74.666667V405.333333z"},"children":[]}],"_name":"add-cart-fill","_isColor":false};

const svgData$F = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m32 170.666667h-64v159.978667L320 480v64l160-0.021333V704h64v-160H704v-64h-160V320z"},"children":[]}],"_name":"add-fill","_isColor":false};

const svgData$E = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M544 213.333333v266.666667H810.666667v64H544V810.666667h-64V544H213.333333v-64h266.666667V213.333333z"},"children":[]}],"_name":"add-select","_isColor":false};

const svgData$D = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M500.8 604.779L267.307 371.392l-45.227 45.27 278.741 278.613L779.307 416.66l-45.248-45.248z"},"children":[]}],"_name":"arrow-down","_isColor":false};

const svgData$C = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M641.28 278.613333l-45.226667-45.226666-278.634666 278.762666 278.613333 278.485334 45.248-45.269334-233.365333-233.237333z"},"children":[]}],"_name":"arrow-left","_isColor":false};

const svgData$B = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M593.450667 512.128L360.064 278.613333l45.290667-45.226666 278.613333 278.762666L405.333333 790.613333l-45.226666-45.269333z"},"children":[]}],"_name":"arrow-right","_isColor":false};

const svgData$A = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M500.8 461.909333L267.306667 695.296l-45.226667-45.269333 278.741333-278.613334L779.306667 650.026667l-45.248 45.226666z"},"children":[]}],"_name":"arrow-up","_isColor":false};

const svgData$z = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M853.333333 448v341.333333a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V448h682.666666z m-448 192h-106.666666v64h106.666666v-64z m160 0h-106.666666v64h106.666666v-64z m160 0h-106.666666v64h106.666666v-64z m-320-128h-106.666666v64h106.666666v-64z m160 0h-106.666666v64h106.666666v-64z m160 0h-106.666666v64h106.666666v-64zM234.666667 213.333333h64v106.666667h138.666666v-106.666667H597.333333v106.666667h138.666667v-106.666667H789.333333a64 64 0 0 1 64 64v106.666667H170.666667v-106.666667a64 64 0 0 1 64-64z m463.061333-42.666666v106.666666h-64V170.666667h64zM396.544 170.666667v106.666666h-64V170.666667h64z"},"children":[]}],"_name":"calendar-fill","_isColor":false};

const svgData$y = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#FCA77E","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M266.24 307.2m40.96 0l471.04 0q40.96 0 40.96 40.96l0 286.72q0 40.96-40.96 40.96l-471.04 0q-40.96 0-40.96-40.96l0-286.72q0-40.96 40.96-40.96Z","fill":"#FCA77E","fill-opacity":".4"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M215.04 358.4m40.96 0l471.04 0q40.96 0 40.96 40.96l0 286.72q0 40.96-40.96 40.96l-471.04 0q-40.96 0-40.96-40.96l0-286.72q0-40.96 40.96-40.96Z","fill":"#FCA77E"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M675.84 460.8a20.48 20.48 0 1 1 40.96 0v163.84a20.48 20.48 0 1 1-40.96 0V460.8z m-71.68 71.68a20.48 20.48 0 1 1 40.96 0v92.16a20.48 20.48 0 1 1-40.96 0v-92.16z m-71.68 51.2a20.48 20.48 0 1 1 40.96 0v40.96a20.48 20.48 0 1 1-40.96 0v-40.96z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M373.76 547.84m-117.76 0a117.76 117.76 0 1 0 235.52 0 117.76 117.76 0 1 0-235.52 0Z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M378.0608 471.04a10.24 10.24 0 0 1 10.24 10.24v1.69984c6.2976 6.22592 12.34944 10.06592 18.14528 11.53024 8.88832 2.23232 16.39424 12.1344 22.528 29.71648-9.75872-13.44512-18.24768-20.1728-25.45664-20.1728-4.5568 0-9.6256-1.26976-15.21664-3.81952V593.92c0 1.46432-0.3072 2.84672-0.86016 4.10624 0.69632 9.96352-9.04192 20.89984-23.53152 25.61024-16.13824 5.24288-32.0512 0.77824-35.54304-9.984-3.50208-10.752 6.7584-23.72608 22.8864-28.9792a42.46528 42.46528 0 0 1 16.56832-2.048V481.28a10.24 10.24 0 0 1 10.24-10.24z","fill":"#FCA77E"},"children":[]}],"_name":"chaogaoyinzhi-c","_isColor":true};

const svgData$x = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M553.936 504l79.2 79.2a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0l-79.2-79.2-79.2 79.2a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l79.2-79.2-79.2-79.2a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l79.2 79.2 79.2-79.2a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624l-79.2 79.2zM512 800c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z"},"children":[]}],"_name":"clear","_isColor":false};

const svgData$w = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1045 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"},"children":[]}],"_name":"close","_isColor":false};

const svgData$v = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#91CF2E","opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M256 337.92m112.64 0l286.72 0q112.64 0 112.64 112.64l0 184.32q0 112.64-112.64 112.64l-286.72 0q-112.64 0-112.64-112.64l0-184.32q0-112.64 112.64-112.64Z","fill":"#91CF2E"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M530.977481 231.691364m13.184974 21.943483l0 0q13.184975 21.943483-8.758508 35.128458l-166.77047 100.205808q-21.943483 13.184975-35.128458-8.758508l0 0q-13.184975-21.943483 8.758509-35.128458l166.77047-100.205808q21.943483-13.184975 35.128457 8.758508Z","fill":"#91CF2E"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M665.6 604.16a30.72 30.72 0 0 1 0 61.44H522.24a30.72 30.72 0 0 1 0-61.44h143.36zM389.12 481.28a71.68 71.68 0 1 1 0 143.36 71.68 71.68 0 0 1 0-143.36z m276.48 40.96a30.72 30.72 0 0 1 0 61.44H522.24a30.72 30.72 0 0 1 0-61.44h143.36z m0-81.92a30.72 30.72 0 0 1 0 61.44H522.24a30.72 30.72 0 0 1 0-61.44h143.36z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]}],"_name":"diantai-c","_isColor":true};

const svgData$u = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#44D5CA","opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M527.36 225.28a46.08 46.08 0 0 1 46.08 46.08V337.92h122.88c56.55552 0 102.4 45.84448 102.4 102.4v204.8c0 56.55552-45.84448 102.4-102.4 102.4H460.8c-96.14336 0-174.08-77.93664-174.08-174.08v-61.44c0-96.14336 77.93664-174.08 174.08-174.08v-66.56a46.08 46.08 0 0 1 46.08-46.08h20.48zM235.52 440.32a30.72 30.72 0 0 1 30.72 30.72v143.36a30.72 30.72 0 0 1-61.44 0V471.04a30.72 30.72 0 0 1 30.72-30.72z","fill":"#44D5CA"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M706.56 645.12a40.96 40.96 0 1 1 0 81.92h-81.92a40.96 40.96 0 1 1 0-81.92h81.92z m30.72-92.16a40.96 40.96 0 1 1 0 81.92h-81.92a40.96 40.96 0 1 1 0-81.92h81.92z m0-92.16a40.96 40.96 0 1 1 0 81.92h-81.92a40.96 40.96 0 1 1 0-81.92h81.92z m-30.72-92.16a40.96 40.96 0 1 1 0 81.92h-81.92a40.96 40.96 0 1 1 0-81.92h81.92z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]}],"_name":"dianzan-c","_isColor":true};

const svgData$t = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#91CF2E","opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M329.58464 301.54752L510.01344 337.92l184.58624-36.62848A61.44 61.44 0 0 1 768 361.55392v284.43648a61.44 61.44 0 0 1-49.34656 60.24192L513.03424 747.52l-207.59552-41.34912A61.44 61.44 0 0 1 256 645.90848V361.7792a61.44 61.44 0 0 1 73.58464-60.23168z","fill":"#91CF2E"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M509.48096 640.32768c26.84928 0 49.02912-7.7824 66.53952-22.95808 14.00832-12.45184 22.95808-28.40576 27.62752-47.08352h-41.24672c-5.44768 11.6736-11.28448 20.62336-18.28864 26.07104-8.94976 6.61504-20.62336 10.11712-35.0208 10.11712-16.34304 0-29.184-5.44768-38.52288-15.5648-9.33888-10.50624-14.39744-25.68192-15.95392-45.13792h152.53504c-0.38912-35.79904-8.56064-63.81568-24.12544-84.04992-17.12128-22.56896-42.41408-33.46432-75.10016-33.46432-29.57312 0-53.30944 10.11712-70.43072 30.74048-17.89952 20.23424-26.46016 45.13792-26.46016 75.10016 0 33.0752 9.33888 59.14624 28.01664 78.60224 17.12128 18.28864 40.8576 27.62752 70.43072 27.62752z m54.4768-125.68576H455.39328c2.33472-17.12128 8.17152-29.96224 16.73216-38.912 9.33888-9.33888 21.4016-13.6192 36.9664-13.6192 32.68608 0 50.97472 17.5104 54.86592 52.5312z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]}],"_name":"dianzishu-c","_isColor":true};

const svgData$s = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M553.173333 238.314667h-64l0.021334 474.602666-224.021334-224-45.269333 45.226667L521.6 835.861333l301.717333-301.717333-45.269333-45.226667-224.853333 224.853334V238.336z"},"children":[]}],"_name":"falling","_isColor":false};

const svgData$r = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M810.666667 298.666667a64 64 0 0 1 64 64v426.666666a64 64 0 0 1-64 64l-81.130667 0.021334a127.274667 127.274667 0 0 0 16.981333-57.706667L746.666667 789.333333V298.666667h64z m-170.666667-128a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h426.666667z m-192 320h-170.666667v64h170.666667v-64z m128-128H277.333333v64h298.666667v-64z"},"children":[]}],"_name":"feeds-fill","_isColor":false};

const svgData$q = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#FCD37E","fill-opacity":".3"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M286.72 389.12m40.96 0l430.08 0q40.96 0 40.96 40.96l0 327.68q0 40.96-40.96 40.96l-430.08 0q-40.96 0-40.96-40.96l0-327.68q0-40.96 40.96-40.96Z","fill":"#FCCF72","fill-opacity":".4"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M235.52 307.2a40.96 40.96 0 0 1 40.96-40.96h235.76576a40.96 40.96 0 0 1 39.22944 29.184L564.224 337.92H706.56a40.96 40.96 0 0 1 40.96 40.96v327.68a40.96 40.96 0 0 1-40.96 40.96H276.48a40.96 40.96 0 0 1-40.96-40.96V307.2z","fill":"#FCCF72"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M655.36 624.64a20.48 20.48 0 1 1 0 40.96H337.92a20.48 20.48 0 1 1 0-40.96h317.44z m0-92.16a20.48 20.48 0 1 1 0 40.96H337.92a20.48 20.48 0 1 1 0-40.96h317.44z m0-102.4a20.48 20.48 0 1 1 0 40.96H337.92a20.48 20.48 0 1 1 0-40.96h317.44z","fill":"#FFFFFF","fill-opacity":".4"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M513.792 675.4304V645.12c17.68448-3.5328 31.32416-11.80672 40.91904-24.81152 9.59488-13.0048 14.39744-28.61056 14.39744-46.7968 0-13.13792-3.60448-24.50432-10.79296-34.0992-7.20896-9.59488-26.59328-21.59616-58.1632-35.9936-16.16896-7.3216-24.24832-16.54784-24.24832-27.65824 0-8.83712 3.03104-16.03584 9.09312-21.59616 6.06208-5.56032 13.63968-8.33536 22.7328-8.33536 14.39744 0 26.90048 6.56384 37.50912 19.70176l16.67072-24.24832c-12.38016-15.4112-28.416-24.12544-48.11776-26.14272v-28.79488h-22.35392v28.416c-16.41472 3.03104-29.29664 10.35264-38.64576 21.97504-9.34912 11.6224-14.01856 26.0096-14.01856 43.19232 0 23.49056 14.52032 42.05568 43.5712 55.69536 15.1552 7.0656 26.0096 12.1856 32.58368 15.33952 6.56384 3.16416 10.98752 6.89152 13.2608 11.18208 2.27328 4.3008 3.40992 9.216 3.40992 14.77632 0 24.75008-11.8784 37.13024-35.61472 37.13024-17.93024 0-33.08544-12.00128-45.4656-35.9936l-24.6272 23.49056c15.1552 27.0336 37.00736 42.05568 65.54624 45.08672v28.79488h22.35392z","fill":"#FFAF08"},"children":[]}],"_name":"fufeixiangmu-c","_isColor":true};

const svgData$p = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#D17EFC","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M289.37216 348.95872l399.0528-70.36928a71.68 71.68 0 0 1 83.0464 58.14272l41.7792 236.98432a71.68 71.68 0 0 1-58.14272 83.0464l-399.0528 70.35904a71.68 71.68 0 0 1-83.0464-58.14272l-41.7792-236.98432a71.68 71.68 0 0 1 58.14272-83.0464z","fill":"#D17EFC","fill-opacity":".6"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M236.98432 343.76704m71.68 0l405.20704 0q71.68 0 71.68 71.68l0 240.64q0 71.68-71.68 71.68l-405.20704 0q-71.68 0-71.68-71.68l0-240.64q0-71.68 71.68-71.68Z","fill":"#D17EFC"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M352.2048 530.28864l39.3216-109.6704h-18.1248l-31.0272 90.9312h-0.4608l-31.1808-90.9312h-18.1248l39.3216 109.6704h20.2752z m67.7376 0v-109.6704h-16.5888v109.6704h16.5888z m38.5536 0v-42.7008h28.416c26.2656 0 39.4752-11.2128 39.4752-33.6384 0-22.272-13.056-33.3312-39.168-33.3312h-45.4656v109.6704h16.7424z m27.3408-56.9856h-27.3408v-38.4h27.3408c8.1408 0 14.1312 1.536 17.9712 4.608 3.84 2.7648 5.8368 7.68 5.8368 14.4384 0 6.7584-1.9968 11.6736-5.6832 14.7456-3.84 3.072-9.8304 4.608-18.1248 4.608z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]}],"_name":"huiyuandengji-c","_isColor":true};

const svgData$o = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M509.92 795.84c157.904 0 285.92-128.016 285.92-285.92C795.84 352 667.808 224 509.92 224 352 224 224 352 224 509.92c0 157.904 128 285.92 285.92 285.92z m0 48C325.504 843.84 176 694.32 176 509.92 176 325.504 325.504 176 509.92 176c184.416 0 333.92 149.504 333.92 333.92 0 184.416-149.504 333.92-333.92 333.92z m-2.448-400.704h16a16 16 0 0 1 16 16v201.728a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V459.136a16 16 0 0 1 16-16z m0-100.176h16a16 16 0 0 1 16 16v23.648a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-23.648a16 16 0 0 1 16-16z"},"children":[]}],"_name":"info","_isColor":false};

const svgData$n = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#3281FC","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M359.13728 277.72928l120.15616-33.1776a122.88 122.88 0 0 1 65.41312 0l120.15616 33.1776A112.64 112.64 0 0 1 747.52 386.304v132.17792a242.7904 242.7904 0 0 1-115.12832 206.52032l-94.06464 58.15296a40.96 40.96 0 0 1-42.38336 0.4096l-99.072-58.56256A245.1456 245.1456 0 0 1 276.48 513.97632V386.304a112.64 112.64 0 0 1 82.65728-108.57472z","fill":"#3281FC"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M579.09248 409.31328a40.96 40.96 0 0 1 71.66976 39.6288l-1.05472 1.90464-102.4 174.08c-15.4624 26.29632-52.98176 26.91072-69.46816 1.8432l-1.14688-1.8432-102.4-174.08a40.96 40.96 0 0 1 69.45792-43.37664l1.15712 1.8432L512 523.3664l67.09248-114.05312z","fill":"#FFFFFF","fill-opacity":".5"},"children":[]}],"_name":"jingxuan-c","_isColor":true};

const svgData$m = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#FCA77E","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M512 348.16m-81.92 0a81.92 81.92 0 1 0 163.84 0 81.92 81.92 0 1 0-163.84 0Z","fill":"#FCA77E"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M609.28 220.16m-46.08 0a46.08 46.08 0 1 0 92.16 0 46.08 46.08 0 1 0-92.16 0Z","fill":"#FCA77E"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M424.96 332.8m-46.08 0a46.08 46.08 0 1 0 92.16 0 46.08 46.08 0 1 0-92.16 0Z","fill":"#FCA77E","fill-opacity":".6"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M491.52 665.6m-153.6 0a153.6 153.6 0 1 0 307.2 0 153.6 153.6 0 1 0-307.2 0Z","fill":"#FCA77E"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M337.92 450.56m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z","fill":"#FCA77E"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M645.12 501.76m-112.64 0a112.64 112.64 0 1 0 225.28 0 112.64 112.64 0 1 0-225.28 0Z","fill":"#FCA77E","fill-opacity":".6"},"children":[]}],"_name":"jinriredian-c","_isColor":true};

const svgData$l = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#D17EFC","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M512 368.64c107.44832 0 194.56 87.11168 194.56 194.56s-87.11168 194.56-194.56 194.56-194.56-87.11168-194.56-194.56 87.11168-194.56 194.56-194.56z m4.48512-92.16c138.91584 0 253.26592 105.1648 267.776 240.2304a89.8048 89.8048 0 0 1-34.3552 172.73856c-41.97376 0-48.41472-128.64512-19.33312-168.15104C718.40768 413.8496 627.2 330.3424 516.48512 330.3424c-117.80096 0-213.52448 94.54592-215.42912 211.89632l-0.01024 2.23232c19.83488 49.59232 10.8544 153.94816-26.95168 153.94816a89.77408 89.77408 0 0 1-25.94816-175.73888C259.87072 384.75776 375.53152 276.48 516.48512 276.48z","fill":"#D17EFC"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M555.68384 599.62368a20.48 20.48 0 0 1 29.57312 28.28288l-1.21856 1.26976-12.56448 12.05248a81.92 81.92 0 0 1-108.77952 4.13696l-2.1504-1.8432-15.60576-13.7728a20.48 20.48 0 0 1 25.73312-31.81568l1.3824 1.11616 15.59552 13.7728a40.96 40.96 0 0 0 53.79072 0.37888l1.67936-1.536 12.56448-12.04224z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]}],"_name":"kefu-c","_isColor":true};

const svgData$k = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M783.872 542.122667l-0.042667-64.405334-477.610666-0.298666 225.28-225.322667-45.568-45.568L182.506667 509.952l303.829333 303.829333 45.525333-45.504-226.474666-226.453333 478.506666 0.298667z"},"children":[]}],"_name":"leftarrow","_isColor":false};

const svgData$j = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#FFA26C","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M518.83008 204.8a57.6 57.6 0 0 1 57.6 57.6v11.78624l25.76384-16.73216a57.6 57.6 0 1 1 62.74048 96.6144l-43.2128 28.0576A251.58656 251.58656 0 0 1 760.04352 552.8576l8.3968 35.9424c23.552 100.9664-39.19872 201.9328-140.1856 225.4848-13.9776 3.2768-28.29312 4.9152-42.6496 4.9152H444.38528c-103.69024 0-187.74016-84.04992-187.74016-187.74016 0-14.35648 1.6384-28.672 4.9152-42.65984l8.37632-35.9424a251.5968 251.5968 0 0 1 139.264-171.1616l-38.23616-24.82176a57.6 57.6 0 0 1 62.75072-96.6144l27.51488 17.8688v-15.72864A57.6 57.6 0 0 1 518.83008 204.8z","fill":"#FFA26C"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M592.30208 593.05984a30.72 30.72 0 0 1 44.19584 42.68032c-77.84448 80.65024-165.5808 80.65024-248.24832 0.74752a30.72 30.72 0 1 1 42.7008-44.17536c58.59328 56.6272 107.40736 56.6272 161.35168 0.74752z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]}],"_name":"libao-c","_isColor":true};

const svgData$i = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M533.333333 682.666667v192h-64v-192h64z m-175.317333-72.618667l45.269333 45.269333-135.765333 135.744-45.248-45.226666 135.744-135.786667z m286.634667 0l135.744 135.765333-45.226667 45.248-135.786667-135.744 45.269334-45.269333zM330.666667 480v64h-192v-64h192z m533.333333 0v64h-192v-64h192z m-128.853333-247.061333l45.248 45.226666-135.744 135.786667-45.269334-45.269333 135.765334-135.744z m-467.626667 0l135.765333 135.744-45.269333 45.269333-135.744-135.765333 45.226667-45.248zM533.333333 149.333333v192h-64V149.333333h64z"},"children":[]}],"_name":"loading","_isColor":false};

const svgData$h = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M512 128c164.949333 0 298.666667 129.941333 298.666667 290.261333 0 3.392-0.064 6.784-0.213334 10.24-3.669333 95.914667-58.24 203.776-147.797333 313.173334a1260.714667 1260.714667 0 0 1-139.818667 144.768l-10.837333 9.322666-10.837333-9.322666-13.013334-11.626667a1260.714667 1260.714667 0 0 1-126.805333-133.162667c-89.557333-109.376-144.128-217.237333-147.818667-313.173333-0.128-3.413333-0.192-6.826667-0.192-10.24 0-158.08 130.069333-286.677333 291.904-290.176L512 128z m0 64c-130.005333 0-234.666667 101.717333-234.666667 226.261333 0 2.56 0.042667 5.141333 0.149334 7.765334 2.944 76.608 48.554667 171.52 133.376 275.093333a1184.682667 1184.682667 0 0 0 86.613333 94.506667l14.528 14.016 14.506667-14.016a1184.682667 1184.682667 0 0 0 86.634666-94.506667c84.821333-103.573333 130.432-198.485333 133.376-275.093333 0.106667-2.624 0.149333-5.205333 0.149334-7.765334C746.666667 293.717333 642.005333 192 512 192z m0 74.666667a149.333333 149.333333 0 1 1 0 298.666666 149.333333 149.333333 0 0 1 0-298.666666z m0 64a85.333333 85.333333 0 1 0 0 170.666666 85.333333 85.333333 0 0 0 0-170.666666z"},"children":[]}],"_name":"map","_isColor":false};

const svgData$g = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#867EFC","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M286.72 460.8m40.96 0l61.44 0q40.96 0 40.96 40.96l0 122.88q0 40.96-40.96 40.96l-61.44 0q-40.96 0-40.96-40.96l0-122.88q0-40.96 40.96-40.96Z","fill":"#867EFC"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M440.32 307.2m40.96 0l61.44 0q40.96 0 40.96 40.96l0 276.48q0 40.96-40.96 40.96l-61.44 0q-40.96 0-40.96-40.96l0-276.48q0-40.96 40.96-40.96Z","fill":"#867EFC"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M737.28 686.08m0 30.72l0 20.48q0 30.72-30.72 30.72l-389.12 0q-30.72 0-30.72-30.72l0-20.48q0-30.72 30.72-30.72l389.12 0q30.72 0 30.72 30.72Z","fill":"#867EFC","fill-opacity":".6"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M593.92 399.36m40.96 0l61.44 0q40.96 0 40.96 40.96l0 184.32q0 40.96-40.96 40.96l-61.44 0q-40.96 0-40.96-40.96l0-184.32q0-40.96 40.96-40.96Z","fill":"#867EFC"},"children":[]}],"_name":"paihangbang-c","_isColor":true};

const svgData$f = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#FC7E7E","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M665.6 481.28a81.92 81.92 0 0 1 81.92 81.92v20.48a81.92 81.92 0 0 1-81.92 81.92H336.67072l-54.97856 62.01344 9.54368-66.29376A81.95072 81.95072 0 0 1 235.52 583.68v-20.48a81.92 81.92 0 0 1 81.92-81.92z m30.72-225.28a81.92 81.92 0 0 1 81.92 81.92v20.48c0 33.11616-19.6608 61.6448-47.93344 74.55744L737.28 501.76l-38.42048-61.48096A83.43552 83.43552 0 0 1 696.32 440.32H450.56a81.92 81.92 0 0 1-81.92-81.92v-20.48a81.92 81.92 0 0 1 81.92-81.92h245.76z","fill":"#FC7E7E","fill-opacity":".4"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M634.88 532.48a81.92 81.92 0 0 1 81.92 81.92v20.48a81.92 81.92 0 0 1-81.92 81.92H305.95072l-54.97856 62.01344 9.54368-66.29376A81.95072 81.95072 0 0 1 204.8 634.88v-20.48a81.92 81.92 0 0 1 81.92-81.92z m102.4-225.28a81.92 81.92 0 0 1 81.92 81.92v20.48c0 33.11616-19.6608 61.6448-47.93344 74.55744L778.24 552.96l-38.42048-61.48096A83.43552 83.43552 0 0 1 737.28 491.52H491.52a81.92 81.92 0 0 1-81.92-81.92v-20.48a81.92 81.92 0 0 1 81.92-81.92h245.76z","fill":"#FC7E7E"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M341.68832 607.04768c5.85728 0 10.38336 1.86368 13.84448 5.59104 3.9936 3.72736 5.85728 8.51968 5.85728 14.37696 0 5.3248-1.86368 10.11712-5.85728 14.11072-3.46112 3.46112-7.9872 5.3248-13.84448 5.3248-5.3248 0-10.11712-1.86368-14.11072-5.3248-3.72736-3.9936-5.85728-8.78592-5.85728-14.11072 0-5.85728 2.12992-10.6496 5.85728-14.37696 3.9936-3.72736 8.78592-5.59104 14.11072-5.59104z m258.2528 0c5.3248 0 9.85088 1.59744 13.57824 5.3248 3.9936 3.46112 5.85728 7.9872 5.85728 13.57824 0 5.3248-1.86368 9.85088-5.85728 13.57824a18.4832 18.4832 0 0 1-13.57824 5.59104c-5.3248 0-10.11712-1.86368-14.11072-5.3248-3.72736-3.72736-5.59104-8.25344-5.59104-13.84448s1.86368-10.11712 5.59104-13.57824c3.72736-3.72736 8.51968-5.3248 14.11072-5.3248z m-88.92416 0c5.3248 0 9.85088 1.59744 13.57824 5.3248 3.9936 3.46112 5.85728 7.9872 5.85728 13.57824 0 5.3248-1.86368 9.85088-5.85728 13.57824a18.4832 18.4832 0 0 1-13.57824 5.59104c-5.3248 0-10.11712-1.86368-14.11072-5.3248-3.72736-3.72736-5.59104-8.25344-5.59104-13.84448s1.86368-10.11712 5.59104-13.57824c3.72736-3.72736 8.51968-5.3248 14.11072-5.3248z m-88.65792 0c5.3248 0 10.11712 1.59744 13.84448 5.3248 3.72736 3.46112 5.59104 7.9872 5.59104 13.57824 0 5.3248-1.86368 9.85088-5.59104 13.57824a19.08736 19.08736 0 0 1-13.84448 5.59104c-5.3248 0-10.11712-1.86368-13.84448-5.3248a18.8928 18.8928 0 0 1-5.85728-13.84448c0-5.59104 1.86368-10.11712 5.59104-13.57824 3.72736-3.72736 8.51968-5.3248 14.11072-5.3248zM510.95552 378.88c5.59104 0 10.38336 1.59744 14.11072 5.3248 3.72736 3.46112 5.59104 7.9872 5.59104 13.57824s-1.86368 10.11712-5.59104 13.84448c-3.9936 3.46112-8.78592 5.3248-14.11072 5.3248-5.3248 0-9.85088-1.86368-13.57824-5.59104A17.75616 17.75616 0 0 1 491.52 397.78304c0-5.59104 1.86368-10.11712 5.85728-13.57824 3.72736-3.72736 8.25344-5.3248 13.57824-5.3248z m88.92416 0c5.59104 0 10.38336 1.59744 14.11072 5.3248 3.72736 3.46112 5.59104 7.9872 5.59104 13.57824s-1.86368 10.11712-5.59104 13.84448c-3.9936 3.46112-8.78592 5.3248-14.11072 5.3248-5.3248 0-9.85088-1.86368-13.57824-5.59104a17.75616 17.75616 0 0 1-5.85728-13.57824c0-5.59104 1.86368-10.11712 5.85728-13.57824 3.72736-3.72736 8.25344-5.3248 13.57824-5.3248z m88.65792 0c5.59104 0 10.38336 1.59744 14.11072 5.3248 3.72736 3.46112 5.59104 7.9872 5.59104 13.57824s-2.12992 10.11712-5.85728 13.84448c-3.72736 3.46112-8.51968 5.3248-13.84448 5.3248-5.3248 0-10.11712-1.86368-13.84448-5.59104a18.4832 18.4832 0 0 1-5.59104-13.57824c0-5.59104 1.86368-10.11712 5.59104-13.57824 3.72736-3.72736 8.51968-5.3248 13.84448-5.3248z","fill":"#FC3C3C"},"children":[]}],"_name":"pinglun-c","_isColor":true};

const svgData$e = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M491.925333 532.074667V853.333333H170.666667V532.074667h321.258666zM597.333333 789.333333v64h-64v-64h64z m256-85.333333v149.333333h-128v-64h64v-85.333333h64z m-425.408-107.925333H234.666667V789.333333h193.258666v-193.258666zM661.333333 597.333333v128h64v64h-128v-192h64z m-277.333333 42.666667v106.666667h-106.666667v-106.666667h106.666667z m405.333333 0v64h-64v-64h64z m64-106.666667v106.666667h-64v-42.666667h-64v-64h128z m-256 0v64h-64v-64h64zM491.925333 170.666667v321.258666H170.666667V170.666667h321.258666zM853.333333 170.666667v321.258666H532.074667V170.666667H853.333333z m-425.408 64H234.666667v193.258666h193.258666V234.666667zM789.333333 234.666667h-193.258666v193.258666H789.333333V234.666667z m-405.333333 42.666666v106.666667h-106.666667v-106.666667h106.666667z m362.666667 0v106.666667h-106.666667v-106.666667h106.666667z"},"children":[]}],"_name":"qRcode","_isColor":false};

const svgData$d = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#FFA26C","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M373.13536 301.8752l0.01024 26.624a30.72 30.72 0 0 0 28.91776 30.6688l1.80224 0.0512h7.3728a30.72 30.72 0 0 0 30.6688-28.91776l0.0512-1.80224v-26.624h160.5632v26.624a30.72 30.72 0 0 0 28.91776 30.6688l1.80224 0.0512h7.3728a30.72 30.72 0 0 0 30.6688-28.91776l0.0512-1.80224-0.01024-26.624H727.04a81.92 81.92 0 0 1 81.92 81.92v294.912a81.92 81.92 0 0 1-81.92 81.92H317.44a81.92 81.92 0 0 1-81.92-81.92v-294.912a81.92 81.92 0 0 1 81.92-81.92h55.69536zM407.552 256a22.9376 22.9376 0 0 1 22.9376 22.9376v45.8752a22.9376 22.9376 0 0 1-45.8752 0v-45.8752A22.9376 22.9376 0 0 1 407.552 256z m229.376 0a22.9376 22.9376 0 0 1 22.9376 22.9376v45.8752a22.9376 22.9376 0 0 1-45.8752 0v-45.8752A22.9376 22.9376 0 0 1 636.928 256z","fill":"#FFA26C"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M406.65088 499.75296c9.20576-11.8784 17.52064-25.2416 24.94464-39.49568h19.59936c4.75136 10.98752 8.9088 22.272 12.47232 34.1504l25.53856-9.20576a259.00032 259.00032 0 0 0-10.09664-24.94464h37.12v-24.94464h-73.94304c2.07872-5.9392 4.15744-11.8784 6.23616-18.41152l-27.32032-5.9392c-7.72096 26.13248-20.49024 50.4832-38.90176 73.34912l24.35072 15.44192z m189.46048-2.37568l25.83552-9.79968a259.62496 259.62496 0 0 0-13.66016-27.32032h41.87136v-24.94464h-83.44576c2.07872-5.9392 4.15744-11.8784 5.9392-18.41152l-26.7264-5.9392c-5.9392 21.97504-16.03584 42.16832-29.696 61.17376l23.7568 15.14496a202.496 202.496 0 0 0 16.03584-27.02336h23.45984a299.9296 299.9296 0 0 1 16.62976 37.12z m-0.89088 76.91264v-20.7872a473.71264 473.71264 0 0 0 44.24704 17.52064l13.66016-24.35072c-48.10752-15.14496-90.27584-35.93216-127.09888-62.06464h-17.8176c-33.85344 24.35072-76.02176 44.84096-127.09888 61.47072l13.66016 24.64768a1073.79712 1073.79712 0 0 0 44.544-17.52064v21.08416h155.904z m-8.31488-24.64768H447.03744c27.02336-12.76928 50.4832-26.7264 70.08256-42.16832 20.19328 15.73888 43.65312 29.696 69.7856 42.16832z m-77.50656 93.5424l25.2416-6.23616c-5.34528-21.67808-11.28448-40.98048-18.11456-57.61024l-26.13248 8.31488a382.11584 382.11584 0 0 1 19.00544 55.53152z m134.22592 34.1504v-26.13248h-58.79808c10.09664-18.11456 18.70848-38.6048 25.83552-61.17376l-27.91424-7.424c-8.31488 26.42944-17.52064 49.29536-28.2112 68.59776h-163.328v26.13248h252.416z m-198.66624-31.1808l25.53856-6.53312c-6.83008-20.49024-14.25408-38.6048-22.56896-54.34368l-25.83552 8.31488c9.50272 16.62976 16.92672 34.1504 22.86592 52.56192z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]}],"_name":"qiandao-c","_isColor":true};

const svgData$c = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#FCD37E","fill-opacity":".3"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M481.28 215.04h276.48c62.208 0 112.64 50.432 112.64 112.64v125.65504c0 62.208-50.432 112.64-112.64 112.64H619.52L518.42048 645.12v-79.14496H481.28c-62.208 0-112.64-50.432-112.64-112.64V327.68c0-62.208 50.432-112.64 112.64-112.64z","fill":"#FCCF72","fill-opacity":".6"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M317.44 276.48h389.12c62.208 0 112.64 50.432 112.64 112.64v192.50176c0 62.208-50.432 112.64-112.64 112.64H512L388.1984 788.48v-94.21824H317.44c-62.208 0-112.64-50.432-112.64-112.64V389.12c0-62.208 50.432-112.64 112.64-112.64z","fill":"#FCCF72"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M592.20992 470.28224a30.72 30.72 0 0 1 45.73184 40.98048l-1.35168 1.49504-102.4 106.97728a30.72 30.72 0 0 1-42.94656 1.40288l-1.4336-1.40288-102.4-106.97728a30.72 30.72 0 0 1 42.93632-43.89888l1.44384 1.42336L512 554.06592l80.20992-83.78368z","fill":"#FFAF08"},"children":[]}],"_name":"remenhuati-c","_isColor":true};

const svgData$b = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M214.677333 542.122667l0.042667-64.405334 477.653333-0.298666-225.301333-225.322667 45.568-45.568 303.424 303.424L512.213333 813.781333l-45.504-45.504 226.453334-226.453333-478.485334 0.298667z"},"children":[]}],"_name":"rightarrow","_isColor":false};

const svgData$a = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M553.173333 803.84h-64l0.021334-474.581333-224.021334 224-45.269333-45.226667L521.6 206.293333l301.717333 301.696-45.269333 45.269334-224.853333-224.896v475.477333z"},"children":[]}],"_name":"rising","_isColor":false};

const svgData$9 = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M448.362667 166.826667l113.6 0.170666a64 64 0 0 1 63.893333 63.914667l0.042667 18.517333a301.461333 301.461333 0 0 1 62.101333 34.88l15.210667-8.746666a64 64 0 0 1 87.296 23.381333l56.938666 98.304a64 64 0 0 1-19.989333 85.397333l-3.477333 2.133334-15.274667 8.810666c2.624 24.234667 2.304 48.853333-1.130667 73.322667l10.794667 6.250667a64 64 0 0 1 25.216 84.117333l-1.770667 3.306667-53.333333 92.373333a64 64 0 0 1-84.117333 25.216l-3.328-1.792-14.741334-8.533333a298.538667 298.538667 0 0 1-59.626666 33.28v25.386666a64 64 0 0 1-59.989334 63.957334l-4.074666 0.128-113.6-0.170667a64 64 0 0 1-63.893334-63.893333l-0.064-30.613334a302.613333 302.613333 0 0 1-50.069333-29.696l-27.221333 15.658667a64 64 0 0 1-87.296-23.402667l-56.938667-98.282666a64 64 0 0 1 19.989333-85.418667l3.477334-2.133333 27.690666-15.936c-2.133333-20.266667-2.24-40.768-0.192-61.226667l-30.741333-17.770667A64 64 0 0 1 158.506667 393.6l1.792-3.306667 53.333333-92.373333a64 64 0 0 1 84.117333-25.216l3.306667 1.792 26.794667 15.466667a297.984 297.984 0 0 1 56.426666-34.666667v-24.362667a64 64 0 0 1 59.989334-63.978666l4.074666-0.128z m-0.085334 64l0.064 65.066666-36.778666 17.301334c-15.744 7.402667-30.613333 16.533333-44.309334 27.221333l-34.005333 26.538667-62.570667-36.138667-1.6-0.896-53.333333 92.373333 66.56 38.421334-4.138667 41.152c-1.6 15.978667-1.536 32.106667 0.149334 48.085333l4.394666 41.429333-63.786666 36.736 56.917333 98.282667 63.338667-36.416 33.6 24.597333a237.994667 237.994667 0 0 0 39.466666 23.424l36.736 17.258667 0.128 71.168 113.578667 0.170667-0.064-68.16 39.466667-16.426667a234.538667 234.538667 0 0 0 46.826666-26.112l33.578667-24.128 50.56 29.184 53.290667-92.394667-48.128-27.818666 5.973333-42.688c2.666667-19.093333 2.965333-38.421333 0.896-57.6l-4.48-41.450667 51.456-29.696-56.938667-98.282667-51.2 29.504-33.621333-24.512a238.037333 238.037333 0 0 0-48.938667-27.498666l-39.381333-16.341334-0.128-61.184-113.578667-0.170666z m127.381334 183.722666a128.170667 128.170667 0 0 1 46.890666 174.933334 127.829333 127.829333 0 0 1-174.762666 46.848 128.170667 128.170667 0 0 1-46.869334-174.933334 127.829333 127.829333 0 0 1 174.741334-46.848z m-119.317334 78.805334a64.170667 64.170667 0 0 0 23.466667 87.573333 63.829333 63.829333 0 0 0 87.296-23.402667 64.170667 64.170667 0 0 0-20.266667-85.589333l-3.2-1.984-3.306666-1.770667a63.829333 63.829333 0 0 0-83.989334 25.173334z"},"children":[]}],"_name":"set","_isColor":false};

const svgData$8 = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#2ECF7D","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M512 311.1936a20.48 20.48 0 0 1 20.48 20.48v102.4a20.48 20.48 0 1 1-40.96 0v-102.4a20.48 20.48 0 0 1 20.48-20.48z m122.88 0a20.48 20.48 0 0 1 20.48 20.48v102.4a20.48 20.48 0 1 1-40.96 0v-102.4a20.48 20.48 0 0 1 20.48-20.48z m-245.76 0a20.48 20.48 0 0 1 20.48 20.48v102.4a20.48 20.48 0 1 1-40.96 0v-102.4a20.48 20.48 0 0 1 20.48-20.48z m127.61088-64.0512a10.24 10.24 0 0 1 3.56352 3.46112l4.98688 8.02816c4.7104 7.5776 7.19872 16.32256 7.19872 25.25184 0 7.53664-6.11328 13.64992-13.64992 13.64992h-13.66016A13.64992 13.64992 0 0 1 491.52 283.88352c0-8.93952 2.3552-17.72544 6.84032-25.46688l4.37248-7.54688a10.24 10.24 0 0 1 13.99808-3.72736z m122.88 0a10.24 10.24 0 0 1 3.56352 3.46112l4.98688 8.02816c4.7104 7.5776 7.19872 16.32256 7.19872 25.25184 0 7.53664-6.11328 13.64992-13.64992 13.64992h-13.66016A13.64992 13.64992 0 0 1 614.4 283.88352c0-8.93952 2.3552-17.72544 6.84032-25.46688l4.37248-7.54688a10.24 10.24 0 0 1 13.99808-3.72736z m-245.76 0a10.24 10.24 0 0 1 3.56352 3.46112l4.98688 8.02816c4.7104 7.5776 7.19872 16.32256 7.19872 25.25184 0 7.53664-6.11328 13.64992-13.64992 13.64992h-13.66016A13.64992 13.64992 0 0 1 368.64 283.88352c0-8.93952 2.3552-17.72544 6.84032-25.46688l4.37248-7.54688a10.24 10.24 0 0 1 13.99808-3.72736z","fill":"#2ECF7D","fill-opacity":".4"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M716.8 652.11392A61.37856 61.37856 0 0 1 768 624.64V471.04a71.68 71.68 0 0 0-71.68-71.68H327.68a71.68 71.68 0 0 0-71.68 71.68v153.6a61.3376 61.3376 0 0 1 51.2 27.47392A61.37856 61.37856 0 0 1 358.4 624.64a61.3376 61.3376 0 0 1 51.2 27.47392A61.37856 61.37856 0 0 1 460.8 624.64a61.3376 61.3376 0 0 1 51.2 27.47392A61.37856 61.37856 0 0 1 563.2 624.64a61.3376 61.3376 0 0 1 51.2 27.47392A61.37856 61.37856 0 0 1 665.6 624.64a61.3376 61.3376 0 0 1 51.2 27.47392z","fill":"#2ECF7D"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M768 634.88a61.44 61.44 0 1 1-51.2 95.40608A61.3376 61.3376 0 0 1 665.6 757.76a61.37856 61.37856 0 0 1-51.2-27.47392A61.3376 61.3376 0 0 1 563.2 757.76a61.37856 61.37856 0 0 1-51.2-27.47392A61.3376 61.3376 0 0 1 460.8 757.76a61.37856 61.37856 0 0 1-51.2-27.47392A61.3376 61.3376 0 0 1 358.4 757.76a61.37856 61.37856 0 0 1-51.2-27.47392 61.44 61.44 0 1 1 0.02048-67.92192A61.3376 61.3376 0 0 1 358.38976 634.88a61.37856 61.37856 0 0 1 51.2 27.47392A61.3376 61.3376 0 0 1 460.8 634.88a61.37856 61.37856 0 0 1 51.2 27.47392A61.3376 61.3376 0 0 1 563.2 634.88a61.37856 61.37856 0 0 1 51.2 27.47392A61.3376 61.3376 0 0 1 665.6 634.88a61.37856 61.37856 0 0 1 51.2 27.47392A61.3376 61.3376 0 0 1 768 634.88z","fill":"#2ECF7D","fill-opacity":".6"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M480.39936 594.98496V463.38048h-15.11424c-4.42368 4.79232-9.95328 9.03168-16.5888 13.08672-6.63552 3.6864-12.71808 6.26688-18.61632 7.74144v19.90656c12.16512-3.50208 22.30272-9.03168 30.22848-16.5888v107.45856h20.09088z m72.62208 2.58048c15.48288 0 27.648-3.6864 36.31104-10.87488 8.47872-7.3728 12.71808-16.77312 12.71808-28.38528 0-8.2944-2.58048-15.48288-7.74144-21.74976-4.42368-5.89824-9.95328-9.58464-16.22016-11.0592v-0.55296c6.63552-2.58048 11.61216-6.26688 14.92992-11.24352 2.94912-4.608 4.42368-10.32192 4.42368-17.14176 0-9.76896-3.6864-18.06336-11.0592-24.69888-8.2944-7.3728-19.3536-11.0592-33.36192-11.0592s-25.25184 3.6864-33.36192 11.0592c-7.3728 6.63552-11.0592 14.92992-11.0592 24.69888 0 6.81984 1.47456 12.53376 4.42368 17.14176 3.31776 4.97664 8.2944 8.66304 14.92992 11.24352v0.55296c-6.4512 1.47456-11.79648 5.16096-16.22016 11.0592a33.09568 33.09568 0 0 0-7.74144 21.74976c0 11.61216 4.23936 21.01248 12.71808 28.38528 8.47872 7.18848 20.64384 10.87488 36.31104 10.87488z m0-78.70464c-9.40032 0-16.22016-2.21184-20.45952-6.63552-3.50208-3.6864-5.16096-8.66304-5.16096-14.92992 0-5.5296 2.02752-10.32192 6.26688-14.00832 4.79232-4.42368 11.24352-6.4512 19.3536-6.4512 8.11008 0 14.56128 2.02752 19.3536 6.4512 4.05504 3.6864 6.26688 8.47872 6.26688 14.00832 0 6.26688-1.8432 11.24352-5.16096 14.92992-4.42368 4.42368-11.24352 6.63552-20.45952 6.63552z m0 62.48448c-9.40032 0-16.5888-2.21184-21.56544-6.4512-5.16096-4.23936-7.55712-9.76896-7.55712-16.5888 0-7.3728 2.39616-13.08672 7.3728-17.5104 4.79232-4.79232 12.16512-7.00416 21.74976-7.00416 9.58464 0 16.77312 2.39616 21.93408 7.18848 4.79232 4.23936 7.18848 9.95328 7.18848 17.32608 0 6.81984-2.39616 12.34944-7.18848 16.5888-5.34528 4.23936-12.71808 6.4512-21.93408 6.4512z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]}],"_name":"shengri-c","_isColor":true};

const svgData$7 = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m169.045333 191.04L455.317333 572.650667l-90.944-94.336-46.08 44.416 136.832 141.952 271.829334-279.722667-45.909334-44.586667z"},"children":[]}],"_name":"success-fill","_isColor":false};

const svgData$6 = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"fill":"currentColor","d":"M512 243.712c164.949333 0 298.666667 133.717333 298.666667 298.666667s-133.717333 298.666667-298.666667 298.666666-298.666667-133.717333-298.666667-298.666666 133.717333-298.666667 298.666667-298.666667z m0 64c-129.6 0-234.666667 105.066667-234.666667 234.666667s105.066667 234.666667 234.666667 234.666666 234.666667-105.066667 234.666667-234.666666-105.066667-234.666667-234.666667-234.666667z m27.477333 59.157333v126.378667l69.824-69.824 45.226667 45.269333-124.416 124.437334c-20.16 20.16-54.634667 5.888-54.634667-22.613334v-203.648h64zM620.586667 139.306667v67.882666H394.346667V139.306667H620.586667z"},"children":[]}],"_name":"task-management","_isColor":false};

const svgData$5 = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"5320","xmlns:xlink":"http://www.w3.org/1999/xlink"},"children":[{"name":"defs","type":"element","value":"","attributes":{},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M512 992C246.912 992 32 777.088 32 512 32 246.912 246.912 32 512 32c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480zM480 256v352a32 32 0 0 0 64 0V256a32 32 0 0 0-64 0z m-16 528a48 48 0 1 0 96 0 48 48 0 0 0-96 0z","p-id":"5321"},"children":[]}],"_name":"test","_isColor":false};

const svgData$4 = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#FC7E7E","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M391.168 328.88832l372.44928 72.3968a40.96 40.96 0 0 1 32.38912 48.0256l-46.36672 238.56128a40.96 40.96 0 0 1-48.0256 32.39936L329.30816 647.8848a40.96 40.96 0 0 1-28.24192-20.7872l-66.9696-124.39552a61.44 61.44 0 0 1 15.1552-76.63616l108.1344-88.65792a40.96 40.96 0 0 1 33.77152-8.52992zM284.9792 473.76384a38.22592 38.22592 0 1 0 75.04896 14.592 38.22592 38.22592 0 0 0-75.0592-14.592z","fill":"#FC7E7E","fill-opacity":".6"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M740.8128 317.44a40.96 40.96 0 0 1 40.96 40.96v243.02592a40.96 40.96 0 0 1-40.96 40.96H361.54368a40.96 40.96 0 0 1-31.6928-15.01184L240.384 518.0416a61.44 61.44 0 0 1 0.24576-78.12096l89.22112-107.65312A40.96 40.96 0 0 1 361.39008 317.44h379.42272z m-417.792 124.24192a38.22592 38.22592 0 1 0 0 76.46208 38.22592 38.22592 0 0 0 0-76.46208z","fill":"#FC7E7E"},"children":[]}],"_name":"xianshimianfei-c","_isColor":true};

const svgData$3 = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#867EFC","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M624.64 276.48c62.208 0 112.64 50.432 112.64 112.64v184.32c0 62.208-50.432 112.64-112.64 112.64H337.92c-62.208 0-112.64-50.432-112.64-112.64V389.12c0-27.21792 9.65632-52.18304 25.73312-71.65952l173.45536 111.9232 3.072 1.91488a112.64 112.64 0 0 0 111.34976 2.6624l93.82912-50.46272 1.3824-0.8192a20.48 20.48 0 0 0-20.7872-35.25632l-93.81888 50.45248-2.58048 1.3312a71.68 71.68 0 0 1-70.2464-4.22912L284.18048 290.10944A112.13824 112.13824 0 0 1 337.92 276.48h286.72z","fill":"#867EFC","fill-opacity":".4"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M706.56 348.16c62.208 0 112.64 50.432 112.64 112.64v184.32c0 62.208-50.432 112.64-112.64 112.64H419.84c-62.208 0-112.64-50.432-112.64-112.64V460.8c0-27.21792 9.65632-52.18304 25.73312-71.65952l173.45536 111.9232 3.072 1.91488a112.64 112.64 0 0 0 111.34976 2.6624l93.82912-50.46272 1.3824-0.8192a20.48 20.48 0 0 0-20.7872-35.25632l-93.81888 50.45248-2.58048 1.3312a71.68 71.68 0 0 1-70.2464-4.22912L366.10048 361.78944A112.13824 112.13824 0 0 1 419.84 348.16h286.72z","fill":"#867EFC"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M419.84 583.68a30.72 30.72 0 1 1 0 61.44 30.72 30.72 0 0 1 0-61.44z m92.16 0a30.72 30.72 0 1 1 0 61.44 30.72 30.72 0 0 1 0-61.44z m102.4 0a30.72 30.72 0 1 1 0 61.44 30.72 30.72 0 0 1 0-61.44z m92.16 0a30.72 30.72 0 1 1 0 61.44 30.72 30.72 0 0 1 0-61.44z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]}],"_name":"xiaoxi-c","_isColor":true};

const svgData$2 = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#3281FC","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M377.2928 262.8608l401.5104 154.12224a61.44 61.44 0 0 1 35.34848 79.38048l-88.064 229.43744a61.44 61.44 0 0 1-79.38048 35.33824L245.1968 607.0272a61.44 61.44 0 0 1-35.34848-79.38048l88.064-229.43744a61.44 61.44 0 0 1 79.38048-35.33824z","fill":"#3281FC","fill-opacity":".4"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M296.96 327.68h430.08a61.44 61.44 0 0 1 61.44 61.44v245.76a61.44 61.44 0 0 1-61.44 61.44H296.96a61.44 61.44 0 0 1-61.44-61.44V389.12a61.44 61.44 0 0 1 61.44-61.44z","fill":"#3281FC"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M340.93056 602.84928c15.6672-7.55712 27.46368-16.03584 35.38944-25.62048 6.08256-7.74144 11.0592-18.24768 14.7456-31.3344h41.65632c-0.73728 16.5888-2.39616 27.27936-4.608 32.44032-2.21184 4.79232-6.63552 7.3728-13.63968 7.3728-7.92576 0-16.40448-0.36864-25.62048-0.73728l4.608 16.40448h29.4912c7.3728-0.36864 12.9024-2.7648 16.40448-6.81984 3.50208-4.23936 6.08256-11.61216 7.55712-22.30272 1.10592-9.58464 2.02752-21.56544 2.58048-36.31104a186.38848 186.38848 0 0 0 24.33024 16.5888l11.42784-14.19264c-19.16928-8.84736-33.36192-18.61632-42.3936-29.4912h36.31104v-15.85152h-89.21088c2.94912-5.34528 5.71392-10.87488 8.2944-16.5888h70.77888v-15.48288h-25.8048c5.34528-7.00416 9.95328-15.29856 13.824-24.51456l-14.56128-5.16096a98.14016 98.14016 0 0 1-14.00832 25.25184l8.11008 4.42368H403.968c2.7648-8.84736 4.97664-18.06336 6.81984-28.01664l-17.32608-2.21184a190.62784 190.62784 0 0 1-7.18848 30.22848h-24.51456l9.58464-4.42368a181.06368 181.06368 0 0 0-12.71808-24.51456l-15.11424 4.97664c4.42368 7.00416 8.84736 14.92992 12.9024 23.9616h-26.7264v15.48288h50.31936c-2.7648 5.71392-5.89824 11.24352-9.40032 16.5888h-51.05664v15.85152h38.33856c-11.9808 12.53376-26.7264 22.48704-44.42112 30.04416l9.58464 14.7456a170.86464 170.86464 0 0 0 28.5696-17.32608v9.58464h23.04c-3.13344 9.58464-7.3728 17.32608-12.9024 23.22432-7.3728 7.18848-17.87904 13.824-31.88736 19.90656l11.0592 13.824z m101.376-73.17504H359.7312a161.23904 161.23904 0 0 0 19.53792-20.82816h45.34272c4.42368 7.00416 10.32192 14.00832 17.69472 20.82816z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M512 419.84m20.48 0l61.44 0q20.48 0 20.48 20.48l0 0q0 20.48-20.48 20.48l-61.44 0q-20.48 0-20.48-20.48l0 0q0-20.48 20.48-20.48Z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M512 491.52m20.48 0l163.84 0q20.48 0 20.48 20.48l0 0q0 20.48-20.48 20.48l-163.84 0q-20.48 0-20.48-20.48l0 0q0-20.48 20.48-20.48Z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M512 563.2m20.48 0l163.84 0q20.48 0 20.48 20.48l0 0q0 20.48-20.48 20.48l-163.84 0q-20.48 0-20.48-20.48l0 0q0-20.48 20.48-20.48Z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]}],"_name":"youhui-c","_isColor":true};

const svgData$1 = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#2ECF7D","fill-opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M435.2 245.76a25.6 25.6 0 0 1 25.6 25.6V337.92h66.28352c1.14688-1.90464 2.56-3.69664 4.22912-5.3248l58.9312-56.90368a25.6 25.6 0 0 1 35.56352 36.83328L599.5008 337.92H655.36c62.208 0 112.64 50.432 112.64 112.64v184.32c0 62.208-50.432 112.64-112.64 112.64H368.64c-62.208 0-112.64-50.432-112.64-112.64V450.56c0-62.208 50.432-112.64 112.64-112.64h40.96v-66.56a25.6 25.6 0 0 1 25.6-25.6z","fill":"#2ECF7D"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M561.6128 584.47872l-62.01344 31.00672A40.96 40.96 0 0 1 440.32 578.84672v-62.01344a40.96 40.96 0 0 1 59.27936-36.63872l62.01344 31.00672a40.96 40.96 0 0 1 0 73.27744z","fill":"#FFFFFF","fill-opacity":".6"},"children":[]}],"_name":"zhibo-c","_isColor":true};

const svgData = {"name":"svg","type":"element","value":"","attributes":{"class":"icon","width":"32px","height":"32.00px","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg"},"children":[{"name":"path","type":"element","value":"","attributes":{"d":"M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z","fill":"#44D5CA","opacity":".2"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M281.22112 445.58336l12.41088 78.2336a20.48 20.48 0 0 0 39.75168 2.99008l57.16992-180.09088a20.48 20.48 0 0 1 38.95296-0.28672l63.06816 189.20448a20.48 20.48 0 0 0 38.85056 0l63.54944-190.62784a20.48 20.48 0 0 1 38.85056 0l56.90368 170.69056a20.48 20.48 0 0 0 39.6288-3.11296L742.4 440.32a20.43904 20.43904 0 0 1 40.4992 1.40288l15.80032 164.29056c10.2912 106.96704-68.08576 202.00448-175.04256 212.29568a194.56 194.56 0 0 1-18.62656 0.89088h-186.0608c-107.45856 0-194.56-87.11168-194.56-194.56a194.56 194.56 0 0 1 0.89088-18.62656l15.29856-159.1808a20.48 20.48 0 0 1 40.62208-1.24928z","fill":"#44D5CA"},"children":[]},{"name":"path","type":"element","value":"","attributes":{"d":"M768 307.2a30.72 30.72 0 1 1 0 61.44 30.72 30.72 0 0 1 0-61.44z m-512 0a30.72 30.72 0 1 1 0 61.44 30.72 30.72 0 0 1 0-61.44z m153.6-61.44a30.72 30.72 0 1 1 0 61.44 30.72 30.72 0 0 1 0-61.44z m204.8 0a30.72 30.72 0 1 1 0 61.44 30.72 30.72 0 0 1 0-61.44z","fill":"#44D5CA","fill-opacity":".6"},"children":[]}],"_name":"zunguishenfen-c","_isColor":true};

export { svgData$e as A, svgData$d as B, svgData$c as C, svgData$b as D, svgData$a as E, svgData$9 as F, svgData$8 as G, svgData$6 as H, Icons as I, svgData$5 as J, svgData$4 as K, svgData$3 as L, svgData$2 as M, svgData$1 as N, svgData as O, svgData$x as P, svgData$o as Q, svgData$7 as R, svgData$F as a, svgData$E as b, svgData$D as c, svgData$C as d, svgData$B as e, svgData$A as f, svgData$z as g, svgData$y as h, svgData$w as i, svgData$v as j, svgData$u as k, svgData$t as l, svgData$s as m, svgData$r as n, svgData$q as o, svgData$p as p, svgData$n as q, svgData$m as r, svgData$G as s, svgData$l as t, svgData$k as u, svgData$j as v, svgData$i as w, svgData$h as x, svgData$g as y, svgData$f as z };
