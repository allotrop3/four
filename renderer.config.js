module.exports = {
   heading: function(body, no)
   {
      return '<h' + no + ' class="heading heading--' + no + '">' + body + '</h' + no + '>';
   },

   code: function(code)
   {
      return '<code class="code">' + code + '</code>';
   },

   codespan: function(code)
   {
      return '<code class="code code--reference">' + code + '</code>';
   },

   list: function(body, ordered)
   {
      var tag = ordered ? 'ol' : 'ul';

      return '<' + tag + ' class="list">' + body + '</' + tag + '>';
   },

   listitem: function(body)
   {
      return '<li class="list__item">' + body + '</li>';
   },

   link: function(href, title, body)
   {
      return '<a href="' + href + '" class="link">' + body + '</a>';
   }
};
