'use strict';

let shaders = {
   Camera: require('./Camera'),
   Light: require('./Light'),
   DirectionalLight: require('./DirectionalLight'),
   PointLight: require('./PointLight'),
   SpotLight: require('./SpotLight'),
   Material: require('./Material'),
   ShadowMapper: require('./ShadowMapper')
};

module.exports = shaders;