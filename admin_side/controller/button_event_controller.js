function button_event_controller(event){

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

        var get_all_inputs = event.target.parentNode.querySelectorAll("input");

        //check si les inputs sont vide
        //si vide, vu qu'il ne sont pas require => incrémente var warnings
        for(i = 0; i < get_all_inputs.length; i++){

            if(get_all_inputs[i].value === ""){
                var search_for_label = "label#" + get_all_inputs[i].name;
                var field = event.target.parentNode.querySelector(search_for_label).textContent;
                warnings[field] = "Le champs " + field + " est vide";
            }
        }

        console.log("warning : ", warnings);

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
                        cours_tes_controller.update_cours_tes(event)
                }
                break;
        }
    }else{
        console.log("errors : ", errors);
        return false;
    }
};


