'use strict';

let FOUR = require('./four');
let promise = require('./utils/promise');
let gl = require('./gl');

let vertShader1 = new FOUR.VertexShader({ path: '../shaders/test/test.vs' });
let fragShader1 = new FOUR.FragmentShader({ path: '../shaders/test/test.fs' });
let program1 = undefined;
let projection1 = undefined;
let modview1 = undefined;
let vao1 = undefined;
let position1 = undefined;
let perspective1 = undefined;
let view = undefined;
let mesh1 = undefined;
let rotationY = 0;

function main()
{
	program1 = new FOUR.Program({ vertexShader: vertShader1, fragmentShader: fragShader1 });
	position1 = new FOUR.Attribute({ program: program1, attribute: 'position', length: 3 });
	vao1 = new FOUR.VertexArrayObject({ attributes: [position1], indexed: true });
	projection1 = new FOUR.Uniform({ program: program1, uniform: 'projection', format: 'mat4' });
	modview1 = new FOUR.Uniform({ program: program1, uniform: 'modelView', format: 'mat4' });
	perspective1 = new FOUR.PerspectiveScene({ width: 950, height: 468, direction: [0, 0, 0], location: [10, 10, 10] });
	view = new FOUR.Framebuffer({ scene: perspective1 });
	mesh1 = new FOUR.Mesh({
		vao: vao1,
		vertices: [
			1, -1, -1,
			1, -1, 1,
			-1, -1, 1,
			-1, -1, -1,
			1, 1, -1,
			1, 1, 1,
			-1, 1, 1,
			-1, 1, -1
		],
		indices: [
			1, 2, 3,
			7, 6, 5,
			0, 4, 5,
			1, 5, 6,
			6, 7, 3,
			0, 3, 7,
			0, 1, 3,
			4, 7, 5,
			1, 0, 5,
			2, 1, 6,
			2, 6, 3,
			4, 0, 7
		]
	});

	requestAnimationFrame(render);
}

function render()
{
	view.flush();
	view.enable();

	program1.bind();

	perspective1.save();

	perspective1.rotateY(rotationY += 0.01);
	perspective1.scale([2, 2, 2]);

	projection1.set(perspective1.projectionMatrix);
	modview1.set(perspective1.modelViewMatrix);

	mesh1.draw({ primitive: gl.LINE_STRIP, count: mesh1.indices.length });

	perspective1.restore();

	requestAnimationFrame(render);
}

setTimeout(main, 3000);