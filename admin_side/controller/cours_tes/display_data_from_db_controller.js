function display_data_cours_tes() {

    cours_tes_controller.get_data_from_cours_tes(function(response){

        console.log(response);

        if(response.length > 0){

            var html_cours_tes_title = document.querySelector("#cours_tes");


            for (var i = 0; i < response.length; i++){
                var title_span = document.createElement("span");

                title_span.setAttribute("class", "display_cours_tes_title");
                title_span.innerHTML = "lolsava";

                console.log(title_span);

                html_cours_tes_title.appendChild(title_span);
            }
        }

    })

}