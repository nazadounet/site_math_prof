<div class="tabs_content_container">

        <div id="cours_tes">
            <label id="cours_tes_title">Chapitre</label>
            <input class="input_cours_TES require" name="cours_tes_title" type="text">
        </div>

        <div id="cours_tes_sub_title">
            <label id="cours_tes_sub_title">Point abordé</label>
            <input class="input_cours_TES" name="cours_tes_sub_title" type="text">
            <input class="input_cours_TES" name="cours_tes_sub_title" type="text">
            <input class="input_cours_TES" name="cours_tes_sub_title" type="text">
        </div>

        <div id="cours_tes_pdf">
            <label id="cours_tes_pdf_url">cours PDF</label>
            <input class="input_cours_TES" name="cours_tes_pdf_url" type="file">
        </div>

        <div id="cours_tes_exo_pdf">
            <label id="cours_tes_exo_pdf_url">Exos BAC PDF</label>
            <input class="input_cours_TES" name="cours_tes_exo_pdf_url" type="file">
        </div>

        <div id="cours_tes_exercice_interactif">
            <label id="cours_tes_exe_int_url">Exercices interactif url</label>
            <input class="input_cours_TES" name="cours_tes_exe_int_url" type="text">
            <label id="cours_tes_exe_int_name">Exercices interactif name</label>
            <input class="input_cours_TES" name="cours_tes_exe_int_name" type="text">
        </div>

        <div id="cours_tes_exercice_interactif">
            <label id="cours_tes_exe_int_url">Exercices interactif url</label>
            <input class="input_cours_TES" name="cours_tes_exe_int_url" type="text">
            <label id="cours_tes_exe_int_name">Exercices interactif name</label>
            <input class="input_cours_TES" name="cours_tes_exe_int_name" type="text">
        </div>

        <div id="cours_tes_exercice_interactif">
            <label id="cours_tes_exe_int_url">Exercices interactif url</label>
            <input class="input_cours_TES" name="cours_tes_exe_int_url" type="text">
            <label id="cours_tes_exe_int_name">Exercices interactif name</label>
            <input class="input_cours_TES" name="cours_tes_exe_int_name" type="text">
        </div>

    <button type="button" name="insert" class="cours_tes" onclick="button_event_controller(event)">Valider</button>


    <div id="cours_tes_array_data">
        <table style="border:1px solid">
            <tr style="border:1px solid">
                <th style="border:1px solid">chapitre</th>
                <th style="border:1px solid">cours</th>
                <th style="border:1px solid">exo</th>
                <th style="border:1px solid">exo int</th>
            </tr>
            <tr style="border:1px solid">
                <td style="border:1px solid">
                    <div>
                        <div class="display_flex_row_center_center flex_jus_left">
                            <input type="text">
                            <input id="1" type="hidden" name="cours_tes" value="cours_tes_title">
                            <button class="cours_tes" name="update" onclick="button_event_controller(event)">update</button>
                        </div>
                        <div id="cour_tes_sub_title" class="display_flex_row_center_center flex_jus_left">
                                <div class="display_flex_row_center_center">
                                    <span>sub_title</span>
                                    <input id="1" type="hidden" name="cours_tes_sub_title">
                                    <button>update</button>
                                </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="display_flex_row_center_center">
                        <a href="#" class=""><img class="icon_pdf_width" src="admin_side_img/pdf.png" alt="icon_pdf_red"></a>
                    </div>
                </td>
                <td>
                    <div class="display_flex_row_center_center">
                        <a href="#" class=""><img class="icon_pdf_width" src="admin_side_img/pdf_green.png" alt="icon_pdf_green"></a>
                    </div>
                </td>
                <td>
                    <ul>
                        <div>
                            <a class="" href="">item</a></div>
                    </ul>
                </td>
            </tr>
        </table>
    </div>

</div>


<p id="error"></p>