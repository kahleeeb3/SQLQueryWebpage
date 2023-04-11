<!DOCTYPE html>
<html>

<head>
    <title>SQL Query</title>
    <link rel="stylesheet" href="style.css" />
    <!-- <?php include 'functions.php'; ?>
    <script>
        function modifyDiv(){
            document.getElementById("myDiv").innerHTML = 
            "<?php echo csv_to_html_table('data/db_book.csv'); ?>";
        }
    </script> -->
</head>

<body>
    <h1>COMP 5120/6120 Database Systems I</h1>
    <h2>Term Project: Populating and Querying Databases with SQL</h2>

    <h3>Project Description</h3>
    <p>
        In this project, you are to create a database for a hypothetical online bookstore system.
        The system maintains information about books, subjects, supplier, and shippers. The
        bookstore acquires the desired books from suppliers (e.g. Amazon.com), and ships the
        books by shippers (e.g. UPS). The system also keeps track of orders, customers, and
        employees.
    </p>
    <p>
        Your tasks are the following:
    <ol>
        <li>Create and populate the bookstore database with MySQL.</li>
        <li>Create a user interface using PHP and HTML to query and modify the data.</li>
        <li>Write correct SQL statements for the queries given.</li>
    </ol>
    </p>

    <h3>Queries Input</h3>
    <div id="query-submit">
        <form action="submit_sql.php" method="post">
            <textarea name="sql_statement" rows="5" cols="40"></textarea><br><br>
            <input type="submit" value="Submit">
            <input type="submit" value="Clear">
        </form>
    </div>


	<button onclick="modifyDiv()">Modify Div</button>
    <div id="myDiv">
        Original Content
    </div>

    
    <?php echo csv_to_html_table('data/db_book.csv'); ?>


    <h3>Required Queries</h3>

    <ol>
        <li>Show the subject names of books supplied by *supplier2*.</li>
        <li>Show the name and price of the most expensive book supplied by *supplier3*</li>
        <li>Show the unique names of all books ordered by *lastname1 firstname1*.</li>
        <li>Show the title of books which have more than 10 units in stock.</li>
        <li>Show the total price *lastname1 firstname1* has paid for the books.</li>
        <li>Show the names of the customers who have paid less than $80 in totals.</li>
        <li>Show the name of books supplied by *supplier2*.</li>
        <li>Show the total price each customer paid and their names. List the result in descending price.</li>
        <li>Show the names of all the books shipped on 08/04/2016 and their shippers' names.</li>
        <li>Show the unique names of all the books *lastname1 firstname1* and *lastname4 firstname4* *both* ordered</li>
        <li>Show the names of all the books *lastname6 firstname6* was responsible for.</li>
        <li>Show the names of all the ordered books and their total quantities. List the result in ascending quantity.
        </li>
        <li>Show the names of the customers who ordered at least 2 books.</li>
        <li>Show the name of the customers who have ordered at least a book in *category3* or *category4* and the book
            names.</li>
        <li>Show the name of the customer who has ordered at least one book written by *author1*.</li>
        <li>Show the name and total sale (price of orders) of each employee</li>
        <li>Show the book names and their respective quantities for open orders (the orders which have not been shipped)
            at midnight 08/04/2016.</li>
        <li>Show the names of customers who have ordered more than 1 book and the corresponding quantities. List the
            result in the descending quantity.</li>
        <li>Show the names of customers who have ordered more than 3 books and their respective telephone numbers.</li>
    </ol>


</body>

</html>