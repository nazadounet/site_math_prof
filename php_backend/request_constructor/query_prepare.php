<?php require "../config/database.php";

    function request_prepare($pdo, $statement, $arg = null, $one = null, $all = null){
        $req = $pdo->prepare($statement);
        $req->execute($arg);

        if($one){
            $data = $req->fetch(PDO::FETCH_ASSOC);
            return $data;
        }else if($all){
            $data = $req->fetchAll(PDO::FETCH_ASSOC);
            return $data;
        }

        $last_insert_id = $pdo->lastInsertId();

        return $response = ["last_insert_id" => intval($last_insert_id)];
    }