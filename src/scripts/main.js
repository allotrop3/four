'use strict';

let gl = require('./gl');
let FOUR = require('./four');


let vertShader1 = new FOUR.VertexShader({ path: '../shaders/test/test.vs' });
let fragShader1 = new FOUR.FragmentShader({ path: '../shaders/test/test.fs' });
let prog1 = new FOUR.Program({ vertexShader: vertShader1, fragmentShader: fragShader1 });
let attr1 = new FOUR.Attribute({ program: prog1, attribute: 'position', length: 3 });

console.log(vertShader1);
console.log(fragShader1);
console.log(prog1);
console.log(attr1);