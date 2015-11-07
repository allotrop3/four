'use strict';

import { vec3 } from 'gl-matrix';
import Entity from './Entity';

const _name = 'spring';
const _type = 'STRUCTURAL';

class Spring extends Entity
{
   constructor({ name = _name, A, B, stiffness, damping, type = _type })
   {
      super({ name });

      this.A = A;

      this.B = B;

      this.equilibrium = vec3.distance(A.position, B.position);

      this.stiffness = stiffness;

      this.damping = damping;

      this.force = [0, 0, 0];

      this.type = type;

      this.inheritance = ['Entity', 'Spring'];
   }

   get particles()
   {
      return this._particles;
   }

   set particles(particles)
   {
      this._particles = particles;
   }

   get length()
   {
      return this._length;
   }

   set length(length)
   {
      this._length = length;
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

   get type()
   {
      return this._type;
   }

   set type(type)
   {
      this._type = type;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   relax()
   {
      let A = this.A;
      let B = this.B;
      let positionA = A.position;
      let positionB = B.position;
      let displacement = this.equilibrium - vec3.distance(positionA, positionB);
      let spring = vec3.normalize([], vec3.sub([], positionA, positionB));
      let stress = this.damping - this.stiffness * displacement;

      vec3.scale(this.force, spring, stress);

      A.exert(this.force);
      B.exert(-this.force);
   }
}

export default Spring;