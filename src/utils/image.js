'use strict';

import promise from './promise';

function image(src)
{
   return promise(function(resolve, reject)
   {
      var image = new Image();

      image.src = src;

      image.onload = function()
      {
         resolve(image);
      };
   });
}

export default image;