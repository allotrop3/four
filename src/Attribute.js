'use strict';

let gl = require('./gl');
let Entity = require('./Entity');

const _name = 'attribute';
const _format = gl.FLOAT;
const _normalized = false;
const _offset = 0;

class Attribute extends Entity
{
   constructor({ name = _name, program, attribute, length, format = _format, normalized = _normalized, offset = _offset } = {})
   {
      super({ name });

      this.attribute = attribute;

      this.location = gl.getAttribLocation(program.buffer, `a_${attribute}`);

      this.length = length;

      this.format = format;

      this.normalized = normalized;

      this.offset = offset;
   }

   getByteCount(bytes)
   {
      return this.length * bytes;
   }

   enable(stride = 0)
   {
      let location = this.location;

      gl.enableVertexAttribArray(location);

      gl.vertexAttribPointer(location, this.length, this.format, this.normalized, stride, this.offset);
   }

   disable()
   {
      gl.disableVertexAttribArray(this.location);
   }
}

module.exports = Attribute;