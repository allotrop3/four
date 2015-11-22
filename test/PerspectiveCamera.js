'use strict';

module('PerspectiveCamera', function()
{
   test('should return a valid instance of PerspectiveCamera', function(assert)
   {
      var perspectiveCamera = new Four.PerspectiveCamera();

      assert.strictEqual(Four.PerspectiveCamera.prototype.constructor.name, 'PerspectiveCamera', 'Passed: PerspectiveCamera class is available.');
      assert.ok(perspectiveCamera instanceof Four.Entity, 'Passed: PerspectiveCamera inherits from Entity.');
      assert.ok(perspectiveCamera instanceof Four.Camera, 'Passed: PerspectiveCamera inherits from Camera.');
      assert.ok(perspectiveCamera instanceof Four.PerspectiveCamera, 'Passed: PerspectiveCamera is an instance of PerspectiveCamera.');
      assert.ok(perspectiveCamera.isType('Entity'), 'Passed: PerspectiveCamera is of type Entity.');
      assert.ok(perspectiveCamera.isType('Camera'), 'Passed: PerspectiveCamera is of type Camera.');
      assert.ok(perspectiveCamera.isType('PerspectiveCamera'), 'Passed: PerspectiveCamera is of type PerspectiveCamera.');
   });

   test('should ensure the given uniforms have corresponding properties', function(assert)
   {
      var perspectiveCamera = new Four.PerspectiveCamera();

      perspectiveCamera.uniforms.forEach(function(uniform)
      {
         var name = uniform.uniform;

         assert.ok(name in perspectiveCamera, 'Passed: PerspectiveCamera has uniform property ' + name);
      });
   });

   test('should bind the perspective projection', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var program = new Four.Program({ selector: '.test__renderer' });
      var perspectiveCamera = new Four.PerspectiveCamera();

      perspectiveCamera.bind(program);

      assert.ok(gl.isEnabled(gl.DEPTH_TEST), 'Passed: DEPTH_TEST is enabled.');
      assert.ok(gl.isEnabled(gl.CULL_FACE), 'Passed: CULL_FACE is enabled.');
   });
});
