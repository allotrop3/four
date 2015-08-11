'use strict';

let gl = require('./gl');
let Shader = require('./Shader');

const _name = 'fragment.shader';

/**
 * A fragment shader is used to maintain the source code strings that define
 * a shader executable on the programmable fragment processor.
 * @class FragmentShader
 * @name Entity.Shader.FragmentShader
 * @extends Entity.Shader
 * @param {string} [name=shader] - Specifies the entities friendly name.
 * @param {string} path - Specifies the relative path to the shader file.
 */
class FragmentShader extends Shader
{
   constructor({ name = _name, path } = {})
   {
      super({ name, path }, gl.FRAGMENT_SHADER);
   }
}

module.exports = FragmentShader;