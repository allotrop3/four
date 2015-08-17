'use strict';

let gl = require('./gl');
let Shader = require('./Shader');

const attribute = 'x-shader/x-fragment';

const _name = 'fragment.shader';

class FragmentShader extends Shader
{
   constructor({ name = _name, selector } = {})
   {
      super({ name, selector: `${selector}[type="${attribute}"]` }, gl.FRAGMENT_SHADER);
   }
}

module.exports = FragmentShader;