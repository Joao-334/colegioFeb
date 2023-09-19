<?php

$db_host = '69.28.90.62'; //O nome do servidor
$db_user = 'vitornovo'; //O nome do utilizador de MySQL
$db_password = 'V1t@V3st'; //A senha do utilizador
$db_name = 'unifeb_site'; //O nome da base de dados

try {

    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8", $db_user, $db_password);
    if (!$pdo) {
        throw new Exception("Não foi ossivel conectar!");
    }
    return $pdo;
} catch (Exception $e) {
    throw new Exception($e->getMessage());

}

/*
Conecta Bando de dados e retorna PDO se não deu erro
 */