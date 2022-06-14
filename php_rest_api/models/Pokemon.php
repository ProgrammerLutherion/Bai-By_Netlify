<?php
    class Pokemon{
        private $connection;
        private $table = 'pokedex';

        public $id;
        public $name_english;
        public $name_japanese;
        public $name_french;
        public $type_0;
        public $type_1;
        public $base_HP;
        public $base_Attack;
        public $base_Defense;
        public $base_SpAttack;
        public $base_SpDefense;
        public $base_Speed;

        public function __construct($db){
            $this->connection = $db;
        }

        public function read(){
            $query = 'SELECT * FROM '.$this->table.'';
            $stmt = $this->connection->prepare($query);
            $stmt->execute();
            return $stmt;
        }

        public function delete($id){
            $query = 'DELETE * FROM '.$this->table.' WHERE id = '.$id;
            $stmt = $this->connection->prepare($query);
            $stmt->execute();
            return $stmt;
        }
    }
?>