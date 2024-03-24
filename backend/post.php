<?php

include './connection.php';

$user_id = isset($_POST['user_id']) ? $_POST['user_id'] : '';
$company_id = isset($_POST['company_id']) ? $_POST['company_id'] : NULL;
$post_image = isset($_POST['post_image']) ? $_POST['post_image'] : '';
$post_content = isset($_POST['post_content']) ? $_POST['post_content'] : '';
$post_time = isset($_POST['post_time']) ? $_POST['post_time'] : '';

$query = $mysqli->prepare('INSERT INTO posts (user_id, company_id, post_image, post_content, post_time) VALUES (?,?,?,?,?)');

$query->bind_param('iisss', $user_id, $company_id, $post_image, $post_content, $post_time);

$response = [];

if ($query->execute()) {
    $response['success'] = true;
    $response['message'] = "Post added";
} else {
    $response['success'] = false;
    $response['message'] = "Error, Post cannot added";
}

echo json_encode($response);

$mysqli->close();
