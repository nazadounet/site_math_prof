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

    <button type="button" name="insert" class="admin_submit_button cours_tes">Valider</button>
    <button onclick="display_data_cours_tes()" type="button" name="select" class="">Valider</button>


    <div>
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
                        <div id="cours_tes" class="display_flex_row_center_center">
                            <span class="display_cours_tes_title">chapitre</span>
                            <input id="1" type="hidden" name="cours_tes_title">
                            <button onclick="display_data_cours_tes()">update</button>
                        </div>
                        <div id="cour_tes_sub_title" class="display_flex_col_center_center">
                            <ul>
                                <li class="display_flex_row_center_center">
                                    <span>sub_title</span>
                                    <input id="1" type="hidden" name="cours_tes_sub_title">
                                    <button>update</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </td>
                <td style="border:1px solid">
                    <span class="display_cours_tes_pdf_url">url</span>
                </td>
                <td style="border:1px solid">
                    <span class="display_cours_tes_exo_pdf_url">url</span>
                </td>
                <td style="border:1px solid">
                    <ul>
                        <li class="display_cours_tes_exe_int_name"><a class="display_cours_tes_exe_int_url" href="">item</a></li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>

</div>


<p id="error"></p>