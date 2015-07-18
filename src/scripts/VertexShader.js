'use strict';

let Shader = require('./Shader');
let gl = require('./gl');

class VertexShader extends Shader
{
   constructor(path, name = 'vertex.shader')
   {
      super(path, gl.VERTEX_SHADER, name);
   }
}

module.exports = VertexShader;