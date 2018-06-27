$( document ).ready(function() {

    function l(data) {
        console.log(data);
    }

    function e(data) {
        document.getElementById("error").innerHTML = data;
    }

    /*
    contiennent les différentes erreurs et warning a afficher sur l'interface ou pour bloquer
    l'envoie vers la base
    */
    var errors = {};
    var warnings = {};


    //récupération de tout les submit
    var get_all_submit_button = document.querySelectorAll(".admin_submit_button");

    //pour chaque button submit on applique un listener click afin de construire l'algo selon les
    //différente info contonu dans l'element button.
    for(i = 0; i < get_all_submit_button.length; i++){

        //construction de la variables qui sera passé en data lors de la requête vers php

        get_all_submit_button[i].addEventListener('click', function (event) {

            var that = this;

            var construc_php_request = [{
                "require" : "",
                "sql_request" : event.target.name,
                "primal_table_name" : "",
                "field_to_updade" : {
                    "cours_tes_sub_title" :[],
                    "cours_tes_exe_int" : {
                        "cours_tes_exe_int_url" : [],
                        "cours_tes_exe_int_name" : []
                    }
                }
            }];

            //récupération de la table a modifié
            switch (true){
                case event.target.classList.contains("cours_tes"):
                    construc_php_request[0].primal_table_name = "cours_tes";
                break;
            }

            //check si les inpute require sont bien remplis
            if(that.parentNode.querySelectorAll("input.require")){

                var requireds_inputs = that.parentNode.querySelectorAll("input.require");

                //parcours les différents input require
                for (var i = 0; i < requireds_inputs.length; i++) {
                    //si la value est null alors incrémente la var errors
                    if(requireds_inputs[i].value === ""){
                        var search_for_label = "label#" + requireds_inputs[i].name;
                        var field = that.parentNode.querySelector(search_for_label).textContent;
                        errors[field] = "Veuillez remplire le champs : " + field;
                    }else{
                        //si la value n'est pas vide alors incrémente la varibale qui sera
                        //passer lors de la requete vers php
                        //elle sert a php a modifier correctement la basse de donnée
                        errors = {};
                        construc_php_request[0]["require"] = requireds_inputs[i].name;
                    }
                }
            }

            //s'il ny'a pas d'erreurs alors on entamme le process de requete vers php
            if(Object.keys(errors).length === 0){

                //récup tout les input
                var get_all_inputs = that.parentNode.querySelectorAll("input");

                l(get_all_inputs);

                //check si les inputs sont vide
                //si vide, vu qu'il ne sont pas require => incrémente var warnings
                for(i = 0; i < get_all_inputs.length; i++){

                    if(get_all_inputs[i].value === ""){
                       var search_for_label = "label#" + get_all_inputs[i].name;
                       var field = that.parentNode.querySelector(search_for_label).textContent;
                       warnings[field] = "Le champs " + field + " est vide";
                    }else{
                           switch (get_all_inputs[i].name) {
                               case "cours_tes_sub_title":
                                   construc_php_request[0].field_to_updade.cours_tes_sub_title.push(get_all_inputs[i].value);
                               break;
                               case "cours_tes_exe_int_url":
                                   construc_php_request[0].field_to_updade.cours_tes_exe_int.cours_tes_exe_int_url.push(get_all_inputs[i].value);
                               break;
                               case "cours_tes_exe_int_name":
                                    construc_php_request[0].field_to_updade.cours_tes_exe_int.cours_tes_exe_int_name.push(get_all_inputs[i].value);
                               break;
                               default:
                                    construc_php_request[0]["field_to_updade"][get_all_inputs[i].name] = get_all_inputs[i].value;
                               break;
                           }

                    }

                }


                warnings = {};
                l(construc_php_request);

                //si errors et warning sont vide alors = requete vers php
                if(Object.keys(warnings).length === 0) {
                    $.ajax({
                        url: "php_backend/controller/request_controller.php",
                        method: "POST",
                        data: construc_php_request[0],
                        success: function (response) {
                            l(response);
                        },
                        error: function (response) {
                            l(response);
                        }
                    });
                }
            }else{
                l(errors);
                return false;
            }

        });
    };
});