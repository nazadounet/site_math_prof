var request_controller = {

    select : function (all = true, method, arguments = {}, table_name, callback){

        var arguments_constructor = {
            "primal_table_name": table_name,
            "sql_request": "select",
            "all": all,
            "data" : arguments
        };


        ajax_request_construtor.ajax_request("POST", arguments_constructor, function(response){
            callback(response);
        })

    },

    insert : function (method, arguments = {}, table_name, callback) {

        var arguments_constructor = {
            "primal_table_name": table_name,
            "sql_request": "insert",
            "data": arguments
        };

        ajax_request_construtor.ajax_request("POST", arguments_constructor, function (response) {
            callback(response);
        })
    }
};
