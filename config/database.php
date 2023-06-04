<?php
$connection = [
    'host' => 'localhost',
    'user'=> 'u631042881_VC2030',
        'password'=> 'Aa112233',
    'database' => 'u631042881_VC2030'
];


$con = new mysqli(
    $connection['host'],
    $connection['user'],
      $connection['password'],
    $connection['database']);

if($con->connect_error){
    die('Error connecting to database  ' . $con->connect_error);
}


