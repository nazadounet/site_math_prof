function display_data_cours_tes(event) {
    function l(data){
        console.log(data);
    }

    cours_tes_controller.get_data_from_cours_tes(function(response){
        console.log(response);

        for (var i = 0; i < response.length; i++){


            var cours_tes_array_temlate = '<table class="table">\n' +
                '            <thead class="thead-dark">\n' +
                '                <tr>\n' +
                '                    <th>chapitre</th>\n' +
                '                    <th>cours</th>\n' +
                '                    <th>exo</th>\n' +
                '                    <th>exo int</th>\n' +
                '                </tr>\n' +
                '            </thead>\n' +
                '            <tbody>\n' +
                '                <tr>\n' +
                '                    <td>\n' +
                '                        <div class="display_flex_row_center_center flex_jus_left">\n' +
                '                            <span class="displayed">cours n1</span>\n' +
                '                            <button type="button" class="cours_tes btn btn-warning btn-sm displayed" onclick="button_diplay_hide_elemnt_to_update.display_input_update(event)"><i class="far fa-edit"></i></button>\n' +
                '\n' +
                '                            <input class="form-control not_displayed" type="text">\n' +
                '                            <input id="62" type="hidden" name="cours_tes" value="cours_tes_title">\n' +
                '                            <button type="button" class="cours_tes btn btn-success btn-sm not_displayed" name="update" onclick="button_event_data_controller(event)"><i class="fas fa-check"></i></button>\n' +
                '                            <button type="button" class="cours_tes btn btn-warning btn-sm not_displayed" name="update" onclick="button_diplay_hide_elemnt_to_update.hide_input_update(event)"><i class="fas fa-ban"></i></button>\n' +
                '                        </div>\n' +
                '\n' +
                '                        <div class="display_flex_row_center_center flex_jus_left">\n' +
                '                            <span class="displayed">sub_title</span>\n' +
                '                            <button type="button" class="cours_tes btn btn-warning btn-sm displayed" onclick="button_diplay_hide_elemnt_to_update.display_input_update(event)"><i class="far fa-edit"></i></button>\n' +
                '                            <button type="button" class="cours_tes btn btn-danger btn-sm displayed" name="delete" onclick="button_event_data_controller(event)"><i class="fas fa-trash"></i></button>\n' +
                '\n' +
                '                            <input class="form-control not_displayed" type="text">\n' +
                '                            <input id="99" type="hidden" name="cours_tes_sub_title" value="cours_tes_sub_title">\n' +
                '                            <button type="button" class="cours_tes btn btn-success btn-sm not_displayed" name="update" onclick="button_event_data_controller(event)"><i class="fas fa-check"></i></button>\n' +
                '                            <button type="button" class="cours_tes btn btn-warning btn-sm not_displayed" name="update" onclick="button_diplay_hide_elemnt_to_update.hide_input_update(event)"><i class="fas fa-ban"></i></button>\n' +
                '                        </div>\n' +
                '\n' +
                '                        <div class="display_flex_row_center_center flex_jus_left">\n' +
                '                            <span class="displayed">sub_title</span>\n' +
                '                            <button type="button" class="cours_tes btn btn-warning btn-sm displayed" onclick="button_diplay_hide_elemnt_to_update.display_input_update(event)"><i class="far fa-edit"></i></button>\n' +
                '                            <button type="button" class="cours_tes btn btn-danger btn-sm displayed" name="delete" onclick="button_event_data_controller(event)"><i class="fas fa-trash"></i></button>\n' +
                '\n' +
                '                            <input class="form-control not_displayed" type="text">\n' +
                '                            <input id="99" type="hidden" name="cours_tes_sub_title" value="cours_tes_sub_title">\n' +
                '                            <button type="button" class="cours_tes btn btn-success btn-sm not_displayed" name="update" onclick="button_event_data_controller(event)"><i class="fas fa-check"></i></button>\n' +
                '                            <button type="button" class="cours_tes btn btn-warning btn-sm not_displayed" name="update" onclick="button_diplay_hide_elemnt_to_update.hide_input_update(event)"><i class="fas fa-ban"></i></button>\n' +
                '                        </div>\n' +
                '\n' +
                '                    </td>\n' +
                '\n' +
                '                    <td>\n' +
                '                        <div class="display_flex_row_center_center flex_jus_left">\n' +
                '                            <a href="#" class="displayed"><img class="icon_pdf_width" src="admin_side_img/pdf.png" alt="icon_pdf_red"></a>\n' +
                '                            <button type="button" class="cours_tes btn btn-warning btn-sm displayed" onclick="button_diplay_hide_elemnt_to_update.display_input_update(event)"><i class="far fa-edit"></i></button>\n' +
                '                            <button type="button" class="cours_tes btn btn-danger btn-sm displayed" name="delete" onclick="button_event_data_controller(event)"><i class="fas fa-trash"></i></button>\n' +
                '\n' +
                '                            <input class="form-control not_displayed" type="file">\n' +
                '                            <input id="1" type="hidden" name="cours_tes_pdf" value="cours_tes_pdf_url">\n' +
                '                            <button type="button" class="cours_tes btn btn-success btn-sm not_displayed" name="update" onclick="button_event_data_controller(event)"><i class="fas fa-check"></i></button>\n' +
                '                            <button type="button" class="cours_tes btn btn-warning btn-sm not_displayed" name="update" onclick="button_diplay_hide_elemnt_to_update.hide_input_update(event)"><i class="fas fa-ban"></i></button>\n' +
                '                        </div>\n' +
                '                    </td>\n' +
                '\n' +
                '                    <td>\n' +
                '                        <div class="display_flex_row_center_center flex_jus_left">\n' +
                '                            <a href="#" class="displayed"><img class="icon_pdf_width" src="admin_side_img/pdf_green.png" alt="icon_pdf_green"></a>\n' +
                '                            <button type="button" class="cours_tes btn btn-warning btn-sm displayed" onclick="button_diplay_hide_elemnt_to_update.display_input_update(event)"><i class="far fa-edit"></i></button>\n' +
                '                            <button type="button" class="cours_tes btn btn-danger btn-sm displayed" name="delete" onclick="button_event_data_controller(event)"><i class="fas fa-trash"></i></button>\n' +
                '\n' +
                '                            <input class="form-control not_displayed" type="file">\n' +
                '                            <input id="1" type="hidden" name="cours_tes_exo_pdf" value="cours_tes_exo_pdf_url">\n' +
                '                            <button type="button" class="cours_tes btn btn-success btn-sm not_displayed" name="update" onclick="button_event_data_controller(event)"><i class="fas fa-check"></i></button>\n' +
                '                            <button type="button" class="cours_tes btn btn-warning btn-sm not_displayed" name="update" onclick="button_diplay_hide_elemnt_to_update.hide_input_update(event)"><i class="fas fa-ban"></i></button>\n' +
                '                        </div>\n' +
                '                    </td>\n' +
                '\n' +
                '                    <td>\n' +
                '                        <div class="display_flex_row_center_center flex_jus_left">\n' +
                '                            <span class="displayed">item</span>\n' +
                '                            <button type="button" class="cours_tes btn btn-warning btn-sm displayed" onclick="button_diplay_hide_elemnt_to_update.display_input_update(event)"><i class="far fa-edit"></i></button>\n' +
                '                            <button type="button" class="cours_tes btn btn-danger btn-sm displayed" name="delete" onclick="button_event_data_controller(event)"><i class="fas fa-trash"></i></button>\n' +
                '\n' +
                '                            <input class="form-control not_displayed" type="text">\n' +
                '                            <input id="1" type="hidden" name="cours_tes_exercice_interactif" value="cours_tes_exe_int_url">\n' +
                '                            <button type="button" class="cours_tes btn btn-success btn-sm not_displayed" name="update" onclick="button_event_data_controller(event)"><i class="fas fa-check"></i></button>\n' +
                '                            <button type="button" class="cours_tes btn btn-warning btn-sm not_displayed" name="update" onclick="button_diplay_hide_elemnt_to_update.hide_input_update(event)"><i class="fas fa-ban"></i></button>\n' +
                '                        </div>\n' +
                '                    </td>\n' +
                '                </tr>\n' +
                '            </tbody>\n' +
                '        </table>';

            var div = document.createElement("div");
            div.innerHTML = cours_tes_array_temlate;
            document.querySelector("#cours_tes_array_data").appendChild(div);
            console.log(document.querySelector("#cours_tes_array_data"))//.innerHTML = cours_tes_array_temlate;

/*
            var cours_tes_array_data = document.querySelector("#cours_tes_array_data");

            var table = document.createElement("table");
            table.setAttribute("class", "table");

            var thead = document.createElement("thead");
            thead.setAttribute("class", "thead-dark");

            table.appendChild(thead);

            var tr = document.createElement("tr");
            thead.appendChild(tr);

            var th = document.createElement("th");
            th.innerHTML = "Chapitre";
            tr.appendChild(th);

            var th = document.createElement("th");
            th.innerHTML = "Cours";
            tr.appendChild(th);

            var th = document.createElement("th");
            th.innerHTML = "Exos BAC";
            tr.appendChild(th);

            var th = document.createElement("th");
            th.innerHTML = "Exercices Interactifs";
            tr.appendChild(th);

            var tbody = document.createElement("tbody");
            table.appendChild(tbody);

            var tr = document.createElement("tr");
            tbody.appendChild(tr);

            var td = document.createElement("td");
            tr.appendChild(td);

            var div = document.createElement("td");
            tr.appendChild(td);

            cours_tes_array_data.appendChild(table);

            l(table.childNodes);
*/
        }

    });

}