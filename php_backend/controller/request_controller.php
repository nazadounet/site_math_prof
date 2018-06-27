<?php
    require 'cours_tes_controller.php';

$errors = [];
$success = [];

if(!empty($_POST)){
    switch ($_POST["primal_table_name"]) {

        case "cours_tes":

            print_r(json_encode(cours_tes_request($pdo,$_POST)));
        break;

        case 1:
        break;
        case 2:
        break;
    }
}
