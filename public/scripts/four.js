"use strict";var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x28,_x29,_x30){var _again=true;_function: while(_again) {var object=_x28,property=_x29,receiver=_x30;desc = parent = getter = undefined;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x28 = parent;_x29 = property;_x30 = receiver;_again = true;continue _function;}}else if("value" in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require == "function" && require;if(!u && a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND",f);}var l=n[o] = {exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require == "function" && require;for(var o=0;o < r.length;o++) s(r[o]);return s;})({1:[function(require,module,exports){ /**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.3.0
 */ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

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
THE SOFTWARE. */ // END HEADER
exports.glMatrix = require("./gl-matrix/common.js");exports.mat2 = require("./gl-matrix/mat2.js");exports.mat2d = require("./gl-matrix/mat2d.js");exports.mat3 = require("./gl-matrix/mat3.js");exports.mat4 = require("./gl-matrix/mat4.js");exports.quat = require("./gl-matrix/quat.js");exports.vec2 = require("./gl-matrix/vec2.js");exports.vec3 = require("./gl-matrix/vec3.js");exports.vec4 = require("./gl-matrix/vec4.js");},{"./gl-matrix/common.js":2,"./gl-matrix/mat2.js":3,"./gl-matrix/mat2d.js":4,"./gl-matrix/mat3.js":5,"./gl-matrix/mat4.js":6,"./gl-matrix/quat.js":7,"./gl-matrix/vec2.js":8,"./gl-matrix/vec3.js":9,"./gl-matrix/vec4.js":10}],2:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

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
THE SOFTWARE. */ /**
 * @class Common utilities
 * @name glMatrix
 */var glMatrix={}; // Constants
glMatrix.EPSILON = 0.000001;glMatrix.ARRAY_TYPE = typeof Float32Array !== 'undefined'?Float32Array:Array;glMatrix.RANDOM = Math.random; /**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */glMatrix.setMatrixArrayType = function(type){GLMAT_ARRAY_TYPE = type;};var degree=Math.PI / 180; /**
* Convert Degree To Radian
*
* @param {Number} Angle in Degrees
*/glMatrix.toRadian = function(a){return a * degree;};module.exports = glMatrix;},{}],3:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

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
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
 * @class 2x2 Matrix
 * @name mat2
 */var mat2={}; /**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */mat2.create = function(){var out=new glMatrix.ARRAY_TYPE(4);out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 1;return out;}; /**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */mat2.clone = function(a){var out=new glMatrix.ARRAY_TYPE(4);out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];return out;}; /**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */mat2.copy = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];return out;}; /**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */mat2.identity = function(out){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 1;return out;}; /**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */mat2.transpose = function(out,a){ // If we are transposing ourselves we can skip a few steps but have to cache some values
if(out === a){var a1=a[1];out[1] = a[2];out[2] = a1;}else {out[0] = a[0];out[1] = a[2];out[2] = a[1];out[3] = a[3];}return out;}; /**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */mat2.invert = function(out,a){var a0=a[0],a1=a[1],a2=a[2],a3=a[3], // Calculate the determinant
det=a0 * a3 - a2 * a1;if(!det){return null;}det = 1.0 / det;out[0] = a3 * det;out[1] = -a1 * det;out[2] = -a2 * det;out[3] = a0 * det;return out;}; /**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */mat2.adjoint = function(out,a){ // Caching this value is nessecary if out == a
var a0=a[0];out[0] = a[3];out[1] = -a[1];out[2] = -a[2];out[3] = a0;return out;}; /**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */mat2.determinant = function(a){return a[0] * a[3] - a[2] * a[1];}; /**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */mat2.multiply = function(out,a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3];var b0=b[0],b1=b[1],b2=b[2],b3=b[3];out[0] = a0 * b0 + a2 * b1;out[1] = a1 * b0 + a3 * b1;out[2] = a0 * b2 + a2 * b3;out[3] = a1 * b2 + a3 * b3;return out;}; /**
 * Alias for {@link mat2.multiply}
 * @function
 */mat2.mul = mat2.multiply; /**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */mat2.rotate = function(out,a,rad){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],s=Math.sin(rad),c=Math.cos(rad);out[0] = a0 * c + a2 * s;out[1] = a1 * c + a3 * s;out[2] = a0 * -s + a2 * c;out[3] = a1 * -s + a3 * c;return out;}; /**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/mat2.scale = function(out,a,v){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],v0=v[0],v1=v[1];out[0] = a0 * v0;out[1] = a1 * v0;out[2] = a2 * v1;out[3] = a3 * v1;return out;}; /**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */mat2.fromRotation = function(out,rad){var s=Math.sin(rad),c=Math.cos(rad);out[0] = c;out[1] = s;out[2] = -s;out[3] = c;return out;}; /**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */mat2.fromScaling = function(out,v){out[0] = v[0];out[1] = 0;out[2] = 0;out[3] = v[1];return out;}; /**
 * Returns a string representation of a mat2
 *
 * @param {mat2} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */mat2.str = function(a){return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';}; /**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */mat2.frob = function(a){return Math.sqrt(Math.pow(a[0],2) + Math.pow(a[1],2) + Math.pow(a[2],2) + Math.pow(a[3],2));}; /**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix 
 * @param {mat2} D the diagonal matrix 
 * @param {mat2} U the upper triangular matrix 
 * @param {mat2} a the input matrix to factorize
 */mat2.LDU = function(L,D,U,a){L[2] = a[2] / a[0];U[0] = a[0];U[1] = a[1];U[3] = a[3] - L[2] * U[1];return [L,D,U];};module.exports = mat2;},{"./common.js":2}],4:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

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
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
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
 */var mat2d={}; /**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */mat2d.create = function(){var out=new glMatrix.ARRAY_TYPE(6);out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 1;out[4] = 0;out[5] = 0;return out;}; /**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */mat2d.clone = function(a){var out=new glMatrix.ARRAY_TYPE(6);out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[4] = a[4];out[5] = a[5];return out;}; /**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */mat2d.copy = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[4] = a[4];out[5] = a[5];return out;}; /**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */mat2d.identity = function(out){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 1;out[4] = 0;out[5] = 0;return out;}; /**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */mat2d.invert = function(out,a){var aa=a[0],ab=a[1],ac=a[2],ad=a[3],atx=a[4],aty=a[5];var det=aa * ad - ab * ac;if(!det){return null;}det = 1.0 / det;out[0] = ad * det;out[1] = -ab * det;out[2] = -ac * det;out[3] = aa * det;out[4] = (ac * aty - ad * atx) * det;out[5] = (ab * atx - aa * aty) * det;return out;}; /**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */mat2d.determinant = function(a){return a[0] * a[3] - a[1] * a[2];}; /**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */mat2d.multiply = function(out,a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],b0=b[0],b1=b[1],b2=b[2],b3=b[3],b4=b[4],b5=b[5];out[0] = a0 * b0 + a2 * b1;out[1] = a1 * b0 + a3 * b1;out[2] = a0 * b2 + a2 * b3;out[3] = a1 * b2 + a3 * b3;out[4] = a0 * b4 + a2 * b5 + a4;out[5] = a1 * b4 + a3 * b5 + a5;return out;}; /**
 * Alias for {@link mat2d.multiply}
 * @function
 */mat2d.mul = mat2d.multiply; /**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */mat2d.rotate = function(out,a,rad){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],s=Math.sin(rad),c=Math.cos(rad);out[0] = a0 * c + a2 * s;out[1] = a1 * c + a3 * s;out[2] = a0 * -s + a2 * c;out[3] = a1 * -s + a3 * c;out[4] = a4;out[5] = a5;return out;}; /**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/mat2d.scale = function(out,a,v){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],v0=v[0],v1=v[1];out[0] = a0 * v0;out[1] = a1 * v0;out[2] = a2 * v1;out[3] = a3 * v1;out[4] = a4;out[5] = a5;return out;}; /**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/mat2d.translate = function(out,a,v){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],v0=v[0],v1=v[1];out[0] = a0;out[1] = a1;out[2] = a2;out[3] = a3;out[4] = a0 * v0 + a2 * v1 + a4;out[5] = a1 * v0 + a3 * v1 + a5;return out;}; /**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */mat2d.fromRotation = function(out,rad){var s=Math.sin(rad),c=Math.cos(rad);out[0] = c;out[1] = s;out[2] = -s;out[3] = c;out[4] = 0;out[5] = 0;return out;}; /**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */mat2d.fromScaling = function(out,v){out[0] = v[0];out[1] = 0;out[2] = 0;out[3] = v[1];out[4] = 0;out[5] = 0;return out;}; /**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */mat2d.fromTranslation = function(out,v){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 1;out[4] = v[0];out[5] = v[1];return out;}; /**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */mat2d.str = function(a){return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';}; /**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */mat2d.frob = function(a){return Math.sqrt(Math.pow(a[0],2) + Math.pow(a[1],2) + Math.pow(a[2],2) + Math.pow(a[3],2) + Math.pow(a[4],2) + Math.pow(a[5],2) + 1);};module.exports = mat2d;},{"./common.js":2}],5:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

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
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
 * @class 3x3 Matrix
 * @name mat3
 */var mat3={}; /**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */mat3.create = function(){var out=new glMatrix.ARRAY_TYPE(9);out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 1;out[5] = 0;out[6] = 0;out[7] = 0;out[8] = 1;return out;}; /**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */mat3.fromMat4 = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[4];out[4] = a[5];out[5] = a[6];out[6] = a[8];out[7] = a[9];out[8] = a[10];return out;}; /**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */mat3.clone = function(a){var out=new glMatrix.ARRAY_TYPE(9);out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[4] = a[4];out[5] = a[5];out[6] = a[6];out[7] = a[7];out[8] = a[8];return out;}; /**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */mat3.copy = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[4] = a[4];out[5] = a[5];out[6] = a[6];out[7] = a[7];out[8] = a[8];return out;}; /**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */mat3.identity = function(out){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 1;out[5] = 0;out[6] = 0;out[7] = 0;out[8] = 1;return out;}; /**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */mat3.transpose = function(out,a){ // If we are transposing ourselves we can skip a few steps but have to cache some values
if(out === a){var a01=a[1],a02=a[2],a12=a[5];out[1] = a[3];out[2] = a[6];out[3] = a01;out[5] = a[7];out[6] = a02;out[7] = a12;}else {out[0] = a[0];out[1] = a[3];out[2] = a[6];out[3] = a[1];out[4] = a[4];out[5] = a[7];out[6] = a[2];out[7] = a[5];out[8] = a[8];}return out;}; /**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */mat3.invert = function(out,a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],b01=a22 * a11 - a12 * a21,b11=-a22 * a10 + a12 * a20,b21=a21 * a10 - a11 * a20, // Calculate the determinant
det=a00 * b01 + a01 * b11 + a02 * b21;if(!det){return null;}det = 1.0 / det;out[0] = b01 * det;out[1] = (-a22 * a01 + a02 * a21) * det;out[2] = (a12 * a01 - a02 * a11) * det;out[3] = b11 * det;out[4] = (a22 * a00 - a02 * a20) * det;out[5] = (-a12 * a00 + a02 * a10) * det;out[6] = b21 * det;out[7] = (-a21 * a00 + a01 * a20) * det;out[8] = (a11 * a00 - a01 * a10) * det;return out;}; /**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */mat3.adjoint = function(out,a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8];out[0] = a11 * a22 - a12 * a21;out[1] = a02 * a21 - a01 * a22;out[2] = a01 * a12 - a02 * a11;out[3] = a12 * a20 - a10 * a22;out[4] = a00 * a22 - a02 * a20;out[5] = a02 * a10 - a00 * a12;out[6] = a10 * a21 - a11 * a20;out[7] = a01 * a20 - a00 * a21;out[8] = a00 * a11 - a01 * a10;return out;}; /**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */mat3.determinant = function(a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8];return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);}; /**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */mat3.multiply = function(out,a,b){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],b00=b[0],b01=b[1],b02=b[2],b10=b[3],b11=b[4],b12=b[5],b20=b[6],b21=b[7],b22=b[8];out[0] = b00 * a00 + b01 * a10 + b02 * a20;out[1] = b00 * a01 + b01 * a11 + b02 * a21;out[2] = b00 * a02 + b01 * a12 + b02 * a22;out[3] = b10 * a00 + b11 * a10 + b12 * a20;out[4] = b10 * a01 + b11 * a11 + b12 * a21;out[5] = b10 * a02 + b11 * a12 + b12 * a22;out[6] = b20 * a00 + b21 * a10 + b22 * a20;out[7] = b20 * a01 + b21 * a11 + b22 * a21;out[8] = b20 * a02 + b21 * a12 + b22 * a22;return out;}; /**
 * Alias for {@link mat3.multiply}
 * @function
 */mat3.mul = mat3.multiply; /**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */mat3.translate = function(out,a,v){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],x=v[0],y=v[1];out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a10;out[4] = a11;out[5] = a12;out[6] = x * a00 + y * a10 + a20;out[7] = x * a01 + y * a11 + a21;out[8] = x * a02 + y * a12 + a22;return out;}; /**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */mat3.rotate = function(out,a,rad){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],s=Math.sin(rad),c=Math.cos(rad);out[0] = c * a00 + s * a10;out[1] = c * a01 + s * a11;out[2] = c * a02 + s * a12;out[3] = c * a10 - s * a00;out[4] = c * a11 - s * a01;out[5] = c * a12 - s * a02;out[6] = a20;out[7] = a21;out[8] = a22;return out;}; /**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/mat3.scale = function(out,a,v){var x=v[0],y=v[1];out[0] = x * a[0];out[1] = x * a[1];out[2] = x * a[2];out[3] = y * a[3];out[4] = y * a[4];out[5] = y * a[5];out[6] = a[6];out[7] = a[7];out[8] = a[8];return out;}; /**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */mat3.fromTranslation = function(out,v){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 1;out[5] = 0;out[6] = v[0];out[7] = v[1];out[8] = 1;return out;}; /**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */mat3.fromRotation = function(out,rad){var s=Math.sin(rad),c=Math.cos(rad);out[0] = c;out[1] = s;out[2] = 0;out[3] = -s;out[4] = c;out[5] = 0;out[6] = 0;out[7] = 0;out[8] = 1;return out;}; /**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */mat3.fromScaling = function(out,v){out[0] = v[0];out[1] = 0;out[2] = 0;out[3] = 0;out[4] = v[1];out[5] = 0;out[6] = 0;out[7] = 0;out[8] = 1;return out;}; /**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/mat3.fromMat2d = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = 0;out[3] = a[2];out[4] = a[3];out[5] = 0;out[6] = a[4];out[7] = a[5];out[8] = 1;return out;}; /**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/mat3.fromQuat = function(out,q){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x + x,y2=y + y,z2=z + z,xx=x * x2,yx=y * x2,yy=y * y2,zx=z * x2,zy=z * y2,zz=z * z2,wx=w * x2,wy=w * y2,wz=w * z2;out[0] = 1 - yy - zz;out[3] = yx - wz;out[6] = zx + wy;out[1] = yx + wz;out[4] = 1 - xx - zz;out[7] = zy - wx;out[2] = zx - wy;out[5] = zy + wx;out[8] = 1 - xx - yy;return out;}; /**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/mat3.normalFromMat4 = function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00 * a11 - a01 * a10,b01=a00 * a12 - a02 * a10,b02=a00 * a13 - a03 * a10,b03=a01 * a12 - a02 * a11,b04=a01 * a13 - a03 * a11,b05=a02 * a13 - a03 * a12,b06=a20 * a31 - a21 * a30,b07=a20 * a32 - a22 * a30,b08=a20 * a33 - a23 * a30,b09=a21 * a32 - a22 * a31,b10=a21 * a33 - a23 * a31,b11=a22 * a33 - a23 * a32, // Calculate the determinant
det=b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;if(!det){return null;}det = 1.0 / det;out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;return out;}; /**
 * Returns a string representation of a mat3
 *
 * @param {mat3} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */mat3.str = function(a){return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';}; /**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */mat3.frob = function(a){return Math.sqrt(Math.pow(a[0],2) + Math.pow(a[1],2) + Math.pow(a[2],2) + Math.pow(a[3],2) + Math.pow(a[4],2) + Math.pow(a[5],2) + Math.pow(a[6],2) + Math.pow(a[7],2) + Math.pow(a[8],2));};module.exports = mat3;},{"./common.js":2}],6:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

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
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
 * @class 4x4 Matrix
 * @name mat4
 */var mat4={}; /**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */mat4.create = function(){var out=new glMatrix.ARRAY_TYPE(16);out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = 1;out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = 1;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */mat4.clone = function(a){var out=new glMatrix.ARRAY_TYPE(16);out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[4] = a[4];out[5] = a[5];out[6] = a[6];out[7] = a[7];out[8] = a[8];out[9] = a[9];out[10] = a[10];out[11] = a[11];out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];return out;}; /**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4.copy = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[4] = a[4];out[5] = a[5];out[6] = a[6];out[7] = a[7];out[8] = a[8];out[9] = a[9];out[10] = a[10];out[11] = a[11];out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];return out;}; /**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */mat4.identity = function(out){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = 1;out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = 1;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4.transpose = function(out,a){ // If we are transposing ourselves we can skip a few steps but have to cache some values
if(out === a){var a01=a[1],a02=a[2],a03=a[3],a12=a[6],a13=a[7],a23=a[11];out[1] = a[4];out[2] = a[8];out[3] = a[12];out[4] = a01;out[6] = a[9];out[7] = a[13];out[8] = a02;out[9] = a12;out[11] = a[14];out[12] = a03;out[13] = a13;out[14] = a23;}else {out[0] = a[0];out[1] = a[4];out[2] = a[8];out[3] = a[12];out[4] = a[1];out[5] = a[5];out[6] = a[9];out[7] = a[13];out[8] = a[2];out[9] = a[6];out[10] = a[10];out[11] = a[14];out[12] = a[3];out[13] = a[7];out[14] = a[11];out[15] = a[15];}return out;}; /**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4.invert = function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00 * a11 - a01 * a10,b01=a00 * a12 - a02 * a10,b02=a00 * a13 - a03 * a10,b03=a01 * a12 - a02 * a11,b04=a01 * a13 - a03 * a11,b05=a02 * a13 - a03 * a12,b06=a20 * a31 - a21 * a30,b07=a20 * a32 - a22 * a30,b08=a20 * a33 - a23 * a30,b09=a21 * a32 - a22 * a31,b10=a21 * a33 - a23 * a31,b11=a22 * a33 - a23 * a32, // Calculate the determinant
det=b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;if(!det){return null;}det = 1.0 / det;out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;return out;}; /**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4.adjoint = function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15];out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);return out;}; /**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */mat4.determinant = function(a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00 * a11 - a01 * a10,b01=a00 * a12 - a02 * a10,b02=a00 * a13 - a03 * a10,b03=a01 * a12 - a02 * a11,b04=a01 * a13 - a03 * a11,b05=a02 * a13 - a03 * a12,b06=a20 * a31 - a21 * a30,b07=a20 * a32 - a22 * a30,b08=a20 * a33 - a23 * a30,b09=a21 * a32 - a22 * a31,b10=a21 * a33 - a23 * a31,b11=a22 * a33 - a23 * a32; // Calculate the determinant
return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;}; /**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */mat4.multiply = function(out,a,b){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15]; // Cache only the current line of the second matrix
var b0=b[0],b1=b[1],b2=b[2],b3=b[3];out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;return out;}; /**
 * Alias for {@link mat4.multiply}
 * @function
 */mat4.mul = mat4.multiply; /**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */mat4.translate = function(out,a,v){var x=v[0],y=v[1],z=v[2],a00,a01,a02,a03,a10,a11,a12,a13,a20,a21,a22,a23;if(a === out){out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];}else {a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;out[12] = a00 * x + a10 * y + a20 * z + a[12];out[13] = a01 * x + a11 * y + a21 * z + a[13];out[14] = a02 * x + a12 * y + a22 * z + a[14];out[15] = a03 * x + a13 * y + a23 * z + a[15];}return out;}; /**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/mat4.scale = function(out,a,v){var x=v[0],y=v[1],z=v[2];out[0] = a[0] * x;out[1] = a[1] * x;out[2] = a[2] * x;out[3] = a[3] * x;out[4] = a[4] * y;out[5] = a[5] * y;out[6] = a[6] * y;out[7] = a[7] * y;out[8] = a[8] * z;out[9] = a[9] * z;out[10] = a[10] * z;out[11] = a[11] * z;out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];return out;}; /**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */mat4.rotate = function(out,a,rad,axis){var x=axis[0],y=axis[1],z=axis[2],len=Math.sqrt(x * x + y * y + z * z),s,c,t,a00,a01,a02,a03,a10,a11,a12,a13,a20,a21,a22,a23,b00,b01,b02,b10,b11,b12,b20,b21,b22;if(Math.abs(len) < glMatrix.EPSILON){return null;}len = 1 / len;x *= len;y *= len;z *= len;s = Math.sin(rad);c = Math.cos(rad);t = 1 - c;a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11]; // Construct the elements of the rotation matrix
b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c; // Perform rotation-specific matrix multiplication
out[0] = a00 * b00 + a10 * b01 + a20 * b02;out[1] = a01 * b00 + a11 * b01 + a21 * b02;out[2] = a02 * b00 + a12 * b01 + a22 * b02;out[3] = a03 * b00 + a13 * b01 + a23 * b02;out[4] = a00 * b10 + a10 * b11 + a20 * b12;out[5] = a01 * b10 + a11 * b11 + a21 * b12;out[6] = a02 * b10 + a12 * b11 + a22 * b12;out[7] = a03 * b10 + a13 * b11 + a23 * b12;out[8] = a00 * b20 + a10 * b21 + a20 * b22;out[9] = a01 * b20 + a11 * b21 + a21 * b22;out[10] = a02 * b20 + a12 * b21 + a22 * b22;out[11] = a03 * b20 + a13 * b21 + a23 * b22;if(a !== out){ // If the source and destination differ, copy the unchanged last row
out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];}return out;}; /**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4.rotateX = function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11];if(a !== out){ // If the source and destination differ, copy the unchanged rows
out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];} // Perform axis-specific matrix multiplication
out[4] = a10 * c + a20 * s;out[5] = a11 * c + a21 * s;out[6] = a12 * c + a22 * s;out[7] = a13 * c + a23 * s;out[8] = a20 * c - a10 * s;out[9] = a21 * c - a11 * s;out[10] = a22 * c - a12 * s;out[11] = a23 * c - a13 * s;return out;}; /**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4.rotateY = function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a00=a[0],a01=a[1],a02=a[2],a03=a[3],a20=a[8],a21=a[9],a22=a[10],a23=a[11];if(a !== out){ // If the source and destination differ, copy the unchanged rows
out[4] = a[4];out[5] = a[5];out[6] = a[6];out[7] = a[7];out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];} // Perform axis-specific matrix multiplication
out[0] = a00 * c - a20 * s;out[1] = a01 * c - a21 * s;out[2] = a02 * c - a22 * s;out[3] = a03 * c - a23 * s;out[8] = a00 * s + a20 * c;out[9] = a01 * s + a21 * c;out[10] = a02 * s + a22 * c;out[11] = a03 * s + a23 * c;return out;}; /**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4.rotateZ = function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7];if(a !== out){ // If the source and destination differ, copy the unchanged last row
out[8] = a[8];out[9] = a[9];out[10] = a[10];out[11] = a[11];out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];} // Perform axis-specific matrix multiplication
out[0] = a00 * c + a10 * s;out[1] = a01 * c + a11 * s;out[2] = a02 * c + a12 * s;out[3] = a03 * c + a13 * s;out[4] = a10 * c - a00 * s;out[5] = a11 * c - a01 * s;out[6] = a12 * c - a02 * s;out[7] = a13 * c - a03 * s;return out;}; /**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */mat4.fromTranslation = function(out,v){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = 1;out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = 1;out[11] = 0;out[12] = v[0];out[13] = v[1];out[14] = v[2];out[15] = 1;return out;}; /**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */mat4.fromScaling = function(out,v){out[0] = v[0];out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = v[1];out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = v[2];out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
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
 */mat4.fromRotation = function(out,rad,axis){var x=axis[0],y=axis[1],z=axis[2],len=Math.sqrt(x * x + y * y + z * z),s,c,t;if(Math.abs(len) < glMatrix.EPSILON){return null;}len = 1 / len;x *= len;y *= len;z *= len;s = Math.sin(rad);c = Math.cos(rad);t = 1 - c; // Perform rotation-specific matrix multiplication
out[0] = x * x * t + c;out[1] = y * x * t + z * s;out[2] = z * x * t - y * s;out[3] = 0;out[4] = x * y * t - z * s;out[5] = y * y * t + c;out[6] = z * y * t + x * s;out[7] = 0;out[8] = x * z * t + y * s;out[9] = y * z * t - x * s;out[10] = z * z * t + c;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4.fromXRotation = function(out,rad){var s=Math.sin(rad),c=Math.cos(rad); // Perform axis-specific matrix multiplication
out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = c;out[6] = s;out[7] = 0;out[8] = 0;out[9] = -s;out[10] = c;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4.fromYRotation = function(out,rad){var s=Math.sin(rad),c=Math.cos(rad); // Perform axis-specific matrix multiplication
out[0] = c;out[1] = 0;out[2] = -s;out[3] = 0;out[4] = 0;out[5] = 1;out[6] = 0;out[7] = 0;out[8] = s;out[9] = 0;out[10] = c;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4.fromZRotation = function(out,rad){var s=Math.sin(rad),c=Math.cos(rad); // Perform axis-specific matrix multiplication
out[0] = c;out[1] = s;out[2] = 0;out[3] = 0;out[4] = -s;out[5] = c;out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = 1;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
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
 */mat4.fromRotationTranslation = function(out,q,v){ // Quaternion math
var x=q[0],y=q[1],z=q[2],w=q[3],x2=x + x,y2=y + y,z2=z + z,xx=x * x2,xy=x * y2,xz=x * z2,yy=y * y2,yz=y * z2,zz=z * z2,wx=w * x2,wy=w * y2,wz=w * z2;out[0] = 1 - (yy + zz);out[1] = xy + wz;out[2] = xz - wy;out[3] = 0;out[4] = xy - wz;out[5] = 1 - (xx + zz);out[6] = yz + wx;out[7] = 0;out[8] = xz + wy;out[9] = yz - wx;out[10] = 1 - (xx + yy);out[11] = 0;out[12] = v[0];out[13] = v[1];out[14] = v[2];out[15] = 1;return out;}; /**
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
 */mat4.fromRotationTranslationScale = function(out,q,v,s){ // Quaternion math
var x=q[0],y=q[1],z=q[2],w=q[3],x2=x + x,y2=y + y,z2=z + z,xx=x * x2,xy=x * y2,xz=x * z2,yy=y * y2,yz=y * z2,zz=z * z2,wx=w * x2,wy=w * y2,wz=w * z2,sx=s[0],sy=s[1],sz=s[2];out[0] = (1 - (yy + zz)) * sx;out[1] = (xy + wz) * sx;out[2] = (xz - wy) * sx;out[3] = 0;out[4] = (xy - wz) * sy;out[5] = (1 - (xx + zz)) * sy;out[6] = (yz + wx) * sy;out[7] = 0;out[8] = (xz + wy) * sz;out[9] = (yz - wx) * sz;out[10] = (1 - (xx + yy)) * sz;out[11] = 0;out[12] = v[0];out[13] = v[1];out[14] = v[2];out[15] = 1;return out;}; /**
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
 */mat4.fromRotationTranslationScaleOrigin = function(out,q,v,s,o){ // Quaternion math
var x=q[0],y=q[1],z=q[2],w=q[3],x2=x + x,y2=y + y,z2=z + z,xx=x * x2,xy=x * y2,xz=x * z2,yy=y * y2,yz=y * z2,zz=z * z2,wx=w * x2,wy=w * y2,wz=w * z2,sx=s[0],sy=s[1],sz=s[2],ox=o[0],oy=o[1],oz=o[2];out[0] = (1 - (yy + zz)) * sx;out[1] = (xy + wz) * sx;out[2] = (xz - wy) * sx;out[3] = 0;out[4] = (xy - wz) * sy;out[5] = (1 - (xx + zz)) * sy;out[6] = (yz + wx) * sy;out[7] = 0;out[8] = (xz + wy) * sz;out[9] = (yz - wx) * sz;out[10] = (1 - (xx + yy)) * sz;out[11] = 0;out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);out[15] = 1;return out;};mat4.fromQuat = function(out,q){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x + x,y2=y + y,z2=z + z,xx=x * x2,yx=y * x2,yy=y * y2,zx=z * x2,zy=z * y2,zz=z * z2,wx=w * x2,wy=w * y2,wz=w * z2;out[0] = 1 - yy - zz;out[1] = yx + wz;out[2] = zx - wy;out[3] = 0;out[4] = yx - wz;out[5] = 1 - xx - zz;out[6] = zy + wx;out[7] = 0;out[8] = zx + wy;out[9] = zy - wx;out[10] = 1 - xx - yy;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
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
 */mat4.frustum = function(out,left,right,bottom,top,near,far){var rl=1 / (right - left),tb=1 / (top - bottom),nf=1 / (near - far);out[0] = near * 2 * rl;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = near * 2 * tb;out[6] = 0;out[7] = 0;out[8] = (right + left) * rl;out[9] = (top + bottom) * tb;out[10] = (far + near) * nf;out[11] = -1;out[12] = 0;out[13] = 0;out[14] = far * near * 2 * nf;out[15] = 0;return out;}; /**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */mat4.perspective = function(out,fovy,aspect,near,far){var f=1.0 / Math.tan(fovy / 2),nf=1 / (near - far);out[0] = f / aspect;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = f;out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = (far + near) * nf;out[11] = -1;out[12] = 0;out[13] = 0;out[14] = 2 * far * near * nf;out[15] = 0;return out;}; /**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */mat4.perspectiveFromFieldOfView = function(out,fov,near,far){var upTan=Math.tan(fov.upDegrees * Math.PI / 180.0),downTan=Math.tan(fov.downDegrees * Math.PI / 180.0),leftTan=Math.tan(fov.leftDegrees * Math.PI / 180.0),rightTan=Math.tan(fov.rightDegrees * Math.PI / 180.0),xScale=2.0 / (leftTan + rightTan),yScale=2.0 / (upTan + downTan);out[0] = xScale;out[1] = 0.0;out[2] = 0.0;out[3] = 0.0;out[4] = 0.0;out[5] = yScale;out[6] = 0.0;out[7] = 0.0;out[8] = -((leftTan - rightTan) * xScale * 0.5);out[9] = (upTan - downTan) * yScale * 0.5;out[10] = far / (near - far);out[11] = -1.0;out[12] = 0.0;out[13] = 0.0;out[14] = far * near / (near - far);out[15] = 0.0;return out;}; /**
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
 */mat4.ortho = function(out,left,right,bottom,top,near,far){var lr=1 / (left - right),bt=1 / (bottom - top),nf=1 / (near - far);out[0] = -2 * lr;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = -2 * bt;out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = 2 * nf;out[11] = 0;out[12] = (left + right) * lr;out[13] = (top + bottom) * bt;out[14] = (far + near) * nf;out[15] = 1;return out;}; /**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */mat4.lookAt = function(out,eye,center,up){var x0,x1,x2,y0,y1,y2,z0,z1,z2,len,eyex=eye[0],eyey=eye[1],eyez=eye[2],upx=up[0],upy=up[1],upz=up[2],centerx=center[0],centery=center[1],centerz=center[2];if(Math.abs(eyex - centerx) < glMatrix.EPSILON && Math.abs(eyey - centery) < glMatrix.EPSILON && Math.abs(eyez - centerz) < glMatrix.EPSILON){return mat4.identity(out);}z0 = eyex - centerx;z1 = eyey - centery;z2 = eyez - centerz;len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);z0 *= len;z1 *= len;z2 *= len;x0 = upy * z2 - upz * z1;x1 = upz * z0 - upx * z2;x2 = upx * z1 - upy * z0;len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);if(!len){x0 = 0;x1 = 0;x2 = 0;}else {len = 1 / len;x0 *= len;x1 *= len;x2 *= len;}y0 = z1 * x2 - z2 * x1;y1 = z2 * x0 - z0 * x2;y2 = z0 * x1 - z1 * x0;len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);if(!len){y0 = 0;y1 = 0;y2 = 0;}else {len = 1 / len;y0 *= len;y1 *= len;y2 *= len;}out[0] = x0;out[1] = y0;out[2] = z0;out[3] = 0;out[4] = x1;out[5] = y1;out[6] = z1;out[7] = 0;out[8] = x2;out[9] = y2;out[10] = z2;out[11] = 0;out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);out[15] = 1;return out;}; /**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */mat4.str = function(a){return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';}; /**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */mat4.frob = function(a){return Math.sqrt(Math.pow(a[0],2) + Math.pow(a[1],2) + Math.pow(a[2],2) + Math.pow(a[3],2) + Math.pow(a[4],2) + Math.pow(a[5],2) + Math.pow(a[6],2) + Math.pow(a[7],2) + Math.pow(a[8],2) + Math.pow(a[9],2) + Math.pow(a[10],2) + Math.pow(a[11],2) + Math.pow(a[12],2) + Math.pow(a[13],2) + Math.pow(a[14],2) + Math.pow(a[15],2));};module.exports = mat4;},{"./common.js":2}],7:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

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
THE SOFTWARE. */var glMatrix=require("./common.js");var mat3=require("./mat3.js");var vec3=require("./vec3.js");var vec4=require("./vec4.js"); /**
 * @class Quaternion
 * @name quat
 */var quat={}; /**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */quat.create = function(){var out=new glMatrix.ARRAY_TYPE(4);out[0] = 0;out[1] = 0;out[2] = 0;out[3] = 1;return out;}; /**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */quat.rotationTo = (function(){var tmpvec3=vec3.create();var xUnitVec3=vec3.fromValues(1,0,0);var yUnitVec3=vec3.fromValues(0,1,0);return function(out,a,b){var dot=vec3.dot(a,b);if(dot < -0.999999){vec3.cross(tmpvec3,xUnitVec3,a);if(vec3.length(tmpvec3) < 0.000001)vec3.cross(tmpvec3,yUnitVec3,a);vec3.normalize(tmpvec3,tmpvec3);quat.setAxisAngle(out,tmpvec3,Math.PI);return out;}else if(dot > 0.999999){out[0] = 0;out[1] = 0;out[2] = 0;out[3] = 1;return out;}else {vec3.cross(tmpvec3,a,b);out[0] = tmpvec3[0];out[1] = tmpvec3[1];out[2] = tmpvec3[2];out[3] = 1 + dot;return quat.normalize(out,out);}};})(); /**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */quat.setAxes = (function(){var matr=mat3.create();return function(out,view,right,up){matr[0] = right[0];matr[3] = right[1];matr[6] = right[2];matr[1] = up[0];matr[4] = up[1];matr[7] = up[2];matr[2] = -view[0];matr[5] = -view[1];matr[8] = -view[2];return quat.normalize(out,quat.fromMat3(out,matr));};})(); /**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */quat.clone = vec4.clone; /**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */quat.fromValues = vec4.fromValues; /**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */quat.copy = vec4.copy; /**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */quat.set = vec4.set; /**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */quat.identity = function(out){out[0] = 0;out[1] = 0;out[2] = 0;out[3] = 1;return out;}; /**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/quat.setAxisAngle = function(out,axis,rad){rad = rad * 0.5;var s=Math.sin(rad);out[0] = s * axis[0];out[1] = s * axis[1];out[2] = s * axis[2];out[3] = Math.cos(rad);return out;}; /**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */quat.add = vec4.add; /**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */quat.multiply = function(out,a,b){var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=b[3];out[0] = ax * bw + aw * bx + ay * bz - az * by;out[1] = ay * bw + aw * by + az * bx - ax * bz;out[2] = az * bw + aw * bz + ax * by - ay * bx;out[3] = aw * bw - ax * bx - ay * by - az * bz;return out;}; /**
 * Alias for {@link quat.multiply}
 * @function
 */quat.mul = quat.multiply; /**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */quat.scale = vec4.scale; /**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */quat.rotateX = function(out,a,rad){rad *= 0.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=Math.sin(rad),bw=Math.cos(rad);out[0] = ax * bw + aw * bx;out[1] = ay * bw + az * bx;out[2] = az * bw - ay * bx;out[3] = aw * bw - ax * bx;return out;}; /**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */quat.rotateY = function(out,a,rad){rad *= 0.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],by=Math.sin(rad),bw=Math.cos(rad);out[0] = ax * bw - az * by;out[1] = ay * bw + aw * by;out[2] = az * bw + ax * by;out[3] = aw * bw - ay * by;return out;}; /**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */quat.rotateZ = function(out,a,rad){rad *= 0.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],bz=Math.sin(rad),bw=Math.cos(rad);out[0] = ax * bw + ay * bz;out[1] = ay * bw - ax * bz;out[2] = az * bw + aw * bz;out[3] = aw * bw - az * bz;return out;}; /**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */quat.calculateW = function(out,a){var x=a[0],y=a[1],z=a[2];out[0] = x;out[1] = y;out[2] = z;out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));return out;}; /**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */quat.dot = vec4.dot; /**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */quat.lerp = vec4.lerp; /**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */quat.slerp = function(out,a,b,t){ // benchmarks:
//    http://jsperf.com/quaternion-slerp-implementations
var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=b[3];var omega,cosom,sinom,scale0,scale1; // calc cosine
cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)
if(cosom < 0.0){cosom = -cosom;bx = -bx;by = -by;bz = -bz;bw = -bw;} // calculate coefficients
if(1.0 - cosom > 0.000001){ // standard case (slerp)
omega = Math.acos(cosom);sinom = Math.sin(omega);scale0 = Math.sin((1.0 - t) * omega) / sinom;scale1 = Math.sin(t * omega) / sinom;}else { // "from" and "to" quaternions are very close 
//  ... so we can do a linear interpolation
scale0 = 1.0 - t;scale1 = t;} // calculate final values
out[0] = scale0 * ax + scale1 * bx;out[1] = scale0 * ay + scale1 * by;out[2] = scale0 * az + scale1 * bz;out[3] = scale0 * aw + scale1 * bw;return out;}; /**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */quat.sqlerp = (function(){var temp1=quat.create();var temp2=quat.create();return function(out,a,b,c,d,t){quat.slerp(temp1,a,d,t);quat.slerp(temp2,b,c,t);quat.slerp(out,temp1,temp2,2 * t * (1 - t));return out;};})(); /**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */quat.invert = function(out,a){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],dot=a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,invDot=dot?1.0 / dot:0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
out[0] = -a0 * invDot;out[1] = -a1 * invDot;out[2] = -a2 * invDot;out[3] = a3 * invDot;return out;}; /**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */quat.conjugate = function(out,a){out[0] = -a[0];out[1] = -a[1];out[2] = -a[2];out[3] = a[3];return out;}; /**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */quat.length = vec4.length; /**
 * Alias for {@link quat.length}
 * @function
 */quat.len = quat.length; /**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */quat.squaredLength = vec4.squaredLength; /**
 * Alias for {@link quat.squaredLength}
 * @function
 */quat.sqrLen = quat.squaredLength; /**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */quat.normalize = vec4.normalize; /**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */quat.fromMat3 = function(out,m){ // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
// article "Quaternion Calculus and Fast Animation".
var fTrace=m[0] + m[4] + m[8];var fRoot;if(fTrace > 0.0){ // |w| > 1/2, may as well choose w > 1/2
fRoot = Math.sqrt(fTrace + 1.0); // 2w
out[3] = 0.5 * fRoot;fRoot = 0.5 / fRoot; // 1/(4w)
out[0] = (m[5] - m[7]) * fRoot;out[1] = (m[6] - m[2]) * fRoot;out[2] = (m[1] - m[3]) * fRoot;}else { // |w| <= 1/2
var i=0;if(m[4] > m[0])i = 1;if(m[8] > m[i * 3 + i])i = 2;var j=(i + 1) % 3;var k=(i + 2) % 3;fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);out[i] = 0.5 * fRoot;fRoot = 0.5 / fRoot;out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;}return out;}; /**
 * Returns a string representation of a quatenion
 *
 * @param {quat} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */quat.str = function(a){return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';};module.exports = quat;},{"./common.js":2,"./mat3.js":5,"./vec3.js":9,"./vec4.js":10}],8:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

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
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
 * @class 2 Dimensional Vector
 * @name vec2
 */var vec2={}; /**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */vec2.create = function(){var out=new glMatrix.ARRAY_TYPE(2);out[0] = 0;out[1] = 0;return out;}; /**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */vec2.clone = function(a){var out=new glMatrix.ARRAY_TYPE(2);out[0] = a[0];out[1] = a[1];return out;}; /**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */vec2.fromValues = function(x,y){var out=new glMatrix.ARRAY_TYPE(2);out[0] = x;out[1] = y;return out;}; /**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */vec2.copy = function(out,a){out[0] = a[0];out[1] = a[1];return out;}; /**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */vec2.set = function(out,x,y){out[0] = x;out[1] = y;return out;}; /**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2.add = function(out,a,b){out[0] = a[0] + b[0];out[1] = a[1] + b[1];return out;}; /**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2.subtract = function(out,a,b){out[0] = a[0] - b[0];out[1] = a[1] - b[1];return out;}; /**
 * Alias for {@link vec2.subtract}
 * @function
 */vec2.sub = vec2.subtract; /**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2.multiply = function(out,a,b){out[0] = a[0] * b[0];out[1] = a[1] * b[1];return out;}; /**
 * Alias for {@link vec2.multiply}
 * @function
 */vec2.mul = vec2.multiply; /**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2.divide = function(out,a,b){out[0] = a[0] / b[0];out[1] = a[1] / b[1];return out;}; /**
 * Alias for {@link vec2.divide}
 * @function
 */vec2.div = vec2.divide; /**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2.min = function(out,a,b){out[0] = Math.min(a[0],b[0]);out[1] = Math.min(a[1],b[1]);return out;}; /**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2.max = function(out,a,b){out[0] = Math.max(a[0],b[0]);out[1] = Math.max(a[1],b[1]);return out;}; /**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */vec2.scale = function(out,a,b){out[0] = a[0] * b;out[1] = a[1] * b;return out;}; /**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */vec2.scaleAndAdd = function(out,a,b,scale){out[0] = a[0] + b[0] * scale;out[1] = a[1] + b[1] * scale;return out;}; /**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */vec2.distance = function(a,b){var x=b[0] - a[0],y=b[1] - a[1];return Math.sqrt(x * x + y * y);}; /**
 * Alias for {@link vec2.distance}
 * @function
 */vec2.dist = vec2.distance; /**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */vec2.squaredDistance = function(a,b){var x=b[0] - a[0],y=b[1] - a[1];return x * x + y * y;}; /**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */vec2.sqrDist = vec2.squaredDistance; /**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */vec2.length = function(a){var x=a[0],y=a[1];return Math.sqrt(x * x + y * y);}; /**
 * Alias for {@link vec2.length}
 * @function
 */vec2.len = vec2.length; /**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */vec2.squaredLength = function(a){var x=a[0],y=a[1];return x * x + y * y;}; /**
 * Alias for {@link vec2.squaredLength}
 * @function
 */vec2.sqrLen = vec2.squaredLength; /**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */vec2.negate = function(out,a){out[0] = -a[0];out[1] = -a[1];return out;}; /**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */vec2.inverse = function(out,a){out[0] = 1.0 / a[0];out[1] = 1.0 / a[1];return out;}; /**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */vec2.normalize = function(out,a){var x=a[0],y=a[1];var len=x * x + y * y;if(len > 0){ //TODO: evaluate use of glm_invsqrt here?
len = 1 / Math.sqrt(len);out[0] = a[0] * len;out[1] = a[1] * len;}return out;}; /**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */vec2.dot = function(a,b){return a[0] * b[0] + a[1] * b[1];}; /**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */vec2.cross = function(out,a,b){var z=a[0] * b[1] - a[1] * b[0];out[0] = out[1] = 0;out[2] = z;return out;}; /**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */vec2.lerp = function(out,a,b,t){var ax=a[0],ay=a[1];out[0] = ax + t * (b[0] - ax);out[1] = ay + t * (b[1] - ay);return out;}; /**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */vec2.random = function(out,scale){scale = scale || 1.0;var r=glMatrix.RANDOM() * 2.0 * Math.PI;out[0] = Math.cos(r) * scale;out[1] = Math.sin(r) * scale;return out;}; /**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */vec2.transformMat2 = function(out,a,m){var x=a[0],y=a[1];out[0] = m[0] * x + m[2] * y;out[1] = m[1] * x + m[3] * y;return out;}; /**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */vec2.transformMat2d = function(out,a,m){var x=a[0],y=a[1];out[0] = m[0] * x + m[2] * y + m[4];out[1] = m[1] * x + m[3] * y + m[5];return out;}; /**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */vec2.transformMat3 = function(out,a,m){var x=a[0],y=a[1];out[0] = m[0] * x + m[3] * y + m[6];out[1] = m[1] * x + m[4] * y + m[7];return out;}; /**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */vec2.transformMat4 = function(out,a,m){var x=a[0],y=a[1];out[0] = m[0] * x + m[4] * y + m[12];out[1] = m[1] * x + m[5] * y + m[13];return out;}; /**
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
 */vec2.forEach = (function(){var vec=vec2.create();return function(a,stride,offset,count,fn,arg){var i,l;if(!stride){stride = 2;}if(!offset){offset = 0;}if(count){l = Math.min(count * stride + offset,a.length);}else {l = a.length;}for(i = offset;i < l;i += stride) {vec[0] = a[i];vec[1] = a[i + 1];fn(vec,vec,arg);a[i] = vec[0];a[i + 1] = vec[1];}return a;};})(); /**
 * Returns a string representation of a vector
 *
 * @param {vec2} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */vec2.str = function(a){return 'vec2(' + a[0] + ', ' + a[1] + ')';};module.exports = vec2;},{"./common.js":2}],9:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

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
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
 * @class 3 Dimensional Vector
 * @name vec3
 */var vec3={}; /**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */vec3.create = function(){var out=new glMatrix.ARRAY_TYPE(3);out[0] = 0;out[1] = 0;out[2] = 0;return out;}; /**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */vec3.clone = function(a){var out=new glMatrix.ARRAY_TYPE(3);out[0] = a[0];out[1] = a[1];out[2] = a[2];return out;}; /**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */vec3.fromValues = function(x,y,z){var out=new glMatrix.ARRAY_TYPE(3);out[0] = x;out[1] = y;out[2] = z;return out;}; /**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */vec3.copy = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];return out;}; /**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */vec3.set = function(out,x,y,z){out[0] = x;out[1] = y;out[2] = z;return out;}; /**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.add = function(out,a,b){out[0] = a[0] + b[0];out[1] = a[1] + b[1];out[2] = a[2] + b[2];return out;}; /**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.subtract = function(out,a,b){out[0] = a[0] - b[0];out[1] = a[1] - b[1];out[2] = a[2] - b[2];return out;}; /**
 * Alias for {@link vec3.subtract}
 * @function
 */vec3.sub = vec3.subtract; /**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.multiply = function(out,a,b){out[0] = a[0] * b[0];out[1] = a[1] * b[1];out[2] = a[2] * b[2];return out;}; /**
 * Alias for {@link vec3.multiply}
 * @function
 */vec3.mul = vec3.multiply; /**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.divide = function(out,a,b){out[0] = a[0] / b[0];out[1] = a[1] / b[1];out[2] = a[2] / b[2];return out;}; /**
 * Alias for {@link vec3.divide}
 * @function
 */vec3.div = vec3.divide; /**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.min = function(out,a,b){out[0] = Math.min(a[0],b[0]);out[1] = Math.min(a[1],b[1]);out[2] = Math.min(a[2],b[2]);return out;}; /**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.max = function(out,a,b){out[0] = Math.max(a[0],b[0]);out[1] = Math.max(a[1],b[1]);out[2] = Math.max(a[2],b[2]);return out;}; /**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */vec3.scale = function(out,a,b){out[0] = a[0] * b;out[1] = a[1] * b;out[2] = a[2] * b;return out;}; /**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */vec3.scaleAndAdd = function(out,a,b,scale){out[0] = a[0] + b[0] * scale;out[1] = a[1] + b[1] * scale;out[2] = a[2] + b[2] * scale;return out;}; /**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */vec3.distance = function(a,b){var x=b[0] - a[0],y=b[1] - a[1],z=b[2] - a[2];return Math.sqrt(x * x + y * y + z * z);}; /**
 * Alias for {@link vec3.distance}
 * @function
 */vec3.dist = vec3.distance; /**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */vec3.squaredDistance = function(a,b){var x=b[0] - a[0],y=b[1] - a[1],z=b[2] - a[2];return x * x + y * y + z * z;}; /**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */vec3.sqrDist = vec3.squaredDistance; /**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */vec3.length = function(a){var x=a[0],y=a[1],z=a[2];return Math.sqrt(x * x + y * y + z * z);}; /**
 * Alias for {@link vec3.length}
 * @function
 */vec3.len = vec3.length; /**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */vec3.squaredLength = function(a){var x=a[0],y=a[1],z=a[2];return x * x + y * y + z * z;}; /**
 * Alias for {@link vec3.squaredLength}
 * @function
 */vec3.sqrLen = vec3.squaredLength; /**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */vec3.negate = function(out,a){out[0] = -a[0];out[1] = -a[1];out[2] = -a[2];return out;}; /**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */vec3.inverse = function(out,a){out[0] = 1.0 / a[0];out[1] = 1.0 / a[1];out[2] = 1.0 / a[2];return out;}; /**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */vec3.normalize = function(out,a){var x=a[0],y=a[1],z=a[2];var len=x * x + y * y + z * z;if(len > 0){ //TODO: evaluate use of glm_invsqrt here?
len = 1 / Math.sqrt(len);out[0] = a[0] * len;out[1] = a[1] * len;out[2] = a[2] * len;}return out;}; /**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */vec3.dot = function(a,b){return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];}; /**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.cross = function(out,a,b){var ax=a[0],ay=a[1],az=a[2],bx=b[0],by=b[1],bz=b[2];out[0] = ay * bz - az * by;out[1] = az * bx - ax * bz;out[2] = ax * by - ay * bx;return out;}; /**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */vec3.lerp = function(out,a,b,t){var ax=a[0],ay=a[1],az=a[2];out[0] = ax + t * (b[0] - ax);out[1] = ay + t * (b[1] - ay);out[2] = az + t * (b[2] - az);return out;}; /**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */vec3.hermite = function(out,a,b,c,d,t){var factorTimes2=t * t,factor1=factorTimes2 * (2 * t - 3) + 1,factor2=factorTimes2 * (t - 2) + t,factor3=factorTimes2 * (t - 1),factor4=factorTimes2 * (3 - 2 * t);out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;return out;}; /**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */vec3.bezier = function(out,a,b,c,d,t){var inverseFactor=1 - t,inverseFactorTimesTwo=inverseFactor * inverseFactor,factorTimes2=t * t,factor1=inverseFactorTimesTwo * inverseFactor,factor2=3 * t * inverseFactorTimesTwo,factor3=3 * factorTimes2 * inverseFactor,factor4=factorTimes2 * t;out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;return out;}; /**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */vec3.random = function(out,scale){scale = scale || 1.0;var r=glMatrix.RANDOM() * 2.0 * Math.PI;var z=glMatrix.RANDOM() * 2.0 - 1.0;var zScale=Math.sqrt(1.0 - z * z) * scale;out[0] = Math.cos(r) * zScale;out[1] = Math.sin(r) * zScale;out[2] = z * scale;return out;}; /**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */vec3.transformMat4 = function(out,a,m){var x=a[0],y=a[1],z=a[2],w=m[3] * x + m[7] * y + m[11] * z + m[15];w = w || 1.0;out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;return out;}; /**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */vec3.transformMat3 = function(out,a,m){var x=a[0],y=a[1],z=a[2];out[0] = x * m[0] + y * m[3] + z * m[6];out[1] = x * m[1] + y * m[4] + z * m[7];out[2] = x * m[2] + y * m[5] + z * m[8];return out;}; /**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */vec3.transformQuat = function(out,a,q){ // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
var x=a[0],y=a[1],z=a[2],qx=q[0],qy=q[1],qz=q[2],qw=q[3], // calculate quat * vec
ix=qw * x + qy * z - qz * y,iy=qw * y + qz * x - qx * z,iz=qw * z + qx * y - qy * x,iw=-qx * x - qy * y - qz * z; // calculate result * inverse quat
out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;return out;}; /**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */vec3.rotateX = function(out,a,b,c){var p=[],r=[]; //Translate point to the origin
p[0] = a[0] - b[0];p[1] = a[1] - b[1];p[2] = a[2] - b[2]; //perform rotation
r[0] = p[0];r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position
out[0] = r[0] + b[0];out[1] = r[1] + b[1];out[2] = r[2] + b[2];return out;}; /**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */vec3.rotateY = function(out,a,b,c){var p=[],r=[]; //Translate point to the origin
p[0] = a[0] - b[0];p[1] = a[1] - b[1];p[2] = a[2] - b[2]; //perform rotation
r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);r[1] = p[1];r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position
out[0] = r[0] + b[0];out[1] = r[1] + b[1];out[2] = r[2] + b[2];return out;}; /**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */vec3.rotateZ = function(out,a,b,c){var p=[],r=[]; //Translate point to the origin
p[0] = a[0] - b[0];p[1] = a[1] - b[1];p[2] = a[2] - b[2]; //perform rotation
r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);r[2] = p[2]; //translate to correct position
out[0] = r[0] + b[0];out[1] = r[1] + b[1];out[2] = r[2] + b[2];return out;}; /**
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
 */vec3.forEach = (function(){var vec=vec3.create();return function(a,stride,offset,count,fn,arg){var i,l;if(!stride){stride = 3;}if(!offset){offset = 0;}if(count){l = Math.min(count * stride + offset,a.length);}else {l = a.length;}for(i = offset;i < l;i += stride) {vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];fn(vec,vec,arg);a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];}return a;};})(); /**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */vec3.angle = function(a,b){var tempA=vec3.fromValues(a[0],a[1],a[2]);var tempB=vec3.fromValues(b[0],b[1],b[2]);vec3.normalize(tempA,tempA);vec3.normalize(tempB,tempB);var cosine=vec3.dot(tempA,tempB);if(cosine > 1.0){return 0;}else {return Math.acos(cosine);}}; /**
 * Returns a string representation of a vector
 *
 * @param {vec3} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */vec3.str = function(a){return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';};module.exports = vec3;},{"./common.js":2}],10:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

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
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
 * @class 4 Dimensional Vector
 * @name vec4
 */var vec4={}; /**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */vec4.create = function(){var out=new glMatrix.ARRAY_TYPE(4);out[0] = 0;out[1] = 0;out[2] = 0;out[3] = 0;return out;}; /**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */vec4.clone = function(a){var out=new glMatrix.ARRAY_TYPE(4);out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];return out;}; /**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */vec4.fromValues = function(x,y,z,w){var out=new glMatrix.ARRAY_TYPE(4);out[0] = x;out[1] = y;out[2] = z;out[3] = w;return out;}; /**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */vec4.copy = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];return out;}; /**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */vec4.set = function(out,x,y,z,w){out[0] = x;out[1] = y;out[2] = z;out[3] = w;return out;}; /**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4.add = function(out,a,b){out[0] = a[0] + b[0];out[1] = a[1] + b[1];out[2] = a[2] + b[2];out[3] = a[3] + b[3];return out;}; /**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4.subtract = function(out,a,b){out[0] = a[0] - b[0];out[1] = a[1] - b[1];out[2] = a[2] - b[2];out[3] = a[3] - b[3];return out;}; /**
 * Alias for {@link vec4.subtract}
 * @function
 */vec4.sub = vec4.subtract; /**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4.multiply = function(out,a,b){out[0] = a[0] * b[0];out[1] = a[1] * b[1];out[2] = a[2] * b[2];out[3] = a[3] * b[3];return out;}; /**
 * Alias for {@link vec4.multiply}
 * @function
 */vec4.mul = vec4.multiply; /**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4.divide = function(out,a,b){out[0] = a[0] / b[0];out[1] = a[1] / b[1];out[2] = a[2] / b[2];out[3] = a[3] / b[3];return out;}; /**
 * Alias for {@link vec4.divide}
 * @function
 */vec4.div = vec4.divide; /**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4.min = function(out,a,b){out[0] = Math.min(a[0],b[0]);out[1] = Math.min(a[1],b[1]);out[2] = Math.min(a[2],b[2]);out[3] = Math.min(a[3],b[3]);return out;}; /**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4.max = function(out,a,b){out[0] = Math.max(a[0],b[0]);out[1] = Math.max(a[1],b[1]);out[2] = Math.max(a[2],b[2]);out[3] = Math.max(a[3],b[3]);return out;}; /**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */vec4.scale = function(out,a,b){out[0] = a[0] * b;out[1] = a[1] * b;out[2] = a[2] * b;out[3] = a[3] * b;return out;}; /**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */vec4.scaleAndAdd = function(out,a,b,scale){out[0] = a[0] + b[0] * scale;out[1] = a[1] + b[1] * scale;out[2] = a[2] + b[2] * scale;out[3] = a[3] + b[3] * scale;return out;}; /**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */vec4.distance = function(a,b){var x=b[0] - a[0],y=b[1] - a[1],z=b[2] - a[2],w=b[3] - a[3];return Math.sqrt(x * x + y * y + z * z + w * w);}; /**
 * Alias for {@link vec4.distance}
 * @function
 */vec4.dist = vec4.distance; /**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */vec4.squaredDistance = function(a,b){var x=b[0] - a[0],y=b[1] - a[1],z=b[2] - a[2],w=b[3] - a[3];return x * x + y * y + z * z + w * w;}; /**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */vec4.sqrDist = vec4.squaredDistance; /**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */vec4.length = function(a){var x=a[0],y=a[1],z=a[2],w=a[3];return Math.sqrt(x * x + y * y + z * z + w * w);}; /**
 * Alias for {@link vec4.length}
 * @function
 */vec4.len = vec4.length; /**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */vec4.squaredLength = function(a){var x=a[0],y=a[1],z=a[2],w=a[3];return x * x + y * y + z * z + w * w;}; /**
 * Alias for {@link vec4.squaredLength}
 * @function
 */vec4.sqrLen = vec4.squaredLength; /**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */vec4.negate = function(out,a){out[0] = -a[0];out[1] = -a[1];out[2] = -a[2];out[3] = -a[3];return out;}; /**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */vec4.inverse = function(out,a){out[0] = 1.0 / a[0];out[1] = 1.0 / a[1];out[2] = 1.0 / a[2];out[3] = 1.0 / a[3];return out;}; /**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */vec4.normalize = function(out,a){var x=a[0],y=a[1],z=a[2],w=a[3];var len=x * x + y * y + z * z + w * w;if(len > 0){len = 1 / Math.sqrt(len);out[0] = x * len;out[1] = y * len;out[2] = z * len;out[3] = w * len;}return out;}; /**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */vec4.dot = function(a,b){return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];}; /**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */vec4.lerp = function(out,a,b,t){var ax=a[0],ay=a[1],az=a[2],aw=a[3];out[0] = ax + t * (b[0] - ax);out[1] = ay + t * (b[1] - ay);out[2] = az + t * (b[2] - az);out[3] = aw + t * (b[3] - aw);return out;}; /**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */vec4.random = function(out,scale){scale = scale || 1.0; //TODO: This is a pretty awful way of doing this. Find something better.
out[0] = glMatrix.RANDOM();out[1] = glMatrix.RANDOM();out[2] = glMatrix.RANDOM();out[3] = glMatrix.RANDOM();vec4.normalize(out,out);vec4.scale(out,out,scale);return out;}; /**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */vec4.transformMat4 = function(out,a,m){var x=a[0],y=a[1],z=a[2],w=a[3];out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;return out;}; /**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */vec4.transformQuat = function(out,a,q){var x=a[0],y=a[1],z=a[2],qx=q[0],qy=q[1],qz=q[2],qw=q[3], // calculate quat * vec
ix=qw * x + qy * z - qz * y,iy=qw * y + qz * x - qx * z,iz=qw * z + qx * y - qy * x,iw=-qx * x - qy * y - qz * z; // calculate result * inverse quat
out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;out[3] = a[3];return out;}; /**
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
 */vec4.forEach = (function(){var vec=vec4.create();return function(a,stride,offset,count,fn,arg){var i,l;if(!stride){stride = 4;}if(!offset){offset = 0;}if(count){l = Math.min(count * stride + offset,a.length);}else {l = a.length;}for(i = offset;i < l;i += stride) {vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];vec[3] = a[i + 3];fn(vec,vec,arg);a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];a[i + 3] = vec[3];}return a;};})(); /**
 * Returns a string representation of a vector
 *
 * @param {vec4} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */vec4.str = function(a){return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';};module.exports = vec4;},{"./common.js":2}],11:[function(require,module,exports){'use strict';var Entity=require('./Entity');var gl=require('./gl'); /**
 * Attribute is a wrapper on shader vertex attributes
 * @class Attribute
 * @name Entity.Attribute
 * @extends Entity
 * @param {string} [name=attribute] - Instance name
 * @param {Entity.Program} [program] - Program in which the vertex attribute is used
 * @param {string} attribute - Shader variable name
 * @param {number} length - Number of components
 * @param {number} [format=gl.FLOAT] - Component data format
 * @param {boolean} [normalized=false] - Force normalized components
 */var Attribute=(function(_Entity){_inherits(Attribute,_Entity);function Attribute(){var _ref=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref$name=_ref.name;var name=_ref$name === undefined?'attribute':_ref$name;var program=_ref.program;var attribute=_ref.attribute;var length=_ref.length;var _ref$format=_ref.format;var format=_ref$format === undefined?gl.FLOAT:_ref$format;var _ref$normalized=_ref.normalized;var normalized=_ref$normalized === undefined?false:_ref$normalized;_classCallCheck(this,Attribute);_get(Object.getPrototypeOf(Attribute.prototype),"constructor",this).call(this,{name:name}); /**
       * Shader variable name
       * @var {object} [Entity.Attribute.attribute=a_${Framebuffer.attribute}]
       * @private
       */this.attribute = "a_" + attribute; /**
       * Shader vertex attribute location
       * @var {number} [Entity.Attribute.location=gl.getAttributeLocation]
       * @private
       */this.location = gl.getAttributeLocation(program,attribute); /**
       * Number of components
       * @var {number} Entity.Attribute.length
       * @private
       */this.length = length; /**
       * Component data format
       * @var {number} [Entity.Attribute.format=gl.FLOAT]
       * @private
       */this.format = format; /**
       * Force normalized components
       * @var {number} [Entity.Attribute.normalized=false]
       * @private
       */this.normalized = normalized;} /**
    * Compute total number of bytes
    * @function Entity.Attribute.getByteCount
    * @returns {number}
    */_createClass(Attribute,[{key:"getByteCount",value:function getByteCount(){return this.length * this.format.BYTES_PER_ELEMENT;} /**
    * Enable vertex attribute and configure
    * its pointer on the bound VBO
    * @function Entity.Attribute.enable
    * @returns {undefined}
    */},{key:"enable",value:function enable(stride,offset){var location=this.location;gl.enableVertexAttribArray(location);gl.vertexAttribPointer(location,this.length,this.format,this.normalized,stride,offset);} /**
    * Disable vertex attribute
    * @function Entity.Attribute.disable
    * @returns {undefined}
    */},{key:"disable",value:function disable(){gl.disableVertAttribArray(this.location);}}]);return Attribute;})(Entity);module.exports = Attribute;},{"./Entity":15,"./gl":38}],12:[function(require,module,exports){'use strict';var Texture=require('./Texture');var gl=require('./gl'); /**
 * DataTexture is a wrapper on WebGLTexture buffers
 * to support data textures used in GPGPU techniques
 * @class DataTexture
 * @name Entity.Texture.DataTexture
 * @extends Entity.Texture
 * @param {string} [name=data.texture] - Instance name
 * @param {Array} [image=[]] - Texture data
 * @param {number} [lod=0] - Level of detail
 * @param {number} width - Texture width
 * @param {number} height - Texture height
 * @param {number} [length=3] - Number of components
 * @param {number} [components=gl.RGB] - Texture components per texel
 * @param {number} [format=gl.FLOAT] - Component data format
 * @param {number} [magnification=gl.NEAREST] - Magnification sampling filter
 * @param {number} [minification=gl.NEAREST] - Minification sampling filter
 * @param {number} [S=gl.CLAMP_TO_EDGE] - Horizontal texture wrapping
 * @param {number} [T=gl.CLAMP_TO_EDGE] - Vertex texture wrapping
 */var DataTexture=(function(_Texture){_inherits(DataTexture,_Texture);function DataTexture(){var _ref2=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref2$name=_ref2.name;var name=_ref2$name === undefined?'data.texture':_ref2$name;var _ref2$image=_ref2.image;var image=_ref2$image === undefined?[]:_ref2$image;var lod=_ref2.lod;var width=_ref2.width;var height=_ref2.height;var _ref2$length=_ref2.length;var length=_ref2$length === undefined?3:_ref2$length;var components=_ref2.components;var _ref2$format=_ref2.format;var format=_ref2$format === undefined?gl.FLOAT:_ref2$format;var magnification=_ref2.magnification;var minification=_ref2.minification;var S=_ref2.S;var T=_ref2.T;_classCallCheck(this,DataTexture);_get(Object.getPrototypeOf(DataTexture.prototype),"constructor",this).call(this,{name:name,image:image,lod:lod,components:components,format:format,magnification:magnification,minification:minification,S:S,T:T}); /**
       * Texture width
       * @var {number} Entity.Texture.DataTexture.width
       * @private
       */this.width = width; /**
       * Texture height
       * @var {number} Entity.Texture.DataTexture.height
       * @private
       */this.height = height;this.autofill();this.configure();} /**
    * Apply appropriate texture parameters
    * and push data into texture buffer
    * @function Entity.Texture.DataTexture.configure
    * @returns {undefined}
    */_createClass(DataTexture,[{key:"configure",value:function configure(){_get(Object.getPrototypeOf(DataTexture.prototype),"configure",this).call(this);var components=this.components;gl.pixelStorei(gl.PACK_ALIGNMENT,1);gl.pixelStorei(gl.UNPACK_ALIGNMENT,1);gl.texImage2D(gl.TEXTURE_2D,this.lod,components,this.width,this.height,0,components,this.format,this.image);this.unbind();} /**
    * Push null pixel values at the back of the
    * texture data to fill and validate it
    * @function Entity.Texture.DataTexture.autofill
    * @param {number} [nixel=-1] Null pixel value
    * @returns {undefined}
    */},{key:"autofill",value:function autofill(){var nixel=arguments.length <= 0 || arguments[0] === undefined?-1:arguments[0];var image=this.image;var count=this.width * this.height * this.length - image.length;var nixels=("," + nixel).repeat(count).substring(1).split(',').map(parseFloat);image.push(nixels);}}]);return DataTexture;})(Texture);module.exports = DataTexture;},{"./Texture":33,"./gl":38}],13:[function(require,module,exports){'use strict';var Framebuffer=require('./Framebuffer');var gl=require('./gl'); /**
 * DeferredFramebuffer is a wrapper on WebGLFramebuffer buffers
 * to support off-screen rendering
 * @class DeferredFramebuffer
 * @name Entity.Framebuffer.DeferredFramebuffer
 * @extends Entity.Framebuffer
 * @param {string} [name=deferred.framebuffer] - Instance name
 * @param {Entity.Texture.ImageTexture|Entity.Texture.DataTexture} colorAttachment - Framebuffer color attachment
 * @param {Entity.Renderbuffer} depthAttachment - Framebuffer depth attachment
 * @param {Entity.Scene.OrthographicScene|Entity.Scene.PerspectiveScene} scene - View configuration
 */var DeferredFramebuffer=(function(_Framebuffer){_inherits(DeferredFramebuffer,_Framebuffer);function DeferredFramebuffer(){var _ref3=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref3$name=_ref3.name;var name=_ref3$name === undefined?'deferred.framebuffer':_ref3$name;var colorAttachment=_ref3.colorAttachment;var depthAttachment=_ref3.depthAttachment;var scene=_ref3.scene;_classCallCheck(this,DeferredFramebuffer);_get(Object.getPrototypeOf(DeferredFramebuffer.prototype),"constructor",this).call(this,{name:name,scene:scene}); /**
       * WebGL framebuffer
       * @var {WebGLFramebuffer} Entity.Framebuffer.DeferredFramebuffer.buffer
       * @default WebGLFramebuffer
       * @private
       */this.buffer = gl.createFramebuffer(); /**
       * Framebuffer color attachment
       * @var {Entity.Texture.ImageTexture|Entity.Texture.DataTexture} Entity.Framebuffer.DeferredFramebuffer.colorAttachment
       * @private
       */this.colorAttachment = colorAttachment; /**
       * Framebuffer depth attachment
       * @var {Renderbuffer} Entity.Framebuffer.DeferredFramebuffer.depthAttachment
       * @private
       */this.depthAttachment = depthAttachment;this.configure();} /**
    * Attach color and depth buffers
    * @function Entity.Framebuffer.DeferredFramebuffer.configure
    * @returns {undefined}
    */_createClass(DeferredFramebuffer,[{key:"configure",value:function configure(){this.bind();gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.colorAttachment,0);gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,this.depthAttachment);this.check();this.unbind();}}]);return DeferredFramebuffer;})(Framebuffer);module.exports = DeferredFramebuffer;},{"./Framebuffer":18,"./gl":38}],14:[function(require,module,exports){'use strict';var Light=require('./Light'); /**
 * DirectionalLight is a directional light source to illuminate the scene
 * @class DirectionalLight
 * @name Entity.Light.DirectionalLight
 * @extends Entity.Light
 * @param {string} [name=directional.light] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {number} [intensity=1] - Light intensity
 * @param {vec3} [location=[0, 0, 0]] - Light position
 * @param {vec3} [direction=[0, 0, 0]] - Light direction
 */var DirectionalLight=(function(_Light){_inherits(DirectionalLight,_Light);function DirectionalLight(){var _ref4=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref4$name=_ref4.name;var name=_ref4$name === undefined?'directional.light':_ref4$name;var ambient=_ref4.ambient;var diffuse=_ref4.diffuse;var specular=_ref4.specular;var intensity=_ref4.intensity;var location=_ref4.location;var _ref4$direction=_ref4.direction;var direction=_ref4$direction === undefined?[0,0,0]:_ref4$direction;_classCallCheck(this,DirectionalLight);_get(Object.getPrototypeOf(DirectionalLight.prototype),"constructor",this).call(this,{name:name,ambient:ambient,diffuse:diffuse,specular:specular,intensity:intensity,location:location}); /**
       * Light direction
       * @var {vec3} Entity.Light.DirectionalLight.direction
       * @default [0, 0, 0]
       * @private
       */this.direction = direction;} /**
    * Set directional light shader uniform values
    * @function Entity.Light.DirectionalLight.bind
    * @param {object} uniform - Light shader uniforms
    * @returns {undefined}
    */_createClass(DirectionalLight,[{key:"bind",value:function bind(uniform){_get(Object.getPrototypeOf(DirectionalLight.prototype),"bind",this).call(this,uniform);uniform.direction.set(this.direction);}}]);return DirectionalLight;})(Light);module.exports = DirectionalLight;},{"./Light":20}],15:[function(require,module,exports){'use strict';var indices={}; /**
 * Entity is the base class
 * @class Entity
 * @param {string} [name=entity] - Instance name
 */var Entity=(function(){function Entity(){var _ref5=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref5$name=_ref5.name;var name=_ref5$name === undefined?'entity':_ref5$name;_classCallCheck(this,Entity); /**
       * Entity name
       * @var {string} Entity.name
       * @default '${name}.0${indices[name]}'
       * @private
       */this.name = this.index(name); /**
       * Entity delete flag
       * @var {boolean} Entity.destroyed
       * @default false
       * @private
       */this.destroyed = false;} /**
    * Autogenerate a name with an index based on
    * its number of instantiations
    * @function Entity.index
    * @param {string} [name=entity] - Entity name
    * @returns {string}
    */_createClass(Entity,[{key:"index",value:function index(name){if(indices[name] === undefined){indices[name] = -1;}indices[name]++;return name + ".0" + indices[name];} /**
    * Validate the identity of an entity
    * @function Entity.is
    * @param {string} identity - Entity name to check for
    * @returns {boolean}
    */},{key:"is",value:function is(identity){return this.name.match(identity,'i') !== null;} /**
    * Flag entity for deletion
    * @function Entity.destroy
    * @returns {undefined}
    */},{key:"destroy",value:function destroy(){this.destroyed = true;}}]);return Entity;})();module.exports = Entity;},{}],16:[function(require,module,exports){'use strict';var Entity=require('./Entity');var gl=require('./gl'); /**
 * Fluid is a grid-based fluid simulator
 * @class Fluid
 * @name Entity.Fluid
 * @extends Entity
 * @param {string} [name=fluid] - Instance name
 */var Fluid=(function(_Entity2){_inherits(Fluid,_Entity2);function Fluid(){var _ref6=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref6$name=_ref6.name;var name=_ref6$name === undefined?'fluid':_ref6$name;_classCallCheck(this,Fluid);_get(Object.getPrototypeOf(Fluid.prototype),"constructor",this).call(this,{name:name});}return Fluid;})(Entity);module.exports = Fluid;},{"./Entity":15,"./gl":38}],17:[function(require,module,exports){'use strict';var Shader=require('./Shader');var gl=require('./gl'); /**
 * FragmentShader is a wrapper on WebGLShader buffers
 * @class FragmentShader
 * @name Entity.Shader.FragmentShader
 * @extends Entity.Shader
 * @param {string} [name=fragment.shader] - Instance name
 * @param {string} path - Filepath to fragment shader source
 */var FragmentShader=(function(_Shader){_inherits(FragmentShader,_Shader);function FragmentShader(){var _ref7=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref7$name=_ref7.name;var name=_ref7$name === undefined?'fragment.shader':_ref7$name;var path=_ref7.path;_classCallCheck(this,FragmentShader);_get(Object.getPrototypeOf(FragmentShader.prototype),"constructor",this).call(this,{name:name,path:path},gl.FRAGMENT_SHADER);}return FragmentShader;})(Shader);module.exports = FragmentShader;},{"./Shader":31,"./gl":38}],18:[function(require,module,exports){'use strict';var Entity=require('./Entity');var gl=require('./gl'); /**
 * Framebuffer is a wrapper on WebGLFramebuffer buffers
 * @class Framebuffer
 * @name Entity.Framebuffer
 * @extends Entity
 * @param {string} [name=framebuffer] - Instance name
 * @param {Entity.Scene.OrthographicScene|Entity.Scene.PerspectiveScene} scene - View configuration
 */var Framebuffer=(function(_Entity3){_inherits(Framebuffer,_Entity3);function Framebuffer(){var _ref8=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref8$name=_ref8.name;var name=_ref8$name === undefined?'framebuffer':_ref8$name;var scene=_ref8.scene;_classCallCheck(this,Framebuffer);_get(Object.getPrototypeOf(Framebuffer.prototype),"constructor",this).call(this,{name:name}); /**
       * WebGL framebuffer
       * @var {object} Entity.Framebuffer.buffer
       * @default null
       * @private
       */this.buffer = null; /**
       * Framebuffer scene
       * @var {OrthographicScene|PerspectiveScene} Entity.Framebuffer.scene
       * @default undefined
       * @private
       */this.scene = scene;} /**
    * Enable the framebuffer and associated
    * scene as the current render target
    * @function Entity.Framebuffer.enable
    * @returns {undefined}
    */_createClass(Framebuffer,[{key:"enable",value:function enable(){this.scene.bind();this.bind();} /**
    * Bind the framebuffer as the current
    * render target
    * @function Entity.Framebuffer.bind
    * @returns {undefined}
    */},{key:"bind",value:function bind(){gl.bindFramebuffer(gl.FRAMEBUFFER,this.buffer);} /**
    * Unbind the framebuffer
    * @function Entity.Framebuffer.unbind
    * @returns {undefined}
    */},{key:"unbind",value:function unbind(){gl.bindFramebuffer(gl.FRAMEBUFFER,null);} /**
    * Flush the contents of the framebuffers'
    * color and depth attachments
    * @function Entity.Framebuffer.flush
    * @returns {undefined}
    */},{key:"flush",value:function flush(){gl.clear(gl.COLOR_BUFFER_BIT);gl.clear(gl.DEPTH_BUFFER_BIT);} /**
    * Check the framebuffer compile status
    * @function Entity.Framebuffer.check
    * @returns {undefined|Error}
    */},{key:"check",value:function check(){var status=gl.checkFramebufferStatus(gl.FRAMEBUFFER);var exception=false;switch(status){case gl.FRAMEBUFFER_UNSUPPORTED:exception = 'unsupported';break;case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:exception = 'attachments incomplete';break;case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:exception = 'dimensions incomplete';break;case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:exception = 'attachment missing';break;}if(exception){gl.deleteFramebuffer(this.buffer);throw new Error(error);}}}]);return Framebuffer;})(Entity);module.exports = Framebuffer;},{"./Entity":15,"./gl":38}],19:[function(require,module,exports){'use strict';var Texture=require('./Texture');var gl=require('./gl'); /**
 * ImageTexture is a wrapper on WebGLTexture buffers
 * to support detailing mesh surfaces
 * @class ImageTexture
 * @name Entity.Texture.ImageTexture
 * @extends Entity.Texture
 * @param {string} [name=image.texture] - Instance name
 * @param {Array} [image=[]] - Texture data
 * @param {number} [lod=0] - Level of detail
 * @param {number} [components=gl.RGB] - Texture components per texel
 * @param {number} [format=gl.UNSIGNED_BYTE] - Component data format
 * @param {number} [magnification=gl.NEAREST] - Magnification sampling filter
 * @param {number} [minification=gl.NEAREST] - Minification sampling filter
 * @param {number} [S=gl.CLAMP_TO_EDGE] - Horizontal texture wrapping
 * @param {number} [T=gl.CLAMP_TO_EDGE] - Vertex texture wrapping
 * @param {boolean|number} [anisotropy=false] - Level of anisotropic filtering
 */var ImageTexture=(function(_Texture2){_inherits(ImageTexture,_Texture2);function ImageTexture(){var _ref9=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref9$name=_ref9.name;var name=_ref9$name === undefined?'image.texture':_ref9$name;var image=_ref9.image;var lod=_ref9.lod;var components=_ref9.components;var format=_ref9.format;var magnification=_ref9.magnification;var minification=_ref9.minification;var S=_ref9.S;var T=_ref9.T;var _ref9$anisotropy=_ref9.anisotropy;var anisotropy=_ref9$anisotropy === undefined?false:_ref9$anisotropy;_classCallCheck(this,ImageTexture);_get(Object.getPrototypeOf(ImageTexture.prototype),"constructor",this).call(this,{name:name,image:image,lod:lod,components:components,format:format,magnification:magnification,minification:minification,S:S,T:T}); /**
       * Anisotropic filter handle
       * @var {function} Entity.Texture.ImageTexture.anisotropicFilter
       * @default false
       * @private
       */this.anisotropicFilter = gl.getExtension('EXT_texture_filter_anisotropic'); /**
       * Level of anisotropic filtering to
       * improve rendering quality of textures
       * @var {boolean|number} Entity.Texture.ImageTexture.anisotropy
       * @default false
       * @private
       */this.anisotropy = this.checkAnisotropy(anisotropy);this.configure();} /**
    * Apply appropriate texture parameters
    * and push data into texture buffer
    * @function Entity.Texture.ImageTexture.configure
    * @returns {undefined}
    */_createClass(ImageTexture,[{key:"configure",value:function configure(){_get(Object.getPrototypeOf(ImageTexture.prototype),"configure",this).call(this);var components=this.components;var anisotropy=this.anisotropy;if(anisotropy){gl.texParameterf(gl.TEXTURE_2D,this.anisotropicFilter.TEXTURE_MAX_ANISOTROPY,anisotropy);}gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,this.lod,components,components,this.format,this.image);this.unbind();} /**
    * Check there anisotropy support and a supported
    * option is used
    * @function Entity.Texture.ImageTexture.checkAnisotropy
    * @param {boolean|number} anisotropy - Level of anisotropic filtering
    * @returns {number|boolean}
    */},{key:"checkAnisotropy",value:function checkAnisotropy(anisotropy){var anisotropicFilter=this.anisotropicFilter;if(anisotropicFilter && anisotropy !== false){var maxAnisotropy=gl.getParameter(anisotropicFilter.MAX_TEXTURE_MAX_ANISOTROPY_EXT);anisotropy = Math.min(anisotropy,Math.max(anisotropy,maxAnisotropy));}return anisotropy = false;}}]);return ImageTexture;})(Texture);module.exports = ImageTexture;},{"./Texture":33,"./gl":38}],20:[function(require,module,exports){'use strict';var Entity=require('./Entity'); /**
 * Light is a global light source to illuminate the scene
 * @class Light
 * @name Entity.Light
 * @extends Entity
 * @param {string} [name=light] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {number} [intensity=1] - Light intensity
 * @param {vec3} [location=[0, 0, 0]] - Light position
 */var Light=(function(_Entity4){_inherits(Light,_Entity4);function Light(){var _ref10=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref10$name=_ref10.name;var name=_ref10$name === undefined?'light':_ref10$name;var ambient=_ref10.ambient;var diffuse=_ref10.diffuse;var specular=_ref10.specular;var _ref10$intensity=_ref10.intensity;var intensity=_ref10$intensity === undefined?1:_ref10$intensity;var _ref10$location=_ref10.location;var location=_ref10$location === undefined?[0,0,0]:_ref10$location;_classCallCheck(this,Light);_get(Object.getPrototypeOf(Light.prototype),"constructor",this).call(this,{name:name}); /**
       * Ambient component
       * @var {vec3}Entity.Lightambient
       * @private
       */this.ambient = ambient; /**
       * Diffuse component
       * @var {vec3} Entity.Light.diffuse
       * @private
       */this.diffuse = diffuse; /**
       * Specular component
       * @var {vec3} Entity.Light.specular
       * @private
       */this.specular = specular; /**
       * Light intensity
       * @var {number} Entity.Light.intensity
       * @default 1
       * @private
       */this.intensity = intensity; /**
       * Light position
       * @var {vec3} Entity.Light.location
       * @default [0, 0, 0]
       * @private
       */this.location = location;} /**
    * Set global light shader uniform values
    * @function Entity.Light.bind
    * @param {object} uniform - Light shader uniforms
    * @returns {undefined}
    */_createClass(Light,[{key:"bind",value:function bind(uniform){uniform.ambient.set(this.ambient);uniform.diffuse.set(this.diffuse);uniform.specular.set(this.specular);uniform.intensity.set(this.intensity);uniform.location.set(this.location);}}]);return Light;})(Entity);module.exports = Light;},{"./Entity":15}],21:[function(require,module,exports){'use strict';var Entity=require('./Entity');var shades={flat:1,smooth:0}; /**
 * Materials dictate the mesh shading
 * @class Material
 * @name Entity.Material
 * @extends Entity
 * @param {string} [name=material] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {string} [shading=smooth] - Surface shading method
 */var Material=(function(_Entity5){_inherits(Material,_Entity5);function Material(){var _ref11=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref11$name=_ref11.name;var name=_ref11$name === undefined?'material':_ref11$name;var ambient=_ref11.ambient;var diffuse=_ref11.diffuse;var _ref11$shading=_ref11.shading;var shading=_ref11$shading === undefined?'smooth':_ref11$shading;_classCallCheck(this,Material);_get(Object.getPrototypeOf(Material.prototype),"constructor",this).call(this,{name:name}); /**
       * Ambient component
       * @var {vec3} Entity.Material.ambient
       * @private
       */this.ambient = ambient; /**
       * Diffuse component
       * @var {vec3} Entity.Material.diffuse
       * @private
       */this.diffuse = diffuse; /**
       * Surface shading method
       * @var {string} Entity.Material.shading
       * @default smooth
       * @private
       */this.shading = shades[shading];} /**
    * Set material shader uniform values
    * @function Entity.Material.bind
    * @param {object} uniform - Material shader uniforms
    * @returns {undefined}
    */_createClass(Material,[{key:"bind",value:function bind(uniform){uniform.ambient.set(this.ambient);uniform.diffuse.set(this.diffuse);uniform.shading.set(this.shading);}}]);return Material;})(Entity);module.exports = Material;},{"./Entity":15}],22:[function(require,module,exports){'use strict';var Entity=require('./Entity'); /**
 * Mesh
 * @class Mesh
 * @name Entity.Mesh
 * @extends Entity
 * @param {string} [name=mesh] - Instance name
 */var Mesh=(function(_Entity6){_inherits(Mesh,_Entity6);function Mesh(){var _ref12=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref12$name=_ref12.name;var name=_ref12$name === undefined?'mesh':_ref12$name;_classCallCheck(this,Mesh);_get(Object.getPrototypeOf(Mesh.prototype),"constructor",this).call(this,{name:name});}return Mesh;})(Entity);module.exports = Mesh;},{"./Entity":15}],23:[function(require,module,exports){'use strict';var Scene=require('./Scene');var gl=require('./gl');var glm=require('gl-matrix');var mat4=glm.mat4; /**
 * OrthographicScene configures an othographic projection into
 * the associated framebuffer
 * @class OrthographicScene
 * @name Entity.Scene.OrthographicScene
 * @extends Entity.Scene
 * @param {string} [name=orthographic.scene] - Instance name
 * @param {vec4} [background=[0, 0, 0, 1]] - Scene background color
 * @param {number} [left=-1] - View left start
 * @param {number} right - View right end
 * @param {number} [top=-1] - View top start
 * @param {number} bottom - View bottom end
 * @param {number} [near=0.1] - Observable start
 * @param {number} [far=1] - Observable end
 */var OrthographicScene=(function(_Scene){_inherits(OrthographicScene,_Scene);function OrthographicScene(){var _ref13=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref13$name=_ref13.name;var name=_ref13$name === undefined?'orthographic.scene':_ref13$name;var background=_ref13.background;var _ref13$left=_ref13.left;var left=_ref13$left === undefined?-1:_ref13$left;var right=_ref13.right;var bottom=_ref13.bottom;var _ref13$top=_ref13.top;var top=_ref13$top === undefined?-1:_ref13$top;var _ref13$near=_ref13.near;var near=_ref13$near === undefined?0.1:_ref13$near;var _ref13$far=_ref13.far;var far=_ref13$far === undefined?1:_ref13$far;_classCallCheck(this,OrthographicScene);_get(Object.getPrototypeOf(OrthographicScene.prototype),"constructor",this).call(this,{name:name,background:background}); /**
       * View left start
       * @var {number} Entity.Scene.OrthographicScene.left
       * @default -1
       * @private
       */this.left = left; /**
       * View right end
       * @var {number} Entity.Scene.OrthographicScene.right
       * @private
       */this.right = right; /**
       * View bottom end
       * @var {number} Entity.Scene.OrthographicScene.bottom
       * @private
       */this.bottom = bottom; /**
       * View top start
       * @var {number} Entity.Scene.OrthographicScene.top
       * @default -1
       * @private
       */this.top = top; /**
       * Observable start
       * @var {number} Entity.Scene.OrthographicScene.near
       * @default 0.1
       * @private
       */this.near = near; /**
       * Observable end
       * @var {number} Entity.Scene.OrthographicScene.far
       * @default 1
       * @private
       */this.far = far;} /**
    * Configure a mat4 orthographic projection
    * @function Entity.Scene.OrthographicScene.configure
    * @returns {undefined}
    */_createClass(OrthographicScene,[{key:"configure",value:function configure(){_get(Object.getPrototypeOf(OrthographicScene.prototype),"configure",this).call(this);mat4.ortho(this.projectionMatrix,this.left,this.right,this.bottom,this.top,this.near,this.far);mat4.identity(this.modelViewMatrix);} /**
    * Apply orthographic projection to active framebuffer
    * @function Entity.Scene.OrthographicScene.bind
    * @returns {undefined}
    */},{key:"bind",value:function bind(){_get(Object.getPrototypeOf(OrthographicScene.prototype),"bind",this).call(this);gl.disable(gl.DEPTH_TEST);gl.viewport(0,0,this.right,this.top);}}]);return OrthographicScene;})(Scene);module.exports = OrthographicScene;},{"./Scene":30,"./gl":38,"gl-matrix":1}],24:[function(require,module,exports){'use strict';var Scene=require('./Scene');var gl=require('./gl');var glm=require('gl-matrix');var mat4=glm.mat4; /**
 * PerspectiveScene configures a perspective projection into
 * the associated framebuffer
 * @class PerspectiveScene
 * @name Entity.Scene.PerspectiveScene
 * @extends Entity.Scene
 * @param {string} [name=perspective.scene] - Instance name
 * @param {vec4} [background=[0, 0, 0, 1]] - Scene background color
 * @param {number} width - View width
 * @param {number} height - View height
 * @param {number} [fov=45] - Field of view
 * @param {number} ratio - View aspect ratio
 * @param {number} [near=0.1] - Observable start
 * @param {number} [far=1000] - Observable end
 * @param {vec3} direction - View direction
 * @param {vec3} location - Vantage position
 * @param {vec3} [up=[0, 1, 0]] - Scene orientation
 */var PerspectiveScene=(function(_Scene2){_inherits(PerspectiveScene,_Scene2);function PerspectiveScene(){var _ref14=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref14$name=_ref14.name;var name=_ref14$name === undefined?'perspective.scene':_ref14$name;var background=_ref14.background;var width=_ref14.width;var height=_ref14.height;var _ref14$fov=_ref14.fov;var fov=_ref14$fov === undefined?45:_ref14$fov;var ratio=_ref14.ratio;var _ref14$near=_ref14.near;var near=_ref14$near === undefined?0.1:_ref14$near;var _ref14$far=_ref14.far;var far=_ref14$far === undefined?1000:_ref14$far;var direction=_ref14.direction;var location=_ref14.location;var _ref14$up=_ref14.up;var up=_ref14$up === undefined?[0,1,0]:_ref14$up;_classCallCheck(this,PerspectiveScene);_get(Object.getPrototypeOf(PerspectiveScene.prototype),"constructor",this).call(this,{name:name,background:background}); /**
       * View width
       * @var {number} Entity.Scene.PerspectiveScene.width
       * @private
       */this.width = width; /**
       * View height
       * @var {number} Entity.Scene.PerspectiveScene.height
       * @private
       */this.height = height; /**
       * Field of view
       * @var {number} Entity.Scene.PerspectiveScene.fov
       * @default 45
       * @private
       */this.fov = fov; /**
       * View aspect ratio
       * @var {number} Entity.Scene.PerspectiveScene.ratio
       * @private
       */this.ratio = ratio; /**
       * Observable start
       * @var {number} Entity.Scene.PerspectiveScene.near
       * @default 0.1
       * @private
       */this.near = near; /**
       * Observable end
       * @var {number} Entity.Scene.PerspectiveScene.far
       * @default 1000
       * @private
       */this.far = far; /**
       * View direction
       * @var {vec3} Entity.Scene.PerspectiveScene.direction
       * @private
       */this.direction = direction; /**
       * Vantage position
       * @var {vec3} Entity.Scene.PerspectiveScene.location
       * @private
       */this.location = location; /**
       * Scene orientation
       * @var {vec3} Entity.Scene.PerspectiveScene.up
       * @default [0, 1, 0]
       * @private
       */this.up = up;} /**
    * Configure a mat4 perspective projection
    * @function Entity.Scene.PerspectiveScene.configure
    * @returns {undefined}
    */_createClass(PerspectiveScene,[{key:"configure",value:function configure(){_get(Object.getPrototypeOf(PerspectiveScene.prototype),"configure",this).call(this);var modelViewMatrix=this.modelViewMatrix;gl.clearDepth(1);gl.depthFunc(gl.LEQUAL);mat4.perspective(this.projectionMatrix,this.fov,this.ratio,this.near,this.far);mat4.identity(modelViewMatrix);mat4.lookAt(modelViewMatrix,this.location,this.direction,this.up);} /**
    * Apply perspective projection to active framebuffer
    * @function Entity.Scene.PerspectiveScene.bind
    * @returns {undefined}
    */},{key:"bind",value:function bind(){_get(Object.getPrototypeOf(PerspectiveScene.prototype),"bind",this).call(this);gl.enable(gl.DEPTH_TEST);gl.viewport(0,0,this.width,this.height);}}]);return PerspectiveScene;})(Scene);module.exports = PerspectiveScene;},{"./Scene":30,"./gl":38,"gl-matrix":1}],25:[function(require,module,exports){'use strict';var Material=require('./Material'); /**
 * Phong shading using the Blinn-Phong shading model
 * @class PhongMaterial
 * @name Entity.Material.PhongMaterial
 * @extends Entity.Material
 * @param {string} [name=phong.material] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {string} [shading=smooth] - Surface shading method
 * @param {number} [shininess=75] - Surface light reflectivity
 */var PhongMaterial=(function(_Material){_inherits(PhongMaterial,_Material);function PhongMaterial(){var _ref15=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref15$name=_ref15.name;var name=_ref15$name === undefined?'phong.material':_ref15$name;var ambient=_ref15.ambient;var diffuse=_ref15.diffuse;var specular=_ref15.specular;var shading=_ref15.shading;var _ref15$shininess=_ref15.shininess;var shininess=_ref15$shininess === undefined?75:_ref15$shininess;_classCallCheck(this,PhongMaterial);_get(Object.getPrototypeOf(PhongMaterial.prototype),"constructor",this).call(this,{name:name,ambient:ambient,diffuse:diffuse,shading:shading}); /**
       * Specular component
       * @var {vec3} Entity.Material.PhongMaterial.specular
       * @private
       */this.specular = specular; /**
       * Surface light reflectivity
       * @var {number} Entity.Material.PhongMaterial.shininess
       * @default 75
       * @private
       */this.shininess = shininess;} /**
    * Set phong material shader uniform values
    * @function Entity.Material.PhongMaterial.bind
    * @param {object} uniform - Material shader uniforms
    * @returns {undefined}
    */_createClass(PhongMaterial,[{key:"bind",value:function bind(uniform){_get(Object.getPrototypeOf(PhongMaterial.prototype),"bind",this).call(this,uniform);uniform.shininess.set(this.shininess);}}]);return PhongMaterial;})(Material);module.exports = PhongMaterial;},{"./Material":21}],26:[function(require,module,exports){'use strict';var Light=require('./Light'); /**
 * PointLight is a local light source to illuminate an area of the scene
 * @class PointLight
 * @name Entity.Light.PointLight
 * @extends Entity.Light
 * @param {string} [name=point.light] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {vec3} coefficient - Coefficient component
 * @param {vec3} linear - Linear component
 * @param {vec3} quadratic - Quadratic component
 * @param {number} [intensity=1] - Light intensity
 * @param {vec3} [location=[0, 0, 0]] - Light position
 */var PointLight=(function(_Light2){_inherits(PointLight,_Light2);function PointLight(){var _ref16=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref16$name=_ref16.name;var name=_ref16$name === undefined?'point.light':_ref16$name;var ambient=_ref16.ambient;var diffuse=_ref16.diffuse;var specular=_ref16.specular;var coefficient=_ref16.coefficient;var linear=_ref16.linear;var quadratic=_ref16.quadratic;var intensity=_ref16.intensity;var location=_ref16.location;_classCallCheck(this,PointLight);_get(Object.getPrototypeOf(PointLight.prototype),"constructor",this).call(this,{name:name,ambient:ambient,diffuse:diffuse,specular:specular,intensity:intensity,location:location}); /**
       * Coefficient component
       * @var {vec3} Entity.Light.PointLight.coefficient
       * @private
       */this.coefficient = coefficient; /**
       * Linear component
       * @var {vec3} Entity.Light.PointLight.linear
       * @private
       */this.linear = linear; /**
       * Quadratic component
       * @var {vec3} Entity.Light.PointLight.quadratic
       * @private
       */this.quadratic = quadratic;} /**
    * Set point light shader uniform values
    * @function Entity.Light.PointLight.bind
    * @param {object} uniform - Light shader uniforms
    * @returns {undefined}
    */_createClass(PointLight,[{key:"bind",value:function bind(uniform){_get(Object.getPrototypeOf(PointLight.prototype),"bind",this).call(this,uniform);uniform.coefficient.set(this.coefficient);uniform.linear.set(this.linear);uniform.quadratic.set(this.quadratic);uniform.location.set(this.location);}}]);return PointLight;})(Light);module.exports = PointLight;},{"./Light":20}],27:[function(require,module,exports){'use strict';var Entity=require('./Entity');var gl=require('./gl'); /**
 * Program is a wrapper on WebGLProgram containers
 * @class Program
 * @name Entity.Program
 * @extends Entity
 * @param {string} [name=program] - Instance name
 * @param {Entity.Shader.VertexShader} vertexShader - Vertex shader
 * @param {Entity.Shader.FragmentShader} fragmentShader - Fragment shader
 */var Program=(function(_Entity7){_inherits(Program,_Entity7);function Program(_ref17){var _ref17$name=_ref17.name;var name=_ref17$name === undefined?'program':_ref17$name;var vertexShader=_ref17.vertexShader;var fragmentShader=_ref17.fragmentShader;_classCallCheck(this,Program);_get(Object.getPrototypeOf(Program.prototype),"constructor",this).call(this,{name:name}); /**
       * WebGL program container
       * @var {WebGLProgram} Entity.Program.program
       * @default WebGLProgram
       * @private
       */this.buffer = gl.createProgram(); /**
       * Vertex shader
       * @var {Entity.Shader.VertexShader} Entity.Program.vertexShader
       * @private
       */this.vertexShader = vertexShader; /**
       * Fragment shader
       * @var {Entity.Shader.FragmentShader} Entity.Program.fragmentShader
       * @private
       */this.fragmentShader = fragmentShader;this.link();} /**
    * Link the vertex and fragment shader to the program
    * @function Entity.Program.link
    * @returns {undefined}
    */_createClass(Program,[{key:"link",value:function link(){var buffer=this.buffer;gl.attachShader(buffer,this.vertexShader);gl.attachShader(buffer,this.fragmentShader);gl.linkProgram(buffer);this.check();} /**
    * Bind the program vertex and fragment shader
    * @function Entity.Program.bind
    * @returns {undefined}
    */},{key:"bind",value:function bind(){gl.useProgram(this.buffer);} /**
    * Validate the program vertex and fragment
    * shader link status
    * @function Entity.Program.check
    * @returns {undefined}
    */},{key:"check",value:function check(){var buffer=this.buffer;var status=gl.getProgramParameter(buffer,gl.LINK_STATUS);if(!status){var _error=gl.getProgramInfoLog(buffer);gl.deleteProgram(buffer);throw new Error(_error);}}}]);return Program;})(Entity);module.exports = Program;},{"./Entity":15,"./gl":38}],28:[function(require,module,exports){'use strict';var Entity=require('./Entity');var gl=require('./gl'); /**
 * Renderbuffer is a wrapper on WebGLRenderbuffer buffers
 * @class Renderbuffer
 * @name Entity.Renderbuffer
 * @extends Entity
 * @param {string} [name=renderbuffer] - Instance name
 * @param {number} width - Buffer width
 * @param {number} height - Buffer height
 */var Renderbuffer=(function(_Entity8){_inherits(Renderbuffer,_Entity8);function Renderbuffer(){var _ref18=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref18$name=_ref18.name;var name=_ref18$name === undefined?'renderbuffer':_ref18$name;var width=_ref18.width;var height=_ref18.height;_classCallCheck(this,Renderbuffer);_get(Object.getPrototypeOf(Renderbuffer.prototype),"constructor",this).call(this,{name:name}); /**
       * WebGL renderbuffer
       * @var {WebGLRenderbuffer} Entity.Renderbuffer.buffer
       * @default WebGLRenderbuffer
       * @private
       */this.buffer = gl.createRenderbuffer(); /**
       * Buffer width
       * @var {number} Entity.Renderbuffer.width
       * @private
       */this.width = width; /**
       * Buffer height
       * @var {number} Entity.Renderbuffer.height
       * @private
       */this.height = height;this.configure();} /**
    * Configure the dimensions of the renderbuffer
    * @function Entity.Renderbuffer.configure
    * @returns {undefined}
    */_createClass(Renderbuffer,[{key:"configure",value:function configure(){this.bind();gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,this.width,this.height);this.unbind();} /**
    * Bind the renderbuffer
    * @function Entity.Renderbuffer.bind
    * @returns {undefined}
    */},{key:"bind",value:function bind(){gl.bindRenderbuffer(gl.RENDERBUFFER,this.buffer);} /**
    * Unbind the renderbuffer
    * @function Entity.Renderbuffer.unbind
    * @returns {undefined}
    */},{key:"unbind",value:function unbind(){gl.bindRenderbuffer(gl.RENDERBUFFER,null);}}]);return Renderbuffer;})(Entity);module.exports = Renderbuffer;},{"./Entity":15,"./gl":38}],29:[function(require,module,exports){'use strict';var Entity=require('./Entity'); /**
 * Renderer
 * @class Renderer
 * @name Entity.Renderer
 * @extends Entity
 * @param {string} [name=renderer] - Instance name
 */var Renderer=(function(_Entity9){_inherits(Renderer,_Entity9);function Renderer(){var _ref19=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref19$name=_ref19.name;var name=_ref19$name === undefined?'renderer':_ref19$name;_classCallCheck(this,Renderer);_get(Object.getPrototypeOf(Renderer.prototype),"constructor",this).call(this,{name:name});}return Renderer;})(Entity);module.exports = Renderer;},{"./Entity":15}],30:[function(require,module,exports){'use strict';var Entity=require('./Entity');var gl=require('./gl');var glm=require('gl-matrix');var mat4=glm.mat4;var mat3=glm.mat3;var axis={x:[1,0,0],y:[0,1,0],z:[0,0,1]}; /**
 * Scene encapsulates functionality to transform the view,
 * including scaling, rotating and translating, and configure
 * projections into framebuffers
 * @class Scene
 * @name Entity.Scene
 * @extends Entity
 * @param {string} [name=scene] - Instance name
 * @param {vec4} [background=[0, 0, 0, 1]] - Scene background color
 */var Scene=(function(_Entity10){_inherits(Scene,_Entity10);function Scene(){var _ref20=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref20$name=_ref20.name;var name=_ref20$name === undefined?'scene':_ref20$name;var _ref20$background=_ref20.background;var background=_ref20$background === undefined?[0,0,0,1]:_ref20$background;_classCallCheck(this,Scene);_get(Object.getPrototypeOf(Scene.prototype),"constructor",this).call(this,{name:name}); /**
       * Scene background color
       * @var {number} Entity.Scene.background
       * @default [0, 0, 0, 1]
       * @private
       */this.background = background; /**
       * Modelview matrix
       * @var {number} Entity.Scene.modelViewMatrix
       * @default [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
       * @private
       */this.modelViewMatrix = mat4.create(); /**
       * Projection matrix
       * @var {number} Entity.Scene.projectionMatrix
       * @default [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
       * @private
       */this.projectionMatrix = mat4.create(); /**
       * Normal matrix
       * @var {number} Entity.Scene.normalMatrix
       * @default [0, 0, 0, 0, 0, 0, 0, 0, 0]
       * @private
       */this.normalMatrix = mat3.create(); /**
       * View transformation stack
       * @var {number} Entity.Scene.stack
       * @default []
       * @private
       */this.stack = [];} /**
    * Configure the scene
    * @function Entity.Scene.configure
    * @returns {undefined}
    */_createClass(Scene,[{key:"configure",value:function configure(){gl.enable(gl.CULL_FACE);gl.frontFace(gl.CCW);} /**
    * Bind the scene
    * @function Entity.Scene.configure
    * @returns {undefined}
    */},{key:"bind",value:function bind(){gl.clearColor.apply(gl,this.background);} /**
    * Push the current state of the scene into
    * the view transformation stack
    * @function Entity.Scene.save
    * @returns {undefined}
    */},{key:"save",value:function save(){var currentScene=mat4.clone(this.modelViewMatrix);this.stack.push(currentScene);} /**
    * Revert the current scene to last
    * state in view transformation stack
    * @function Entity.Scene.restore
    * @returns {undefined}
    */},{key:"restore",value:function restore(){var stack=this.stack;if(stack.length){var previousScene=stack.pop();mat4.copy(this.modelViewMatrix,previousScene);}} /**
    * Scale the scene by a given magnitude
    * @function Entity.Scene.scale
    * @param {number} scale - Scale multiplier
    * @returns {undefined}
    */},{key:"scale",value:function scale(_scale){var modelViewMatrix=this.modelViewMatrix;mat4.scale(modelViewMatrix,modelViewMatrix,_scale);} /**
    * Rotate the scene by a given magnitude and axis
    * @function Entity.Scene.rotate
    * @param {number} rotation - Rotation in radians
    * @param {string} pivot - Axis to rotate around
    * @returns {undefined}
    */},{key:"rotate",value:function rotate(rotation,pivot){var modelViewMatrix=this.modelViewMatrix;mat4.rotate(modelViewMatrix,modelViewMatrix,rotation,axis[pivot]);} /**
    * Rotate the scene by a given magnitude
    * around the x axis
    * @function Entity.Scene.rotateX
    * @param {number} rotation - Rotation in radians
    * @returns {undefined}
    */},{key:"rotateX",value:function rotateX(rotation){this.rotate(rotation,'x');} /**
    * Rotate the scene by a given magnitude
    * around the y axis
    * @function Entity.Scene.rotateX
    * @param {number} rotation - Rotation in radians
    * @returns {undefined}
    */},{key:"rotateY",value:function rotateY(rotation){this.rotate(rotation,'y');} /**
    * Rotate the scene by a given magnitude
    * around the z axis
    * @function Entity.Scene.rotateZ
    * @param {number} rotation - Rotation in radians
    * @returns {undefined}
    */},{key:"rotateZ",value:function rotateZ(rotation){this.rotate(rotation,'z');} /**
    * Translate the scene by a given vector
    * @function Entity.Scene.translate
    * @param {vec3} translation - Translation vector
    * @returns {undefined}
    */},{key:"translate",value:function translate(translation){var modelViewMatrix=this.modelViewMatrix;mat4.translate(modelViewMatrix,modelViewMatrix,translation);}}]);return Scene;})(Entity);module.exports = Scene;},{"./Entity":15,"./gl":38,"gl-matrix":1}],31:[function(require,module,exports){'use strict';var Entity=require('./Entity');var gl=require('./gl');var ajax=require('./utils/ajax'); /**
 * Shader is a wrapper on WebGLShader buffers
 * @class Shader
 * @name Entity.Shader
 * @extends Entity
 * @param {string} [name=shader] - Instance name
 * @param {string} path - Filepath to shader source
 * @param {number} type - Shader type
 */var Shader=(function(_Entity11){_inherits(Shader,_Entity11);function Shader(_x21,type){var _ref21=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref21$name=_ref21.name;var name=_ref21$name === undefined?'shader':_ref21$name;var path=_ref21.path;_classCallCheck(this,Shader);_get(Object.getPrototypeOf(Shader.prototype),"constructor",this).call(this,{name:name}); /**
       * WebGL shader buffer
       * @var {WebGLShader} Entity.Shader.buffer
       * @default WebGLShader
       * @private
       */this.buffer = gl.createShader(type);this.fetch(path);} /**
    * Fetch and compile the shader source
    * @function Entity.Shader.fetch
    * @param {string} path - Filepath to shader source
    * @returns {undefined}
    */_createClass(Shader,[{key:"fetch",value:function fetch(path){ajax(path).then(this.compile);} /**
    * Compile the shader source
    * @function Entity.Shader.compile
    * @param {string} source - Shader source
    * @returns {undefined}
    */},{key:"compile",value:function compile(source){var buffer=this.buffer;gl.shaderSource(buffer,source);gl.compileShader(buffer);this.check();} /**
    * Validate shader compile status
    * @function Entity.Shader.check
    * @returns {undefined}
    */},{key:"check",value:function check(){var buffer=this.buffer;var status=gl.getShaderParameter(buffer,gl.COMPILE_STATUS);if(!status){var _error2=gl.getShaderInfoLog(buffer);gl.deleteShader(buffer);throw new Error(_error2);}return true;}}]);return Shader;})(Entity);module.exports = Shader;},{"./Entity":15,"./gl":38,"./utils/ajax":40}],32:[function(require,module,exports){'use strict';var Light=require('./Light'); /**
 * SpotLight is a local light source pointing in a particular
 * direction to illuminate an area of the scene
 * @class SpotLight
 * @name Entity.Light.SpotLight
 * @extends Entity.Light
 * @param {string} [name=point.light] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {number} exponent - Light fade intensity
 * @param {number} cutoff - Light cutoff
 * @param {number} [intensity=1] - Light intensity
 * @param {vec3} [location=[0, 0, 0]] - Light position
 * @param {vec3} [direction=[0, 0, 0]] - Light direction
 */var SpotLight=(function(_Light3){_inherits(SpotLight,_Light3);function SpotLight(){var _ref22=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref22$name=_ref22.name;var name=_ref22$name === undefined?'spot.light':_ref22$name;var ambient=_ref22.ambient;var diffuse=_ref22.diffuse;var specular=_ref22.specular;var exponent=_ref22.exponent;var cutoff=_ref22.cutoff;var intensity=_ref22.intensity;var location=_ref22.location;var direction=_ref22.direction;_classCallCheck(this,SpotLight);_get(Object.getPrototypeOf(SpotLight.prototype),"constructor",this).call(this,{name:name,ambient:ambient,diffuse:diffuse,specular:specular,intensity:intensity,location:location}); /**
       * Light fade intensity
       * @var {number} Entity.Light.SpotLight.exponent
       * @private
       */this.exponent = exponent; /**
       * Light cutoff
       * @var {number} Entity.Light.SpotLight.cutoff
       * @private
       */this.cutoff = cutoff; /**
       * Light direction
       * @var {vec3} Entity.Light.SpotLight.direction
       * @default [0, 0, 0]
       * @private
       */this.direction = direction;} /**
    * Set spotlight shader uniform values
    * @function Entity.Light.SpotLight.bind
    * @param {object} uniform - Light shader uniforms
    * @returns {undefined}
    */_createClass(SpotLight,[{key:"bind",value:function bind(uniform){_get(Object.getPrototypeOf(SpotLight.prototype),"bind",this).call(this,uniform);uniform.exponent.set(this.exponent);uniform.cutoff.set(this.cutoff);uniform.direction.set(this.direction);}}]);return SpotLight;})(Light);module.exports = SpotLight;},{"./Light":20}],33:[function(require,module,exports){'use strict';var Entity=require('./Entity');var gl=require('./gl');var unit=0; /**
 * Texture is a wrapper on WebGLTexture buffers
 * @abstract
 * @class Texture
 * @name Entity.Texture
 * @extends Entity
 * @param {string} [name=attribute] - Name of the Texture instance
 * @param {Array} image - Texture data
 * @param {number} [lod=0] - Level of detail
 * @param {number} [components=gl.RGB] - Texture components per texel
 * @param {number} [format=gl.UNSIGNED_BYTE] - Component data format
 * @param {number} [magnification=gl.NEAREST] - Magnification sampling filter
 * @param {number} [minification=gl.NEAREST] - Minification sampling filter
 * @param {number} [S=gl.CLAMP_TO_EDGE] - Horizontal texture wrapping
 * @param {number} [T=gl.CLAMP_TO_EDGE] - Vertex texture wrapping
 */var Texture=(function(_Entity12){_inherits(Texture,_Entity12);function Texture(){var _ref23=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref23$name=_ref23.name;var name=_ref23$name === undefined?'texture':_ref23$name;var image=_ref23.image;var _ref23$lod=_ref23.lod;var lod=_ref23$lod === undefined?0:_ref23$lod;var _ref23$components=_ref23.components;var components=_ref23$components === undefined?gl.RGB:_ref23$components;var _ref23$format=_ref23.format;var format=_ref23$format === undefined?gl.UNSIGNED_BYTE:_ref23$format;var _ref23$magnification=_ref23.magnification;var magnification=_ref23$magnification === undefined?gl.NEAREST:_ref23$magnification;var _ref23$minification=_ref23.minification;var minification=_ref23$minification === undefined?gl.NEAREST:_ref23$minification;var _ref23$S=_ref23.S;var S=_ref23$S === undefined?gl.CLAMP_TO_EDGE:_ref23$S;var _ref23$T=_ref23.T;var T=_ref23$T === undefined?gl.CLAMP_TO_EDGE:_ref23$T;_classCallCheck(this,Texture);_get(Object.getPrototypeOf(Texture.prototype),"constructor",this).call(this,{name:name}); /**
       * WebGL texture buffer
       * @var {WebGLTexture} Entity.Texture.buffer
       * @default WebGLTexture
       * @private
       */this.buffer = gl.createTexture(); /**
       * Texture data
       * @var {Array} Entity.Texture.image
       * @private
       */this.image = image; /**
       * Level of detail
       * @var {number} Entity.Texture.lod
       * @default 0
       * @private
       */this.lod = lod; /**
       * Texture components per texel
       * @var {number} Entity.Texture.components
       * @default gl.RGB
       * @private
       */this.components = components; /**
       * Component data format
       * @var {number} Entity.Texture.format
       * @default gl.UNSIGNED_BYTE
       * @private
       */this.format = format; /**
       * Magnification sampling filter
       * @var {number} Entity.Texture.magnification
       * @default gl.NEAREST
       * @private
       */this.magnification = magnification; /**
       * Minification sampling filter
       * @var {number} Entity.Texture.minification
       * @default gl.NEAREST
       * @private
       */this.minification = minification; /**
       * Horizontal texture wrapping
       * @var {number} Entity.Texture.S
       * @default gl.CLAMP_TO_EDGE
       * @private
       */this.S = S; /**
       * Vertex texture wrapping
       * @var {number} Entity.Texture.T
       * @default gl.CLAMP_TO_EDGE
       * @private
       */this.T = T; /**
       * Texture unit
       * @var {number} Entity.Texture.unit
       * @default *
       * @private
       */this.unit = unit++;configure();} /**
    * Apply appropriate texture parameters
    * @function Entity.Texture.configure
    * @returns {undefined}
    */_createClass(Texture,[{key:"configure",value:function configure(){this.bind();gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,this.magnification);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,this.minification);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,this.S);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,this.T);} /**
    * Bind the texture
    * @function Entity.Texture.bind
    * @param {boolean|Entity.Uniform} [sampler=false] - Texture sampler uniform
    * @returns {undefined}
    */},{key:"bind",value:function bind(){var sampler=arguments.length <= 0 || arguments[0] === undefined?false:arguments[0];var unit=this.unit;var active=gl.TEXTURE0 + unit;gl.activeTexture(active);gl.bindTexture(gl.TEXTURE_2D,this.buffer);if(sampler){sampler.set(unit);}} /**
    * Unbind the texture
    * @function Entity.Texture.unbind
    * @returns {undefined}
    */},{key:"unbind",value:function unbind(){gl.bindTexture(gl.TEXTURE_2D,null);}}]);return Texture;})(Entity);module.exports = Texture;},{"./Entity":15,"./gl":38}],34:[function(require,module,exports){'use strict';var Entity=require('./Entity');var gl=require('./gl'); /**
 * Uniform is a wrapper on shader WebGLUniformLocation uniforms
 * @class Uniform
 * @name Entity.Uniform
 * @extends Entity
 * @param {string} [name=program] - Instance name
 * @param {Entity.Program} [program] - Program in which the shader uniform is used
 * @param {string} uniform - Shader variable name
 * @param {number} format - Component data format
 */var Uniform=(function(_Entity13){_inherits(Uniform,_Entity13);function Uniform(){var _ref24=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref24$name=_ref24.name;var name=_ref24$name === undefined?'uniform':_ref24$name;var program=_ref24.program;var uniform=_ref24.uniform;var format=_ref24.format;_classCallCheck(this,Uniform);_get(Object.getPrototypeOf(Uniform.prototype),"constructor",this).call(this,{name:name}); /**
       * Shader variable name
       * @var {object} [Entity.Uniform.uniform=u_${uniform}]
       * @private
       */this.uniform = "u_" + uniform; /**
       * Shader uniform location
       * @var {WebGLUniformLocation} [Entity.Uniform.location=WebGLUniformLocation]
       * @private
       */this.location = gl.getUniformLocation(program,uniform); /**
       * Uniform setter method
       * @var {string} [Entity.Uniform.location=gl.getAttributeLocation]
       * @default uniform${format}
       * @private
       */this.method = "uniform" + format;} /**
    * Set shader uniform value
    * @function Entity.Uniform.set
    * @param {*} value - Shader uniform value
    * @returns {undefined}
    */_createClass(Uniform,[{key:"set",value:function set(value){gl[this.method](this.location,value);}}]);return Uniform;})(Entity);module.exports = Uniform;},{"./Entity":15,"./gl":38}],35:[function(require,module,exports){'use strict';var Entity=require('./Entity');var gl=require('./gl'); /**
 * VertexArrayObject retains the attributes associated with 
 * the rendering for a given, therefore providing a handler
 * to manage their referencing in the vertex shader
 * @class VertexArrayObject
 * @name Entity.VertexArrayObject
 * @extends Entity
 * @param {string} [name=vertex.array.object] - Instance name
 * @param {Entity.Mesh} mesh - Mesh
 * @param {Array} [attributes=[]] - Mesh vertex attributs
 */var VertexArrayObject=(function(_Entity14){_inherits(VertexArrayObject,_Entity14);function VertexArrayObject(){var _ref25=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref25$name=_ref25.name;var name=_ref25$name === undefined?'vertex.array.object':_ref25$name;var mesh=_ref25.mesh;var _ref25$attributes=_ref25.attributes;var attributes=_ref25$attributes === undefined?[]:_ref25$attributes;_classCallCheck(this,VertexArrayObject);_get(Object.getPrototypeOf(VertexArrayObject.prototype),"constructor",this).call(this,{name:name}); /**
       * Mesh
       * @var {Entity.Mesh} Entity.VertexArrayObject.mesh
       * @private
       */this.mesh = mesh; /**
       * Mesh vertex attributes
       * @var {Array} Entity.VertexArrayObject.attributes
       * @private
       */this.attributes = attributes.map(this.offset); /**
       * Mesh vertex attributes byte count
       * @var {number} Entity.VertexArrayObject.stride
       * @private
		 * @default 0
       */this.stride = 0;} /**
    * Compute the byte offset for a given 
	 * vertex attribute attribute within the
	 * vertex array buffer object
    * @function Entity.VertexArrayObject.offset
    * @param {Entity.Attribute} attribute - Vertex attribute to evaluate
    * @returns {object}
    */_createClass(VertexArrayObject,[{key:"offset",value:function offset(attribute){var bytes=attribute.getByteCount();return {object:attribute,offset:this.stride += bytes};} /**
    * Enable the given vertex attribute
    * @callback Entity.VertexArrayObject.enable
    * @param {Entity.Attribute} attribute - Vertex attribute to enable
    * @returns {undefined}
    */},{key:"enable",value:function enable(attribute){attribute.object.enable(this.stride,attribute.offset);} /**
    * Disable the given vertex attribute
    * @callback Entity.VertexArrayObject.disable
    * @param {Entity.Attribute} attribute - Vertex attribute to disable
    * @returns {undefined}
    */},{key:"disable",value:function disable(attribute){attribute.object.disable();} /**
    * Bind and enable the mesh and vertex attributes respectively
    * @function Entity.VertexArrayObject.bind
    * @returns {undefined}
    */},{key:"bind",value:function bind(){this.attributes.map(this.enable);} /**
    * Unbind and disable the mesh and vertex attributes respectively
    * @function Entity.VertexArrayObject.unbind
    * @returns {undefined}
    */},{key:"unbind",value:function unbind(){this.attributes.map(this.disable);}}]);return VertexArrayObject;})(Entity);module.exports = VertexArrayObject;},{"./Entity":15,"./gl":38}],36:[function(require,module,exports){'use strict';var Shader=require('./Shader');var gl=require('./gl'); /**
 * VertexShader is a wrapper on WebGLShader buffers
 * @class VertexShader
 * @name Entity.Shader.VertexShader
 * @extends Entity.Shader
 * @param {string} [name=vertex.shader] - Instance name
 * @param {string} path - Filepath to vertex shader source
 */var VertexShader=(function(_Shader2){_inherits(VertexShader,_Shader2);function VertexShader(){var _ref26=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref26$name=_ref26.name;var name=_ref26$name === undefined?'vertex.shader':_ref26$name;var path=_ref26.path;_classCallCheck(this,VertexShader);_get(Object.getPrototypeOf(VertexShader.prototype),"constructor",this).call(this,{name:name,path:path},gl.VERTEX_SHADER);}return VertexShader;})(Shader);module.exports = VertexShader;},{"./Shader":31,"./gl":38}],37:[function(require,module,exports){'use strict'; /**
 * @fileoverview FourJS - FourJS is a plug-and-play WebGL-based physics
 * engine using advanced GPGPU techniques to maximise capabilities and
 * performance.
 * FourJS on [GitHub]{@link https://github.com/allotrop3/fourjs.git} or [download]{@link http://fourjs/dist/scripts/four.js}.
 * @author Jason Petersen
 * @version 0.0.0
 */var four={glm:require('gl-matrix'),gl:require('./gl'),Entity:require('./Entity'),Attribute:require('./Attribute'),Fluid:require('./Fluid'),Framebuffer:require('./Framebuffer'),DeferredFramebuffer:require('./DeferredFramebuffer'),Light:require('./Light'),DirectionalLight:require('./DirectionalLight'),PointLight:require('./PointLight'),SpotLight:require('./SpotLight'),Material:require('./Material'),PhongMaterial:require('./PhongMaterial'),Mesh:require('./Mesh'),Program:require('./Program'),Renderbuffer:require('./Renderbuffer'),Scene:require('./Scene'),OrthographicScene:require('./OrthographicScene'),PerspectiveScene:require('./PerspectiveScene'),Shader:require('./Shader'),FragmentShader:require('./FragmentShader'),VertexShader:require('./VertexShader'),Texture:require('./Texture'),DataTexture:require('./DataTexture'),ImageTexture:require('./ImageTexture'),Uniform:require('./Uniform')};module.exports = window.four = four;},{"./Attribute":11,"./DataTexture":12,"./DeferredFramebuffer":13,"./DirectionalLight":14,"./Entity":15,"./Fluid":16,"./FragmentShader":17,"./Framebuffer":18,"./ImageTexture":19,"./Light":20,"./Material":21,"./Mesh":22,"./OrthographicScene":23,"./PerspectiveScene":24,"./PhongMaterial":25,"./PointLight":26,"./Program":27,"./Renderbuffer":28,"./Scene":30,"./Shader":31,"./SpotLight":32,"./Texture":33,"./Uniform":34,"./VertexShader":36,"./gl":38,"gl-matrix":1}],38:[function(require,module,exports){'use strict';var canvas=document.querySelector('canvas');var gl=canvas.getContext('webgl');module.exports = gl;},{}],39:[function(require,module,exports){'use strict';var gl=require('./gl');},{"./gl":38}],40:[function(require,module,exports){'use strict';var promise=require('./promise');function ajax(url){return promise(function(resolve,reject){var request=new XMLHttpRequest();request.open('get',url);request.onload = function(){var status=request.status;if(status === 200){resolve(request.response);}else {var _status=url + ": " + request.statusText;var _error3=new Error(_status);reject(_error3);}};request.send();});}module.exports = ajax;},{"./promise":41}],41:[function(require,module,exports){'use strict';function promise(handler){return new Promise(handler);}module.exports = promise;},{}]},{},[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]);
//# sourceMappingURL=four.js.map