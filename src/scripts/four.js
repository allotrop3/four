'use strict';

/**
 * @fileoverview Four is a WebGL-based physics engine using advanced GPGPU techniques to maximise capabilities and performance.
 * Four on [GitHub]{@link https://github.com/allotrop3/fourjs.git} or [download]{@link http://fourjs/scripts/four.min.js}.
 * @author Jason Petersen
 * @version 0.0.0
 */
let FOUR = {
   glm: require('gl-matrix'),
   gl: require('./gl'),
   Entity: require('./Entity'),
   Attribute: require('./Attribute'),
   Camera: require('./Camera'),
   OrthographicCamera: require('./OrthographicCamera'),
   PerspectiveCamera: require('./PerspectiveCamera'),
   Fluid: require('./Fluid'),
   Framebuffer: require('./Framebuffer'),
   DeferredFramebuffer: require('./DeferredFramebuffer'),
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
   Structure: require('./Structure'),
   Texture: require('./Texture'),
   DataTexture: require('./DataTexture'),
   ImageTexture: require('./ImageTexture'),
   Uniform: require('./Uniform'),
   VertexArrayObject: require('./VertexArrayObject')
};

module.exports = window.FOUR = FOUR;