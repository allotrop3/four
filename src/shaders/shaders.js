'use strict';

import Camera from './Camera';
import Light from './Light';
import DirectionalLight from './DirectionalLight';
import PointLight from './PointLight';
import SpotLight from './SpotLight';
import Material from './Material';
import ShadowMapper from './ShadowMapper';

let shaders = {
   Camera: Camera,
   Light: Light,
   DirectionalLight: DirectionalLight,
   PointLight: PointLight,
   SpotLight: SpotLight,
   Material: Material,
   ShadowMapper: ShadowMapper
};

export default shaders;