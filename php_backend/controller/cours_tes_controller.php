<?php require '../request_constructor/query_prepare.php';

function cours_tes_request($pdo, $request){


        switch ($request["sql_request"]){
            case "insert":
    //print_r(json_encode($request)); die();

                $response_from_insert = [];

                $response = request_prepare($pdo, 'INSERT INTO cours_tes SET cours_tes_title = :cours_tes_title',
                    ["cours_tes_title" => $request["data"]["field_to_updade"]["cours_tes_title"]]);

                $all_attached_fields = ["cours_tes_exo_pdf", "cours_tes_pdf"];

                for($i = 0; $i < sizeof($all_attached_fields); $i++){

                    $check_status = request_prepare($pdo, "INSERT INTO  $all_attached_fields[$i] SET cours_tes_id = :cours_tes_id", ["cours_tes_id" =>$response["last_insert_id"]]);
                }

                    foreach ($request["data"]["field_to_updade"] as $key => $value) {

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
        }
}