<!doctype>
<html lang="en">
   <?php
      $title = "Four.Program";
      include("partials/head.php");
   ?>

   <body>
      <div class="body">
         <?php include("partials/header.php") ?>

         <div class="content">
            <div class="spring">
               <h1 class="visually-hidden">Programs</h1>

               <?php
                  $doc = "Program";
                  include("partials/docs.php")
               ?>

               <p>
                  Program provides a wrapper on the WebGL program object. A program is an object to which shader objects can be attached. This provides a mechanism to specify the shader objects that will be linked to create a program. It also provides a means for checking the compatibility of the given vertex and fragment shaders.
               </p>

               <h2 class="heading heading--2">&num; constructor</h2>

               <pre class="pre"><code class="code"><span class="code__keyword">new</span> Four.<span class="code__class">Program</span>({<br>    <span class="code__type">string</span> selector: ..,<br>    <span class="code__type">string</span> <span class="code__default">name: 'program'</span><br>});</code></pre>

               <h2 class="heading heading--2">&num; methods</h2>

               <dl class="methods">
                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> link()</code>
                  </dt>
                  <dd class="methods__description">Attaches the vertex and fragment shaders to the program and links them.</dd>

                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> bind()</code>
                  </dt>
                  <dd class="methods__description">Binds the program and its vertex and fragment shaders for use in the subsequent render call.</dd>

                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> check()</code>
                  </dt>
                  <dd class="methods__description">
                     Validates the link status of the program. An
                     <code class="code code--reference">Error</code>
                     exception is thrown if it is invalid.
                  </dd>
               </dl>

               <h2 class="heading heading--2">&num; example</h2>

               <pre class="pre"><code class="code"><span class="code__comment">// HTML</span><br><span class="code__tag">&lt;script</span> class=<span class="code__attribute">"shader"</span> type=<span class="code__attribute">"x-shader/x-vertex"</span><span class="code__tag">&gt;</span>...<span class="code__tag">&lt;/script&gt;</span><br><span class="code__tag">&lt;script</span> class=<span class="code__attribute">"shader"</span> type=<span class="code__attribute">"x-shader/x-fragment"</span><span class="code__tag">&gt;</span>...<span class="code__tag">&lt;/script&gt;</span><br><br><span class="code__comment">// javascript</span><br><span class="code__keyword">var</span> program = <span class="code__keyword">new</span> Four.<span class="code__class">Program</span>({<br>    selector: '.shader'<br>});</code></pre>

               <?php
                  $filename = "Program";
                  include("partials/view.php");
               ?>
            </div>
         </div>

         <?php include("partials/footer.php") ?>
      </div>
   </body>
</html>