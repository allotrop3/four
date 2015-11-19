'use strict';

QUnit.module('Attribute', function()
{
   QUnit.test('should return a valid instance of Attribute', function(assert)
   {
      var constructor = Four.Attribute.prototype.constructor.name;
      var attribute = new Four.Attribute();

      assert.strictEqual(constructor, 'Attribute', 'Passed: Attribute class is available.');
      assert.ok(attribute instanceof Four.Entity, 'Passed: Attribute inherits from Entity.');
      assert.ok(attribute instanceof Four.Attribute, 'Passed: Attribute is an instance of Attribute.');
      assert.ok(attribute.isType('Entity'), 'Passed: Attribute is of type Entity.');
      assert.ok(attribute.isType('Attribute'), 'Passed: Attribute is of type Attribute.');
   });

   QUnit.test('should locate the attribute within the given program', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var program = new Four.Program({ selector: '.test__renderer' });
      var attribute1 = new Four.Attribute({ attribute: 'position', length: 3 });
      var attribute2 = new Four.Attribute({ attribute: 'color', length: 3 });

      attribute1.locate(program);
      attribute2.locate(program);

      assert.notStrictEqual(attribute1.location, -1, 'Passed: Position attribute successfully located within the given program.');
      assert.strictEqual(attribute2.location, -1, 'Passed: Color attribute not found within the given program.');
   });

   QUnit.test('should enable and disable the attribute location for the given program', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var program = new Four.Program({ selector: '.test__renderer' });
      var attribute = new Four.Attribute({ attribute: 'position', length: 3 });

      attribute.enable(program);

      assert.ok(gl.getVertexAttrib(attribute.location, gl.VERTEX_ATTRIB_ARRAY_ENABLED), 'Passed: Position attribute successfully enabled.');

      attribute.disable();

      assert.notOk(gl.getVertexAttrib(attribute.location, gl.VERTEX_ATTRIB_ARRAY_ENABLED), 'Passed: Position attribute successfully disabled.');
   });

   QUnit.test('should return the number of bytes for the attribute using the given byte length', function(assert)
   {
      var attribute = new Four.Attribute({ length: 3 });
      var byteCount = attribute.getByteCount(4);

      assert.strictEqual(byteCount, 12, 'Passed: Attribute byte count calculated using given byte length.');
   });
});
