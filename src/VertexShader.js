'use strict';

import Shader from './Shader';

const attribute = 'x-shader/x-vertex';

const _name = 'vertex.shader';
const _type = 'VERTEX_SHADER';

class VertexShader extends Shader
{
   constructor({ name = _name, selector } = {})
   {
      super({ name, selector: `${selector}[type="${attribute}"]` }, _type);

      this.inheritance = ['Entity', 'Shader', 'VertexShader'];
   }
}

export default VertexShader;