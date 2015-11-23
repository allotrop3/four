'use strict';

import { vec3 } from 'gl-matrix';
import Entity from './Entity';

class Spring extends Entity
{
   constructor(
   {
      A,
      B,
      stiffness,
      damping,
      name = 'spring',
      type = 'STRUCTURAL'
   } = {})
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
      let distance = this.distance;
      let direction = vec3.sub(vec3.create(), B.position, A.position);
      let length = vec3.length(direction);

      if (length >= distance)
      {
         let displacement = length - distance;
         let normal = vec3.normalize(vec3.create(), direction);
         let velocity = vec3.sub(vec3.create(), A.velocity, B.velocity);
         let stiffness = vec3.scale(vec3.create(), vec3.scale(vec3.create(), normal, displacement), this.stiffness);
         let damping = vec3.scale(vec3.create(), velocity, -this.damping);
         let force = vec3.add(vec3.create(), stiffness, damping);

         A.exert(force);
      }
   }
}

export default Spring;