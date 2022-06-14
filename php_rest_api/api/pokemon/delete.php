<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Pokemon.php';

    $database = new Database();
    $db = $database->connect();

    $pokemon = new Pokemon($db);

    $id = $_GET ['id'];

    $result = $pokemon->delete($id);
?>