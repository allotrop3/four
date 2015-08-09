'use strict';

var vertexShader = new FOUR.VertexShader({ path: '../shaders/test/test.vs' });
var fragmentShader = new FOUR.FragmentShader({ path: '../shaders/test/test.fs' });
var houseLoader = new FOUR.OBJMeshLoader({ path: '../meshes/obj/house.obj' });
var towerLoader = new FOUR.OBJMeshLoader({ path: '../meshes/obj/tower.obj' });
var tankLoader = new FOUR.OBJMeshLoader({ path: '../meshes/obj/tank.obj' });
var planeLoader = new FOUR.OBJMeshLoader({ path: '../meshes/obj/plane.obj' });
var program, material, pointLight, scene, camera, view, tower, tank, house, plane;

function main()
{
   program = new FOUR.Program({ vertexShader: vertexShader, fragmentShader: fragmentShader });

   var houseVao = new FOUR.VertexArrayObject({ program: program, attributes: ['vec3 position', 'vec3 normal'] });
   var tankVao = new FOUR.VertexArrayObject({ program: program, attributes: ['vec3 position', 'vec3 normal'] });
   var towerVao = new FOUR.VertexArrayObject({ program: program, attributes: ['vec3 position', 'vec3 normal'] });
   var planeVao = new FOUR.VertexArrayObject({ program: program, attributes: ['vec3 position', 'vec3 normal'] });

   material = new FOUR.PhongMaterial({ program: program, ambient: [0.5, 0.5, 0.5], diffuse: [0.2, 0.2, 0.2], specular: [0.2, 0.2, 0.2], shininess: 1 });
   pointLight = new FOUR.PointLight({ program: program, ambient: [0, 0, 0], diffuse: [1, 1, 1], specular: [1, 1, 1], location: [10, 15, 10], coefficient: 0.025, linear: 0.0025, quadratic: 0.00025 });

   view = new FOUR.Framebuffer();

   camera = new FOUR.PerspectiveCamera({ program: program, background: [0, 0, 0, 1], direction: [3, 0, 0], location: [30, 15, 30] });

   house = new FOUR.Mesh({ vao: houseVao, vertices: houseLoader.vertices, normals: houseLoader.normals, material: material });
   tower = new FOUR.Mesh({ vao: towerVao, vertices: towerLoader.vertices, normals: towerLoader.normals, material: material });
   tank = new FOUR.Mesh({ vao: tankVao, vertices: tankLoader.vertices, normals: tankLoader.normals, material: material });
   plane = new FOUR.Mesh({ vao: planeVao, vertices: planeLoader.vertices, normals: planeLoader.normals, material: material });

   scene = new FOUR.Scene({ camera: camera });

   house.translation = [0, 0, 5];
   tower.translation = [10, 0, 5];
   tank.translation = [15, 0, -10];

   tank.rotation = -20;

   house.scale = [1.5, 1.5, 1.5];
   plane.scale = [500, 500, 500];

   scene.use(program);

   scene.put(house);
   scene.put(tower);
   scene.put(tank);
   scene.put(plane);

   requestAnimationFrame(render);
}

function render()
{
   program.bind();

   pointLight.bind();

   scene.rotation += 0.25;

   scene.renderTo(view);

   requestAnimationFrame(render);
}

setTimeout(main, 5000);