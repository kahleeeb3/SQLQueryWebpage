<?php

// convert CSV file to an HTML Table
function csv_to_html_table($csv_file, $table_name) {
    // Read in the CSV file
    $data = array();
    if (($handle = fopen($csv_file, 'r')) !== FALSE) {
        while (($row = fgetcsv($handle, 1000, ',')) !== FALSE) {
            $data[] = $row;
        }
        fclose($handle);
    }

    // Generate the HTML table
    $numRows = count($data); // counts num rows in csv
    $html = '<table>';
    $html .= '<tr><th colspan="'.$numRows.'">'. $table_name. '</th></tr>'; // give table a name
    foreach ($data as $row) {
        $html .= '<tr>';
        foreach ($row as $cell) {
            $html .= '<td>' . htmlspecialchars($cell) . '</td>';
        }
        $html .= '</tr>';
    }
    $html .= '</table>';

    // Return the HTML table
    return $html;
}

// Run SQL Query
// https://www.w3schools.com/php/php_mysql_connect.asp
function queryMySQL($sql_statement){

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
    $result = mysqli_query($conn, $sql_statement); // store results
    // Documentation on "result": https://www.php.net/manual/en/class.mysqli-result.php

    // check for errors in the query
    if ($result === false) {
        $error_message = "ERROR " . mysqli_errno($conn) . mysqli_error($conn) . "\n";
        return $error_message;
    }
    
    // check for create or drop
    if ($result === true) {
        // strpos() finds the first occurance of a substring. False if none
        $message = "Query executed successfully";
        if (strpos($sql_statement, 'CREATE TABLE') !== false) {
            $message = "Table created successfully";
        } 
        elseif (strpos($sql_statement, 'DROP TABLE') !== false) {
            $message = "Table dropped successfully";
        }
        mysqli_close($conn);
        return $message;
    }
    
    
    // check if the query returned any rows
    elseif (mysqli_num_rows($result) > 0) {
        
        $html = '<table>';

        // Define table column headers
        $html .= '<tr>';
        $finfo = $result->fetch_fields(); // field info
        foreach ($finfo as $val) {
            $html .= '<th>'.$val->name.'</th>';
        }
        $html .= '</tr>';
        
        // get the row data
        while ($row = $result->fetch_row()){
            $html .= '<tr>';
            foreach ($row as $cell) {
                $html .= '<td>'.$cell.'</td>';
            }
            $html .= '</tr>';
        }
        $html .= '</table>';
        mysqli_close($conn); // close connection
        return $html;
    } 

    else {
        mysqli_close($conn); // close connection
        return "No rows returned from query.";
    } 
}

?>
