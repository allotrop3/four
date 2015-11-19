'use strict';

QUnit.module('Context', function()
{
   QUnit.test('should return a valid instance of Context', function(assert)
   {
      var canvas = document.createElement('canvas');

      canvas.setAttribute('id', 'test');
      canvas.setAttribute('style', 'display: none');

      document.body.appendChild(canvas);

      var constructor = Four.Context.prototype.constructor.name;
      var context = new Four.Context({ selector: '#test' });
      var canvas = context.canvas;
      var renderer = context.gl.constructor.name;
      var dpiContextWidth = context.width / parseInt(context.canvas.style.width);
      var dpiContextHeight = context.height / parseInt(context.canvas.style.height);

      assert.strictEqual(constructor, 'Context', 'Passed: Context class is available.');
      assert.ok(context instanceof Four.Entity, 'Passed: Context inherits from Entity.');
      assert.ok(context instanceof Four.Context, 'Passed: Context is an instance of Context.');
      assert.ok(context.isType('Entity'), 'Passed: Context is of type Entity.');
      assert.ok(context.isType('Context'), 'Passed: Context is of type Context.');
      assert.ok(canvas instanceof HTMLElement, 'Passed: Found the canvas in the DOM tree using the given selector.');
      assert.strictEqual(renderer, 'WebGLRenderingContext', 'Passed: WebGLRenderingContext successfully created.');
      assert.strictEqual(dpiContextWidth, context.dpi, 'Passed: Canvas width is directly proportional to the given device pixel ratio.');
      assert.strictEqual(dpiContextHeight, context.dpi, 'Passed: Canvas height is directly proportional to the given device pixel ratio.');

      document.body.removeChild(canvas);
   });
});
