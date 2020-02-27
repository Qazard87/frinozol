<?php
$response = array('err' => 0, 'message' => 'Ваш вопрос отправлен');

# Получить JSON как строку
$json_str = file_get_contents('php://input');
# Получить объект
$json_obj = json_decode($json_str, true);

# Content-Type: application/json

header("Content-Type: application/json");
echo json_encode($response);