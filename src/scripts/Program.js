'use strict';

var Entity = require('./Entity');
var gl = require('./gl');

class Program extends Entity
{
   constructor(name, vertexShader, fragmentShader, attributes = {}, uniforms = {})
   {
      super(name);

      this.program = gl.createProgram();
      this.vertexShader = vertexShader;
      this.fragmentShader = fragmentShader;
      this.attributes = attributes;
      this.uniforms = uniforms;
   }
}

module.exports = Program;