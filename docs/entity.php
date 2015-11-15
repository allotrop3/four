<!doctype>
<html lang="en">
   <?php
      $title = "Four.Entity";
      include("partials/head.php");
   ?>

   <body>
      <div class="body">
         <?php include("partials/header.php") ?>

         <div class="content">
            <div class="spring">
               <h1 class="visually-hidden">Entities</h1>

               <?php
                  $doc = "Entity";
                  include("partials/docs.php")
               ?>

               <p>Entity is the base class from which all classes in Four inherit.</p>

               <h2 class="heading heading--2">&num; constructor</h2>

               <pre class="pre"><code class="code"><span class="code__keyword">new</span> Four.<span class="code__class">Entity</span>({<br>    <span class="code__type">string</span>  <span class="code__default">name: entity,</span><br>});</code></pre>

               <h2 class="heading heading--2">&num; methods</h2>

               <dl class="methods">
                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">boolean</span> isType(<span class="code__type">string</span> class)</code>
                  </dt>
                  <dd class="methods__description">Returns whether or not the entity is an instance of the given class string.</dd>
               </dl>

               <a href="https://github.com/allotrop3/four/blob/master/src/Entity.js" target="_blank" class="button">View on GitHub</a>
            </div>
         </div>

         <?php include("partials/footer.php") ?>
      </div>
   </body>
</html>