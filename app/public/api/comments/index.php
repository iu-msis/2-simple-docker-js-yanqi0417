<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM comments';
$vars = [];

if (isset($_GET['id'])) {
  $sql = 'SELECT * FROM comments WHERE id = ?';
  $vars = [ $_GET['id'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$users = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($users, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
