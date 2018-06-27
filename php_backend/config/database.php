<?php

    try {

        $pdo = new PDO('mysql:host=localhost;dbname=site_math_prof', "root", "root" );

    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }