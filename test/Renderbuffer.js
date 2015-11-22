'use strict';

module('Renderbuffer', function()
{
   test('should return a valid instance of Renderbuffer', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var gl = context.gl;
      var renderbuffer = new Four.Renderbuffer({ width: 1, height: 1 });
      var buffer = renderbuffer.buffer.constructor.name;
      var width = renderbuffer.width;
      var height = renderbuffer.height;

      assert.strictEqual(Four.Renderbuffer.prototype.constructor.name, 'Renderbuffer', 'Passed: Renderbuffer class is available.');
      assert.ok(renderbuffer instanceof Four.Entity, 'Passed: Renderbuffer inherits from Entity.');
      assert.ok(renderbuffer instanceof Four.Renderbuffer, 'Passed: Renderbuffer is an instance of Renderbuffer.');
      assert.ok(renderbuffer.isType('Entity'), 'Passed: Renderbuffer is of type Entity.');
      assert.ok(renderbuffer.isType('Renderbuffer'), 'Passed: Renderbuffer is of type Renderbuffer.');
      assert.ok(gl.isRenderbuffer(renderbuffer.buffer), 'Passed: WebGLRenderbuffer successfully created.');
      assert.strictEqual(width, 1, 'Passed: Renderbuffer width successfully set ' + width + '.');
      assert.strictEqual(height, 1, 'Passed: Renderbuffer height successfully set ' + height + '.');
   });
});
