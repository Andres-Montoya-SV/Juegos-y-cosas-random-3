<?php
	//conectamos Con el servidor
	$conectar=@mysqli_connect('localhost','root','','Veterinaria');
	//verificamos la conexion
	if(!$conectar){
		echo"No Se Pudo Conectar Con El Servidor";
	}else{

		$base=mysqli_select_db($conectar,'Veterinaria');
		if(!$base){
			echo"No Se Encontro La Base De Datos";			
		}
	}
	//recuperar las variables
	$Nombre=$_POST['Nom'];
	$Genero=$_POST['Genero'];
	$Raza=$_POST['Raza'];
	$Tipo=$_POST['Tipo'];
	$Colores=$_POST['Colores'];
	$Correo=$_POST['Cor'];
	$Telefono=$_POST['Tel'];
	$Direccion=$_POST['Dir'];
	$Propietario=$_POST['Propietario'];

	//hacemos la sentencia de sql
	$sql="INSERT INTO mascota VALUES('$Nombre','$Genero','$Raza','$Tipo','$Colores')";
	$sql="INSERT INTO propietario VALUES('$Correo','$Telefono','$Direccion','$Propietario')";
	//ejecutamos la sentencia de sql
	$ejecutar=mysqli_query($conectar,$sql);
	//verificamos la ejecucion
	if(!$ejecutar){
		echo"Hubo Algun Error";
	}else{
		echo"Datos Guardados Correctamente<br><a href='Signup.html'>Volver</a>";
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
		<h1></h1>>
  </body>
</html>