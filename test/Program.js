'use strict';

module('Program', function()
{
   test('should return a valid instance of Program', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var program = new Four.Program({ selector: '.test__renderer' });

      assert.strictEqual(Four.Program.prototype.constructor.name, 'Program', 'Passed: Program class is available.');
      assert.ok(program instanceof Four.Entity, 'Passed: Program inherits from Entity.');
      assert.ok(program instanceof Four.Program, 'Passed: Program is an instance of Program.');
      assert.ok(program.isType('Entity'), 'Passed: Program is of type Entity.');
      assert.ok(program.isType('Program'), 'Passed: Program is of type Program.');
      assert.ok(gl.isProgram(program.buffer), 'Passed: WebGLProgram successfully created.');
      assert.ok(program.vertexShader.check(), 'Passed: Program vertex shader successfully compiled.');
      assert.ok(program.fragmentShader.check(), 'Passed: Program fragment shader successfully compiled.');
      assert.ok(program.check(), 'Passed: WebGLProgram successfully linked.');
   });
});
