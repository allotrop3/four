'use strict';

import promise from './promise';

function image(src)
{
   return promise(function(resolve, reject)
   {
      var image = new Image();

      image.src = src;

      image.onload = function(response)
      {
         resolve(image, response);
      };

      image.onerror = function(response)
      {
         reject(response);
      }
   });
}

export default image;