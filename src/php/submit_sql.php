<?php
// get the SQL statement from the form
$sql_statement = $_POST['sql_statement'];

// connect to the MySQL database
$servername = "sysmysql8.auburn.edu";
$username = "cmp0132";
$password = "Calebmpowell3";
$dbname = "cmp0132db";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// execute the SQL statement and fetch the results
$result = mysqli_query($conn, $sql_statement);

// check if the query returned any rows
if (mysqli_num_rows($result) > 0) {
    // output the results as text
    while ($row = mysqli_fetch_assoc($result)) {
        foreach ($row as $key => $value) {
            echo $key . ": " . $value . "\n";
        }
        echo "\n";
    }
} else {
    echo "No results found";
}

// close the database connection
mysqli_close($conn);
?>
