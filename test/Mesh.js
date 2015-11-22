'use strict';

module('Mesh', function()
{
   test('should return a valid instance of Mesh', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var mesh = new Four.Mesh();

      assert.strictEqual(Four.Mesh.prototype.constructor.name, 'Mesh', 'Passed: Mesh class is available.');
      assert.ok(mesh instanceof Four.Entity, 'Passed: Mesh inherits from Entity.');
      assert.ok(mesh instanceof Four.Mesh, 'Passed: Mesh is an instance of Mesh.');
      assert.ok(mesh.isType('Entity'), 'Passed: Mesh is of type Entity.');
      assert.ok(mesh.isType('Mesh'), 'Passed: Mesh is of type Mesh.');
   });
});