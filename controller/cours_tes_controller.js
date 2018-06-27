function get_cours_tes_data(){
    get_data_from_db("php_backend/controller/request_controller.php", "POST",
        {
            "primal_table_name" : "cours_tes",
            "sql_request" : "select",
            "all" : true
        })
        .done(function(data){
        console.log(JSON.parse(data));
        })
        .fail(function(data){
        console.log(data);
        });

/*
              $.ajax({
                  url: "php_backend/controller/request_controller.php",
                  method: "POST",
                  data: {
                            "primal_table_name" : "cours_tes",
                            "sql_request" : "select",
                            "all" : true
                        }
              }).done(function (response) {
                  console.log(JSON.parse(response));
              }).fail(function(response){
                  console.log(response)
                });
*/
};