'use strict';

QUnit.module('FragmentShader', function()
{
   QUnit.test('should return a valid instance of FragmentShader', function(assert)
   {
      var constructor = Four.FragmentShader.prototype.constructor.name;
      var context = new Four.Context({ selector: '#test' });
      var fragmentShader = new Four.FragmentShader({ selector: '.test__renderer' });
      var buffer = fragmentShader.buffer.constructor.name;

      assert.strictEqual(constructor, 'FragmentShader', 'Passed: FragmentShader class is available.');
      assert.ok(fragmentShader instanceof Four.Entity, 'Passed: FragmentShader inherits from Entity.');
      assert.ok(fragmentShader instanceof Four.Shader, 'Passed: FragmentShader inherits from Shader.');
      assert.ok(fragmentShader instanceof Four.FragmentShader, 'Passed: FragmentShader is an instance of FragmentShader.');
      assert.ok(fragmentShader.isType('Entity'), 'Passed: FragmentShader is of type Entity.');
      assert.ok(fragmentShader.isType('Shader'), 'Passed: FragmentShader is of type Shader.');
      assert.ok(fragmentShader.isType('FragmentShader'), 'Passed: FragmentShader is of type FragmentShader.');
      assert.strictEqual(buffer, 'WebGLShader', 'Passed: WebGLShader successfully created.');
      assert.ok(fragmentShader.check(), 'Passed: FragmentShader successfully compiled.');
   });
});
