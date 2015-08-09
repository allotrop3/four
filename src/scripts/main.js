'use strict';

let FOUR = require('./four');
let promise = require('./utils/promise');
let gl = require('./gl');

let vertShader1 = new FOUR.VertexShader({ path: '../shaders/test/test.vs' });
let fragShader1 = new FOUR.FragmentShader({ path: '../shaders/test/test.fs' });
let objMesh1 = new FOUR.OBJMeshLoader({ path: '../meshes/obj/tank.obj' });
let program1 = undefined;
let uniformprojection1 = undefined;
let uniformmodview1 = undefined;
let uniformnormal1 = undefined;
let structmaterial1 = undefined;
let structlight1 = undefined;
let material1 = undefined;
let light1 = undefined;
let vao1 = undefined;
let position1 = undefined;
let uniformcolor1 = undefined;
let uv1 = undefined;
let normal1 = undefined;
let perspective1 = undefined;
let view = undefined;
let mesh1 = undefined;
let scale = 1;
let count = 0;

function main()
{
	program1 = new FOUR.Program({ vertexShader: vertShader1, fragmentShader: fragShader1 });
	position1 = new FOUR.Attribute({ program: program1, attribute: 'position', length: 3 });
	uv1 = new FOUR.Attribute({ program: program1, attribute: 'uv', length: 3 });
	normal1 = new FOUR.Attribute({ program: program1, attribute: 'normal', length: 2 });
	vao1 = new FOUR.VertexArrayObject({ attributes: [position1, uv1, normal1] });
	uniformprojection1 = new FOUR.Uniform({ program: program1, uniform: 'projection', format: 'mat4' });
	uniformmodview1 = new FOUR.Uniform({ program: program1, uniform: 'modelView', format: 'mat4' });
	uniformnormal1 = new FOUR.Uniform({ program: program1, uniform: 'normal', format: 'mat3' });
	structmaterial1 = new FOUR.Structure({
		program: program1,
		uniform: 'material',
		uniforms: ['vec3f ambient', 'vec3f diffuse', 'vec3f specular', 'f shininess', 'i shading']
	});
	structlight1 = new FOUR.Structure({
		program: program1,
		uniform: 'light',
		uniforms: ['vec3f ambient', 'vec3f diffuse', 'vec3f specular', 'f intensity', 'vec3f location', 'vec3f direction']
	});
	material1 = new FOUR.PhongMaterial({ ambient: [0.5, 0.5, 0.5], diffuse: [0.39, 0.36, 0.29], specular: [0.39, 0.36, 0.29], shininess: 1 });
	light1 = new FOUR.Light({ ambient: [0, 0, 0], diffuse: [1, 1, 1], specular: [1, 1, 1], location: [10, 5, 5] });
	uniformcolor1 = new FOUR.Uniform({ program: program1, uniform: 'color', format: 'vec3f' });
	perspective1 = new FOUR.PerspectiveScene({ background: [0.1, 0.1, 0.1, 1], direction: [0, 0, 0], location: [10, 10, 10] });
	view = new FOUR.Framebuffer({ scene: perspective1 });
	mesh1 = new FOUR.Mesh({ vao: vao1, vertices: objMesh1.vertices, uvs: objMesh1.uvs, normals: objMesh1.normals });
	count = objMesh1.vertices.length;

	requestAnimationFrame(render);
}

function drawMesh(translation)
{
	perspective1.save();

	perspective1.scale([scale, scale, scale]);
	perspective1.translate(translation);

	uniformprojection1.set(perspective1.projectionMatrix);
	uniformmodview1.set(perspective1.modelViewMatrix);
	uniformnormal1.set(perspective1.normalMatrix());

	mesh1.draw({ count: count });

	perspective1.restore();
}

function render()
{
	view.flush();
	view.enable();

	program1.bind();

	material1.bind(structmaterial1);
	light1.bind(structlight1);

	[[-20, 0, -12.5], [-10, 0, -12.5], [0, 0, -12.5], [-20, 0, 12.5], [-10, 0, 12.5], [0, 0, 12.5], [-20, 0, 0], [-10, 0, 0], [0, 0, 0], [10, 0, 0], [20, 0, 0], [0, 0, 12.5], [10, 0, 12.5], [20, 0, 12.5], [0, 0, -12.5], [10, 0, -12.5], [20, 0, -12.5]].map(drawMesh);

	requestAnimationFrame(render);
}

setTimeout(main, 5000);