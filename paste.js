target.addEventListener("paste", (event) => {
  let paste = (event.clipboardData || window.clipboardData).getData("text");
  paste = paste.toUpperCase();

  const selection = window.getSelection();
  if (!selection.rangeCount) return false;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(paste));

  event.preventDefault();
});
