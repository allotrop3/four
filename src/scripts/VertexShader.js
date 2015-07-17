'use strict';

let Shader = require('./Shader');
let gl = require('./gl');

class VertexShader extends Shader
{
   constructor(name, path)
   {
      super(name, path, gl.VERTEX_SHADER);
   }
}

module.exports = VertexShader;