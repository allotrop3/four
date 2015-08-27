'use strict';

var Entity = require('./Entity');

const _name = 'scene';
const _meshes = [];

class Scene extends Entity
{
   constructor({ name = _name } = {})
   {
      super({ name });

      this.meshes = [];

      this.scale = [1, 1, 1];

      this.rotation = 0;

      this.translation = [0, 0, 0];
   }

   put(mesh)
   {
      this.meshes.push(mesh);
   }

   animate(target, camera, prestep, poststep)
   {
      let step = this.animate.bind(this, target, camera, prestep, poststep);

      this.render.apply(this, arguments);

      requestAnimationFrame(step);
   }

   render(target, camera, prestep = false, poststep = false)
   {
      target.bind();

      if (prestep)
      {
         prestep();
      }

      camera.save();

      camera.scale.apply(camera, this.scale);
      camera.rotate(this.rotation);
      camera.translate.apply(camera, this.translation);

      camera.bind();

      this.meshes.map(this.draw.bind(this, camera));

      camera.restore();

      if (poststep)
      {
         poststep();
      }

      target.unbind();
   }

   draw(camera, mesh)
   {
      let material = mesh.material;

      camera.save();

      camera.scale.apply(camera, mesh.scale);
      camera.rotate(mesh.rotation);

      camera.translate.apply(camera, mesh.translation);

      camera.bind();

      material.bind();

      mesh.draw();

      material.unbind();

      camera.restore();
   }
}

module.exports = Scene;