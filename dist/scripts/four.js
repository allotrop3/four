"use strict";

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function e(t, n, r) {
   function s(o, u) {
      if (!n[o]) {
         if (!t[o]) {
            var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
         }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
            var n = t[o][1][e];return s(n ? n : e);
         }, l, l.exports, e, t, n, r);
      }return n[o].exports;
   }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
})({ 1: [function (require, module, exports) {
      "use strict";

      var Entity = (function () {
         function Entity() {
            var name = arguments.length <= 0 || arguments[0] === undefined ? "entity" : arguments[0];

            _classCallCheck(this, Entity);

            this.name = name;
            this.destroyed = false;
         }

         _createClass(Entity, [{
            key: "destroy",
            value: function destroy() {
               this.destroyed = true;
            }
         }]);

         return Entity;
      })();

      module.exports = Entity;
   }, {}], 2: [function (require, module, exports) {
      "use strict";

      var Entity = require("./entity");

      var Framebuffer = (function (_Entity) {
         _inherits(Framebuffer, _Entity);

         function Framebuffer(name, colorAttachment, depthAttachment, scene) {
            _classCallCheck(this, Framebuffer);

            _get(Object.getPrototypeOf(Framebuffer.prototype), "constructor", this).call(this, name);

            this.buffer = undefined;
            this.colorAttachment = colorAttachment;
            this.depthAttachment = depthAttachment;
            this.scene = scene;
         }

         _createClass(Framebuffer, [{
            key: "lock",
            value: function lock() {}
         }, {
            key: "bind",
            value: function bind() {}
         }, {
            key: "unbind",
            value: function unbind() {}
         }]);

         return Framebuffer;
      })(Entity);

      module.exports = Framebuffer;
   }, { "./entity": 1 }], 3: [function (require, module, exports) {
      "use strict";

      var Framebuffer = require("./framebuffer");

      var instance = new Framebuffer();

      instance.destroy();

      console.log(instance);
   }, { "./framebuffer": 2 }], 4: [function (require, module, exports) {
      "use strict";

      var Entity = require("./entity");

      var Renderbuffer = (function (_Entity2) {
         _inherits(Renderbuffer, _Entity2);

         function Renderbuffer(name, width, height) {
            _classCallCheck(this, Renderbuffer);

            _get(Object.getPrototypeOf(Renderbuffer.prototype), "constructor", this).call(this, name);

            this.buffer = undefined;
            this.width = width;
            this.height = height;
         }

         _createClass(Renderbuffer, [{
            key: "bind",
            value: function bind() {}
         }, {
            key: "unbind",
            value: function unbind() {}
         }]);

         return Renderbuffer;
      })(Entity);

      module.exports = Renderbuffer;
   }, { "./entity": 1 }] }, {}, [1, 2, 3, 4]);
//# sourceMappingURL=four.js.map
