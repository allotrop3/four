'use strict';

let Shader = require('./Shader');
let gl = require('./gl');

class FragmentShader extends Shader
{
   constructor(name, path)
   {
      super(name, path, gl.FRAGMENT_SHADER);
   }
}

module.exports = FragmentShader;