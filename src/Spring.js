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

      this.distance = vec3.distance(A.position, B.position);

      this.stiffness = stiffness;

      this.damping = damping;

      this.type = type;

      this.inheritance = ['Entity', 'Spring'];
   }

   get A()
   {
      return this._A;
   }

   set A(A)
   {
      this._A = A;
   }

   get B()
   {
      return this._B;
   }

   set B(B)
   {
      this._B = B;
   }

   get distance()
   {
      return this._distance;
   }

   set distance(distance)
   {
      this._distance = distance;
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

   relax()
   {
      let A = this.A;
      let B = this.B;
      let direction = vec3.sub([], A.position, B.position);
      let normal = vec3.normalize([], direction);
      let velocity = vec3.sub([], A.velocity, B.velocity);
      let stiffness = this.stiffness * (this.distance - vec3.length(direction));
      let damping = this.damping * vec3.dot(velocity, normal);
      let stress = stiffness + damping;
      let force = vec3.scale([], normal, stress);

      A.exert(vec3.negate([], force));
      B.exert(force);
   }
}

export default Spring;