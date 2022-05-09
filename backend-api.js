let parentId = "";
(async function () {
  try {
    let remnoteAuth = await getRemNoteAuth();
    let data = { ...remnoteAuth, name: "On Writing Well" };
    let res = await fetch("https://api.remnote.com/api/v0/get_by_name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(res.type);
    }
    let note = await res.json();
    parentId = note._id;
  } catch (err) {
    console.log(err);
  }
})();

async function createRem() {
  let remnoteAuth = await getRemNoteAuth();
  let data = {
    ...remnoteAuth,
    parentId,
    text: `my new 
    rem`,
    addToEditLater: true,
  };
  let res = await fetch("https://api.remnote.com/api/v0/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(res.type);
  }
  let note = await res.json();
  console.log(note.remId ?? "note id not found");
}
