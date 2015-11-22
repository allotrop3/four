'use strict';

module('FragmentShader', function()
{
   test('should return a valid instance of FragmentShader', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var fragmentShader = new Four.FragmentShader({ selector: '.test__renderer' });

      assert.strictEqual(Four.FragmentShader.prototype.constructor.name, 'FragmentShader', 'Passed: FragmentShader class is available.');
      assert.ok(fragmentShader instanceof Four.Entity, 'Passed: FragmentShader inherits from Entity.');
      assert.ok(fragmentShader instanceof Four.Shader, 'Passed: FragmentShader inherits from Shader.');
      assert.ok(fragmentShader instanceof Four.FragmentShader, 'Passed: FragmentShader is an instance of FragmentShader.');
      assert.ok(fragmentShader.isType('Entity'), 'Passed: FragmentShader is of type Entity.');
      assert.ok(fragmentShader.isType('Shader'), 'Passed: FragmentShader is of type Shader.');
      assert.ok(fragmentShader.isType('FragmentShader'), 'Passed: FragmentShader is of type FragmentShader.');
      assert.ok(gl.isShader(fragmentShader.buffer), 'Passed: WebGLShader successfully created.');
      assert.ok(fragmentShader.check(), 'Passed: FragmentShader successfully compiled.');
   });
});
