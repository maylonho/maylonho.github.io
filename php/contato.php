<?php

//1 – Definimos Para quem vai ser enviado o email
$para = "oliveira_maylon@hotmail.com";
//2 - resgatar os campos digitados no formulário e grava nas variaveis
$nome = $_POST['nome'];
$email = $_POST['e-mail'];
$assunto = $_POST['assunto'];
$msg = $_POST['msg'];

 //4 – Agora definimos a  mensagem que vai ser enviado no e-mail
$mensagem = "<strong>Nome:  </strong>".$nome;
$mensagem .= "<br>  <strong>E-mail: </strong>".$email;
$mensagem .= "<br>  <strong>Mensagem: </strong>".$assunto;
$mensagem .= "<br>  <strong>Mensagem: </strong>".$msg;

//5 – agora inserimos as codificações corretas e  tudo mais.
$headers =  "Content-Type:text/html; charset=UTF-8\n";
$headers .= "From:  ".$nome."<$email>\n";
//Vai ser //mostrado que  o email partiu deste email e seguido do nome
//email do servidor //que enviou
$headers .= "X-Mailer: PHP  v".phpversion()."\n";
$headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
$headers .= "Return-Path:  <$email>\n";
//caso a msg //seja respondida vai para  este email.
$headers .= "MIME-Version: 1.0\n";

$envio = mail($para, $assunto, $mensagem, $headers);  //função que faz o envio do email.

if($envio){
    echo ("<SCRIPT LANGUAGE='JavaScript'>
    window.alert('Mensagem enviada com sucesso')
    window.location.href='https://maylonho.github.io';
    </SCRIPT>");
}else{
    echo "A mensagem não pode ser enviada";
}

?>

