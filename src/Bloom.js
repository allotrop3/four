'use strict';

let Structure = require('./Structure');

const _name = 'bloom';

class Bloom extends Structure
{
   constructor({ name = _name } = {})
   {
      super({ name });
   }
}

module.exports = Bloom;
