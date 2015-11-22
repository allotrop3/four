module('SpotLight', function()
{
   test('should return a valid instance of a SpotLight', function(assert)
   {
      var spotLight = new Four.SpotLight();

      assert.strictEqual(Four.SpotLight.prototype.constructor.name, 'SpotLight', 'Passed: SpotLight class is available.');
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

   test('should ensure the given uniforms have corresponding properties', function(assert)
   {
      var spotLight = new Four.SpotLight();

      spotLight.uniforms.forEach(function(uniform)
      {
         var name = uniform.uniform;

         assert.ok(name in spotLight, 'Passed: SpotLight has uniform property ' + name);
      });
   });
});
