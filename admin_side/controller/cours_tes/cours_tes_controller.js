function test(){

    request_controller.select(true, 'POST', {}, 'cours_tes', function(response){
        console.log(JSON.parse(response));
    })

}

var cours_tes_controller = {

    /* Chaque function permettent d'ini une variable qui sera passer en params
    * vers la requete ajax.
    *  */

    add_new_to_cours_tes : function (datas) {

        //requette to php
        var arguments_constructor = [{
            "primal_table_name": "cours_tes",
            "sql_request": "insert",
            "field_to_updade" : {
                "cours_tes_sub_title" :[],
                "cours_tes_exe_int" : {
                    "cours_tes_exe_int_url" : [],
                    "cours_tes_exe_int_name" : []
                }
            }
        }];

        //vu qu'il y'a possible plusieur row dans les table
        //boucle permet de push les data dans l'odre dans les quelle elle doivent être inscrit en bdd
        for(var i = 0; i < datas.length; i++) {
            switch (datas[i].name) {
                case "cours_tes_sub_title":
                    arguments_constructor[0].field_to_updade.cours_tes_sub_title.push(datas[i].value);
                    break;
                case "cours_tes_exe_int_url":
                    arguments_constructor[0].field_to_updade.cours_tes_exe_int.cours_tes_exe_int_url.push(datas[i].value);
                    break;
                case "cours_tes_exe_int_name":
                    arguments_constructor[0].field_to_updade.cours_tes_exe_int.cours_tes_exe_int_name.push(datas[i].value);
                    break;
                default:
                    arguments_constructor[0]["field_to_updade"][datas[i].name] = datas[i].value;
                    break;
            }
        }

        console.log("arguments_constructor_cours_tes_controller : ", arguments_constructor);

        request_controller.insert(true, arguments_constructor[0], 'cours_tes', function(response){
            console.log("response : ", JSON.parse(response));
        });
    },

    get_data_from_cours_tes : function (callback) {

        request_controller.select(true, 'POST', {}, 'cours_tes', function(response){
            callback(JSON.parse(response));
        })
    },

    update_cours_tes : function (event) {

        //récupération des data a passer en parametre
        var updated_input_value = event.target.parentNode.querySelector("input").value;

        //récupération des data a passer en parametre de input hidden qui contient
        //les info a update
        var hidden_input_event = event.target.parentNode.querySelector("input[type=hidden]");

        var table_name = hidden_input_event.name;
        var field = hidden_input_event.value;
        var field_id = hidden_input_event.id;

        var arguments_constructor = {
            "table_to_update": table_name,
            "field_to_update" : field,
            "new_field_value" : updated_input_value,
            "field_id" : field_id
        };

        request_controller.update("POST", arguments_constructor, "cours_tes", function(response){
            console.log(JSON.parse(response));
            console.log(response);

            //donne la nouvelle valeur a la span content l'ancienne valeur
            event.target.parentNode.querySelector("span").innerHTML = JSON.parse(response);

            //masque les élement qui servais a l'update, vu que l'upadte a éte fait plus haut
            var hide_displayed_element = event.target.parentNode.querySelectorAll(".displayed");
            var display_hidden_element = event.target.parentNode.querySelectorAll(".not_displayed");

            for(var i = 0; i < hide_displayed_element.length; i++){
                hide_displayed_element[i].classList.replace("displayed", "not_displayed");
            }

            for(var i = 0; i < display_hidden_element.length; i++){
                display_hidden_element[i].classList.replace("not_displayed", "displayed");
            }
        });

    },

    delete_cours_tes_data : function(event){

        //on demande confirmation du delete en ouvrant un modal bootstrap
        //le contente de la modal est charger depuis un fichier html
        //donne plus de flexibilité

        $('.modal-dialog').load('modal_template/delete.html',function(){
            var get_modal =  $('#myModal');
            get_modal.modal('show');
            //on crée le button de confirmation
            var modal_button_delete = document.createElement("button");
            modal_button_delete.setAttribute("class", "btn btn-danger");
            modal_button_delete.innerHTML = "Oui";
            $('.modal-footer').append(modal_button_delete);
            //on applique au button de confirmation un event click afin de trigger la confirmation
            modal_button_delete.addEventListener("click", function () {

                var hidden_input_event = event.target.parentNode.querySelector("input[type=hidden]");

                var table_name = hidden_input_event.name;
                var field = hidden_input_event.value;
                var field_id = hidden_input_event.id;

                var arguments_constructor = {
                    "table_to_update": table_name,
                    "field_to_delete" : field,
                    "field_id" : field_id
                };

                request_controller.delete("POST", arguments_constructor, "cours_tes", function(response){
                    console.log(JSON.parse(response));
                    console.log(response);

                    event.target.parentNode.remove();

                    $('#myModal').modal('hide');
                });
            });
            modal_button_delete.removeEventListener("click", function () {});
        });

    }

};