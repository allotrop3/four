'use strict';

let Light = require('./Light');

class PointLight extends Light
{
   constructor(name = 'point.light', ambient, diffuse, specular, coefficient, linear, quadratic, intensity, location)
   {
      super(name, ambient, diffuse, specular, intensity, location);

      this.coefficient = coefficient;
      this.linear = linear;
      this.quadratic = quadratic;
   }

   bind(uniform)
   {
      super.bind(uniform);

      uniform.coefficient.set(this.coefficient);
      uniform.linear.set(this.linear);
      uniform.quadratic.set(this.quadratic);
      uniform.location.set(this.location);
   }
}

module.exports = PointLight;