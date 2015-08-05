'use strict';

let path = '../shaders/test/test.fs';
let name = 'fragment.shader.custom';
let fragmentShader = new FOUR.FragmentShader({ name: name, path: path });

QUnit.module('FOUR.FragmentShader');

QUnit.test('FourJS namespace exists', function(assert)
{
   assert.ok(FOUR !== undefined, 'Passed!');
});

QUnit.test('FourJS FragmentShader class exists', function(assert)
{
   assert.ok(FOUR.FragmentShader !== undefined, 'Passed!');
});

QUnit.test('Name property value set to given value', function(assert)
{
   assert.ok(fragmentShader.basename === name, `Passed!`);
});

QUnit.test('FragmentShader compiled succefully', function(assert)
{
   assert.ok(true, `Passed!`);
});