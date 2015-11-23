'use strict';

import { vec3 } from 'gl-matrix';
import Entity from './Entity';

class Spring extends Entity
{
   constructor(
   {
      i,
      j,
      stiffness,
      damping,
      name = 'spring'
   } = {})
   {
      super({ name });

      this.i = i;

      this.j = j;

      this.distance = vec3.distance(i.position, j.position);

      this.stiffness = stiffness;

      this.damping = damping;

      this.inheritance = ['Entity', 'Spring'];
   }

   get i()
   {
      return this._i;
   }

   set i(i)
   {
      this._i = i;
   }

   get j()
   {
      return this._j;
   }

   set j(j)
   {
      this._j = j;
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

   relax()
   {
      let i = this.i;
      let j = this.j;
      let spring = vec3.sub(vec3.create(), j.position, i.position);
      let displacement = vec3.length(spring) - this.distance;
      let normal = vec3.normalize(vec3.create(), spring);
      let velocity = vec3.sub(vec3.create(), i.velocity, j.velocity);
      let stiffness = vec3.scale(vec3.create(), vec3.scale(vec3.create(), normal, displacement), this.stiffness);
      let damping = vec3.scale(vec3.create(), velocity, -this.damping);
      let force = vec3.add(vec3.create(), stiffness, damping);

      i.exert(force);
      j.exert(vec3.negate(vec3.create(), force));
   }
}

export default Spring;