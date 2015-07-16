(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

class Entity
{
   constructor(name = 'entity')
   {
      this.name = name;
      this.destroyed = false;
   }

   destroy()
   {
      this.destroyed = true;
   }
}

module.exports = Entity;
},{}],2:[function(require,module,exports){
'use strict';

var Entity = require('./entity');

class Framebuffer extends Entity
{
   constructor(name, colorAttachment, depthAttachment, scene)
   {
      super(name);

      this.buffer = undefined;
      this.colorAttachment = colorAttachment;
      this.depthAttachment = depthAttachment;
      this.scene = scene;
   }

   lock()
   {
      
   }

   bind()
   {

   }

   unbind()
   {

   }   
}

module.exports = Framebuffer;
},{"./entity":1}],3:[function(require,module,exports){
'use strict';

var Framebuffer = require('./framebuffer');

var instance = new Framebuffer();

instance.destroy();

console.log(instance);
},{"./framebuffer":2}],4:[function(require,module,exports){
'use strict';

var Entity = require('./entity');

class Renderbuffer extends Entity
{
   constructor(name, width, height)
   {
      super(name);

      this.buffer = undefined;
      this.width = width;
      this.height = height;
   }

   bind()
   {

   }

   unbind()
   {

   }
}

module.exports = Renderbuffer;
},{"./entity":1}]},{},[1,2,3,4]);
