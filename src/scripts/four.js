'use strict';

/**
 * @fileoverview FourJS - FourJS is a plug-and-play WebGL-based physics
 * engine using advanced GPGPU techniques to maximise capabilities and
 * performance.
 * FourJS on [GitHub]{@link https://github.com/allotrop3/fourjs.git} or [download]{@link http://fourjs/dist/scripts/four.js}.
 * @author Jason Petersen
 * @version 0.0.0
 */
var four = {
   glm: require('gl-matrix'),
   gl: require('./gl'),
   Entity: require('./Entity'),
   Attribute: require('./Attribute'),
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
   Program: require('./Program'),
   Renderbuffer: require('./Renderbuffer'),
   Scene: require('./Scene'),
   OrthographicScene: require('./OrthographicScene'),
   PerspectiveScene: require('./PerspectiveScene'),
   Shader: require('./Shader'),
   FragmentShader: require('./FragmentShader'),
   VertexShader: require('./VertexShader'),
   Texture: require('./Texture'),
   DataTexture: require('./DataTexture'),
   ImageTexture: require('./ImageTexture'),
   Uniform: require('./Uniform')
};

module.exports = window.four = four;