'use strict';

let gl = require('./gl');
let Shader = require('./Shader');

const attribute = 'x-shader/x-fragment';

const _name = 'fragment.shader';
const _type = 'FRAGMENT_SHADER';

class FragmentShader extends Shader
{
   constructor({ name = _name, selector } = {})
   {
      super({ name, selector: `${selector}[type="${attribute}"]` }, _type);
   }
}

module.exports = FragmentShader;