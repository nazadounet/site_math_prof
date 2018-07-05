function display_data_cours_tes(event) {

    cours_tes_controller.get_data_from_cours_tes(function(response){

        var update_value =event.target.parentNode.querySelector("input").value;

        if(response.length > 0){

            for (var i = 0; i < response.length; i++){

            }
        }

    })

}