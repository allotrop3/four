QUnit.module('SpotLight', function()
{
   QUnit.test('should return a valid instance of a SpotLight', function(assert)
   {
      var constructor = Four.SpotLight.prototype.constructor.name;
      var spotLight = new Four.SpotLight();

      assert.strictEqual(constructor, 'SpotLight', 'Passed: SpotLight class is available.');
      assert.ok(spotLight instanceof Four.Entity, 'Passed: SpotLight inherits from Entity.');
      assert.ok(spotLight instanceof Four.Structure, 'Passed: SpotLight inherits from Structure.');
      assert.ok(spotLight instanceof Four.Light, 'Passed: SpotLight inherits from Light.');
      assert.ok(spotLight instanceof Four.SpotLight, 'Passed: SpotLight is an instance of spotLight.');
      assert.ok(spotLight.isType('Entity'), 'Passed: SpotLight is of type Entity.');
      assert.ok(spotLight.isType('Structure'), 'Passed: SpotLight is of type Structure.');
      assert.ok(spotLight.isType('Light'), 'Passed: SpotLight is of type Light.');
      assert.ok(spotLight.isType('SpotLight'), 'Passed: SpotLight is of type spotLight.');
      assert.strictEqual(spotLight.type, 3, 'Passed: SpotLight is a spot light with type set to 3.');
   });
});
