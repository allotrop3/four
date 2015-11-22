'use strict';

module('VertexArrayObject', function()
{
   test('should return a valid instance of VertexArrayObject', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var vao = new Four.VertexArrayObject();

      assert.strictEqual(Four.VertexArrayObject.prototype.constructor.name, 'VertexArrayObject', 'Passed: VertexArrayObject class is available.');
      assert.ok(vao instanceof Four.Entity, 'Passed: VertexArrayObject inherits from Entity.');
      assert.ok(vao instanceof Four.VertexArrayObject, 'Passed: VertexArrayObject is an instance of VertexArrayObject.');
      assert.ok(vao.isType('Entity'), 'Passed: VertexArrayObject is of type Entity.');
      assert.ok(vao.isType('VertexArrayObject'), 'Passed: VertexArrayObject is of type VertexArrayObject.');
      // assert.ok(gl.isBuffer(vao.primary), 'Passed: WebGLBuffer created successfully.');
   });

   test('should instantiate Attributes from the given attributes using the built-in setter method', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var vao = new Four.VertexArrayObject({ attributes: ['vec3 position', 'vec3 normal'] });

      vao.attributes.forEach(function(attribute)
      {
         assert.ok(attribute instanceof Four.Attribute, 'Passed: Attribute::' + attribute.name + ' is an instance of Attribute.');
      });
   });

   test('should enable all attributes', function(assert)
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

   test('should disable all attributes', function(assert)
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