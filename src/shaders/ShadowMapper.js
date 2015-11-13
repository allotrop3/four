'use strict';

let VERTEX_SHADER = `
   varying vec4 v_shadow;

   void ShadowMapper_main(vec4 position)
   {
      v_shadow = mat4(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0) * position;
   }
`;

let FRAGMENT_SHADER = `
   struct ShadowMapper
   {
      int antialias;
   };

   uniform ShadowMapper u_shadowMapper;
   uniform sampler2D u_shadowMap;

   varying vec4 v_shadow;

   float ShadowMapper_step(vec4 nearest)
   {
      if (nearest.x >= 0.0 && nearest.x <= 1.0 && nearest.y >= 0.0 && nearest.y <= 1.0)
      {
         float shadow = texture2D(u_shadowMap, nearest.xy).r;
         float biased = nearest.z * 0.99995;

         if (shadow <= biased)
         {
            return 0.3;
         }
      }

      return 1.0;
   }

   float ShadowMapper_visibility()
   {
      vec4 depth = vec4(v_shadow.xyz / v_shadow.w, v_shadow.w);
      float result = ShadowMapper_step(depth);
      float count = 1.0;

      if (u_shadowMapper.antialias == 1)
      {
         for (float x = -0.01; x <= 0.01; x += 0.005)
         {
            for (float y = -0.01; y <= 0.01; y += 0.005)
            {
               vec4 nearest = depth + vec4(x, y, 0.0, 0.0) / depth.w;

               result += ShadowMapper_step(nearest);

               count++;
            }
         }
      }

      return result / count;
   }
`;

export default {
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};