'use strict';

module('DataTexture', function()
{
   test('should return a valid instance of DataTexture', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var width = 5;
      var height = 5;
      var dataTexture = new Four.DataTexture({ image: [], width: width, height: height });

      assert.strictEqual(Four.DataTexture.prototype.constructor.name, 'DataTexture', 'Passed: DataTexture class is available.');
      assert.ok(dataTexture instanceof Four.Entity, 'Passed: DataTexture inherits from Entity.');
      assert.ok(dataTexture instanceof Four.Texture, 'Passed: DataTexture inherits from Texture.');
      assert.ok(dataTexture instanceof Four.DataTexture, 'Passed: DataTexture is an instance of DataTexture.');
      assert.ok(dataTexture.isType('Entity'), 'Passed: DataTexture is of type Entity.');
      assert.ok(dataTexture.isType('Texture'), 'Passed: DataTexture is of type Texture.');
      assert.ok(dataTexture.isType('DataTexture'), 'Passed: DataTexture is of type DataTexture.');
   });

   test('should return a valid instance of DataTexture for GPGPU rendering', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var width = 5;
      var height = 5;
      var dataTexture = new Four.DataTexture({ image: [], width: width, height: height });
      var length = width * height * dataTexture.length;

      assert.strictEqual(dataTexture.image.length, length, 'Passed: DataTexture image successfully filled.');
      assert.ok(gl.isTexture(dataTexture.buffer), 'Passed: WebGLTexture successfully created.');
   });

   test('should return a valid instance of DataTexture for deferred rendering', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var dataTexture = new Four.DataTexture({ width: 5, height: 5 });

      assert.strictEqual(dataTexture.image, null, 'Passed: DataTexture is null.');
      assert.strictEqual(gl.isTexture(dataTexture.buffer), 'Passed: WebGLTexture successfully created.');
   });
});
