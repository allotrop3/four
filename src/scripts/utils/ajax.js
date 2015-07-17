'use strict';

function ajax(url)
{
   return new Promise(function(resolve, reject)
   {
      var request = new XMLHttpRequest();

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