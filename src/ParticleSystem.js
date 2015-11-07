'use strict';

import Entity from './Entity';

const _name = 'particle.system';
const _particles = [];
const _gravity = [0, -9.80665, 0];
const _timestep = 0.001;
const _solver = 'SIMPLECTIC';

class ParticleSystem extends Entity
{
   constructor({ name = _name, particles = _particles, gravity = _gravity, timestep = _timestep, solver = _solver } = {})
   {
      super({ name });

      this.particles = particles;

      this.gravity = gravity;

      this.timestep = timestep;

      this.solver = solver;

      this.inheritance = ['Entity', 'ParticleSystem'];
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

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   solve()
   {
      this.particles.forEach(this.integrate.bind(this));
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

      particles.forEach(function(particle)
      {
         positions.push(particle.position);
      });

      return positions;
   }
}

export default ParticleSystem;