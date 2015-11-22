'use strict';

module('VertexShader', function()
{
   test('should return a valid instance of VertexShader', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var vertexShader = new Four.VertexShader({ selector: '.test__renderer' });

      assert.strictEqual(Four.VertexShader.prototype.constructor.name, 'VertexShader', 'Passed: VertexShader class is available.');
      assert.ok(vertexShader instanceof Four.Entity, 'Passed: VertexShader inherits from Entity.');
      assert.ok(vertexShader instanceof Four.Shader, 'Passed: VertexShader inherits from Shader.');
      assert.ok(vertexShader instanceof Four.VertexShader, 'Passed: VertexShader is an instance of VertexShader.');
      assert.ok(vertexShader.isType('Entity'), 'Passed: VertexShader is of type Entity.');
      assert.ok(vertexShader.isType('Shader'), 'Passed: VertexShader is of type Shader.');
      assert.ok(vertexShader.isType('VertexShader'), 'Passed: VertexShader is of type VertexShader.');
      assert.ok(gl.isShader(vertexShader.buffer), 'Passed: WebGLShader successfully created.');
      assert.ok(vertexShader.check(), 'Passed: VertexShader successfully compiled.');
   });
});
