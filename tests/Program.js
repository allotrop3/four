'use strict';

QUnit.module('Program', function()
{
   QUnit.test('should return a valid instance of Program', function(assert)
   {
      var canvas = document.createElement('canvas');

      canvas.setAttribute('id', 'test');
      canvas.setAttribute('style', 'display: none');

      document.body.appendChild(canvas);

      var constructor = Four.Program.prototype.constructor.name;
      var context = new Four.Context({ selector: '#test' });
      var program = new Four.Program({ selector: '.test__renderer' });

      assert.ok(constructor === 'Program', 'Passed: Program class is available.');
      assert.ok(program instanceof Four.Entity, 'Passed: Program inherits from Entity.');
      assert.ok(program instanceof Four.Program, 'Passed: Program is an instance of Program.');

      document.body.removeChild(canvas);
   });
});
