'use strict';

import glm from 'gl-matrix';
import Entity from './Entity';
import Attribute from './Attribute';
import Camera from './Camera';
import Context from './Context';
import OrthographicCamera from './OrthographicCamera';
import PerspectiveCamera from './PerspectiveCamera';
import Framebuffer from './Framebuffer';
import DeferredFramebuffer from './DeferredFramebuffer';
import DepthFramebuffer from './DepthFramebuffer';
import Light from './Light';
import PointLight from './PointLight';
import Material from './Material';
import PhongMaterial from './PhongMaterial';
import Mesh from './Mesh';
import MeshLoader from './MeshLoader';
import OBJMeshLoader from './OBJMeshLoader';
import Program from './Program';
import Renderbuffer from './Renderbuffer';
import Scene from './Scene';
import Shader from './Shader';
import FragmentShader from './FragmentShader';
import VertexShader from './VertexShader';
import ShadowMapper from './ShadowMapper';
import Structure from './Structure';
import Texture from './Texture';
import DataTexture from './DataTexture';
import DepthTexture from './DepthTexture';
import ImageTexture from './ImageTexture';
import Uniform from './Uniform';
import VertexArrayObject from './VertexArrayObject';
import Particle from './Particle';
import ParticleSystem from './ParticleSystem';
import Spring from './Spring';
import Cloth from './Cloth';
import Bundle from './Bundle';

let Four = window.Four = {
    glm: glm,
    Entity: Entity,
    Attribute: Attribute,
    Camera: Camera,
    Context: Context,
    OrthographicCamera: OrthographicCamera,
    PerspectiveCamera: PerspectiveCamera,
    Framebuffer: Framebuffer,
    DeferredFramebuffer: DeferredFramebuffer,
    DepthFramebuffer: DepthFramebuffer,
    Light: Light,
    PointLight: PointLight,
    Material: Material,
    PhongMaterial: PhongMaterial,
    Mesh: Mesh,
    MeshLoader: MeshLoader,
    OBJMeshLoader: OBJMeshLoader,
    Program: Program,
    Renderbuffer: Renderbuffer,
    Scene: Scene,
    Shader: Shader,
    FragmentShader: FragmentShader,
    VertexShader: VertexShader,
    ShadowMapper: ShadowMapper,
    Structure: Structure,
    Texture: Texture,
    DataTexture: DataTexture,
    DepthTexture: DepthTexture,
    ImageTexture: ImageTexture,
    Uniform: Uniform,
    VertexArrayObject: VertexArrayObject,
    Particle: Particle,
    ParticleSystem: ParticleSystem,
    Spring: Spring,
    Cloth: Cloth,
    Bundle: Bundle
};

export default Four;
