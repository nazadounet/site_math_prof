var ajax_request_construtor = {

    ajax_request : function (method, data, callback){

        return $.ajax({
            url: "../php_backend/controller/request_controller.php",
            method: method,
            data: data
        })
            .done(function(response){
                callback(response)
            })
            .fail(function(response){
                callback(response);
            })

    },


};
