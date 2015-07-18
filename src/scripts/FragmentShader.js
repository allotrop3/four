'use strict';

let Shader = require('./Shader');
let gl = require('./gl');

class FragmentShader extends Shader
{
   constructor(path, name = 'fragment.shader')
   {
      super(path, gl.FRAGMENT_SHADER, name);
   }
}

module.exports = FragmentShader;