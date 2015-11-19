'use strict';

QUnit.module('PerspectiveCamera', function()
{
   QUnit.test('should return a valid instance of PerspectiveCamera', function(assert)
   {
      var constructor = Four.PerspectiveCamera.prototype.constructor.name;
      var perspectiveCamera = new Four.PerspectiveCamera();

      assert.strictEqual(constructor, 'PerspectiveCamera', 'Passed: PerspectiveCamera class is available.');
      assert.ok(perspectiveCamera instanceof Four.Entity, 'Passed: PerspectiveCamera inherits from Entity.');
      assert.ok(perspectiveCamera instanceof Four.Camera, 'Passed: PerspectiveCamera inherits from Camera.');
      assert.ok(perspectiveCamera instanceof Four.PerspectiveCamera, 'Passed: PerspectiveCamera is an instance of PerspectiveCamera.');
      assert.ok(perspectiveCamera.isType('Entity'), 'Passed: PerspectiveCamera is of type Entity.');
      assert.ok(perspectiveCamera.isType('Camera'), 'Passed: PerspectiveCamera is of type Camera.');
      assert.ok(perspectiveCamera.isType('PerspectiveCamera'), 'Passed: PerspectiveCamera is of type PerspectiveCamera.');
   });
});
