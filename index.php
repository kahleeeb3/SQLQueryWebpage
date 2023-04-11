<!DOCTYPE html>
<html>

<head>
    <title>SQL Query</title>

    <!-- My js and php files -->
    <link rel="stylesheet" href="./src/css/style.css" />
    <?php include './src/php/functions.php'; ?>

    <script>
        function modifyDiv() {
            var mysql = document.getElementById('sql').value;
            document.getElementById("sqlResult").innerHTML = mysql;
            return 0;
        }
    </script>

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
            <button onclick="changeTextAreaContent(0)">Change Text Area Content</button>
        </div>
        <div class="right">

            <!-- <form action="./src/php/submit_sql.php" method="post">
                <textarea name="sql_statement" id="sql"></textarea>
                <input type="submit" value="Run SQL">
            </form> -->

            <form method="post">
                <textarea name="sql_statement" id="sql"></textarea>
                <input type="submit" value="Run SQL">
            </form>
            <!-- Specify what to do with form -->
            <script src="./src/js/myscript.js"></script>
        </div>
    </div>

    <!-- RESULTS WILL GO HERE -->
    <div class="resultContainer">
        <h2>Display Submission Results</h2>
        <div id="sqlResult"></div>
    </div>

</body>

</html>