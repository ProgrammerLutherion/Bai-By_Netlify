<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Pokemon.php';

    $database = new Database();
    $db = $database->connect();

    $pokemon = new Pokemon($db);

    $result = $pokemon->read();

    $num = $result->rowCount();

    if($num > 0){
        $pokemon_arr = array();
        $pokemon_arr['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            $pokemon_item = array(
                'id' => $id,
                'name_english' => $name_english,
                'name_japanese' => $name_japanese,
                'name_chinese' => $name_chinese,
                'name_french' => $name_french,
                'type_0' => $type_0,
                'type_1' => $type_1,
                'base_HP' => $base_HP,
                'base_Attack' => $base_Attack,
                'base_Defense' => $base_Defense,
                'base_SpAttack' => $base_SpAttack,
                'base_SpDefense' => $base_SpDefense,
                'base_Speed' => $base_Speed
            );

            array_push($pokemon_arr['data'],$pokemon_item);
        }
        
        echo json_encode($pokemon_arr);

    }else{
        echo json_encode(
            array('message' => 'No Posts Found')
        );
    }
?>