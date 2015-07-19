'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

/**
 * Attribute is a wrapper on shader vertex attributes
 * @class Attribute
 * @name Attribute
 * @extends Entity
 * @param {string} [name=attribute] - Name of the Attribute instance
 * @param {Program} [program] - Program in which the vertex attribute is used
 * @param {string} attribute - Shader variable name
 * @param {number} length - Number of components
 * @param {string} [format=gl.FLOAT] - Component data format
 * @param {boolean} [normalized=false] - Force normalized components
 */
class Attribute extends Entity
{
   constructor(name = 'attribute', program, attribute, length, format = gl.FLOAT, normalized = false)
   {
      super(name);

      let args = arguments[0];

      /**
       * Shader variable name
       * @var {object} [Attribute.attribute=a_${Framebuffer.attribute}]
       * @private
       */
      this.attribute = `a_${args.attribute}`;

      /**
       * Shader vertex attribute location
       * @var {number} [Attribute.location=gl.getAttributeLocation]
       * @private
       */
      this.location = gl.getAttributeLocation(args.program, args.attribute);

      /**
       * Number of components
       * @var {number} Attribute.length
       * @private
       */
      this.length = args.length;

      /**
       * Component data format
       * @var {number} [Attribute.format=gl.FLOAT]
       * @private
       */
      this.format = args.format;

      /**
       * Force normalized components
       * @var {number} [Attribute.normalized=false]
       * @private
       */
      this.normalized = args.normalized;
   }

   /**
    * Enable vertex attribute and configure
    * its pointer on the bound VBO
    * @function Attribute.enable
    * @returns {undefined}
    */
   enable(stride, offset)
   {
      let location = this.location;

      gl.enableVertexAttribArray(location);

      gl.vertexAttribPointer(location, this.length, this.format, this.normalized, stride, offset);
   }

   /**
    * Disable vertex attribute
    * @function Attribute.disable
    * @returns {undefined}
    */
   disable()
   {
      gl.disableVertAttribArray(this.location);
   }
}

module.exports = Attribute;