<?php


/*
 * This function takes a url to a CSV file and displays
 * that CSV file as an HTML Element
 */
function csv_to_html_table($csv_file) {
    // Read in the CSV file
    $data = array();
    if (($handle = fopen($csv_file, 'r')) !== FALSE) {
        while (($row = fgetcsv($handle, 1000, ',')) !== FALSE) {
            $data[] = $row;
        }
        fclose($handle);
    }

    // Generate the HTML table
    $html = '<table>';
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
?>
