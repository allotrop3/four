<img src="http://allotrop3.github.io/four/images/four.jpg">

**Four** is a slightly higher level graphics API based on WebGL 1.0. It abstracts only what is necessary to simplify getting started whilst still exposing the flexibility you would have using the WebGL API directly. Notably the classes defined map directly to the concepts familiar to an OpenGL application, including Attributes, Uniforms, Structures, Shaders, Programs and more; all of which implement the basic functions associated to them, but with fewer function calls to the user. This allows you, as the developer, to focus on what is important: **getting something on the screen**.

It uses the gl-matrix library, which is also included in the framework. The documentation for the gl-matrix librabry can be found [here](http://glmatrix.net/docs/2.2.0/).

In case you want to learn more about Four and why I've built it, I suggest you to read [the article I've published on SitePoint](http://www.sitepoint.com/introducing-four-webgl-easier/).

## Demo

See a [live demo](http://allotrop3.github.io/four).

## Getting started

Simply download [Four](https://raw.githubusercontent.com/allotrop3/four/master/dist/four.min.js) and include the script in your project.

```javascript
<script src="path/to/four.min.js"></script>
```

Also be sure to include an HTML `canvas` element in your project. If no default `width` or `height` attributes are set, the framework assumes their respective window dimension.

```html
<canvas width="500" height="500"></canvas>
```

### Example

The following example assumes an OBJ mesh file loader to import a mesh into the scene. It further constructs a point light source and a three dimensional perspective projection to illuminate and visualise the scene, respectively. The scenes pre-render execution routine simply rotates the scene around the mesh.

#### JavaScript

```javascript
<script>
   var context = new Four.Context({ selector: '#canvas' });
   var mesh_loader_1 = new Four.OBJMeshLoader({ path: 'path/to/mesh-1.obj', indexed: true });
   var mesh_loader_2 = new Four.OBJMeshLoader({ path: 'path/to/mesh-2.obj', indexed: true });
   var bundle = new Four.Bundle({ items: [mesh_1, mesh_2] });

   bundle.ready(function() {
      var program = new Four.Program({ selector: '.renderer' });
      var light = new Four.PointLight({ diffuse: 0xFFD1B2, location: [10, 15, 0] });
      var mesh_1 = new Four.Mesh({ loader: mesh_loader_1 });
      var mesh_2 = new Four.Mesh({ loader: mesh_loader_2 });
      var view = new Four.Framebuffer();
      var camera = new Four.PerspectiveCamera({ location: [10, 5, 5], width: context.canvas.width, height: context.canvas.height });
      var scene = new Four.Scene();
      
      scene.use(program);

      scene.put(light);
      
      scene.put(mesh_1);
      scene.put(mesh_2);
      
      scene.animate(view, camera, function() {
         scene.rotation += 0.25;
      });
   });
</script>
```

#### Shaders

##### Vertex shader

```glsl
<script class="renderer" type="x-shader/x-vertex">
   #version 100
   
   precision mediump int;
   precision mediump float;

   @use Camera;

   attribute vec3 a_position;
   attribute vec3 a_normal;

   uniform Camera u_camera;

   varying vec4 v_position;
   varying vec3 v_normal;

   void main()
   {
      vec4 position = vec4(a_position, 1);

      gl_Position = u_camera.projectionMatrix * u_camera.modelViewMatrix * position;

      v_position = position;
      v_normal = u_camera.normalMatrix * a_normal;
   }
</script>
```
##### Fragment shader

```glsl
<script class="renderer" type="x-shader/x-fragment">
   #version 100
   
   precision mediump int;
   precision mediump float;


   @use Material;
   @use PointLight;

   uniform Material u_material;
   uniform PointLight u_light;

   varying vec4 v_position;
   varying vec3 v_normal;

   void main()
   {
      vec3 lighting = PointLight_main(u_light, u_material, v_position, v_normal);

      gl_FragColor = vec4(lighting, 1);
   }
</script>
```

## Documentation

See full [documentation](https://github.com/allotrop3/four/wiki).

## Author

Jason Petersen [@allotrop3](https://twitter.com/allotrop3).
