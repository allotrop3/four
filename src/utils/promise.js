'use strict';

function promise(handler = false)
{
   if (handler === false)
   {
      return Promise;
   }
   else
   {
      return new Promise(handler);
   }
}

export default promise;