'use strict';

import { vec3 } from 'gl-matrix';
import Entity from './Entity';
import Particle from './Particle';

class ParticleSystem extends Entity
{
   constructor(
   {
      mesh,
      name = 'particle.system',
      gravity = vec3.fromValues(0, -9.80665, 0),
      timestep = 0.003,
      solver = 'VERLET',
      paused = false
   } = {})
   {
      super({ name });

      this.mesh = mesh;

      this.particles = mesh.vertices.map(position => new Particle({ position: position }));

      this.gravity = gravity;

      this.timestep = timestep;

      this.solver = solver;

      this.paused = paused;

      this.inheritance = ['Entity', 'ParticleSystem'];
   }

   get mesh()
   {
      return this._mesh;
   }

   set mesh(mesh)
   {
      this._mesh = mesh;
   }

   get particles()
   {
      return this._particles;
   }

   set particles(particles)
   {
      this._particles = particles;
   }

   get gravity()
   {
      return this._gravity;
   }

   set gravity(gravity)
   {
      this._gravity = gravity;
   }

   get timestep()
   {
      return this._timestep;
   }

   set timestep(timestep)
   {
      this._timestep = timestep;
   }

   get solver()
   {
      return this._solver.toLowerCase();
   }

   set solver(solver)
   {
      this._solver = solver;
   }

   get paused()
   {
      return this._paused;
   }

   set paused(paused)
   {
      this._paused = paused;
   }

   solve()
   {
      if (!this.paused)
      {
         this.particles.forEach(this.integrate.bind(this));

         this.mesh.update(this.vertices());
      }
   }

   integrate(particle)
   {
      particle.accelerate(this.gravity);

      particle[this.solver](this.timestep);
   }

   vertices()
   {
      let particles = this.particles;
      let positions = [];

      particles.forEach(particle => positions.push(particle.position));

      return positions;
   }

   pause()
   {
      this.paused = true;
   }

   play()
   {
      this.paused = false;
   }
}

export default ParticleSystem;