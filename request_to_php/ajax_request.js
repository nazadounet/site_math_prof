function ajax_request (url, method = "POST", data, success, error) {

    $.ajax({
        url: url,
        method: method,
        data: data,
        success: function(response){
            success
        },
        error: function (response) {
            error
        }
    });

}