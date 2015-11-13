'use strict';

QUnit.module('Program', function()
{
   QUnit.test('should return a valid instance of Program', function(assert)
   {
      var canvas = document.createElement('canvas');

      canvas.setAttribute('id', 'test');
      canvas.setAttribute('style', 'display: none');

      document.body.appendChild(canvas);

      var constructor = Four.Program.prototype.constructor.name;
      var context = new Four.Context({ selector: '#test' });
      var program = new Four.Program({ selector: '.test__renderer' });
      var buffer = program.buffer.constructor.name;
      var vertexShader = program.vertexShader;
      var fragmentShader = program.fragmentShader;

      assert.ok(constructor === 'Program', 'Passed: Program class is available.');
      assert.ok(program instanceof Four.Entity, 'Passed: Program inherits from Entity.');
      assert.ok(program instanceof Four.Program, 'Passed: Program is an instance of Program.');
      assert.ok(program.isType('Entity'), 'Passed: Program is of type Entity.');
      assert.ok(program.isType('Program'), 'Passed: Program is of type Program.');
      assert.ok(buffer === 'WebGLProgram', 'Passed: WebGLProgram successfully created.');
      assert.ok(vertexShader.check(), 'Passed: Program vertex shader successfully compiled.');
      assert.ok(fragmentShader.check(), 'Passed: Program fragment shader successfully compiled.');
      assert.ok(program.check(), 'Passed: WebGLProgram successfully linked.');

      document.body.removeChild(canvas);
   });
});
