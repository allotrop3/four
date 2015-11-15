<!doctype>
<html lang="en">
   <?php
      $title = "Four.VertexShader";
      include("partials/head.php");
   ?>

   <body>
      <div class="body">
         <?php include("partials/header.php") ?>

         <div class="content">
            <div class="spring">
               <h1 class="visually-hidden">Vertex shaders</h1>

               <?php
                  $doc = "Vertex Shader";
                  include("partials/docs.php")
               ?>

               <p>
                  VertexShader provides a wrapper on the WebGL shader object. A shader is used to maintain the source code strings that define a shader. A shader of type
                  <code class="code code--reference">gl.VERTEX_SHADER</code>
                  is a shader that is intended to run on the programmable vertex processor.

               <h2 class="heading heading--2">&num; constructor</h2>

               <pre class="pre"><code class="code"><span class="code__keyword">new</span> Four.<span class="code__class">VertexShader</span>({<br>    <span class="code__type">string</span> selector: ..,<br>    <span class="code__type">string</span> <span class="code__default">name: 'vertex.shader'</span><br>});</code></pre>

               <h2 class="heading heading--2">&num; methods</h2>

               <dl class="methods">
                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">string</span> generate(<span class="code__type">string</span> type = 'VERTEX_SHADER', <span class="code__type">string</span> selector)</code>
                  </dt>
                  <dd class="methods__description">Generates a Four shader template at the given selector target into a valid shader source string.</dd>

                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">string</span> compile(<span class="code__type">string</span> type = 'VERTEX_SHADER', <span class="code__type">string</span> selector)</code>
                  </dt>
                  <dd class="methods__description">
                     Binds and compiles the generated shader source string to a
                     <code class="code code--reference">WebGLShader</code>
                     object.
                  </dd>

                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> check()</code>
                  </dt>
                  <dd class="methods__description">
                     Validates the compile status of the shader. An
                     <code class="code code--reference">Error</code>
                     exception is thrown if it is invalid.
                  </dd>
               </dl>

               <h2 class="heading heading--2">&num; example</h2>

               <p>
                  Here is an example of how a
                  <code class="code code--reference">VertexShader</code>
                  can be used to compile your shader source code in your HTML. It is important to set the
                  <code class="code code--reference">type</code>
                  attribute and specify it contains the source code strings for a vertex shader.
               </p>

               <pre class="pre"><code class="code"><span class="code__comment">// HTML</span><br><span class="code__tag">&lt;script</span> class=<span class="code__attribute">"shader"</span> type=<span class="code__attribute">"x-shader/x-vertex"</span><span class="code__tag">&gt;</span>...<span class="code__tag">&lt;/script&gt;</span><br><br><span class="code__comment">// javascript</span><br><span class="code__keyword">var</span> shader = <span class="code__keyword">new</span> Four.<span class="code__class">VertexShader</span>({<br>    selector: '.shader'<br>});</code></pre>

               <?php
                  $filename = "VertexShader";
                  include("partials/view.php");
               ?>
            </div>
         </div>

         <?php include("partials/footer.php") ?>
      </div>
   </body>
</html>