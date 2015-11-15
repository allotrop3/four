<!doctype>
<html lang="en">
   <?php
      $title = "Four.DataTexture";
      include("partials/head.php");
   ?>

   <body>
      <div class="body">
         <?php include("partials/header.php") ?>

         <div class="content">
            <div class="spring">
               <h1 class="visually-hidden">Data Textures</h1>

               <?php
                  $doc = "Data Texture";
                  include("partials/docs.php")
               ?>

               <p>
                  A data texture is a container for images intended as storage for General Purpose on the Graphics Processing Unit tasks.
                  Since textures have to be completely filled to be considered valid, the image data is auto-filled with a
                  <code class="code code--reference">-1</code>
                  null value per color channel per pixel.
               </p>

               <h2 class="heading heading--2">&num; constructor</h2>

               <pre class="pre"><code class="code"><span class="code__keyword">new</span> Four.<span class="code__class">DataTexture</span>({<br>    <span class="code__type">number</span>  width: ..,<br>    <span class="code__type">number</span>  height: ..,<br>    <span class="code__type">object</span>  <span class="code__default">image: null,</span><br>    <span class="code__type">string</span>  <span class="code__default">name: 'image.texture'</span><br>    <span class="code__type">number</span>  <span class="code__default">lod: 0,</span><br>    <span class="code__type">string</span>  <span class="code__default">components: 'RGBA',</span><br>    <span class="code__type">string</span>  <span class="code__default">format: 'UNSIGNED_BYTE',</span><br>    <span class="code__type">string</span>  <span class="code__default">magnification: 'NEAREST',</span><br>    <span class="code__type">string</span>  <span class="code__default">minification: 'NEAREST',</span><br>    <span class="code__type">string</span>  <span class="code__default">S: 'CLAMP_TO_EDGE',</span><br>    <span class="code__type">string</span>  <span class="code__default">T: 'CLAMP_TO_EDGE'</span><br>});</code></pre>

               <h2 class="heading heading--2">&num; methods</h2>

               <dl class="methods">
                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> bind()</code>
                  </dt>
                  <dd class="methods__description">Binds the texture.</dd>

                  <dt class="methods__signature">
                     <code class="code"><span class="code__return">undefined</span> unbind()</code>
                  </dt>
                  <dd class="methods__description">Unbinds the texture.</dd>
               </dl>

               <?php
                  $filename = "DataTexture";
                  include("partials/view.php");
               ?>
            </div>
         </div>

         <?php include("partials/footer.php") ?>
      </div>
   </body>
</html>