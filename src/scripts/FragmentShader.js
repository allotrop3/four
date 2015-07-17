'use strict';

let Shader = require('./Shader');
let gl = require('./gl');

class FragmentShader extends Shader
{
   constructor(path, name = 'fragment.shader')
   {
      super(name, path, gl.FRAGMENT_SHADER);
   }
}

module.exports = FragmentShader;