'use strict';

let promise = require('./promise');

function ajax(url)
{
   return promise(function(resolve, reject)
   {
      let request = new XMLHttpRequest();

      request.open('get', url);

      request.onload = function()
      {
         let status = request.status;

         if (status === 200)
         {
            resolve(request.response);
         }
         else
         {
            let error = new Error(request.statusText);

            reject(error);
         }
      };

      request.send();
   });
}

module.exports = ajax;