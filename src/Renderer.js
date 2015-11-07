'use strict';

import Entity from './Entity';

const _name = 'renderer';

class Renderer extends Entity
{
   constructor({ name = _name } = {})
   {
      super({ name });
   }
}

export default Renderer;