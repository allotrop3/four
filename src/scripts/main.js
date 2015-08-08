'use strict';

let FOUR = require('./four');
let promise = require('./utils/promise');
let gl = require('./gl');

let vertShader1 = new FOUR.VertexShader({ path: '../shaders/test/test.vs' });
let fragShader1 = new FOUR.FragmentShader({ path: '../shaders/test/test.fs' });
let objMesh1 = new FOUR.OBJMeshLoader({ path: '../meshes/obj/tank.obj' });
let program1 = undefined;
let projection1 = undefined;
let modview1 = undefined;
let vao1 = undefined;
let position1 = undefined;
let color1 = undefined;
let uv1 = undefined;
let normal1 = undefined;
let perspective1 = undefined;
let view = undefined;
let mesh1 = undefined;
let rotationY = 0;
let scale = 2;
let count = 0;

function main()
{
	program1 = new FOUR.Program({ vertexShader: vertShader1, fragmentShader: fragShader1 });
	position1 = new FOUR.Attribute({ program: program1, attribute: 'position', length: 3 });
	// uv1 = new FOUR.Attribute({ program: program1, attribute: 'uv', length: 3 });
	normal1 = new FOUR.Attribute({ program: program1, attribute: 'normal', length: 3 });
	vao1 = new FOUR.VertexArrayObject({ attributes: [position1], indexed: true });
	projection1 = new FOUR.Uniform({ program: program1, uniform: 'projection', format: 'mat4' });
	modview1 = new FOUR.Uniform({ program: program1, uniform: 'modelView', format: 'mat4' });
	color1 = new FOUR.Uniform({ program: program1, uniform: 'color', format: 'vec3f' });
	perspective1 = new FOUR.PerspectiveScene({ background: [0.133, 0.133, 0.133, 1], direction: [0, 0, 0], location: [10, 10, 10] });
	view = new FOUR.Framebuffer({ scene: perspective1 });
	mesh1 = new FOUR.Mesh({
		vao: vao1,
		vertices: objMesh1.vertices,
		// normals: objMesh1.normals,
		indices: objMesh1.indices
	});

	console.log(mesh1);

	requestAnimationFrame(render);
}

function render()
{
	count = Math.min(count + 100, mesh1.indices.length);

	view.flush();
	view.enable();

	program1.bind();

	perspective1.save();

	// perspective1.rotateY(rotationY += 0.01);
	perspective1.scaleX(scale);
	perspective1.scaleY(scale);
	perspective1.scaleZ(scale);

	projection1.set(perspective1.projectionMatrix);
	modview1.set(perspective1.modelViewMatrix);
	color1.set([1, 1, 1]);

	mesh1.draw({ primitive: gl.TRIANGLES, count: count });

	color1.set([0, 0, 0]);

	mesh1.draw({ primitive: gl.LINES, count: count });

	perspective1.restore();

	requestAnimationFrame(render);
}

setTimeout(main, 7000);