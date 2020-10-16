<?php

require 'common.php';
// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'INSERT INTO Random_User (UserId, firstName, lastName)
  VALUES (?, ?, ?)'
);

$stmt->execute([
  $_POST['userId'],
  $_POST['firstName'],
  $_POST['lastName'],
]);







header('HTTP/1.1 303 See Other');
header('Location: ../users/?userId=' . $_POST['userId']);
