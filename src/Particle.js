'use strict';

import { vec3 } from 'gl-matrix';
import Entity from './Entity';

const _name = 'particle';
const _mass = 1;
const _damping = 0;
const _force = [0, 0, 0];
const _acceleration = [0, 0, 0];
const _velocity = [0, 0, 0];
const _position = [0, 0, 0];
const _normal = [0, 0, 0];

class Particle extends Entity
{
   constructor({ name = _name, mass = _mass, damping = _damping, force = _force, acceleration = _acceleration, velocity = _velocity, position = _position, normal = _normal } = {})
   {
      super({ name });

      this.mass = mass;

      this.damping = damping;

      this.force = force;

      this.acceleration = acceleration;

      this.velocity = velocity;

      this.previous = position;

      this.position = position;

      this.normal = normal;

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

   get force()
   {
      return this._force;
   }

   set force(force)
   {
      this._force = force;
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
      vec3.add(this.force, this.force, force);
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
      let velocity = this.velocity;
      let position = this.position;

      vec3.add(this.velocity, velocity, vec3.scale([], this.acceleration, timestep));
      vec3.add(this.position, position, vec3.scale([], velocity, timestep));
   }

   simplectic(timestep)
   {
      vec3.add(this.velocity, this.velocity, vec3.scale([], this.acceleration, timestep));
      vec3.add(this.position, this.position, vec3.scale([], this.velocity, timestep));
   }

   verlet(timestep)
   {
      let previous = this.previous;
      let position = this.position;
      let leap = vec3.sub([], position, previous);

      vec3.add(this.position, vec3.add([], position, leap), vec3.scale([], this.acceleration, Math.pow(timestep, 2)));

      vec3.copy(this.previous, position);
   }
}

export default Particle;