<?php

include('connection.php');

$query = $mysqli ->prepare('SELECT * FROM jobs');

$query ->execute();

$query ->store_result();

$query ->bind_result($job_id, $company_id, $title, $description, $post_date);

$response = [];

while ($query ->fetch()) {
    $news = [
        'job_id' => $job_id,
        'company_id' => $company_id,
        'title' => $title,
        'description' => $description,
        'post_date' => $post_date
    ];
    $response[] = $news;
}

echo json_encode($response);

$mysqli ->close();