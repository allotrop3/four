'use strict';

import gl from './gl';
import Entity from './Entity';

const _name = 'attribute';
const _format = 'FLOAT';
const _normalized = false;
const _offset = 0;

class Attribute extends Entity
{
   constructor({ name = _name, attribute, length, format = _format, normalized = _normalized, offset = _offset } = {})
   {
      super({ name });

      this.attribute = attribute;

      this.location = undefined;

      this.length = length;

      this.format = format;

      this.normalized = normalized;

      this.offset = offset;

      this.inheritance = ['Entity', 'Attribute'];
   }

   get attribute()
   {
      return this._attribute;
   }

   set attribute(attribute)
   {
      this._attribute = attribute;
   }

   get location()
   {
      return this._location;
   }

   set location(location)
   {
      this._location = location;
   }

   get length()
   {
      return this._length;
   }

   set length(length)
   {
      this._length = length;
   }

   get format()
   {
      return gl[this._format];
   }

   set format(format)
   {
      this._format = format;
   }

   get normalized()
   {
      return this._normalized;
   }

   set normalized(normalized)
   {
      this._normalized = normalized;
   }

   get offset()
   {
      return this._offset;
   }

   set offset(offset)
   {
      this._offset = offset;
   }

   get length()
   {
      return this._length;
   }

   set length(length)
   {
      this._length = length;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   getByteCount(bytes)
   {
      return this.length * bytes;
   }

   locate(program)
   {
      return this.location = gl.getAttribLocation(program.buffer, `a_${this.attribute}`);
   }

   enable(program, stride = 0)
   {
      let location = this.locate(program);

      if (~location)
      {
         gl.enableVertexAttribArray(location);

         gl.vertexAttribPointer(location, this.length, this.format, this.normalized, stride, this.offset);
      }
   }

   disable()
   {
      let location = this.location;

      if (~location)
      {
         gl.disableVertexAttribArray(location);
      }
   }
}

export default Attribute;