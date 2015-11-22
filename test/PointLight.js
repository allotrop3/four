'use strict';

module('PointLight', function()
{
   test('should return a valid instance of a PointLight', function(assert)
   {
      var pointLight = new Four.PointLight();

      assert.strictEqual(Four.PointLight.prototype.constructor.name, 'PointLight', 'Passed: PointLight class is available.');
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

   test('should ensure the given uniforms have corresponding properties', function(assert)
   {
      var pointLight = new Four.PointLight();

      pointLight.uniforms.forEach(function(uniform)
      {
         var name = uniform.uniform;

         assert.ok(name in pointLight, 'Passed: PointLight has uniform property ' + name);
      });
   });
});
