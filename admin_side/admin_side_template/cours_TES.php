<div class="tabs_content_container">

<button onclick="display_data_cours_tes()">mpm</button>

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

    <button type="button" name="insert" class="cours_tes" onclick="button_event_data_controller(event)">Valider</button>


    <div id="cours_tes_array_data">

    </div>

</div>


<p id="error"></p>

<?php unset($_SESSION);?>