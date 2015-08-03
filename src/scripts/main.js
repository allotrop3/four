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
	let rend1 = new FOUR.Renderbuffer({ width: 50, height: 50 });
	let orth1 = new FOUR.OrthographicScene({ right: 50, bottom: 50 });
	let frame1 = new FOUR.DeferredFramebuffer({ colorAttachment: dtex1, depthAttachment: rend1, scene: orth1 });
	let persp1 = new FOUR.PerspectiveScene({ width: 50, height: 50, direction: [0, 1, 1], location: [10, 10, 10] });
	let view = new FOUR.Framebuffer({ scene: persp1 });
	
	console.log(vertShader1);
	console.log(fragShader1);
	console.log(prog1);
	console.log(attr1);
	console.log(uni1);
	console.log(uni2);
	console.log(dtex1);
	console.log(rend1);
	console.log(orth1);
	console.log(frame1);
	console.log(persp1);
	console.log(view);
}

setTimeout(main, 3000);