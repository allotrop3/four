'use strict';

var Entity = require('./Entity');

class Scene extends Entity
{
   constructor({ name = 'scene', camera, meshes = [] })
   {
      super({ name });

      this.camera = camera;

      this.meshes = meshes;

      this.scale = [1, 1, 1];

      this.rotation = 0;

      this.translation = [0, 0, 0];
   }

   put(mesh)
   {
      this.meshes.push(mesh);
   }

   renderTo(renderTarget, cameraStructure)
   {
      let camera = this.camera;

      renderTarget.bind(true);

      camera.save();

      camera.scale.apply(camera, this.scale);
      camera.rotate(this.rotation);
      camera.translate.apply(camera, this.translation);

      camera.bind(cameraStructure);

      this.meshes.map(this.draw.bind(this, cameraStructure));

      camera.restore();
   }

   draw(cameraStructure, mesh)
   {
      let camera = this.camera;

      camera.save();

      camera.scale.apply(camera, mesh.scale);
      camera.rotate(mesh.rotation);
      camera.translate.apply(camera, mesh.translation);

      camera.bind(cameraStructure);

      mesh.draw();

      camera.bind(structcamera1);

      camera.restore();
   }
}

module.exports = Scene;