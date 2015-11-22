'use strict';

QUnit.module('VertexArrayObject', function()
{
   QUnit.test('should return a valid instance of VertexArrayObject', function(assert)
   {
      var constructor = Four.VertexArrayObject.prototype.constructor.name;
      var context = new Four.Context({ selector: '#test' });
      var vao = new Four.VertexArrayObject();

      assert.strictEqual(constructor, 'VertexArrayObject', 'Passed: VertexArrayObject class is available.');
      assert.ok(vao instanceof Four.Entity, 'Passed: VertexArrayObject inherits from Entity.');
      assert.ok(vao instanceof Four.VertexArrayObject, 'Passed: VertexArrayObject is an instance of VertexArrayObject.');
      assert.ok(vao.isType('Entity'), 'Passed: VertexArrayObject is of type Entity.');
      assert.ok(vao.isType('VertexArrayObject'), 'Passed: VertexArrayObject is of type VertexArrayObject.');
   });

   QUnit.test('should instantiate Attributes from the given attributes using the built-in setter method', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var vao = new Four.VertexArrayObject({ attributes: ['vec3 position', 'vec3 normal'] });

      vao.attributes.forEach(function(attribute)
      {
         assert.ok(attribute instanceof Four.Attribute, 'Passed: Attribute::' + attribute.name + ' is an instance of Attribute.');
      });
   });

   QUnit.test('should enable all attributes', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var vao = new Four.VertexArrayObject({ attributes: ['vec3 position', 'vec3 normal'] });
      var program = new Four.Program({ selector: '.test__renderer' });

      vao.bind(program);

      vao.attributes.forEach(function(attribute)
      {
         assert.ok(gl.getVertexAttrib(attribute.location, gl.VERTEX_ATTRIB_ARRAY_ENABLED), 'Passed: Attribute::' + attribute.name + ' successfully enabled.');
      });
   });

   QUnit.test('should disable all attributes', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var vao = new Four.VertexArrayObject({ attributes: ['vec3 position', 'vec3 normal'] });
      var program = new Four.Program({ selector: '.test__renderer' });

      vao.bind(program);

      vao.attributes.forEach(function(attribute)
      {
         assert.ok(gl.getVertexAttrib(attribute.location, gl.VERTEX_ATTRIB_ARRAY_ENABLED), 'Passed: Attribute::' + attribute.name + ' successfully enabled.');
      });

      vao.unbind();

      vao.attributes.forEach(function(attribute)
      {
         assert.notOk(gl.getVertexAttrib(attribute.location, gl.VERTEX_ATTRIB_ARRAY_ENABLED), 'Passed: Attribute::' + attribute.name + ' successfully disabled.');
      });
   });
});