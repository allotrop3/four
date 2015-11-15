<!doctype>
<html lang="en">
   <?php
      $title = "Four.Framebuffer";
      include("partials/head.php");
   ?>

   <body>
      <div class="body">
         <?php include("partials/header.php") ?>

         <div class="content">
            <div class="spring">
               <h1 class="visually-hidden">Framebuffers</h1>

               <?php
                  $doc = "Framebuffer";
                  include("partials/docs.php")
               ?>

               <p>
                  Framebuffer provides a wrapper on the WebGL framebuffer object. The
                  <code class="code code--reference">buffer</code>
                  property is set to
                  <code class="code code--reference">null</code>.
                  Thus a
                  <code class="code code--reference">Framebuffer</code>
                  always references the default framebuffer, or, the
                  <code class="code code--reference">canvas</code>
                  as the target for rendering.
               </p>

               <h2 class="heading heading--2">&num; constructor</h2>

               <pre class="pre"><code class="code"><span class="code__keyword">new</span> Four.<span class="code__class">Framebuffer</span>({<br>    <span class="code__type">string</span>  <span class="code__default">name: 'framebuffer'</span><br>    <span class="code__type">boolean</span> <span class="code__default">flushable: true</span><br>});</code></pre>

               <h2 class="heading heading--2">&num; methods</h2>

               <dl class="methods">
                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> bind(<span class="code__type">boolean</span> flush = <span class="code__keyword">true</span>)</code>
                  </dt>
                  <dd class="methods__description">
                     Bind the framebuffer. The
                     <code class="code code--reference">flush</code>
                     argument specifies whether or not the contents of the framebuffer should be flushed. However this argument is only considered if the
                     <code class="code code--reference">flushable</code>
                     property allows it.
                  </dd>

                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> unbind()</code>
                  </dt>
                  <dd class="methods__description">Unbind the framebuffer.</dd>

                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> check()</code>
                  </dt>
                  <dd class="methods__description">
                     Validates the state of the framebuffer. An
                     <code class="code code--reference">Error</code>
                     exception is thrown if it is invalid.
                  </dd>
               </dl>

               <?php
                  $filename = "Framebuffer";
                  include("partials/view.php");
               ?>
            </div>
         </div>

         <?php include("partials/footer.php") ?>
      </div>
   </body>
</html>