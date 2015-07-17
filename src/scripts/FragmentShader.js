'use strict';

var Shader = require('./Shader');
var gl = require('./gl');

class FragmentShader extends Shader
{
   constructor(name, path)
   {
      super(name, path, gl.FRAGMENT_SHADER);
   }
}

module.exports = FragmentShader;