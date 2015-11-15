<!doctype>
<html lang="en">
   <?php
      $title = "Four";
      include("partials/head.php");
   ?>

   <body>
      <div class="body">
         <?php include("partials/header.php") ?>

         <div class="content">
            <div class="spring">
               <h1 class="visually-hidden">Four</h1>

               <h2 class="heading heading--2"># Contributing</h2>

               <p>Four is and always will be open-source. Get involved and contribute to the development Four. Here's how:</p>

               <ol>
                  <li>
                     <p>
                        Fork the repository on
                        <a href="https://github.com/allotrop3/four">GitHub</a>.
                     </p>
                  </li>

                  <li>
                     <p>
                        Four uses the
                        <a href="https://www.npmjs.com/">npm</a>
                        to manage project and development dependencies. If you do not have this installed, check out the
                        <a href="https://nodejs.org/en/">Node.js</a>
                        website on how to install this.
                     </p>
                  </li>

                  <li>
                     <p>Once installed, run the following command in your terminal at the root of your project folder:</p>

                     <pre class="pre"><code class="code"><span class="code__keyword">$</span> npm install</code></pre>
                  </li>

                  <li>
                     <p>
                        Once completed, npm will have installed
                        <a href="http://gulpjs.com/">Gulp</a>. This is a helpful task runner used to compile your ES6 code into ES5 using
                        <a href="https://babeljs.io/">Babel</a>.
                        Run the following command, again at the root of your project folder, to start watching the
                        <code class="code code--reference">src/</code>
                        folder for changes:
                     </p>

                     <pre class="pre"><code class="code"><span class="code__keyword">$</span> gulp watch</code></pre>
                  </li>

                  <li>
                     <p>
                        Tests are critical to ensuring that the code we develop works and integrates well into Four. The framework uses
                        <a href="https://qunitjs.com/">QUnit</a>
                        and
                        <a href="http://blanketjs.org/">Blanket.js</a>
                        to run tests and code coverage checks, respectively. Add your own tests to the
                        <code class="code code--reference">/tests</code>
                        folder.
                        Navigate to
                        <code class="code code--reference">/tests</code>
                        in your browser to see the results.
                     </p>
                  </li>

                  <li>
                     <p>When you're ready, create a pull request to Four to have your features reviewed and merged.</p>
                  </li>
               </ol>
            </div>
         </div>

         <?php include("partials/footer.php") ?>
      </div>
   </body>
</html>