<?php
$json = file_get_contents('./asset-manifest.json');
var_dump($json);
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <link rel="icon" type="image/svg" href="./favicon.png" />
    <title>Harry Potter project</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>