QUnit.module('Context', function()
{
   QUnit.test('should have the Context class attached to the Four namespace', function(assert)
   {
      var constructor = Four.Context.prototype.constructor.name;

      assert.ok(constructor === 'Context', 'Passed!');
   });

   QUnit.test('should return an instance of a Context', function(assert)
   {
      var canvas = document.createElement('canvas');

      canvas.setAttribute('id', 'test');
      canvas.setAttribute('style', 'display: none');

      document.body.appendChild(canvas);

      var context = new Four.Context({ selector: '#test' });

      assert.ok(context instanceof Four.Context, 'Passed!');

      document.body.removeChild(canvas);
   });

   QUnit.test('should inherit from the Entity class', function(assert)
   {
      var canvas = document.createElement('canvas');

      canvas.setAttribute('id', 'test');
      canvas.setAttribute('style', 'display: none');

      document.body.appendChild(canvas);

      var context = new Four.Context({ selector: '#test' });
      console.log(Four);

      assert.ok(context instanceof Four.Entity, 'Passed!');

      document.body.removeChild(canvas);
   });

   QUnit.test('should find the canvas using the given id selector', function(assert)
   {
      var canvas = document.createElement('canvas');

      canvas.setAttribute('id', 'test');
      canvas.setAttribute('style', 'display: none');

      document.body.appendChild(canvas);

      var context = new Four.Context({ selector: '#test' });

      assert.ok(context.canvas instanceof HTMLElement, 'Passed!');

      document.body.removeChild(canvas);
   });

   QUnit.test('should find the canvas using the given class name', function(assert)
   {
      var canvas = document.createElement('canvas');

      canvas.setAttribute('class', 'test');
      canvas.setAttribute('style', 'display: none');

      document.body.appendChild(canvas);

      var context = new Four.Context({ selector: '.test' });

      assert.ok(context.canvas instanceof HTMLElement, 'Passed!');

      document.body.removeChild(canvas);
   });

   QUnit.test('should return a valid WebGL rendering context', function(assert)
   {
      var canvas = document.createElement('canvas');

      canvas.setAttribute('id', 'test');
      canvas.setAttribute('style', 'display: none');

      document.body.appendChild(canvas);

      var context = new Four.Context({ selector: '#test' });
      var constructor = context.gl.constructor.name;

      assert.ok(constructor === 'WebGLRenderingContext', 'Passed!');

      document.body.removeChild(canvas);
   });

   QUnit.test('should return the dimensions of the canvas proprtional to the given device pixel ratio', function(assert)
   {
      var canvas = document.createElement('canvas');

      canvas.setAttribute('id', 'test');
      canvas.setAttribute('style', 'display: none');

      document.body.appendChild(canvas);

      var context = new Four.Context({ selector: '#test' });
      var dpiContextWidth = context.width / parseInt(context.canvas.style.width);
      var dpiContextHeight = context.height / parseInt(context.canvas.style.height);

      assert.ok(dpiContextWidth === context.dpi, 'Width passed!');
      assert.ok(dpiContextHeight === context.dpi, 'Height passed!');

      document.body.removeChild(canvas);
   });
});
