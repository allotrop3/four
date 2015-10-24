'use strict';

let LSL = require('./utils/LSL');
let Structure = require('./Structure');

const shades = { flat: 1, smooth: 0 };

const _name = 'material';
const _path = 'material';
const _uniforms = ['sampler image', 'vec3 ambient', 'vec3 diffuse', 'i shading', 'i type'];
const _pattern = {};
const _ambient = 0xFFFFFF;
const _diffuse = 0xFFFFFF;
const _shading = 'smooth';

class Material extends Structure
{
   constructor({ name = _name, path = _path, uniforms = _uniforms, pattern = _pattern, ambient = _ambient, diffuse = _diffuse, shading = _shading } = {})
   {
      super({ name, path, uniforms });

      this.ambient = ambient;

      this.diffuse = diffuse;

      this.image = pattern.unit;

      this.shading = shades[shading];

      this.pattern = pattern;

      this.type = 0;

      this.inheritance = ['Entity', 'Structure', 'Material'];
   }

   get ambient()
   {
      return this._ambient;
   }

   set ambient(ambient)
   {
      this._ambient = LSL(ambient);
   }

   get diffuse()
   {
      return this._diffuse;
   }

   set diffuse(diffuse)
   {
      this._diffuse = LSL(diffuse);
   }

   get image()
   {
      return this._image;
   }

   set image(image)
   {
      this._image = image;
   }

   get shading()
   {
      return this._shading;
   }

   set shading(shading)
   {
      this._shading = shades[shading];
   }

   get pattern()
   {
      return this._pattern;
   }

   set pattern(pattern)
   {
      this._pattern = pattern;
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

   bind(program)
   {
      super.bind(program);

      if (this.image !== undefined)
      {
         this.pattern.bind();
      }
   }

   unbind()
   {
      super.unbind();

      if (this.image !== undefined)
      {
         this.pattern.unbind();
      }
   }
}

module.exports = Material;
