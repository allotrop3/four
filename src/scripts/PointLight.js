'use strict';

let Light = require('./Light');
let unit = 0;

class PointLight extends Light
{
   constructor(ambient, diffuse, specular, coefficient, linear, quadratic, location, name = 'point.light')
   {
      super(ambient, diffuse, specular, location, name);

      this.coefficient = coefficient;
      this.linear = linear;
      this.quadratic = quadratic;
      this.unit = unit++;
   }

   bind(uniforms)
   {
      super.bind(uniforms);

      let uniform = uniforms[this.unit];

      uniform.coefficient.set(this.coefficient);
      uniform.linear.set(this.linear);
      uniform.quadratic.set(this.quadratic);
      uniform.location.set(this.location);
   }
}

module.exports = PointLight;