'use strict';

var planePattern = new Four.ImageTexture({ path: '/textures/plane/terrain.jpg', anisotropy: 4, minification: Four.gl.LINEAR_MIPMAP_LINEAR, magnification: Four.gl.LINEAR_MIPMAP_LINEAR, mipmap: true });
var bodyPattern = new Four.ImageTexture({ path: '/textures/house-high/body.jpg', anisotropy: 4, minification: Four.gl.LINEAR_MIPMAP_LINEAR, magnification: Four.gl.LINEAR_MIPMAP_LINEAR, mipmap: true });
var wallsPattern = new Four.ImageTexture({ path: '/textures/house-high/walls.jpg', anisotropy: 4, minification: Four.gl.LINEAR_MIPMAP_LINEAR, magnification: Four.gl.LINEAR_MIPMAP_LINEAR, mipmap: true });
var roofPattern = new Four.ImageTexture({ path: '/textures/house-high/roof.jpg', anisotropy: 4, minification: Four.gl.LINEAR_MIPMAP_LINEAR, magnification: Four.gl.LINEAR_MIPMAP_LINEAR, mipmap: true });
var floorPattern = new Four.ImageTexture({ path: '/textures/house-high/floor.jpg', anisotropy: 4, minification: Four.gl.LINEAR_MIPMAP_LINEAR, magnification: Four.gl.LINEAR_MIPMAP_LINEAR, mipmap: true });
var bodyLoader = new Four.OBJMeshLoader({ path: '/meshes/obj/house/body.obj' });
var wallsLoader = new Four.OBJMeshLoader({ path: '/meshes/obj/house/walls.obj' });
var roofLoader = new Four.OBJMeshLoader({ path: '/meshes/obj/house/roof.obj' });
var floorLoader = new Four.OBJMeshLoader({ path: '/meshes/obj/house/floor.obj' });
var planeLoader = new Four.OBJMeshLoader({ path: '/meshes/obj/plane/plane.obj' });

function main()
{
   var translation = [0, 0, 0];

   var program = new Four.Program({ selector: '.four__shader--default' });

   var spotLight = new Four.SpotLight({ program: program, attenuation: [0, 0.15, 0.25], exponent: 45, cutoff: 25, location: [30, 100, -65], direction: [-0.25, -1.0, -0.15] });

   var view = new Four.Framebuffer();

   var camera = new Four.PerspectiveCamera({ program: program, fov: 45, location: [50, 30, 50] });

   var roof = new Four.Mesh({
      buffers: new Four.VertexArrayObject({ program: program, attributes: ['vec3 position', 'vec2 uv', 'vec3 normal'] }),
      vertices: roofLoader.vertices,
      uvs: roofLoader.uvs,
      normals: roofLoader.normals,
      material: new Four.Material({ program: program, pattern: roofPattern  })
   });

   var body = new Four.Mesh({
      buffers: new Four.VertexArrayObject({ program: program, attributes: ['vec3 position', 'vec2 uv', 'vec3 normal'] }),
      vertices: bodyLoader.vertices,
      uvs: bodyLoader.uvs,
      normals: bodyLoader.normals,
      material: new Four.Material({ program: program, pattern: bodyPattern  })
   });

   var walls = new Four.Mesh({
      buffers: new Four.VertexArrayObject({ program: program, attributes: ['vec3 position', 'vec2 uv', 'vec3 normal'] }),
      vertices: wallsLoader.vertices,
      uvs: wallsLoader.uvs,
      normals: wallsLoader.normals,
      material: new Four.Material({ program: program, pattern: wallsPattern  })
   });

   var floor = new Four.Mesh({
      buffers: new Four.VertexArrayObject({ program: program, attributes: ['vec3 position', 'vec2 uv', 'vec3 normal'] }),
      vertices: floorLoader.vertices,
      uvs: floorLoader.uvs,
      normals: floorLoader.normals,
      material: new Four.Material({ program: program, pattern: floorPattern  })
   });

   var plane = new Four.Mesh({
      buffers: new Four.VertexArrayObject({ program: program, attributes: ['vec3 position', 'vec2 uv', 'vec3 normal'] }),
      vertices: planeLoader.vertices,
      uvs: planeLoader.uvs,
      normals: planeLoader.normals,
      material: new Four.Material({ program: program, pattern: planePattern })
   });

   var scene = new Four.Scene();

   roof.scale = [3.5, 3.5, 3.5];
   body.scale = [3.5, 3.5, 3.5];
   walls.scale = [3.5, 3.5, 3.5];
   floor.scale = [3.5, 3.5, 3.5];
   plane.scale = [175, 175, 175];

   scene.put(roof);
   scene.put(body);
   scene.put(walls);
   scene.put(floor);
   scene.put(plane);

   program.bind();

   spotLight.bind();

   scene.render(view, camera, function()
   {
      scene.rotation += 0.25;
   });
}

setTimeout(main, 3000);