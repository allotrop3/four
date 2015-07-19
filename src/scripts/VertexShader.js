'use strict';

let Shader = require('./Shader');
let gl = require('./gl');

/**
 * VertexShader is a wrapper on WebGLShader buffers
 * @class VertexShader
 * @name Entity.Shader.VertexShader
 * @extends Entity.Shader
 * @param {string} [name=vertex.shader] - Instance name
 * @param {string} path - Filepath to vertex shader source
 */
class VertexShader extends Shader
{
   constructor(name = 'vertex.shader', path)
   {
      super(name, path, gl.VERTEX_SHADER);
   }
}

module.exports = VertexShader;