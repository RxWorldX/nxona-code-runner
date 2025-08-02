let editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  mode: "htmlmixed",
  autoCloseBrackets: true,
  theme: "default",
});
let currentLang = "html";

function onFilenameChange() {
  const filename = document.getElementById("filename").value;
  if (filename.endsWith(".js")) {
    editor.setOption("mode", "javascript");
    currentLang = "js";
    document.getElementById("language-icon").innerText = "🟨";
  } else if (filename.endsWith(".py")) {
    editor.setOption("mode", "python");
    currentLang = "py";
    document.getElementById("language-icon").innerText = "🐍";
  } else {
    editor.setOption("mode", "htmlmixed");
    currentLang = "html";
    document.getElementById("language-icon").innerText = "🌐";
  }
}

function runCode() {
  const code = editor.getValue();
  const output = document.getElementById("output");
  if (currentLang === "html" || currentLang === "js") {
    output.srcdoc = currentLang === "js" ? `<script>${code}</script>` : code;
  } else if (currentLang === "py") {
    output.srcdoc = `<script type="text/python">${code}</script><script src="https://cdn.jsdelivr.net/npm/brython@3.11.0/brython.min.js"></script><script>window.onload=brython</script>`;
  }
}

function saveCode() {
  localStorage.setItem("code-" + currentLang, editor.getValue());
  alert("Saved!");
}

function downloadCode() {
  const a = document.createElement("a");
  const blob = new Blob([editor.getValue()], { type: "text/plain" });
  a.href = URL.createObjectURL(blob);
  a.download = document.getElementById("filename").value || "code.txt";
  a.click();
}

function clearCode() {
  editor.setValue("");
}

function copyCode() {
  navigator.clipboard.writeText(editor.getValue());
}

function toggleTheme() {
  const dark = editor.getOption("theme") === "material-darker";
  editor.setOption("theme", dark ? "default" : "material-darker");
}
