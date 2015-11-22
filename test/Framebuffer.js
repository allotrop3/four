'use strict';

module('Framebuffer', function()
{
   test('should return a valid instance of Framebuffer', function(assert)
   {
      var context = new Four.Context({ selector: '#test' });
      var framebuffer = new Four.Framebuffer();
      var buffer = framebuffer.buffer;

      assert.strictEqual(Four.Framebuffer.prototype.constructor.name, 'Framebuffer', 'Passed: Framebuffer class is available.');
      assert.ok(framebuffer instanceof Four.Entity, 'Passed: Framebuffer inherits from Entity.');
      assert.ok(framebuffer instanceof Four.Framebuffer, 'Passed: Framebuffer is an instance of Framebuffer.');
      assert.ok(framebuffer.isType('Entity'), 'Passed: Framebuffer is of type Entity.');
      assert.ok(framebuffer.isType('Framebuffer'), 'Passed: Framebuffer is of type Framebuffer.');
      assert.strictEqual(buffer, null, 'Passed: Framebuffer buffer references the default framebuffer: ' + buffer + '.');
      assert.ok(framebuffer.check(), 'Passed: Framebuffer is complete.');
   });
});
