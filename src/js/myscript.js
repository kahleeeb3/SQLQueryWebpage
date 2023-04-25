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
      newContent = 'SELECT * FROM Books;';
      break;
    case 3:
      newContent = 'DROP TABLE Books, Customers, Employees, OrderDetails, Orders, Shippers, Subjects, Suppliers;';
      break;
    default:
      newContent = "Please specify a valid number";
      console.log(contentNumber);
  }
  editor.setValue(newContent);
}
