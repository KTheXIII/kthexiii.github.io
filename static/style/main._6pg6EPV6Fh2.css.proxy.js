// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root {\n  --grey-0: #101010;\n  --grey-1: #222222;\n  --grey-1: #353535;\n  --white: #ffffff;\n}\n\n.auto-theme {\n  --bg: var(--grey-0);\n  --text-color: var(--white);\n}\n\nhtml,\nbody,\n#root,\n.app {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n  font-weight: 300;\n  background-color: var(--bg);\n  color: var(--text-color);\n}\n\n.app {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n@media (prefers-color-scheme: light) {\n  .auto-theme {\n    --bg: var(--white);\n    --text-color: var(--grey-0);\n  }\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}