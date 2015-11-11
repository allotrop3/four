'use strict';

import { vec3 } from 'gl-matrix';
import Entity from './Entity';

const _name = 'particle';
const _mass = 1;
const _damping = 0;
const _acceleration = [0, 0, 0];
const _velocity = [0, 0, 0];
const _position = [0, 0, 0];
const _normal = [0, 0, 0];
const _frozen = false;

class Particle extends Entity
{
   constructor({ name = _name, mass = _mass, damping = _damping, acceleration = _acceleration, velocity = _velocity, position = _position, normal = _normal, frozen = _frozen } = {})
   {
      super({ name });

      this.mass = mass;

      this.damping = damping;

      this.acceleration = acceleration;

      this.velocity = velocity;

      this.previous = vec3.clone(position);

      this.position = position;

      this.normal = normal;

      this.frozen = frozen;

      this.inheritance = ['Entity', 'Particle'];
   }

   get mass()
   {
      return this._mass;
   }

   set mass(mass)
   {
      this._mass = mass;
   }

   get damping()
   {
      return this._damping;
   }

   set damping(damping)
   {
      this._damping = damping;
   }

   get acceleration()
   {
      return this._acceleration;
   }

   set acceleration(acceleration)
   {
      this._acceleration = acceleration;
   }

   get velocity()
   {
      return this._velocity;
   }

   set velocity(velocity)
   {
      this._velocity = velocity;
   }

   get previous()
   {
      return this._previous;
   }

   set previous(previous)
   {
      this._previous = previous;
   }

   get position()
   {
      return this._position;
   }

   set position(position)
   {
      this._position = position;
   }

   get normal()
   {
      return this._normal;
   }

   set normal(normal)
   {
      this._normal = normal;
   }

   get frozen()
   {
      return this._frozen;
   }

   set frozen(frozen)
   {
      this._frozen = frozen;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   exert(force)
   {
      this.accelerate(vec3.scale([], force, 1 / this.mass));
   }

   accelerate(acceleration)
   {
      vec3.add(this.acceleration, this.acceleration, acceleration);
   }

   dampen(damping)
   {
      vec3.max(this.velocity, vec3.scale([], this.velocity, damping), [0, 0, 0]);
   }

   euler(timestep)
   {
      if (!this.frozen)
      {
         let velocity = this.velocity;
         let position = this.position;

         vec3.add(this.velocity, velocity, vec3.scale([], this.acceleration, timestep));
         vec3.add(this.position, position, vec3.scale([], velocity, timestep));
      }
   }

   simplectic(timestep)
   {
      if (!this.frozen)
      {
         vec3.add(this.velocity, this.velocity, vec3.scale([], this.acceleration, timestep));
         vec3.add(this.position, this.position, vec3.scale([], this.velocity, timestep));
      }
   }

   verlet(timestep)
   {
      if (!this.frozen)
      {
         let previous = vec3.clone(this.previous);
         let position = vec3.clone(this.position);

         vec3.add(this.position, vec3.add([], position, vec3.sub([], position, previous)), vec3.scale([], this.acceleration, Math.pow(timestep, 2)));

         vec3.copy(this.previous, position);

         vec3.scale(this.velocity, vec3.sub([], this.position, this.previous), 1 / timestep);
      }
   }

   freeze()
   {
      this.frozen = true;
   }

   unfreeze()
   {
      this.frozen = false;
   }
}

export default Particle;