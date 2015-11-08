'use strict';

import Entity from './Entity';
import Particle from './Particle';

const _name = 'particle.system';
const _gravity = [0, -9.80665, 0];
const _timestep = 0.001;
const _solver = 'SIMPLECTIC';
const _paused = false;

class ParticleSystem extends Entity
{
   constructor({ name = _name, mesh, gravity = _gravity, timestep = _timestep, solver = _solver, paused = _paused } = {})
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

   unpause()
   {
      this.paused = false;
   }
}

export default ParticleSystem;