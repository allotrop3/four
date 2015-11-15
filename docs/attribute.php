<!doctype>
<html lang="en">
   <?php
      $title = "Four.Attribute";
      include("partials/head.php");
   ?>

   <body>
      <div class="body">
         <?php include("partials/header.php") ?>

         <div class="content">
            <div class="spring">
               <h1 class="visually-hidden">Attributes</h1>

               <?php
                  $doc = "Attribute";
                  include("partials/docs.php")
               ?>

               <p>
                  An
                  <code class="code code__reference">attribute</code>
                  is a GLSL variable declared with the
                  <code class="code code__reference">attribute</code>
                  storage qualifier. This provides a wrapper to simplify locating, enabling and disabling generic vertex attributes. Vertex attributes are used to communicate from "outside" to the vertex shader. Attributes are dynamically located when <code class="code code__reference">drawElements</code>
                  or
                  <code class="code code__reference">drawArrays</code>
                  is called.
               </p>

               <h2 class="heading heading--2">&num; constructor</h2>

               <pre class="pre"><code class="code"><span class="code__keyword">new</span> Four.<span class="code__class">Attribute</span>({<br>    <span class="code__type">string</span>  attribute: ..,<br>    <span class="code__type">number</span>  length: ..,<br>    <span class="code__type">string</span>  <span class="code__default">name: ‘attribute’,</span><br>    <span class="code__type">string</span>  <span class="code__default">format: ‘FLOAT’,</span><br>    <span class="code__type">boolean</span> <span class="code__default">normalized: false,</span><br>    <span class="code__type">number</span>  <span class="code__default">offset: 0</span><br>});</code></pre>

               <h2 class="heading heading--2">&num; methods</h2>

               <dl class="methods">
                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">number</span> locate(<span class="code__type">Four.Program</span> program)</code>
                  </dt>
                  <dd class="methods__description">Returns the vertex attribute location within the given programs vertex shader.</dd>

                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> enable()</code>
                  </dt>
                  <dd class="methods__description">Enable the  vertex attribute.</dd>

                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> disable()</code>
                  </dt>
                  <dd class="methods__description">Disable the  vertex attribute.</dd>
               </dl>

               <h2 class="heading heading--2">&num; example</h2>

               <p>Here is an example of how this class can be used to link vertex attributes located in your vertex shader. Note how the
                  <code class="code code__reference">a_</code>
                  is implied by the
                  <code class="code code__reference">Attribute</code>
                  class.
               </p>

               <pre class="pre"><code class="code"><span class="code__comment">// javascript</span><br><span class="code__keyword">var</span> position = <span class="code__keyword">new</span> Four.<span class="code__class">Attribute</span>({<br>   attribute: 'position',<br>   length: <span class="code__number">3</span><br>});<br><br>position.enable(program);<br><br><span class="code__comment">// attribute declaration in the vertex shader linked to the program</span><br><span class="code__keyword">attribute</span> <span class="code__type">vec3</span> a_position;</code>
                  </code></pre>

               <a href="https://github.com/allotrop3/four/blob/master/src/Attribute.js" target="_blank" class="button">View on GitHub</a>
            </div>
         </div>

         <?php include("partials/footer.php") ?>
      </div>
   </body>
</html>