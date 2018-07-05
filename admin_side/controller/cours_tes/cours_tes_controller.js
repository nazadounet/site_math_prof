function test(){

    request_controller.select(true, 'POST', {}, 'cours_tes', function(response){
        console.log(JSON.parse(response));
    })

}

var cours_tes_controller = {

    add_new_to_cours_tes : function (datas) {

        var arguments_constructor = [{
            "primal_table_name": "cours_tes",
            "sql_request": "insert",
            "field_to_updade" : {
                "cours_tes_sub_title" :[],
                "cours_tes_exe_int" : {
                    "cours_tes_exe_int_url" : [],
                    "cours_tes_exe_int_name" : []
                }
            }
        }];

        for(var i = 0; i < datas.length; i++) {
            switch (datas[i].name) {
                case "cours_tes_sub_title":
                    arguments_constructor[0].field_to_updade.cours_tes_sub_title.push(datas[i].value);
                    break;
                case "cours_tes_exe_int_url":
                    arguments_constructor[0].field_to_updade.cours_tes_exe_int.cours_tes_exe_int_url.push(datas[i].value);
                    break;
                case "cours_tes_exe_int_name":
                    arguments_constructor[0].field_to_updade.cours_tes_exe_int.cours_tes_exe_int_name.push(datas[i].value);
                    break;
                default:
                    arguments_constructor[0]["field_to_updade"][datas[i].name] = datas[i].value;
                    break;
            }
        }
        console.log("arguments_constructor : ", arguments_constructor);

        request_controller.insert(true, arguments_constructor[0], 'cours_tes', function(response){
            console.log(JSON.parse(response));
        });
    },

    get_data_from_cours_tes : function (callback) {

        request_controller.select(true, 'POST', {}, 'cours_tes', function(response){
            callback(JSON.parse(response));
        })

    },

    update_cours_tes : function (event) {
            console.log(event.target.parentNode.querySelector("input").value);
    }

};