'use strict';

let shaders = {
   Camera: require('./Camera'),
   Light: require('./Light'),
   AmbientLight: require('./AmbientLight'),
   DirectionalLight: require('./DirectionalLight'),
   PointLight: require('./PointLight'),
   SpotLight: require('./SpotLight'),
   Material: require('./Material'),
   ShadowMapper: require('./ShadowMapper')
};

module.exports = shaders;