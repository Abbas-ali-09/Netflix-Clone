<?php
$servername ="localhost";
$username = "root";
$password = "";
$dbname = "netflix";

$conn = new mysqli ($servername,$username,$password,$dbname);
if (!$conn) {
    echo "error";
}



?>