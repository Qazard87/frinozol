<?php
$response = file_get_contents('success.json');

# Получить JSON как строку
$json_str = file_get_contents('php://input');
# Получить объект
$json_obj = json_decode($json_str);

if($json_str !== ""){
   header("Content-Type: application/json");
   echo json_encode($response);
}