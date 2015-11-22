'use strict';

module('PhongMaterial', function()
{
   test('should return a valid instance of a PhongMaterial', function(assert)
   {
      var phongMaterial = new Four.PhongMaterial();

      assert.strictEqual(Four.PhongMaterial.prototype.constructor.name, 'PhongMaterial', 'Passed: PhongMaterial class is available.');
      assert.ok(phongMaterial instanceof Four.Entity, 'Passed: PhongMaterial inherits from Entity.');
      assert.ok(phongMaterial instanceof Four.Structure, 'Passed: PhongMaterial inherits from Structure.');
      assert.ok(phongMaterial instanceof Four.Material, 'Passed: PhongMaterial inherits from Material.');
      assert.ok(phongMaterial instanceof Four.PhongMaterial, 'Passed: PhongMaterial is an instance of PhongMaterial.');
      assert.ok(phongMaterial.isType('Entity'), 'Passed: PhongMaterial is of type Entity.');
      assert.ok(phongMaterial.isType('Structure'), 'Passed: PhongMaterial is of type Structure.');
      assert.ok(phongMaterial.isType('Material'), 'Passed: PhongMaterial is of type Material.');
      assert.ok(phongMaterial.isType('PhongMaterial'), 'Passed: PhongMaterial is of type PhongMaterial.');
      assert.strictEqual(phongMaterial.type, 1, 'Passed: PhongMaterial is a reflective material with type set to 1.');
   });

   test('should ensure the given uniforms have corresponding properties', function(assert)
   {
      var phongMaterial = new Four.PhongMaterial();

      phongMaterial.uniforms.forEach(function(uniform)
      {
         var name = uniform.uniform;

         assert.ok(name in phongMaterial, 'Passed: PhongMaterial has uniform property ' + name);
      });
   });

   test('should convert hexadecimal color values into valid LSL values using setter methods', function(assert)
   {
      var phongMaterial = new Four.PhongMaterial();

      phongMaterial.ambient = 0x00FFFF;
      phongMaterial.diffuse = 0x00FF00;
      phongMaterial.specular = 0xFF00FF;

      assert.deepEqual(phongMaterial.ambient, [0, 1, 1], 'Passed: Ambient color successfully set to [' + phongMaterial.ambient + '] using 0x00FFFF');
      assert.deepEqual(phongMaterial.diffuse, [0, 1, 0], 'Passed: Diffuse color successfully set to [' + phongMaterial.diffuse + '] using 0x00FF00');
      assert.deepEqual(phongMaterial.specular, [1, 0, 1], 'Passed: Specular color successfully set to [' + phongMaterial.specular + '] using 0xFF00FF');
   });
});
