<?php require_once "../include/header.php"?>



    <script>

    $(document).ready(function(){
        $("#container").load("admin_side_template/cours_TES.php");
    });

    function load_cours_tes() {
        $("#container").load("admin_side_template/cours_TES.php");
        console.log("loader");
    }
    </script>

<?php include("modal_template/bootstrap_modal.html") ?>
<!-- CONTENT SECTION --


<?php include("include/footer.html")?>