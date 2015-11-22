'use strict';

module('OrthographicCamera', function()
{
   test('should return a valid instance of OrthographicCamera', function(assert)
   {
      var orthographicCamera = new Four.OrthographicCamera();

      assert.strictEqual(Four.OrthographicCamera.prototype.constructor.name, 'OrthographicCamera', 'Passed: OrthographicCamera class is available.');
      assert.ok(orthographicCamera instanceof Four.Entity, 'Passed: OrthographicCamera inherits from Entity.');
      assert.ok(orthographicCamera instanceof Four.Camera, 'Passed: OrthographicCamera inherits from Camera.');
      assert.ok(orthographicCamera instanceof Four.OrthographicCamera, 'Passed: OrthographicCamera is an instance of OrthographicCamera.');
      assert.ok(orthographicCamera.isType('Entity'), 'Passed: OrthographicCamera is of type Entity.');
      assert.ok(orthographicCamera.isType('Camera'), 'Passed: OrthographicCamera is of type Camera.');
      assert.ok(orthographicCamera.isType('OrthographicCamera'), 'Passed: OrthographicCamera is of type OrthographicCamera.');
   });

   test('should ensure the given uniforms have corresponding properties', function(assert)
   {
      var orthographicCamera = new Four.OrthographicCamera();

      orthographicCamera.uniforms.forEach(function(uniform)
      {
         var name = uniform.uniform;

         assert.ok(name in orthographicCamera, 'Passed: OrthographicCamera has uniform property ' + name);
      });
   });

   test('should bind the perspective projection', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var program = new Four.Program({ selector: '.test__renderer' });
      var orthographicCamera = new Four.OrthographicCamera();

      orthographicCamera.bind(program);

      assert.notOk(gl.isEnabled(gl.DEPTH_TEST), 'Passed: DEPTH_TEST is disabled.');
   });
});
