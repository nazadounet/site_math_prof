<?php session_start();
    require 'cours_tes_controller.php';

$errors = [];
$success = [];

//print_r(json_encode($_POST)); die();

//recup les info de la variable post

if(!empty($_POST)){
    switch ($_POST["primal_table_name"]) {
        //suivant la table passer par la requete du client, on appel le controller adéquat
        case "cours_tes":
            print_r(json_encode(cours_tes_request($pdo,$_POST)));
            //print_r(cours_tes_request($pdo,$_POST));
        break;

        case 1:
        break;
        case 2:
        break;
    }
}
