'use strict';

import ParticleSystem from './ParticleSystem';
import Spring from './Spring';

const _name = 'cloth';
const _stiffness = 0;
const _damping = 0;

class Cloth extends ParticleSystem
{
   constructor({ name = _name, mesh, stiffness = _stiffness, damping = _damping, gravity, timestep, solver, paused })
   {
      super({ name, mesh, gravity, timestep, solver, paused });

      this.stiffness = stiffness;

      this.damping = damping;

      this.springs = [];

      this.inheritance = ['Entity', 'ParticleSystem', 'Cloth'];

      this.model();
   }

   get stiffness()
   {
      return this._stiffness;
   }

   set stiffness(stiffness)
   {
      this._stiffness = stiffness;
   }

   get damping()
   {
      return this._damping;
   }

   set damping(damping)
   {
      this._damping = damping;
   }

   get springs()
   {
      return this._springs;
   }

   set springs(springs)
   {
      this._springs = springs;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   model()
   {
      let indices = this.mesh.indices;
      let faces = [];

      for (let i = 0, _i = indices.length; i < _i; i += 3)
      {
         faces.push([ indices[i], indices[i + 1], indices[i + 2] ]);
      }

      faces.forEach(this.define.bind(this));
   }

   define(face, index, faces)
   {
      let neighborhood = [index];

      faces.forEach(this.sew.bind(this, neighborhood, index));
   }

   sew(neighborhood, index, indices)
   {
      if (~indices.indexOf(index))
      {
         let particles = this.particles;
         let neighbors = indices.filter(neighbor => !~neighborhood.indexOf(neighbor));
         let springs = neighbors.map(neighbor => new Spring({ A: particles[index], B: particles[neighbor], stiffness: this.stiffness, damping: this.damping }));

         this.springs.push.apply(this.springs, springs);
         neighborhood.push.apply(neighborhood, neighbors);
      }
   }

   solve()
   {
      if (!this.paused)
      {
         this.springs.forEach(spring => spring.relax());

         super.solve();
      }
   }
}

export default Cloth;