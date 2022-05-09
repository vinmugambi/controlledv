async function getCurrentDocument() {
  return await RemNoteAPI.v0.get_context();
}

document.addEventListener("paste", async (event) => {
  let paste = (event.clipboardData || window.clipboardData).getData("text");
  paste = paste.toUpperCase();

  const selection = window.getSelection();
  if (!selection.rangeCount) return false;
  selection.deleteFromDocument();
  console.log(paste);
  console.log(window.parent)
  console.log(window.parent.document)
//   let rem = await getCurrentDocument();
//   await RemNoteAPI.v0.create(paste, rem.remId);
  event.preventDefault();
});
