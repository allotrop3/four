'use strict';

module('Light', function()
{
   test('should return a valid instance of a Light', function(assert)
   {
      var light = new Four.Light();

      assert.strictEqual(Four.Light.prototype.constructor.name, 'Light', 'Passed: Light class is available.');
      assert.ok(light instanceof Four.Entity, 'Passed: Light inherits from Entity.');
      assert.ok(light instanceof Four.Structure, 'Passed: Light inherits from Structure.');
      assert.ok(light instanceof Four.Light, 'Passed: Light is an instance of Light.');
      assert.ok(light.isType('Entity'), 'Passed: Light is of type Entity.');
      assert.ok(light.isType('Structure'), 'Passed: Light is of type Structure.');
      assert.ok(light.isType('Light'), 'Passed: Light is of type Light.');
      assert.strictEqual(light.type, 0, 'Passed: Light is an ambient light with type set to 0.');
   });

   test('should ensure the given uniforms have corresponding properties', function(assert)
   {
      var light = new Four.Light();

      light.uniforms.forEach(function(uniform)
      {
         var name = uniform.uniform;

         assert.ok(name in light, 'Passed: Light has uniform property ' + name);
      });
   });

   test('should convert hexadecimal color values into valid LSL values using setter methods', function(assert)
   {
      var light = new Four.Light();

      light.ambient = 0x00FFFF;
      light.diffuse = 0x00FF00;
      light.specular = 0x0000FF;

      assert.deepEqual(light.ambient, [0, 1, 1], 'Passed: Ambient color successfully set to [' + light.ambient + '] using 0x00FFFF');
      assert.deepEqual(light.diffuse, [0, 1, 0], 'Passed: Diffuse color successfully set to [' + light.diffuse + '] using 0x00FF00');
      assert.deepEqual(light.specular, [0, 0, 1], 'Passed: Specular color successfully set to [' + light.specular + '] using 0x0000FF');
   });
});
