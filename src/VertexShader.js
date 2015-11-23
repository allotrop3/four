'use strict';

import Shader from './Shader';

class VertexShader extends Shader
{
   constructor(
   {
      selector,
      name = 'vertex.shader'
   } = {})
   {
      super({ name, selector: `${selector}[type="x-shader/x-vertex"]` }, 'VERTEX_SHADER');

      this.inheritance = ['Entity', 'Shader', 'VertexShader'];
   }
}

export default VertexShader;