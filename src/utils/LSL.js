'use strict';

function LSL(hex)
{
   let r = hex >> 16 & 0xFF;
   let g = hex >> 8 & 0xFF;
   let b = hex & 0xFF;

   r /= 255;
   g /= 255;
   b /= 255;

   return [r, g, b];
}


export default LSL;