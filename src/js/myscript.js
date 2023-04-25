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
          newContent = 'SHOW TABLES;';
          break;
        case 1:
          newContent = 'SELECT * FROM Books;';
          break;
        default:
          newContent = "Please specify a valid number";
          console.log(contentNumber);
      }
    editor.setValue(newContent);
}
