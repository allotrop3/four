'use strict';

var Entity = require('./Entity');

const _name = 'scene';
const _meshes = [];

class Scene extends Entity
{
   constructor({ name = _name } = {})
   {
      super({ name });

      this.program = undefined;

      this.meshes = [];

      this.lights = [];

      this.scale = [1, 1, 1];

      this.rotation = 0;

      this.translation = [0, 0, 0];

      this.inheritance = ['Entity', 'Scene'];
   }

   use(program)
   {
      program.bind();

      this.program = program;
   }

   put(item)
   {
      switch (true)
      {
         case item.isType('Mesh'):
            this.meshes.push(item);
            break;

         case item.isType('Light'):
            this.lights.push(item);
            break;

         default:
            console.warn(`${item.name} disallowed in scene`);
            break;
      }
   }

   animate(target, camera)
   {
      let step = this.animate.bind(this, target, camera);

      this.render.apply(this, arguments);

      requestAnimationFrame(step);
   }

   render(target, camera)
   {
      target.bind();

      this.lights.map(this.binder.bind(this));

      camera.save();

      camera.scale.apply(camera, this.scale);
      camera.rotate(this.rotation);
      camera.translate.apply(camera, this.translation);

      this.meshes.map(this.draw.bind(this, camera));

      camera.restore();

      target.unbind();
   }

   draw(camera, mesh)
   {
      let program = this.program;
      let material = mesh.material;

      camera.save();

      camera.scale.apply(camera, mesh.scale);
      camera.rotate(mesh.rotation);
      camera.translate.apply(camera, mesh.translation);

      camera.bind(program);

      material.bind(program)

      mesh.draw({ program });

      material.unbind();

      camera.restore();
   }

   binder(entity)
   {
      entity.bind(this.program);
   }
}

module.exports = Scene;
