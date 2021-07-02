if (typeof document !== "undefined") {
  const code = ':root{--grey-0: #101010;--grey-1: #222222;--grey-1: #353535;--white: #ffffff}.auto-theme{--bg: var(--grey-0);--text-color: var(--white)}html,body,#root,.app{font-family:"Roboto",sans-serif;margin:0;height:100%;overflow:hidden;background-color:var(--bg);color:var(--text-color)}.app{display:flex;flex-direction:column;justify-content:center;text-align:center}.app h1{font-weight:300}.invisible{opacity:0}.animation-500ms-ease-in{transition:all 500ms ease-in}.animation-500ms-ease-out{transition:all 500ms ease-out}@media(prefers-color-scheme: light){.auto-theme{--bg: var(--white);--text-color: var(--grey-0)}}';
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = "text/css";
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}