'use strict';

let gl = require('./gl');
let Shader = require('./Shader');

const _name = 'vertex.shader';

/**
 * A vertex shader is used to maintain the source code strings that define
 * a shader executable on the programmable vertex processor.
 * @class VertexShader
 * @name Entity.Shader.VertexShader
 * @extends Entity.Shader
 * @param {string} [name=shader] - Specifies the entities friendly name.
 * @param {string} path - Specifies the relative path to the shader file.
 */
class VertexShader extends Shader
{
   constructor({ name = _name, path } = {})
   {
      super({ name, path }, gl.VERTEX_SHADER);
   }
}

module.exports = VertexShader;