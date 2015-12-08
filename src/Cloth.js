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

      this.particles.forEach(this.find.bind(this, faces));
   }

   find(faces, particle, i)
   {
      let cache = [];

      faces.forEach(this.thread.bind(this, cache, i));
   }

   thread(cache, i, face)
   {
      if (~face.indexOf(i))
      {
         let nearest = face.filter(neighbor => neighbor !== i && !~cache.indexOf(neighbor));
         let springs = nearest.map(this.stitch.bind(this, i));

         this.springs.push(...springs);
         cache.push(...nearest);
      }
   }

   stitch(i, j, locale)
   {
      let particles = this.particles;
      let type = 'SHEAR';

      if (locale % 2 === 0)
      {
         type = 'STRUCTURAL';
      }

      return new Spring({ i: particles[i], j: particles[j], stiffness: this.stiffness, damping: this.damping, type: type });
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
