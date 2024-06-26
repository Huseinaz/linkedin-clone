<?php

include './connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    if (empty($email) || empty($password)) {
        $response["status"] = "error";
        $response["message"] = "Please fill out all fields.";
        echo json_encode($response);
        exit;
    }

    $response = array();
 
    $check_user = $mysqli->prepare('SELECT user_id, email, password, account_type FROM users WHERE email=?');
    $check_user->bind_param('s', $email);
    $check_user->execute();
    $check_user->store_result();
    $check_user->bind_result($user_id, $email, $hashed_password, $account_type);
    $check_user->fetch();
    $num_rows = $check_user->num_rows();

    if ($num_rows == 0) {
        $response["status"] = "error";
        $response["message"] = "User with this email does not exist.";

} else{
    if(password_verify($password, $hashed_password)) {
        $response["status"] = "success";
        $response["message"] = "Login successful.";
        $response['user_id'] = $user_id;
        $response['email'] = $email;
    } else {
        $response["status"] = "error";
        $response["message"] = "Incorrect password.";
    }
}

    echo json_encode($response);
}