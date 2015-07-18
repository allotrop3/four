'use strict';

let Light = require('./Light');

class PointLight extends Light
{
   constructor(ambient, diffuse, specular, coefficient, linear, quadratic, location, name = 'point.light')
   {
      super(ambient, diffuse, specular, location, name);

      this.coefficient = coefficient;
      this.linear = linear;
      this.quadratic = quadratic;
   }

   bind(uniforms)
   {
      super.bind(uniforms);

      let uniform = uniforms[this.unit];

      if (uniform === undefined)
      {
         throw new Error(`no uniforms ${this.name}`);
      }

      uniforms.coefficient.set(this.coefficient);
      uniforms.linear.set(this.linear);
      uniforms.quadratic.set(this.quadratic);
      uniforms.location.set(this.location);
   }
}

module.exports = PointLight;