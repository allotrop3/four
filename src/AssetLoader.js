'use strict';

import Entity from './Entity';
import promise from './utils/promise';

const _name = 'asset.loader';
const _assets = [];

class AssetLoader extends Entity
{
   constructor({ name = _name, assets = _assets } = {})
   {
      super({ name });

      this.promises = assets;
   }

   get promises()
   {
      return this._promises;
   }

   set promises(assets)
   {
      this._promises = {};

      this._promises[Symbol.iterator] = function*()
      {
         for (var asset in assets)
         {
            yield (new assets[asset]()).promise;
         }
      }
   }

   finally(main)
   {
      return this.promise = promise().all(this.promises).then(function()
      {
         main();
      });
   }
}

export default AssetLoader;