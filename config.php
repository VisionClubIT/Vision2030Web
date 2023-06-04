<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "u631042881_VC2030";

    $con = mysqli_connect($host, $user, $password, $database);

    if(!$con ){
        die("ERROR: Could not connect. " . $mysqli_connect_error());
    }
        session_start(); 

?>