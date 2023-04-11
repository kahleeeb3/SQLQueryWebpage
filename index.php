<!DOCTYPE html>
<html>

<head>
    <title>SQL Query</title>
    <link rel="stylesheet" href="./src/css/style.css" />

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
        </div>
        <div class="right">

            <form method="POST">
                <textarea name="sql" id="sql"></textarea>
                <input type="submit" value="Run SQL">
            </form>

            <script>
                var editor = CodeMirror.fromTextArea(document.getElementById("sql"), {
                    mode: "text/x-sql",
                    theme: "material-darker",
                    indentWithTabs: true,
                    smartIndent: true,
                    lineNumbers: true,
                    matchBrackets: true,
                    autofocus: true
                });
            </script>




        </div>
    </div>


</body>

</html>