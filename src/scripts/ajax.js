'use strict';

class Ajax
{
   constructor(url)
   {
      this.request = new XMLHttpRequest();
      this.url = url;
      this.promise = new Promise(this.configure());
   }

   configure()
   {
      let request = this.request;
      let url = this.url;

      return function(resolve, reject)
      {
         request.open('get', url);

         request.onload = function()
         {
            let status = request.status;

            if (status === 200)
            {
               resolve(request.response);
            }
            else
            {
               let error = new Error(request.statusText);

               reject(error);
            }
         };

         request.send();
      };
   }

   then(callback)
   {
      return this.promise.then(callback);
   }
}

// function promise(url)
// {
//    return function(resolve, reject)
//    {
//       var request = new XMLHttpRequest();

//       request.open('get', url);

//       request.onload = function()
//       {
//          let status = request.status;

//          if (status === 200)
//          {
//             resolve(request.response);
//          }
//          else
//          {
//             let error = new Error(request.statusText);

//             reject(error);
//          }
//       };

//       request.send();
//    };
// }

// var Ajax = function(url)
// {
//    return new Promise(promise(url));
// }

module.exports = Ajax;