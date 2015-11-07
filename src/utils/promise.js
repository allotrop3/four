'use strict';

function promise(handler)
{
   return new Promise(handler);
}

export default promise;