'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

/**
 * Program is a wrapper on WebGLProgram containers
 * @class Program
 * @name Entity.Program
 * @extends Entity
 * @param {string} [name=program] - Instance name
 * @param {Entity.Shader.VertexShader} vertexShader - Vertex shader
 * @param {Entity.Shader.FragmentShader} fragmentShader - Fragment shader
 */
class Program extends Entity
{
   constructor({ name = 'program', vertexShader, fragmentShader })
   {
      super({ name });

      /**
       * WebGL program container
       * @var {WebGLProgram} Entity.Program.program
       * @default WebGLProgram
       * @private
       */
      this.buffer = gl.createProgram();

      /**
       * Vertex shader
       * @var {Entity.Shader.VertexShader} Entity.Program.vertexShader
       * @private
       */
      this.vertexShader = vertexShader;

      /**
       * Fragment shader
       * @var {Entity.Shader.FragmentShader} Entity.Program.fragmentShader
       * @private
       */
      this.fragmentShader = fragmentShader;

      this.link();
   }

   /**
    * Link the vertex and fragment shader to the program
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
    * Bind the program vertex and fragment shader
    * @function Entity.Program.bind
    * @returns {undefined}
    */
   bind()
   {
      gl.useProgram(this.buffer);
   }

   /**
    * Validate the program vertex and fragment
    * shader link status
    * @function Entity.Program.check
    * @returns {undefined}
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