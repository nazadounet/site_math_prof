function button_event_data_controller(event){

    var errors = {};
    var warnings = {};

    //check si les inpute require sont bien remplis
    //on remonte d'une node pour récupérer l'input
    if(event.target.parentNode.querySelectorAll("input.require")){

        //on stock la position de l'input dans la container
        //pour pouvoir accéder au label
        var requireds_inputs = event.target.parentNode.querySelectorAll("input.require");

        //parcours les différents input require
        for (var i = 0; i < requireds_inputs.length; i++) {
            //si la value est null alors incrémente la var errors
            if(requireds_inputs[i].value === ""){
                var search_for_label = "label#" + requireds_inputs[i].name;
                var field = event.target.parentNode.querySelector(search_for_label).textContent;
                errors[field] = "Veuillez remplire le champs : " + field;
            }
        }
    }

    if(Object.keys(errors).length === 0){

        if(event.target.name === "insert") {


            var get_all_inputs = event.target.parentNode.querySelectorAll("input");

            //check si les inputs sont vide
            //si vide, vu qu'il ne sont pas require => incrémente var warnings
            for (i = 0; i < get_all_inputs.length; i++) {

                if (get_all_inputs[i].value === "") {
                    var search_for_label = "label#" + get_all_inputs[i].name;
                    var field = event.target.parentNode.querySelector(search_for_label).textContent;
                    warnings[field] = "Le champs " + field + " est vide";
                }
            }

            console.log("warning : ", warnings);
        }
        /*récupération de la table a modifié
        * et ansi du controller adéquate a appeler*/
        switch (true){
            case event.target.classList.contains("cours_tes"):

                //permet de savoir si c'est un insert ou update ou delette ...
                //appel de la function adéquate dans le controller
                switch (event.target.name){
                    case "insert":
                        cours_tes_controller.add_new_to_cours_tes(get_all_inputs);
                        break;

                    case "update":
                        cours_tes_controller.update_cours_tes(event);
                        break;

                    case "delete":
                        cours_tes_controller.delete_cours_tes_data(event);
                        break;
                }
                break;
        }
    }else{
        console.log("errors : ", errors);
        return false;
    }
};

var button_diplay_hide_elemnt_to_update = {

    "display_input_update" : function(event){

        var hide_displayed_element = event.target.parentNode.querySelectorAll(".displayed");
        var display_hidden_element = event.target.parentNode.querySelectorAll(".not_displayed");


        for(var i = 0; i < hide_displayed_element.length; i++){
           hide_displayed_element[i].classList.replace("displayed", "not_displayed");
        }

        for(var i = 0; i < display_hidden_element.length; i++){
           display_hidden_element[i].classList.replace("not_displayed", "displayed");
        }

        if(event.target.parentNode.querySelector("span")){
            var current_data_displayed = event.target.parentNode.querySelector("span").innerText;

            event.target.parentNode.querySelector("input").value = current_data_displayed;
        }

    },

    "hide_input_update" : function(event){

        var hide_displayed_element = event.target.parentNode.querySelectorAll(".displayed");
        var display_hidden_element = event.target.parentNode.querySelectorAll(".not_displayed");

        for(var i = 0; i < hide_displayed_element.length; i++){
           hide_displayed_element[i].classList.replace("displayed", "not_displayed");
        }

        for(var i = 0; i < display_hidden_element.length; i++){
           display_hidden_element[i].classList.replace("not_displayed", "displayed");
        }
    }

};


