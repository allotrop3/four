'use strict';

QUnit.module('Material', function()
{
   QUnit.test('should return a valid instance of a Material', function(assert)
   {
      var constructor = Four.Material.prototype.constructor.name;
      var material = new Four.Material();

      assert.strictEqual(constructor, 'Material', 'Passed: Material class is available.');
      assert.ok(material instanceof Four.Entity, 'Passed: Material inherits from Entity.');
      assert.ok(material instanceof Four.Structure, 'Passed: Material inherits from Structure.');
      assert.ok(material instanceof Four.Material, 'Passed: Material is an instance of Material.');
      assert.ok(material.isType('Entity'), 'Passed: Material is of type Entity.');
      assert.ok(material.isType('Structure'), 'Passed: Material is of type Structure.');
      assert.ok(material.isType('Material'), 'Passed: Material is of type Material.');
      assert.strictEqual(material.type, 0, 'Passed: Material is a lambertian material with type set to 0.');
   });

   QUnit.test('should convert hexadecimal color values into valid LSL values using setter methods', function(assert)
   {
      var material = new Four.Material();

      material.ambient = 0x00FFFF;
      material.diffuse = 0x00FF00;

      assert.deepEqual(material.ambient, [0, 1, 1], 'Passed: Ambient color successfully set to [' + material.ambient + '] using 0x00FFFF');
      assert.deepEqual(material.diffuse, [0, 1, 0], 'Passed: Diffuse color successfully set to [' + material.diffuse + '] using 0x00FF00');
   });
});
