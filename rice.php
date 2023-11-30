<?php
    // for sql just get the code required ur stuff and set Real Code to $code
    // btw change location links
    // this was just a quick change from javascript, v3 will have sql support :D
  
    $authCode = "authtest";
  
    if(isset($_GET["code"])){
        if($_GET["code"]==$authCode){
            header("Location: https://success.com/");
        } else {
            header("Location: https://failed.com/");
        }
    } else {
        header("Location: https://failed.com/");
    }
    
    echo "Created by https://github.com/ndsboy87";
?>