'use strict';

let Entity = require('./Entity');
let unit = 0;

class Light extends Entity
{
   constructor(ambient, diffuse, specular, location, name = 'light')
   {
      super(name);

      this.ambient = ambient;
      this.diffuse = diffuse;
      this.specular = specular;
      this.location = location;
      this.unit = unit++;
   }

   bind(uniforms)
   {
      let uniform = uniforms[this.unit];

      if (uniform === undefined)
      {
         throw new Error(`no uniforms ${this.name}`);
      }

      uniforms.ambient.set(this.ambient);
      uniforms.diffuse.set(this.diffuse);
      uniforms.specular.set(this.specular);
      uniforms.location.set(this.location);
   }
}

module.exports = Light;