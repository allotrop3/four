'use strict';

let FOUR = require('./four');
let promise = require('./utils/promise');
let gl = require('./gl');

let vertShader1 = new FOUR.VertexShader({ path: '../shaders/test/test.vs' });
let fragShader1 = new FOUR.FragmentShader({ path: '../shaders/test/test.fs' });

function main()
{
	let prog1 = new FOUR.Program({ vertexShader: vertShader1, fragmentShader: fragShader1 });
	let attr1 = new FOUR.Attribute({ program: prog1, attribute: 'position', length: 3 });
	let uni1 = new FOUR.Uniform({ program: prog1, uniform: 'projection', format: 'mat4' });
	let uni2 = new FOUR.Uniform({ program: prog1, uniform: 'modelView', format: 'mat4' });
	let dtex1 = new FOUR.DataTexture({ image: [3, 4, 5, 1, 6, 3, 6, 8, 4], width: 50, height: 50 });
	
	console.log(vertShader1);
	console.log(fragShader1);
	console.log(prog1);
	console.log(attr1);
	console.log(uni1);
	console.log(uni2);
	console.log(dtex1);
}

setTimeout(main, 3000);