// Format the form using CodeMirror
var editor = CodeMirror.fromTextArea(document.getElementById("sql"), {
  mode: "text/x-sql",
  theme: "material-darker",
  indentWithTabs: true,
  smartIndent: true,
  lineNumbers: true,
  matchBrackets: true,
  autofocus: true
});

// Changes editor content with use of button
function changeTextAreaContent(contentNumber) {
  var newContent; // where the new content will be stored
  switch (contentNumber) {
    case 0:
      newContent = 
`CREATE TABLE Books (
  BookID INT PRIMARY KEY,
  Title VARCHAR(50),
  UnitPrice DECIMAL(10,2),
  Author VARCHAR(50),
  Quantity INT,
  SupplierID INT,
  SubjectID INT
);

CREATE TABLE Customers (
  CustomerID INT PRIMARY KEY,
  LastName VARCHAR(50),
  FirstName VARCHAR(50),
  Phone VARCHAR(20)
);

CREATE TABLE Employees (
  EmployeeID INT PRIMARY KEY,
  LastName VARCHAR(50),
  FirstName VARCHAR(50)
);

CREATE TABLE OrderDetails (
  BookID INT,
  OrderID INT,
  Quantity INT,
  PRIMARY KEY (BookID, OrderID)
);

CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  CustomerID INT,
  EmployeeID INT,
  OrderDate DATE,
  ShippedDate DATE,
  ShipperID INT
);

CREATE TABLE Shippers (
  ShipperID INT PRIMARY KEY,
  ShipperName VARCHAR(50)
);

CREATE TABLE Subjects (
  SubjectID INT PRIMARY KEY,
  CategoryName VARCHAR(50)
);

CREATE TABLE Suppliers (
  SupplierID INT PRIMARY KEY,
  CompanyName VARCHAR(50),
  ContactLastName VARCHAR(50),
  ContactFirstName VARCHAR(50),
  Phone VARCHAR(20)
);`;
      break;
    case 1:
      newContent = 'SHOW TABLES;';
      break;
    case 2:
      newContent = 
`SELECT * FROM Books;
SELECT * FROM Customers;
SELECT * FROM Employees;
SELECT * FROM OrderDetails;
SELECT * FROM Orders;
SELECT * FROM Shippers;
SELECT * FROM Subjects;
SELECT * FROM Suppliers;`;
      break;
    case 3:
      newContent = 
`/* Dropping individual tables is not allowed. I will allow dropping all at once.
Using this specific string only. This can be disabled to not allow drops at all in the queryMySQL() function
I will disable this in the future. It is left on for development. */
DROP TABLE Books, Customers, Employees, OrderDetails, Orders, Shippers, Subjects, Suppliers;`;
      break;
    case 4:
      newContent = 
`INSERT INTO Books (BookID, Title, UnitPrice, Author, Quantity, SupplierID, SubjectID)
VALUES
  (1, 'book1', 12.34, 'author1', 5, 3, 1),
  (2, 'book2', 56.78, 'author2', 2, 3, 1),
  (3, 'book3', 90.12, 'author3', 10, 2, 1),
  (4, 'book4', 34.56, 'author4', 12, 3, 2),
  (5, 'book5', 78.90, 'author5', 5, 2, 2),
  (6, 'book6', 12.34, 'author6', 30, 1, 3),
  (7, 'book7', 56.90, 'author2', 17, 3, 4),
  (8, 'book8', 33.44, 'author7', 2, 1, 3);

INSERT INTO Customers (CustomerID, LastName, FirstName, Phone) 
VALUES 
  (1, 'lastname1', 'firstname1', '334-001-001'),
  (2, 'lastname2', 'firstname2', '334-002-002'),
  (3, 'lastname3', 'firstname3', '334-003-003'),
  (4, 'lastname4', 'firstname4', '334-004-004');
       
INSERT INTO Employees (EmployeeID, LastName, FirstName)
VALUES 
  (1, 'lastname5', 'firstname5'),
  (2, 'lastname6', 'firstname6'),
  (3, 'lastname7', 'firstname7');

INSERT INTO OrderDetails (BookID, OrderID, Quantity)
VALUES
  (1, 1, 2),
  (4, 1, 1),
  (6, 2, 2),
  (7, 2, 3),
  (5, 3, 1),
  (3, 4, 2),
  (4, 4, 1),
  (7, 4, 1),
  (1, 5, 1),
  (1, 6, 2),
  (1, 7, 1);

INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShippedDate, ShipperID)
VALUES 
  (1, 1, 1, '2016-08-01', '2016-08-03', 1),
  (2, 1, 2, '2016-08-04', NULL, NULL),
  (3, 2, 1, '2016-08-01', '2016-08-04', 2),
  (4, 4, 2, '2016-08-04', '2016-08-04', 1),
  (5, 1, 1, '2016-08-04', '2016-08-05', 1),
  (6, 4, 2, '2016-08-04', '2016-08-05', 1),
  (7, 3, 1, '2016-08-04', '2016-08-04', 1);
  

INSERT INTO Shippers (ShipperID, ShipperName)
VALUES
  (1, 'shipper1'),
  (2, 'shipper2'),
  (3, 'shipper3'),
  (4, 'shipper4');

INSERT INTO Subjects (SubjectID, CategoryName)
VALUES 
  (1, 'category1'),
  (2, 'category2'),
  (3, 'category3'),
  (4, 'category4'),
  (5, 'category5');

INSERT INTO Suppliers (SupplierID, CompanyName, ContactLastName, ContactFirstName, Phone)
VALUES
  (1, 'supplier1', 'company1', 'company1', '1111111111'),
  (2, 'supplier2', 'company2', 'company2', '2222222222'),
  (3, 'supplier3', 'company3', 'company3', '3333333333'),
  (4, 'supplier4', 'company4', NULL, '4444444444');`
      break;

    case 5:
      newContent = 
`/* 1. Show the subject names of books supplied by supplier2*/
SELECT S2.CategoryName
FROM Books B
JOIN Suppliers S ON B.SupplierID = S.SupplierID
JOIN Subjects S2 ON B.SubjectID = S2.SubjectID
WHERE S.CompanyName = 'supplier2';`
      break;
    
    case 6:
      newContent = 
`/* 2. Show the name and price of the most expensive book supplied by supplier3*/
SELECT B.Title, B.UnitPrice
FROM Books B
JOIN Suppliers S ON B.SupplierID = S.SupplierID
WHERE S.CompanyName = 'supplier3'
ORDER BY B.UnitPrice DESC
LIMIT 1;`
      break;
    
    case 7:
      newContent = 
`/* 3. Show the unique names of all books ordered by lastname1 firstname1.*/
SELECT DISTINCT B.Title
FROM Books B
JOIN OrderDetails OD ON B.BookID = OD.BookID
JOIN(
    /* Order ID's for firstname1 lastname1 */
    SELECT O.OrderID
    FROM Orders O
    JOIN Customers C ON O.CustomerID = C.CustomerID
    WHERE C.FirstName = 'firstname1' AND C.LastName = 'lastname1'
) OIDs ON OIDs.OrderID = OD.OrderID;`
      break;
    
    case 8:
      newContent = 
`/* 4. Show the title of books which have more than 10 units in stock. */
SELECT B.Title
FROM Books B
WHERE B.Quantity > 10;`
      break;
    
    case 9:
      newContent = 
`/* 5. Show the total price *lastname1 firstname1* has paid for the books */
SELECT CP.TotalPrice
FROM(
  /* Total Price for each customer */
  SELECT Customers.FirstName, Customers.LastName, SUM(Books.UnitPrice * OrderDetails.Quantity) AS TotalPrice
  FROM Customers
  JOIN Orders ON Customers.CustomerID = Orders.CustomerID
  JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
  JOIN Books ON OrderDetails.BookID = Books.BookID
  GROUP BY Customers.CustomerID
 ) AS CP
 WHERE CP.FirstName = 'firstname1' AND CP.LastName = 'lastname1';`
      break;
    
    case 10:
      newContent = 
`/* 6. Show the names of the customers who have paid less than $80 in totals. */
SELECT CP.FirstName, CP.LastName
FROM(
  /* Total Price for each customer */
  SELECT Customers.FirstName, Customers.LastName, SUM(Books.UnitPrice * OrderDetails.Quantity) AS TotalPrice
  FROM Customers
  JOIN Orders ON Customers.CustomerID = Orders.CustomerID
  JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
  JOIN Books ON OrderDetails.BookID = Books.BookID
  GROUP BY Customers.CustomerID
 ) AS CP
 WHERE CP.TotalPrice < 80;`
      break;
    
    case 11:
      newContent = 
`/* 7. Show the name of books supplied by *supplier2*. */
SELECT B.Title
FROM Books B
JOIN Suppliers S ON B.SupplierID = S.SupplierID
WHERE S.CompanyName = 'supplier2';`
      break;
    
    case 12:
      newContent = 
`/* 8. Show the total price each customer paid and their names. 
List the result in descending price.*/
SELECT Customers.FirstName, Customers.LastName, SUM(Books.UnitPrice * OrderDetails.Quantity) AS TotalPrice
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
JOIN Books ON OrderDetails.BookID = Books.BookID
GROUP BY Customers.CustomerID
ORDER BY TotalPrice DESC;`
      break;
    
    case 13:
      newContent = 
`/*9. Show the names of all the books shipped on 08/04/2016 and 
their shippers' names.*/
SELECT B.Title, S.ShipperName
FROM Orders O
JOIN OrderDetails OD ON OD.OrderID = O.OrderID
JOIN Books B ON OD.BookID = B.BookID
JOIN Shippers S ON S.ShipperID = O.ShipperID
WHERE O.ShippedDate = '2016-08-04';`
      break;
    
    case 14:
      newContent = 
`/*10. Show the unique names of all the books *lastname1 firstname1* and
*lastname4 firstname4* *both* ordered.*/
SELECT B.Title
FROM Orders O
JOIN OrderDetails OD ON OD.OrderID = O.OrderID
JOIN Customers C ON C.CustomerID = O.CustomerID
JOIN Books B ON OD.BookID = B.BookID
WHERE (C.FirstName = 'firstname1' AND C.LastName = 'lastname1')
   OR (C.FirstName = 'firstname4' AND C.LastName = 'lastname4')
GROUP BY B.BookID, B.Title
HAVING COUNT(DISTINCT C.CustomerID) = 2;`
      break;
    
    case 15:
      newContent = 
`/* 11. Show the names of all the books *lastname6 firstname6* was
responsible for. */
SELECT DISTINCT B.Title
FROM Employees E
JOIN Orders O ON E.EmployeeID = O.EmployeeID
JOIN OrderDetails OD ON O.OrderID = OD.OrderID
JOIN Books B ON OD.BookID = B.BookID
WHERE E.FirstName = 'firstname6' AND E.LastName = 'lastname6';`
      break;
    
  case 16:
      newContent = 
`/* 12. Show the names of all the ordered books and their total quantities. List the result in ascending quantity.*/
SELECT B.Title, SUM(OD.Quantity) as TotalQuantity
FROM Orders O
JOIN OrderDetails OD ON O.OrderID = OD.OrderID
JOIN Books B ON B.BookID = OD.BookID
GROUP BY B.Title
ORDER BY TotalQuantity ASC;`
      break;
    
  case 17:
      newContent = 
`/* 13. Show the names of the customers who ordered at least 2 books. */
SELECT DISTINCT C.FirstName, C.LastName
FROM Customers C
JOIN Orders O ON C.CustomerID = O.CustomerID
JOIN OrderDetails OD ON O.OrderID = OD.OrderID
JOIN Books B ON OD.BookID = B.BookID
WHERE OD.Quantity > 1;`
      break;
    
  case 18:
      newContent = 
`/* 14. Show the name of the customers who have ordered at least a book in
*category3* or *category4* and the book names.*/
SELECT C.FirstName,C.LastName, B.Title
FROM Customers C
JOIN Orders O ON C.CustomerID = O.CustomerID
JOIN OrderDetails OD ON OD.OrderID = O.OrderID
JOIN Books B ON B.BookID = OD.BookID
JOIN Subjects S ON S.SubjectID = B.SubjectID
WHERE S.CategoryName = 'category3' OR S.CategoryName = 'category4';`
      break;

  case 19:
      newContent = 
`/*15. Show the name of the customer who has ordered at least one book
written by *author1*.*/
SELECT C.FirstName, C.LastName
FROM Customers C
JOIN Orders O ON C.CustomerID = O.CustomerID
JOIN OrderDetails OD ON OD.OrderID = O.OrderID
JOIN Books B ON B.BookID = OD.BookID
WHERE B.Author = 'author1'
GROUP BY C.CustomerID
HAVING COUNT(*)>=1;`
      break;

  case 20:
      newContent = 
`/* 16. Show the name and total sale (price of orders) of each employee.*/
SELECT E.FirstName, E.LastName, SUM(B.UnitPrice * OD.Quantity) AS TotalSales
FROM Employees E
JOIN Orders O ON E.EmployeeID = O.EmployeeID
JOIN OrderDetails OD ON O.OrderID = OD.OrderID
JOIN Books B ON B.BookID = OD.BookID
GROUP BY E.EmployeeID;`
      break;

  case 21:
      newContent = 
`/* 17. Show the book names and their respective quantities for open
orders (the orders which have not been shipped) at midnight
08/04/2016. */
SELECT B.Title, OD.Quantity
FROM Orders O
JOIN OrderDetails OD ON O.OrderID = OD.OrderID
JOIN Books B ON OD.BookID = B.BookID
WHERE O.ShippedDate IS NULL
AND O.OrderDate <= '2016-08-04 00:00:00';`
      break;

  case 22:
      newContent = 
`/* 18. Show the names of customers who have ordered more than 1 book and
the corresponding quantities. List the result in the descending
quantity.*/
SELECT Customers.FirstName, Customers.LastName, SUM(OrderDetails.Quantity) AS TotalQuantity
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
GROUP BY Customers.CustomerID
HAVING COUNT(DISTINCT OrderDetails.BookID) > 1
ORDER BY TotalQuantity DESC;`
      break;

  case 23:
      newContent = 
`/* 19. Show the names of customers who have ordered more than 3 books and
their respective telephone numbers. */
SELECT C.LastName, C.FirstName, C.Phone
FROM Customers C
JOIN Orders O ON C.CustomerID = O.CustomerID
JOIN OrderDetails OD ON O.OrderID = OD.OrderID
GROUP BY C.LastName, C.FirstName, C.Phone
HAVING SUM(OD.Quantity) > 3;`
      break;
    
      default:
      newContent = "Please specify a valid number";
      console.log(contentNumber);
  }
  editor.setValue(newContent);
}
