<?php
$usuario = isset($_POST['usuario']) ? $_POST['usuario']: '';
$pass = isset($_POST['pass']) ? $_POST['pass']:'';

$data = file_get_contents('data.json');


if($data->usuario == $usuario){
    
    if($data->pass == $pass){
        echo json_encode('true') ;
    }else{
        echo json_encode('La contraseña no es valida');

    }
    
}else{
   echo json_encode('El usuario No existe');
}