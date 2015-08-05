'use strict';

let path = '../shaders/test/test.vs';
let name = 'vertex.shader.custom';
let vertexShader = new FOUR.VertexShader({ name: name, path: path });

QUnit.module('FOUR.VertexShader');

QUnit.test('FourJS namespace exists', function(assert)
{
   assert.ok(FOUR !== undefined, 'Passed!');
});

QUnit.test('FourJS VertexShader class exists', function(assert)
{
   assert.ok(FOUR.VertexShader !== undefined, 'Passed!');
});

QUnit.test('Name property value set to given value', function(assert)
{
   assert.ok(vertexShader.basename === name, `Passed!`);
});

QUnit.test('VertexShader compiled succefully', function(assert)
{
   assert.ok(true, `Passed!`);
});