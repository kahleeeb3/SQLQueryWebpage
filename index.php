<!DOCTYPE html>
<html>

<head>
    <title>SQL Query</title>

    <!-- My js and php files -->
    <link rel="stylesheet" href="./src/css/style.css" />
    <?php include './src/php/functions.php'; ?>

    <!-- Code Mirror https://codemirror.net/5/index.html -->
    <link rel="stylesheet" href="./src/codeMirror/lib/codemirror.css">
    <script src="./src/codeMirror/lib/codemirror.js"></script>
    <script src="./src/codeMirror/mode/sql/sql.js"></script>
    <link rel="stylesheet" href="./src/codeMirror/theme/material-darker.css">

</head>

<body class="background">

    <div class="header">
        <h1>COMP 5120/6120 Database Systems I</h1>
        <h2>Term Project: Populating and Querying Databases with SQL</h2>
    </div>

    <div class="body">
        <div class="left">
            <h2>Database: cmp0132</h2>
            <button onclick="changeTextAreaContent(0)">Create Tables</button>
            <button onclick="changeTextAreaContent(1)">Show Tables Names</button>
            <button onclick="changeTextAreaContent(4)">Insert Table Data</button>
            <button onclick="changeTextAreaContent(2)">Show All Table Data</button>
            <button onclick="changeTextAreaContent(3)">Drop All Tables</button>
            <h2>Queries:</h2>
            <button onclick="changeTextAreaContent(5)">Question 1</button>
            <button onclick="changeTextAreaContent(6)">Question 2</button>
            <button onclick="changeTextAreaContent(7)">Question 3</button>
            <button onclick="changeTextAreaContent(8)">Question 4</button>
            <button onclick="changeTextAreaContent(9)">Question 5</button>
            <button onclick="changeTextAreaContent(10)">Question 6</button>
            <button onclick="changeTextAreaContent(11)">Question 7</button>
            <button onclick="changeTextAreaContent(12)">Question 8</button>
            <button onclick="changeTextAreaContent(13)">Question 9</button>
            <button onclick="changeTextAreaContent(14)">Question 10</button>
            <button onclick="changeTextAreaContent(15)">Question 11</button>
            <button onclick="changeTextAreaContent(16)">Question 12</button>
            <button onclick="changeTextAreaContent(17)">Question 13</button>
            <button onclick="changeTextAreaContent(18)">Question 14</button>
            <button onclick="changeTextAreaContent(19)">Question 15</button>
            <button onclick="changeTextAreaContent(20)">Question 16</button>
            <button onclick="changeTextAreaContent(21)">Question 17</button>
            <button onclick="changeTextAreaContent(22)">Question 18</button>
            <button onclick="changeTextAreaContent(23)">Question 19</button>
        </div>
        <div class="right">

            <form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
                <textarea name="sql_statement" id="sql"></textarea>
                <input type="submit" value="Run SQL">
            </form>
            <!--Used for code syntax highlighting-->
            <script src="./src/js/myscript.js"></script>
        </div>
    </div>

    <!-- RESULTS WILL GO HERE -->
    <div class="resultContainer">
        <h2>Display Submission Results</h2>
        <div id="sqlResult">
            <?php
                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    $sql_statement = $_POST['sql_statement']; // Retrieve form data
                    $sql_statement = stripslashes($sql_statement); // remove slashes
                    $queries = explode(';', $sql_statement); // split into multiple queries
                    $queries = array_filter($queries); // Remove any empty queries
                    // submit each query individually
                    foreach ($queries as $query) {
                        $sql_result = queryMySQL("$query;"); // process query
                        echo "<p>$sql_result</p>"; // display results
                        // echo "<p>$sql_statement</p>"; // display query as text
                    }
                }
            ?>
        </div>
    </div>

    <!-- <div class="tableList">
        <h2>Table CSV Data</h2>
        <?php echo csv_to_html_table('./data/db_order_detail.csv', "OrderDetails"); ?>
        <?php echo csv_to_html_table('./data/db_book.csv', "Books"); ?>
        <?php echo csv_to_html_table('./data/db_order.csv', "Orders"); ?>
        <?php echo csv_to_html_table('./data/db_supplier.csv',"Suppliers"); ?>
        <?php echo csv_to_html_table('./data/db_customer.csv', "Customers"); ?>
        <?php echo csv_to_html_table('./data/db_employee.csv', "Employees"); ?>
        <?php echo csv_to_html_table('./data/db_shipper.csv', "Shippers"); ?>
        <?php echo csv_to_html_table('./data/db_subject.csv', "Subjects"); ?>
    </div> -->

</body>

</html>