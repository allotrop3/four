'use strict';

let Shader = require('./Shader');
let gl = require('./gl');

/**
 * FragmentShader is a wrapper on WebGLShader containers
 * @class FragmentShader
 * @name Entity.Shader.FragmentShader
 * @extends Entity.Shader
 * @param {string} [name=fragment.shader] - Instance name
 * @param {string} path - Filepath to fragment shader source
 */
class FragmentShader extends Shader
{
   constructor({ name = 'fragment.shader', path } = {})
   {
      super({ name, path }, gl.FRAGMENT_SHADER);
   }
}

module.exports = FragmentShader;