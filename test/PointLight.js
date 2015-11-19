'use strict';

QUnit.module('PointLight', function()
{
   QUnit.test('should return a valid instance of a PointLight', function(assert)
   {
      var constructor = Four.PointLight.prototype.constructor.name;
      var pointLight = new Four.PointLight();

      assert.strictEqual(constructor, 'PointLight', 'Passed: PointLight class is available.');
      assert.ok(pointLight instanceof Four.Entity, 'Passed: PointLight inherits from Entity.');
      assert.ok(pointLight instanceof Four.Structure, 'Passed: PointLight inherits from Structure.');
      assert.ok(pointLight instanceof Four.Light, 'Passed: PointLight inherits from Light.');
      assert.ok(pointLight instanceof Four.PointLight, 'Passed: PointLight is an instance of PointLight.');
      assert.ok(pointLight.isType('Entity'), 'Passed: PointLight is of type Entity.');
      assert.ok(pointLight.isType('Structure'), 'Passed: PointLight is of type Structure.');
      assert.ok(pointLight.isType('Light'), 'Passed: PointLight is of type Light.');
      assert.ok(pointLight.isType('PointLight'), 'Passed: PointLight is of type PointLight.');
      assert.strictEqual(pointLight.type, 2, 'Passed: PointLight is a point light with type set to 2.');
   });
});
