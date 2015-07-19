'use strict';
let errors = require('./errors');

function is(variable, type, error = false)
{
   let constructor = (variable.type || Object.prototype.toString.call(variable).slice(8, -1).toLowerCase());
   let evaluation = constructor === type;

   if (!evaluation && error)
   {
      errors.type(type);
   }

   return evaluation;
}

function defined(variable)
{
   return variable !== undefined;
}

function valid(variable, type)
{
   if (is(variable, type, true))
   {
      return variable;
   }
}

function isString(variable)
{
   return is(variable, 'string');
}

function isArray(variable)
{
   return is(variable, 'array');
}

function isNumber(variable)
{
   return is(variable, 'number');
}

function isBoolean(variable)
{
   return is(variable, 'boolean');
}

function isNull(variable)
{
   return is(variable, 'null');
}

module.exports = {
   is: is,
   defined: defined,
   valid: valid,
   isString: isString,
   isArray: isArray,
   isNumber: isNumber,
   isBoolean: isBoolean,
   isNull: isNull
};