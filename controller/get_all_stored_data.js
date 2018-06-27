function get_data_from_db(url, method, data = {}){

    return $.ajax({
        url: url,
        method: method,
        data: data
    });

}