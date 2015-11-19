'use strict';

QUnit.module('Context', function()
{
   QUnit.test('should return a valid instance of Context', function(assert)
   {
      var constructor = Four.Context.prototype.constructor.name;
      var context = new Four.Context({ selector: '#test' });

      assert.strictEqual(constructor, 'Context', 'Passed: Context class is available.');
      assert.ok(context instanceof Four.Entity, 'Passed: Context inherits from Entity.');
      assert.ok(context instanceof Four.Context, 'Passed: Context is an instance of Context.');
      assert.ok(context.isType('Entity'), 'Passed: Context is of type Entity.');
      assert.ok(context.isType('Context'), 'Passed: Context is of type Context.');
      assert.ok(context.canvas instanceof HTMLElement, 'Passed: Found the canvas in the DOM tree using the given selector.');
      assert.strictEqual(context.gl.constructor.name, 'WebGLRenderingContext', 'Passed: WebGLRenderingContext successfully created.');
   });
});
