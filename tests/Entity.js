'use strict';

QUnit.module('Entity', function()
{
   QUnit.test('should return a valid instance of Entity', function(assert)
   {
      var constructor = Four.Entity.prototype.constructor.name;
      var entity1 = new Four.Entity();
      var entity2 = new Four.Entity();
      var basename1 = entity1.basename;
      var basename2 = entity2.basename;
      var name1 = entity1.name;
      var name2 = entity2.name;
      var index1 = parseInt(name1.split('.').pop());
      var index2 = parseInt(name2.split('.').pop());
      var difference = index2 - index1;

      assert.ok(constructor === 'Entity', 'Passed: Entity class is available.');
      assert.ok(entity1 instanceof Four.Entity, 'Passed: Entity 1 is an instance of Entity.');
      assert.ok(entity2 instanceof Four.Entity, 'Passed: Entity 2 is an instance of Entity.');
      assert.ok(basename1.length, 'Passed: Entity 1 has a default basename: ' + basename1);
      assert.ok(basename2.length, 'Passed: Entity 2 has a default basename: ' + basename2);
      assert.ok(name1.length, 'Passed: Entity 1 has a default name: ' + name1);
      assert.ok(name2.length, 'Passed: Entity 2 has a default name: ' + name2);
      assert.ok(typeof index1 === 'number', 'Passed: Entity 1 has an index: ' + index1);
      assert.ok(typeof index2 === 'number', 'Passed: Entity 2 has an index: ' + index2);
      assert.ok(difference === 1, 'Passed: Entity\'s with the same basename automatically incremented the indices.');
   });

   QUnit.test('should override the default name with a given name', function(assert)
   {
      var entity = new Four.Entity({ name: 'test' });
      var basename = entity.basename;
      var name = entity.name;

      assert.ok(basename === 'test', 'Entitys\' basename correctly assigned using the given name: ' + basename);
      assert.ok(name.match('test') !== null, 'Passed: Entitys\' name correctly assigned using the given name: ' + name);
   });

   QUnit.test('should return whether or not an instance is of the given type', function(assert)
   {
      var entity = new Four.Entity();

      assert.ok(entity.isType('Entity'), 'Passed!');
      assert.ok(!entity.isType('Context'), 'Passed!');
   });
});