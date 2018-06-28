var cours_tes_object = {

    get_all_data : function() {
        ajax_object.ajax_request("../php_backend/controller/request_controller.php", "POST",
            {
                "primal_table_name": "cours_tes",
                "sql_request": "select",
                "all": true
            })
            .done(function (data) {
                console.log(data);
                data = JSON.parse(data);
                console.log(data);
            })
            .fail(function (data) {
                console.log(data);
            });
    }
};