'use strict';

import ParticleSystem from './ParticleSystem';
import Spring from './Spring';

const _name = 'cloth';

class Cloth extends ParticleSystem
{
   constructor({ name = _name, mesh, gravity, timestep, solver })
   {
      super({ name, mesh, gravity, timestep, solver });

      this.inheritance = ['Entity', 'ParticleSystem', 'Cloth'];

      this.sew();
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   sew()
   {
      let particles = this.particles;
   }
}

export default Cloth;