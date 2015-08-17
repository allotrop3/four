# Four

**Four** is a slightly higher level graphics API based on WebGL 1.0. It abstracts only what is necessary to simplify getting started whilst still exposing the flexibility you would have using the WebGL API directly. Notably the classes defined map directly to the concepts familiar to an OpenGL application, including Attributes, Uniforms, Structures, Shaders, Programs and more; all of which implement the basic functions associated to them, but with fewer function calls to the user. This allows you, as the developer, to focus on what is important: **getting something on the screen**.

It uses the gl-matrix library, which is also included in the framework. The documentation for the gl-matrix librabry can be found [here](http://glmatrix.net/docs/2.2.0/).

## Demo

See a [live demo](http://allotrop3.github.io/four).

<img src="https://github.com/allotrop3/four/blob/master/screenshots/demo.png" alt="Four" height="width:100%"> 

## Getting started

Simply download [Four](http://allotrop3.github.io/four/demo/scripts/four.min.js) and include the script in your project.

```javascript
<script type="text/javascript" src="path/to/four.min.js"></script>
```

Also be sure to include an HTML `canavs` element in your project. If no default `width` or `height` attributes are set, the framework assumes their respective window dimension.

```html
<canvas width="500" height="500"></canvas>
```

### Example

The following example assumes an OBJ mesh file loader to import a mesh into the scene. It further constructs a point light source and a three dimensional perspective projection to illuminate and visualise the scene, respectively. The scenes pre-render execution routine simply rotates the scene around the mesh.

```javascript
<script>
   var meshLoader = new Four.OBJMeshLoader({ path: '../path/to/mesh.obj' });

   function main()
   {
      var program = new Four.Program({ selector: '.class-to-shaders' });
   
      var pointLight = new Four.PointLight({
         program: program,
         attenuation: [0.025, 0.01, 0.00025],
         location: [10, 15, 10]
      });
   
      var view = new Four.Framebuffer();
   
      var camera = new Four.PerspectiveCamera({
         program: program,
         location: [40, 30, 40]
      });
      
      var mesh = new Four.Mesh({
         buffers: new Four.VertexArrayObject({
            program: program,
            attributes: ['vec3 position', 'vec3 normal']
         }),
         vertices: meshLoader.vertices,
         normals: meshLoader.normals,
         material: new Four.Material({
            program: program,
            diffuse: 0x9F8A60
         })
      });
   
      scene = new Four.Scene();
   
      scene.put(mesh);
   
      scene.render(view, camera, function()
      {
         scene.rotation += 0.25;
      });
   }
   
   setTimeout(main, 3000);
</script>
```

## Documentation

See full [documentation](https://github.com/allotrop3/four/wiki).

## Author

Jason Petersen [@allotrop3](https://twitter.com/allotrop3).
