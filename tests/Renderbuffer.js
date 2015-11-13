'use strict';

QUnit.module('Renderbuffer', function()
{
   QUnit.test('should return a valid instance of Renderbuffer', function(assert)
   {
      var canvas = document.createElement('canvas');

      canvas.setAttribute('id', 'test');
      canvas.setAttribute('style', 'display: none');

      document.body.appendChild(canvas);

      var constructor = Four.Renderbuffer.prototype.constructor.name;
      var context = new Four.Context({ selector: '#test' });
      var renderbuffer = new Four.Renderbuffer({ width: 1, height: 1 });
      var buffer = renderbuffer.buffer.constructor.name;
      var width = renderbuffer.width;
      var height = renderbuffer.height;

      assert.ok(constructor === 'Renderbuffer', 'Passed: Renderbuffer class is available.');
      assert.ok(renderbuffer instanceof Four.Entity, 'Passed: Renderbuffer inherits from Entity.');
      assert.ok(renderbuffer instanceof Four.Renderbuffer, 'Passed: Renderbuffer is an instance of Renderbuffer.');
      assert.ok(renderbuffer.isType('Entity'), 'Passed: Renderbuffer is of type Entity.');
      assert.ok(renderbuffer.isType('Renderbuffer'), 'Passed: Renderbuffer is of type Renderbuffer.');
      assert.ok(buffer === 'WebGLRenderbuffer', 'Passed: WebGLRenderbuffer successfully created.');
      assert.ok(width === 1, 'Passed: Renderbuffer width successfully set ' + width + '.');
      assert.ok(height === 1, 'Passed: Renderbuffer height successfully set ' + height + '.');

      document.body.removeChild(canvas);
   });
});
