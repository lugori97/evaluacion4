<?php

    header('Content-type: application/json');
    header('Access-Control-Allow-Origin:*');
    $json=file_get_contents('php://input');
    
    $archivo=fopen("misNotas.json","w");
    fwrite($archivo,$json);
    fclose($archivo);
    

?>