<!doctype>
<html lang="en">
   <?php
      $title = "Four.Renderbuffer";
      include("partials/head.php");
   ?>

   <body>
      <div class="body">
         <?php include("partials/header.php") ?>

         <div class="content">
            <div class="spring">
               <h1 class="visually-hidden">Renderbuffers</h1>

               <?php
                  $doc = "Renderbuffer";
                  include("partials/docs.php")
               ?>

               <p>Renderbuffer provides a wrapper on the WebGL renderbuffer object. A renderbuffer is a data storage object containing a single image of a renderable internal format.</p>

               <h2 class="heading heading--2">&num; constructor</h2>

               <pre class="pre"><code class="code"><span class="code__keyword">new</span> Four.<span class="code__class">Renderbuffer</span>({<br>    <span class="code__type">number</span> width: ..,<br>    <span class="code__type">number</span> height: ..,<br>    <span class="code__type">string</span>  <span class="code__default">name: 'renderbuffer'</span><br>});</code></pre>

               <h2 class="heading heading--2">&num; methods</h2>

               <dl class="methods">
                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> bind()</code>
                  </dt>
                  <dd class="methods__description">Bind the renderbuffer.</dd>

                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> unbind()</code>
                  </dt>
                  <dd class="methods__description">Unbind the renderbuffer.</dd>
               </dl>

               <?php
                  $filename = "Renderbuffer";
                  include("partials/view.php");
               ?>
            </div>
         </div>

         <?php include("partials/footer.php") ?>
      </div>
   </body>
</html>