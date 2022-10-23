const documentTextArea = document.querySelector("#document-text-area");
console.log(documentTextArea);
documentTextArea.addEventListener("change", (e) => {
  console.log(e);
  console.log(documentTextArea.value);
});

console.log(ex.document);
