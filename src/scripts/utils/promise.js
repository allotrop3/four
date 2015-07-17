'use strict';

function promise(handler)
{
   return new Promise(handler);
}

module.exports = promise;