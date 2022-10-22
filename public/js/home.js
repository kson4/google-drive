// const documents = require("../../server.js");

const addButtonList = document.querySelector(".add-button-lists");

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", () => {
  // console.log("clicked");
  // addButton.style.backgroundColor = "red";
  addButtonList.style.zIndex = 2;
  addButtonList.style.visibility = "visible";
  addButtonList.style.pointerEvents = "auto";
});
