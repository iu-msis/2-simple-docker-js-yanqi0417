<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Random_User';
$vars = [];

if (isset($_GET['userId'])) {
  $sql = 'SELECT * FROM Random_User WHERE userId = ?';
  $vars = [ $_GET['userId'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$users = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($users, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
