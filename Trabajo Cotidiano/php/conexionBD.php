<?php

function abrirConexion(){



    $host ="127.0.0.1":
    $user = "root";
    $password = "Admin123+";
    $db = "BD_AWSC_III25";

$mysqli = new mysqli ($host, $user, $password, $db);

if($mysqli->connect_erno){
    throw new Exception ("Error de conexióN: ". )
    //errores
}


$mysqli->setcharset("utfmb4");

return $mysqli

}

function cerrarConexion($mysqli){
    $mysqli->close;
}


?>