'use strict';

import ParticleSystem from './ParticleSystem';
import Spring from './Spring';

class Cloth extends ParticleSystem
{
   constructor({
      mesh,
      gravity,
      timestep,
      solver,
      paused,
      name = 'cloth',
      stiffness = 0,
      damping = 0
   } = {})
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

   model()
   {
      let indices = this.mesh.indices;
      let faces = [];
      let corners = 3;

      for (let index = 0, _index = indices.length; index < _index; index += corners)
      {
         let face = indices.slice(index, index + corners);

         faces.push(face);
      }

      faces.forEach(this.huddle.bind(this));
   }

   huddle(face, index, faces)
   {
      let neighborhood = [index];

      faces.forEach(this.instantiate.bind(this, neighborhood, index));
   }

   instantiate(neighborhood, index, indices)
   {
      if (~indices.indexOf(index))
      {
         let particles = this.particles;
         let i = particles[index];
         let neighbors = indices.filter(neighbor => !~neighborhood.indexOf(neighbor));
         let springs = neighbors.map((neighbor, index) => new Spring({ i: i, j: particles[neighbor], stiffness: this.stiffness, damping: this.damping, type: (index % 2 ? 'STRUCTURAL' : 'SHEAR') }));

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
