<?php
	//conectamos Con el servidor
	$conectar=@mysqli_connect('localhost','root','','cuentas');
	//verificamos la conexion
	if(!$conectar){
		echo"No Se Pudo Conectar Con El Servidor";
	}else{

		$base=mysqli_select_db($conectar,'cuentas');
		if(!$base){
			echo"No Se Encontro La Base De Datos";			
		}
	}
	//recuperar las variables
	$nueva=$_POST['nueva'];
	$antigua=$_POST['antigua'];
	//hacemos la sentencia de sql
	$sql="UPDATE datos set Contra='$_POST[nueva]' WHERE Contra='$_POST[antigua]'";
	//ejecutamos la sentencia de sql
	$ejecutar=mysqli_query($conectar,$sql);
	//verificamos la ejecucion
	if(!$ejecutar){
		echo"Hubo Algun Error";
	}else{
		echo"Datos Actualizados Correctamente<br><a href='Cambiar.html'>Volver</a>";
	}
	
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="CSS\Load.css">
  </head>
  <body>
		<div class="loading">
		<div class="obj"></div>
		<div class="obj"></div>
		<div class="obj"></div>
		<div class="obj"></div>
		<div class="obj"></div>
		<div class="obj"></div>
		<div class="obj"></div>
		<div class="obj"></div>
    </div>
  </body>
</html>