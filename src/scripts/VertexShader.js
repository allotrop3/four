'use strict';

var Shader = require('./Shader');
var gl = require('./gl');

class VertexShader extends Shader
{
   constructor(name, path)
   {
      super(name, path, gl.VERTEX_SHADER);
   }
}

module.exports = VertexShader;