'use strict';

let promise = require('./promise');

function ajax(url, async = false)
{
   return promise(function(resolve, reject)
   {
      let request = new XMLHttpRequest();

      request.open('get', url, async);

      request.onload = function()
      {
         let status = request.status;

         if (status === 200)
         {
            resolve(request.response);
         }
         else
         {
            let status = `${url}: ${request.statusText}`;
            let error = new Error(status);

            reject(error);
         }
      };

      request.send();
   });
}

module.exports = ajax;