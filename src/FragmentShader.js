'use strict';

import Shader from './Shader';

const attribute = 'x-shader/x-fragment';

const _name = 'fragment.shader';
const _type = 'FRAGMENT_SHADER';

class FragmentShader extends Shader
{
   constructor({ name = _name, selector } = {})
   {
      super({ name, selector: `${selector}[type="${attribute}"]` }, _type);

      this.inheritance = ['Entity', 'Shader', 'FragmentShader'];
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }
}

export default FragmentShader;