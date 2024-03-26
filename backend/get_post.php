<?php

include('connection.php');

$query = $mysqli ->prepare('SELECT * FROM posts');

$query ->execute();

$query ->store_result();

$query ->bind_result($post_id, $user_id, $company_id, $post_image, $post_content, $post_time);

$response = [];

while ($query ->fetch()) {
    $news = [
        'post_id' => $job_id,
        'user_id' => $user_id,
        'company_id' => $company_id,
        'post_image' => $post_image,
        'post_content' => $post_content,
        'post_time' => $post_time
    ];
    $response[] = $news;
}

echo json_encode($response);

$mysqli ->close();