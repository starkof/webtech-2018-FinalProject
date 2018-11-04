<?php

   // define variables and set to empty values
    $fname =  $lname = $email = $subject = $message = "" ;
      if(isset($_POST["submit"])){
        $fname = test_input($_POST["first-name"]);
        $lname = test_input($_POST["last-name"]);
        $email = test_input($_POST["email"]);
        $subject = test_input($_POST["subject"]);
        $message = test_input($_POST["message"]);

        echo "Successfully Sent";
      }

      //Data Formating
      function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }

     
    
?>
