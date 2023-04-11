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

// intercept form submissions
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  var mysql = document.getElementById('sql').value;
  runSQL(mysql);
  modifyDiv(mysql);
});

// allows for modifying the content of the "sqlResult"
function modifyDiv(newContent) {
  document.getElementById("sqlResult").innerHTML = newContent;
  return 0;
}

// Changes editor content with use of button
function changeTextAreaContent(contentNumber) {
    var newContent; // where the new content will be stored
    switch (contentNumber) {
        case 0:
          newContent = 'SHOW TABLES;';
          break;
        default:
          newContent = "Please specify a valid number";
          console.log(contentNumber);
      }
    editor.setValue(newContent);
}
