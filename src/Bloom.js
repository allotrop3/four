'use strict';

import Structure from './Structure';

const _name = 'bloom';

class Bloom extends Structure
{
   constructor({ name = _name } = {})
   {
      super({ name });
   }
}

export default Bloom;