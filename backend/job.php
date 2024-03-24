<?php

include './connection.php';

$company_id = isset($_POST['company_id']) ? $_POST['company_id'] : '';
$title = isset($_POST['title']) ? $_POST['title'] : '';
$description = isset($_POST['description']) ? $_POST['description'] : '';
$post_date = isset($_POST['post_date']) ? $_POST['post_date'] : '';

$query = $mysqli->prepare('INSERT INTO jobs (company_id, title, description, post_date) VALUES (?,?,?,?)');

$query->bind_param('isss', $company_id, $title, $description, $post_date);

$response = [];

if ($query->execute()) {
    $response['success'] = true;
    $response['message'] = "Job added";
} else {
    $response['success'] = false;
    $response['message'] = "Error, Job cannot added";
}

echo json_encode($response);

$mysqli->close();
