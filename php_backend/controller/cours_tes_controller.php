<?php require '../request_constructor/query_prepare.php';

function cours_tes_request($pdo, $request){

        /*
         * $request se compose de :
         *      la table principal (ici cours tes)
         *      du type de requete (insert, update ...)
         *      et des data a insert/mettre a jours ...
         * */


        switch ($request["sql_request"]){
            case "insert":
    //print_r(json_encode($request)); die();

                $response_from_insert = [];

                //incrémente la table qui sert de base au au requete
                $response = request_prepare($pdo, 'INSERT INTO cours_tes SET cours_tes_title = :cours_tes_title',
                    ["cours_tes_title" => $request["data"]["field_to_updade"]["cours_tes_title"]]);

                //return l'id de l'insert afin d'init les a table de jointure
                //stock les table jointe a la table principal
                $all_attached_fields = ["cours_tes_exo_pdf", "cours_tes_pdf"];

                for($i = 0; $i < sizeof($all_attached_fields); $i++){
                    //on initialise les table de jointure avec l'id retourné
                    $check_status = request_prepare($pdo, "INSERT INTO  $all_attached_fields[$i] SET cours_tes_id = :cours_tes_id", ["cours_tes_id" =>$response["last_insert_id"]]);
                }

                    //une fois quelle sont initialisé, on les update avec les data venant de la requete
                    foreach ($request["data"]["field_to_updade"] as $key => $value) {

                        //l'user n'est pas obligé de remplir toute les table secondaire du premier coup
                        // donc on switch sur les data recus pour voir quelle tables on doit update
                        switch ($key){
                            case "cours_tes_sub_title":
                                foreach ($request["data"]["field_to_updade"]["cours_tes_sub_title"] as $value){
                                    request_prepare($pdo, "INSERT INTO cours_tes_sub_title  SET $key = :value, cours_tes_id = :cours_tes_id", ["value" => $value, "cours_tes_id" => $response["last_insert_id"]]);
                                }
                            break;
                            case "cours_tes_pdf_url":
                                request_prepare($pdo, "UPDATE cours_tes_pdf SET $key = :value WHERE cours_tes_id = :id",
                                    [
                                        "value" => $value,
                                        "id" => $response["last_insert_id"]
                                    ]);
                            break;
                            case "cours_tes_exo_pdf_url":
                                request_prepare($pdo, "UPDATE cours_tes_exo_pdf SET $key = :value WHERE cours_tes_id = :id",
                                    [
                                        "value" => $value,
                                        "id" => $response["last_insert_id"]
                                    ]);
                            break;
                            case "cours_tes_exe_int":
                                for ($i = 0; $i < sizeof($request["data"]["field_to_updade"]["cours_tes_exe_int"]["cours_tes_exe_int_name"]); $i++){

                                    request_prepare($pdo, "INSERT INTO cours_tes_exercice_interactif SET cours_tes_exe_int_name = :cours_tes_exe_int_name, cours_tes_exe_int_url = :cours_tes_exe_int_url, cours_tes_id = :cours_tes_id",
                                        [
                                            "cours_tes_exe_int_name" =>  $request["data"]["field_to_updade"]["cours_tes_exe_int"]["cours_tes_exe_int_name"][$i],
                                            "cours_tes_exe_int_url" =>  $request["data"]["field_to_updade"]["cours_tes_exe_int"]["cours_tes_exe_int_url"][$i],
                                            "cours_tes_id" => $response["last_insert_id"]
                                        ]
                                    );
                                }

                            break;
                            case "cours_tes_exe_int_name":
                                request_prepare($pdo, "UPDATE cours_tes_exercice_interactif SET $key = :value, cours_tes_id = :cours_tes_id", ["value" => $value, "cours_tes_id" => $response["last_insert_id"]]);
                            break;

                    }

                    array_push($response_from_insert, $check_status);

                }

                return $response_from_insert;
            break;

            case "select":

                //print_r(json_encode($request)); die();

                if($request["all"]){

                    $all_cours_tes = [];

                    $cours_tes_index = request_prepare($pdo,'SELECT * FROM cours_tes', null, null, true );

                    for ($i = 0; $i < sizeof($cours_tes_index); $i++){

                        $associate_table = ["cours_tes", "cours_tes_sub_title", "cours_tes_pdf", "cours_tes_exo_pdf", "cours_tes_exercice_interactif"];

                        foreach ($associate_table as $item) {
                            $response = request_prepare($pdo,
                                "SELECT * FROM $item
                            WHERE $item.cours_tes_id = :cours_tes_id",
                                ["cours_tes_id" => $cours_tes_index[$i]["cours_tes_id"]],
                                null, true);

                            $all_cours_tes[$i][$item] = $response;
                        }

                    }
                    return $all_cours_tes;
                }
            break;

            case "update":

                $table_name = $request["data"]["table_to_update"];
                $field_to_update = $request["data"]["field_to_update"];
                $new_field_value = $request["data"]["new_field_value"];
                $data_id = $request["data"]["field_id"];
                $field_id = $field_to_update . "_id";

                request_prepare($pdo, "UPDATE $table_name SET $field_to_update = :new_field_value WHERE $field_id = :field_id",
                    ["new_field_value" => $new_field_value, "field_id" => $data_id]);

                $data_return = $request["data"]["new_field_value"];

                return $data_return;

            break;

            case "delete":

                $table_name = $request["data"]["table_to_update"];
                $field_to_delete = $request["data"]["field_to_delete"];
                $data_id = $request["data"]["field_id"];
                $field_id = $field_to_delete . "_id";

                request_prepare($pdo, "DELETE FROM $table_name WHERE $field_id = :field_id",
                    ["field_id" => $data_id]);

                return "deleted";

            break;
        }
}