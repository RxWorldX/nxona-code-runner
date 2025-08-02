let currentFile = 'index.html';
let files = {
  'index.html': '<h1>Hello Nxona</h1>',
  'script.js': 'console.log("Hello from JS");',
  'main.py': 'print("Hello from Python")'
};

let editor = CodeMirror(document.getElementById('editor'), {
  value: files[currentFile],
  mode: 'htmlmixed',
  lineNumbers: true
});

function openTab(name) {
  files[currentFile] = editor.getValue();
  currentFile = name;
  editor.setValue(files[name]);
  setMode(name);
}

function setMode(name) {
  if (name.endsWith('.js')) {
    editor.setOption('mode', 'javascript');
  } else if (name.endsWith('.py')) {
    editor.setOption('mode', 'python');
  } else {
    editor.setOption('mode', 'htmlmixed');
  }
}

function runCode() {
  const code = editor.getValue();
  const frame = document.getElementById('outputFrame');

  if (currentFile.endsWith('.js')) {
    frame.srcdoc = `<script>${code}<\/script>`;
  } else if (currentFile.endsWith('.html')) {
    frame.srcdoc = code;
  } else if (currentFile.endsWith('.py')) {
    frame.srcdoc = `<script type="text/python">${code}<\/script><script src="https://cdn.jsdelivr.net/npm/brython@3.11.3/brython.min.js"><\/script><script>window.onload = function() { brython(); }<\/script>`;
  }
}

document.getElementById('themeToggle').onclick = () => {
  document.body.classList.toggle('dark');
};
