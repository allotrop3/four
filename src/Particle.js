'use strict';

import { vec3 } from 'gl-matrix';
import Entity from './Entity';

class Particle extends Entity
{
   constructor(
   {
      name = 'particle',
      mass = 1,
      damping = 0,
      acceleration = vec3.fromValues(0, 0, 0),
      velocity = vec3.fromValues(0, 0, 0),
      position = vec3.fromValues(0, 0, 0),
      normal = vec3.fromValues(0, 0, 0),
      frozen = false
   } = {})
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

   exert(force)
   {
      this.accelerate(vec3.scale(vec3.create(), force, 1 / this.mass));
   }

   accelerate(acceleration)
   {
      vec3.add(this.acceleration, this.acceleration, acceleration);
   }

   dampen(damping)
   {
      vec3.scale(this.velocity, this.velocity, damping);
   }

   euler(timestep)
   {
      if (!this.frozen)
      {
         let velocity = this.velocity;
         let position = this.position;

         vec3.add(this.velocity, velocity, vec3.scale(vec3.create(), this.acceleration, timestep));
         vec3.add(this.position, position, vec3.scale(vec3.create(), velocity, timestep));
      }
   }

   simplectic(timestep)
   {
      if (!this.frozen)
      {
         vec3.add(this.velocity, this.velocity, vec3.scale(vec3.create(), this.acceleration, timestep));
         vec3.add(this.position, this.position, vec3.scale(vec3.create(), this.velocity, timestep));
      }
   }

   verlet(timestep)
   {
      if (!this.frozen)
      {
         let previous = vec3.clone(this.previous);
         let position = vec3.clone(this.position);

         vec3.add(this.position, vec3.add(vec3.create(), position, vec3.sub(vec3.create(), position, previous)), vec3.scale(vec3.create(), this.acceleration, Math.pow(timestep, 2)));

         vec3.copy(this.previous, position);

         vec3.scale(this.velocity, vec3.sub(vec3.create(), this.position, this.previous), 1 / timestep);
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