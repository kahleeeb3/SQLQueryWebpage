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
            <button onclick="changeTextAreaContent(0)">Show All Tables</button>
            <button onclick="changeTextAreaContent(0)">Show All Tables</button>
            <button onclick="changeTextAreaContent(0)">Show All Tables</button>
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
                    $sql_result = queryMySQL("$sql_statement"); // process query
                    echo "<p>$sql_result</p>"; // display results
                }
            ?>
        </div>
    </div>

    <div class="tableList">
        <h2>Tables</h2>
        <?php echo csv_to_html_table('./data/db_order_detail.csv', "Order Detail"); ?>
        <?php echo csv_to_html_table('./data/db_book.csv', "Book"); ?>
        <?php echo csv_to_html_table('./data/db_order.csv', "Order"); ?>
        <?php echo csv_to_html_table('./data/db_supplier.csv',"Supplier"); ?>

        <?php echo csv_to_html_table('./data/db_customer.csv', "Customer"); ?>
        <?php echo csv_to_html_table('./data/db_employee.csv', "Employee"); ?>
        <?php echo csv_to_html_table('./data/db_shipper.csv', "Shipper"); ?>
        <?php echo csv_to_html_table('./data/db_subject.csv', "Subject"); ?>
    </div>

</body>

</html>