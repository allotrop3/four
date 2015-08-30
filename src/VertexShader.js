'use strict';

let gl = require('./gl');
let Shader = require('./Shader');

const attribute = 'x-shader/x-vertex';

const _name = 'vertex.shader';
const _type = 'VERTEX_SHADER';

class VertexShader extends Shader
{
   constructor({ name = _name, selector } = {})
   {
      super({ name, selector: `${selector}[type="${attribute}"]` }, _type);
   }
}

module.exports = VertexShader;