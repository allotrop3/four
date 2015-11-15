<!doctype>
<html lang="en">
   <?php
      $title = "Four.Context";
      include("partials/head.php");
   ?>

   <body>
      <div class="body">
         <?php include("partials/header.php") ?>

         <div class="content">
            <div class="spring">
               <h1 class="visually-hidden">Contexts</h1>

               <?php
                  $doc = "Context";
                  include("partials/docs.php")
               ?>

               <p>
                  Contexts instatiate the WebGL rendering context using the HTML
                  <code class="code code--reference">canvas</code>
                  element. It searches the DOM for the
                  <code class="code code--reference">canvas</code>
                  using the given query selector.
               </p>

               <h2 class="heading heading--2">&num; constructor</h2>

               <pre class="pre"><code class="code"><span class="code__keyword">new</span> Four.<span class="code__class">Context</span>({<br>    <span class="code__type">string</span> <span class="code__default">name: 'canvas',</span><br>    <span class="code__type">number</span> <span class="code__default">width: window.innerWidth,</span><br>    <span class="code__type">number</span> <span class="code__default">height: window.innerHeight,</span><br>    <span class="code__type">number</span> <span class="code__default">dpi: window.devicePixelRatio</span><br>});</code></pre>

               <h2 class="heading heading--2">&num; methods</h2>

               <dl class="methods">
                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> prime(<span class="code__type">string</span> selector)</code>
                  </dt>
                  <dd class="methods__description">
                     Searches the DOM tree for the canvas using the given query selector and configures its dimensions using the
                     <code class="code code--reference">width</code>,
                     <code class="code code--reference">height</code>,
                     and
                     <code class="code code--reference">dpi</code>
                     properties.
                  </dd>

                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> contextualise()</code>
                  </dt>
                  <dd class="methods__description">Instantiates a new instance of the WebGL rendering context based on the currently set canvas.</dd>

                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> use()</code>
                  </dt>
                  <dd class="methods__description">Enables the currently set WebGL rendering context. Multiple canvas elements can be used simultaneously on a web page by switching between their contexts.</dd>
               </dl>

               <h2 class="heading heading--2">&num; example</h2>

               <p>
                  Here is an example of how a
                  <code class="code code--reference">Context</code>
                  can be used to link a WebGL rendering context to your
                  <code class="code code--reference">canvas</code>
                  in the HTML. Note you don't need to call
                  <code class="code code--reference">use()</code>
                  because the WebGL rendering context is automatically enabled when the
                  <code class="code code--reference">Context</code>
                  is instantiated.
               </p>

               <pre class="pre"><code class="code"><span class="code__comment">// HTML</span><br><span class="code__tag">&lt;canvas</span> id=<span class="code__attribute">"viewport"</span><span class="code__tag">&gt;</span><span class="code__tag">&lt;/canvas&gt;</span><br><br><span class="code__comment">// javascript</span><br><span class="code__keyword">var</span> context = <span class="code__keyword">new</span> Four.<span class="code__class">Context</span>({<br>    selector: '#viewport'<br>});</code></pre>

               <?php
                  $filename = "Context";
                  include("partials/view.php");
               ?>
            </div>
         </div>

         <?php include("partials/footer.php") ?>
      </div>
   </body>
</html>