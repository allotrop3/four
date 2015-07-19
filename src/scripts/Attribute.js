'use strict';

let Entity = require('./Entity');
let gl = require('./gl');
let errors = require('./utils/errors');
let typer = require('./utils/typer');

/**
 * Attribute is a wrapper on shader attributes.
 * @class Attribute
 * @name Attribute
 * @extends Entity
 * @param {string=} [name=attribute] - Name of the Attribute instance
 * @param {Program} program - Program in which the attribute is used
 * @param {string} attribute - Variable name as used in the shader
 * @param {number} length - Number of components
 * @param {string=} [format=FLOAT] - Data format
 * @param {boolean=} [normalized=false] - Force normalized values
 */
class Attribute extends Entity
{
   constructor(name = 'attribute', program, attribute, length, format = 'FLOAT', normalized = false)
   {
      super(name);

      /**
       * Variable name as used in the shader.
       * @var {object} Attribute.attribute
       * @default a_${Framebuffer.attribute}
       * @private
       */
      this.attribute = `a_${attribute}`;
      this.location = gl.getAttributeLocation(program, attribute);
      this.length = length;
      this.format = gl[format];
      this.normalized = normalized;
   }

   get attribute()
   {
      errors.access('buffer');
   }

   set attribute(value)
   {
      this.attribute = typer.valid(value, 'string');
   }

   enable(stride, offset)
   {
      let location = this.location;

      gl.enableVertexAttribArray(location);

      gl.vertexAttribPointer(location, this.length, this.format, this.normalized, stride, offset);
   }

   disable()
   {
      gl.disableVertAttribArray(this.location);
   }
}

module.exports = Attribute;