'use strict';

import Shader from './Shader';

class FragmentShader extends Shader
{
   constructor(
   {
      selector,
      name = 'fragment.shader'
   } = {})
   {
      super({ name, selector: `${selector}[type="x-shader/x-fragment"]` }, 'FRAGMENT_SHADER');

      this.inheritance = ['Entity', 'Shader', 'FragmentShader'];
   }
}

export default FragmentShader;