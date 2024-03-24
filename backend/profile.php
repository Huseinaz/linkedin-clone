<?php

include './connection.php';

$user_id = isset($_POST['user_id']) ? $_POST['user_id'] : '';
$name = isset($_POST['name']) ? $_POST['name'] :
$image = isset($_POST['image']) ? $_POST['image'] : '';
$bio = isset($_POST['bio']) ? $_POST['bio'] : '';
$experience = isset($_POST['experience']) ? $_POST['experience'] : '';
$education = isset($_POST['education']) ? $_POST['education'] : '';
$skills = isset($_POST['skills']) ? $_POST['skills'] : '';

$query = $mysqli->prepare('INSERT INTO profiles (user_id, name, image, bio, experience, education, skills) VALUES (?,?,?,?,?,?)');

$query->bind_param('issssss', $user_id, $name, $image, $bio, $experience, $education, $skills);

$response = [];

if ($query->execute()) {
    $response['success'] = true;
    $response['message'] = "Profile added";
} else {
    $response['success'] = false;
    $response['message'] = "Error, Profile cannot added";
}

echo json_encode($response);

$mysqli->close();
