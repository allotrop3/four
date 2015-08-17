'use strict';

let gl = require('./gl');
let Shader = require('./Shader');

const attribute = 'x-shader/x-vertex';

const _name = 'vertex.shader';

class VertexShader extends Shader
{
   constructor({ name = _name, selector } = {})
   {
      super({ name, selector: `${selector}[type="${attribute}"]` }, gl.VERTEX_SHADER);
   }
}

module.exports = VertexShader;