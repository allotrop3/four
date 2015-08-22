'use strict';

let Four = {
   glm: require('gl-matrix'),
   gl: require('./gl'),
   Entity: require('./Entity'),
   Attribute: require('./Attribute'),
   Camera: require('./Camera'),
   OrthographicCamera: require('./OrthographicCamera'),
   PerspectiveCamera: require('./PerspectiveCamera'),
   Framebuffer: require('./Framebuffer'),
   DeferredFramebuffer: require('./DeferredFramebuffer'),
   DepthFramebuffer: require('./DepthFramebuffer'),
   Light: require('./Light'),
   DirectionalLight: require('./DirectionalLight'),
   PointLight: require('./PointLight'),
   SpotLight: require('./SpotLight'),
   Material: require('./Material'),
   PhongMaterial: require('./PhongMaterial'),
   Mesh: require('./Mesh'),
   MeshLoader: require('./MeshLoader'),
   OBJMeshLoader: require('./OBJMeshLoader'),
   Program: require('./Program'),
   Renderbuffer: require('./Renderbuffer'),
   Scene: require('./Scene'),
   Shader: require('./Shader'),
   FragmentShader: require('./FragmentShader'),
   VertexShader: require('./VertexShader'),
   ShadowMapper: require('./ShadowMapper'),
   Structure: require('./Structure'),
   Texture: require('./Texture'),
   DataTexture: require('./DataTexture'),
   ImageTexture: require('./ImageTexture'),
   Uniform: require('./Uniform'),
   VertexArrayObject: require('./VertexArrayObject')
};

module.exports = window.Four = Four;