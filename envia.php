<?php

    $nome = addslashes($_POST['Seu nome completo']);
    $email = addslashes($_POST['Seu e-mail']);
    $celular = addslashes($_POST['Seu celular']);

    $para = "gumeendes26@gmail.com";
    $assunto = "Contato Pelo Meu Site - PORTFOLIO";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Celular: ".$celular;

    $header = "From: gamesproking404@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$header)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o e-mail");
    }

?>