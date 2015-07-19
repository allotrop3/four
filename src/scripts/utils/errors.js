'use strict';

function error(message, severe = true)
{
   if (severe)
   {
      throw new Error(message);
   }

   console.error(message);
}

function immutable(member)
{
   error(`attempt to set immutable member: ${member}`, false);
}

function access(member)
{
   error(`cannot access private member: ${member}`);
}

function type(type)
{
   error(`member must be of type or value: ${type}`);
}

module.exports = {
   error: error,
   immutable: immutable,
   access: access,
   type: type
};