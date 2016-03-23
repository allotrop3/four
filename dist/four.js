/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _glMatrix = __webpack_require__(1);

	var _glMatrix2 = _interopRequireDefault(_glMatrix);

	var _Entity = __webpack_require__(11);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _Attribute = __webpack_require__(12);

	var _Attribute2 = _interopRequireDefault(_Attribute);

	var _Camera = __webpack_require__(14);

	var _Camera2 = _interopRequireDefault(_Camera);

	var _Context = __webpack_require__(13);

	var _Context2 = _interopRequireDefault(_Context);

	var _OrthographicCamera = __webpack_require__(18);

	var _OrthographicCamera2 = _interopRequireDefault(_OrthographicCamera);

	var _PerspectiveCamera = __webpack_require__(19);

	var _PerspectiveCamera2 = _interopRequireDefault(_PerspectiveCamera);

	var _Framebuffer = __webpack_require__(20);

	var _Framebuffer2 = _interopRequireDefault(_Framebuffer);

	var _DeferredFramebuffer = __webpack_require__(21);

	var _DeferredFramebuffer2 = _interopRequireDefault(_DeferredFramebuffer);

	var _DepthFramebuffer = __webpack_require__(22);

	var _DepthFramebuffer2 = _interopRequireDefault(_DepthFramebuffer);

	var _Light = __webpack_require__(23);

	var _Light2 = _interopRequireDefault(_Light);

	var _PointLight = __webpack_require__(24);

	var _PointLight2 = _interopRequireDefault(_PointLight);

	var _Material = __webpack_require__(25);

	var _Material2 = _interopRequireDefault(_Material);

	var _PhongMaterial = __webpack_require__(26);

	var _PhongMaterial2 = _interopRequireDefault(_PhongMaterial);

	var _Mesh = __webpack_require__(27);

	var _Mesh2 = _interopRequireDefault(_Mesh);

	var _MeshLoader = __webpack_require__(29);

	var _MeshLoader2 = _interopRequireDefault(_MeshLoader);

	var _OBJMeshLoader = __webpack_require__(32);

	var _OBJMeshLoader2 = _interopRequireDefault(_OBJMeshLoader);

	var _Program = __webpack_require__(33);

	var _Program2 = _interopRequireDefault(_Program);

	var _Renderbuffer = __webpack_require__(45);

	var _Renderbuffer2 = _interopRequireDefault(_Renderbuffer);

	var _Scene = __webpack_require__(46);

	var _Scene2 = _interopRequireDefault(_Scene);

	var _Shader = __webpack_require__(35);

	var _Shader2 = _interopRequireDefault(_Shader);

	var _FragmentShader = __webpack_require__(44);

	var _FragmentShader2 = _interopRequireDefault(_FragmentShader);

	var _VertexShader = __webpack_require__(34);

	var _VertexShader2 = _interopRequireDefault(_VertexShader);

	var _ShadowMapper = __webpack_require__(47);

	var _ShadowMapper2 = _interopRequireDefault(_ShadowMapper);

	var _Structure = __webpack_require__(16);

	var _Structure2 = _interopRequireDefault(_Structure);

	var _Texture = __webpack_require__(49);

	var _Texture2 = _interopRequireDefault(_Texture);

	var _DataTexture = __webpack_require__(48);

	var _DataTexture2 = _interopRequireDefault(_DataTexture);

	var _DepthTexture = __webpack_require__(50);

	var _DepthTexture2 = _interopRequireDefault(_DepthTexture);

	var _ImageTexture = __webpack_require__(51);

	var _ImageTexture2 = _interopRequireDefault(_ImageTexture);

	var _Uniform = __webpack_require__(17);

	var _Uniform2 = _interopRequireDefault(_Uniform);

	var _VertexArrayObject = __webpack_require__(28);

	var _VertexArrayObject2 = _interopRequireDefault(_VertexArrayObject);

	var _Particle = __webpack_require__(53);

	var _Particle2 = _interopRequireDefault(_Particle);

	var _ParticleSystem = __webpack_require__(54);

	var _ParticleSystem2 = _interopRequireDefault(_ParticleSystem);

	var _Spring = __webpack_require__(55);

	var _Spring2 = _interopRequireDefault(_Spring);

	var _Cloth = __webpack_require__(56);

	var _Cloth2 = _interopRequireDefault(_Cloth);

	var _Bundle = __webpack_require__(57);

	var _Bundle2 = _interopRequireDefault(_Bundle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Four = window.Four = {
	    glm: _glMatrix2.default,
	    Entity: _Entity2.default,
	    Attribute: _Attribute2.default,
	    Camera: _Camera2.default,
	    Context: _Context2.default,
	    OrthographicCamera: _OrthographicCamera2.default,
	    PerspectiveCamera: _PerspectiveCamera2.default,
	    Framebuffer: _Framebuffer2.default,
	    DeferredFramebuffer: _DeferredFramebuffer2.default,
	    DepthFramebuffer: _DepthFramebuffer2.default,
	    Light: _Light2.default,
	    PointLight: _PointLight2.default,
	    Material: _Material2.default,
	    PhongMaterial: _PhongMaterial2.default,
	    Mesh: _Mesh2.default,
	    MeshLoader: _MeshLoader2.default,
	    OBJMeshLoader: _OBJMeshLoader2.default,
	    Program: _Program2.default,
	    Renderbuffer: _Renderbuffer2.default,
	    Scene: _Scene2.default,
	    Shader: _Shader2.default,
	    FragmentShader: _FragmentShader2.default,
	    VertexShader: _VertexShader2.default,
	    ShadowMapper: _ShadowMapper2.default,
	    Structure: _Structure2.default,
	    Texture: _Texture2.default,
	    DataTexture: _DataTexture2.default,
	    DepthTexture: _DepthTexture2.default,
	    ImageTexture: _ImageTexture2.default,
	    Uniform: _Uniform2.default,
	    VertexArrayObject: _VertexArrayObject2.default,
	    Particle: _Particle2.default,
	    ParticleSystem: _ParticleSystem2.default,
	    Spring: _Spring2.default,
	    Cloth: _Cloth2.default,
	    Bundle: _Bundle2.default
	};

	exports.default = Four;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * @fileoverview gl-matrix - High performance matrix and vector operations
	 * @author Brandon Jones
	 * @author Colin MacKenzie IV
	 * @version 2.3.0
	 */

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	// END HEADER

	exports.glMatrix = __webpack_require__(2);
	exports.mat2 = __webpack_require__(3);
	exports.mat2d = __webpack_require__(4);
	exports.mat3 = __webpack_require__(5);
	exports.mat4 = __webpack_require__(6);
	exports.quat = __webpack_require__(7);
	exports.vec2 = __webpack_require__(10);
	exports.vec3 = __webpack_require__(8);
	exports.vec4 = __webpack_require__(9);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */

	/**
	 * @class Common utilities
	 * @name glMatrix
	 */
	var glMatrix = {};

	// Constants
	glMatrix.EPSILON = 0.000001;
	glMatrix.ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
	glMatrix.RANDOM = Math.random;

	/**
	 * Sets the type of array used when creating new vectors and matrices
	 *
	 * @param {Type} type Array type, such as Float32Array or Array
	 */
	glMatrix.setMatrixArrayType = function (type) {
	  GLMAT_ARRAY_TYPE = type;
	};

	var degree = Math.PI / 180;

	/**
	* Convert Degree To Radian
	*
	* @param {Number} Angle in Degrees
	*/
	glMatrix.toRadian = function (a) {
	  return a * degree;
	};

	module.exports = glMatrix;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */

	var glMatrix = __webpack_require__(2);

	/**
	 * @class 2x2 Matrix
	 * @name mat2
	 */
	var mat2 = {};

	/**
	 * Creates a new identity mat2
	 *
	 * @returns {mat2} a new 2x2 matrix
	 */
	mat2.create = function () {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};

	/**
	 * Creates a new mat2 initialized with values from an existing matrix
	 *
	 * @param {mat2} a matrix to clone
	 * @returns {mat2} a new 2x2 matrix
	 */
	mat2.clone = function (a) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};

	/**
	 * Copy the values from one mat2 to another
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.copy = function (out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};

	/**
	 * Set a mat2 to the identity matrix
	 *
	 * @param {mat2} out the receiving matrix
	 * @returns {mat2} out
	 */
	mat2.identity = function (out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};

	/**
	 * Transpose the values of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.transpose = function (out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a1 = a[1];
	        out[1] = a[2];
	        out[2] = a1;
	    } else {
	        out[0] = a[0];
	        out[1] = a[2];
	        out[2] = a[1];
	        out[3] = a[3];
	    }

	    return out;
	};

	/**
	 * Inverts a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.invert = function (out, a) {
	    var a0 = a[0],
	        a1 = a[1],
	        a2 = a[2],
	        a3 = a[3],


	    // Calculate the determinant
	    det = a0 * a3 - a2 * a1;

	    if (!det) {
	        return null;
	    }
	    det = 1.0 / det;

	    out[0] = a3 * det;
	    out[1] = -a1 * det;
	    out[2] = -a2 * det;
	    out[3] = a0 * det;

	    return out;
	};

	/**
	 * Calculates the adjugate of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.adjoint = function (out, a) {
	    // Caching this value is nessecary if out == a
	    var a0 = a[0];
	    out[0] = a[3];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] = a0;

	    return out;
	};

	/**
	 * Calculates the determinant of a mat2
	 *
	 * @param {mat2} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat2.determinant = function (a) {
	    return a[0] * a[3] - a[2] * a[1];
	};

	/**
	 * Multiplies two mat2's
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	mat2.multiply = function (out, a, b) {
	    var a0 = a[0],
	        a1 = a[1],
	        a2 = a[2],
	        a3 = a[3];
	    var b0 = b[0],
	        b1 = b[1],
	        b2 = b[2],
	        b3 = b[3];
	    out[0] = a0 * b0 + a2 * b1;
	    out[1] = a1 * b0 + a3 * b1;
	    out[2] = a0 * b2 + a2 * b3;
	    out[3] = a1 * b2 + a3 * b3;
	    return out;
	};

	/**
	 * Alias for {@link mat2.multiply}
	 * @function
	 */
	mat2.mul = mat2.multiply;

	/**
	 * Rotates a mat2 by the given angle
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	mat2.rotate = function (out, a, rad) {
	    var a0 = a[0],
	        a1 = a[1],
	        a2 = a[2],
	        a3 = a[3],
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = a0 * c + a2 * s;
	    out[1] = a1 * c + a3 * s;
	    out[2] = a0 * -s + a2 * c;
	    out[3] = a1 * -s + a3 * c;
	    return out;
	};

	/**
	 * Scales the mat2 by the dimensions in the given vec2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2} out
	 **/
	mat2.scale = function (out, a, v) {
	    var a0 = a[0],
	        a1 = a[1],
	        a2 = a[2],
	        a3 = a[3],
	        v0 = v[0],
	        v1 = v[1];
	    out[0] = a0 * v0;
	    out[1] = a1 * v0;
	    out[2] = a2 * v1;
	    out[3] = a3 * v1;
	    return out;
	};

	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.rotate(dest, dest, rad);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	mat2.fromRotation = function (out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = c;
	    out[1] = s;
	    out[2] = -s;
	    out[3] = c;
	    return out;
	};

	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.scale(dest, dest, vec);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2} out
	 */
	mat2.fromScaling = function (out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = v[1];
	    return out;
	};

	/**
	 * Returns a string representation of a mat2
	 *
	 * @param {mat2} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat2.str = function (a) {
	    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};

	/**
	 * Returns Frobenius norm of a mat2
	 *
	 * @param {mat2} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat2.frob = function (a) {
	    return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
	};

	/**
	 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
	 * @param {mat2} L the lower triangular matrix 
	 * @param {mat2} D the diagonal matrix 
	 * @param {mat2} U the upper triangular matrix 
	 * @param {mat2} a the input matrix to factorize
	 */

	mat2.LDU = function (L, D, U, a) {
	    L[2] = a[2] / a[0];
	    U[0] = a[0];
	    U[1] = a[1];
	    U[3] = a[3] - L[2] * U[1];
	    return [L, D, U];
	};

	module.exports = mat2;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */

	var glMatrix = __webpack_require__(2);

	/**
	 * @class 2x3 Matrix
	 * @name mat2d
	 * 
	 * @description 
	 * A mat2d contains six elements defined as:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty]
	 * </pre>
	 * This is a short form for the 3x3 matrix:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty,
	 *  0, 0, 1]
	 * </pre>
	 * The last row is ignored so the array is shorter and operations are faster.
	 */
	var mat2d = {};

	/**
	 * Creates a new identity mat2d
	 *
	 * @returns {mat2d} a new 2x3 matrix
	 */
	mat2d.create = function () {
	    var out = new glMatrix.ARRAY_TYPE(6);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	};

	/**
	 * Creates a new mat2d initialized with values from an existing matrix
	 *
	 * @param {mat2d} a matrix to clone
	 * @returns {mat2d} a new 2x3 matrix
	 */
	mat2d.clone = function (a) {
	    var out = new glMatrix.ARRAY_TYPE(6);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    return out;
	};

	/**
	 * Copy the values from one mat2d to another
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	mat2d.copy = function (out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    return out;
	};

	/**
	 * Set a mat2d to the identity matrix
	 *
	 * @param {mat2d} out the receiving matrix
	 * @returns {mat2d} out
	 */
	mat2d.identity = function (out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	};

	/**
	 * Inverts a mat2d
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	mat2d.invert = function (out, a) {
	    var aa = a[0],
	        ab = a[1],
	        ac = a[2],
	        ad = a[3],
	        atx = a[4],
	        aty = a[5];

	    var det = aa * ad - ab * ac;
	    if (!det) {
	        return null;
	    }
	    det = 1.0 / det;

	    out[0] = ad * det;
	    out[1] = -ab * det;
	    out[2] = -ac * det;
	    out[3] = aa * det;
	    out[4] = (ac * aty - ad * atx) * det;
	    out[5] = (ab * atx - aa * aty) * det;
	    return out;
	};

	/**
	 * Calculates the determinant of a mat2d
	 *
	 * @param {mat2d} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat2d.determinant = function (a) {
	    return a[0] * a[3] - a[1] * a[2];
	};

	/**
	 * Multiplies two mat2d's
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	mat2d.multiply = function (out, a, b) {
	    var a0 = a[0],
	        a1 = a[1],
	        a2 = a[2],
	        a3 = a[3],
	        a4 = a[4],
	        a5 = a[5],
	        b0 = b[0],
	        b1 = b[1],
	        b2 = b[2],
	        b3 = b[3],
	        b4 = b[4],
	        b5 = b[5];
	    out[0] = a0 * b0 + a2 * b1;
	    out[1] = a1 * b0 + a3 * b1;
	    out[2] = a0 * b2 + a2 * b3;
	    out[3] = a1 * b2 + a3 * b3;
	    out[4] = a0 * b4 + a2 * b5 + a4;
	    out[5] = a1 * b4 + a3 * b5 + a5;
	    return out;
	};

	/**
	 * Alias for {@link mat2d.multiply}
	 * @function
	 */
	mat2d.mul = mat2d.multiply;

	/**
	 * Rotates a mat2d by the given angle
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	mat2d.rotate = function (out, a, rad) {
	    var a0 = a[0],
	        a1 = a[1],
	        a2 = a[2],
	        a3 = a[3],
	        a4 = a[4],
	        a5 = a[5],
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = a0 * c + a2 * s;
	    out[1] = a1 * c + a3 * s;
	    out[2] = a0 * -s + a2 * c;
	    out[3] = a1 * -s + a3 * c;
	    out[4] = a4;
	    out[5] = a5;
	    return out;
	};

	/**
	 * Scales the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2d} out
	 **/
	mat2d.scale = function (out, a, v) {
	    var a0 = a[0],
	        a1 = a[1],
	        a2 = a[2],
	        a3 = a[3],
	        a4 = a[4],
	        a5 = a[5],
	        v0 = v[0],
	        v1 = v[1];
	    out[0] = a0 * v0;
	    out[1] = a1 * v0;
	    out[2] = a2 * v1;
	    out[3] = a3 * v1;
	    out[4] = a4;
	    out[5] = a5;
	    return out;
	};

	/**
	 * Translates the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to translate the matrix by
	 * @returns {mat2d} out
	 **/
	mat2d.translate = function (out, a, v) {
	    var a0 = a[0],
	        a1 = a[1],
	        a2 = a[2],
	        a3 = a[3],
	        a4 = a[4],
	        a5 = a[5],
	        v0 = v[0],
	        v1 = v[1];
	    out[0] = a0;
	    out[1] = a1;
	    out[2] = a2;
	    out[3] = a3;
	    out[4] = a0 * v0 + a2 * v1 + a4;
	    out[5] = a1 * v0 + a3 * v1 + a5;
	    return out;
	};

	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.rotate(dest, dest, rad);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	mat2d.fromRotation = function (out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = c;
	    out[1] = s;
	    out[2] = -s;
	    out[3] = c;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	};

	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.scale(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2d} out
	 */
	mat2d.fromScaling = function (out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = v[1];
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	};

	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.translate(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat2d} out
	 */
	mat2d.fromTranslation = function (out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = v[0];
	    out[5] = v[1];
	    return out;
	};

	/**
	 * Returns a string representation of a mat2d
	 *
	 * @param {mat2d} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat2d.str = function (a) {
	    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
	};

	/**
	 * Returns Frobenius norm of a mat2d
	 *
	 * @param {mat2d} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat2d.frob = function (a) {
	    return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1);
	};

	module.exports = mat2d;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */

	var glMatrix = __webpack_require__(2);

	/**
	 * @class 3x3 Matrix
	 * @name mat3
	 */
	var mat3 = {};

	/**
	 * Creates a new identity mat3
	 *
	 * @returns {mat3} a new 3x3 matrix
	 */
	mat3.create = function () {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};

	/**
	 * Copies the upper-left 3x3 values into the given mat3.
	 *
	 * @param {mat3} out the receiving 3x3 matrix
	 * @param {mat4} a   the source 4x4 matrix
	 * @returns {mat3} out
	 */
	mat3.fromMat4 = function (out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[4];
	    out[4] = a[5];
	    out[5] = a[6];
	    out[6] = a[8];
	    out[7] = a[9];
	    out[8] = a[10];
	    return out;
	};

	/**
	 * Creates a new mat3 initialized with values from an existing matrix
	 *
	 * @param {mat3} a matrix to clone
	 * @returns {mat3} a new 3x3 matrix
	 */
	mat3.clone = function (a) {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};

	/**
	 * Copy the values from one mat3 to another
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.copy = function (out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};

	/**
	 * Set a mat3 to the identity matrix
	 *
	 * @param {mat3} out the receiving matrix
	 * @returns {mat3} out
	 */
	mat3.identity = function (out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};

	/**
	 * Transpose the values of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.transpose = function (out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a01 = a[1],
	            a02 = a[2],
	            a12 = a[5];
	        out[1] = a[3];
	        out[2] = a[6];
	        out[3] = a01;
	        out[5] = a[7];
	        out[6] = a02;
	        out[7] = a12;
	    } else {
	        out[0] = a[0];
	        out[1] = a[3];
	        out[2] = a[6];
	        out[3] = a[1];
	        out[4] = a[4];
	        out[5] = a[7];
	        out[6] = a[2];
	        out[7] = a[5];
	        out[8] = a[8];
	    }

	    return out;
	};

	/**
	 * Inverts a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.invert = function (out, a) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a10 = a[3],
	        a11 = a[4],
	        a12 = a[5],
	        a20 = a[6],
	        a21 = a[7],
	        a22 = a[8],
	        b01 = a22 * a11 - a12 * a21,
	        b11 = -a22 * a10 + a12 * a20,
	        b21 = a21 * a10 - a11 * a20,


	    // Calculate the determinant
	    det = a00 * b01 + a01 * b11 + a02 * b21;

	    if (!det) {
	        return null;
	    }
	    det = 1.0 / det;

	    out[0] = b01 * det;
	    out[1] = (-a22 * a01 + a02 * a21) * det;
	    out[2] = (a12 * a01 - a02 * a11) * det;
	    out[3] = b11 * det;
	    out[4] = (a22 * a00 - a02 * a20) * det;
	    out[5] = (-a12 * a00 + a02 * a10) * det;
	    out[6] = b21 * det;
	    out[7] = (-a21 * a00 + a01 * a20) * det;
	    out[8] = (a11 * a00 - a01 * a10) * det;
	    return out;
	};

	/**
	 * Calculates the adjugate of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.adjoint = function (out, a) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a10 = a[3],
	        a11 = a[4],
	        a12 = a[5],
	        a20 = a[6],
	        a21 = a[7],
	        a22 = a[8];

	    out[0] = a11 * a22 - a12 * a21;
	    out[1] = a02 * a21 - a01 * a22;
	    out[2] = a01 * a12 - a02 * a11;
	    out[3] = a12 * a20 - a10 * a22;
	    out[4] = a00 * a22 - a02 * a20;
	    out[5] = a02 * a10 - a00 * a12;
	    out[6] = a10 * a21 - a11 * a20;
	    out[7] = a01 * a20 - a00 * a21;
	    out[8] = a00 * a11 - a01 * a10;
	    return out;
	};

	/**
	 * Calculates the determinant of a mat3
	 *
	 * @param {mat3} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat3.determinant = function (a) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a10 = a[3],
	        a11 = a[4],
	        a12 = a[5],
	        a20 = a[6],
	        a21 = a[7],
	        a22 = a[8];

	    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
	};

	/**
	 * Multiplies two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.multiply = function (out, a, b) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a10 = a[3],
	        a11 = a[4],
	        a12 = a[5],
	        a20 = a[6],
	        a21 = a[7],
	        a22 = a[8],
	        b00 = b[0],
	        b01 = b[1],
	        b02 = b[2],
	        b10 = b[3],
	        b11 = b[4],
	        b12 = b[5],
	        b20 = b[6],
	        b21 = b[7],
	        b22 = b[8];

	    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
	    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
	    out[2] = b00 * a02 + b01 * a12 + b02 * a22;

	    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
	    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
	    out[5] = b10 * a02 + b11 * a12 + b12 * a22;

	    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
	    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
	    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
	    return out;
	};

	/**
	 * Alias for {@link mat3.multiply}
	 * @function
	 */
	mat3.mul = mat3.multiply;

	/**
	 * Translate a mat3 by the given vector
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to translate
	 * @param {vec2} v vector to translate by
	 * @returns {mat3} out
	 */
	mat3.translate = function (out, a, v) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a10 = a[3],
	        a11 = a[4],
	        a12 = a[5],
	        a20 = a[6],
	        a21 = a[7],
	        a22 = a[8],
	        x = v[0],
	        y = v[1];

	    out[0] = a00;
	    out[1] = a01;
	    out[2] = a02;

	    out[3] = a10;
	    out[4] = a11;
	    out[5] = a12;

	    out[6] = x * a00 + y * a10 + a20;
	    out[7] = x * a01 + y * a11 + a21;
	    out[8] = x * a02 + y * a12 + a22;
	    return out;
	};

	/**
	 * Rotates a mat3 by the given angle
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	mat3.rotate = function (out, a, rad) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a10 = a[3],
	        a11 = a[4],
	        a12 = a[5],
	        a20 = a[6],
	        a21 = a[7],
	        a22 = a[8],
	        s = Math.sin(rad),
	        c = Math.cos(rad);

	    out[0] = c * a00 + s * a10;
	    out[1] = c * a01 + s * a11;
	    out[2] = c * a02 + s * a12;

	    out[3] = c * a10 - s * a00;
	    out[4] = c * a11 - s * a01;
	    out[5] = c * a12 - s * a02;

	    out[6] = a20;
	    out[7] = a21;
	    out[8] = a22;
	    return out;
	};

	/**
	 * Scales the mat3 by the dimensions in the given vec2
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat3} out
	 **/
	mat3.scale = function (out, a, v) {
	    var x = v[0],
	        y = v[1];

	    out[0] = x * a[0];
	    out[1] = x * a[1];
	    out[2] = x * a[2];

	    out[3] = y * a[3];
	    out[4] = y * a[4];
	    out[5] = y * a[5];

	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};

	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.translate(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat3} out
	 */
	mat3.fromTranslation = function (out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = v[0];
	    out[7] = v[1];
	    out[8] = 1;
	    return out;
	};

	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.rotate(dest, dest, rad);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	mat3.fromRotation = function (out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);

	    out[0] = c;
	    out[1] = s;
	    out[2] = 0;

	    out[3] = -s;
	    out[4] = c;
	    out[5] = 0;

	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};

	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.scale(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat3} out
	 */
	mat3.fromScaling = function (out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;

	    out[3] = 0;
	    out[4] = v[1];
	    out[5] = 0;

	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};

	/**
	 * Copies the values from a mat2d into a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat2d} a the matrix to copy
	 * @returns {mat3} out
	 **/
	mat3.fromMat2d = function (out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = 0;

	    out[3] = a[2];
	    out[4] = a[3];
	    out[5] = 0;

	    out[6] = a[4];
	    out[7] = a[5];
	    out[8] = 1;
	    return out;
	};

	/**
	* Calculates a 3x3 matrix from the given quaternion
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {quat} q Quaternion to create matrix from
	*
	* @returns {mat3} out
	*/
	mat3.fromQuat = function (out, q) {
	    var x = q[0],
	        y = q[1],
	        z = q[2],
	        w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	        xx = x * x2,
	        yx = y * x2,
	        yy = y * y2,
	        zx = z * x2,
	        zy = z * y2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;

	    out[0] = 1 - yy - zz;
	    out[3] = yx - wz;
	    out[6] = zx + wy;

	    out[1] = yx + wz;
	    out[4] = 1 - xx - zz;
	    out[7] = zy - wx;

	    out[2] = zx - wy;
	    out[5] = zy + wx;
	    out[8] = 1 - xx - yy;

	    return out;
	};

	/**
	* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {mat4} a Mat4 to derive the normal matrix from
	*
	* @returns {mat3} out
	*/
	mat3.normalFromMat4 = function (out, a) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11],
	        a30 = a[12],
	        a31 = a[13],
	        a32 = a[14],
	        a33 = a[15],
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32,


	    // Calculate the determinant
	    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

	    if (!det) {
	        return null;
	    }
	    det = 1.0 / det;

	    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

	    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

	    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

	    return out;
	};

	/**
	 * Returns a string representation of a mat3
	 *
	 * @param {mat3} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat3.str = function (a) {
	    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
	};

	/**
	 * Returns Frobenius norm of a mat3
	 *
	 * @param {mat3} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat3.frob = function (a) {
	    return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
	};

	module.exports = mat3;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */

	var glMatrix = __webpack_require__(2);

	/**
	 * @class 4x4 Matrix
	 * @name mat4
	 */
	var mat4 = {};

	/**
	 * Creates a new identity mat4
	 *
	 * @returns {mat4} a new 4x4 matrix
	 */
	mat4.create = function () {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};

	/**
	 * Creates a new mat4 initialized with values from an existing matrix
	 *
	 * @param {mat4} a matrix to clone
	 * @returns {mat4} a new 4x4 matrix
	 */
	mat4.clone = function (a) {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};

	/**
	 * Copy the values from one mat4 to another
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.copy = function (out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};

	/**
	 * Set a mat4 to the identity matrix
	 *
	 * @param {mat4} out the receiving matrix
	 * @returns {mat4} out
	 */
	mat4.identity = function (out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};

	/**
	 * Transpose the values of a mat4
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.transpose = function (out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a01 = a[1],
	            a02 = a[2],
	            a03 = a[3],
	            a12 = a[6],
	            a13 = a[7],
	            a23 = a[11];

	        out[1] = a[4];
	        out[2] = a[8];
	        out[3] = a[12];
	        out[4] = a01;
	        out[6] = a[9];
	        out[7] = a[13];
	        out[8] = a02;
	        out[9] = a12;
	        out[11] = a[14];
	        out[12] = a03;
	        out[13] = a13;
	        out[14] = a23;
	    } else {
	        out[0] = a[0];
	        out[1] = a[4];
	        out[2] = a[8];
	        out[3] = a[12];
	        out[4] = a[1];
	        out[5] = a[5];
	        out[6] = a[9];
	        out[7] = a[13];
	        out[8] = a[2];
	        out[9] = a[6];
	        out[10] = a[10];
	        out[11] = a[14];
	        out[12] = a[3];
	        out[13] = a[7];
	        out[14] = a[11];
	        out[15] = a[15];
	    }

	    return out;
	};

	/**
	 * Inverts a mat4
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.invert = function (out, a) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11],
	        a30 = a[12],
	        a31 = a[13],
	        a32 = a[14],
	        a33 = a[15],
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32,


	    // Calculate the determinant
	    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

	    if (!det) {
	        return null;
	    }
	    det = 1.0 / det;

	    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

	    return out;
	};

	/**
	 * Calculates the adjugate of a mat4
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.adjoint = function (out, a) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11],
	        a30 = a[12],
	        a31 = a[13],
	        a32 = a[14],
	        a33 = a[15];

	    out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
	    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
	    out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
	    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
	    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
	    out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
	    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
	    out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
	    out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
	    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
	    out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
	    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
	    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
	    out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
	    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
	    out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
	    return out;
	};

	/**
	 * Calculates the determinant of a mat4
	 *
	 * @param {mat4} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat4.determinant = function (a) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11],
	        a30 = a[12],
	        a31 = a[13],
	        a32 = a[14],
	        a33 = a[15],
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32;

	    // Calculate the determinant
	    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	};

	/**
	 * Multiplies two mat4's
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.multiply = function (out, a, b) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11],
	        a30 = a[12],
	        a31 = a[13],
	        a32 = a[14],
	        a33 = a[15];

	    // Cache only the current line of the second matrix
	    var b0 = b[0],
	        b1 = b[1],
	        b2 = b[2],
	        b3 = b[3];
	    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

	    b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
	    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

	    b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
	    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

	    b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
	    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	    return out;
	};

	/**
	 * Alias for {@link mat4.multiply}
	 * @function
	 */
	mat4.mul = mat4.multiply;

	/**
	 * Translate a mat4 by the given vector
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.translate = function (out, a, v) {
	    var x = v[0],
	        y = v[1],
	        z = v[2],
	        a00,
	        a01,
	        a02,
	        a03,
	        a10,
	        a11,
	        a12,
	        a13,
	        a20,
	        a21,
	        a22,
	        a23;

	    if (a === out) {
	        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
	        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
	        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
	        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
	    } else {
	        a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
	        a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
	        a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

	        out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
	        out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
	        out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

	        out[12] = a00 * x + a10 * y + a20 * z + a[12];
	        out[13] = a01 * x + a11 * y + a21 * z + a[13];
	        out[14] = a02 * x + a12 * y + a22 * z + a[14];
	        out[15] = a03 * x + a13 * y + a23 * z + a[15];
	    }

	    return out;
	};

	/**
	 * Scales the mat4 by the dimensions in the given vec3
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 **/
	mat4.scale = function (out, a, v) {
	    var x = v[0],
	        y = v[1],
	        z = v[2];

	    out[0] = a[0] * x;
	    out[1] = a[1] * x;
	    out[2] = a[2] * x;
	    out[3] = a[3] * x;
	    out[4] = a[4] * y;
	    out[5] = a[5] * y;
	    out[6] = a[6] * y;
	    out[7] = a[7] * y;
	    out[8] = a[8] * z;
	    out[9] = a[9] * z;
	    out[10] = a[10] * z;
	    out[11] = a[11] * z;
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};

	/**
	 * Rotates a mat4 by the given angle around the given axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	mat4.rotate = function (out, a, rad, axis) {
	    var x = axis[0],
	        y = axis[1],
	        z = axis[2],
	        len = Math.sqrt(x * x + y * y + z * z),
	        s,
	        c,
	        t,
	        a00,
	        a01,
	        a02,
	        a03,
	        a10,
	        a11,
	        a12,
	        a13,
	        a20,
	        a21,
	        a22,
	        a23,
	        b00,
	        b01,
	        b02,
	        b10,
	        b11,
	        b12,
	        b20,
	        b21,
	        b22;

	    if (Math.abs(len) < glMatrix.EPSILON) {
	        return null;
	    }

	    len = 1 / len;
	    x *= len;
	    y *= len;
	    z *= len;

	    s = Math.sin(rad);
	    c = Math.cos(rad);
	    t = 1 - c;

	    a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
	    a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
	    a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

	    // Construct the elements of the rotation matrix
	    b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;
	    b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;
	    b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c;

	    // Perform rotation-specific matrix multiplication
	    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
	    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
	    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
	    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
	    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
	    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
	    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
	    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
	    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
	    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
	    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
	    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

	    if (a !== out) {
	        // If the source and destination differ, copy the unchanged last row
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	    return out;
	};

	/**
	 * Rotates a matrix by the given angle around the X axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.rotateX = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11];

	    if (a !== out) {
	        // If the source and destination differ, copy the unchanged rows
	        out[0] = a[0];
	        out[1] = a[1];
	        out[2] = a[2];
	        out[3] = a[3];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }

	    // Perform axis-specific matrix multiplication
	    out[4] = a10 * c + a20 * s;
	    out[5] = a11 * c + a21 * s;
	    out[6] = a12 * c + a22 * s;
	    out[7] = a13 * c + a23 * s;
	    out[8] = a20 * c - a10 * s;
	    out[9] = a21 * c - a11 * s;
	    out[10] = a22 * c - a12 * s;
	    out[11] = a23 * c - a13 * s;
	    return out;
	};

	/**
	 * Rotates a matrix by the given angle around the Y axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.rotateY = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11];

	    if (a !== out) {
	        // If the source and destination differ, copy the unchanged rows
	        out[4] = a[4];
	        out[5] = a[5];
	        out[6] = a[6];
	        out[7] = a[7];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }

	    // Perform axis-specific matrix multiplication
	    out[0] = a00 * c - a20 * s;
	    out[1] = a01 * c - a21 * s;
	    out[2] = a02 * c - a22 * s;
	    out[3] = a03 * c - a23 * s;
	    out[8] = a00 * s + a20 * c;
	    out[9] = a01 * s + a21 * c;
	    out[10] = a02 * s + a22 * c;
	    out[11] = a03 * s + a23 * c;
	    return out;
	};

	/**
	 * Rotates a matrix by the given angle around the Z axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.rotateZ = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7];

	    if (a !== out) {
	        // If the source and destination differ, copy the unchanged last row
	        out[8] = a[8];
	        out[9] = a[9];
	        out[10] = a[10];
	        out[11] = a[11];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }

	    // Perform axis-specific matrix multiplication
	    out[0] = a00 * c + a10 * s;
	    out[1] = a01 * c + a11 * s;
	    out[2] = a02 * c + a12 * s;
	    out[3] = a03 * c + a13 * s;
	    out[4] = a10 * c - a00 * s;
	    out[5] = a11 * c - a01 * s;
	    out[6] = a12 * c - a02 * s;
	    out[7] = a13 * c - a03 * s;
	    return out;
	};

	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	mat4.fromTranslation = function (out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	    return out;
	};

	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.scale(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Scaling vector
	 * @returns {mat4} out
	 */
	mat4.fromScaling = function (out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = v[1];
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = v[2];
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};

	/**
	 * Creates a matrix from a given angle around a given axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotate(dest, dest, rad, axis);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	mat4.fromRotation = function (out, rad, axis) {
	    var x = axis[0],
	        y = axis[1],
	        z = axis[2],
	        len = Math.sqrt(x * x + y * y + z * z),
	        s,
	        c,
	        t;

	    if (Math.abs(len) < glMatrix.EPSILON) {
	        return null;
	    }

	    len = 1 / len;
	    x *= len;
	    y *= len;
	    z *= len;

	    s = Math.sin(rad);
	    c = Math.cos(rad);
	    t = 1 - c;

	    // Perform rotation-specific matrix multiplication
	    out[0] = x * x * t + c;
	    out[1] = y * x * t + z * s;
	    out[2] = z * x * t - y * s;
	    out[3] = 0;
	    out[4] = x * y * t - z * s;
	    out[5] = y * y * t + c;
	    out[6] = z * y * t + x * s;
	    out[7] = 0;
	    out[8] = x * z * t + y * s;
	    out[9] = y * z * t - x * s;
	    out[10] = z * z * t + c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};

	/**
	 * Creates a matrix from the given angle around the X axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateX(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromXRotation = function (out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);

	    // Perform axis-specific matrix multiplication
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = c;
	    out[6] = s;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = -s;
	    out[10] = c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};

	/**
	 * Creates a matrix from the given angle around the Y axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateY(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromYRotation = function (out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);

	    // Perform axis-specific matrix multiplication
	    out[0] = c;
	    out[1] = 0;
	    out[2] = -s;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = s;
	    out[9] = 0;
	    out[10] = c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};

	/**
	 * Creates a matrix from the given angle around the Z axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateZ(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromZRotation = function (out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);

	    // Perform axis-specific matrix multiplication
	    out[0] = c;
	    out[1] = s;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = -s;
	    out[5] = c;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};

	/**
	 * Creates a matrix from a quaternion rotation and vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslation = function (out, q, v) {
	    // Quaternion math
	    var x = q[0],
	        y = q[1],
	        z = q[2],
	        w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;

	    out[0] = 1 - (yy + zz);
	    out[1] = xy + wz;
	    out[2] = xz - wy;
	    out[3] = 0;
	    out[4] = xy - wz;
	    out[5] = 1 - (xx + zz);
	    out[6] = yz + wx;
	    out[7] = 0;
	    out[8] = xz + wy;
	    out[9] = yz - wx;
	    out[10] = 1 - (xx + yy);
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;

	    return out;
	};

	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslationScale = function (out, q, v, s) {
	    // Quaternion math
	    var x = q[0],
	        y = q[1],
	        z = q[2],
	        w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2,
	        sx = s[0],
	        sy = s[1],
	        sz = s[2];

	    out[0] = (1 - (yy + zz)) * sx;
	    out[1] = (xy + wz) * sx;
	    out[2] = (xz - wy) * sx;
	    out[3] = 0;
	    out[4] = (xy - wz) * sy;
	    out[5] = (1 - (xx + zz)) * sy;
	    out[6] = (yz + wx) * sy;
	    out[7] = 0;
	    out[8] = (xz + wy) * sz;
	    out[9] = (yz - wx) * sz;
	    out[10] = (1 - (xx + yy)) * sz;
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;

	    return out;
	};

	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     mat4.translate(dest, origin);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *     mat4.translate(dest, negativeOrigin);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @param {vec3} o The origin vector around which to scale and rotate
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslationScaleOrigin = function (out, q, v, s, o) {
	    // Quaternion math
	    var x = q[0],
	        y = q[1],
	        z = q[2],
	        w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2,
	        sx = s[0],
	        sy = s[1],
	        sz = s[2],
	        ox = o[0],
	        oy = o[1],
	        oz = o[2];

	    out[0] = (1 - (yy + zz)) * sx;
	    out[1] = (xy + wz) * sx;
	    out[2] = (xz - wy) * sx;
	    out[3] = 0;
	    out[4] = (xy - wz) * sy;
	    out[5] = (1 - (xx + zz)) * sy;
	    out[6] = (yz + wx) * sy;
	    out[7] = 0;
	    out[8] = (xz + wy) * sz;
	    out[9] = (yz - wx) * sz;
	    out[10] = (1 - (xx + yy)) * sz;
	    out[11] = 0;
	    out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
	    out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
	    out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
	    out[15] = 1;

	    return out;
	};

	mat4.fromQuat = function (out, q) {
	    var x = q[0],
	        y = q[1],
	        z = q[2],
	        w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	        xx = x * x2,
	        yx = y * x2,
	        yy = y * y2,
	        zx = z * x2,
	        zy = z * y2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;

	    out[0] = 1 - yy - zz;
	    out[1] = yx + wz;
	    out[2] = zx - wy;
	    out[3] = 0;

	    out[4] = yx - wz;
	    out[5] = 1 - xx - zz;
	    out[6] = zy + wx;
	    out[7] = 0;

	    out[8] = zx + wy;
	    out[9] = zy - wx;
	    out[10] = 1 - xx - yy;
	    out[11] = 0;

	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;

	    return out;
	};

	/**
	 * Generates a frustum matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Number} left Left bound of the frustum
	 * @param {Number} right Right bound of the frustum
	 * @param {Number} bottom Bottom bound of the frustum
	 * @param {Number} top Top bound of the frustum
	 * @param {Number} near Near bound of the frustum
	 * @param {Number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.frustum = function (out, left, right, bottom, top, near, far) {
	    var rl = 1 / (right - left),
	        tb = 1 / (top - bottom),
	        nf = 1 / (near - far);
	    out[0] = near * 2 * rl;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = near * 2 * tb;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = (right + left) * rl;
	    out[9] = (top + bottom) * tb;
	    out[10] = (far + near) * nf;
	    out[11] = -1;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = far * near * 2 * nf;
	    out[15] = 0;
	    return out;
	};

	/**
	 * Generates a perspective projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} fovy Vertical field of view in radians
	 * @param {number} aspect Aspect ratio. typically viewport width/height
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.perspective = function (out, fovy, aspect, near, far) {
	    var f = 1.0 / Math.tan(fovy / 2),
	        nf = 1 / (near - far);
	    out[0] = f / aspect;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = f;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = (far + near) * nf;
	    out[11] = -1;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 2 * far * near * nf;
	    out[15] = 0;
	    return out;
	};

	/**
	 * Generates a perspective projection matrix with the given field of view.
	 * This is primarily useful for generating projection matrices to be used
	 * with the still experiemental WebVR API.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.perspectiveFromFieldOfView = function (out, fov, near, far) {
	    var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0),
	        downTan = Math.tan(fov.downDegrees * Math.PI / 180.0),
	        leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0),
	        rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0),
	        xScale = 2.0 / (leftTan + rightTan),
	        yScale = 2.0 / (upTan + downTan);

	    out[0] = xScale;
	    out[1] = 0.0;
	    out[2] = 0.0;
	    out[3] = 0.0;
	    out[4] = 0.0;
	    out[5] = yScale;
	    out[6] = 0.0;
	    out[7] = 0.0;
	    out[8] = -((leftTan - rightTan) * xScale * 0.5);
	    out[9] = (upTan - downTan) * yScale * 0.5;
	    out[10] = far / (near - far);
	    out[11] = -1.0;
	    out[12] = 0.0;
	    out[13] = 0.0;
	    out[14] = far * near / (near - far);
	    out[15] = 0.0;
	    return out;
	};

	/**
	 * Generates a orthogonal projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} left Left bound of the frustum
	 * @param {number} right Right bound of the frustum
	 * @param {number} bottom Bottom bound of the frustum
	 * @param {number} top Top bound of the frustum
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.ortho = function (out, left, right, bottom, top, near, far) {
	    var lr = 1 / (left - right),
	        bt = 1 / (bottom - top),
	        nf = 1 / (near - far);
	    out[0] = -2 * lr;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = -2 * bt;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 2 * nf;
	    out[11] = 0;
	    out[12] = (left + right) * lr;
	    out[13] = (top + bottom) * bt;
	    out[14] = (far + near) * nf;
	    out[15] = 1;
	    return out;
	};

	/**
	 * Generates a look-at matrix with the given eye position, focal point, and up axis
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {vec3} eye Position of the viewer
	 * @param {vec3} center Point the viewer is looking at
	 * @param {vec3} up vec3 pointing up
	 * @returns {mat4} out
	 */
	mat4.lookAt = function (out, eye, center, up) {
	    var x0,
	        x1,
	        x2,
	        y0,
	        y1,
	        y2,
	        z0,
	        z1,
	        z2,
	        len,
	        eyex = eye[0],
	        eyey = eye[1],
	        eyez = eye[2],
	        upx = up[0],
	        upy = up[1],
	        upz = up[2],
	        centerx = center[0],
	        centery = center[1],
	        centerz = center[2];

	    if (Math.abs(eyex - centerx) < glMatrix.EPSILON && Math.abs(eyey - centery) < glMatrix.EPSILON && Math.abs(eyez - centerz) < glMatrix.EPSILON) {
	        return mat4.identity(out);
	    }

	    z0 = eyex - centerx;
	    z1 = eyey - centery;
	    z2 = eyez - centerz;

	    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	    z0 *= len;
	    z1 *= len;
	    z2 *= len;

	    x0 = upy * z2 - upz * z1;
	    x1 = upz * z0 - upx * z2;
	    x2 = upx * z1 - upy * z0;
	    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	    if (!len) {
	        x0 = 0;
	        x1 = 0;
	        x2 = 0;
	    } else {
	        len = 1 / len;
	        x0 *= len;
	        x1 *= len;
	        x2 *= len;
	    }

	    y0 = z1 * x2 - z2 * x1;
	    y1 = z2 * x0 - z0 * x2;
	    y2 = z0 * x1 - z1 * x0;

	    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	    if (!len) {
	        y0 = 0;
	        y1 = 0;
	        y2 = 0;
	    } else {
	        len = 1 / len;
	        y0 *= len;
	        y1 *= len;
	        y2 *= len;
	    }

	    out[0] = x0;
	    out[1] = y0;
	    out[2] = z0;
	    out[3] = 0;
	    out[4] = x1;
	    out[5] = y1;
	    out[6] = z1;
	    out[7] = 0;
	    out[8] = x2;
	    out[9] = y2;
	    out[10] = z2;
	    out[11] = 0;
	    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	    out[15] = 1;

	    return out;
	};

	/**
	 * Returns a string representation of a mat4
	 *
	 * @param {mat4} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat4.str = function (a) {
	    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
	};

	/**
	 * Returns Frobenius norm of a mat4
	 *
	 * @param {mat4} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat4.frob = function (a) {
	    return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
	};

	module.exports = mat4;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */

	var glMatrix = __webpack_require__(2);
	var mat3 = __webpack_require__(5);
	var vec3 = __webpack_require__(8);
	var vec4 = __webpack_require__(9);

	/**
	 * @class Quaternion
	 * @name quat
	 */
	var quat = {};

	/**
	 * Creates a new identity quat
	 *
	 * @returns {quat} a new quaternion
	 */
	quat.create = function () {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};

	/**
	 * Sets a quaternion to represent the shortest rotation from one
	 * vector to another.
	 *
	 * Both vectors are assumed to be unit length.
	 *
	 * @param {quat} out the receiving quaternion.
	 * @param {vec3} a the initial vector
	 * @param {vec3} b the destination vector
	 * @returns {quat} out
	 */
	quat.rotationTo = function () {
	    var tmpvec3 = vec3.create();
	    var xUnitVec3 = vec3.fromValues(1, 0, 0);
	    var yUnitVec3 = vec3.fromValues(0, 1, 0);

	    return function (out, a, b) {
	        var dot = vec3.dot(a, b);
	        if (dot < -0.999999) {
	            vec3.cross(tmpvec3, xUnitVec3, a);
	            if (vec3.length(tmpvec3) < 0.000001) vec3.cross(tmpvec3, yUnitVec3, a);
	            vec3.normalize(tmpvec3, tmpvec3);
	            quat.setAxisAngle(out, tmpvec3, Math.PI);
	            return out;
	        } else if (dot > 0.999999) {
	            out[0] = 0;
	            out[1] = 0;
	            out[2] = 0;
	            out[3] = 1;
	            return out;
	        } else {
	            vec3.cross(tmpvec3, a, b);
	            out[0] = tmpvec3[0];
	            out[1] = tmpvec3[1];
	            out[2] = tmpvec3[2];
	            out[3] = 1 + dot;
	            return quat.normalize(out, out);
	        }
	    };
	}();

	/**
	 * Sets the specified quaternion with values corresponding to the given
	 * axes. Each axis is a vec3 and is expected to be unit length and
	 * perpendicular to all other specified axes.
	 *
	 * @param {vec3} view  the vector representing the viewing direction
	 * @param {vec3} right the vector representing the local "right" direction
	 * @param {vec3} up    the vector representing the local "up" direction
	 * @returns {quat} out
	 */
	quat.setAxes = function () {
	    var matr = mat3.create();

	    return function (out, view, right, up) {
	        matr[0] = right[0];
	        matr[3] = right[1];
	        matr[6] = right[2];

	        matr[1] = up[0];
	        matr[4] = up[1];
	        matr[7] = up[2];

	        matr[2] = -view[0];
	        matr[5] = -view[1];
	        matr[8] = -view[2];

	        return quat.normalize(out, quat.fromMat3(out, matr));
	    };
	}();

	/**
	 * Creates a new quat initialized with values from an existing quaternion
	 *
	 * @param {quat} a quaternion to clone
	 * @returns {quat} a new quaternion
	 * @function
	 */
	quat.clone = vec4.clone;

	/**
	 * Creates a new quat initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} a new quaternion
	 * @function
	 */
	quat.fromValues = vec4.fromValues;

	/**
	 * Copy the values from one quat to another
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the source quaternion
	 * @returns {quat} out
	 * @function
	 */
	quat.copy = vec4.copy;

	/**
	 * Set the components of a quat to the given values
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} out
	 * @function
	 */
	quat.set = vec4.set;

	/**
	 * Set a quat to the identity quaternion
	 *
	 * @param {quat} out the receiving quaternion
	 * @returns {quat} out
	 */
	quat.identity = function (out) {
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};

	/**
	 * Sets a quat from the given angle and rotation axis,
	 * then returns it.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {vec3} axis the axis around which to rotate
	 * @param {Number} rad the angle in radians
	 * @returns {quat} out
	 **/
	quat.setAxisAngle = function (out, axis, rad) {
	    rad = rad * 0.5;
	    var s = Math.sin(rad);
	    out[0] = s * axis[0];
	    out[1] = s * axis[1];
	    out[2] = s * axis[2];
	    out[3] = Math.cos(rad);
	    return out;
	};

	/**
	 * Adds two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 * @function
	 */
	quat.add = vec4.add;

	/**
	 * Multiplies two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 */
	quat.multiply = function (out, a, b) {
	    var ax = a[0],
	        ay = a[1],
	        az = a[2],
	        aw = a[3],
	        bx = b[0],
	        by = b[1],
	        bz = b[2],
	        bw = b[3];

	    out[0] = ax * bw + aw * bx + ay * bz - az * by;
	    out[1] = ay * bw + aw * by + az * bx - ax * bz;
	    out[2] = az * bw + aw * bz + ax * by - ay * bx;
	    out[3] = aw * bw - ax * bx - ay * by - az * bz;
	    return out;
	};

	/**
	 * Alias for {@link quat.multiply}
	 * @function
	 */
	quat.mul = quat.multiply;

	/**
	 * Scales a quat by a scalar number
	 *
	 * @param {quat} out the receiving vector
	 * @param {quat} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {quat} out
	 * @function
	 */
	quat.scale = vec4.scale;

	/**
	 * Rotates a quaternion by the given angle about the X axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateX = function (out, a, rad) {
	    rad *= 0.5;

	    var ax = a[0],
	        ay = a[1],
	        az = a[2],
	        aw = a[3],
	        bx = Math.sin(rad),
	        bw = Math.cos(rad);

	    out[0] = ax * bw + aw * bx;
	    out[1] = ay * bw + az * bx;
	    out[2] = az * bw - ay * bx;
	    out[3] = aw * bw - ax * bx;
	    return out;
	};

	/**
	 * Rotates a quaternion by the given angle about the Y axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateY = function (out, a, rad) {
	    rad *= 0.5;

	    var ax = a[0],
	        ay = a[1],
	        az = a[2],
	        aw = a[3],
	        by = Math.sin(rad),
	        bw = Math.cos(rad);

	    out[0] = ax * bw - az * by;
	    out[1] = ay * bw + aw * by;
	    out[2] = az * bw + ax * by;
	    out[3] = aw * bw - ay * by;
	    return out;
	};

	/**
	 * Rotates a quaternion by the given angle about the Z axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateZ = function (out, a, rad) {
	    rad *= 0.5;

	    var ax = a[0],
	        ay = a[1],
	        az = a[2],
	        aw = a[3],
	        bz = Math.sin(rad),
	        bw = Math.cos(rad);

	    out[0] = ax * bw + ay * bz;
	    out[1] = ay * bw - ax * bz;
	    out[2] = az * bw + aw * bz;
	    out[3] = aw * bw - az * bz;
	    return out;
	};

	/**
	 * Calculates the W component of a quat from the X, Y, and Z components.
	 * Assumes that quaternion is 1 unit in length.
	 * Any existing W component will be ignored.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate W component of
	 * @returns {quat} out
	 */
	quat.calculateW = function (out, a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];

	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
	    return out;
	};

	/**
	 * Calculates the dot product of two quat's
	 *
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {Number} dot product of a and b
	 * @function
	 */
	quat.dot = vec4.dot;

	/**
	 * Performs a linear interpolation between two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {quat} out
	 * @function
	 */
	quat.lerp = vec4.lerp;

	/**
	 * Performs a spherical linear interpolation between two quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {quat} out
	 */
	quat.slerp = function (out, a, b, t) {
	    // benchmarks:
	    //    http://jsperf.com/quaternion-slerp-implementations

	    var ax = a[0],
	        ay = a[1],
	        az = a[2],
	        aw = a[3],
	        bx = b[0],
	        by = b[1],
	        bz = b[2],
	        bw = b[3];

	    var omega, cosom, sinom, scale0, scale1;

	    // calc cosine
	    cosom = ax * bx + ay * by + az * bz + aw * bw;
	    // adjust signs (if necessary)
	    if (cosom < 0.0) {
	        cosom = -cosom;
	        bx = -bx;
	        by = -by;
	        bz = -bz;
	        bw = -bw;
	    }
	    // calculate coefficients
	    if (1.0 - cosom > 0.000001) {
	        // standard case (slerp)
	        omega = Math.acos(cosom);
	        sinom = Math.sin(omega);
	        scale0 = Math.sin((1.0 - t) * omega) / sinom;
	        scale1 = Math.sin(t * omega) / sinom;
	    } else {
	        // "from" and "to" quaternions are very close
	        //  ... so we can do a linear interpolation
	        scale0 = 1.0 - t;
	        scale1 = t;
	    }
	    // calculate final values
	    out[0] = scale0 * ax + scale1 * bx;
	    out[1] = scale0 * ay + scale1 * by;
	    out[2] = scale0 * az + scale1 * bz;
	    out[3] = scale0 * aw + scale1 * bw;

	    return out;
	};

	/**
	 * Performs a spherical linear interpolation with two control points
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {quat} c the third operand
	 * @param {quat} d the fourth operand
	 * @param {Number} t interpolation amount
	 * @returns {quat} out
	 */
	quat.sqlerp = function () {
	    var temp1 = quat.create();
	    var temp2 = quat.create();

	    return function (out, a, b, c, d, t) {
	        quat.slerp(temp1, a, d, t);
	        quat.slerp(temp2, b, c, t);
	        quat.slerp(out, temp1, temp2, 2 * t * (1 - t));

	        return out;
	    };
	}();

	/**
	 * Calculates the inverse of a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate inverse of
	 * @returns {quat} out
	 */
	quat.invert = function (out, a) {
	    var a0 = a[0],
	        a1 = a[1],
	        a2 = a[2],
	        a3 = a[3],
	        dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,
	        invDot = dot ? 1.0 / dot : 0;

	    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

	    out[0] = -a0 * invDot;
	    out[1] = -a1 * invDot;
	    out[2] = -a2 * invDot;
	    out[3] = a3 * invDot;
	    return out;
	};

	/**
	 * Calculates the conjugate of a quat
	 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate conjugate of
	 * @returns {quat} out
	 */
	quat.conjugate = function (out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] = a[3];
	    return out;
	};

	/**
	 * Calculates the length of a quat
	 *
	 * @param {quat} a vector to calculate length of
	 * @returns {Number} length of a
	 * @function
	 */
	quat.length = vec4.length;

	/**
	 * Alias for {@link quat.length}
	 * @function
	 */
	quat.len = quat.length;

	/**
	 * Calculates the squared length of a quat
	 *
	 * @param {quat} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 * @function
	 */
	quat.squaredLength = vec4.squaredLength;

	/**
	 * Alias for {@link quat.squaredLength}
	 * @function
	 */
	quat.sqrLen = quat.squaredLength;

	/**
	 * Normalize a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quaternion to normalize
	 * @returns {quat} out
	 * @function
	 */
	quat.normalize = vec4.normalize;

	/**
	 * Creates a quaternion from the given 3x3 rotation matrix.
	 *
	 * NOTE: The resultant quaternion is not normalized, so you should be sure
	 * to renormalize the quaternion yourself where necessary.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {mat3} m rotation matrix
	 * @returns {quat} out
	 * @function
	 */
	quat.fromMat3 = function (out, m) {
	    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
	    // article "Quaternion Calculus and Fast Animation".
	    var fTrace = m[0] + m[4] + m[8];
	    var fRoot;

	    if (fTrace > 0.0) {
	        // |w| > 1/2, may as well choose w > 1/2
	        fRoot = Math.sqrt(fTrace + 1.0); // 2w
	        out[3] = 0.5 * fRoot;
	        fRoot = 0.5 / fRoot; // 1/(4w)
	        out[0] = (m[5] - m[7]) * fRoot;
	        out[1] = (m[6] - m[2]) * fRoot;
	        out[2] = (m[1] - m[3]) * fRoot;
	    } else {
	        // |w| <= 1/2
	        var i = 0;
	        if (m[4] > m[0]) i = 1;
	        if (m[8] > m[i * 3 + i]) i = 2;
	        var j = (i + 1) % 3;
	        var k = (i + 2) % 3;

	        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
	        out[i] = 0.5 * fRoot;
	        fRoot = 0.5 / fRoot;
	        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
	        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
	        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
	    }

	    return out;
	};

	/**
	 * Returns a string representation of a quatenion
	 *
	 * @param {quat} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	quat.str = function (a) {
	    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};

	module.exports = quat;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */

	var glMatrix = __webpack_require__(2);

	/**
	 * @class 3 Dimensional Vector
	 * @name vec3
	 */
	var vec3 = {};

	/**
	 * Creates a new, empty vec3
	 *
	 * @returns {vec3} a new 3D vector
	 */
	vec3.create = function () {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    return out;
	};

	/**
	 * Creates a new vec3 initialized with values from an existing vector
	 *
	 * @param {vec3} a vector to clone
	 * @returns {vec3} a new 3D vector
	 */
	vec3.clone = function (a) {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    return out;
	};

	/**
	 * Creates a new vec3 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} a new 3D vector
	 */
	vec3.fromValues = function (x, y, z) {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    return out;
	};

	/**
	 * Copy the values from one vec3 to another
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the source vector
	 * @returns {vec3} out
	 */
	vec3.copy = function (out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    return out;
	};

	/**
	 * Set the components of a vec3 to the given values
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} out
	 */
	vec3.set = function (out, x, y, z) {
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    return out;
	};

	/**
	 * Adds two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.add = function (out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    return out;
	};

	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.subtract = function (out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    return out;
	};

	/**
	 * Alias for {@link vec3.subtract}
	 * @function
	 */
	vec3.sub = vec3.subtract;

	/**
	 * Multiplies two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.multiply = function (out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    out[2] = a[2] * b[2];
	    return out;
	};

	/**
	 * Alias for {@link vec3.multiply}
	 * @function
	 */
	vec3.mul = vec3.multiply;

	/**
	 * Divides two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.divide = function (out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    out[2] = a[2] / b[2];
	    return out;
	};

	/**
	 * Alias for {@link vec3.divide}
	 * @function
	 */
	vec3.div = vec3.divide;

	/**
	 * Returns the minimum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.min = function (out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    out[2] = Math.min(a[2], b[2]);
	    return out;
	};

	/**
	 * Returns the maximum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.max = function (out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    out[2] = Math.max(a[2], b[2]);
	    return out;
	};

	/**
	 * Scales a vec3 by a scalar number
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec3} out
	 */
	vec3.scale = function (out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    return out;
	};

	/**
	 * Adds two vec3's after scaling the second operand by a scalar value
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec3} out
	 */
	vec3.scaleAndAdd = function (out, a, b, scale) {
	    out[0] = a[0] + b[0] * scale;
	    out[1] = a[1] + b[1] * scale;
	    out[2] = a[2] + b[2] * scale;
	    return out;
	};

	/**
	 * Calculates the euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec3.distance = function (a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2];
	    return Math.sqrt(x * x + y * y + z * z);
	};

	/**
	 * Alias for {@link vec3.distance}
	 * @function
	 */
	vec3.dist = vec3.distance;

	/**
	 * Calculates the squared euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec3.squaredDistance = function (a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2];
	    return x * x + y * y + z * z;
	};

	/**
	 * Alias for {@link vec3.squaredDistance}
	 * @function
	 */
	vec3.sqrDist = vec3.squaredDistance;

	/**
	 * Calculates the length of a vec3
	 *
	 * @param {vec3} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec3.length = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    return Math.sqrt(x * x + y * y + z * z);
	};

	/**
	 * Alias for {@link vec3.length}
	 * @function
	 */
	vec3.len = vec3.length;

	/**
	 * Calculates the squared length of a vec3
	 *
	 * @param {vec3} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec3.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    return x * x + y * y + z * z;
	};

	/**
	 * Alias for {@link vec3.squaredLength}
	 * @function
	 */
	vec3.sqrLen = vec3.squaredLength;

	/**
	 * Negates the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to negate
	 * @returns {vec3} out
	 */
	vec3.negate = function (out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    return out;
	};

	/**
	 * Returns the inverse of the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to invert
	 * @returns {vec3} out
	 */
	vec3.inverse = function (out, a) {
	    out[0] = 1.0 / a[0];
	    out[1] = 1.0 / a[1];
	    out[2] = 1.0 / a[2];
	    return out;
	};

	/**
	 * Normalize a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to normalize
	 * @returns {vec3} out
	 */
	vec3.normalize = function (out, a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    var len = x * x + y * y + z * z;
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len);
	        out[0] = a[0] * len;
	        out[1] = a[1] * len;
	        out[2] = a[2] * len;
	    }
	    return out;
	};

	/**
	 * Calculates the dot product of two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec3.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	};

	/**
	 * Computes the cross product of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.cross = function (out, a, b) {
	    var ax = a[0],
	        ay = a[1],
	        az = a[2],
	        bx = b[0],
	        by = b[1],
	        bz = b[2];

	    out[0] = ay * bz - az * by;
	    out[1] = az * bx - ax * bz;
	    out[2] = ax * by - ay * bx;
	    return out;
	};

	/**
	 * Performs a linear interpolation between two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1],
	        az = a[2];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    out[2] = az + t * (b[2] - az);
	    return out;
	};

	/**
	 * Performs a hermite interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.hermite = function (out, a, b, c, d, t) {
	    var factorTimes2 = t * t,
	        factor1 = factorTimes2 * (2 * t - 3) + 1,
	        factor2 = factorTimes2 * (t - 2) + t,
	        factor3 = factorTimes2 * (t - 1),
	        factor4 = factorTimes2 * (3 - 2 * t);

	    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

	    return out;
	};

	/**
	 * Performs a bezier interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.bezier = function (out, a, b, c, d, t) {
	    var inverseFactor = 1 - t,
	        inverseFactorTimesTwo = inverseFactor * inverseFactor,
	        factorTimes2 = t * t,
	        factor1 = inverseFactorTimesTwo * inverseFactor,
	        factor2 = 3 * t * inverseFactorTimesTwo,
	        factor3 = 3 * factorTimes2 * inverseFactor,
	        factor4 = factorTimes2 * t;

	    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

	    return out;
	};

	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec3} out
	 */
	vec3.random = function (out, scale) {
	    scale = scale || 1.0;

	    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
	    var z = glMatrix.RANDOM() * 2.0 - 1.0;
	    var zScale = Math.sqrt(1.0 - z * z) * scale;

	    out[0] = Math.cos(r) * zScale;
	    out[1] = Math.sin(r) * zScale;
	    out[2] = z * scale;
	    return out;
	};

	/**
	 * Transforms the vec3 with a mat4.
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec3} out
	 */
	vec3.transformMat4 = function (out, a, m) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = m[3] * x + m[7] * y + m[11] * z + m[15];
	    w = w || 1.0;
	    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
	    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
	    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
	    return out;
	};

	/**
	 * Transforms the vec3 with a mat3.
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat4} m the 3x3 matrix to transform with
	 * @returns {vec3} out
	 */
	vec3.transformMat3 = function (out, a, m) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    out[0] = x * m[0] + y * m[3] + z * m[6];
	    out[1] = x * m[1] + y * m[4] + z * m[7];
	    out[2] = x * m[2] + y * m[5] + z * m[8];
	    return out;
	};

	/**
	 * Transforms the vec3 with a quat
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec3} out
	 */
	vec3.transformQuat = function (out, a, q) {
	    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        qx = q[0],
	        qy = q[1],
	        qz = q[2],
	        qw = q[3],


	    // calculate quat * vec
	    ix = qw * x + qy * z - qz * y,
	        iy = qw * y + qz * x - qx * z,
	        iz = qw * z + qx * y - qy * x,
	        iw = -qx * x - qy * y - qz * z;

	    // calculate result * inverse quat
	    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	    return out;
	};

	/**
	 * Rotate a 3D vector around the x-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateX = function (out, a, b, c) {
	    var p = [],
	        r = [];
	    //Translate point to the origin
	    p[0] = a[0] - b[0];
	    p[1] = a[1] - b[1];
	    p[2] = a[2] - b[2];

	    //perform rotation
	    r[0] = p[0];
	    r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
	    r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

	    //translate to correct position
	    out[0] = r[0] + b[0];
	    out[1] = r[1] + b[1];
	    out[2] = r[2] + b[2];

	    return out;
	};

	/**
	 * Rotate a 3D vector around the y-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateY = function (out, a, b, c) {
	    var p = [],
	        r = [];
	    //Translate point to the origin
	    p[0] = a[0] - b[0];
	    p[1] = a[1] - b[1];
	    p[2] = a[2] - b[2];

	    //perform rotation
	    r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
	    r[1] = p[1];
	    r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

	    //translate to correct position
	    out[0] = r[0] + b[0];
	    out[1] = r[1] + b[1];
	    out[2] = r[2] + b[2];

	    return out;
	};

	/**
	 * Rotate a 3D vector around the z-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateZ = function (out, a, b, c) {
	    var p = [],
	        r = [];
	    //Translate point to the origin
	    p[0] = a[0] - b[0];
	    p[1] = a[1] - b[1];
	    p[2] = a[2] - b[2];

	    //perform rotation
	    r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
	    r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
	    r[2] = p[2];

	    //translate to correct position
	    out[0] = r[0] + b[0];
	    out[1] = r[1] + b[1];
	    out[2] = r[2] + b[2];

	    return out;
	};

	/**
	 * Perform some operation over an array of vec3s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec3.forEach = function () {
	    var vec = vec3.create();

	    return function (a, stride, offset, count, fn, arg) {
	        var i, l;
	        if (!stride) {
	            stride = 3;
	        }

	        if (!offset) {
	            offset = 0;
	        }

	        if (count) {
	            l = Math.min(count * stride + offset, a.length);
	        } else {
	            l = a.length;
	        }

	        for (i = offset; i < l; i += stride) {
	            vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];
	            fn(vec, vec, arg);
	            a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];
	        }

	        return a;
	    };
	}();

	/**
	 * Get the angle between two 3D vectors
	 * @param {vec3} a The first operand
	 * @param {vec3} b The second operand
	 * @returns {Number} The angle in radians
	 */
	vec3.angle = function (a, b) {

	    var tempA = vec3.fromValues(a[0], a[1], a[2]);
	    var tempB = vec3.fromValues(b[0], b[1], b[2]);

	    vec3.normalize(tempA, tempA);
	    vec3.normalize(tempB, tempB);

	    var cosine = vec3.dot(tempA, tempB);

	    if (cosine > 1.0) {
	        return 0;
	    } else {
	        return Math.acos(cosine);
	    }
	};

	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec3} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec3.str = function (a) {
	    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
	};

	module.exports = vec3;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */

	var glMatrix = __webpack_require__(2);

	/**
	 * @class 4 Dimensional Vector
	 * @name vec4
	 */
	var vec4 = {};

	/**
	 * Creates a new, empty vec4
	 *
	 * @returns {vec4} a new 4D vector
	 */
	vec4.create = function () {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    return out;
	};

	/**
	 * Creates a new vec4 initialized with values from an existing vector
	 *
	 * @param {vec4} a vector to clone
	 * @returns {vec4} a new 4D vector
	 */
	vec4.clone = function (a) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};

	/**
	 * Creates a new vec4 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} a new 4D vector
	 */
	vec4.fromValues = function (x, y, z, w) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = w;
	    return out;
	};

	/**
	 * Copy the values from one vec4 to another
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the source vector
	 * @returns {vec4} out
	 */
	vec4.copy = function (out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};

	/**
	 * Set the components of a vec4 to the given values
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} out
	 */
	vec4.set = function (out, x, y, z, w) {
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = w;
	    return out;
	};

	/**
	 * Adds two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.add = function (out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    return out;
	};

	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.subtract = function (out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    return out;
	};

	/**
	 * Alias for {@link vec4.subtract}
	 * @function
	 */
	vec4.sub = vec4.subtract;

	/**
	 * Multiplies two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.multiply = function (out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    out[2] = a[2] * b[2];
	    out[3] = a[3] * b[3];
	    return out;
	};

	/**
	 * Alias for {@link vec4.multiply}
	 * @function
	 */
	vec4.mul = vec4.multiply;

	/**
	 * Divides two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.divide = function (out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    out[2] = a[2] / b[2];
	    out[3] = a[3] / b[3];
	    return out;
	};

	/**
	 * Alias for {@link vec4.divide}
	 * @function
	 */
	vec4.div = vec4.divide;

	/**
	 * Returns the minimum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.min = function (out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    out[2] = Math.min(a[2], b[2]);
	    out[3] = Math.min(a[3], b[3]);
	    return out;
	};

	/**
	 * Returns the maximum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.max = function (out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    out[2] = Math.max(a[2], b[2]);
	    out[3] = Math.max(a[3], b[3]);
	    return out;
	};

	/**
	 * Scales a vec4 by a scalar number
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec4} out
	 */
	vec4.scale = function (out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    return out;
	};

	/**
	 * Adds two vec4's after scaling the second operand by a scalar value
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec4} out
	 */
	vec4.scaleAndAdd = function (out, a, b, scale) {
	    out[0] = a[0] + b[0] * scale;
	    out[1] = a[1] + b[1] * scale;
	    out[2] = a[2] + b[2] * scale;
	    out[3] = a[3] + b[3] * scale;
	    return out;
	};

	/**
	 * Calculates the euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec4.distance = function (a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2],
	        w = b[3] - a[3];
	    return Math.sqrt(x * x + y * y + z * z + w * w);
	};

	/**
	 * Alias for {@link vec4.distance}
	 * @function
	 */
	vec4.dist = vec4.distance;

	/**
	 * Calculates the squared euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec4.squaredDistance = function (a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2],
	        w = b[3] - a[3];
	    return x * x + y * y + z * z + w * w;
	};

	/**
	 * Alias for {@link vec4.squaredDistance}
	 * @function
	 */
	vec4.sqrDist = vec4.squaredDistance;

	/**
	 * Calculates the length of a vec4
	 *
	 * @param {vec4} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec4.length = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    return Math.sqrt(x * x + y * y + z * z + w * w);
	};

	/**
	 * Alias for {@link vec4.length}
	 * @function
	 */
	vec4.len = vec4.length;

	/**
	 * Calculates the squared length of a vec4
	 *
	 * @param {vec4} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec4.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    return x * x + y * y + z * z + w * w;
	};

	/**
	 * Alias for {@link vec4.squaredLength}
	 * @function
	 */
	vec4.sqrLen = vec4.squaredLength;

	/**
	 * Negates the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to negate
	 * @returns {vec4} out
	 */
	vec4.negate = function (out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] = -a[3];
	    return out;
	};

	/**
	 * Returns the inverse of the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to invert
	 * @returns {vec4} out
	 */
	vec4.inverse = function (out, a) {
	    out[0] = 1.0 / a[0];
	    out[1] = 1.0 / a[1];
	    out[2] = 1.0 / a[2];
	    out[3] = 1.0 / a[3];
	    return out;
	};

	/**
	 * Normalize a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to normalize
	 * @returns {vec4} out
	 */
	vec4.normalize = function (out, a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    var len = x * x + y * y + z * z + w * w;
	    if (len > 0) {
	        len = 1 / Math.sqrt(len);
	        out[0] = x * len;
	        out[1] = y * len;
	        out[2] = z * len;
	        out[3] = w * len;
	    }
	    return out;
	};

	/**
	 * Calculates the dot product of two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec4.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	};

	/**
	 * Performs a linear interpolation between two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec4} out
	 */
	vec4.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1],
	        az = a[2],
	        aw = a[3];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    out[2] = az + t * (b[2] - az);
	    out[3] = aw + t * (b[3] - aw);
	    return out;
	};

	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec4} out
	 */
	vec4.random = function (out, scale) {
	    scale = scale || 1.0;

	    //TODO: This is a pretty awful way of doing this. Find something better.
	    out[0] = glMatrix.RANDOM();
	    out[1] = glMatrix.RANDOM();
	    out[2] = glMatrix.RANDOM();
	    out[3] = glMatrix.RANDOM();
	    vec4.normalize(out, out);
	    vec4.scale(out, out, scale);
	    return out;
	};

	/**
	 * Transforms the vec4 with a mat4.
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec4} out
	 */
	vec4.transformMat4 = function (out, a, m) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
	    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
	    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
	    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
	    return out;
	};

	/**
	 * Transforms the vec4 with a quat
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec4} out
	 */
	vec4.transformQuat = function (out, a, q) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        qx = q[0],
	        qy = q[1],
	        qz = q[2],
	        qw = q[3],


	    // calculate quat * vec
	    ix = qw * x + qy * z - qz * y,
	        iy = qw * y + qz * x - qx * z,
	        iz = qw * z + qx * y - qy * x,
	        iw = -qx * x - qy * y - qz * z;

	    // calculate result * inverse quat
	    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	    out[3] = a[3];
	    return out;
	};

	/**
	 * Perform some operation over an array of vec4s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec4.forEach = function () {
	    var vec = vec4.create();

	    return function (a, stride, offset, count, fn, arg) {
	        var i, l;
	        if (!stride) {
	            stride = 4;
	        }

	        if (!offset) {
	            offset = 0;
	        }

	        if (count) {
	            l = Math.min(count * stride + offset, a.length);
	        } else {
	            l = a.length;
	        }

	        for (i = offset; i < l; i += stride) {
	            vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];vec[3] = a[i + 3];
	            fn(vec, vec, arg);
	            a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];a[i + 3] = vec[3];
	        }

	        return a;
	    };
	}();

	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec4} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec4.str = function (a) {
	    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};

	module.exports = vec4;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */

	var glMatrix = __webpack_require__(2);

	/**
	 * @class 2 Dimensional Vector
	 * @name vec2
	 */
	var vec2 = {};

	/**
	 * Creates a new, empty vec2
	 *
	 * @returns {vec2} a new 2D vector
	 */
	vec2.create = function () {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = 0;
	    out[1] = 0;
	    return out;
	};

	/**
	 * Creates a new vec2 initialized with values from an existing vector
	 *
	 * @param {vec2} a vector to clone
	 * @returns {vec2} a new 2D vector
	 */
	vec2.clone = function (a) {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};

	/**
	 * Creates a new vec2 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} a new 2D vector
	 */
	vec2.fromValues = function (x, y) {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = x;
	    out[1] = y;
	    return out;
	};

	/**
	 * Copy the values from one vec2 to another
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the source vector
	 * @returns {vec2} out
	 */
	vec2.copy = function (out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};

	/**
	 * Set the components of a vec2 to the given values
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} out
	 */
	vec2.set = function (out, x, y) {
	    out[0] = x;
	    out[1] = y;
	    return out;
	};

	/**
	 * Adds two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.add = function (out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    return out;
	};

	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.subtract = function (out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    return out;
	};

	/**
	 * Alias for {@link vec2.subtract}
	 * @function
	 */
	vec2.sub = vec2.subtract;

	/**
	 * Multiplies two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.multiply = function (out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    return out;
	};

	/**
	 * Alias for {@link vec2.multiply}
	 * @function
	 */
	vec2.mul = vec2.multiply;

	/**
	 * Divides two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.divide = function (out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    return out;
	};

	/**
	 * Alias for {@link vec2.divide}
	 * @function
	 */
	vec2.div = vec2.divide;

	/**
	 * Returns the minimum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.min = function (out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    return out;
	};

	/**
	 * Returns the maximum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.max = function (out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    return out;
	};

	/**
	 * Scales a vec2 by a scalar number
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec2} out
	 */
	vec2.scale = function (out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    return out;
	};

	/**
	 * Adds two vec2's after scaling the second operand by a scalar value
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec2} out
	 */
	vec2.scaleAndAdd = function (out, a, b, scale) {
	    out[0] = a[0] + b[0] * scale;
	    out[1] = a[1] + b[1] * scale;
	    return out;
	};

	/**
	 * Calculates the euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec2.distance = function (a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return Math.sqrt(x * x + y * y);
	};

	/**
	 * Alias for {@link vec2.distance}
	 * @function
	 */
	vec2.dist = vec2.distance;

	/**
	 * Calculates the squared euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec2.squaredDistance = function (a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return x * x + y * y;
	};

	/**
	 * Alias for {@link vec2.squaredDistance}
	 * @function
	 */
	vec2.sqrDist = vec2.squaredDistance;

	/**
	 * Calculates the length of a vec2
	 *
	 * @param {vec2} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec2.length = function (a) {
	    var x = a[0],
	        y = a[1];
	    return Math.sqrt(x * x + y * y);
	};

	/**
	 * Alias for {@link vec2.length}
	 * @function
	 */
	vec2.len = vec2.length;

	/**
	 * Calculates the squared length of a vec2
	 *
	 * @param {vec2} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec2.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1];
	    return x * x + y * y;
	};

	/**
	 * Alias for {@link vec2.squaredLength}
	 * @function
	 */
	vec2.sqrLen = vec2.squaredLength;

	/**
	 * Negates the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to negate
	 * @returns {vec2} out
	 */
	vec2.negate = function (out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    return out;
	};

	/**
	 * Returns the inverse of the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to invert
	 * @returns {vec2} out
	 */
	vec2.inverse = function (out, a) {
	    out[0] = 1.0 / a[0];
	    out[1] = 1.0 / a[1];
	    return out;
	};

	/**
	 * Normalize a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to normalize
	 * @returns {vec2} out
	 */
	vec2.normalize = function (out, a) {
	    var x = a[0],
	        y = a[1];
	    var len = x * x + y * y;
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len);
	        out[0] = a[0] * len;
	        out[1] = a[1] * len;
	    }
	    return out;
	};

	/**
	 * Calculates the dot product of two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec2.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	};

	/**
	 * Computes the cross product of two vec2's
	 * Note that the cross product must by definition produce a 3D vector
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec3} out
	 */
	vec2.cross = function (out, a, b) {
	    var z = a[0] * b[1] - a[1] * b[0];
	    out[0] = out[1] = 0;
	    out[2] = z;
	    return out;
	};

	/**
	 * Performs a linear interpolation between two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec2} out
	 */
	vec2.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    return out;
	};

	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec2} out
	 */
	vec2.random = function (out, scale) {
	    scale = scale || 1.0;
	    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
	    out[0] = Math.cos(r) * scale;
	    out[1] = Math.sin(r) * scale;
	    return out;
	};

	/**
	 * Transforms the vec2 with a mat2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat2 = function (out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[2] * y;
	    out[1] = m[1] * x + m[3] * y;
	    return out;
	};

	/**
	 * Transforms the vec2 with a mat2d
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2d} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat2d = function (out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[2] * y + m[4];
	    out[1] = m[1] * x + m[3] * y + m[5];
	    return out;
	};

	/**
	 * Transforms the vec2 with a mat3
	 * 3rd vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat3} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat3 = function (out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[3] * y + m[6];
	    out[1] = m[1] * x + m[4] * y + m[7];
	    return out;
	};

	/**
	 * Transforms the vec2 with a mat4
	 * 3rd vector component is implicitly '0'
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat4 = function (out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[4] * y + m[12];
	    out[1] = m[1] * x + m[5] * y + m[13];
	    return out;
	};

	/**
	 * Perform some operation over an array of vec2s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec2.forEach = function () {
	    var vec = vec2.create();

	    return function (a, stride, offset, count, fn, arg) {
	        var i, l;
	        if (!stride) {
	            stride = 2;
	        }

	        if (!offset) {
	            offset = 0;
	        }

	        if (count) {
	            l = Math.min(count * stride + offset, a.length);
	        } else {
	            l = a.length;
	        }

	        for (i = offset; i < l; i += stride) {
	            vec[0] = a[i];vec[1] = a[i + 1];
	            fn(vec, vec, arg);
	            a[i] = vec[0];a[i + 1] = vec[1];
	        }

	        return a;
	    };
	}();

	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec2} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec2.str = function (a) {
	    return 'vec2(' + a[0] + ', ' + a[1] + ')';
	};

	module.exports = vec2;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var indices = {};

	var Entity = function () {
	    function Entity() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'entity' : _ref$name;

	        _classCallCheck(this, Entity);

	        this.name = name;

	        this.basename = name;

	        this.inheritance = ['Entity'];
	    }

	    _createClass(Entity, [{
	        key: 'isType',
	        value: function isType(entity) {
	            return this.inheritance.indexOf(entity) !== -1;
	        }
	    }, {
	        key: 'name',
	        get: function get() {
	            return this._name;
	        },
	        set: function set(name) {
	            if (indices[name] === undefined) {
	                indices[name] = -1;
	            }

	            indices[name]++;

	            this._name = name + '.0' + indices[name];
	        }
	    }, {
	        key: 'basename',
	        get: function get() {
	            return this._basename;
	        },
	        set: function set(basename) {
	            this._basename = basename;
	        }
	    }, {
	        key: 'inheritance',
	        get: function get() {
	            return this._inheritance;
	        },
	        set: function set(inheritance) {
	            this._inheritance = inheritance;
	        }
	    }]);

	    return Entity;
	}();

	exports.default = Entity;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Context = __webpack_require__(13);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Attribute = function (_Entity) {
	    _inherits(Attribute, _Entity);

	    function Attribute() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var attribute = _ref.attribute;
	        var length = _ref.length;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'attribute' : _ref$name;
	        var _ref$format = _ref.format;
	        var format = _ref$format === undefined ? 'FLOAT' : _ref$format;
	        var _ref$normalized = _ref.normalized;
	        var normalized = _ref$normalized === undefined ? false : _ref$normalized;
	        var _ref$offset = _ref.offset;
	        var offset = _ref$offset === undefined ? 0 : _ref$offset;

	        _classCallCheck(this, Attribute);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Attribute).call(this, { name: name }));

	        _this.attribute = attribute;

	        _this.location = undefined;

	        _this.length = length;

	        _this.format = format;

	        _this.normalized = normalized;

	        _this.offset = offset;

	        _this.inheritance = ['Entity', 'Attribute'];
	        return _this;
	    }

	    _createClass(Attribute, [{
	        key: 'getByteCount',
	        value: function getByteCount(bytes) {
	            return this.length * bytes;
	        }
	    }, {
	        key: 'locate',
	        value: function locate(program) {
	            return this.location = _Context.gl.getAttribLocation(program.buffer, 'a_' + this.attribute);
	        }
	    }, {
	        key: 'enable',
	        value: function enable(program) {
	            var stride = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	            var location = this.locate(program);

	            if (~location) {
	                _Context.gl.enableVertexAttribArray(location);

	                _Context.gl.vertexAttribPointer(location, this.length, this.format, this.normalized, stride, this.offset);
	            }
	        }
	    }, {
	        key: 'disable',
	        value: function disable() {
	            var location = this.location;

	            if (~location) {
	                _Context.gl.disableVertexAttribArray(location);
	            }
	        }
	    }, {
	        key: 'attribute',
	        get: function get() {
	            return this._attribute;
	        },
	        set: function set(attribute) {
	            this._attribute = attribute;
	        }
	    }, {
	        key: 'location',
	        get: function get() {
	            return this._location;
	        },
	        set: function set(location) {
	            this._location = location;
	        }
	    }, {
	        key: 'length',
	        get: function get() {
	            return this._length;
	        },
	        set: function set(length) {
	            this._length = length;
	        }
	    }, {
	        key: 'format',
	        get: function get() {
	            return _Context.gl[this._format];
	        },
	        set: function set(format) {
	            this._format = format;
	        }
	    }, {
	        key: 'normalized',
	        get: function get() {
	            return this._normalized;
	        },
	        set: function set(normalized) {
	            this._normalized = normalized;
	        }
	    }, {
	        key: 'offset',
	        get: function get() {
	            return this._offset;
	        },
	        set: function set(offset) {
	            this._offset = offset;
	        }
	    }]);

	    return Attribute;
	}(_Entity3.default);

	exports.default = Attribute;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.gl = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var gl = undefined;

	var Context = function (_Entity) {
	    _inherits(Context, _Entity);

	    function Context() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'canvas' : _ref$name;
	        var _ref$selector = _ref.selector;
	        var selector = _ref$selector === undefined ? 'canvas' : _ref$selector;
	        var _ref$width = _ref.width;
	        var width = _ref$width === undefined ? window.innerWidth : _ref$width;
	        var _ref$height = _ref.height;
	        var height = _ref$height === undefined ? window.innerHeight : _ref$height;
	        var _ref$dpi = _ref.dpi;
	        var dpi = _ref$dpi === undefined ? window.devicePixelRatio : _ref$dpi;

	        _classCallCheck(this, Context);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Context).call(this, { name: name }));

	        _this.canvas = undefined;

	        _this.width = width;

	        _this.height = height;

	        _this.dpi = dpi;

	        _this.gl = undefined;

	        _this.inheritance = ['Entity', 'Context'];

	        _this.prime(selector);
	        _this.contextualise();
	        return _this;
	    }

	    _createClass(Context, [{
	        key: 'prime',
	        value: function prime(selector) {
	            var canvas = document.querySelector(selector);
	            var width = this.width;
	            var height = this.height;
	            var dpi = this.dpi;

	            canvas.setAttribute('width', width);
	            canvas.setAttribute('height', height);

	            canvas.style.width = width / dpi;
	            canvas.style.height = height / dpi;

	            this.canvas = canvas;
	        }
	    }, {
	        key: 'contextualise',
	        value: function contextualise() {
	            var canvas = this.canvas;

	            this.gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

	            exports.gl = gl = this.gl;
	        }
	    }, {
	        key: 'use',
	        value: function use() {
	            exports.gl = gl = this.gl;
	        }
	    }, {
	        key: 'canvas',
	        get: function get() {
	            return this._canvas;
	        },
	        set: function set(canvas) {
	            this._canvas = canvas;
	        }
	    }, {
	        key: 'width',
	        get: function get() {
	            return this._width * this._dpi;
	        },
	        set: function set(width) {
	            this._width = width;
	        }
	    }, {
	        key: 'height',
	        get: function get() {
	            return this._height * this._dpi;
	        },
	        set: function set(height) {
	            this._height = height;
	        }
	    }, {
	        key: 'dpi',
	        get: function get() {
	            return this._dpi;
	        },
	        set: function set(dpi) {
	            this._dpi = dpi;
	        }
	    }, {
	        key: 'gl',
	        get: function get() {
	            return this._gl;
	        },
	        set: function set(gl) {
	            this._gl = gl;
	        }
	    }]);

	    return Context;
	}(_Entity3.default);

	exports.gl = gl;
	exports.default = Context;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Context = __webpack_require__(13);

	var _glMatrix = __webpack_require__(1);

	var _LSL = __webpack_require__(15);

	var _LSL2 = _interopRequireDefault(_LSL);

	var _Structure2 = __webpack_require__(16);

	var _Structure3 = _interopRequireDefault(_Structure2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var axis = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] };
	var radians = 0.0174532925;

	var Camera = function (_Structure) {
	    _inherits(Camera, _Structure);

	    function Camera() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'camera' : _ref$name;
	        var _ref$path = _ref.path;
	        var path = _ref$path === undefined ? 'camera' : _ref$path;
	        var _ref$uniforms = _ref.uniforms;
	        var uniforms = _ref$uniforms === undefined ? ['mat4 projectionMatrix', 'mat4 modelViewMatrix', 'mat3 normalMatrix'] : _ref$uniforms;
	        var _ref$background = _ref.background;
	        var background = _ref$background === undefined ? 0x000000 : _ref$background;
	        var _ref$translucence = _ref.translucence;
	        var translucence = _ref$translucence === undefined ? 1 : _ref$translucence;

	        _classCallCheck(this, Camera);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Camera).call(this, { name: name, path: path, uniforms: uniforms }));

	        _this.background = background;

	        _this.translucence = translucence;

	        _this.modelViewMatrix = _glMatrix.mat4.create();

	        _this.projectionMatrix = _glMatrix.mat4.create();

	        _this.normalMatrix = _glMatrix.mat3.create();

	        _this.stack = [];

	        _this.inheritance = ['Entity', 'Structure', 'Camera'];
	        return _this;
	    }

	    _createClass(Camera, [{
	        key: 'configure',
	        value: function configure() {
	            var background = this.background.concat(this.translucence);

	            _Context.gl.enable(_Context.gl.CULL_FACE);
	            _Context.gl.frontFace(_Context.gl.CCW);
	            _Context.gl.clearColor.apply(_Context.gl, background);
	        }
	    }, {
	        key: 'bind',
	        value: function bind(program) {
	            _glMatrix.mat3.normalFromMat4(this.normalMatrix, this.modelViewMatrix);

	            _get(Object.getPrototypeOf(Camera.prototype), 'bind', this).call(this, program);
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            var currentCamera = _glMatrix.mat4.clone(this.modelViewMatrix);

	            this.stack.push(currentCamera);
	        }
	    }, {
	        key: 'restore',
	        value: function restore() {
	            var stack = this.stack;

	            if (stack.length) {
	                var previousCamera = stack.pop();

	                _glMatrix.mat4.copy(this.modelViewMatrix, previousCamera);
	            }
	        }
	    }, {
	        key: 'scale',
	        value: function scale(scaleX, scaleY, scaleZ) {
	            var modelViewMatrix = this.modelViewMatrix;

	            _glMatrix.mat4.scale(modelViewMatrix, modelViewMatrix, arguments);
	        }
	    }, {
	        key: 'scaleX',
	        value: function scaleX(scale) {
	            this.scale(scale, 1, 1);
	        }
	    }, {
	        key: 'scaleY',
	        value: function scaleY(scale) {
	            this.scale(1, scale, 1);
	        }
	    }, {
	        key: 'scaleZ',
	        value: function scaleZ(scale) {
	            this.scale(1, 1, scale);
	        }
	    }, {
	        key: 'rotate',
	        value: function rotate(rotation) {
	            var pivot = arguments.length <= 1 || arguments[1] === undefined ? 'y' : arguments[1];

	            var modelViewMatrix = this.modelViewMatrix;
	            var radian = rotation * radians;

	            _glMatrix.mat4.rotate(modelViewMatrix, modelViewMatrix, radian, axis[pivot]);
	        }
	    }, {
	        key: 'rotateX',
	        value: function rotateX(rotation) {
	            this.rotate(rotation, 'x');
	        }
	    }, {
	        key: 'rotateY',
	        value: function rotateY(rotation) {
	            this.rotate(rotation, 'y');
	        }
	    }, {
	        key: 'rotateZ',
	        value: function rotateZ(rotation) {
	            this.rotate(rotation, 'z');
	        }
	    }, {
	        key: 'translate',
	        value: function translate(translateX, translateY, translateZ) {
	            var modelViewMatrix = this.modelViewMatrix;

	            _glMatrix.mat4.translate(modelViewMatrix, modelViewMatrix, arguments);
	        }
	    }, {
	        key: 'translateX',
	        value: function translateX(translation) {
	            this.translate(translation, 0, 0);
	        }
	    }, {
	        key: 'translateY',
	        value: function translateY(translation) {
	            this.translate(0, translation, 0);
	        }
	    }, {
	        key: 'translateZ',
	        value: function translateZ(translation) {
	            this.translate(0, 0, translation);
	        }
	    }, {
	        key: 'background',
	        get: function get() {
	            return this._background;
	        },
	        set: function set(background) {
	            this._background = (0, _LSL2.default)(background);
	        }
	    }, {
	        key: 'translucence',
	        get: function get() {
	            return this._translucence;
	        },
	        set: function set(translucence) {
	            this._translucence = translucence;
	        }
	    }, {
	        key: 'modelViewMatrix',
	        get: function get() {
	            return this._modelViewMatrix;
	        },
	        set: function set(modelViewMatrix) {
	            this._modelViewMatrix = modelViewMatrix;
	        }
	    }, {
	        key: 'projectionMatrix',
	        get: function get() {
	            return this._projectionMatrix;
	        },
	        set: function set(projectionMatrix) {
	            this._projectionMatrix = projectionMatrix;
	        }
	    }, {
	        key: 'normalMatrix',
	        get: function get() {
	            return this._normalMatrix;
	        },
	        set: function set(normalMatrix) {
	            this._normalMatrix = normalMatrix;
	        }
	    }, {
	        key: 'stack',
	        get: function get() {
	            return this._stack;
	        },
	        set: function set(stack) {
	            this._stack = stack;
	        }
	    }]);

	    return Camera;
	}(_Structure3.default);

	exports.default = Camera;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	function LSL(hex) {
	   var r = hex >> 16 & 0xFF;
	   var g = hex >> 8 & 0xFF;
	   var b = hex & 0xFF;

	   r /= 255;
	   g /= 255;
	   b /= 255;

	   return [r, g, b];
	}

	exports.default = LSL;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	var _Uniform = __webpack_require__(17);

	var _Uniform2 = _interopRequireDefault(_Uniform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Structure = function (_Entity) {
	    _inherits(Structure, _Entity);

	    function Structure() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var path = _ref.path;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'structure' : _ref$name;
	        var _ref$uniforms = _ref.uniforms;
	        var uniforms = _ref$uniforms === undefined ? [] : _ref$uniforms;

	        _classCallCheck(this, Structure);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Structure).call(this, { name: name }));

	        _this.path = path;

	        _this.uniforms = uniforms;

	        _this.inheritance = ['Entity', 'Structure'];
	        return _this;
	    }

	    _createClass(Structure, [{
	        key: 'instantiate',
	        value: function instantiate(qualifying) {
	            var properties = qualifying.split(' ');
	            var format = properties[0];
	            var uniform = properties[1];

	            return new _Uniform2.default({ path: this.path, uniform: uniform, format: format });
	        }
	    }, {
	        key: 'bind',
	        value: function bind(program) {
	            this.uniforms.map(this.set.bind(this, program));
	        }
	    }, {
	        key: 'unbind',
	        value: function unbind() {}
	    }, {
	        key: 'set',
	        value: function set(program, uniform) {
	            uniform.set(program, this[uniform.uniform]);
	        }
	    }, {
	        key: 'path',
	        get: function get() {
	            return this._path;
	        },
	        set: function set(path) {
	            this._path = path;
	        }
	    }, {
	        key: 'uniforms',
	        get: function get() {
	            return this._uniforms;
	        },
	        set: function set(uniforms) {
	            this._uniforms = uniforms.map(this.instantiate.bind(this));
	        }
	    }]);

	    return Structure;
	}(_Entity3.default);

	exports.default = Structure;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Context = __webpack_require__(13);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var formats = {
	    i: '1i',
	    ivec2: '2iv',
	    ivec3: '3iv',
	    ivec4: '4iv',
	    f: '1f',
	    vec2: '2fv',
	    vec3: '3fv',
	    vec4: '4fv',
	    mat2: 'Matrix2fv',
	    mat3: 'Matrix3fv',
	    mat4: 'Matrix4fv',
	    sampler: '1i'
	};

	var Uniform = function (_Entity) {
	    _inherits(Uniform, _Entity);

	    function Uniform() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var uniform = _ref.uniform;
	        var format = _ref.format;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'uniform' : _ref$name;
	        var _ref$path = _ref.path;
	        var path = _ref$path === undefined ? undefined : _ref$path;

	        _classCallCheck(this, Uniform);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Uniform).call(this, { name: name }));

	        _this.path = path;

	        _this.uniform = uniform;

	        _this.location = undefined;

	        _this.format = format;

	        _this.method = format;

	        _this.inheritance = ['Entity', 'Uniform'];
	        return _this;
	    }

	    _createClass(Uniform, [{
	        key: 'locate',
	        value: function locate(program) {
	            var path = this.path;
	            var uniform = this.uniform;

	            if (this.format !== 'sampler' && path !== undefined) {
	                uniform = [path, uniform].join('.');
	            }

	            return this.location = _Context.gl.getUniformLocation(program.buffer, 'u_' + uniform);
	        }
	    }, {
	        key: 'set',
	        value: function set(program, value) {
	            var location = this.locate(program);
	            var method = this.method;

	            if (method.match('Matrix') !== null) {
	                _Context.gl[method](location, false, value);
	            } else {
	                if (typeof value === 'boolean') {
	                    value = ~ ~value;
	                }

	                _Context.gl[method](location, value);
	            }
	        }
	    }, {
	        key: 'path',
	        get: function get() {
	            return this._path;
	        },
	        set: function set(path) {
	            this._path = path;
	        }
	    }, {
	        key: 'uniform',
	        get: function get() {
	            return this._uniform;
	        },
	        set: function set(uniform) {
	            this._uniform = uniform;
	        }
	    }, {
	        key: 'location',
	        get: function get() {
	            return this._location;
	        },
	        set: function set(location) {
	            this._location = location;
	        }
	    }, {
	        key: 'format',
	        get: function get() {
	            return this._format;
	        },
	        set: function set(format) {
	            this._format = format;
	        }
	    }, {
	        key: 'method',
	        get: function get() {
	            return this._method;
	        },
	        set: function set(format) {
	            this._method = 'uniform' + formats[format];
	        }
	    }]);

	    return Uniform;
	}(_Entity3.default);

	exports.default = Uniform;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Context = __webpack_require__(13);

	var _glMatrix = __webpack_require__(1);

	var _Camera2 = __webpack_require__(14);

	var _Camera3 = _interopRequireDefault(_Camera2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OrthographicCamera = function (_Camera) {
	    _inherits(OrthographicCamera, _Camera);

	    function OrthographicCamera() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var path = _ref.path;
	        var uniforms = _ref.uniforms;
	        var background = _ref.background;
	        var translucence = _ref.translucence;
	        var right = _ref.right;
	        var top = _ref.top;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'orthographic.camera' : _ref$name;
	        var _ref$left = _ref.left;
	        var left = _ref$left === undefined ? -1 : _ref$left;
	        var _ref$bottom = _ref.bottom;
	        var bottom = _ref$bottom === undefined ? -1 : _ref$bottom;
	        var _ref$near = _ref.near;
	        var near = _ref$near === undefined ? 0.1 : _ref$near;
	        var _ref$far = _ref.far;
	        var far = _ref$far === undefined ? 1 : _ref$far;

	        _classCallCheck(this, OrthographicCamera);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OrthographicCamera).call(this, { name: name, path: path, uniforms: uniforms, background: background, translucence: translucence }));

	        _this.left = left;

	        _this.right = right;

	        _this.bottom = bottom;

	        _this.top = top;

	        _this.near = near;

	        _this.far = far;

	        _this.inheritance = ['Entity', 'Structure', 'Camera', 'OrthographicCamera'];

	        _this.configure();
	        return _this;
	    }

	    _createClass(OrthographicCamera, [{
	        key: 'configure',
	        value: function configure() {
	            _get(Object.getPrototypeOf(OrthographicCamera.prototype), 'configure', this).call(this);

	            _glMatrix.mat4.ortho(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
	            _glMatrix.mat4.identity(this.modelViewMatrix);
	        }
	    }, {
	        key: 'bind',
	        value: function bind(program) {
	            _get(Object.getPrototypeOf(OrthographicCamera.prototype), 'bind', this).call(this, program);

	            _Context.gl.disable(_Context.gl.DEPTH_TEST);
	            _Context.gl.viewport(0, 0, this.right, this.top);
	        }
	    }, {
	        key: 'left',
	        get: function get() {
	            return this._left;
	        },
	        set: function set(left) {
	            this._left = left;
	        }
	    }, {
	        key: 'right',
	        get: function get() {
	            return this._right;
	        },
	        set: function set(right) {
	            this._right = right;
	        }
	    }, {
	        key: 'bottom',
	        get: function get() {
	            return this._bottom;
	        },
	        set: function set(bottom) {
	            this._bottom = bottom;
	        }
	    }, {
	        key: 'top',
	        get: function get() {
	            return this._top;
	        },
	        set: function set(top) {
	            this._top = top;
	        }
	    }, {
	        key: 'near',
	        get: function get() {
	            return this._near;
	        },
	        set: function set(near) {
	            this._near = near;
	        }
	    }, {
	        key: 'far',
	        get: function get() {
	            return this._far;
	        },
	        set: function set(far) {
	            this._far = far;
	        }
	    }]);

	    return OrthographicCamera;
	}(_Camera3.default);

	exports.default = OrthographicCamera;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Context = __webpack_require__(13);

	var _glMatrix = __webpack_require__(1);

	var _Camera2 = __webpack_require__(14);

	var _Camera3 = _interopRequireDefault(_Camera2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PerspectiveCamera = function (_Camera) {
	    _inherits(PerspectiveCamera, _Camera);

	    function PerspectiveCamera() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var path = _ref.path;
	        var uniforms = _ref.uniforms;
	        var background = _ref.background;
	        var translucence = _ref.translucence;
	        var width = _ref.width;
	        var height = _ref.height;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'perspective.camera' : _ref$name;
	        var _ref$fov = _ref.fov;
	        var fov = _ref$fov === undefined ? 45 : _ref$fov;
	        var _ref$near = _ref.near;
	        var near = _ref$near === undefined ? 0.1 : _ref$near;
	        var _ref$far = _ref.far;
	        var far = _ref$far === undefined ? 1000 : _ref$far;
	        var _ref$direction = _ref.direction;
	        var direction = _ref$direction === undefined ? _glMatrix.vec3.fromValues(0, 0, 0) : _ref$direction;
	        var _ref$location = _ref.location;
	        var location = _ref$location === undefined ? _glMatrix.vec3.fromValues(10, 10, -10) : _ref$location;
	        var _ref$up = _ref.up;
	        var up = _ref$up === undefined ? _glMatrix.vec3.fromValues(0, 1, 0) : _ref$up;

	        _classCallCheck(this, PerspectiveCamera);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PerspectiveCamera).call(this, { name: name, path: path, uniforms: uniforms, background: background, translucence: translucence }));

	        _this.width = width;

	        _this.height = height;

	        _this.fov = fov;

	        _this.ratio = width / height;

	        _this.near = near;

	        _this.far = far;

	        _this.direction = direction;

	        _this.location = location;

	        _this.up = up;

	        _this.inheritance = ['Entity', 'Structure', 'Camera', 'PerspectiveCamera'];

	        _this.configure();
	        return _this;
	    }

	    _createClass(PerspectiveCamera, [{
	        key: 'configure',
	        value: function configure() {
	            _get(Object.getPrototypeOf(PerspectiveCamera.prototype), 'configure', this).call(this);

	            var modelViewMatrix = this.modelViewMatrix;

	            _Context.gl.clearDepth(1);
	            _Context.gl.depthFunc(_Context.gl.LEQUAL);

	            _glMatrix.mat4.perspective(this.projectionMatrix, this.fov, this.ratio, this.near, this.far);
	            _glMatrix.mat4.identity(modelViewMatrix);
	            _glMatrix.mat4.lookAt(modelViewMatrix, this.location, this.direction, this.up);
	        }
	    }, {
	        key: 'bind',
	        value: function bind(program) {
	            _get(Object.getPrototypeOf(PerspectiveCamera.prototype), 'bind', this).call(this, program);

	            _Context.gl.enable(_Context.gl.DEPTH_TEST);
	            _Context.gl.viewport(0, 0, this.width, this.height);
	        }
	    }, {
	        key: 'width',
	        get: function get() {
	            return this._width;
	        },
	        set: function set(width) {
	            this._width = width;
	        }
	    }, {
	        key: 'height',
	        get: function get() {
	            return this._height;
	        },
	        set: function set(height) {
	            this._height = height;
	        }
	    }, {
	        key: 'fov',
	        get: function get() {
	            return this._fov;
	        },
	        set: function set(fov) {
	            this._fov = fov;
	        }
	    }, {
	        key: 'ratio',
	        get: function get() {
	            return this._ratio;
	        },
	        set: function set(ratio) {
	            this._ratio = ratio;
	        }
	    }, {
	        key: 'near',
	        get: function get() {
	            return this._near;
	        },
	        set: function set(near) {
	            this._near = near;
	        }
	    }, {
	        key: 'far',
	        get: function get() {
	            return this._far;
	        },
	        set: function set(far) {
	            this._far = far;
	        }
	    }, {
	        key: 'direction',
	        get: function get() {
	            return this._direction;
	        },
	        set: function set(direction) {
	            this._direction = direction;
	        }
	    }, {
	        key: 'location',
	        get: function get() {
	            return this._location;
	        },
	        set: function set(location) {
	            this._location = location;
	        }
	    }, {
	        key: 'up',
	        get: function get() {
	            return this._up;
	        },
	        set: function set(up) {
	            this._up = up;
	        }
	    }]);

	    return PerspectiveCamera;
	}(_Camera3.default);

	exports.default = PerspectiveCamera;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Context = __webpack_require__(13);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Framebuffer = function (_Entity) {
	    _inherits(Framebuffer, _Entity);

	    function Framebuffer() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'framebuffer' : _ref$name;
	        var _ref$flushable = _ref.flushable;
	        var flushable = _ref$flushable === undefined ? true : _ref$flushable;

	        _classCallCheck(this, Framebuffer);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Framebuffer).call(this, { name: name }));

	        _this.buffer = null;

	        _this.flushable = flushable;

	        _this.inheritance = ['Entity', 'Framebuffer'];
	        return _this;
	    }

	    _createClass(Framebuffer, [{
	        key: 'bind',
	        value: function bind() {
	            var flush = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	            _Context.gl.bindFramebuffer(_Context.gl.FRAMEBUFFER, this.buffer);

	            if (this.flushable && flush) {
	                this.flush();
	            }
	        }
	    }, {
	        key: 'unbind',
	        value: function unbind() {
	            _Context.gl.bindFramebuffer(_Context.gl.FRAMEBUFFER, null);
	        }
	    }, {
	        key: 'flush',
	        value: function flush() {
	            _Context.gl.clear(_Context.gl.COLOR_BUFFER_BIT | _Context.gl.DEPTH_BUFFER_BIT);
	        }
	    }, {
	        key: 'check',
	        value: function check() {
	            var status = _Context.gl.checkFramebufferStatus(_Context.gl.FRAMEBUFFER);
	            var error = false;

	            switch (status) {
	                case _Context.gl.FRAMEBUFFER_UNSUPPORTED:
	                    error = 'FRAMEBUFFER_UNSUPPORTED';
	                    break;

	                case _Context.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
	                    error = 'FRAMEBUFFER_INCOMPLETE_ATTACHMENT';
	                    break;

	                case _Context.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
	                    error = 'FRAMEBUFFER_INCOMPLETE_DIMENSIONS';
	                    break;

	                case _Context.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
	                    error = 'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT';
	                    break;
	            }

	            if (error) {
	                _Context.gl.deleteFramebuffer(this.buffer);

	                throw new Error(error);
	            }

	            return true;
	        }
	    }, {
	        key: 'buffer',
	        get: function get() {
	            return this._buffer;
	        },
	        set: function set(buffer) {
	            this._buffer = buffer;
	        }
	    }, {
	        key: 'flushable',
	        get: function get() {
	            return this._flushable;
	        },
	        set: function set(flushable) {
	            this._flushable = flushable;
	        }
	    }]);

	    return Framebuffer;
	}(_Entity3.default);

	exports.default = Framebuffer;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Context = __webpack_require__(13);

	var _Framebuffer2 = __webpack_require__(20);

	var _Framebuffer3 = _interopRequireDefault(_Framebuffer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DeferredFramebuffer = function (_Framebuffer) {
	    _inherits(DeferredFramebuffer, _Framebuffer);

	    function DeferredFramebuffer() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var colorAttachment = _ref.colorAttachment;
	        var depthAttachment = _ref.depthAttachment;
	        var flushable = _ref.flushable;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'deferred.framebuffer' : _ref$name;

	        _classCallCheck(this, DeferredFramebuffer);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DeferredFramebuffer).call(this, { name: name, flushable: flushable }));

	        _this.buffer = _Context.gl.createFramebuffer();

	        _this.colorAttachment = colorAttachment;

	        _this.depthAttachment = depthAttachment;

	        _this.inheritance = ['Entity', 'Framebuffer', 'DeferredFramebuffer'];

	        _this.configure();
	        return _this;
	    }

	    _createClass(DeferredFramebuffer, [{
	        key: 'configure',
	        value: function configure() {
	            this.bind(false);

	            _Context.gl.framebufferTexture2D(_Context.gl.FRAMEBUFFER, _Context.gl.COLOR_ATTACHMENT0, _Context.gl.TEXTURE_2D, this.colorAttachment.buffer, 0);
	            _Context.gl.framebufferRenderbuffer(_Context.gl.FRAMEBUFFER, _Context.gl.DEPTH_ATTACHMENT, _Context.gl.RENDERBUFFER, this.depthAttachment.buffer);

	            this.check();
	            this.unbind();
	        }
	    }, {
	        key: 'buffer',
	        get: function get() {
	            return this._buffer;
	        },
	        set: function set(buffer) {
	            this._buffer = buffer;
	        }
	    }, {
	        key: 'colorAttachment',
	        get: function get() {
	            return this._colorAttachment;
	        },
	        set: function set(colorAttachment) {
	            this._colorAttachment = colorAttachment;
	        }
	    }, {
	        key: 'depthAttachment',
	        get: function get() {
	            return this._depthAttachment;
	        },
	        set: function set(depthAttachment) {
	            this._depthAttachment = depthAttachment;
	        }
	    }]);

	    return DeferredFramebuffer;
	}(_Framebuffer3.default);

	exports.default = DeferredFramebuffer;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Context = __webpack_require__(13);

	var _Framebuffer2 = __webpack_require__(20);

	var _Framebuffer3 = _interopRequireDefault(_Framebuffer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DepthFramebuffer = function (_Framebuffer) {
	    _inherits(DepthFramebuffer, _Framebuffer);

	    function DepthFramebuffer() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var colorAttachment = _ref.colorAttachment;
	        var depthAttachment = _ref.depthAttachment;
	        var flushable = _ref.flushable;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'depth.framebuffer' : _ref$name;

	        _classCallCheck(this, DepthFramebuffer);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DepthFramebuffer).call(this, { name: name, flushable: flushable }));

	        _this.buffer = _Context.gl.createFramebuffer();

	        _this.colorAttachment = colorAttachment;

	        _this.depthAttachment = depthAttachment;

	        _this.inheritance = ['Entity', 'Framebuffer', 'DepthFramebuffer'];

	        _this.configure();
	        return _this;
	    }

	    _createClass(DepthFramebuffer, [{
	        key: 'configure',
	        value: function configure() {
	            this.bind(false);

	            _Context.gl.framebufferTexture2D(_Context.gl.FRAMEBUFFER, _Context.gl.COLOR_ATTACHMENT0, _Context.gl.TEXTURE_2D, this.colorAttachment.buffer, 0);
	            _Context.gl.framebufferTexture2D(_Context.gl.FRAMEBUFFER, _Context.gl.DEPTH_ATTACHMENT, _Context.gl.TEXTURE_2D, this.depthAttachment.buffer, 0);

	            this.check();
	            this.unbind();
	        }
	    }, {
	        key: 'buffer',
	        get: function get() {
	            return this._buffer;
	        },
	        set: function set(buffer) {
	            this._buffer = buffer;
	        }
	    }, {
	        key: 'colorAttachment',
	        get: function get() {
	            return this._colorAttachment;
	        },
	        set: function set(colorAttachment) {
	            this._colorAttachment = colorAttachment;
	        }
	    }, {
	        key: 'depthAttachment',
	        get: function get() {
	            return this._depthAttachment;
	        },
	        set: function set(depthAttachment) {
	            this._depthAttachment = depthAttachment;
	        }
	    }]);

	    return DepthFramebuffer;
	}(_Framebuffer3.default);

	exports.default = DepthFramebuffer;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _glMatrix = __webpack_require__(1);

	var _LSL = __webpack_require__(15);

	var _LSL2 = _interopRequireDefault(_LSL);

	var _Structure2 = __webpack_require__(16);

	var _Structure3 = _interopRequireDefault(_Structure2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Light = function (_Structure) {
	    _inherits(Light, _Structure);

	    function Light() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'light' : _ref$name;
	        var _ref$path = _ref.path;
	        var path = _ref$path === undefined ? 'light' : _ref$path;
	        var _ref$uniforms = _ref.uniforms;
	        var uniforms = _ref$uniforms === undefined ? ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location', 'i type'] : _ref$uniforms;
	        var _ref$ambient = _ref.ambient;
	        var ambient = _ref$ambient === undefined ? 0x000000 : _ref$ambient;
	        var _ref$diffuse = _ref.diffuse;
	        var diffuse = _ref$diffuse === undefined ? 0xFFFFFF : _ref$diffuse;
	        var _ref$specular = _ref.specular;
	        var specular = _ref$specular === undefined ? 0xFFFFFF : _ref$specular;
	        var _ref$intensity = _ref.intensity;
	        var intensity = _ref$intensity === undefined ? 1 : _ref$intensity;
	        var _ref$location = _ref.location;
	        var location = _ref$location === undefined ? _glMatrix.vec3.fromValues(-10, 10, -10) : _ref$location;

	        _classCallCheck(this, Light);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Light).call(this, { name: name, path: path, uniforms: uniforms }));

	        _this.ambient = ambient;

	        _this.diffuse = diffuse;

	        _this.specular = specular;

	        _this.intensity = intensity;

	        _this.location = location;

	        _this.type = 0;

	        _this.inheritance = ['Entity', 'Structure', 'Light'];
	        return _this;
	    }

	    _createClass(Light, [{
	        key: 'ambient',
	        get: function get() {
	            return this._ambient;
	        },
	        set: function set(ambient) {
	            this._ambient = (0, _LSL2.default)(ambient);
	        }
	    }, {
	        key: 'diffuse',
	        get: function get() {
	            return this._diffuse;
	        },
	        set: function set(diffuse) {
	            this._diffuse = (0, _LSL2.default)(diffuse);
	        }
	    }, {
	        key: 'specular',
	        get: function get() {
	            return this._specular;
	        },
	        set: function set(specular) {
	            this._specular = (0, _LSL2.default)(specular);
	        }
	    }, {
	        key: 'intensity',
	        get: function get() {
	            return this._intensity;
	        },
	        set: function set(intensity) {
	            this._intensity = intensity;
	        }
	    }, {
	        key: 'location',
	        get: function get() {
	            return this._location;
	        },
	        set: function set(location) {
	            this._location = location;
	        }
	    }, {
	        key: 'type',
	        get: function get() {
	            return this._type;
	        },
	        set: function set(type) {
	            this._type = type;
	        }
	    }]);

	    return Light;
	}(_Structure3.default);

	exports.default = Light;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Light2 = __webpack_require__(23);

	var _Light3 = _interopRequireDefault(_Light2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PointLight = function (_Light) {
	    _inherits(PointLight, _Light);

	    function PointLight() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var path = _ref.path;
	        var ambient = _ref.ambient;
	        var diffuse = _ref.diffuse;
	        var specular = _ref.specular;
	        var location = _ref.location;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'point.light' : _ref$name;
	        var _ref$uniforms = _ref.uniforms;
	        var uniforms = _ref$uniforms === undefined ? ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f radius', 'f intensity', 'vec3 location', 'i type'] : _ref$uniforms;
	        var _ref$radius = _ref.radius;
	        var radius = _ref$radius === undefined ? 10 : _ref$radius;
	        var _ref$intensity = _ref.intensity;
	        var intensity = _ref$intensity === undefined ? 10 : _ref$intensity;

	        _classCallCheck(this, PointLight);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PointLight).call(this, { name: name, path: path, uniforms: uniforms, ambient: ambient, diffuse: diffuse, specular: specular, intensity: intensity, location: location }));

	        _this.radius = radius;

	        _this.type = 2;

	        _this.inheritance = ['Entity', 'Structure', 'Light', 'PointLight'];
	        return _this;
	    }

	    _createClass(PointLight, [{
	        key: 'radius',
	        get: function get() {
	            return this._radius;
	        },
	        set: function set(radius) {
	            this._radius = radius;
	        }
	    }]);

	    return PointLight;
	}(_Light3.default);

	exports.default = PointLight;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _LSL = __webpack_require__(15);

	var _LSL2 = _interopRequireDefault(_LSL);

	var _Structure2 = __webpack_require__(16);

	var _Structure3 = _interopRequireDefault(_Structure2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var shades = { flat: 1, smooth: 0 };

	var Material = function (_Structure) {
	    _inherits(Material, _Structure);

	    function Material() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'material' : _ref$name;
	        var _ref$path = _ref.path;
	        var path = _ref$path === undefined ? 'material' : _ref$path;
	        var _ref$uniforms = _ref.uniforms;
	        var uniforms = _ref$uniforms === undefined ? ['sampler image', 'vec3 ambient', 'vec3 diffuse', 'i shading', 'i type'] : _ref$uniforms;
	        var _ref$pattern = _ref.pattern;
	        var pattern = _ref$pattern === undefined ? {} : _ref$pattern;
	        var _ref$ambient = _ref.ambient;
	        var ambient = _ref$ambient === undefined ? 0xFFFFFF : _ref$ambient;
	        var _ref$diffuse = _ref.diffuse;
	        var diffuse = _ref$diffuse === undefined ? 0xFFFFFF : _ref$diffuse;
	        var _ref$shading = _ref.shading;
	        var shading = _ref$shading === undefined ? 'smooth' : _ref$shading;

	        _classCallCheck(this, Material);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Material).call(this, { name: name, path: path, uniforms: uniforms }));

	        _this.ambient = ambient;

	        _this.diffuse = diffuse;

	        _this.image = pattern.unit;

	        _this.shading = shades[shading];

	        _this.pattern = pattern;

	        _this.type = 0;

	        _this.inheritance = ['Entity', 'Structure', 'Material'];
	        return _this;
	    }

	    _createClass(Material, [{
	        key: 'bind',
	        value: function bind(program) {
	            _get(Object.getPrototypeOf(Material.prototype), 'bind', this).call(this, program);

	            if (this.image !== undefined) {
	                this.pattern.bind();
	            }
	        }
	    }, {
	        key: 'unbind',
	        value: function unbind() {
	            _get(Object.getPrototypeOf(Material.prototype), 'unbind', this).call(this);

	            if (this.image !== undefined) {
	                this.pattern.unbind();
	            }
	        }
	    }, {
	        key: 'ambient',
	        get: function get() {
	            return this._ambient;
	        },
	        set: function set(ambient) {
	            this._ambient = (0, _LSL2.default)(ambient);
	        }
	    }, {
	        key: 'diffuse',
	        get: function get() {
	            return this._diffuse;
	        },
	        set: function set(diffuse) {
	            this._diffuse = (0, _LSL2.default)(diffuse);
	        }
	    }, {
	        key: 'image',
	        get: function get() {
	            return this._image;
	        },
	        set: function set(image) {
	            this._image = image;
	        }
	    }, {
	        key: 'shading',
	        get: function get() {
	            return this._shading;
	        },
	        set: function set(shading) {
	            this._shading = shades[shading];
	        }
	    }, {
	        key: 'pattern',
	        get: function get() {
	            return this._pattern;
	        },
	        set: function set(pattern) {
	            this._pattern = pattern;
	        }
	    }, {
	        key: 'type',
	        get: function get() {
	            return this._type;
	        },
	        set: function set(type) {
	            this._type = type;
	        }
	    }]);

	    return Material;
	}(_Structure3.default);

	exports.default = Material;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _LSL = __webpack_require__(15);

	var _LSL2 = _interopRequireDefault(_LSL);

	var _Material2 = __webpack_require__(25);

	var _Material3 = _interopRequireDefault(_Material2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PhongMaterial = function (_Material) {
	    _inherits(PhongMaterial, _Material);

	    function PhongMaterial() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var path = _ref.path;
	        var pattern = _ref.pattern;
	        var ambient = _ref.ambient;
	        var diffuse = _ref.diffuse;
	        var shading = _ref.shading;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'phong.material' : _ref$name;
	        var _ref$uniforms = _ref.uniforms;
	        var uniforms = _ref$uniforms === undefined ? ['sampler image', 'vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f shininess', 'i shading', 'i type'] : _ref$uniforms;
	        var _ref$specular = _ref.specular;
	        var specular = _ref$specular === undefined ? 0xFFFFFF : _ref$specular;
	        var _ref$shininess = _ref.shininess;
	        var shininess = _ref$shininess === undefined ? 1 : _ref$shininess;

	        _classCallCheck(this, PhongMaterial);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PhongMaterial).call(this, { name: name, path: path, uniforms: uniforms, pattern: pattern, ambient: ambient, diffuse: diffuse, shading: shading }));

	        _this.specular = specular;

	        _this.shininess = shininess;

	        _this.type = 1;

	        _this.inheritance = ['Entity', 'Structure', 'Material', 'PhongMaterial'];
	        return _this;
	    }

	    _createClass(PhongMaterial, [{
	        key: 'specular',
	        get: function get() {
	            return this._specular;
	        },
	        set: function set(specular) {
	            this._specular = (0, _LSL2.default)(specular);
	        }
	    }, {
	        key: 'shininess',
	        get: function get() {
	            return this._shininess;
	        },
	        set: function set(shininess) {
	            this._shininess = shininess;
	        }
	    }]);

	    return PhongMaterial;
	}(_Material3.default);

	exports.default = PhongMaterial;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _glMatrix = __webpack_require__(1);

	var _Context = __webpack_require__(13);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	var _VertexArrayObject = __webpack_require__(28);

	var _VertexArrayObject2 = _interopRequireDefault(_VertexArrayObject);

	var _Material = __webpack_require__(25);

	var _Material2 = _interopRequireDefault(_Material);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var attributes = {
	    vertices: 'position',
	    colors: 'color',
	    uvs: 'uv',
	    normals: 'normal'
	};

	var Mesh = function (_Entity) {
	    _inherits(Mesh, _Entity);

	    function Mesh() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var buffers = _ref.buffers;
	        var loader = _ref.loader;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'mesh' : _ref$name;
	        var _ref$vertices = _ref.vertices;
	        var vertices = _ref$vertices === undefined ? [] : _ref$vertices;
	        var _ref$colors = _ref.colors;
	        var colors = _ref$colors === undefined ? [] : _ref$colors;
	        var _ref$uvs = _ref.uvs;
	        var uvs = _ref$uvs === undefined ? [] : _ref$uvs;
	        var _ref$normals = _ref.normals;
	        var normals = _ref$normals === undefined ? [] : _ref$normals;
	        var _ref$indices = _ref.indices;
	        var indices = _ref$indices === undefined ? [] : _ref$indices;
	        var _ref$usage = _ref.usage;
	        var usage = _ref$usage === undefined ? 'STATIC_DRAW' : _ref$usage;
	        var _ref$primitive = _ref.primitive;
	        var primitive = _ref$primitive === undefined ? 'TRIANGLES' : _ref$primitive;
	        var _ref$material = _ref.material;
	        var material = _ref$material === undefined ? new _Material2.default() : _ref$material;

	        _classCallCheck(this, Mesh);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Mesh).call(this, { name: name }));

	        _this.buffers = buffers;

	        _this.vertices = vertices;

	        _this.colors = colors;

	        _this.uvs = uvs;

	        _this.normals = normals;

	        _this.indices = indices;

	        _this.usage = usage;

	        _this.primitive = primitive;

	        _this.material = material;

	        _this.scale = _glMatrix.vec3.fromValues(1, 1, 1);

	        _this.rotation = 0;

	        _this.translation = _glMatrix.vec3.create();

	        _this.inheritance = ['Entity', 'Mesh'];

	        _this.unpack(loader);
	        _this.generate();
	        _this.configure();
	        return _this;
	    }

	    _createClass(Mesh, [{
	        key: 'unpack',
	        value: function unpack(loader) {
	            if (loader !== undefined) {
	                this.vertices = loader.vertices;
	                this.colors = loader.colors;
	                this.uvs = loader.uvs;
	                this.normals = loader.normals;
	                this.indices = loader.indices;
	            }
	        }
	    }, {
	        key: 'generate',
	        value: function generate() {
	            if (this.buffers === undefined) {
	                var generated = [];
	                var indexed = Boolean(this.indices.length);

	                for (var name in attributes) {
	                    var coordinates = this[name];

	                    if (Boolean(coordinates.length)) {
	                        generated.push('vec' + coordinates[0].length + ' ' + attributes[name]);
	                    }
	                }

	                this.buffers = new _VertexArrayObject2.default({ attributes: generated, indexed: indexed });
	            }
	        }
	    }, {
	        key: 'configure',
	        value: function configure() {
	            var buffers = this.buffers;
	            var usage = this.usage;
	            var interleaved = [];
	            var vertices = this.vertices;

	            vertices.map(this.interleave.bind(this, interleaved));

	            buffers.bind();

	            _Context.gl.bufferData(_Context.gl.ARRAY_BUFFER, new buffers.view(interleaved), usage);

	            if (buffers.indexed) {
	                var indices = this.indices;

	                _Context.gl.bufferData(_Context.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), usage);

	                this.count = indices.length;
	            } else {
	                this.count = vertices.length;
	            }

	            buffers.unbind();
	        }
	    }, {
	        key: 'interleave',
	        value: function interleave(interleaved, vertex, index) {
	            var color = this.colors[index] || [];
	            var uv = this.uvs[index] || [];
	            var normal = this.normals[index] || [];
	            var contatenation = [].concat(vertex, color, uv, normal);

	            [].push.apply(interleaved, contatenation.map(parseFloat));
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            var vertices = arguments.length <= 0 || arguments[0] === undefined ? this.vertices : arguments[0];

	            if (this.usage === _Context.gl.DYNAMIC_DRAW) {
	                var buffers = this.buffers;
	                var interleaved = [];

	                vertices.map(this.interleave.bind(this, interleaved));

	                buffers.bind();

	                _Context.gl.bufferSubData(_Context.gl.ARRAY_BUFFER, 0, new buffers.view(interleaved));

	                buffers.unbind();
	            } else {
	                console.warn('Unable to update Mesh::' + this.name + ' vertices, not DYNAMIC_*');
	            }
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {
	            var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            var program = _ref2.program;
	            var _ref2$primitive = _ref2.primitive;
	            var primitive = _ref2$primitive === undefined ? this.primitive : _ref2$primitive;
	            var _ref2$offset = _ref2.offset;
	            var offset = _ref2$offset === undefined ? 0 : _ref2$offset;
	            var _ref2$count = _ref2.count;
	            var count = _ref2$count === undefined ? this.count : _ref2$count;

	            var buffers = this.buffers;

	            buffers.bind(program);

	            if (buffers.indexed) {
	                _Context.gl.drawElements(primitive, count, _Context.gl.UNSIGNED_SHORT, offset);
	            } else {
	                _Context.gl.drawArrays(primitive, offset, count);
	            }

	            buffers.unbind();
	        }
	    }, {
	        key: 'buffers',
	        get: function get() {
	            return this._buffers;
	        },
	        set: function set(buffers) {
	            this._buffers = buffers;
	        }
	    }, {
	        key: 'vertices',
	        get: function get() {
	            return this._vertices;
	        },
	        set: function set(vertices) {
	            this._vertices = vertices;
	        }
	    }, {
	        key: 'colors',
	        get: function get() {
	            return this._colors;
	        },
	        set: function set(colors) {
	            this._colors = colors;
	        }
	    }, {
	        key: 'uvs',
	        get: function get() {
	            return this._uvs;
	        },
	        set: function set(uvs) {
	            this._uvs = uvs;
	        }
	    }, {
	        key: 'normals',
	        get: function get() {
	            return this._normals;
	        },
	        set: function set(normals) {
	            this._normals = normals;
	        }
	    }, {
	        key: 'indices',
	        get: function get() {
	            return this._indices;
	        },
	        set: function set(indices) {
	            this._indices = indices;
	        }
	    }, {
	        key: 'usage',
	        get: function get() {
	            return this._usage;
	        },
	        set: function set(usage) {
	            this._usage = _Context.gl[usage];
	        }
	    }, {
	        key: 'primitive',
	        get: function get() {
	            return this._primitive;
	        },
	        set: function set(primitive) {
	            this._primitive = _Context.gl[primitive];
	        }
	    }, {
	        key: 'material',
	        get: function get() {
	            return this._material;
	        },
	        set: function set(material) {
	            this._material = material;
	        }
	    }, {
	        key: 'scale',
	        get: function get() {
	            return this._scale;
	        },
	        set: function set(scale) {
	            this._scale = scale;
	        }
	    }, {
	        key: 'rotation',
	        get: function get() {
	            return this._rotation;
	        },
	        set: function set(rotation) {
	            this._rotation = rotation;
	        }
	    }, {
	        key: 'translation',
	        get: function get() {
	            return this._translation;
	        },
	        set: function set(translation) {
	            this._translation = translation;
	        }
	    }]);

	    return Mesh;
	}(_Entity3.default);

	exports.default = Mesh;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Context = __webpack_require__(13);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	var _Attribute = __webpack_require__(12);

	var _Attribute2 = _interopRequireDefault(_Attribute);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var lengths = {
	    i: 1,
	    f: 1,
	    vec2: 2,
	    vec3: 3,
	    vec4: 4
	};

	var VertexArrayObject = function (_Entity) {
	    _inherits(VertexArrayObject, _Entity);

	    function VertexArrayObject() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'vertex.array.object' : _ref$name;
	        var _ref$indexed = _ref.indexed;
	        var indexed = _ref$indexed === undefined ? false : _ref$indexed;
	        var _ref$view = _ref.view;
	        var view = _ref$view === undefined ? Float32Array : _ref$view;
	        var _ref$attributes = _ref.attributes;
	        var attributes = _ref$attributes === undefined ? [] : _ref$attributes;

	        _classCallCheck(this, VertexArrayObject);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VertexArrayObject).call(this, { name: name }));

	        _this.primary = _Context.gl.createBuffer();

	        _this.secondary = undefined;

	        _this.indexed = indexed;

	        _this.stride = 0;

	        _this.view = view;

	        _this.attributes = attributes;

	        _this.inheritance = ['Entity', 'VertexArrayObject'];

	        _this.configure();
	        return _this;
	    }

	    _createClass(VertexArrayObject, [{
	        key: 'configure',
	        value: function configure() {
	            if (this.indexed) {
	                this.secondary = _Context.gl.createBuffer();
	            }
	        }
	    }, {
	        key: 'generate',
	        value: function generate(qualifying) {
	            var offset = this.stride;
	            var vars = qualifying.split(' ');
	            var length = lengths[vars[0]];
	            var name = vars[1];
	            var attribute = new _Attribute2.default({ attribute: name, length: length, offset: offset });

	            this.stride += attribute.getByteCount(this.view.BYTES_PER_ELEMENT);

	            return attribute;
	        }
	    }, {
	        key: 'enable',
	        value: function enable(program, attribute) {
	            attribute.enable(program, this.stride);
	        }
	    }, {
	        key: 'disable',
	        value: function disable(attribute) {
	            attribute.disable();
	        }
	    }, {
	        key: 'bind',
	        value: function bind() {
	            var program = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	            _Context.gl.bindBuffer(_Context.gl.ARRAY_BUFFER, this.primary);

	            if (this.indexed) {
	                _Context.gl.bindBuffer(_Context.gl.ELEMENT_ARRAY_BUFFER, this.secondary);
	            }

	            if (program) {
	                this.attributes.map(this.enable.bind(this, program));
	            }
	        }
	    }, {
	        key: 'unbind',
	        value: function unbind() {
	            _Context.gl.bindBuffer(_Context.gl.ARRAY_BUFFER, null);

	            if (this.indexed) {
	                _Context.gl.bindBuffer(_Context.gl.ELEMENT_ARRAY_BUFFER, null);
	            }

	            this.attributes.map(this.disable);
	        }
	    }, {
	        key: 'primary',
	        get: function get() {
	            return this._primary;
	        },
	        set: function set(primary) {
	            this._primary = primary;
	        }
	    }, {
	        key: 'secondary',
	        get: function get() {
	            return this._secondary;
	        },
	        set: function set(secondary) {
	            this._secondary = secondary;
	        }
	    }, {
	        key: 'indexed',
	        get: function get() {
	            return this._indexed;
	        },
	        set: function set(indexed) {
	            this._indexed = indexed;
	        }
	    }, {
	        key: 'stride',
	        get: function get() {
	            return this._stride;
	        },
	        set: function set(stride) {
	            this._stride = stride;
	        }
	    }, {
	        key: 'view',
	        get: function get() {
	            return this._view;
	        },
	        set: function set(view) {
	            this._view = view;
	        }
	    }, {
	        key: 'attributes',
	        get: function get() {
	            return this._attributes;
	        },
	        set: function set(attributes) {
	            this._attributes = attributes.map(this.generate.bind(this));
	        }
	    }]);

	    return VertexArrayObject;
	}(_Entity3.default);

	exports.default = VertexArrayObject;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ajax = __webpack_require__(30);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MeshLoader = function (_Entity) {
	    _inherits(MeshLoader, _Entity);

	    function MeshLoader() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var path = _ref.path;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'mesh.loader' : _ref$name;
	        var _ref$indexed = _ref.indexed;
	        var indexed = _ref$indexed === undefined ? false : _ref$indexed;

	        _classCallCheck(this, MeshLoader);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MeshLoader).call(this, { name: name }));

	        _this.promise = _this.fetch(path);

	        _this.vertices = [];

	        _this.colors = [];

	        _this.uvs = [];

	        _this.normals = [];

	        _this.tmp = {
	            vertices: [],
	            colors: [],
	            uvs: [],
	            normals: []
	        };

	        _this.indices = [];

	        _this.indexed = indexed;

	        _this.inheritance = ['Entity', 'MeshLoader'];
	        return _this;
	    }

	    _createClass(MeshLoader, [{
	        key: 'fetch',
	        value: function fetch(path) {
	            return (0, _ajax2.default)(path).then(this.parse.bind(this)).then(this.flush.bind(this));
	        }
	    }, {
	        key: 'flush',
	        value: function flush() {
	            delete this.tmp;
	        }
	    }, {
	        key: 'promise',
	        get: function get() {
	            return this._promise;
	        },
	        set: function set(promise) {
	            this._promise = promise;
	        }
	    }, {
	        key: 'vertices',
	        get: function get() {
	            return this._vertices;
	        },
	        set: function set(vertices) {
	            this._vertices = vertices;
	        }
	    }, {
	        key: 'colors',
	        get: function get() {
	            return this._colors;
	        },
	        set: function set(colors) {
	            this._colors = colors;
	        }
	    }, {
	        key: 'uvs',
	        get: function get() {
	            return this._uvs;
	        },
	        set: function set(uvs) {
	            this._uvs = uvs;
	        }
	    }, {
	        key: 'normals',
	        get: function get() {
	            return this._normals;
	        },
	        set: function set(normals) {
	            this._normals = normals;
	        }
	    }, {
	        key: 'indices',
	        get: function get() {
	            return this._indices;
	        },
	        set: function set(indices) {
	            this._indices = indices;
	        }
	    }, {
	        key: 'indexed',
	        get: function get() {
	            return this._indexed;
	        },
	        set: function set(indexed) {
	            this._indexed = indexed;
	        }
	    }]);

	    return MeshLoader;
	}(_Entity3.default);

	exports.default = MeshLoader;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _promise = __webpack_require__(31);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ajax(url) {
	   var contentType = arguments.length <= 1 || arguments[1] === undefined ? 'text/plain' : arguments[1];

	   return (0, _promise2.default)(function (resolve, reject) {
	      var request = new XMLHttpRequest();

	      request.open('get', url);

	      request.onload = function () {
	         var status = request.status;

	         if (status === 200) {
	            resolve(request.response);
	         } else {
	            var _status = url + ': ' + request.statusText;
	            var error = new Error(_status);

	            reject(error);
	         }
	      };

	      request.setRequestHeader('contentType', contentType);

	      request.send();
	   });
	}

	exports.default = ajax;

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	function promise() {
	   var handler = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	   if (handler === false) {
	      return Promise;
	   } else {
	      return new Promise(handler);
	   }
	}

	exports.default = promise;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _MeshLoader2 = __webpack_require__(29);

	var _MeshLoader3 = _interopRequireDefault(_MeshLoader2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OBJMeshLoader = function (_MeshLoader) {
	    _inherits(OBJMeshLoader, _MeshLoader);

	    function OBJMeshLoader() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var path = _ref.path;
	        var indexed = _ref.indexed;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'obj.mesh.loader' : _ref$name;

	        _classCallCheck(this, OBJMeshLoader);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OBJMeshLoader).call(this, { name: name, path: path, indexed: indexed }));

	        _this.inheritance = ['Entity', 'MeshLoader', 'OBJMeshLoader'];
	        return _this;
	    }

	    _createClass(OBJMeshLoader, [{
	        key: 'parse',
	        value: function parse(raw) {
	            raw.split('\n').map(this.categorise.bind(this));
	        }
	    }, {
	        key: 'categorise',
	        value: function categorise(line) {
	            var words = line.split(' ');
	            var type = words.shift();
	            var tmp = this.tmp;

	            switch (type) {
	                case 'v':
	                    tmp.vertices.push(words.map(parseFloat));
	                    break;

	                case 'vt':
	                    tmp.uvs.push(words.map(parseFloat));
	                    break;

	                case 'vn':
	                    tmp.normals.push(words.map(parseFloat));
	                    break;

	                case 'f':
	                    words.map(this.fork.bind(this));
	                    break;
	            }
	        }
	    }, {
	        key: 'fork',
	        value: function fork(word) {
	            var indices = word.split('/').map(function (value) {
	                return value - 1;
	            });

	            if (this.indexed) {
	                this.keep(indices);
	            } else {
	                this.recategorise(indices);
	            }
	        }
	    }, {
	        key: 'keep',
	        value: function keep(indices) {
	            var tmp = this.tmp;
	            var index = indices[0];
	            var uv = indices[1];
	            var normal = indices[2];

	            if (~index) {
	                this.vertices[index] = tmp.vertices[index];

	                this.indices.push(index);
	            }

	            if (~uv) {
	                this.uvs[index] = tmp.uvs[uv];
	            }

	            if (~normal) {
	                this.normals[index] = tmp.normals[normal];
	            }
	        }
	    }, {
	        key: 'recategorise',
	        value: function recategorise(indices) {
	            var tmp = this.tmp;
	            var position = indices[0];
	            var uv = indices[1];
	            var normal = indices[2];

	            if (~position) {
	                this.vertices.push(tmp.vertices[position]);
	            }

	            if (~uv) {
	                this.uvs.push(tmp.uvs[uv]);
	            }

	            if (~normal) {
	                this.normals.push(tmp.normals[normal]);
	            }
	        }
	    }]);

	    return OBJMeshLoader;
	}(_MeshLoader3.default);

	exports.default = OBJMeshLoader;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Context = __webpack_require__(13);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	var _VertexShader = __webpack_require__(34);

	var _VertexShader2 = _interopRequireDefault(_VertexShader);

	var _FragmentShader = __webpack_require__(44);

	var _FragmentShader2 = _interopRequireDefault(_FragmentShader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Program = function (_Entity) {
	    _inherits(Program, _Entity);

	    function Program() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var selector = _ref.selector;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'program' : _ref$name;

	        _classCallCheck(this, Program);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Program).call(this, { name: name }));

	        _this.buffer = _Context.gl.createProgram();

	        _this.vertexShader = new _VertexShader2.default({ selector: selector });

	        _this.fragmentShader = new _FragmentShader2.default({ selector: selector });

	        _this.inheritance = ['Entity', 'Program'];

	        _this.link();
	        return _this;
	    }

	    _createClass(Program, [{
	        key: 'link',
	        value: function link() {
	            var buffer = this.buffer;

	            _Context.gl.attachShader(buffer, this.vertexShader.buffer);
	            _Context.gl.attachShader(buffer, this.fragmentShader.buffer);

	            _Context.gl.linkProgram(buffer);

	            this.check();
	        }
	    }, {
	        key: 'bind',
	        value: function bind() {
	            _Context.gl.useProgram(this.buffer);
	        }
	    }, {
	        key: 'check',
	        value: function check() {
	            var buffer = this.buffer;
	            var status = _Context.gl.getProgramParameter(buffer, _Context.gl.LINK_STATUS);
	            var context = _Context.gl.isContextLost();

	            if (!status && !context) {
	                var error = _Context.gl.getProgramInfoLog(buffer);

	                _Context.gl.deleteProgram(buffer);

	                throw new Error(error);
	            }

	            return true;
	        }
	    }, {
	        key: 'buffer',
	        get: function get() {
	            return this._buffer;
	        },
	        set: function set(buffer) {
	            this._buffer = buffer;
	        }
	    }, {
	        key: 'vertexShader',
	        get: function get() {
	            return this._vertexShader;
	        },
	        set: function set(vertexShader) {
	            this._vertexShader = vertexShader;
	        }
	    }, {
	        key: 'fragmentShader',
	        get: function get() {
	            return this._fragmentShader;
	        },
	        set: function set(fragmentShader) {
	            this._fragmentShader = fragmentShader;
	        }
	    }]);

	    return Program;
	}(_Entity3.default);

	exports.default = Program;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Shader2 = __webpack_require__(35);

	var _Shader3 = _interopRequireDefault(_Shader2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VertexShader = function (_Shader) {
	    _inherits(VertexShader, _Shader);

	    function VertexShader() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var selector = _ref.selector;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'vertex.shader' : _ref$name;

	        _classCallCheck(this, VertexShader);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VertexShader).call(this, { name: name, selector: selector + '[type="x-shader/x-vertex"]' }, 'VERTEX_SHADER'));

	        _this.inheritance = ['Entity', 'Shader', 'VertexShader'];
	        return _this;
	    }

	    return VertexShader;
	}(_Shader3.default);

	exports.default = VertexShader;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Context = __webpack_require__(13);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	var _shaders = __webpack_require__(36);

	var _shaders2 = _interopRequireDefault(_shaders);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Shader = function (_Entity) {
	    _inherits(Shader, _Entity);

	    function Shader() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var selector = _ref.selector;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'shader' : _ref$name;
	        var type = arguments[1];

	        _classCallCheck(this, Shader);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Shader).call(this, { name: name }));

	        _this.buffer = _Context.gl.createShader(_Context.gl[type]);

	        _this.inheritance = ['Entity', 'Shader'];

	        _this.compile(type, selector);
	        return _this;
	    }

	    _createClass(Shader, [{
	        key: 'generate',
	        value: function generate(type, selector) {
	            var source = document.querySelector(selector).textContent;

	            for (var tag in _shaders2.default) {
	                source = source.replace('@use ' + tag + ';', _shaders2.default[tag][type]);
	            }

	            return source;
	        }
	    }, {
	        key: 'compile',
	        value: function compile(type, selector) {
	            var buffer = this.buffer;
	            var source = this.generate(type, selector);

	            _Context.gl.shaderSource(buffer, source);
	            _Context.gl.compileShader(buffer);

	            this.check();
	        }
	    }, {
	        key: 'check',
	        value: function check() {
	            var buffer = this.buffer;
	            var status = _Context.gl.getShaderParameter(buffer, _Context.gl.COMPILE_STATUS);
	            var context = _Context.gl.isContextLost();

	            if (!status && !context) {
	                var error = _Context.gl.getShaderInfoLog(buffer);

	                _Context.gl.deleteShader(buffer);

	                throw new Error(error);
	            }

	            return true;
	        }
	    }, {
	        key: 'buffer',
	        get: function get() {
	            return this._buffer;
	        },
	        set: function set(buffer) {
	            this._buffer = buffer;
	        }
	    }]);

	    return Shader;
	}(_Entity3.default);

	exports.default = Shader;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _Camera = __webpack_require__(37);

	var _Camera2 = _interopRequireDefault(_Camera);

	var _Light = __webpack_require__(38);

	var _Light2 = _interopRequireDefault(_Light);

	var _DirectionalLight = __webpack_require__(39);

	var _DirectionalLight2 = _interopRequireDefault(_DirectionalLight);

	var _PointLight = __webpack_require__(40);

	var _PointLight2 = _interopRequireDefault(_PointLight);

	var _SpotLight = __webpack_require__(41);

	var _SpotLight2 = _interopRequireDefault(_SpotLight);

	var _Material = __webpack_require__(42);

	var _Material2 = _interopRequireDefault(_Material);

	var _ShadowMapper = __webpack_require__(43);

	var _ShadowMapper2 = _interopRequireDefault(_ShadowMapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var shaders = {
	   Camera: _Camera2.default,
	   Light: _Light2.default,
	   DirectionalLight: _DirectionalLight2.default,
	   PointLight: _PointLight2.default,
	   SpotLight: _SpotLight2.default,
	   Material: _Material2.default,
	   ShadowMapper: _ShadowMapper2.default
	};

	exports.default = shaders;

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	var VERTEX_SHADER = '\n   struct Camera\n   {\n      mat4 projectionMatrix;\n      mat4 modelViewMatrix;\n      mat3 normalMatrix;\n   };\n';

	var FRAGMENT_SHADER = '';

	exports.default = {
	   VERTEX_SHADER: VERTEX_SHADER,
	   FRAGMENT_SHADER: FRAGMENT_SHADER
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	var VERTEX_SHADER = '';

	var FRAGMENT_SHADER = '\n   struct Light\n   {\n      vec3 ambient;\n      vec3 diffuse;\n      vec3 specular;\n      float intensity;\n      vec3 location;\n      int type;\n   };\n\n   vec3 Light_main(Light light, Material material, vec4 position, vec3 normal)\n   {\n      vec3 direction = normalize(light.location - position.xyz);\n      float weight = max(dot(direction, normal), 0.0);\n      vec3 ambient = light.ambient * material.ambient;\n      vec3 diffuse = light.intensity * light.diffuse * material.diffuse * weight;\n      vec3 specular = vec3(0.0);\n\n      if (material.type == 1 && weight > 0.0)\n      {\n         specular = light.specular * material.specular * pow(max(dot(reflect(-direction, normal), normalize(-position.xyz)), 0.0), material.shininess);\n      }\n\n      return ambient + diffuse + specular;\n   }\n';

	exports.default = {
	   VERTEX_SHADER: VERTEX_SHADER,
	   FRAGMENT_SHADER: FRAGMENT_SHADER
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	var VERTEX_SHADER = '';

	var FRAGMENT_SHADER = '';

	exports.default = {
	   VERTEX_SHADER: VERTEX_SHADER,
	   FRAGMENT_SHADER: FRAGMENT_SHADER
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	var VERTEX_SHADER = '';

	var FRAGMENT_SHADER = '\n   struct PointLight\n   {\n      vec3 ambient;\n      vec3 diffuse;\n      vec3 specular;\n      float radius;\n      float intensity;\n      vec3 location;\n      int type;\n   };\n\n   vec3 PointLight_main(PointLight light, Material material, vec4 position, vec3 normal)\n   {\n      normal = normalize(normal);\n      vec3 pointToLight = light.location - position.xyz;\n      vec3 direction = normalize(pointToLight);\n      float weight = max(dot(normal, direction), 0.0);\n      vec3 ambient = light.ambient * material.ambient;\n      vec3 diffuse = light.diffuse * material.diffuse * weight;\n      vec3 specular = vec3(0.0);\n      float distanceFromLight = length(pointToLight);\n      float quadratic = pow(distanceFromLight / light.radius + 1.0, 2.0);\n      float attenuation = light.intensity / quadratic;\n\n      if (material.type == 1)\n      {\n         if (weight > 0.0)\n         {\n            vec3 eye = normalize(-position.xyz);\n            vec3 reflection = reflect(-direction, normal);\n            specular = light.specular * material.specular * pow(max(dot(reflection, eye), 0.0), material.shininess);\n         }\n      }\n\n      return ambient + (specular + diffuse) * attenuation;\n   }\n';

	exports.default = {
	   VERTEX_SHADER: VERTEX_SHADER,
	   FRAGMENT_SHADER: FRAGMENT_SHADER
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	var VERTEX_SHADER = '';

	var FRAGMENT_SHADER = '';

	exports.default = {
	   VERTEX_SHADER: VERTEX_SHADER,
	   FRAGMENT_SHADER: FRAGMENT_SHADER
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	var VERTEX_SHADER = '';

	var FRAGMENT_SHADER = '\n   struct Material\n   {\n      int image;\n      vec3 ambient;\n      vec3 diffuse;\n      vec3 specular;\n      float shininess;\n      int shading;\n      int type;\n   };\n\n   uniform sampler2D u_image;\n';

	exports.default = {
	   VERTEX_SHADER: VERTEX_SHADER,
	   FRAGMENT_SHADER: FRAGMENT_SHADER
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	var VERTEX_SHADER = '\n   varying vec4 v_shadow;\n\n   void ShadowMapper_main(vec4 position)\n   {\n      v_shadow = mat4(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0) * position;\n   }\n';

	var FRAGMENT_SHADER = '\n   struct ShadowMapper\n   {\n      int antialias;\n   };\n\n   uniform ShadowMapper u_shadowMapper;\n   uniform sampler2D u_shadowMap;\n\n   varying vec4 v_shadow;\n\n   float ShadowMapper_step(vec4 nearest)\n   {\n      if (nearest.x >= 0.0 && nearest.x <= 1.0 && nearest.y >= 0.0 && nearest.y <= 1.0)\n      {\n         float shadow = texture2D(u_shadowMap, nearest.xy).r;\n         float biased = nearest.z * 0.99995;\n\n         if (shadow <= biased)\n         {\n            return 0.3;\n         }\n      }\n\n      return 1.0;\n   }\n\n   float ShadowMapper_visibility()\n   {\n      vec4 depth = vec4(v_shadow.xyz / v_shadow.w, v_shadow.w);\n      float result = ShadowMapper_step(depth);\n      float count = 1.0;\n\n      if (u_shadowMapper.antialias == 1)\n      {\n         for (float x = -0.01; x <= 0.01; x += 0.005)\n         {\n            for (float y = -0.01; y <= 0.01; y += 0.005)\n            {\n               vec4 nearest = depth + vec4(x, y, 0.0, 0.0) / depth.w;\n\n               result += ShadowMapper_step(nearest);\n\n               count++;\n            }\n         }\n      }\n\n      return result / count;\n   }\n';

	exports.default = {
	   VERTEX_SHADER: VERTEX_SHADER,
	   FRAGMENT_SHADER: FRAGMENT_SHADER
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Shader2 = __webpack_require__(35);

	var _Shader3 = _interopRequireDefault(_Shader2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FragmentShader = function (_Shader) {
	    _inherits(FragmentShader, _Shader);

	    function FragmentShader() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var selector = _ref.selector;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'fragment.shader' : _ref$name;

	        _classCallCheck(this, FragmentShader);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FragmentShader).call(this, { name: name, selector: selector + '[type="x-shader/x-fragment"]' }, 'FRAGMENT_SHADER'));

	        _this.inheritance = ['Entity', 'Shader', 'FragmentShader'];
	        return _this;
	    }

	    return FragmentShader;
	}(_Shader3.default);

	exports.default = FragmentShader;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Context = __webpack_require__(13);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Renderbuffer = function (_Entity) {
	    _inherits(Renderbuffer, _Entity);

	    function Renderbuffer() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var width = _ref.width;
	        var height = _ref.height;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'renderbuffer' : _ref$name;

	        _classCallCheck(this, Renderbuffer);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Renderbuffer).call(this, { name: name }));

	        _this.buffer = _Context.gl.createRenderbuffer();

	        _this.width = width;

	        _this.height = height;

	        _this.inheritance = ['Entity', 'Renderbuffer'];

	        _this.configure();
	        return _this;
	    }

	    _createClass(Renderbuffer, [{
	        key: 'configure',
	        value: function configure() {
	            this.bind();

	            _Context.gl.renderbufferStorage(_Context.gl.RENDERBUFFER, _Context.gl.DEPTH_COMPONENT16, this.width, this.height);

	            this.unbind();
	        }
	    }, {
	        key: 'bind',
	        value: function bind() {
	            _Context.gl.bindRenderbuffer(_Context.gl.RENDERBUFFER, this.buffer);
	        }
	    }, {
	        key: 'unbind',
	        value: function unbind() {
	            _Context.gl.bindRenderbuffer(_Context.gl.RENDERBUFFER, null);
	        }
	    }, {
	        key: 'buffer',
	        get: function get() {
	            return this._buffer;
	        },
	        set: function set(buffer) {
	            this._buffer = buffer;
	        }
	    }, {
	        key: 'width',
	        get: function get() {
	            return this._width;
	        },
	        set: function set(width) {
	            this._width = width;
	        }
	    }, {
	        key: 'height',
	        get: function get() {
	            return this._height;
	        },
	        set: function set(height) {
	            this._height = height;
	        }
	    }]);

	    return Renderbuffer;
	}(_Entity3.default);

	exports.default = Renderbuffer;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _glMatrix = __webpack_require__(1);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Scene = function (_Entity) {
	    _inherits(Scene, _Entity);

	    function Scene() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'scene' : _ref$name;

	        _classCallCheck(this, Scene);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Scene).call(this, { name: name }));

	        _this.program = undefined;

	        _this.meshes = [];

	        _this.simulations = [];

	        _this.lights = [];

	        _this.scale = _glMatrix.vec3.fromValues(1, 1, 1);

	        _this.rotation = 0;

	        _this.translation = _glMatrix.vec3.fromValues(0, 0, 0);

	        _this.inheritance = ['Entity', 'Scene'];
	        return _this;
	    }

	    _createClass(Scene, [{
	        key: 'use',
	        value: function use(program) {
	            program.bind();

	            this.program = program;
	        }
	    }, {
	        key: 'put',
	        value: function put(item) {
	            switch (true) {
	                case item.isType('Mesh'):
	                    this.meshes.push(item);
	                    break;

	                case item.isType('ParticleSystem'):
	                    this.simulations.push(item);
	                    this.meshes.push(item.mesh);
	                    break;

	                case item.isType('Light'):
	                    this.lights.push(item);
	                    break;

	                default:
	                    console.warn(item.name + ' disallowed in scene');
	                    break;
	            }
	        }
	    }, {
	        key: 'animate',
	        value: function animate(target, camera) {
	            var pre = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	            var post = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	            var step = this.animate.bind(this, target, camera, pre, post);

	            this.render.apply(this, arguments);

	            requestAnimationFrame(step);
	        }
	    }, {
	        key: 'render',
	        value: function render(target, camera) {
	            var pre = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	            var post = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	            var program = this.program;

	            target.bind();

	            if (pre) {
	                pre();
	            }

	            camera.save();

	            camera.scale.apply(camera, this.scale);
	            camera.rotate(this.rotation);
	            camera.translate.apply(camera, this.translation);

	            this.lights.forEach(function (light) {
	                return light.bind(program);
	            });
	            this.simulations.forEach(function (simulation) {
	                return simulation.solve();
	            });
	            this.meshes.forEach(this.draw.bind(this, camera));

	            camera.restore();

	            if (post) {
	                post();
	            }

	            target.unbind();
	        }
	    }, {
	        key: 'draw',
	        value: function draw(camera, mesh) {
	            var program = this.program;
	            var material = mesh.material;

	            camera.save();

	            camera.scale.apply(camera, mesh.scale);
	            camera.rotate(mesh.rotation);
	            camera.translate.apply(camera, mesh.translation);

	            camera.bind(program);

	            material.bind(program);

	            mesh.draw({ program: program });

	            material.unbind();

	            camera.restore();
	        }
	    }, {
	        key: 'program',
	        get: function get() {
	            return this._program;
	        },
	        set: function set(program) {
	            this._program = program;
	        }
	    }, {
	        key: 'meshes',
	        get: function get() {
	            return this._meshes;
	        },
	        set: function set(meshes) {
	            this._meshes = meshes;
	        }
	    }, {
	        key: 'lights',
	        get: function get() {
	            return this._lights;
	        },
	        set: function set(lights) {
	            this._lights = lights;
	        }
	    }, {
	        key: 'scale',
	        get: function get() {
	            return this._scale;
	        },
	        set: function set(scale) {
	            this._scale = scale;
	        }
	    }, {
	        key: 'rotation',
	        get: function get() {
	            return this._rotation;
	        },
	        set: function set(rotation) {
	            this._rotation = rotation;
	        }
	    }, {
	        key: 'translation',
	        get: function get() {
	            return this._translation;
	        },
	        set: function set(translation) {
	            this._translation = translation;
	        }
	    }]);

	    return Scene;
	}(_Entity3.default);

	exports.default = Scene;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Context = __webpack_require__(13);

	var _Structure2 = __webpack_require__(16);

	var _Structure3 = _interopRequireDefault(_Structure2);

	var _DataTexture = __webpack_require__(48);

	var _DataTexture2 = _interopRequireDefault(_DataTexture);

	var _DepthTexture = __webpack_require__(50);

	var _DepthTexture2 = _interopRequireDefault(_DepthTexture);

	var _DepthFramebuffer = __webpack_require__(22);

	var _DepthFramebuffer2 = _interopRequireDefault(_DepthFramebuffer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ShadowMapper = function (_Structure) {
	    _inherits(ShadowMapper, _Structure);

	    function ShadowMapper() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var width = _ref.width;
	        var height = _ref.height;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'shadow.mapper' : _ref$name;
	        var _ref$path = _ref.path;
	        var path = _ref$path === undefined ? 'shadowMapper' : _ref$path;
	        var _ref$uniforms = _ref.uniforms;
	        var uniforms = _ref$uniforms === undefined ? ['i antialias', 'sampler shadowMap'] : _ref$uniforms;
	        var _ref$antialias = _ref.antialias;
	        var antialias = _ref$antialias === undefined ? false : _ref$antialias;

	        _classCallCheck(this, ShadowMapper);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShadowMapper).call(this, { name: name, path: path, uniforms: uniforms }));

	        _this.colorAttachment = new _DataTexture2.default({ width: width, height: height });

	        _this.depthAttachment = new _DepthTexture2.default({ width: width, height: height });

	        _this.view = new _DepthFramebuffer2.default({ colorAttachment: _this.colorAttachment, depthAttachment: _this.depthAttachment });

	        _this.shadowMap = _this.depthAttachment.unit;

	        _this.antialias = antialias;

	        _this.inheritance = ['Entity', 'Structure', 'ShadowMapper'];
	        return _this;
	    }

	    _createClass(ShadowMapper, [{
	        key: 'bind',
	        value: function bind(program) {
	            _get(Object.getPrototypeOf(ShadowMapper.prototype), 'bind', this).call(this, program);

	            this.depthAttachment.bind();
	        }
	    }, {
	        key: 'unbind',
	        value: function unbind() {
	            this.depthAttachment.unbind();
	        }
	    }, {
	        key: 'colorAttachment',
	        get: function get() {
	            return this._colorAttachment;
	        },
	        set: function set(colorAttachment) {
	            this._colorAttachment = colorAttachment;
	        }
	    }, {
	        key: 'depthAttachment',
	        get: function get() {
	            return this._depthAttachment;
	        },
	        set: function set(depthAttachment) {
	            this._depthAttachment = depthAttachment;
	        }
	    }, {
	        key: 'view',
	        get: function get() {
	            return this._view;
	        },
	        set: function set(view) {
	            this._view = view;
	        }
	    }, {
	        key: 'shadowMap',
	        get: function get() {
	            return this._shadowMap;
	        },
	        set: function set(shadowMap) {
	            this._shadowMap = shadowMap;
	        }
	    }, {
	        key: 'antialias',
	        get: function get() {
	            return this._antialias;
	        },
	        set: function set(antialias) {
	            this._antialias = antialias;
	        }
	    }]);

	    return ShadowMapper;
	}(_Structure3.default);

	exports.default = ShadowMapper;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _glMatrix = __webpack_require__(1);

	var _Context = __webpack_require__(13);

	var _Texture2 = __webpack_require__(49);

	var _Texture3 = _interopRequireDefault(_Texture2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DataTexture = function (_Texture) {
	    _inherits(DataTexture, _Texture);

	    function DataTexture() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var width = _ref.width;
	        var height = _ref.height;
	        var lod = _ref.lod;
	        var components = _ref.components;
	        var format = _ref.format;
	        var magnification = _ref.magnification;
	        var minification = _ref.minification;
	        var S = _ref.S;
	        var T = _ref.T;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'data.texture' : _ref$name;
	        var _ref$image = _ref.image;
	        var image = _ref$image === undefined ? null : _ref$image;

	        _classCallCheck(this, DataTexture);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DataTexture).call(this, { name: name, lod: lod, components: components, format: format, magnification: magnification, minification: minification, S: S, T: T }));

	        _this.image = image;

	        _this.width = width;

	        _this.height = height;

	        _this.inheritance = ['Entity', 'Texture', 'DataTexture'];

	        _this.autofill();
	        _this.configure();
	        return _this;
	    }

	    _createClass(DataTexture, [{
	        key: 'configure',
	        value: function configure() {
	            _get(Object.getPrototypeOf(DataTexture.prototype), 'configure', this).call(this);

	            var components = this.components;
	            var image = this.image;

	            if (image instanceof Array) {
	                _Context.gl.pixelStorei(_Context.gl.PACK_ALIGNMENT, 1);
	                _Context.gl.pixelStorei(_Context.gl.UNPACK_ALIGNMENT, 1);

	                _Context.gl.getExtension('OES_texture_float');

	                image = new Float32Array(image);
	            }

	            _Context.gl.texImage2D(_Context.gl.TEXTURE_2D, this.lod, components, this.width, this.height, 0, components, this.format, image);

	            this.unbind();
	        }
	    }, {
	        key: 'autofill',
	        value: function autofill() {
	            var image = this.image;

	            if (image instanceof Array) {
	                var count = this.width * this.height * this.length - image.length;
	                var nixels = Array.from({ length: count }, function () {
	                    return -1;
	                });

	                this.image = image.concat(nixels);
	            }
	        }
	    }, {
	        key: 'image',
	        get: function get() {
	            return this._image;
	        },
	        set: function set(image) {
	            this._image = image;
	        }
	    }, {
	        key: 'width',
	        get: function get() {
	            return this._width;
	        },
	        set: function set(width) {
	            this._width = width;
	        }
	    }, {
	        key: 'height',
	        get: function get() {
	            return this._height;
	        },
	        set: function set(height) {
	            this._height = height;
	        }
	    }]);

	    return DataTexture;
	}(_Texture3.default);

	exports.default = DataTexture;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Context = __webpack_require__(13);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var unit = 0;

	var Texture = function (_Entity) {
	    _inherits(Texture, _Entity);

	    function Texture() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'texture' : _ref$name;
	        var _ref$lod = _ref.lod;
	        var lod = _ref$lod === undefined ? 0 : _ref$lod;
	        var _ref$components = _ref.components;
	        var components = _ref$components === undefined ? 'RGBA' : _ref$components;
	        var _ref$format = _ref.format;
	        var format = _ref$format === undefined ? 'UNSIGNED_BYTE' : _ref$format;
	        var _ref$magnification = _ref.magnification;
	        var magnification = _ref$magnification === undefined ? 'NEAREST' : _ref$magnification;
	        var _ref$minification = _ref.minification;
	        var minification = _ref$minification === undefined ? 'NEAREST' : _ref$minification;
	        var _ref$S = _ref.S;
	        var S = _ref$S === undefined ? 'CLAMP_TO_EDGE' : _ref$S;
	        var _ref$T = _ref.T;
	        var T = _ref$T === undefined ? 'CLAMP_TO_EDGE' : _ref$T;

	        _classCallCheck(this, Texture);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Texture).call(this, { name: name }));

	        _this.buffer = _Context.gl.createTexture();

	        _this.lod = lod;

	        _this.components = components;

	        _this.length = components.length;

	        _this.format = format;

	        _this.magnification = magnification;

	        _this.minification = minification;

	        _this.S = S;

	        _this.T = T;

	        _this.unit = unit++;

	        _this.inheritance = ['Entity', 'Texture'];
	        return _this;
	    }

	    _createClass(Texture, [{
	        key: 'configure',
	        value: function configure() {
	            this.bind();

	            _Context.gl.texParameteri(_Context.gl.TEXTURE_2D, _Context.gl.TEXTURE_MAG_FILTER, this.magnification);
	            _Context.gl.texParameteri(_Context.gl.TEXTURE_2D, _Context.gl.TEXTURE_MIN_FILTER, this.minification);
	            _Context.gl.texParameteri(_Context.gl.TEXTURE_2D, _Context.gl.TEXTURE_WRAP_S, this.S);
	            _Context.gl.texParameteri(_Context.gl.TEXTURE_2D, _Context.gl.TEXTURE_WRAP_T, this.T);
	        }
	    }, {
	        key: 'bind',
	        value: function bind() {
	            var active = _Context.gl.TEXTURE0 + this.unit;

	            _Context.gl.activeTexture(active);
	            _Context.gl.bindTexture(_Context.gl.TEXTURE_2D, this.buffer);
	        }
	    }, {
	        key: 'unbind',
	        value: function unbind() {
	            _Context.gl.bindTexture(_Context.gl.TEXTURE_2D, null);
	        }
	    }, {
	        key: 'buffer',
	        get: function get() {
	            return this._buffer;
	        },
	        set: function set(buffer) {
	            this._buffer = buffer;
	        }
	    }, {
	        key: 'lod',
	        get: function get() {
	            return this._lod;
	        },
	        set: function set(lod) {
	            this._lod = lod;
	        }
	    }, {
	        key: 'components',
	        get: function get() {
	            return this._components;
	        },
	        set: function set(components) {
	            this._components = _Context.gl[components];
	        }
	    }, {
	        key: 'length',
	        get: function get() {
	            return this._length;
	        },
	        set: function set(length) {
	            this._length = length;
	        }
	    }, {
	        key: 'format',
	        get: function get() {
	            return this._format;
	        },
	        set: function set(format) {
	            this._format = _Context.gl[format];
	        }
	    }, {
	        key: 'magnification',
	        get: function get() {
	            return this._magnification;
	        },
	        set: function set(magnification) {
	            this._magnification = _Context.gl[magnification];
	        }
	    }, {
	        key: 'minification',
	        get: function get() {
	            return this._minification;
	        },
	        set: function set(minification) {
	            this._minification = _Context.gl[minification];
	        }
	    }, {
	        key: 'S',
	        get: function get() {
	            return this._S;
	        },
	        set: function set(S) {
	            this._S = _Context.gl[S];
	        }
	    }, {
	        key: 'T',
	        get: function get() {
	            return this._T;
	        },
	        set: function set(T) {
	            this._T = _Context.gl[T];
	        }
	    }, {
	        key: 'unit',
	        get: function get() {
	            return this._unit;
	        },
	        set: function set(unit) {
	            this._unit = unit;
	        }
	    }]);

	    return Texture;
	}(_Entity3.default);

	exports.default = Texture;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Context = __webpack_require__(13);

	var _Texture2 = __webpack_require__(49);

	var _Texture3 = _interopRequireDefault(_Texture2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DepthTexture = function (_Texture) {
	    _inherits(DepthTexture, _Texture);

	    function DepthTexture() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var width = _ref.width;
	        var height = _ref.height;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'depth.texture' : _ref$name;

	        _classCallCheck(this, DepthTexture);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DepthTexture).call(this, { name: name }));

	        _this.buffer = _Context.gl.createTexture();

	        _this.width = width;

	        _this.height = height;

	        _this.inheritance = ['Entity', 'Texture', 'DepthTexture'];

	        _this.configure();
	        return _this;
	    }

	    _createClass(DepthTexture, [{
	        key: 'configure',
	        value: function configure() {
	            _get(Object.getPrototypeOf(DepthTexture.prototype), 'configure', this).call(this);

	            _Context.gl.getExtension('WEBGL_depth_texture');

	            _Context.gl.texImage2D(_Context.gl.TEXTURE_2D, 0, _Context.gl.DEPTH_COMPONENT, this.width, this.height, 0, _Context.gl.DEPTH_COMPONENT, _Context.gl.UNSIGNED_INT, null);

	            this.unbind();
	        }
	    }, {
	        key: 'buffer',
	        get: function get() {
	            return this._buffer;
	        },
	        set: function set(buffer) {
	            this._buffer = buffer;
	        }
	    }, {
	        key: 'width',
	        get: function get() {
	            return this._width;
	        },
	        set: function set(width) {
	            this._width = width;
	        }
	    }, {
	        key: 'height',
	        get: function get() {
	            return this._height;
	        },
	        set: function set(height) {
	            this._height = height;
	        }
	    }]);

	    return DepthTexture;
	}(_Texture3.default);

	exports.default = DepthTexture;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Context = __webpack_require__(13);

	var _image = __webpack_require__(52);

	var _image2 = _interopRequireDefault(_image);

	var _Texture2 = __webpack_require__(49);

	var _Texture3 = _interopRequireDefault(_Texture2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ImageTexture = function (_Texture) {
	    _inherits(ImageTexture, _Texture);

	    function ImageTexture() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var path = _ref.path;
	        var lod = _ref.lod;
	        var components = _ref.components;
	        var format = _ref.format;
	        var magnification = _ref.magnification;
	        var minification = _ref.minification;
	        var S = _ref.S;
	        var T = _ref.T;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'image.texture' : _ref$name;
	        var _ref$anisotropy = _ref.anisotropy;
	        var anisotropy = _ref$anisotropy === undefined ? false : _ref$anisotropy;
	        var _ref$mipmap = _ref.mipmap;
	        var mipmap = _ref$mipmap === undefined ? false : _ref$mipmap;

	        _classCallCheck(this, ImageTexture);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageTexture).call(this, { name: name, lod: lod, components: components, format: format, magnification: magnification, minification: minification, S: S, T: T }));

	        _this.image = undefined;

	        _this.promise = _this.fetch(path);

	        _this.anisotropicFilter = _Context.gl.getExtension('EXT_texture_filter_anisotropic');

	        _this.anisotropy = anisotropy;

	        _this.mipmap = mipmap;

	        _this.inheritance = ['Entity', 'Texture', 'ImageTexture'];
	        return _this;
	    }

	    _createClass(ImageTexture, [{
	        key: 'fetch',
	        value: function fetch(path) {
	            return (0, _image2.default)(path).then(this.define.bind(this)).then(this.configure.bind(this));
	        }
	    }, {
	        key: 'define',
	        value: function define(image) {
	            this.image = image;
	        }
	    }, {
	        key: 'configure',
	        value: function configure() {
	            _get(Object.getPrototypeOf(ImageTexture.prototype), 'configure', this).call(this);

	            var components = this.components;
	            var anisotropy = this.anisotropy;

	            _Context.gl.pixelStorei(_Context.gl.UNPACK_FLIP_Y_WEBGL, true);

	            if (anisotropy) {
	                _Context.gl.texParameterf(_Context.gl.TEXTURE_2D, this.anisotropicFilter.TEXTURE_MAX_ANISOTROPY_EXT, anisotropy);
	            }

	            _Context.gl.texImage2D(_Context.gl.TEXTURE_2D, this.lod, components, components, this.format, this.image);

	            if (this.mipmap) {
	                _Context.gl.generateMipmap(_Context.gl.TEXTURE_2D);
	            }

	            this.unbind();
	        }
	    }, {
	        key: 'image',
	        get: function get() {
	            return this._image;
	        },
	        set: function set(image) {
	            this._image = image;
	        }
	    }, {
	        key: 'anisotropicFilter',
	        get: function get() {
	            return this._anisotropicFilter;
	        },
	        set: function set(anisotropicFilter) {
	            this._anisotropicFilter = anisotropicFilter;
	        }
	    }, {
	        key: 'anisotropy',
	        get: function get() {
	            return this._anisotropy;
	        },
	        set: function set(anisotropy) {
	            var anisotropicFilter = this.anisotropicFilter;

	            if (anisotropicFilter && anisotropy !== false) {
	                var maxAnisotropy = _Context.gl.getParameter(anisotropicFilter.MAX_TEXTURE_MAX_ANISOTROPY_EXT);

	                anisotropy = Math.min(anisotropy, Math.max(anisotropy, maxAnisotropy));
	            } else {
	                anisotropy = 0;
	            }

	            this._anisotropy = anisotropy;
	        }
	    }, {
	        key: 'mipmap',
	        get: function get() {
	            return this._mipmap;
	        },
	        set: function set(mipmap) {
	            this._mipmap = mipmap;
	        }
	    }]);

	    return ImageTexture;
	}(_Texture3.default);

	exports.default = ImageTexture;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _promise = __webpack_require__(31);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function image(src) {
	   return (0, _promise2.default)(function (resolve, reject) {
	      var image = new Image();

	      image.src = src;

	      image.onload = function (response) {
	         resolve(image, response);
	      };

	      image.onerror = function (response) {
	         reject(response);
	      };
	   });
	}

	exports.default = image;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _glMatrix = __webpack_require__(1);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Particle = function (_Entity) {
	    _inherits(Particle, _Entity);

	    function Particle() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'particle' : _ref$name;
	        var _ref$mass = _ref.mass;
	        var mass = _ref$mass === undefined ? 1 : _ref$mass;
	        var _ref$damping = _ref.damping;
	        var damping = _ref$damping === undefined ? 0 : _ref$damping;
	        var _ref$acceleration = _ref.acceleration;
	        var acceleration = _ref$acceleration === undefined ? _glMatrix.vec3.fromValues(0, 0, 0) : _ref$acceleration;
	        var _ref$velocity = _ref.velocity;
	        var velocity = _ref$velocity === undefined ? _glMatrix.vec3.fromValues(0, 0, 0) : _ref$velocity;
	        var _ref$position = _ref.position;
	        var position = _ref$position === undefined ? _glMatrix.vec3.fromValues(0, 0, 0) : _ref$position;
	        var _ref$normal = _ref.normal;
	        var normal = _ref$normal === undefined ? _glMatrix.vec3.fromValues(0, 0, 0) : _ref$normal;
	        var _ref$frozen = _ref.frozen;
	        var frozen = _ref$frozen === undefined ? false : _ref$frozen;

	        _classCallCheck(this, Particle);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Particle).call(this, { name: name }));

	        _this.mass = mass;

	        _this.damping = damping;

	        _this.acceleration = acceleration;

	        _this.velocity = velocity;

	        _this.previous = _glMatrix.vec3.clone(position);

	        _this.position = position;

	        _this.normal = normal;

	        _this.frozen = frozen;

	        _this.inheritance = ['Entity', 'Particle'];
	        return _this;
	    }

	    _createClass(Particle, [{
	        key: 'exert',
	        value: function exert(force) {
	            var acceleration = _glMatrix.vec3.scale(_glMatrix.vec3.create(), force, 1 / this.mass);

	            this.accelerate(acceleration);
	        }
	    }, {
	        key: 'accelerate',
	        value: function accelerate(acceleration) {
	            _glMatrix.vec3.add(this.acceleration, this.acceleration, acceleration);
	        }
	    }, {
	        key: 'dampen',
	        value: function dampen(damping) {
	            _glMatrix.vec3.scale(this.velocity, this.velocity, damping);
	        }
	    }, {
	        key: 'euler',
	        value: function euler(timestep) {
	            if (!this.frozen) {
	                var velocity = _glMatrix.vec3.clone(this.velocity);

	                _glMatrix.vec3.add(this.velocity, this.velocity, _glMatrix.vec3.scale(_glMatrix.vec3.create(), this.acceleration, timestep));
	                _glMatrix.vec3.add(this.position, this.position, _glMatrix.vec3.scale(_glMatrix.vec3.create(), velocity, timestep));
	            }
	        }
	    }, {
	        key: 'simplectic',
	        value: function simplectic(timestep) {
	            if (!this.frozen) {
	                _glMatrix.vec3.add(this.velocity, this.velocity, _glMatrix.vec3.scale(_glMatrix.vec3.create(), this.acceleration, timestep));
	                _glMatrix.vec3.add(this.position, this.position, _glMatrix.vec3.scale(_glMatrix.vec3.create(), this.velocity, timestep));
	            }
	        }
	    }, {
	        key: 'verlet',
	        value: function verlet(timestep) {
	            if (!this.frozen) {
	                var previous = _glMatrix.vec3.clone(this.previous);
	                var position = _glMatrix.vec3.clone(this.position);

	                _glMatrix.vec3.add(this.position, _glMatrix.vec3.add(_glMatrix.vec3.create(), position, _glMatrix.vec3.sub(_glMatrix.vec3.create(), position, previous)), _glMatrix.vec3.scale(_glMatrix.vec3.create(), this.acceleration, Math.pow(timestep, 2)));

	                _glMatrix.vec3.copy(this.previous, position);

	                _glMatrix.vec3.scale(this.velocity, _glMatrix.vec3.sub(_glMatrix.vec3.create(), this.position, this.previous), 1 / timestep);
	            }
	        }
	    }, {
	        key: 'freeze',
	        value: function freeze() {
	            this.frozen = true;
	        }
	    }, {
	        key: 'unfreeze',
	        value: function unfreeze() {
	            this.frozen = false;
	        }
	    }, {
	        key: 'mass',
	        get: function get() {
	            return this._mass;
	        },
	        set: function set(mass) {
	            this._mass = mass;
	        }
	    }, {
	        key: 'damping',
	        get: function get() {
	            return this._damping;
	        },
	        set: function set(damping) {
	            this._damping = damping;
	        }
	    }, {
	        key: 'acceleration',
	        get: function get() {
	            return this._acceleration;
	        },
	        set: function set(acceleration) {
	            this._acceleration = acceleration;
	        }
	    }, {
	        key: 'velocity',
	        get: function get() {
	            return this._velocity;
	        },
	        set: function set(velocity) {
	            this._velocity = velocity;
	        }
	    }, {
	        key: 'previous',
	        get: function get() {
	            return this._previous;
	        },
	        set: function set(previous) {
	            this._previous = previous;
	        }
	    }, {
	        key: 'position',
	        get: function get() {
	            return this._position;
	        },
	        set: function set(position) {
	            this._position = position;
	        }
	    }, {
	        key: 'normal',
	        get: function get() {
	            return this._normal;
	        },
	        set: function set(normal) {
	            this._normal = normal;
	        }
	    }, {
	        key: 'frozen',
	        get: function get() {
	            return this._frozen;
	        },
	        set: function set(frozen) {
	            this._frozen = frozen;
	        }
	    }]);

	    return Particle;
	}(_Entity3.default);

	exports.default = Particle;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _glMatrix = __webpack_require__(1);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	var _Particle = __webpack_require__(53);

	var _Particle2 = _interopRequireDefault(_Particle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ParticleSystem = function (_Entity) {
	    _inherits(ParticleSystem, _Entity);

	    function ParticleSystem() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var mesh = _ref.mesh;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'particle.system' : _ref$name;
	        var _ref$gravity = _ref.gravity;
	        var gravity = _ref$gravity === undefined ? _glMatrix.vec3.fromValues(0, -9.80665, 0) : _ref$gravity;
	        var _ref$timestep = _ref.timestep;
	        var timestep = _ref$timestep === undefined ? 0.003 : _ref$timestep;
	        var _ref$solver = _ref.solver;
	        var solver = _ref$solver === undefined ? 'VERLET' : _ref$solver;
	        var _ref$paused = _ref.paused;
	        var paused = _ref$paused === undefined ? false : _ref$paused;

	        _classCallCheck(this, ParticleSystem);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ParticleSystem).call(this, { name: name }));

	        _this.mesh = mesh;

	        _this.particles = mesh.vertices.map(function (position) {
	            return new _Particle2.default({ position: position });
	        });

	        _this.gravity = gravity;

	        _this.timestep = timestep;

	        _this.solver = solver;

	        _this.paused = paused;

	        _this.inheritance = ['Entity', 'ParticleSystem'];
	        return _this;
	    }

	    _createClass(ParticleSystem, [{
	        key: 'solve',
	        value: function solve() {
	            if (!this.paused) {
	                this.particles.forEach(this.integrate.bind(this));

	                this.mesh.update(this.vertices());
	            }
	        }
	    }, {
	        key: 'integrate',
	        value: function integrate(particle) {
	            particle.accelerate(this.gravity);

	            particle[this.solver](this.timestep);
	        }
	    }, {
	        key: 'vertices',
	        value: function vertices() {
	            var particles = this.particles;
	            var positions = [];

	            particles.forEach(function (particle) {
	                return positions.push(particle.position);
	            });

	            return positions;
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            this.paused = true;
	        }
	    }, {
	        key: 'run',
	        value: function run() {
	            this.paused = false;
	        }
	    }, {
	        key: 'mesh',
	        get: function get() {
	            return this._mesh;
	        },
	        set: function set(mesh) {
	            this._mesh = mesh;
	        }
	    }, {
	        key: 'particles',
	        get: function get() {
	            return this._particles;
	        },
	        set: function set(particles) {
	            this._particles = particles;
	        }
	    }, {
	        key: 'gravity',
	        get: function get() {
	            return this._gravity;
	        },
	        set: function set(gravity) {
	            this._gravity = gravity;
	        }
	    }, {
	        key: 'timestep',
	        get: function get() {
	            return this._timestep;
	        },
	        set: function set(timestep) {
	            this._timestep = timestep;
	        }
	    }, {
	        key: 'solver',
	        get: function get() {
	            return this._solver.toLowerCase();
	        },
	        set: function set(solver) {
	            this._solver = solver;
	        }
	    }, {
	        key: 'paused',
	        get: function get() {
	            return this._paused;
	        },
	        set: function set(paused) {
	            this._paused = paused;
	        }
	    }]);

	    return ParticleSystem;
	}(_Entity3.default);

	exports.default = ParticleSystem;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _glMatrix = __webpack_require__(1);

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _spread = {
	    STRUCTURAL: 100,
	    SHEAR: 10,
	    BEND: 1
	};

	var Spring = function (_Entity) {
	    _inherits(Spring, _Entity);

	    function Spring() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var i = _ref.i;
	        var j = _ref.j;
	        var stiffness = _ref.stiffness;
	        var damping = _ref.damping;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'spring' : _ref$name;
	        var _ref$type = _ref.type;
	        var type = _ref$type === undefined ? 'STRUCTURAL' : _ref$type;

	        _classCallCheck(this, Spring);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Spring).call(this, { name: name }));

	        _this.i = i;

	        _this.j = j;

	        _this.length = _glMatrix.vec3.distance(i.position, j.position);

	        _this.type = type;

	        _this.stiffness = stiffness;

	        _this.damping = damping;

	        _this.inheritance = ['Entity', 'Spring'];
	        return _this;
	    }

	    _createClass(Spring, [{
	        key: 'spread',
	        value: function spread(value) {
	            return value * (_spread[this.type] / 100);
	        }
	    }, {
	        key: 'relax',
	        value: function relax() {
	            var i = this.i;
	            var j = this.j;
	            var spring = _glMatrix.vec3.sub(_glMatrix.vec3.create(), i.position, j.position);
	            var length = _glMatrix.vec3.length(spring);
	            var normal = _glMatrix.vec3.normalize(_glMatrix.vec3.create(), spring);
	            var velocity = _glMatrix.vec3.sub(_glMatrix.vec3.create(), i.velocity, j.velocity);
	            var relaxation = this.stiffness * (length - this.length);
	            var resistance = this.damping * _glMatrix.vec3.dot(velocity, normal);
	            var force = _glMatrix.vec3.scale(_glMatrix.vec3.create(), normal, relaxation + resistance);

	            i.exert(_glMatrix.vec3.negate(_glMatrix.vec3.create(), force));
	            j.exert(force);
	        }
	    }, {
	        key: 'i',
	        get: function get() {
	            return this._i;
	        },
	        set: function set(i) {
	            this._i = i;
	        }
	    }, {
	        key: 'j',
	        get: function get() {
	            return this._j;
	        },
	        set: function set(j) {
	            this._j = j;
	        }
	    }, {
	        key: 'length',
	        get: function get() {
	            return this._length;
	        },
	        set: function set(length) {
	            this._length = length;
	        }
	    }, {
	        key: 'type',
	        get: function get() {
	            return this._type;
	        },
	        set: function set(type) {
	            this._type = type;
	        }
	    }, {
	        key: 'stiffness',
	        get: function get() {
	            return this._stiffness;
	        },
	        set: function set(stiffness) {
	            this._stiffness = this.spread(stiffness);
	        }
	    }, {
	        key: 'damping',
	        get: function get() {
	            return this._damping;
	        },
	        set: function set(damping) {
	            this._damping = this.spread(damping);
	        }
	    }]);

	    return Spring;
	}(_Entity3.default);

	exports.default = Spring;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _ParticleSystem2 = __webpack_require__(54);

	var _ParticleSystem3 = _interopRequireDefault(_ParticleSystem2);

	var _Spring = __webpack_require__(55);

	var _Spring2 = _interopRequireDefault(_Spring);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Cloth = function (_ParticleSystem) {
	    _inherits(Cloth, _ParticleSystem);

	    function Cloth() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var mesh = _ref.mesh;
	        var gravity = _ref.gravity;
	        var timestep = _ref.timestep;
	        var solver = _ref.solver;
	        var paused = _ref.paused;
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'cloth' : _ref$name;
	        var _ref$stiffness = _ref.stiffness;
	        var stiffness = _ref$stiffness === undefined ? 0 : _ref$stiffness;
	        var _ref$damping = _ref.damping;
	        var damping = _ref$damping === undefined ? 0 : _ref$damping;

	        _classCallCheck(this, Cloth);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cloth).call(this, { name: name, mesh: mesh, gravity: gravity, timestep: timestep, solver: solver, paused: paused }));

	        _this.stiffness = stiffness;

	        _this.damping = damping;

	        _this.springs = [];

	        _this.inheritance = ['Entity', 'ParticleSystem', 'Cloth'];

	        _this.model();
	        return _this;
	    }

	    _createClass(Cloth, [{
	        key: 'model',
	        value: function model() {
	            var indices = this.mesh.indices;
	            var faces = [];
	            var corners = 3;

	            for (var index = 0, _index = indices.length; index < _index; index += corners) {
	                var face = indices.slice(index, index + corners);

	                faces.push(face);
	            }

	            this.particles.forEach(this.find.bind(this, faces));
	        }
	    }, {
	        key: 'find',
	        value: function find(faces, particle, i) {
	            var cache = [];

	            faces.forEach(this.thread.bind(this, cache, i));
	        }
	    }, {
	        key: 'thread',
	        value: function thread(cache, i, face) {
	            if (~face.indexOf(i)) {
	                var _springs;

	                var nearest = face.filter(function (neighbor) {
	                    return neighbor !== i && ! ~cache.indexOf(neighbor);
	                });
	                var springs = nearest.map(this.stitch.bind(this, i));

	                (_springs = this.springs).push.apply(_springs, _toConsumableArray(springs));
	                cache.push.apply(cache, _toConsumableArray(nearest));
	            }
	        }
	    }, {
	        key: 'stitch',
	        value: function stitch(i, j, index) {
	            var particles = this.particles;
	            var type = index % 2 ? 'STRUCTURAL' : 'SHEAR';

	            return new _Spring2.default({ i: particles[i], j: particles[j], stiffness: this.stiffness, damping: this.damping, type: type });
	        }
	    }, {
	        key: 'solve',
	        value: function solve() {
	            if (!this.paused) {
	                this.springs.forEach(function (spring) {
	                    return spring.relax();
	                });

	                _get(Object.getPrototypeOf(Cloth.prototype), 'solve', this).call(this);
	            }
	        }
	    }, {
	        key: 'stiffness',
	        get: function get() {
	            return this._stiffness;
	        },
	        set: function set(stiffness) {
	            this._stiffness = stiffness;
	        }
	    }, {
	        key: 'damping',
	        get: function get() {
	            return this._damping;
	        },
	        set: function set(damping) {
	            this._damping = damping;
	        }
	    }, {
	        key: 'springs',
	        get: function get() {
	            return this._springs;
	        },
	        set: function set(springs) {
	            this._springs = springs;
	        }
	    }]);

	    return Cloth;
	}(_ParticleSystem3.default);

	exports.default = Cloth;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Entity2 = __webpack_require__(11);

	var _Entity3 = _interopRequireDefault(_Entity2);

	var _promise = __webpack_require__(31);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bundle = function (_Entity) {
	    _inherits(Bundle, _Entity);

	    function Bundle() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? 'bundle' : _ref$name;
	        var _ref$items = _ref.items;
	        var items = _ref$items === undefined ? [] : _ref$items;
	        var _ref$step = _ref.step;
	        var step = _ref$step === undefined ? function () {} : _ref$step;

	        _classCallCheck(this, Bundle);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bundle).call(this, { name: name }));

	        _this.promises = items;

	        _this.size = items.length;

	        _this.progress = items.length;

	        _this.step = step;

	        _this.inheritance = ['Entity', 'Bundle'];
	        return _this;
	    }

	    _createClass(Bundle, [{
	        key: 'next',
	        value: function next() {
	            var count = --this.progress;
	            var progress = 100 - count / this.size * 100;

	            this.step(progress);
	        }
	    }, {
	        key: 'sync',
	        value: function sync(item) {
	            this.promises.push(item.promise);
	        }
	    }, {
	        key: 'ready',
	        value: function ready(main) {
	            return this.promise = (0, _promise2.default)().all(this.promises).then(function () {
	                main();
	            });
	        }
	    }, {
	        key: 'promises',
	        get: function get() {
	            return this._promises;
	        },
	        set: function set(items) {
	            var _this2 = this;

	            this._promises = Object.keys(items).map(function (name) {
	                return items[name].promise.then(_this2.next.bind(_this2));
	            });
	        }
	    }, {
	        key: 'size',
	        get: function get() {
	            return this._size;
	        },
	        set: function set(size) {
	            this._size = size;
	        }
	    }, {
	        key: 'progress',
	        get: function get() {
	            return this._progress;
	        },
	        set: function set(progress) {
	            this._progress = progress;
	        }
	    }, {
	        key: 'step',
	        get: function get() {
	            return this._step;
	        },
	        set: function set(step) {
	            this._step = step;
	        }
	    }]);

	    return Bundle;
	}(_Entity3.default);

	exports.default = Bundle;

/***/ }
/******/ ]);