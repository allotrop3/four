'use strict';

let Entity = require('./Entity');

const _name = 'particle.system';
const _particles = [];
const _gravity = [0, -9.80665, 0];
const _timestep = 0.03;
const _integrator = 'SIMPLECTIC';

class ParticleSystem extends Entity
{
   constructor({ name = _name, particles = _particles, gravity = _gravity, timestep = _timestep, integrator = _integrator } = {})
   {
      super({ name });

      this.particles = particles;

      this.gravity = gravity;

      this.timestep = timestep;

      this.integrator = integrator;

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

   get integrator()
   {
      return this._integrator.toLowerCase();
   }

   set integrator(integrator)
   {
      this._integrator = integrator;
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

      particle[this.integrator](this.timestep);
   }
}

module.exports = ParticleSystem;