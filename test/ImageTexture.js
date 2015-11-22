'use strict';

module('ImageTexture', function()
{
   test('should return a valid instance of ImageTexture', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var imageTexture = new Four.ImageTexture({ path: '/resources/textures/floor.jpg' });
      var done = assert.async();

      imageTexture.promise.then(
         function()
         {
            assert.strictEqual(Four.ImageTexture.prototype.constructor.name, 'ImageTexture', 'Passed: ImageTexture class is available.');
            assert.ok(imageTexture instanceof Four.Entity, 'Passed: ImageTexture inherits from Entity.');
            assert.ok(imageTexture instanceof Four.ImageTexture, 'Passed: ImageTexture is an instance of ImageTexture.');
            assert.ok(imageTexture.isType('Entity'), 'Passed: ImageTexture is of type Entity.');
            assert.ok(imageTexture.isType('ImageTexture'), 'Passed: ImageTexture is of type ImageTexture.');
            assert.ok(gl.isTexture(imageTexture.buffer), 'Passed: WebGLTexture successfully created.');
            assert.ok(imageTexture.image instanceof Image, 'Passed: ImageTexture texture is a valid image.');

            done();
         },
         function(response)
         {
            assert.ok(false, 'Failed: ImageTexture failed to fetch image');

            done();
         }
      );
   });
});
