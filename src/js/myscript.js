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
    default:
      newContent = "Please specify a valid number";
      console.log(contentNumber);
  }
  editor.setValue(newContent);
}
