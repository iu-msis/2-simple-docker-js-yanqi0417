<?php

require 'common.php';
// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'INSERT INTO comments (commentText)
  VALUES (?)'
);

$stmt->execute([
$_POST['commentText'],
]);





// $id = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

header('HTTP/1.1 303 See Other');
header('Location: ../comments/');
