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

               <?php
                  $doc = "Documentation";
                  include("partials/docs.php")
               ?>
            </div>
         </div>

         <?php include("partials/footer.php") ?>
      </div>
   </body>
</html>