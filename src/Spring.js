'use strict';

let glm = require('gl-matrix');
let vec3 = glm.vec3;
let Entity = require('./Entity');

const _name = 'spring';
const _type = 'STRUCTURAL';

class Spring extends Entity
{
   constructor({ name = _name, A, B, stiffness, damping, type = _type })
   {
      super({ name });

      this.A = A;

      this.B = B;

      this.distance = vec3.distance.apply(vec3, particles);

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
      let displacement = this.distance - vec3.distance(A, B);
      let spring = vec3.normalize([], vec3.sub([], A, B));
      let stress = this.damping - this.stiffness * displacement;

      vec3.scale(this.force, spring, stress);

      A.exert(this.force);
      B.exert(-this.force);
   }
}

module.exports = Spring;