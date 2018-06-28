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
    <button onclick="cours_tes_object.get_all_data()">Valider</button>


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
                        <div class="section_container">
                            <p class="display_cours_tes_title">chapitre</p>
                            <button class="update"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></button>
                        </div>
                        <ul>
                            <li class="display_cours_tes_sub_title">item</li>
                        </ul>
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