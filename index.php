<!DOCTYPE html>
<html>

<head>
    <title>SQL Query</title>
    <link rel="stylesheet" href="./src/css/style.css" />

    <!-- Code Syntax Highlighting -->
    <link rel="stylesheet" href="./src/css/prism.css" />
    <link rel="stylesheet" href="./src/css/prism-live.css" />
    <script src="./src/js/prism.js"></script>
    <script src="./src/js/prism-live.js"></script>
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
            <h2>Queries Input</h2>
            <form>
                <label for="sql-query">Enter your SQL query:</label>
                <br>
                <textarea id="sql-query" name="sql-query"></textarea>
                <br>
                <input type="submit" value="Run Query">
            </form>

            <script>
                Prism.highlightAll();
                Prism.languages.sql = Prism.languages.extend('sql', {});
            </script>


            <!-- Import Prims.js and initialize syntax highlighting -->


            <!-- <script type="text/plain" class="language-sql">
                SELECT
            </script> -->
        </div>
    </div>


</body>

</html>

<script>
    Prism.highlightAll();
</script>