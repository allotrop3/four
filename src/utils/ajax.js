'use strict';

import promise from './promise';

function ajax(url, contentType = 'text/plain')
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
            let status = `${url}: ${request.statusText}`;
            let error = new Error(status);

            reject(error);
         }
      };

      request.setRequestHeader('contentType', contentType);

      request.send();
   });
}

export default ajax;