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