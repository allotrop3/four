'use strict';

let gl = require('./gl');
let Entity = require('./Entity');

const _name = 'program';

/**
 * A program is an object to which shader objects can be attached. This provides a mechanism to
 * specify the shader objects that will be linked to create a program. It also provides a means for checking
 * the compatibility of the shaders that will be used to create a program (for instance, checking the
 * compatibility between a vertex shader and a fragment shader).
 * @class Program
 * @name Entity.Program
 * @extends Entity
 * @param {string} [name=program] - Specifies the entities friendly name.
 * @param {Entity.Shader.VertexShader} vertexShader - Specifies the vertex shader.
 * @param {Entity.Shader.FragmentShader} fragmentShader - Specifies the fragment shader.
 */
class Program extends Entity
{
   constructor({ name = _name, vertexShader, fragmentShader })
   {
      super({ name });

      /**
       * The program to which the vertex and fragment shader will be attached.
       * @var {WebGLProgram} [Entity.Program.program=WebGLProgram]
       */
      this.buffer = gl.createProgram();

      /**
       * The vertex shader.
       * @var {Entity.Shader.VertexShader} Entity.Program.vertexShader
       */
      this.vertexShader = vertexShader;

      /**
       * The fragment shader.
       * @var {Entity.Shader.FragmentShader} Entity.Program.fragmentShader
       */
      this.fragmentShader = fragmentShader;

      this.link();
   }

   /**
    * Links the program by creating executables for the vertex and
    * fragment shader to run on the vertex and fragment processors,
    * respectively.
    * @function Entity.Program.link
    * @returns {undefined}
    */
   link()
   {
      let buffer = this.buffer;

      gl.attachShader(buffer, this.vertexShader.buffer);
      gl.attachShader(buffer, this.fragmentShader.buffer);

      gl.linkProgram(buffer);

      this.check();
   }

   /**
    * Installs the program as part of the current rendering state.
    * @function Entity.Program.bind
    * @returns {undefined}
    */
   bind()
   {
      gl.useProgram(this.buffer);
   }

   /**
    * Validates the link status of the program.
    * @function Entity.Program.check
    * @returns {undefined|Error}
    */
   check()
   {
      let buffer = this.buffer;
      let status = gl.getProgramParameter(buffer, gl.LINK_STATUS);
      let context = gl.isContextLost();

      if (!status && !context)
      {
         let error = gl.getProgramInfoLog(buffer);

         gl.deleteProgram(buffer);

         throw new Error(error);
      }
   }
}

module.exports = Program;