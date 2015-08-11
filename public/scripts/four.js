"use strict";
var _createClass = (function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
})();
var _get = function get(_x35, _x36, _x37) {
    var _again = true;
    _function: while (_again) {
        var object = _x35,
            property = _x36,
            receiver = _x37;
        desc = parent = getter = undefined;
        _again = false;
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
                return undefined;
            } else {
                _x35 = parent;
                _x36 = property;
                _x37 = receiver;
                _again = true;
                continue _function;
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;
            if (getter === undefined) {
                return undefined;
            }
            return getter.call(receiver);
        }
    }
};

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw (f.code = "MODULE_NOT_FOUND", f);
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s;
})({
    1: [function(require, module, exports) {
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
THE SOFTWARE. */ // END HEADER
        exports.glMatrix = require("./gl-matrix/common.js");
        exports.mat2 = require("./gl-matrix/mat2.js");
        exports.mat2d = require("./gl-matrix/mat2d.js");
        exports.mat3 = require("./gl-matrix/mat3.js");
        exports.mat4 = require("./gl-matrix/mat4.js");
        exports.quat = require("./gl-matrix/quat.js");
        exports.vec2 = require("./gl-matrix/vec2.js");
        exports.vec3 = require("./gl-matrix/vec3.js");
        exports.vec4 = require("./gl-matrix/vec4.js");
    }, {
        "./gl-matrix/common.js": 2,
        "./gl-matrix/mat2.js": 3,
        "./gl-matrix/mat2d.js": 4,
        "./gl-matrix/mat3.js": 5,
        "./gl-matrix/mat4.js": 6,
        "./gl-matrix/quat.js": 7,
        "./gl-matrix/vec2.js": 8,
        "./gl-matrix/vec3.js": 9,
        "./gl-matrix/vec4.js": 10
    }],
    2: [function(require, module, exports) {
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
        var glMatrix = {}; // Constants
        glMatrix.EPSILON = 0.000001;
        glMatrix.ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
        glMatrix.RANDOM = Math.random;
        /**
         * Sets the type of array used when creating new vectors and matrices
         *
         * @param {Type} type Array type, such as Float32Array or Array
         */
        glMatrix.setMatrixArrayType = function(type) {
            GLMAT_ARRAY_TYPE = type;
        };
        var degree = Math.PI / 180;
        /**
         * Convert Degree To Radian
         *
         * @param {Number} Angle in Degrees
         */
        glMatrix.toRadian = function(a) {
            return a * degree;
        };
        module.exports = glMatrix;
    }, {}],
    3: [function(require, module, exports) {
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
        var glMatrix = require("./common.js");
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
        mat2.create = function() {
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
        mat2.clone = function(a) {
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
        mat2.copy = function(out, a) {
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
        mat2.identity = function(out) {
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
        mat2.transpose = function(out, a) { // If we are transposing ourselves we can skip a few steps but have to cache some values
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
        mat2.invert = function(out, a) {
            var a0 = a[0],
                a1 = a[1],
                a2 = a[2],
                a3 = a[3], // Calculate the determinant
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
        mat2.adjoint = function(out, a) { // Caching this value is nessecary if out == a
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
        mat2.determinant = function(a) {
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
        mat2.multiply = function(out, a, b) {
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
        mat2.rotate = function(out, a, rad) {
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
        mat2.scale = function(out, a, v) {
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
        mat2.fromRotation = function(out, rad) {
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
        mat2.fromScaling = function(out, v) {
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
        mat2.str = function(a) {
            return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
        };
        /**
         * Returns Frobenius norm of a mat2
         *
         * @param {mat2} a the matrix to calculate Frobenius norm of
         * @returns {Number} Frobenius norm
         */
        mat2.frob = function(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
        };
        /**
         * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
         * @param {mat2} L the lower triangular matrix 
         * @param {mat2} D the diagonal matrix 
         * @param {mat2} U the upper triangular matrix 
         * @param {mat2} a the input matrix to factorize
         */
        mat2.LDU = function(L, D, U, a) {
            L[2] = a[2] / a[0];
            U[0] = a[0];
            U[1] = a[1];
            U[3] = a[3] - L[2] * U[1];
            return [L, D, U];
        };
        module.exports = mat2;
    }, {
        "./common.js": 2
    }],
    4: [function(require, module, exports) {
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
        var glMatrix = require("./common.js");
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
        mat2d.create = function() {
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
        mat2d.clone = function(a) {
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
        mat2d.copy = function(out, a) {
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
        mat2d.identity = function(out) {
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
        mat2d.invert = function(out, a) {
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
        mat2d.determinant = function(a) {
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
        mat2d.multiply = function(out, a, b) {
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
        mat2d.rotate = function(out, a, rad) {
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
        mat2d.scale = function(out, a, v) {
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
        mat2d.translate = function(out, a, v) {
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
        mat2d.fromRotation = function(out, rad) {
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
        mat2d.fromScaling = function(out, v) {
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
        mat2d.fromTranslation = function(out, v) {
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
        mat2d.str = function(a) {
            return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
        };
        /**
         * Returns Frobenius norm of a mat2d
         *
         * @param {mat2d} a the matrix to calculate Frobenius norm of
         * @returns {Number} Frobenius norm
         */
        mat2d.frob = function(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1);
        };
        module.exports = mat2d;
    }, {
        "./common.js": 2
    }],
    5: [function(require, module, exports) {
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
        var glMatrix = require("./common.js");
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
        mat3.create = function() {
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
        mat3.fromMat4 = function(out, a) {
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
        mat3.clone = function(a) {
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
        mat3.copy = function(out, a) {
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
        mat3.identity = function(out) {
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
        mat3.transpose = function(out, a) { // If we are transposing ourselves we can skip a few steps but have to cache some values
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
        mat3.invert = function(out, a) {
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
                b21 = a21 * a10 - a11 * a20, // Calculate the determinant
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
        mat3.adjoint = function(out, a) {
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
        mat3.determinant = function(a) {
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
        mat3.multiply = function(out, a, b) {
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
        mat3.translate = function(out, a, v) {
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
        mat3.rotate = function(out, a, rad) {
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
        mat3.scale = function(out, a, v) {
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
        mat3.fromTranslation = function(out, v) {
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
        mat3.fromRotation = function(out, rad) {
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
        mat3.fromScaling = function(out, v) {
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
        mat3.fromMat2d = function(out, a) {
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
        mat3.fromQuat = function(out, q) {
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
        mat3.normalFromMat4 = function(out, a) {
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
                b11 = a22 * a33 - a23 * a32, // Calculate the determinant
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
        mat3.str = function(a) {
            return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
        };
        /**
         * Returns Frobenius norm of a mat3
         *
         * @param {mat3} a the matrix to calculate Frobenius norm of
         * @returns {Number} Frobenius norm
         */
        mat3.frob = function(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
        };
        module.exports = mat3;
    }, {
        "./common.js": 2
    }],
    6: [function(require, module, exports) {
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
        var glMatrix = require("./common.js");
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
        mat4.create = function() {
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
        mat4.clone = function(a) {
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
        mat4.copy = function(out, a) {
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
        mat4.identity = function(out) {
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
        mat4.transpose = function(out, a) { // If we are transposing ourselves we can skip a few steps but have to cache some values
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
        mat4.invert = function(out, a) {
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
                b11 = a22 * a33 - a23 * a32, // Calculate the determinant
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
        mat4.adjoint = function(out, a) {
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
        mat4.determinant = function(a) {
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
                b11 = a22 * a33 - a23 * a32; // Calculate the determinant
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
        mat4.multiply = function(out, a, b) {
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
                a33 = a[15]; // Cache only the current line of the second matrix
            var b0 = b[0],
                b1 = b[1],
                b2 = b[2],
                b3 = b[3];
            out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b[4];
            b1 = b[5];
            b2 = b[6];
            b3 = b[7];
            out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b[8];
            b1 = b[9];
            b2 = b[10];
            b3 = b[11];
            out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b[12];
            b1 = b[13];
            b2 = b[14];
            b3 = b[15];
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
        mat4.translate = function(out, a, v) {
            var x = v[0],
                y = v[1],
                z = v[2],
                a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23;
            if (a === out) {
                out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
                out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
                out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
                out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
            } else {
                a00 = a[0];
                a01 = a[1];
                a02 = a[2];
                a03 = a[3];
                a10 = a[4];
                a11 = a[5];
                a12 = a[6];
                a13 = a[7];
                a20 = a[8];
                a21 = a[9];
                a22 = a[10];
                a23 = a[11];
                out[0] = a00;
                out[1] = a01;
                out[2] = a02;
                out[3] = a03;
                out[4] = a10;
                out[5] = a11;
                out[6] = a12;
                out[7] = a13;
                out[8] = a20;
                out[9] = a21;
                out[10] = a22;
                out[11] = a23;
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
        mat4.scale = function(out, a, v) {
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
        mat4.rotate = function(out, a, rad, axis) {
            var x = axis[0],
                y = axis[1],
                z = axis[2],
                len = Math.sqrt(x * x + y * y + z * z),
                s, c, t, a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, b00, b01, b02, b10, b11, b12, b20, b21, b22;
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
            a00 = a[0];
            a01 = a[1];
            a02 = a[2];
            a03 = a[3];
            a10 = a[4];
            a11 = a[5];
            a12 = a[6];
            a13 = a[7];
            a20 = a[8];
            a21 = a[9];
            a22 = a[10];
            a23 = a[11]; // Construct the elements of the rotation matrix
            b00 = x * x * t + c;
            b01 = y * x * t + z * s;
            b02 = z * x * t - y * s;
            b10 = x * y * t - z * s;
            b11 = y * y * t + c;
            b12 = z * y * t + x * s;
            b20 = x * z * t + y * s;
            b21 = y * z * t - x * s;
            b22 = z * z * t + c; // Perform rotation-specific matrix multiplication
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
            if (a !== out) { // If the source and destination differ, copy the unchanged last row
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
        mat4.rotateX = function(out, a, rad) {
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
            if (a !== out) { // If the source and destination differ, copy the unchanged rows
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                out[3] = a[3];
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15];
            } // Perform axis-specific matrix multiplication
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
        mat4.rotateY = function(out, a, rad) {
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
            if (a !== out) { // If the source and destination differ, copy the unchanged rows
                out[4] = a[4];
                out[5] = a[5];
                out[6] = a[6];
                out[7] = a[7];
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15];
            } // Perform axis-specific matrix multiplication
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
        mat4.rotateZ = function(out, a, rad) {
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
            if (a !== out) { // If the source and destination differ, copy the unchanged last row
                out[8] = a[8];
                out[9] = a[9];
                out[10] = a[10];
                out[11] = a[11];
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15];
            } // Perform axis-specific matrix multiplication
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
        mat4.fromTranslation = function(out, v) {
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
        mat4.fromScaling = function(out, v) {
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
        mat4.fromRotation = function(out, rad, axis) {
            var x = axis[0],
                y = axis[1],
                z = axis[2],
                len = Math.sqrt(x * x + y * y + z * z),
                s, c, t;
            if (Math.abs(len) < glMatrix.EPSILON) {
                return null;
            }
            len = 1 / len;
            x *= len;
            y *= len;
            z *= len;
            s = Math.sin(rad);
            c = Math.cos(rad);
            t = 1 - c; // Perform rotation-specific matrix multiplication
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
        mat4.fromXRotation = function(out, rad) {
            var s = Math.sin(rad),
                c = Math.cos(rad); // Perform axis-specific matrix multiplication
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
        mat4.fromYRotation = function(out, rad) {
            var s = Math.sin(rad),
                c = Math.cos(rad); // Perform axis-specific matrix multiplication
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
        mat4.fromZRotation = function(out, rad) {
            var s = Math.sin(rad),
                c = Math.cos(rad); // Perform axis-specific matrix multiplication
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
        mat4.fromRotationTranslation = function(out, q, v) { // Quaternion math
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
        mat4.fromRotationTranslationScale = function(out, q, v, s) { // Quaternion math
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
        mat4.fromRotationTranslationScaleOrigin = function(out, q, v, s, o) { // Quaternion math
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
        mat4.fromQuat = function(out, q) {
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
        mat4.frustum = function(out, left, right, bottom, top, near, far) {
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
        mat4.perspective = function(out, fovy, aspect, near, far) {
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
        mat4.perspectiveFromFieldOfView = function(out, fov, near, far) {
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
        mat4.ortho = function(out, left, right, bottom, top, near, far) {
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
        mat4.lookAt = function(out, eye, center, up) {
            var x0, x1, x2, y0, y1, y2, z0, z1, z2, len, eyex = eye[0],
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
        mat4.str = function(a) {
            return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
        };
        /**
         * Returns Frobenius norm of a mat4
         *
         * @param {mat4} a the matrix to calculate Frobenius norm of
         * @returns {Number} Frobenius norm
         */
        mat4.frob = function(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
        };
        module.exports = mat4;
    }, {
        "./common.js": 2
    }],
    7: [function(require, module, exports) {
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
        var glMatrix = require("./common.js");
        var mat3 = require("./mat3.js");
        var vec3 = require("./vec3.js");
        var vec4 = require("./vec4.js");
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
        quat.create = function() {
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
        quat.rotationTo = (function() {
            var tmpvec3 = vec3.create();
            var xUnitVec3 = vec3.fromValues(1, 0, 0);
            var yUnitVec3 = vec3.fromValues(0, 1, 0);
            return function(out, a, b) {
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
        })();
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
        quat.setAxes = (function() {
            var matr = mat3.create();
            return function(out, view, right, up) {
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
        })();
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
        quat.identity = function(out) {
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
        quat.setAxisAngle = function(out, axis, rad) {
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
        quat.multiply = function(out, a, b) {
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
        quat.rotateX = function(out, a, rad) {
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
        quat.rotateY = function(out, a, rad) {
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
        quat.rotateZ = function(out, a, rad) {
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
        quat.calculateW = function(out, a) {
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
        quat.slerp = function(out, a, b, t) { // benchmarks:
            //    http://jsperf.com/quaternion-slerp-implementations
            var ax = a[0],
                ay = a[1],
                az = a[2],
                aw = a[3],
                bx = b[0],
                by = b[1],
                bz = b[2],
                bw = b[3];
            var omega, cosom, sinom, scale0, scale1; // calc cosine
            cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)
            if (cosom < 0.0) {
                cosom = -cosom;
                bx = -bx;
                by = -by;
                bz = -bz;
                bw = -bw;
            } // calculate coefficients
            if (1.0 - cosom > 0.000001) { // standard case (slerp)
                omega = Math.acos(cosom);
                sinom = Math.sin(omega);
                scale0 = Math.sin((1.0 - t) * omega) / sinom;
                scale1 = Math.sin(t * omega) / sinom;
            } else { // "from" and "to" quaternions are very close 
                //  ... so we can do a linear interpolation
                scale0 = 1.0 - t;
                scale1 = t;
            } // calculate final values
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
        quat.sqlerp = (function() {
            var temp1 = quat.create();
            var temp2 = quat.create();
            return function(out, a, b, c, d, t) {
                quat.slerp(temp1, a, d, t);
                quat.slerp(temp2, b, c, t);
                quat.slerp(out, temp1, temp2, 2 * t * (1 - t));
                return out;
            };
        })();
        /**
         * Calculates the inverse of a quat
         *
         * @param {quat} out the receiving quaternion
         * @param {quat} a quat to calculate inverse of
         * @returns {quat} out
         */
        quat.invert = function(out, a) {
            var a0 = a[0],
                a1 = a[1],
                a2 = a[2],
                a3 = a[3],
                dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,
                invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
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
        quat.conjugate = function(out, a) {
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
        quat.fromMat3 = function(out, m) { // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
            // article "Quaternion Calculus and Fast Animation".
            var fTrace = m[0] + m[4] + m[8];
            var fRoot;
            if (fTrace > 0.0) { // |w| > 1/2, may as well choose w > 1/2
                fRoot = Math.sqrt(fTrace + 1.0); // 2w
                out[3] = 0.5 * fRoot;
                fRoot = 0.5 / fRoot; // 1/(4w)
                out[0] = (m[5] - m[7]) * fRoot;
                out[1] = (m[6] - m[2]) * fRoot;
                out[2] = (m[1] - m[3]) * fRoot;
            } else { // |w| <= 1/2
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
        quat.str = function(a) {
            return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
        };
        module.exports = quat;
    }, {
        "./common.js": 2,
        "./mat3.js": 5,
        "./vec3.js": 9,
        "./vec4.js": 10
    }],
    8: [function(require, module, exports) {
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
        var glMatrix = require("./common.js");
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
        vec2.create = function() {
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
        vec2.clone = function(a) {
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
        vec2.fromValues = function(x, y) {
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
        vec2.copy = function(out, a) {
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
        vec2.set = function(out, x, y) {
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
        vec2.add = function(out, a, b) {
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
        vec2.subtract = function(out, a, b) {
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
        vec2.multiply = function(out, a, b) {
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
        vec2.divide = function(out, a, b) {
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
        vec2.min = function(out, a, b) {
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
        vec2.max = function(out, a, b) {
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
        vec2.scale = function(out, a, b) {
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
        vec2.scaleAndAdd = function(out, a, b, scale) {
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
        vec2.distance = function(a, b) {
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
        vec2.squaredDistance = function(a, b) {
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
        vec2.length = function(a) {
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
        vec2.squaredLength = function(a) {
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
        vec2.negate = function(out, a) {
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
        vec2.inverse = function(out, a) {
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
        vec2.normalize = function(out, a) {
            var x = a[0],
                y = a[1];
            var len = x * x + y * y;
            if (len > 0) { //TODO: evaluate use of glm_invsqrt here?
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
        vec2.dot = function(a, b) {
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
        vec2.cross = function(out, a, b) {
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
        vec2.lerp = function(out, a, b, t) {
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
        vec2.random = function(out, scale) {
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
        vec2.transformMat2 = function(out, a, m) {
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
        vec2.transformMat2d = function(out, a, m) {
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
        vec2.transformMat3 = function(out, a, m) {
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
        vec2.transformMat4 = function(out, a, m) {
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
        vec2.forEach = (function() {
            var vec = vec2.create();
            return function(a, stride, offset, count, fn, arg) {
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
                    vec[0] = a[i];
                    vec[1] = a[i + 1];
                    fn(vec, vec, arg);
                    a[i] = vec[0];
                    a[i + 1] = vec[1];
                }
                return a;
            };
        })();
        /**
         * Returns a string representation of a vector
         *
         * @param {vec2} vec vector to represent as a string
         * @returns {String} string representation of the vector
         */
        vec2.str = function(a) {
            return 'vec2(' + a[0] + ', ' + a[1] + ')';
        };
        module.exports = vec2;
    }, {
        "./common.js": 2
    }],
    9: [function(require, module, exports) {
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
        var glMatrix = require("./common.js");
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
        vec3.create = function() {
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
        vec3.clone = function(a) {
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
        vec3.fromValues = function(x, y, z) {
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
        vec3.copy = function(out, a) {
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
        vec3.set = function(out, x, y, z) {
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
        vec3.add = function(out, a, b) {
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
        vec3.subtract = function(out, a, b) {
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
        vec3.multiply = function(out, a, b) {
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
        vec3.divide = function(out, a, b) {
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
        vec3.min = function(out, a, b) {
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
        vec3.max = function(out, a, b) {
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
        vec3.scale = function(out, a, b) {
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
        vec3.scaleAndAdd = function(out, a, b, scale) {
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
        vec3.distance = function(a, b) {
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
        vec3.squaredDistance = function(a, b) {
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
        vec3.length = function(a) {
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
        vec3.squaredLength = function(a) {
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
        vec3.negate = function(out, a) {
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
        vec3.inverse = function(out, a) {
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
        vec3.normalize = function(out, a) {
            var x = a[0],
                y = a[1],
                z = a[2];
            var len = x * x + y * y + z * z;
            if (len > 0) { //TODO: evaluate use of glm_invsqrt here?
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
        vec3.dot = function(a, b) {
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
        vec3.cross = function(out, a, b) {
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
        vec3.lerp = function(out, a, b, t) {
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
        vec3.hermite = function(out, a, b, c, d, t) {
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
        vec3.bezier = function(out, a, b, c, d, t) {
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
        vec3.random = function(out, scale) {
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
        vec3.transformMat4 = function(out, a, m) {
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
        vec3.transformMat3 = function(out, a, m) {
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
        vec3.transformQuat = function(out, a, q) { // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
            var x = a[0],
                y = a[1],
                z = a[2],
                qx = q[0],
                qy = q[1],
                qz = q[2],
                qw = q[3], // calculate quat * vec
                ix = qw * x + qy * z - qz * y,
                iy = qw * y + qz * x - qx * z,
                iz = qw * z + qx * y - qy * x,
                iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat
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
        vec3.rotateX = function(out, a, b, c) {
            var p = [],
                r = []; //Translate point to the origin
            p[0] = a[0] - b[0];
            p[1] = a[1] - b[1];
            p[2] = a[2] - b[2]; //perform rotation
            r[0] = p[0];
            r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
            r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position
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
        vec3.rotateY = function(out, a, b, c) {
            var p = [],
                r = []; //Translate point to the origin
            p[0] = a[0] - b[0];
            p[1] = a[1] - b[1];
            p[2] = a[2] - b[2]; //perform rotation
            r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
            r[1] = p[1];
            r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position
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
        vec3.rotateZ = function(out, a, b, c) {
            var p = [],
                r = []; //Translate point to the origin
            p[0] = a[0] - b[0];
            p[1] = a[1] - b[1];
            p[2] = a[2] - b[2]; //perform rotation
            r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
            r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
            r[2] = p[2]; //translate to correct position
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
        vec3.forEach = (function() {
            var vec = vec3.create();
            return function(a, stride, offset, count, fn, arg) {
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
                    vec[0] = a[i];
                    vec[1] = a[i + 1];
                    vec[2] = a[i + 2];
                    fn(vec, vec, arg);
                    a[i] = vec[0];
                    a[i + 1] = vec[1];
                    a[i + 2] = vec[2];
                }
                return a;
            };
        })();
        /**
         * Get the angle between two 3D vectors
         * @param {vec3} a The first operand
         * @param {vec3} b The second operand
         * @returns {Number} The angle in radians
         */
        vec3.angle = function(a, b) {
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
        vec3.str = function(a) {
            return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
        };
        module.exports = vec3;
    }, {
        "./common.js": 2
    }],
    10: [function(require, module, exports) {
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
        var glMatrix = require("./common.js");
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
        vec4.create = function() {
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
        vec4.clone = function(a) {
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
        vec4.fromValues = function(x, y, z, w) {
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
        vec4.copy = function(out, a) {
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
        vec4.set = function(out, x, y, z, w) {
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
        vec4.add = function(out, a, b) {
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
        vec4.subtract = function(out, a, b) {
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
        vec4.multiply = function(out, a, b) {
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
        vec4.divide = function(out, a, b) {
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
        vec4.min = function(out, a, b) {
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
        vec4.max = function(out, a, b) {
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
        vec4.scale = function(out, a, b) {
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
        vec4.scaleAndAdd = function(out, a, b, scale) {
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
        vec4.distance = function(a, b) {
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
        vec4.squaredDistance = function(a, b) {
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
        vec4.length = function(a) {
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
        vec4.squaredLength = function(a) {
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
        vec4.negate = function(out, a) {
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
        vec4.inverse = function(out, a) {
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
        vec4.normalize = function(out, a) {
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
        vec4.dot = function(a, b) {
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
        vec4.lerp = function(out, a, b, t) {
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
        vec4.random = function(out, scale) {
            scale = scale || 1.0; //TODO: This is a pretty awful way of doing this. Find something better.
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
        vec4.transformMat4 = function(out, a, m) {
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
        vec4.transformQuat = function(out, a, q) {
            var x = a[0],
                y = a[1],
                z = a[2],
                qx = q[0],
                qy = q[1],
                qz = q[2],
                qw = q[3], // calculate quat * vec
                ix = qw * x + qy * z - qz * y,
                iy = qw * y + qz * x - qx * z,
                iz = qw * z + qx * y - qy * x,
                iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat
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
        vec4.forEach = (function() {
            var vec = vec4.create();
            return function(a, stride, offset, count, fn, arg) {
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
                    vec[0] = a[i];
                    vec[1] = a[i + 1];
                    vec[2] = a[i + 2];
                    vec[3] = a[i + 3];
                    fn(vec, vec, arg);
                    a[i] = vec[0];
                    a[i + 1] = vec[1];
                    a[i + 2] = vec[2];
                    a[i + 3] = vec[3];
                }
                return a;
            };
        })();
        /**
         * Returns a string representation of a vector
         *
         * @param {vec4} vec vector to represent as a string
         * @returns {String} string representation of the vector
         */
        vec4.str = function(a) {
            return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
        };
        module.exports = vec4;
    }, {
        "./common.js": 2
    }],
    11: [function(require, module, exports) {
        'use strict';
        var gl = require('./gl');
        var Entity = require('./Entity');
        var _name = 'attribute';
        var _format = gl.FLOAT;
        var _normalized = false;
        var _offset = 0;
        /**
         * This provides a wrapper to simplify locating, enabling and disabling generic vertex attributes.
         * Vertex attributes are used to communicate from "outside" to the vertex shader. Unlike uniform variables,
         * values are provided per vertex (and not globally for all vertices). Each generic vertex attribute array
         * is initially disabled and isn't accessed when `gl[drawElements|drawArrays]` is called.
         * @class Attribute
         * @name Entity.Attribute
         * @extends Entity
         * @param {string} [name=attribute] - Specifies the entities friendly name.
         * @param {Entity.Program} program - Specifies the program in which the generic vertex attribute is used.
         * @param {string} attribute - Specifies the generic vertex attribute name as used in the shader.
         * @param {number} length - Specifies the number of components per generic vertex attribute. Must be 1, 2, 3, 4.
         * @param {number} [format=gl.FLOAT] - Specifies the data type of each component in the array.
         * @param {boolean} [normalized=false] - Specifies whether fixed-point data values should be normalized
         * (true) or converted directly as fixed-point values (false) when they are accessed.
         * @param {number} [offset=0] - Specifies the offset of the first component of the first generic vertex
         * attribute in the array in the data store of the buffer currently bound to the `gl.ARRAY_BUFFER`.
         * The initial value is 0.
         */
        var Attribute = (function(_Entity) {
            _inherits(Attribute, _Entity);

            function Attribute() {
                var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref$name = _ref.name;
                var name = _ref$name === undefined ? _name : _ref$name;
                var program = _ref.program;
                var attribute = _ref.attribute;
                var length = _ref.length;
                var _ref$format = _ref.format;
                var format = _ref$format === undefined ? _format : _ref$format;
                var _ref$normalized = _ref.normalized;
                var normalized = _ref$normalized === undefined ? _normalized : _ref$normalized;
                var _ref$offset = _ref.offset;
                var offset = _ref$offset === undefined ? _offset : _ref$offset;
                _classCallCheck(this, Attribute);
                _get(Object.getPrototypeOf(Attribute.prototype), "constructor", this).call(this, {
                    name: name
                });
                /**
                 * Vertex attribute variable name as used in the shader.
                 * @var {object} Entity.Attribute.attribute
                 */
                this.attribute = attribute;
                /**
                 * The index of the generic vertex attribute.
                 * @var {number} [Entity.Attribute.location=WebGLAttributeLocation]
                 */
                this.location = gl.getAttribLocation(program.buffer, "a_" + attribute);
                /**
                 * Number of components per generic vertex attribute. Must be 1, 2, 3, 4.
                 * @var {number} Entity.Attribute.length
                 */
                this.length = length;
                /**
                 * The data type of each component in the array.
                 * @var {number} [Entity.Attribute.format=gl.FLOAT]
                 */
                this.format = format;
                /**
                 * Specifies whether fixed-point data values should be normalized (`true`)
                 * or converted directly as fixed-point values (`false`) when they are accessed.
                 * @var {number} [Entity.Attribute.normalized=false]
                 */
                this.normalized = normalized;
                /**
                 * The offset of the first component of the first generic
                 * vertex attribute in the array in the data store of the
                 * buffer currently bound to the `gl.ARRAY_BUFFER`. The
                 * initial value is 0.
                 * @var {number} [Entity.Attribute.offset=0]
                 */
                this.offset = offset;
            }
            /**
             * Compute and return the number of occupying bytes.
             * @function Entity.Attribute.getByteCount.
             * @param {number} bytes - Bytes per component.
             * @returns {number}
             */
            _createClass(Attribute, [{
                key: "getByteCount",
                value: function getByteCount(bytes) {
                        return this.length * bytes;
                    }
                    /**
                     * Enable generic vertex attribute and define an array of generic vertex attribute data.
                     * @function Entity.Attribute.enable
                     * @param {number} [stride=0] - Specifies the byte offset between consecutive
                     * generic vertex attributes. If stride is 0, the generic vertex attributes
                     * are understood to be tightly packed in the array. The initial value is 0.
                     * @returns {undefined}
                     */
            }, {
                key: "enable",
                value: function enable() {
                        var stride = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
                        var location = this.location;
                        gl.enableVertexAttribArray(location);
                        gl.vertexAttribPointer(location, this.length, this.format, this.normalized, stride, this.offset);
                    }
                    /**
                     * Disable generic vertex attribute array.
                     * @function Entity.Attribute.disable
                     * @returns {undefined}
                     */
            }, {
                key: "disable",
                value: function disable() {
                    gl.disableVertexAttribArray(this.location);
                }
            }]);
            return Attribute;
        })(Entity);
        module.exports = Attribute;
    }, {
        "./Entity": 16,
        "./gl": 42
    }],
    12: [function(require, module, exports) {
        'use strict';
        var gl = require('./gl');
        var glm = require('gl-matrix');
        var mat4 = glm.mat4;
        var mat3 = glm.mat3;
        var Structure = require('./Structure');
        var axis = {
            x: [1, 0, 0],
            y: [0, 1, 0],
            z: [0, 0, 1]
        };
        var radians = 0.0174532925;
        var _name = 'camera';
        var _path = 'camera';
        var _uniforms = ['mat4 projectionMatrix', 'mat4 modelViewMatrix', 'mat3 normalMatrix'];
        var _background = [0, 0, 0, 1];
        /**
         * A camera simplifies transforming the perspective of the view, including scaling, rotating and translating,
         * thereby configuring projections into framebuffers or output display.
         * @class Camera
         * @name Entity.Structure.Camera
         * @extends Entity
         * @param {string} [name=camera] - Specifies the entities friendly name.
         * @param {string} program - Specifies the program in which the camera used.
         * @param {string} [path=camera] - Specifies the uniform structure path to the generic uniforms.
         * @param {Array} [uniforms=['mat4 projectionMatrix', 'mat4 modelViewMatrix', 'mat3 normalMatrix']] - Specifies the formats and names of the generic uniforms as used in the shader.
         * @param {vec4} [background=[0, 0, 0, 1]] - Specifies the clear value for the color buffers.
         */
        var Camera = (function(_Structure) {
            _inherits(Camera, _Structure);

            function Camera() {
                var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref2$name = _ref2.name;
                var name = _ref2$name === undefined ? _name : _ref2$name;
                var program = _ref2.program;
                var _ref2$path = _ref2.path;
                var path = _ref2$path === undefined ? _path : _ref2$path;
                var _ref2$uniforms = _ref2.uniforms;
                var uniforms = _ref2$uniforms === undefined ? _uniforms : _ref2$uniforms;
                var _ref2$background = _ref2.background;
                var background = _ref2$background === undefined ? _background : _ref2$background;
                _classCallCheck(this, Camera);
                _get(Object.getPrototypeOf(Camera.prototype), "constructor", this).call(this, {
                    name: name,
                    program: program,
                    path: path,
                    uniforms: uniforms
                });
                /**
                 * The clear value for the color buffers.
                 * @var {number} [Entity.Structure.Camera.background=[0, 0, 0, 1]]
                 */
                this.background = background;
                /**
                 * The modelview matrix contains modeling and viewing transformations,
                 * which transform object space coordinates into eye space coordinates.
                 * @var {number} [Entity.Structure.Camera.modelViewMatrix=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
                 */
                this.modelViewMatrix = mat4.create();
                /**
                 * The projection matrix contains the transformation calls it needs
                 * to transform eye space coordinates into clip coordinates.
                 * @var {number} [Entity.Structure.Camera.projectionMatrix=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
                 */
                this.projectionMatrix = mat4.create();
                /**
                 * The normal matrix is the transpose of the modelview matrix. It is
                 * used to orient vertex normals correctly based on the on the
                 * transformation of its governing mesh.
                 * @var {number} [Entity.Structure.Camera.normalMatrix=[0, 0, 0, 0, 0, 0, 0, 0, 0]]
                 */
                this.normalMatrix = mat3.create();
                /**
                 * The view transformation stack retains saved modelview states.
                 * @var {Array} [Entity.Structure.Camera.stack=[]]
                 */
                this.stack = [];
            }
            /**
             * Enable back-face culling and set counter clock-wise front face winding order.
             * @function Entity.Structure.Camera.configure
             * @returns {undefined}
             */
            _createClass(Camera, [{
                key: "configure",
                value: function configure() {
                        gl.enable(gl.CULL_FACE);
                        gl.frontFace(gl.CCW);
                        gl.clearColor.apply(gl, this.background);
                    }
                    /**
                     * Specify the value of the uniform variables for the current program object.
                     * @function Entity.Structure.Camera.configure
                     * @returns {undefined}
                     */
            }, {
                key: "bind",
                value: function bind() {
                        mat3.normalFromMat4(this.normalMatrix, this.modelViewMatrix);
                        _get(Object.getPrototypeOf(Camera.prototype), "bind", this).call(this);
                    }
                    /**
                     * Save the current state of the camera into the view transformation stack.
                     * @function Entity.Structure.Camera.save
                     * @returns {undefined}
                     */
            }, {
                key: "save",
                value: function save() {
                        var currentCamera = mat4.clone(this.modelViewMatrix);
                        this.stack.push(currentCamera);
                    }
                    /**
                     * Revert the current view state to the previously saved state in view
                     * transformation stack.
                     * @function Entity.Structure.Camera.restore
                     * @returns {undefined}
                     */
            }, {
                key: "restore",
                value: function restore() {
                        var stack = this.stack;
                        if (stack.length) {
                            var previousCamera = stack.pop();
                            mat4.copy(this.modelViewMatrix, previousCamera);
                        }
                    }
                    /**
                     * Zoom the camera by a given multiplier.
                     * @function Entity.Structure.Camera.scale
                     * @param {number} scaleX - Scale multiplier along the x axis.
                     * @param {number} scaleY - Scale multiplier along the y axis.
                     * @param {number} scaleZ - Scale multiplier along the z axis.
                     * @returns {undefined}
                     */
            }, {
                key: "scale",
                value: function scale(scaleX, scaleY, scaleZ) {
                        var modelViewMatrix = this.modelViewMatrix;
                        mat4.scale(modelViewMatrix, modelViewMatrix, arguments);
                    }
                    /**
                     * Zoom the camera by a given multiplier along the x axis.
                     * @function Entity.Structure.Camera.scaleX
                     * @param {number} scale - Scale multiplier along the x axis.
                     * @returns {undefined}
                     */
            }, {
                key: "scaleX",
                value: function scaleX(scale) {
                        this.scale(scale, 1, 1);
                    }
                    /**
                     * Zoom the camera by a given multiplier along the y axis.
                     * @function Entity.Structure.Camera.scaleY
                     * @param {number} scale - Scale multiplier along the y axis.
                     * @returns {undefined}
                     */
            }, {
                key: "scaleY",
                value: function scaleY(scale) {
                        this.scale(1, scale, 1);
                    }
                    /**
                     * Zoom the camera by a given multiplier along the z axis.
                     * @function Entity.Structure.Camera.scaleZ
                     * @param {number} scale - Scale multiplier along the z axis.
                     * @returns {undefined}
                     */
            }, {
                key: "scaleZ",
                value: function scaleZ(scale) {
                        this.scale(1, 1, scale);
                    }
                    /**
                     * Rotate the camera by a given amount around the given axis. The amount
                     * should be provided in degrees.
                     * @function Entity.Structure.Camera.rotate
                     * @param {number} rotation - Rotation in degrees around the given pivot.
                     * The inital value is the y axis.
                     * @param {string} [pivot=y] - Axis around which to rotate the view.
                     * @returns {undefined}
                     */
            }, {
                key: "rotate",
                value: function rotate(rotation) {
                        var pivot = arguments.length <= 1 || arguments[1] === undefined ? 'y' : arguments[1];
                        var modelViewMatrix = this.modelViewMatrix;
                        var radian = rotation * radians;
                        mat4.rotate(modelViewMatrix, modelViewMatrix, radian, axis[pivot]);
                    }
                    /**
                     * Rotate the camera by a given amount around the x axis. The amount
                     * should be provided in degrees.
                     * @function Entity.Structure.Camera.rotateX
                     * @param {number} rotation - Rotation in degrees around the x axis.
                     * @returns {undefined}
                     */
            }, {
                key: "rotateX",
                value: function rotateX(rotation) {
                        this.rotate(rotation, 'x');
                    }
                    /**
                     * Rotate the camera by a given amount around the y axis. The amount
                     * should be provided in degrees.
                     * @function Entity.Structure.Camera.rotateY
                     * @param {number} rotation - Rotation in degrees around the y axis.
                     * @returns {undefined}
                     */
            }, {
                key: "rotateY",
                value: function rotateY(rotation) {
                        this.rotate(rotation, 'y');
                    }
                    /**
                     * Rotate the camera by a given amount around the z axis. The amount
                     * should be provided in degrees.
                     * @function Entity.Structure.Camera.rotateZ
                     * @param {number} rotation - Rotation in degrees around the z axis.
                     * @returns {undefined}
                     */
            }, {
                key: "rotateZ",
                value: function rotateZ(rotation) {
                        this.rotate(rotation, 'z');
                    }
                    /**
                     * Translate the camera by the given vector.
                     * @function Entity.Structure.Camera.translate
                     * @param {number} translateX - Translation along the x axis.
                     * @param {number} translateY - Translation along the y axis.
                     * @param {number} translateZ - Translation along the z axis.
                     * @returns {undefined}
                     */
            }, {
                key: "translate",
                value: function translate(translateX, translateY, translateZ) {
                        var modelViewMatrix = this.modelViewMatrix;
                        mat4.translate(modelViewMatrix, modelViewMatrix, arguments);
                    }
                    /**
                     * Translate the camera by the given number of units along
                     * the x axis.
                     * @function Entity.Structure.Camera.translateX
                     * @param {number} translation - Translation along the x axis.
                     * @returns {undefined}
                     */
            }, {
                key: "translateX",
                value: function translateX(translation) {
                        this.translate(translation, 0, 0);
                    }
                    /**
                     * Translate the camera by the given number of units along
                     * the y axis.
                     * @function Entity.Structure.Camera.translateY
                     * @param {number} translation - Translation along the y axis.
                     * @returns {undefined}
                     */
            }, {
                key: "translateY",
                value: function translateY(translation) {
                        this.translate(0, translation, 0);
                    }
                    /**
                     * Translate the camera by the given number of units along
                     * the z axis.
                     * @function Entity.Structure.Camera.translateZ
                     * @param {number} translation - Translation along the z axis.
                     * @returns {undefined}
                     */
            }, {
                key: "translateZ",
                value: function translateZ(translation) {
                    this.translate(0, 0, translation);
                }
            }]);
            return Camera;
        })(Structure);
        module.exports = Camera;
    }, {
        "./Structure": 36,
        "./gl": 42,
        "gl-matrix": 1
    }],
    13: [function(require, module, exports) {
        'use strict';
        var Texture = require('./Texture');
        var gl = require('./gl');
        /**
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
         */
        var DataTexture = (function(_Texture) {
            _inherits(DataTexture, _Texture);

            function DataTexture() {
                var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref3$name = _ref3.name;
                var name = _ref3$name === undefined ? 'data.texture' : _ref3$name;
                var _ref3$image = _ref3.image;
                var image = _ref3$image === undefined ? [] : _ref3$image;
                var lod = _ref3.lod;
                var width = _ref3.width;
                var height = _ref3.height;
                var _ref3$length = _ref3.length;
                var length = _ref3$length === undefined ? 3 : _ref3$length;
                var _ref3$components = _ref3.components;
                var components = _ref3$components === undefined ? gl.RGB : _ref3$components;
                var _ref3$format = _ref3.format;
                var format = _ref3$format === undefined ? gl.FLOAT : _ref3$format;
                var magnification = _ref3.magnification;
                var minification = _ref3.minification;
                var S = _ref3.S;
                var T = _ref3.T;
                _classCallCheck(this, DataTexture);
                _get(Object.getPrototypeOf(DataTexture.prototype), "constructor", this).call(this, {
                    name: name,
                    image: image,
                    lod: lod,
                    components: components,
                    format: format,
                    magnification: magnification,
                    minification: minification,
                    S: S,
                    T: T
                });
                /**
                 * Texture width
                 * @var {number} Entity.Texture.DataTexture.width
                 * @private
                 */
                this.width = width;
                /**
                 * Texture height
                 * @var {number} Entity.Texture.DataTexture.height
                 * @private
                 */
                this.height = height;
                /**
                 * Number of color components per pixel
                 * @var {number} Entity.Texture.DataTexture.length
                 * @private
                 */
                this.length = length;
                this.autofill();
                this.configure();
            }
            /**
             * Apply appropriate texture parameters
             * and push data into texture buffer
             * @function Entity.Texture.DataTexture.configure
             * @returns {undefined}
             */
            _createClass(DataTexture, [{
                key: "configure",
                value: function configure() {
                        _get(Object.getPrototypeOf(DataTexture.prototype), "configure", this).call(this);
                        var components = this.components;
                        var image = new Float32Array(this.image);
                        gl.pixelStorei(gl.PACK_ALIGNMENT, 1);
                        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
                        gl.getExtension('OES_texture_float');
                        gl.texImage2D(gl.TEXTURE_2D, this.lod, components, this.width, this.height, 0, components, this.format, image);
                        this.unbind();
                    }
                    /**
                     * Push null pixel values at the back of the
                     * texture data to fill and validate it
                     * @function Entity.Texture.DataTexture.autofill
                     * @param {number} [nixel=-1] Null pixel value
                     * @returns {undefined}
                     */
            }, {
                key: "autofill",
                value: function autofill() {
                    var nixel = arguments.length <= 0 || arguments[0] === undefined ? -1 : arguments[0];
                    var image = this.image;
                    var count = this.width * this.height * this.length - image.length;
                    var nixels = ("," + nixel).repeat(count).substring(1).split(',').map(parseFloat);
                    image.push.apply(image, nixels);
                }
            }]);
            return DataTexture;
        })(Texture);
        module.exports = DataTexture;
    }, {
        "./Texture": 37,
        "./gl": 42
    }],
    14: [function(require, module, exports) {
        'use strict';
        var gl = require('./gl');
        var Framebuffer = require('./Framebuffer');
        var _name = 'deferred.framebuffer';
        /**
         * A deferred framebuffer encapsulates user-created framebuffer objects that
         * can be used as the destination for rendering. Framebuffer objects require
         * a color and, optionally, depth attachment to retain the rendered content.
         * @class DeferredFramebuffer
         * @name Entity.Framebuffer.DeferredFramebuffer
         * @extends Entity.Framebuffer
         * @param {string} [name=deferred.framebuffer] - Specifies the entities friendly name.
         * @param {Entity.Texture.ImageTexture|Entity.Texture.DataTexture} colorAttachment - Specifies
         * the framebuffer object color attachment.
         * @param {Entity.Renderbuffer} depthAttachment - Specifies the framebuffer object depth attachment.
         */
        var DeferredFramebuffer = (function(_Framebuffer) {
            _inherits(DeferredFramebuffer, _Framebuffer);

            function DeferredFramebuffer() {
                var _ref4 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref4$name = _ref4.name;
                var name = _ref4$name === undefined ? _name : _ref4$name;
                var colorAttachment = _ref4.colorAttachment;
                var depthAttachment = _ref4.depthAttachment;
                _classCallCheck(this, DeferredFramebuffer);
                _get(Object.getPrototypeOf(DeferredFramebuffer.prototype), "constructor", this).call(this, {
                    name: name
                });
                /**
                 * The framebuffer object used as the destination for rendering.
                 * @var {WebGLFramebuffer} [Entity.Framebuffer.DeferredFramebuffer.buffer=WebGLFramebuffer]
                 */
                this.buffer = gl.createFramebuffer();
                /**
                 * The framebuffer object color attachment.
                 * @var {Entity.Texture.ImageTexture|Entity.Texture.DataTexture} Entity.Framebuffer.DeferredFramebuffer.colorAttachment
                 */
                this.colorAttachment = colorAttachment;
                /**
                 * The framebuffer object depth attachment.
                 * @var {Renderbuffer} Entity.Framebuffer.DeferredFramebuffer.depthAttachment
                 */
                this.depthAttachment = depthAttachment;
                this.configure();
            }
            /**
             * Establish the color attachment and depth attachment
             * of the framebuffer object.
             * @function Entity.Framebuffer.DeferredFramebuffer.configure
             * @returns {undefined}
             */
            _createClass(DeferredFramebuffer, [{
                key: "configure",
                value: function configure() {
                    this.bind();
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorAttachment.buffer, 0);
                    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthAttachment.buffer);
                    this.check();
                    this.unbind();
                }
            }]);
            return DeferredFramebuffer;
        })(Framebuffer);
        module.exports = DeferredFramebuffer;
    }, {
        "./Framebuffer": 19,
        "./gl": 42
    }],
    15: [function(require, module, exports) {
        'use strict';
        var Light = require('./Light');
        var _name = 'directional.light';
        var _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location', 'vec3 direction'];
        var _direction = [0, 0, 0];
        /**
         * A directional light radiates light in a specific direction.
         * @class DirectionalLight
         * @name Entity.Structure.Light.DirectionalLight
         * @extends Entity.Structure.Light
         * @param {string} [name=directional.light] - Specifies the entities friendly name.
         * @param {Entity.Program} program - Specifies the program in which the uniforms should be located.
         * @param {vec3} ambient - Specifies the ambient component of the light source.
         * @param {vec3} diffuse - Specifies the diffuse component of the light source.
         * @param {vec3} specular - Specifies the specular component of the light source.
         * @param {number} [intensity=1] - Specifies the intensity of the light source.
         * @param {vec3} [location=[0, 0, 0]] - Specifies the location of the light source.
         * @param {vec3} [direction=[0, 0, 0]] - Specifies the position at which the light aimed.
         */
        var DirectionalLight = (function(_Light) {
            _inherits(DirectionalLight, _Light);

            function DirectionalLight() {
                var _ref5 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref5$name = _ref5.name;
                var name = _ref5$name === undefined ? _name : _ref5$name;
                var program = _ref5.program;
                var _ref5$uniforms = _ref5.uniforms;
                var uniforms = _ref5$uniforms === undefined ? _uniforms : _ref5$uniforms;
                var ambient = _ref5.ambient;
                var diffuse = _ref5.diffuse;
                var specular = _ref5.specular;
                var intensity = _ref5.intensity;
                var location = _ref5.location;
                var _ref5$direction = _ref5.direction;
                var direction = _ref5$direction === undefined ? _direction : _ref5$direction;
                _classCallCheck(this, DirectionalLight);
                _get(Object.getPrototypeOf(DirectionalLight.prototype), "constructor", this).call(this, {
                    name: name,
                    program: program,
                    uniforms: uniforms,
                    ambient: ambient,
                    diffuse: diffuse,
                    specular: specular,
                    intensity: intensity,
                    location: location
                });
                /**
                 * The position at which the light aimed.
                 * @var {vec3} [Entity.Structure.Light.DirectionalLight.direction=[0, 0, 0]]
                 */
                this.direction = direction;
            }
            return DirectionalLight;
        })(Light);
        module.exports = DirectionalLight;
    }, {
        "./Light": 21
    }],
    16: [function(require, module, exports) {
        'use strict';
        var indices = {};
        var _name = 'entity';
        /**
         * Entity is the base class.
         * @class Entity
         * @param {string} [name=entity] - Specifies the entities friendly name.
         */
        var Entity = (function() {
            function Entity() {
                var _ref6 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref6$name = _ref6.name;
                var name = _ref6$name === undefined ? _name : _ref6$name;
                _classCallCheck(this, Entity);
                /**
                 * Entities friendly name.
                 * @var {string} Entity.name
                 */
                this.name = this.index(name);
                /**
                 * Entities friendly name without the auto-generated index.
                 * @var {string} Entity.basename
                 */
                this.basename = name;
            }
            /**
             * Auto-generate the entities index based on the number of instantiations
             * of its basename.
             * @function Entity.index
             * @param {string} name - Entities friendly name.
             * @returns {string}
             */
            _createClass(Entity, [{
                key: "index",
                value: function index(name) {
                        if (indices[name] === undefined) {
                            indices[name] = -1;
                        }
                        indices[name]++;
                        return name + ".0" + indices[name];
                    }
                    /**
                     * Validate the identity of an entity against the given identity.
                     * @function Entity.is
                     * @param {string} identity - Entity name to check against.
                     * @returns {boolean}
                     */
            }, {
                key: "is",
                value: function is(identity) {
                    return this.name.match(identity, 'i') !== null;
                }
            }]);
            return Entity;
        })();
        module.exports = Entity;
    }, {}],
    17: [function(require, module, exports) {
        'use strict';
        var gl = require('./gl');
        var Entity = require('./Entity');
        /**
         * Fluid is a grid-based fluid simulator. Coming soon...
         * @class Fluid
         * @name Entity.Fluid
         * @extends Entity
         * @param {string} [name=fluid] - Specifies the entities friendly name.
         */
        var Fluid = (function(_Entity2) {
            _inherits(Fluid, _Entity2);

            function Fluid() {
                var _ref7 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref7$name = _ref7.name;
                var name = _ref7$name === undefined ? 'fluid' : _ref7$name;
                _classCallCheck(this, Fluid);
                _get(Object.getPrototypeOf(Fluid.prototype), "constructor", this).call(this, {
                    name: name
                });
            }
            return Fluid;
        })(Entity);
        module.exports = Fluid;
    }, {
        "./Entity": 16,
        "./gl": 42
    }],
    18: [function(require, module, exports) {
        'use strict';
        var gl = require('./gl');
        var Shader = require('./Shader');
        var _name = 'fragment.shader';
        /**
         * A fragment shader is used to maintain the source code strings that define
         * a shader executable on the programmable fragment processor.
         * @class FragmentShader
         * @name Entity.Shader.FragmentShader
         * @extends Entity.Shader
         * @param {string} [name=shader] - Specifies the entities friendly name.
         * @param {string} path - Specifies the relative path to the shader file.
         */
        var FragmentShader = (function(_Shader) {
            _inherits(FragmentShader, _Shader);

            function FragmentShader() {
                var _ref8 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref8$name = _ref8.name;
                var name = _ref8$name === undefined ? _name : _ref8$name;
                var path = _ref8.path;
                _classCallCheck(this, FragmentShader);
                _get(Object.getPrototypeOf(FragmentShader.prototype), "constructor", this).call(this, {
                    name: name,
                    path: path
                }, gl.FRAGMENT_SHADER);
            }
            return FragmentShader;
        })(Shader);
        module.exports = FragmentShader;
    }, {
        "./Shader": 34,
        "./gl": 42
    }],
    19: [function(require, module, exports) {
        'use strict';
        var gl = require('./gl');
        var Entity = require('./Entity');
        var _name = 'framebuffer';
        /**
         * A framebuffer is a collection of buffers that can be used as the destination for rendering. There are
         * two kinds of framebuffers: the default framebuffer, which refers to the canvas element, and user-created
         * framebuffers called framebuffer objects - see
         * <a href="Entity.Framebuffer.DeferredFramebuffer.html">Entity.Framebuffer.DeferredFramebuffer</a>.
         * @class Framebuffer
         * @name Entity.Framebuffer
         * @extends Entity
         * @param {string} [name=framebuffer] - Specifies the entities friendly name.
         */
        var Framebuffer = (function(_Entity3) {
            _inherits(Framebuffer, _Entity3);

            function Framebuffer() {
                var _ref9 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref9$name = _ref9.name;
                var name = _ref9$name === undefined ? _name : _ref9$name;
                _classCallCheck(this, Framebuffer);
                _get(Object.getPrototypeOf(Framebuffer.prototype), "constructor", this).call(this, {
                    name: name
                });
                /**
                 * The framebuffer is set to `null` and thus references the default framebuffer.
                 * @var {object} [Entity.Framebuffer.buffer=null]
                 */
                this.buffer = null;
            }
            /**
             * Bind the framebuffer as the destination for rendering until it is deleted or
             * another framebuffer is bound.
             * @function Entity.Framebuffer.bind
             * @param {boolean} [flush=true] - Flag to flush the contents of the active framebuffer.
             * The initial value is set to `true`.
             * @returns {undefined}
             */
            _createClass(Framebuffer, [{
                key: "bind",
                value: function bind() {
                        var flush = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
                        gl.bindFramebuffer(gl.FRAMEBUFFER, this.buffer);
                        if (flush) {
                            this.flush();
                        }
                    }
                    /**
                     * Restore the default framebuffer as the destination for rendering.
                     * @function Entity.Framebuffer.unbind
                     * @returns {undefined}
                     */
            }, {
                key: "unbind",
                value: function unbind() {
                        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                    }
                    /**
                     * Flush the contents of the active framebuffer.
                     * @function Entity.Framebuffer.flush
                     * @returns {undefined}
                     */
            }, {
                key: "flush",
                value: function flush() {
                        gl.clear(gl.COLOR_BUFFER_BIT);
                        gl.clear(gl.DEPTH_BUFFER_BIT);
                    }
                    /**
                     * Validates the compile status of the active framebuffer.
                     * @function Entity.Framebuffer.check
                     * @returns {undefined|Error}
                     */
            }, {
                key: "check",
                value: function check() {
                    var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
                    var error = false;
                    switch (status) {
                        case gl.FRAMEBUFFER_UNSUPPORTED:
                            error = 'unsupported';
                            break;
                        case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                            error = 'attachments incomplete';
                            break;
                        case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                            error = 'dimensions incomplete';
                            break;
                        case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                            error = 'attachment missing';
                            break;
                    }
                    if (error) {
                        gl.deleteFramebuffer(this.buffer);
                        throw new Error(error);
                    }
                }
            }]);
            return Framebuffer;
        })(Entity);
        module.exports = Framebuffer;
    }, {
        "./Entity": 16,
        "./gl": 42
    }],
    20: [function(require, module, exports) {
        'use strict';
        var Texture = require('./Texture');
        var gl = require('./gl');
        var _name = 'image.texture';
        var _anisotropy = false;
        /**
         * ImageTexture is a wrapper on WebGLTexture buffers
         * to support detailing mesh surfaces
         * @class ImageTexture
         * @name Entity.Texture.ImageTexture
         * @extends Entity.Texture
         * @param {string} [name=image.texture] - Instance name
         * @param {Array} [image=[]] - Texture data
         * @param {number} [lod=0] - Level of detail
         * @param {number} [components=gl.RGBA] - Texture components per texel
         * @param {number} [format=gl.UNSIGNED_BYTE] - Component data format
         * @param {number} [magnification=gl.NEAREST] - Magnification sampling filter
         * @param {number} [minification=gl.NEAREST] - Minification sampling filter
         * @param {number} [S=gl.CLAMP_TO_EDGE] - Horizontal texture wrapping
         * @param {number} [T=gl.CLAMP_TO_EDGE] - Vertex texture wrapping
         * @param {boolean|number} [anisotropy=false] - Level of anisotropic filtering
         */
        var ImageTexture = (function(_Texture2) {
            _inherits(ImageTexture, _Texture2);

            function ImageTexture() {
                var _ref10 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref10$name = _ref10.name;
                var name = _ref10$name === undefined ? _name : _ref10$name;
                var image = _ref10.image;
                var lod = _ref10.lod;
                var components = _ref10.components;
                var format = _ref10.format;
                var magnification = _ref10.magnification;
                var minification = _ref10.minification;
                var S = _ref10.S;
                var T = _ref10.T;
                var _ref10$anisotropy = _ref10.anisotropy;
                var anisotropy = _ref10$anisotropy === undefined ? _anisotropy : _ref10$anisotropy;
                _classCallCheck(this, ImageTexture);
                _get(Object.getPrototypeOf(ImageTexture.prototype), "constructor", this).call(this, {
                    name: name,
                    image: image,
                    lod: lod,
                    components: components,
                    format: format,
                    magnification: magnification,
                    minification: minification,
                    S: S,
                    T: T
                });
                /**
                 * Anisotropic filter handle
                 * @var {function} Entity.Texture.ImageTexture.anisotropicFilter
                 * @default false
                 * @private
                 */
                this.anisotropicFilter = gl.getExtension('EXT_texture_filter_anisotropic');
                /**
                 * Level of anisotropic filtering to
                 * improve rendering quality of textures
                 * @var {boolean|number} Entity.Texture.ImageTexture.anisotropy
                 * @default false
                 * @private
                 */
                this.anisotropy = this.checkAnisotropy(anisotropy);
                this.configure();
            }
            /**
             * Apply appropriate texture parameters
             * and push data into texture buffer
             * @function Entity.Texture.ImageTexture.configure
             * @returns {undefined}
             */
            _createClass(ImageTexture, [{
                key: "configure",
                value: function configure() {
                        _get(Object.getPrototypeOf(ImageTexture.prototype), "configure", this).call(this);
                        var components = this.components;
                        var anisotropy = this.anisotropy;
                        if (anisotropy) {
                            gl.texParameterf(gl.TEXTURE_2D, this.anisotropicFilter.TEXTURE_MAX_ANISOTROPY_EXT, anisotropy);
                        }
                        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
                        gl.texImage2D(gl.TEXTURE_2D, this.lod, components, components, this.format, this.image);
                        this.unbind();
                    }
                    /**
                     * Check there is anisotropy support and a supported
                     * option is used
                     * @function Entity.Texture.ImageTexture.checkAnisotropy
                     * @param {boolean|number} anisotropy - Level of anisotropic filtering
                     * @returns {number|boolean}
                     */
            }, {
                key: "checkAnisotropy",
                value: function checkAnisotropy(anisotropy) {
                    var anisotropicFilter = this.anisotropicFilter;
                    if (anisotropicFilter && anisotropy !== false) {
                        var maxAnisotropy = gl.getParameter(anisotropicFilter.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                        return Math.min(anisotropy, Math.max(anisotropy, maxAnisotropy));
                    }
                    return false;
                }
            }]);
            return ImageTexture;
        })(Texture);
        module.exports = ImageTexture;
    }, {
        "./Texture": 37,
        "./gl": 42
    }],
    21: [function(require, module, exports) {
        'use strict';
        var Structure = require('./Structure');
        var _name = 'light';
        var _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location'];
        var _intensity = 1;
        var _location = [0, 0, 0];
        /**
         * A light source to globally illuminate the scene.
         * @class Light
         * @name Entity.Structure.Light
         * @extends Entity.Structure
         * @param {string} [name=light] - Specifies the entities friendly name.
         * @param {Entity.Program} program - Specifies the program in which the uniforms should be located.
         * @param {vec3} ambient - Specifies the ambient component of the light source.
         * @param {vec3} diffuse - Specifies the diffuse component of the light source.
         * @param {vec3} specular - Specifies the specular component of the light source.
         * @param {number} [intensity=1] - Specifies the intensity of the light source.
         * @param {vec3} [location=[0, 0, 0]] - Specifies the location of the light source.
         */
        var Light = (function(_Structure2) {
            _inherits(Light, _Structure2);

            function Light() {
                var _ref11 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref11$name = _ref11.name;
                var name = _ref11$name === undefined ? _name : _ref11$name;
                var program = _ref11.program;
                var _ref11$uniforms = _ref11.uniforms;
                var uniforms = _ref11$uniforms === undefined ? _uniforms : _ref11$uniforms;
                var ambient = _ref11.ambient;
                var diffuse = _ref11.diffuse;
                var specular = _ref11.specular;
                var _ref11$intensity = _ref11.intensity;
                var intensity = _ref11$intensity === undefined ? _intensity : _ref11$intensity;
                var _ref11$location = _ref11.location;
                var location = _ref11$location === undefined ? _location : _ref11$location;
                _classCallCheck(this, Light);
                _get(Object.getPrototypeOf(Light.prototype), "constructor", this).call(this, {
                    name: name,
                    program: program,
                    path: 'light',
                    uniforms: uniforms
                });
                /**
                 * The ambient component of the light source.
                 * @var {vec3}Entity.Structure.Light.ambient
                 */
                this.ambient = ambient;
                /**
                 * The diffuse component of the light source.
                 * @var {vec3} Entity.Structure.Light.diffuse
                 */
                this.diffuse = diffuse;
                /**
                 * The specular component of the light source.
                 * @var {vec3} Entity.Structure.Light.specular
                 */
                this.specular = specular;
                /**
                 * The light intensity of the light source.
                 * @var {number} [Entity.Structure.Light.intensity=1]
                 */
                this.intensity = intensity;
                /**
                 * The location of the light source.
                 * @var {vec3} [Entity.Structure.Light.location=[0, 0, 0]]
                 */
                this.location = location;
            }
            return Light;
        })(Structure);
        module.exports = Light;
    }, {
        "./Structure": 36
    }],
    22: [function(require, module, exports) {
        'use strict';
        var Structure = require('./Structure');
        var shades = {
            flat: 1,
            smooth: 0
        };
        var _name = 'material';
        var _uniforms = ['vec3 ambient', 'vec3 diffuse', 'i shading'];
        var _shading = 'smooth';
        /**
         * Materials dictate the mesh shading
         * @class Material
         * @name Entity.Structure.Material
         * @extends Entity.Structure
         * @param {string} [name=material] - Instance name
         * @param {Entity.Program} program - Uniforms' program
         * @param {vec3} ambient - Ambient component
         * @param {vec3} diffuse - Diffuse component
         * @param {string} [shading=smooth] - Surface shading method
         */
        var Material = (function(_Structure3) {
            _inherits(Material, _Structure3);

            function Material() {
                var _ref12 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref12$name = _ref12.name;
                var name = _ref12$name === undefined ? _name : _ref12$name;
                var _ref12$uniforms = _ref12.uniforms;
                var uniforms = _ref12$uniforms === undefined ? _uniforms : _ref12$uniforms;
                var program = _ref12.program;
                var ambient = _ref12.ambient;
                var diffuse = _ref12.diffuse;
                var _ref12$shading = _ref12.shading;
                var shading = _ref12$shading === undefined ? _shading : _ref12$shading;
                _classCallCheck(this, Material);
                _get(Object.getPrototypeOf(Material.prototype), "constructor", this).call(this, {
                    name: name,
                    program: program,
                    path: 'material',
                    uniforms: uniforms
                });
                /**
                 * Ambient component
                 * @var {vec3} Entity.Structure.Material.ambient
                 * @private
                 */
                this.ambient = ambient;
                /**
                 * Diffuse component
                 * @var {vec3} Entity.Structure.Material.diffuse
                 * @private
                 */
                this.diffuse = diffuse;
                /**
                 * Surface shading method
                 * @var {string} Entity.Structure.Material.shading
                 * @default smooth
                 * @private
                 */
                this.shading = shades[shading];
            }
            return Material;
        })(Structure);
        module.exports = Material;
    }, {
        "./Structure": 36
    }],
    23: [function(require, module, exports) {
        'use strict';
        var gl = require('./gl');
        var Entity = require('./Entity');
        var _name = 'mesh';
        var _vertices = [];
        var _colors = [];
        var _uvs = [];
        var _normals = [];
        var _indices = [];
        var _usage = gl.STATIC_DRAW;
        /**
         * A mesh is a collection of vertices and faces that define the construction of a shape.
         * It further includes data to shade the mesh, such as vertex colors, texture mapping
         * coordinates and per-vertex/face normals.
         * @class Mesh
         * @name Entity.Mesh
         * @extends Entity
         * @param {string} [name=mesh] - Specifies the entities friendly name.
         * @param {Entity.VertexArrayObject} vao - Specifies the vertex array object via which the
         * mesh data is stored and sent to the shader.
         * @param {Array} [vertices=[]] - Specifies the mesh vertex positions.
         * @param {Array} [colors=[]] - Specifies the mesh vertex colors.
         * @param {Array} [uvs=[]] - Specifies the mesh vertex texture mapping coordinates.
         * @param {Array} [normals=[]] - Specifies the mesh vertex normals.
         * @param {boolean|Array} [indices=false] - Specifies the indices used to construct
         * the primitives if it uses an element array buffer object. If it does not,
         * this value is set to false. The initial value is false.
         * @param {number} [usage=gl.STATIC_DRAW] - Specifies the expected usage pattern of the data store.
         * @param {Entity.Structure.Material|Entity.Structure.Material.PhongMaterial} material - Specifies the
         * visual make-up of the mesh.
         */
        var Mesh = (function(_Entity4) {
            _inherits(Mesh, _Entity4);

            function Mesh() {
                var _ref13 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref13$name = _ref13.name;
                var name = _ref13$name === undefined ? _name : _ref13$name;
                var vao = _ref13.vao;
                var _ref13$vertices = _ref13.vertices;
                var vertices = _ref13$vertices === undefined ? _vertices : _ref13$vertices;
                var _ref13$colors = _ref13.colors;
                var colors = _ref13$colors === undefined ? _colors : _ref13$colors;
                var _ref13$uvs = _ref13.uvs;
                var uvs = _ref13$uvs === undefined ? _uvs : _ref13$uvs;
                var _ref13$normals = _ref13.normals;
                var normals = _ref13$normals === undefined ? _normals : _ref13$normals;
                var _ref13$indices = _ref13.indices;
                var indices = _ref13$indices === undefined ? _indices : _ref13$indices;
                var _ref13$usage = _ref13.usage;
                var usage = _ref13$usage === undefined ? _usage : _ref13$usage;
                var material = _ref13.material;
                _classCallCheck(this, Mesh);
                _get(Object.getPrototypeOf(Mesh.prototype), "constructor", this).call(this, {
                    name: name
                });
                /**
                 * The vertex array object via which the mesh data
                 * is stored and sent to the shader.
                 * @var {Entity.VertexArrayObject} Entity.Mesh.vao
                 */
                this.vao = vao;
                /**
                 * The mesh vertex positions.
                 * @var {Array} [Entity.Mesh.vertices=[]]
                 */
                this.vertices = vertices;
                /**
                 * The mesh vertex colors.
                 * @var {Array} [Entity.Mesh.colors=[]]
                 */
                this.colors = colors;
                /**
                 * The mesh vertex texture mapping coordinates.
                 * @var {Array} [Entity.Mesh.uvs=[]]
                 */
                this.uvs = uvs;
                /**
                 * The mesh vertex normals.
                 * @var {Array} [Entity.Mesh.normals=[]]
                 */
                this.normals = normals;
                /**
                 * The indices used to construct the primitives if it
                 * uses an element array buffer object. If it does not,
                 * this value is set to false. The initial value is false.
                 * @var {Array} [Entity.Mesh.indices=Uint16Array]
                 */
                this.indices = new Uint16Array(indices);
                /**
                 * The expected usage pattern of the data store.
                 * @var {number} [Entity.Mesh.usage=gl.STATIC_DRAW]
                 */
                this.usage = usage;
                /**
                 * The visual make-up of the mesh.
                 * @var {Entity.Structure.Material|Entity.Structure.Material.PhongMaterial} Entity.Mesh.material
                 */
                this.material = material;
                /**
                 * The scale of the mesh.
                 * @var {vec3} [Entity.Mesh.scale=[1, 1, 1]]
                 */
                this.scale = [1, 1, 1];
                /**
                 * The rotation of the mesh in degrees.
                 * @var {number} [Entity.Mesh.rotation=0]
                 */
                this.rotation = 0;
                /**
                 * The translation of the mesh.
                 * @var {vec3} [Entity.Mesh.translation=[0, 0, 0]]
                 */
                this.translation = [0, 0, 0];
                this.configure();
            }
            /**
             * Interleave the mesh data and attach it to the appropriate
             * vertex buffer objects.
             * @function Entity.Mesh.configure
             * @returns {undefined}
             */
            _createClass(Mesh, [{
                key: "configure",
                value: function configure() {
                        var vao = this.vao;
                        var usage = this.usage;
                        var interleaved = [];
                        var vertices = this.vertices;
                        vertices.map(this.interleave.bind(this, interleaved));
                        vao.bind();
                        gl.bufferData(gl.ARRAY_BUFFER, new this.vao.view(interleaved), usage);
                        if (vao.indexed) {
                            var indices = this.indices;
                            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, usage);
                            this.count = indices;
                        } else {
                            this.count = vertices.length;
                        }
                        vao.unbind();
                    }
                    /**
                     * Interleave the vertices (V), colors (C), texture mapping coordinates (U),
                     * and normals (N) using VVVCCCUUNNN format.
                     * @callback Entity.Mesh.interleave
                     * @param {Array} interleaved - Specifies the resultant
                     * interleaved mesh data.
                     * @param {vec3} vertex - Specifies the current vertex position.
                     * @param {numebr} index - Specifies the array index of the
                     * current vertex position.
                     * @returns {undefined}
                     */
            }, {
                key: "interleave",
                value: function interleave(interleaved, vertex, index) {
                        var color = this.colors[index] || [];
                        var uv = this.uvs[index] || [];
                        var normal = this.normals[index] || [];
                        var contatenation = [].concat(vertex, color, uv, normal);
                        [].push.apply(interleaved, contatenation.map(parseFloat));
                    }
                    /**
                     * Render the mesh to the active framebuffer object.
                     * @function Entity.Mesh.draw
                     * @param {number} [primitive=gl.TRIANGLES] - Specifies what
                     * kind of primitives to render;
                     * `gl[LINES|LINE_STRIP|LINE_LOOP|TRIANGLES|TRIANGLE_STRIP|TRIANGLE_FAN|POINTS]`
                     * @param {number} [offset=0] - Specifies the starting index
                     * in the enabled arrays.
                     * @param {boolean|number} [count=this.count] - Specifies the
                     * number of vertices/indices to be rendered.
                     * @returns {undefined}
                     */
            }, {
                key: "draw",
                value: function draw() {
                    var _ref14 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                    var _ref14$primitive = _ref14.primitive;
                    var primitive = _ref14$primitive === undefined ? gl.TRIANGLES : _ref14$primitive;
                    var _ref14$offset = _ref14.offset;
                    var offset = _ref14$offset === undefined ? 0 : _ref14$offset;
                    var _ref14$count = _ref14.count;
                    var count = _ref14$count === undefined ? this.count : _ref14$count;
                    var vao = this.vao;
                    this.material.bind();
                    vao.bind();
                    if (vao.indexed) {
                        gl.drawElements(primitive, count, gl.UNSIGNED_SHORT, offset);
                    } else {
                        gl.drawArrays(primitive, offset, count);
                    }
                    vao.unbind();
                }
            }]);
            return Mesh;
        })(Entity);
        module.exports = Mesh;
    }, {
        "./Entity": 16,
        "./gl": 42
    }],
    24: [function(require, module, exports) {
        'use strict';
        var ajax = require('./utils/ajax');
        var Entity = require('./Entity');
        var _name = 'mesh.loader';
        /**
         * A mesh loader is a mesh file parser that extracts the collections of vertices
         * and faces that define a shape. It may also include data to shade the mesh,
         * such as vertex colors, coordinates and per-vertex/face normals, depending
         * on the mesh file format.
         * @class MeshLoader
         * @name Entity.MeshLoader
         * @extends Entity
         * @param {string} [name=mesh.loader] - Specifies the entities friendly name.
         * @param {string} path - Specifies the relative path to the mesh file.
         */
        var MeshLoader = (function(_Entity5) {
            _inherits(MeshLoader, _Entity5);

            function MeshLoader() {
                var _ref15 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref15$name = _ref15.name;
                var name = _ref15$name === undefined ? _name : _ref15$name;
                var path = _ref15.path;
                _classCallCheck(this, MeshLoader);
                _get(Object.getPrototypeOf(MeshLoader.prototype), "constructor", this).call(this, {
                    name: name
                });
                /**
                 * The mesh loader xhr promise handler to help emulate synchronous
                 * behaviour (callback execution).
                 * @var {Promise} Entity.MeshLoader.request
                 */
                this.request = undefined;
                /**
                 * The mesh vertex positions.
                 * @var {Array} [Entity.MeshLoader.vertices=[]]
                 */
                this.vertices = [];
                /**
                 * The mesh vertex texture mapping coordinates.
                 * @var {Array} [Entity.MeshLoader.uvs=[]]
                 */
                this.uvs = [];
                /**
                 * The mesh vertex normals.
                 * @var {Array} [Entity.MeshLoader.normals=[]]
                 */
                this.normals = [];
                /**
                 * A temporary storage buffer for the mesh data to assist
                 * generating the mesh data arrays, if necessary.
                 * This object is automatically deleted once the mesh data
                 * has been allocated to their properties.
                 * @var {object} [Entity.MeshLoader.tmp={ vertices: [], colors: [], uvs: [], normals: [] }]
                 */
                this.tmp = {
                    vertices: [],
                    colors: [],
                    uvs: [],
                    normals: []
                };
                /**
                 * The indices used to construct the primitives.
                 * @var {Array} [Entity.MeshLoader.indices=[]]
                 */
                this.indices = [];
                this.fetch(path);
            }
            /**
             * Asynchronously fetches the mesh file contents, parses it, and
             * subsequently deletes the `tmp` temporary storage buffer.
             * @function Entity.MeshLoader.fetch
             * @param {string} path - Specifies the relative path to the mesh file.
             * @returns {undefined}
             */
            _createClass(MeshLoader, [{
                key: "fetch",
                value: function fetch(path) {
                    this.request = ajax(path).then(this.parse.bind(this)).then(this.flush.bind(this));
                }
            }, {
                key: "flush",
                value: function flush() {
                    delete this.tmp;
                }
            }]);
            return MeshLoader;
        })(Entity);
        module.exports = MeshLoader;
    }, {
        "./Entity": 16,
        "./utils/ajax": 43
    }],
    25: [function(require, module, exports) {
        'use strict';
        var MeshLoader = require('./MeshLoader');
        /**
         * An OBJ mesh loader is a .obj file parser that extracts the collections of vertices
         * and faces that define a shape. It may also include data to shade the mesh, such as
         * vertex colors, coordinates and per-vertex/face normals.
         * @class OBJMeshLoader
         * @name Entity.MeshLoader.OBJMeshLoader
         * @extends Entity
         * @param {string} [name=mesh.loader] - Specifies the entities friendly name.
         * @param {string} path - Specifies the relative path to the mesh file.
         */
        var OBJMeshLoader = (function(_MeshLoader) {
            _inherits(OBJMeshLoader, _MeshLoader);

            function OBJMeshLoader() {
                var _ref16 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref16$name = _ref16.name;
                var name = _ref16$name === undefined ? 'obj.mesh.loader' : _ref16$name;
                var path = _ref16.path;
                _classCallCheck(this, OBJMeshLoader);
                _get(Object.getPrototypeOf(OBJMeshLoader.prototype), "constructor", this).call(this, {
                    name: name,
                    path: path
                });
            }
            /**
             * Parses the contents of the OBJ mesh file.
             * @callback Entity.MeshLoader.OBJMeshLoader.parse
             * @param {string} raw - The OBJ mesh file contents.
             * @returns {undefined}
             */
            _createClass(OBJMeshLoader, [{
                key: "parse",
                value: function parse(raw) {
                        raw.split('\n').map(this.categorise.bind(this));
                    }
                    /**
                     * Populate the mesh data arrays with the given contents of the
                     * OBJ mesh file.
                     * @callback Entity.MeshLoader.OBJMeshLoader.categorise
                     * @param {string} line - Specifies an excerpt from the OBJ mesh
                     * file to parse.
                     * @returns {undefined}
                     */
            }, {
                key: "categorise",
                value: function categorise(line) {
                        var words = line.split(' ');
                        var type = words.shift();
                        switch (type) {
                            case 'v':
                                this.tmp.vertices.push(words);
                                break;
                            case 'vt':
                                this.tmp.uvs.push(words);
                                break;
                            case 'vn':
                                this.tmp.normals.push(words);
                                break;
                            case 'f':
                                words.map(this.recategorise.bind(this));
                                break;
                        }
                    }
                    /**
                     * Recategorise the mesh data in the temporary storage buffer
                     * to the mesh data arrays using the indices defined in the OBJ
                     * mesh file.
                     * @callback Entity.MeshLoader.OBJMeshLoader.index
                     * @param {string} word - Specifies the indices to the vertex position,
                     * texture mapping coordinate and per-vertex/face normals in the
                     * temporary storage buffer for a vertex instance.
                     * @returns {undefined}
                     */
            }, {
                key: "recategorise",
                value: function recategorise(word) {
                        var indices = word.split('/').map(this.decrement);
                        var tmp = this.tmp;
                        this.vertices.push(tmp.vertices[indices[0]]);
                        this.uvs.push(tmp.uvs[indices[1]]);
                        this.normals.push(tmp.normals[indices[2]]);
                    }
                    /**
                     * Decrements the given value by 1.
                     * @callback Entity.MeshLoader.OBJMeshLoader.decrement
                     * @param {string|number} value - Specifies the number to decrement.
                     * @returns {number}
                     */
            }, {
                key: "decrement",
                value: function decrement(value) {
                    return value - 1;
                }
            }]);
            return OBJMeshLoader;
        })(MeshLoader);
        module.exports = OBJMeshLoader;
    }, {
        "./MeshLoader": 24
    }],
    26: [function(require, module, exports) {
        'use strict';
        var gl = require('./gl');
        var glm = require('gl-matrix');
        var mat4 = glm.mat4;
        var Camera = require('./Camera');
        var _name = 'orthographic.camera';
        var _left = -1;
        var _top = -1;
        var _near = 0.1;
        var _far = 1;
        /**
         * An orthographic camera produces a two dimensional projection into framebuffers.
         * @class OrthographicCamera
         * @name Entity.Structure.Camera.OrthographicCamera
         * @extends Entity.Structure.Camera
         * @param {string} [name=orthographic.camera] - Specifies the entities friendly name.
         * @param {Entity.Program} program - Specifies the program in which the camera used.
         * @param {string} [path=camera] - Specifies the uniform structure path to the generic uniforms.
         * @param {Array} [uniforms=['mat4 projectionMatrix', 'mat4 modelViewMatrix', 'mat3 normalMatrix']] - Specifies the formats and names of the generic uniforms as used in the shader.
         * @param {vec4} [background=[0, 0, 0, 1]] - Specifies the clear value for the color buffers.
         * @param {number} [left=-1] - Specifies the left most boundary of the projection.
         * @param {number} right - Specifies the right most boundary of the projection.
         * @param {number} [top=-1] - Specifies the top most boundary of the projection.
         * @param {number} bottom - Specifies the bottom most boundary of the projection.
         * @param {number} [near=0.1] - Specifies the front most boundary of the projection.
         * @param {number} [far=1] - Specifies the back most boundary of the projection.
         */
        var OrthographicCamera = (function(_Camera) {
            _inherits(OrthographicCamera, _Camera);

            function OrthographicCamera() {
                var _ref17 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref17$name = _ref17.name;
                var name = _ref17$name === undefined ? _name : _ref17$name;
                var program = _ref17.program;
                var path = _ref17.path;
                var uniforms = _ref17.uniforms;
                var background = _ref17.background;
                var _ref17$left = _ref17.left;
                var left = _ref17$left === undefined ? _left : _ref17$left;
                var right = _ref17.right;
                var bottom = _ref17.bottom;
                var _ref17$top = _ref17.top;
                var top = _ref17$top === undefined ? _top : _ref17$top;
                var _ref17$near = _ref17.near;
                var near = _ref17$near === undefined ? _near : _ref17$near;
                var _ref17$far = _ref17.far;
                var far = _ref17$far === undefined ? _far : _ref17$far;
                _classCallCheck(this, OrthographicCamera);
                _get(Object.getPrototypeOf(OrthographicCamera.prototype), "constructor", this).call(this, {
                    name: name,
                    program: program,
                    path: path,
                    uniforms: uniforms,
                    background: background
                });
                /**
                 * The left most boundary of the projection.
                 * @var {number} [Entity.Structure.Camera.OrthographicCamera.left=-1]
                 */
                this.left = left;
                /**
                 * The right most boundary of the projection.
                 * @var {number} Entity.Structure.Camera.OrthographicCamera.right
                 */
                this.right = right;
                /**
                 * The bottom most boundary of the projection.
                 * @var {number} Entity.Structure.Camera.OrthographicCamera.bottom
                 */
                this.bottom = bottom;
                /**
                 * The top most boundary of the projection.
                 * @var {number} [Entity.Structure.Camera.OrthographicCamera.top=-1]
                 */
                this.top = top;
                /**
                 * Specifies the front most boundary of the projection.
                 * @var {number} [Entity.Structure.Camera.OrthographicCamera.near=0.1]
                 */
                this.near = near;
                /**
                 * The back most boundary of the projection.
                 * @var {number} [Entity.Structure.Camera.OrthographicCamera.far=1]
                 */
                this.far = far;
                this.configure();
            }
            /**
             * Generates an orthogonal projection matrix with the given bounds and
             * initialises the modelview matrix to an identity matrix.
             * @function Entity.Structure.Camera.OrthographicCamera.configure
             * @returns {undefined}
             */
            _createClass(OrthographicCamera, [{
                key: "configure",
                value: function configure() {
                        _get(Object.getPrototypeOf(OrthographicCamera.prototype), "configure", this).call(this);
                        mat4.ortho(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
                        mat4.identity(this.modelViewMatrix);
                    }
                    /**
                     * Specify the value of the uniform variables for the current program object;
                     * disable depth testing and set the viewport boundaries with the given
                     * bounds.
                     * @function Entity.Structure.Camera.OrthographicCamera.bind
                     * @returns {undefined}
                     */
            }, {
                key: "bind",
                value: function bind() {
                    _get(Object.getPrototypeOf(OrthographicCamera.prototype), "bind", this).call(this);
                    gl.disable(gl.DEPTH_TEST);
                    gl.viewport(0, 0, this.right, this.top);
                }
            }]);
            return OrthographicCamera;
        })(Camera);
        module.exports = OrthographicCamera;
    }, {
        "./Camera": 12,
        "./gl": 42,
        "gl-matrix": 1
    }],
    27: [function(require, module, exports) {
        'use strict';
        var gl = require('./gl');
        var glm = require('gl-matrix');
        var mat4 = glm.mat4;
        var Camera = require('./Camera');
        var _name = 'perspective.camera';
        var _width = gl.canvas.width;
        var _height = gl.canvas.height;
        var _fov = 45;
        var _near = 0.1;
        var _far = 1000;
        var _direction = [0, 0, 0];
        var _up = [0, 1, 0];
        /**
         * An perspective camera produces a three dimensional projection into framebuffers.
         * @class PerspectiveCamera
         * @name Entity.Structure.Camera.PerspectiveCamera
         * @extends Entity.Structure.Camera
         * @param {string} [name=perspective.camera] - Specifies the entities friendly name.
         * @param {Entity.Program} program - Specifies the program in which the camera used.
         * @param {string} [path=camera] - Specifies the uniform structure path to the generic uniforms.
         * @param {Array} [uniforms=['mat4 projectionMatrix', 'mat4 modelViewMatrix', 'mat3 normalMatrix']] - Specifies the formats and names of the generic uniforms as used in the shader.
         * @param {vec4} [background=[0, 0, 0, 1]] - Specifies the clear value for the color buffers.
         * @param {number} [width=gl.canvas.width] - Specifies the projection width. The initial value is set to the width of the canvas.
         * @param {number} [height=gl.canvas.height] - Specifies the projection height. The initial value is set to the height of the canvas.
         * @param {number} [fov=45] - Specifies the field of view of the projection.
         * @param {number} [near=0.1] - Specifies the front most boundary of the projection.
         * @param {number} [far=1000] - Specifies the back most boundary of the projection.
         * @param {vec3} [direction=[0, 0, 0]] - Specifies the position at which the projection is aimed.
         * @param {vec3} location - Specifies the position of the projection.
         * @param {vec3} [up=[0, 1, 0]] - Specifies the orientation of the projection.
         */
        var PerspectiveCamera = (function(_Camera2) {
            _inherits(PerspectiveCamera, _Camera2);

            function PerspectiveCamera() {
                var _ref18 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref18$name = _ref18.name;
                var name = _ref18$name === undefined ? _name : _ref18$name;
                var program = _ref18.program;
                var path = _ref18.path;
                var uniforms = _ref18.uniforms;
                var background = _ref18.background;
                var _ref18$width = _ref18.width;
                var width = _ref18$width === undefined ? _width : _ref18$width;
                var _ref18$height = _ref18.height;
                var height = _ref18$height === undefined ? _height : _ref18$height;
                var _ref18$fov = _ref18.fov;
                var fov = _ref18$fov === undefined ? _fov : _ref18$fov;
                var _ref18$near = _ref18.near;
                var near = _ref18$near === undefined ? _near : _ref18$near;
                var _ref18$far = _ref18.far;
                var far = _ref18$far === undefined ? _far : _ref18$far;
                var _ref18$direction = _ref18.direction;
                var direction = _ref18$direction === undefined ? _direction : _ref18$direction;
                var location = _ref18.location;
                var _ref18$up = _ref18.up;
                var up = _ref18$up === undefined ? _up : _ref18$up;
                _classCallCheck(this, PerspectiveCamera);
                _get(Object.getPrototypeOf(PerspectiveCamera.prototype), "constructor", this).call(this, {
                    name: name,
                    program: program,
                    path: path,
                    uniforms: uniforms,
                    background: background
                });
                /**
                 * The projection width. The initial value is set to the width of the canvas.
                 * @var {number} [Entity.Structure.Camera.PerspectiveCamera.width=gl.canvas.width]
                 */
                this.width = width;
                /**
                 * The projection height. The initial value is set to the height of the canvas.
                 * @var {number} [Entity.Structure.Camera.PerspectiveCamera.height=gl.canvas.height]
                 */
                this.height = height;
                /**
                 * The field of view of the projection.
                 * @var {number} [Entity.Structure.Camera.PerspectiveCamera.fov=45]
                 */
                this.fov = fov;
                /**
                 * The aspect ratio of the projection. This is calculated by dividing the width
                 * of the projection by its height.
                 * @var {number} [Entity.Structure.Camera.PerspectiveCamera.ratio=gl.canvas.width/gl.canvas.height]
                 */
                this.ratio = width / height;
                /**
                 * Specifies the front most boundary of the projection.
                 * @var {number} [Entity.Structure.Camera.PerspectiveCamera.near=0.1]
                 */
                this.near = near;
                /**
                 * Specifies the back most boundary of the projection.
                 * @var {number} [Entity.Structure.Camera.PerspectiveCamera.far=1000]
                 */
                this.far = far;
                /**
                 * The position at which the projection is aimed.
                 * @var {vec3} [Entity.Structure.Camera.PerspectiveCamera.direction=[0, 0, 0]]
                 */
                this.direction = direction;
                /**
                 * The position of the projection.
                 * @var {vec3} Entity.Structure.Camera.PerspectiveCamera.location
                 */
                this.location = location;
                /**
                 * The orientation of the projection.
                 * @var {vec3} [Entity.Structure.Camera.PerspectiveCamera.up=[0, 1, 0]]
                 */
                this.up = up;
                this.configure();
            }
            /**
             * Generates a perspective projection matrix with the given bounds;
             * initialises the modelview matrix to an identity matrix and subsequently
             * computes a look-at matrix with the given eye position, focal point, and up axis.
             * @function Entity.Structure.Camera.PerspectiveCamera.configure
             * @returns {undefined}
             */
            _createClass(PerspectiveCamera, [{
                key: "configure",
                value: function configure() {
                        _get(Object.getPrototypeOf(PerspectiveCamera.prototype), "configure", this).call(this);
                        var modelViewMatrix = this.modelViewMatrix;
                        gl.clearDepth(1);
                        gl.depthFunc(gl.LEQUAL);
                        mat4.perspective(this.projectionMatrix, this.fov, this.ratio, this.near, this.far);
                        mat4.identity(modelViewMatrix);
                        mat4.lookAt(modelViewMatrix, this.location, this.direction, this.up);
                    }
                    /**
                     * Specify the value of the uniform variables for the current program object;
                     * enable depth testing and set the viewport boundaries with the given
                     * bounds.
                     * @function Entity.Structure.Camera.PerspectiveCamera.bind
                     * @returns {undefined}
                     */
            }, {
                key: "bind",
                value: function bind() {
                    _get(Object.getPrototypeOf(PerspectiveCamera.prototype), "bind", this).call(this);
                    gl.enable(gl.DEPTH_TEST);
                    gl.viewport(0, 0, this.width, this.height);
                }
            }]);
            return PerspectiveCamera;
        })(Camera);
        module.exports = PerspectiveCamera;
    }, {
        "./Camera": 12,
        "./gl": 42,
        "gl-matrix": 1
    }],
    28: [function(require, module, exports) {
        'use strict';
        var Material = require('./Material');
        var _name = 'phong.material';
        var _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f shininess', 'i shading'];
        var _shininess = 75;
        /**
         * Phong shading using the Blinn-Phong shading model
         * @class PhongMaterial
         * @name Entity.Structure.Material.PhongMaterial
         * @extends Entity.Structure.Material
         * @param {string} [name=phong.material] - Instance name
         * @param {vec3} ambient - Ambient component
         * @param {vec3} diffuse - Diffuse component
         * @param {vec3} specular - Specular component
         * @param {string} [shading=smooth] - Surface shading method
         * @param {number} [shininess=75] - Surface light reflectivity
         */
        var PhongMaterial = (function(_Material) {
            _inherits(PhongMaterial, _Material);

            function PhongMaterial() {
                var _ref19 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref19$name = _ref19.name;
                var name = _ref19$name === undefined ? _name : _ref19$name;
                var _ref19$uniforms = _ref19.uniforms;
                var uniforms = _ref19$uniforms === undefined ? _uniforms : _ref19$uniforms;
                var ambient = _ref19.ambient;
                var diffuse = _ref19.diffuse;
                var specular = _ref19.specular;
                var shading = _ref19.shading;
                var _ref19$shininess = _ref19.shininess;
                var shininess = _ref19$shininess === undefined ? _shininess : _ref19$shininess;
                _classCallCheck(this, PhongMaterial);
                _get(Object.getPrototypeOf(PhongMaterial.prototype), "constructor", this).call(this, {
                    name: name,
                    program: program,
                    uniforms: uniforms,
                    ambient: ambient,
                    diffuse: diffuse,
                    shading: shading
                });
                /**
                 * Specular component
                 * @var {vec3} Entity.Structure.Material.PhongMaterial.specular
                 * @private
                 */
                this.specular = specular;
                /**
                 * Surface light reflectivity
                 * @var {number} Entity.Structure.Material.PhongMaterial.shininess
                 * @default 75
                 * @private
                 */
                this.shininess = shininess;
            }
            return PhongMaterial;
        })(Material);
        module.exports = PhongMaterial;
    }, {
        "./Material": 22
    }],
    29: [function(require, module, exports) {
        'use strict';
        var Light = require('./Light');
        var _name = 'point.light';
        var _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'vec3 fade', 'vec3 location'];
        /**
         * A point light radiates light in all directions from the given location, however
         * has a limited reach.
         * @class PointLight
         * @name Entity.Structure.Light.PointLight
         * @extends Entity.Structure.Light
         * @param {string} [name=point.light] - Specifies the entities friendly name.
         * @param {Entity.Program} program - Specifies the program in which the uniforms should be located.
         * @param {vec3} ambient - Specifies the ambient component of the light source.
         * @param {vec3} diffuse - Specifies the diffuse component of the light source.
         * @param {vec3} specular - Specifies the specular component of the light source.
         * @param {vec3} specular - Specular component
         * @param {vec3} fade - Specifies the coefficient, linear and quadratic elements of the light source.
         * @param {number} [intensity=1] - Specifies the intensity of the light source.
         * @param {vec3} [location=[0, 0, 0]] - Specifies the location of the light source.
         */
        var PointLight = (function(_Light2) {
            _inherits(PointLight, _Light2);

            function PointLight() {
                var _ref20 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref20$name = _ref20.name;
                var name = _ref20$name === undefined ? _name : _ref20$name;
                var program = _ref20.program;
                var _ref20$uniforms = _ref20.uniforms;
                var uniforms = _ref20$uniforms === undefined ? _uniforms : _ref20$uniforms;
                var ambient = _ref20.ambient;
                var diffuse = _ref20.diffuse;
                var specular = _ref20.specular;
                var fade = _ref20.fade;
                var intensity = _ref20.intensity;
                var location = _ref20.location;
                _classCallCheck(this, PointLight);
                _get(Object.getPrototypeOf(PointLight.prototype), "constructor", this).call(this, {
                    name: name,
                    program: program,
                    uniforms: uniforms,
                    ambient: ambient,
                    diffuse: diffuse,
                    specular: specular,
                    intensity: intensity,
                    location: location
                });
                /**
                 * The coefficient, linear and quadratic elements of the light source.
                 * @var {number} Entity.Structure.Light.PointLight.fade
                 */
                this.fade = fade;
            }
            return PointLight;
        })(Light);
        module.exports = PointLight;
    }, {
        "./Light": 21
    }],
    30: [function(require, module, exports) {
        'use strict';
        var gl = require('./gl');
        var Entity = require('./Entity');
        var _name = 'program';
        /**
         * A program is an object to which shader objects can be attached. This provides a mechanism to
         * specify the shader objects that will be linked to create a program. It also provides a means for checking
         * the compatibility of the shaders that will be used to create a program (for instance, checking the
         * compatibility between a vertex shader and a fragment shader).
         * @class Program
         * @name Entity.Program
         * @extends Entity
         * @param {string} [name=program] - Specifies the entities friendly name.
         * @param {Entity.Shader.VertexShader} vertexShader - Specifies the vertex shader.
         * @param {Entity.Shader.FragmentShader} fragmentShader - Specifies the fragment shader.
         */
        var Program = (function(_Entity6) {
            _inherits(Program, _Entity6);

            function Program(_ref21) {
                var _ref21$name = _ref21.name;
                var name = _ref21$name === undefined ? _name : _ref21$name;
                var vertexShader = _ref21.vertexShader;
                var fragmentShader = _ref21.fragmentShader;
                _classCallCheck(this, Program);
                _get(Object.getPrototypeOf(Program.prototype), "constructor", this).call(this, {
                    name: name
                });
                /**
                 * The program to which the vertex and fragment shader will be attached.
                 * @var {WebGLProgram} [Entity.Program.program=WebGLProgram]
                 */
                this.buffer = gl.createProgram();
                /**
                 * The vertex shader.
                 * @var {Entity.Shader.VertexShader} Entity.Program.vertexShader
                 */
                this.vertexShader = vertexShader;
                /**
                 * The fragment shader.
                 * @var {Entity.Shader.FragmentShader} Entity.Program.fragmentShader
                 */
                this.fragmentShader = fragmentShader;
                this.link();
            }
            /**
             * Links the program by creating executables for the vertex and
             * fragment shader to run on the vertex and fragment processors,
             * respectively.
             * @function Entity.Program.link
             * @returns {undefined}
             */
            _createClass(Program, [{
                key: "link",
                value: function link() {
                        var buffer = this.buffer;
                        gl.attachShader(buffer, this.vertexShader.buffer);
                        gl.attachShader(buffer, this.fragmentShader.buffer);
                        gl.linkProgram(buffer);
                        this.check();
                    }
                    /**
                     * Installs the program as part of the current rendering state.
                     * @function Entity.Program.bind
                     * @returns {undefined}
                     */
            }, {
                key: "bind",
                value: function bind() {
                        gl.useProgram(this.buffer);
                    }
                    /**
                     * Validates the link status of the program.
                     * @function Entity.Program.check
                     * @returns {undefined|Error}
                     */
            }, {
                key: "check",
                value: function check() {
                    var buffer = this.buffer;
                    var status = gl.getProgramParameter(buffer, gl.LINK_STATUS);
                    var context = gl.isContextLost();
                    if (!status && !context) {
                        var error = gl.getProgramInfoLog(buffer);
                        gl.deleteProgram(buffer);
                        throw new Error(error);
                    }
                }
            }]);
            return Program;
        })(Entity);
        module.exports = Program;
    }, {
        "./Entity": 16,
        "./gl": 42
    }],
    31: [function(require, module, exports) {
        'use strict';
        var gl = require('./gl');
        var Entity = require('./Entity');
        var _name = 'renderbuffer';
        /**
         * A renderbuffer is a data storage object containing a single image of a renderable internal format.
         * @class Renderbuffer
         * @name Entity.Renderbuffer
         * @extends Entity
         * @param {string} [name=renderbuffer] - Specifies the entities friendly name.
         * @param {number} width - The width of the renderbuffer.
         * @param {number} height - The height of the renderbuffer.
         */
        var Renderbuffer = (function(_Entity7) {
            _inherits(Renderbuffer, _Entity7);

            function Renderbuffer() {
                var _ref22 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref22$name = _ref22.name;
                var name = _ref22$name === undefined ? _name : _ref22$name;
                var width = _ref22.width;
                var height = _ref22.height;
                _classCallCheck(this, Renderbuffer);
                _get(Object.getPrototypeOf(Renderbuffer.prototype), "constructor", this).call(this, {
                    name: name
                });
                /**
                 * The renderbuffer object.
                 * @var {WebGLRenderbuffer} [Entity.Renderbuffer.buffer=WebGLRenderbuffer]
                 */
                this.buffer = gl.createRenderbuffer();
                /**
                 * The width of the renderbuffer.
                 * @var {number} Entity.Renderbuffer.width
                 */
                this.width = width;
                /**
                 * The height of the renderbuffer.
                 * @var {number} Entity.Renderbuffer.height
                 */
                this.height = height;
                this.configure();
            }
            /**
             * Establish the data storage, format and dimensions
             * of the renderbuffer.
             * @function Entity.Renderbuffer.configure
             * @returns {undefined}
             */
            _createClass(Renderbuffer, [{
                key: "configure",
                value: function configure() {
                        this.bind();
                        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height);
                        this.unbind();
                    }
                    /**
                     * Bind the renderbuffer.
                     * @function Entity.Renderbuffer.bind
                     * @returns {undefined}
                     */
            }, {
                key: "bind",
                value: function bind() {
                        gl.bindRenderbuffer(gl.RENDERBUFFER, this.buffer);
                    }
                    /**
                     * Unbind the renderbuffer.
                     * @function Entity.Renderbuffer.unbind
                     * @returns {undefined}
                     */
            }, {
                key: "unbind",
                value: function unbind() {
                    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
                }
            }]);
            return Renderbuffer;
        })(Entity);
        module.exports = Renderbuffer;
    }, {
        "./Entity": 16,
        "./gl": 42
    }],
    32: [function(require, module, exports) {
        'use strict';
        var Entity = require('./Entity');
        var _name = 'renderer';
        /**
         * Renderer. Coming soon...
         * @class Renderer
         * @name Entity.Renderer
         * @extends Entity
         * @param {string} [name=renderer] - Specifies the entities friendly name.
         */
        var Renderer = (function(_Entity8) {
            _inherits(Renderer, _Entity8);

            function Renderer() {
                var _ref23 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref23$name = _ref23.name;
                var name = _ref23$name === undefined ? _name : _ref23$name;
                _classCallCheck(this, Renderer);
                _get(Object.getPrototypeOf(Renderer.prototype), "constructor", this).call(this, {
                    name: name
                });
            }
            return Renderer;
        })(Entity);
        module.exports = Renderer;
    }, {
        "./Entity": 16
    }],
    33: [function(require, module, exports) {
        'use strict';
        var Entity = require('./Entity');
        var _name = 'scene';
        var _meshes = [];
        var Scene = (function(_Entity9) {
            _inherits(Scene, _Entity9);

            function Scene(_ref24) {
                var _ref24$name = _ref24.name;
                var name = _ref24$name === undefined ? _name : _ref24$name;
                var program = _ref24.program;
                var camera = _ref24.camera;
                var _ref24$meshes = _ref24.meshes;
                var meshes = _ref24$meshes === undefined ? _meshes : _ref24$meshes;
                _classCallCheck(this, Scene);
                _get(Object.getPrototypeOf(Scene.prototype), "constructor", this).call(this, {
                    name: name
                });
                this.program = program;
                this.camera = camera;
                this.meshes = meshes;
                this.scale = [1, 1, 1];
                this.rotation = 0;
                this.translation = [0, 0, 0];
            }
            _createClass(Scene, [{
                key: "use",
                value: function use(program) {
                    this.program = program;
                }
            }, {
                key: "put",
                value: function put(mesh) {
                    this.meshes.push(mesh);
                }
            }, {
                key: "renderTo",
                value: function renderTo(renderTarget, cameraStructure) {
                    var camera = this.camera;
                    renderTarget.bind(true);
                    camera.save();
                    camera.scale.apply(camera, this.scale);
                    camera.rotate(this.rotation);
                    camera.translate.apply(camera, this.translation);
                    camera.bind();
                    this.meshes.map(this.draw.bind(this, cameraStructure));
                    camera.restore();
                }
            }, {
                key: "draw",
                value: function draw(cameraStructure, mesh) {
                    var camera = this.camera;
                    camera.save();
                    camera.scale.apply(camera, mesh.scale);
                    camera.rotate(mesh.rotation);
                    camera.translate.apply(camera, mesh.translation);
                    camera.bind();
                    mesh.draw();
                    camera.restore();
                }
            }]);
            return Scene;
        })(Entity);
        module.exports = Scene;
    }, {
        "./Entity": 16
    }],
    34: [function(require, module, exports) {
        'use strict';
        var gl = require('./gl');
        var ajax = require('./utils/ajax');
        var Entity = require('./Entity');
        var _name = 'shader';
        /**
         * A shader is used to maintain the source code strings that define a shader. Two types of
         * shader are supported. A shader of type `gl.VERTEX_SHADER` is a shader that is
         * intended to run on the programmable vertex processor. A shader of type
         * `gl.FRAGMENT_SHADER` is a shader that is intended to run on the programmable
         * fragment processor.
         * @class Shader
         * @name Entity.Shader
         * @extends Entity
         * @param {string} [name=shader] - Specifies the entities friendly name.
         * @param {string} path - Specifies the relative path to the shader file.
         * @param {number} type - Specifies the type of shader.
         */
        var Shader = (function(_Entity10) {
            _inherits(Shader, _Entity10);

            function Shader(_x27, type) {
                var _ref25 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref25$name = _ref25.name;
                var name = _ref25$name === undefined ? _name : _ref25$name;
                var path = _ref25.path;
                _classCallCheck(this, Shader);
                _get(Object.getPrototypeOf(Shader.prototype), "constructor", this).call(this, {
                    name: name
                });
                /**
                 * The shader.
                 * @var {WebGLShader} [Entity.Shader.buffer=WebGLShader]
                 */
                this.buffer = gl.createShader(type);
                this.fetch(path);
            }
            /**
             * Asynchronously fetches the shader file contents.
             * @function Entity.Shader.fetch
             * @param {string} path - Specifies the relative path to the shader file.
             * @returns {undefined}
             */
            _createClass(Shader, [{
                key: "fetch",
                value: function fetch(path) {
                        ajax(path).then(this.compile.bind(this));
                    }
                    /**
                     * Compiles the source code strings.
                     * @callback Entity.Shader.compile
                     * @param {string} source - Specifies the shader source code strings.
                     * @returns {undefined}
                     */
            }, {
                key: "compile",
                value: function compile(source) {
                        var buffer = this.buffer;
                        gl.shaderSource(buffer, source);
                        gl.compileShader(buffer);
                        this.check();
                    }
                    /**
                     * Validates the compile status of the shader.
                     * @function Entity.Shader.check
                     * @returns {undefined|Error}
                     */
            }, {
                key: "check",
                value: function check() {
                    var buffer = this.buffer;
                    var status = gl.getShaderParameter(buffer, gl.COMPILE_STATUS);
                    var context = gl.isContextLost();
                    if (!status && !context) {
                        var error = gl.getShaderInfoLog(buffer);
                        gl.deleteShader(buffer);
                        throw new Error(error);
                    }
                }
            }]);
            return Shader;
        })(Entity);
        module.exports = Shader;
    }, {
        "./Entity": 16,
        "./gl": 42,
        "./utils/ajax": 43
    }],
    35: [function(require, module, exports) {
        'use strict';
        var Light = require('./Light');
        var _name = 'spot.light';
        var _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f exponent', 'f cutoff', 'f intensity', 'vec3 location', 'vec3 direction'];
        /**
         * A spot light defines a directional cone-shaped radiation of light to
         * illuminate a specific area.
         * @class SpotLight
         * @name Entity.Structure.Light.SpotLight
         * @extends Entity.Structure.Light
         * @param {string} [name=spot.light] - Specifies the entities friendly name.
         * @param {Entity.Program} program - Specifies the program in which the uniforms should be located.
         * @param {vec3} ambient - Specifies the ambient component of the light source.
         * @param {vec3} diffuse - Specifies the diffuse component of the light source.
         * @param {vec3} specular - Specifies the specular component of the light source.
         * @param {number} exponent - Specifies the fade intensity of the illuminated boundary.
         * @param {number} cutoff - Specifies the illuminated boundary of the light source.
         * @param {number} [intensity=1] - Specifies the intensity of the light source.
         * @param {vec3} [location=[0, 0, 0]] - Specifies the location of the light source.
         * @param {vec3} [direction=[0, 0, 0]] - Specifies the position at which the light aimed.
         */
        var SpotLight = (function(_Light3) {
            _inherits(SpotLight, _Light3);

            function SpotLight() {
                var _ref26 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref26$name = _ref26.name;
                var name = _ref26$name === undefined ? _name : _ref26$name;
                var program = _ref26.program;
                var _ref26$uniforms = _ref26.uniforms;
                var uniforms = _ref26$uniforms === undefined ? _uniforms : _ref26$uniforms;
                var ambient = _ref26.ambient;
                var diffuse = _ref26.diffuse;
                var specular = _ref26.specular;
                var exponent = _ref26.exponent;
                var cutoff = _ref26.cutoff;
                var intensity = _ref26.intensity;
                var location = _ref26.location;
                var _ref26$direction = _ref26.direction;
                var direction = _ref26$direction === undefined ? _direction : _ref26$direction;
                _classCallCheck(this, SpotLight);
                _get(Object.getPrototypeOf(SpotLight.prototype), "constructor", this).call(this, {
                    name: name,
                    program: program,
                    uniforms: uniforms,
                    ambient: ambient,
                    diffuse: diffuse,
                    specular: specular,
                    intensity: intensity,
                    location: location
                });
                /**
                 * The intensity of the illuminated field boundary.
                 * @var {number} Entity.Structure.Light.SpotLight.exponent
                 */
                this.exponent = exponent;
                /**
                 * The illuminated field of the light source.
                 * @var {number} Entity.Structure.Light.SpotLight.cutoff
                 */
                this.cutoff = cutoff;
                /**
                 * The position at which the light aimed.
                 * @var {vec3} [Entity.Structure.Light.SpotLight.direction=[0, 0, 0]]
                 */
                this.direction = direction;
            }
            return SpotLight;
        })(Light);
        module.exports = SpotLight;
    }, {
        "./Light": 21
    }],
    36: [function(require, module, exports) {
        'use strict';
        var Entity = require('./Entity');
        var Uniform = require('./Uniform');
        var _name = 'structure';
        var _uniforms = [];
        /**
         * A structure, at a high-level, is a concept that groups a collection of related uniforms
         * and their values. Alternatively, it is an abstraction layer to link client-side properties
         * with their uniform counter-part, thereby simplifying the process of updating uniforms on
         * the shader. Extensions, however, may introduce functionality bespoke to a particular
         * concept.
         * @class Structure
         * @name Entity.Structure
         * @extends Entity
         * @param {string} [name=structure] - Specifies the entities friendly name.
         * @param {Entity.Program} program - Specifies the program in which the uniforms should be located.
         * @param {string} path - Specifies the shader `struct` path to the uniform, if required.
         * @param {Array} [uniforms=[]] - Specifies a collection of related uniform variables
         * as is declared in the shader. The names imply the `u_` namespace is used as per the uniform
         * variable naming convention.
         */
        var Structure = (function(_Entity11) {
            _inherits(Structure, _Entity11);

            function Structure(_ref27) {
                var _ref27$name = _ref27.name;
                var name = _ref27$name === undefined ? _name : _ref27$name;
                var program = _ref27.program;
                var path = _ref27.path;
                var _ref27$uniforms = _ref27.uniforms;
                var uniforms = _ref27$uniforms === undefined ? _uniforms : _ref27$uniforms;
                _classCallCheck(this, Structure);
                _get(Object.getPrototypeOf(Structure.prototype), "constructor", this).call(this, {
                    name: name
                });
                /**
                 * The shader `struct` path to the uniform, if required.
                 * @var {string} Entity.Structure.path
                 */
                this.path = path;
                /**
                 * The collection of related uniform variables as is declared
                 * in the shader. The names imply the `u_` namespace is used.
                 * @var {Array} Entity.Structure.uniforms
                 */
                this.uniforms = uniforms.map(this.instantiate.bind(this, program));
            }
            /**
             * Instantiate the uniforms - see <a href="Entity.Uniform.html">Entity.Uniform</a>.
             * @callback Entity.Structure.instantiate
             * @param {Entity.Program} program - Specifies the program in which the uniforms
             * should be located.
             * @param {string} qualifying - Specifies the uniform variable as is declared
             * in the shader.
             * @returns {undefind}
             */
            _createClass(Structure, [{
                key: "instantiate",
                value: function instantiate(program, qualifying) {
                        var vars = qualifying.split(' ');
                        var format = vars[0];
                        var uniform = vars[1];
                        return new Uniform({
                            program: program,
                            path: this.path,
                            uniform: uniform,
                            format: format
                        });
                    }
                    /**
                     * Bind the structure.
                     * @function Entity.Structure.bind
                     * @returns {undefind}
                     */
            }, {
                key: "bind",
                value: function bind() {
                        this.uniforms.map(this.set.bind(this));
                    }
                    /**
                     * Set the value of the given uniform.
                     * @callback Entity.Structure.set
                     * @param {Entity.Uniform} uniform - Specifies the uniform to assign.
                     * @returns {undefind}
                     */
            }, {
                key: "set",
                value: function set(uniform) {
                    uniform.set(this[uniform.uniform]);
                }
            }]);
            return Structure;
        })(Entity);
        module.exports = Structure;
    }, {
        "./Entity": 16,
        "./Uniform": 38
    }],
    37: [function(require, module, exports) {
        'use strict';
        var Entity = require('./Entity');
        var gl = require('./gl');
        var unit = 0;
        /**
         * Texture is a wrapper on WebGLTexture buffers
         * @abstract
         * @class Texture
         * @name Entity.Texture
         * @extends Entity
         * @param {string} [name=attribute] - Name of the Texture instance
         * @param {Array} image - Texture data
         * @param {number} [lod=0] - Level of detail
         * @param {number} [components=gl.RGBA] - Texture components per texel
         * @param {number} [format=gl.UNSIGNED_BYTE] - Component data format
         * @param {number} [magnification=gl.NEAREST] - Magnification sampling filter
         * @param {number} [minification=gl.NEAREST] - Minification sampling filter
         * @param {number} [S=gl.CLAMP_TO_EDGE] - Horizontal texture wrapping
         * @param {number} [T=gl.CLAMP_TO_EDGE] - Vertex texture wrapping
         */
        var Texture = (function(_Entity12) {
            _inherits(Texture, _Entity12);

            function Texture() {
                var _ref28 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref28$name = _ref28.name;
                var name = _ref28$name === undefined ? 'texture' : _ref28$name;
                var image = _ref28.image;
                var _ref28$lod = _ref28.lod;
                var lod = _ref28$lod === undefined ? 0 : _ref28$lod;
                var _ref28$components = _ref28.components;
                var components = _ref28$components === undefined ? gl.RGBA : _ref28$components;
                var _ref28$format = _ref28.format;
                var format = _ref28$format === undefined ? gl.UNSIGNED_BYTE : _ref28$format;
                var _ref28$magnification = _ref28.magnification;
                var magnification = _ref28$magnification === undefined ? gl.NEAREST : _ref28$magnification;
                var _ref28$minification = _ref28.minification;
                var minification = _ref28$minification === undefined ? gl.NEAREST : _ref28$minification;
                var _ref28$S = _ref28.S;
                var S = _ref28$S === undefined ? gl.CLAMP_TO_EDGE : _ref28$S;
                var _ref28$T = _ref28.T;
                var T = _ref28$T === undefined ? gl.CLAMP_TO_EDGE : _ref28$T;
                _classCallCheck(this, Texture);
                _get(Object.getPrototypeOf(Texture.prototype), "constructor", this).call(this, {
                    name: name
                });
                /**
                 * WebGL texture buffer
                 * @var {WebGLTexture} Entity.Texture.buffer
                 * @default WebGLTexture
                 * @private
                 */
                this.buffer = gl.createTexture();
                /**
                 * Texture data
                 * @var {Array} Entity.Texture.image
                 * @private
                 */
                this.image = image;
                /**
                 * Level of detail
                 * @var {number} Entity.Texture.lod
                 * @default 0
                 * @private
                 */
                this.lod = lod;
                /**
                 * Texture components per texel
                 * @var {number} Entity.Texture.components
                 * @default gl.RGB
                 * @private
                 */
                this.components = components;
                /**
                 * Component data format
                 * @var {number} Entity.Texture.format
                 * @default gl.UNSIGNED_BYTE
                 * @private
                 */
                this.format = format;
                /**
                 * Magnification sampling filter
                 * @var {number} Entity.Texture.magnification
                 * @default gl.NEAREST
                 * @private
                 */
                this.magnification = magnification;
                /**
                 * Minification sampling filter
                 * @var {number} Entity.Texture.minification
                 * @default gl.NEAREST
                 * @private
                 */
                this.minification = minification;
                /**
                 * Horizontal texture wrapping
                 * @var {number} Entity.Texture.S
                 * @default gl.CLAMP_TO_EDGE
                 * @private
                 */
                this.S = S;
                /**
                 * Vertex texture wrapping
                 * @var {number} Entity.Texture.T
                 * @default gl.CLAMP_TO_EDGE
                 * @private
                 */
                this.T = T;
                /**
                 * Texture unit
                 * @var {number} Entity.Texture.unit
                 * @default *
                 * @private
                 */
                this.unit = unit++;
            }
            /**
             * Apply appropriate texture parameters
             * @function Entity.Texture.configure
             * @returns {undefined}
             */
            _createClass(Texture, [{
                key: "configure",
                value: function configure() {
                        this.bind();
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magnification);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minification);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.S);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.T);
                    }
                    /**
                     * Bind the texture
                     * @function Entity.Texture.bind
                     * @param {boolean|Entity.Uniform} [sampler=false] - Texture sampler uniform
                     * @returns {undefined}
                     */
            }, {
                key: "bind",
                value: function bind() {
                        var sampler = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
                        var unit = this.unit;
                        var active = gl.TEXTURE0 + unit;
                        gl.activeTexture(active);
                        gl.bindTexture(gl.TEXTURE_2D, this.buffer);
                        if (sampler) {
                            sampler.set(unit);
                        }
                    }
                    /**
                     * Unbind the texture
                     * @function Entity.Texture.unbind
                     * @returns {undefined}
                     */
            }, {
                key: "unbind",
                value: function unbind() {
                    gl.bindTexture(gl.TEXTURE_2D, null);
                }
            }]);
            return Texture;
        })(Entity);
        module.exports = Texture;
    }, {
        "./Entity": 16,
        "./gl": 42
    }],
    38: [function(require, module, exports) {
        'use strict';
        var Entity = require('./Entity');
        var gl = require('./gl');
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
            mat4: 'Matrix4fv'
        };
        var _name = 'uniform';
        /**
         * Uniform is a wrapper on shader WebGLUniformLocation uniforms.
         * Supported types include i, vec2i, vec3i, vec4i, f, vec2f, vec3f
         * vec4f, mat2, mat3, and mat4
         * @class Uniform
         * @name Entity.Uniform
         * @extends Entity
         * @param {string} [name=program] - Instance name
         * @param {string} [path] - Struct path to uniform
         * @param {Entity.Program} program - Program in which the shader uniform is used
         * @param {string} uniform - Shader variable name
         * @param {number} format - Component data format
         */
        var Uniform = (function(_Entity13) {
            _inherits(Uniform, _Entity13);

            function Uniform() {
                var _ref29 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref29$name = _ref29.name;
                var name = _ref29$name === undefined ? _name : _ref29$name;
                var program = _ref29.program;
                var path = _ref29.path;
                var uniform = _ref29.uniform;
                var format = _ref29.format;
                _classCallCheck(this, Uniform);
                _get(Object.getPrototypeOf(Uniform.prototype), "constructor", this).call(this, {
                    name: name
                });
                /**
                 * Shader variable name
                 * @var {string} [uniform] - Shader uniform
                 * @private
                 */
                this.path = path;
                /**
                 * Shader variable name
                 * @var {string} Entity.Uniform.uniform - Shader uniform
                 * @private
                 */
                this.uniform = uniform;
                /**
                 * Shader uniform location
                 * @var {WebGLUniformLocation} [Entity.Uniform.location=WebGLUniformLocation]
                 * @private
                 */
                this.location = this.from(program);
                /**
                 * Uniform setter method
                 * @var {string} [Entity.Uniform.location=uniform${format}]
                 * @private
                 */
                this.method = "uniform" + formats[format];
            }
            /**
             * Set shader uniform value
             * @function Entity.Uniform.set
             * @param {*} value - Shader uniform value
             * @returns {undefined}
             */
            _createClass(Uniform, [{
                key: "set",
                value: function set(value) {
                        var location = this.location;
                        var method = this.method;
                        var setter = gl[this.method].bind(gl, this.location);
                        if (method.match('Matrix') !== null) {
                            setter(false, value);
                        } else {
                            setter(value);
                        }
                    }
                    /**
                     * Locate the shader uniform from within the given program
                     * @function Entity.Uniform.from
                     * @param {Entity.Program} program - Program in which the shader uniform is used
                     * @returns {object|WebGLUniformLocation}
                     */
            }, {
                key: "from",
                value: function from(program) {
                    var uniform = [this.path, this.uniform].join('.');
                    return gl.getUniformLocation(program.buffer, "u_" + uniform);
                }
            }]);
            return Uniform;
        })(Entity);
        module.exports = Uniform;
    }, {
        "./Entity": 16,
        "./gl": 42
    }],
    39: [function(require, module, exports) {
        'use strict';
        var Entity = require('./Entity');
        var Attribute = require('./Attribute');
        var gl = require('./gl');
        var lengths = {
            i: 1,
            f: 1,
            vec2: 2,
            vec3: 3,
            vec4: 4
        };
        /**
         * VertexArrayObject retains the attributes associated with
         * the rendering for an associated mesh, therefore providing a handler
         * to manage their referencing in the vertex shader at render time
         * @class VertexArrayObject
         * @name Entity.VertexArrayObject
         * @extends Entity
         * @param {string} [name=vertex.array.object] - Instance name
         * @param {boolean} [indexed=false] - Flag element array usage
         * @param {ArrayBuffer} [view=Float32Array] - Mesh array buffer data view
         * @param {Array} [attributes=[]] - Mesh vertex attributes
         */
        var VertexArrayObject = (function(_Entity14) {
            _inherits(VertexArrayObject, _Entity14);

            function VertexArrayObject() {
                var _ref30 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref30$name = _ref30.name;
                var name = _ref30$name === undefined ? 'vertex.array.object' : _ref30$name;
                var program = _ref30.program;
                var _ref30$indexed = _ref30.indexed;
                var indexed = _ref30$indexed === undefined ? false : _ref30$indexed;
                var _ref30$view = _ref30.view;
                var view = _ref30$view === undefined ? Float32Array : _ref30$view;
                var _ref30$attributes = _ref30.attributes;
                var attributes = _ref30$attributes === undefined ? [] : _ref30$attributes;
                _classCallCheck(this, VertexArrayObject);
                _get(Object.getPrototypeOf(VertexArrayObject.prototype), "constructor", this).call(this, {
                    name: name
                });
                /**
                 * Mesh vertex array buffer
                 * @var {WebGLBuffer} Entity.VertexArrayObject.buffer
                 * @private
                 */
                this.buffer = gl.createBuffer();
                /**
                 * Mesh element array buffer
                 * @var {WebGLBuffer} Entity.VertexArrayObject.eBuffer
                 * @private
                 */
                this.eBuffer = gl.createBuffer();
                /**
                 * Enable/disable element array buffer
                 * driven rendering
                 * @var {boolean} Entity.VertexArrayObject.indexed
                 * @private
                 * @default false
                 */
                this.indexed = indexed;
                /**
                 * Mesh vertex attributes byte count
                 * @var {number} Entity.VertexArrayObject.stride
                 * @private
                 * @default 0
                 */
                this.stride = 0;
                /**
                 * Mesh array buffer data precision
                 * @var {ArrayBuffer} Entity.VertexArrayObject.view
                 * @private
                 * @default Float32Array
                 */
                this.view = view;
                /**
                 * Mesh vertex attributes
                 * @var {Array} Entity.VertexArrayObject.attributes
                 * @private
                 */
                this.attributes = attributes.map(this.generate.bind(this, program));
            }
            /**
             * Compute the byte offset for a given
             * vertex attribute attribute within the
             * vertex array buffer object
             * @function Entity.VertexArrayObject.generate
             * @param {Entity.Attribute} attribute - Vertex attribute to evaluate
             * @returns {object}
             */
            _createClass(VertexArrayObject, [{
                key: "generate",
                value: function generate(program, qualifying) {
                        var offset = this.stride;
                        var vars = qualifying.split(' ');
                        var length = lengths[vars[0]];
                        var name = vars[1];
                        var attribute = new Attribute({
                            program: program,
                            attribute: name,
                            length: length,
                            offset: offset
                        });
                        this.stride += attribute.getByteCount(this.view.BYTES_PER_ELEMENT);
                        return attribute;
                    }
                    /**
                     * Enable the given vertex attribute
                     * @callback Entity.VertexArrayObject.enable
                     * @param {Entity.Attribute} attribute - Vertex attribute to enable
                     * @returns {undefined}
                     */
            }, {
                key: "enable",
                value: function enable(attribute) {
                        attribute.enable(this.stride);
                    }
                    /**
                     * Disable the given vertex attribute
                     * @callback Entity.VertexArrayObject.disable
                     * @param {Entity.Attribute} attribute - Vertex attribute to disable
                     * @returns {undefined}
                     */
            }, {
                key: "disable",
                value: function disable(attribute) {
                        attribute.disable();
                    }
                    /**
                     * Bind and enable the vertex buffer object
                     * and attributes respectively
                     * @function Entity.VertexArrayObject.bind
                     * @returns {undefined}
                     */
            }, {
                key: "bind",
                value: function bind() {
                        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
                        if (this.indexed) {
                            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.eBuffer);
                        }
                        this.attributes.map(this.enable.bind(this));
                    }
                    /**
                     * Unbind and disable the vertex buffer object
                     * and attributes respectively
                     * @function Entity.VertexArrayObject.unbind
                     * @returns {undefined}
                     */
            }, {
                key: "unbind",
                value: function unbind() {
                    gl.bindBuffer(gl.ARRAY_BUFFER, null);
                    if (this.indexed) {
                        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                    }
                    this.attributes.map(this.disable);
                }
            }]);
            return VertexArrayObject;
        })(Entity);
        module.exports = VertexArrayObject;
    }, {
        "./Attribute": 11,
        "./Entity": 16,
        "./gl": 42
    }],
    40: [function(require, module, exports) {
        'use strict';
        var gl = require('./gl');
        var Shader = require('./Shader');
        var _name = 'vertex.shader';
        /**
         * A vertex shader is used to maintain the source code strings that define
         * a shader executable on the programmable vertex processor.
         * @class VertexShader
         * @name Entity.Shader.VertexShader
         * @extends Entity.Shader
         * @param {string} [name=shader] - Specifies the entities friendly name.
         * @param {string} path - Specifies the relative path to the shader file.
         */
        var VertexShader = (function(_Shader2) {
            _inherits(VertexShader, _Shader2);

            function VertexShader() {
                var _ref31 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var _ref31$name = _ref31.name;
                var name = _ref31$name === undefined ? _name : _ref31$name;
                var path = _ref31.path;
                _classCallCheck(this, VertexShader);
                _get(Object.getPrototypeOf(VertexShader.prototype), "constructor", this).call(this, {
                    name: name,
                    path: path
                }, gl.VERTEX_SHADER);
            }
            return VertexShader;
        })(Shader);
        module.exports = VertexShader;
    }, {
        "./Shader": 34,
        "./gl": 42
    }],
    41: [function(require, module, exports) {
        'use strict';
        /**
         * @fileoverview Four is a WebGL-based physics engine using advanced GPGPU techniques to maximise capabilities and performance.
         * Four on [GitHub]{@link https://github.com/allotrop3/fourjs.git} or [download]{@link http://fourjs/scripts/four.min.js}.
         * @author Jason Petersen
         * @version 0.0.0
         */
        var FOUR = {
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
    }, {
        "./Attribute": 11,
        "./Camera": 12,
        "./DataTexture": 13,
        "./DeferredFramebuffer": 14,
        "./DirectionalLight": 15,
        "./Entity": 16,
        "./Fluid": 17,
        "./FragmentShader": 18,
        "./Framebuffer": 19,
        "./ImageTexture": 20,
        "./Light": 21,
        "./Material": 22,
        "./Mesh": 23,
        "./MeshLoader": 24,
        "./OBJMeshLoader": 25,
        "./OrthographicCamera": 26,
        "./PerspectiveCamera": 27,
        "./PhongMaterial": 28,
        "./PointLight": 29,
        "./Program": 30,
        "./Renderbuffer": 31,
        "./Scene": 33,
        "./Shader": 34,
        "./SpotLight": 35,
        "./Structure": 36,
        "./Texture": 37,
        "./Uniform": 38,
        "./VertexArrayObject": 39,
        "./VertexShader": 40,
        "./gl": 42,
        "gl-matrix": 1
    }],
    42: [function(require, module, exports) {
        'use strict';
        var $view = canvas();
        var gl = context('webgl') || context('experimental-webgl');

        function canvas() {
            var $canvas = document.querySelector('canvas');
            var dpi = window.devicePixelRatio;
            var width = $canvas.width;
            var height = $canvas.height;
            $canvas.setAttribute('width', width * dpi);
            $canvas.setAttribute('height', height * dpi);
            $canvas.style.width = width;
            $canvas.style.height = height;
            return $canvas;
        }

        function context(name) {
            return $view.getContext(name);
        }
        module.exports = gl;
    }, {}],
    43: [function(require, module, exports) {
        'use strict';
        var promise = require('./promise');

        function ajax(url) {
            var contentType = arguments.length <= 1 || arguments[1] === undefined ? 'text/plain' : arguments[1];
            return promise(function(resolve, reject) {
                var request = new XMLHttpRequest();
                request.open('get', url);
                request.onload = function() {
                    var status = request.status;
                    if (status === 200) {
                        resolve(request.response);
                    } else {
                        var _status = url + ": " + request.statusText;
                        var error = new Error(_status);
                        reject(error);
                    }
                };
                request.setRequestHeader('contentType', contentType);
                request.send();
            });
        }
        module.exports = ajax;
    }, {
        "./promise": 44
    }],
    44: [function(require, module, exports) {
        'use strict';

        function promise(handler) {
            return new Promise(handler);
        }
        module.exports = promise;
    }, {}]
}, {}, [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]);
//# sourceMappingURL=four.js.map
