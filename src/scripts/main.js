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
let uniformmaterialAmbient = undefined;
let uniformmaterialDiffuse = undefined;
let uniformmaterialSpecular = undefined;
let uniformmaterialShininess = undefined;
let uniformlightAmbient = undefined;
let uniformlightDiffuse = undefined;
let uniformlightSpecular = undefined;
let uniformlightLocation = undefined;
let uniformlightDirection = undefined;
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
	uniformmaterialAmbient = new FOUR.Uniform({ program: program1, uniform: 'materialAmbient', format: 'vec3f' });
	uniformmaterialDiffuse = new FOUR.Uniform({ program: program1, uniform: 'materialDiffuse', format: 'vec3f' });
	uniformmaterialSpecular = new FOUR.Uniform({ program: program1, uniform: 'materialSpecular', format: 'vec3f' });
	uniformmaterialShininess = new FOUR.Uniform({ program: program1, uniform: 'materialShininess', format: 'f' });
	uniformlightAmbient = new FOUR.Uniform({ program: program1, uniform: 'lightAmbient', format: 'vec3f' });
	uniformlightDiffuse = new FOUR.Uniform({ program: program1, uniform: 'lightDiffuse', format: 'vec3f' });
	uniformlightSpecular = new FOUR.Uniform({ program: program1, uniform: 'lightSpecular', format: 'vec3f' });
	uniformlightLocation = new FOUR.Uniform({ program: program1, uniform: 'lightLocation', format: 'vec3f' });
	uniformlightDirection = new FOUR.Uniform({ program: program1, uniform: 'lightDirection', format: 'vec3f' });
	uniformcolor1 = new FOUR.Uniform({ program: program1, uniform: 'color', format: 'vec3f' });
	perspective1 = new FOUR.PerspectiveScene({ background: [0.133, 0.133, 0.133, 1], direction: [0, 0, 0], location: [10, 10, 10] });
	view = new FOUR.Framebuffer({ scene: perspective1 });
	mesh1 = new FOUR.Mesh({
		vao: vao1,
		vertices: objMesh1.vertices,
		uvs: objMesh1.uvs,
		normals: objMesh1.normals
	});
	count = objMesh1.vertices.length;

	requestAnimationFrame(render);
}

function drawMesh(translate = [0, 0, 0])
{
	perspective1.save();

	perspective1.scaleX(scale);
	perspective1.scaleY(scale);
	perspective1.scaleZ(scale);
	perspective1.translate(translate);

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

	uniformmaterialAmbient.set([0.5, 0.5, 0.5]);
	uniformmaterialDiffuse.set([0.39, 0.36, 0.29]);
	uniformmaterialSpecular.set([0.39, 0.36, 0.29]);
	uniformmaterialShininess.set(1);

	uniformlightAmbient.set([0, 0, 0]);
	uniformlightDiffuse.set([1, 1, 1]);
	uniformlightSpecular.set([1, 1, 1]);
	uniformlightLocation.set([10, 5, 5]);

	drawMesh([-20, 0, -12.5]);
	drawMesh([-10, 0, -12.5]);
	drawMesh([0, 0, -12.5]);
	drawMesh([-20, 0, 12.5]);
	drawMesh([-10, 0, 12.5]);
	drawMesh([0, 0, 12.5]);
	drawMesh([-20, 0, 0]);
	drawMesh([-10, 0, 0]);
	drawMesh();
	drawMesh([10, 0, 0]);
	drawMesh([20, 0, 0]);
	drawMesh([0, 0, 12.5]);
	drawMesh([10, 0, 12.5]);
	drawMesh([20, 0, 12.5]);
	drawMesh([0, 0, -12.5]);
	drawMesh([10, 0, -12.5]);
	drawMesh([20, 0, -12.5]);

	requestAnimationFrame(render);
}

setTimeout(main, 5000);