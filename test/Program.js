'use strict';

let name = 'program.custom';
let vertexShader = new FOUR.VertexShader({ name: name, path: '../shaders/test/test.fs' });
let fragmentShader = new FOUR.FragmentShader({ name: name, path: '../shaders/test/test.fs' });
let program = new FOUR.Program({ vertexShader: vertexShader, fragmentShader: fragmentShader });

QUnit.module('FOUR.Program');

QUnit.test('FourJS namespace exists', function(assert)
{
   assert.ok(FOUR !== undefined, 'Passed!');
});

QUnit.test('FourJS Program class exists', function(assert)
{
   assert.ok(FOUR.Program !== undefined, 'Passed!');
});

QUnit.test('Name property value set to given value', function(assert)
{
   assert.ok(program.basename === name, `Passed!`);
});

QUnit.test('Vertex shader property is set to given value', function(assert)
{
   assert.ok(program.vertexShader === vertexShader, `Passed!`);
});

QUnit.test('Fragment shader property is set to given value', function(assert)
{
   assert.ok(program.fragmentShader === fragmentShader, `Passed!`);
});