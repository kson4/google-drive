const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const documents = [];
let id = 1;
// module.export = { documents };

app.get("/", (req, res) => {
  res.render("index", { documents: documents });
});
app.post("/index", (req, res) => {
  const document = {
    id: id,
    type: req.body.document,
    title: "new document",
  };
  id++;
  // documents.push(req.body.newDocument);
  documents.push(document);
  console.log(req.body);
  res.redirect("/");
  console.log(documents);
});
app.get("/:id", (req, res) => {
  res.render("document");
});

app.listen(5001, () => {
  console.log("Listening on port: 5000...");
});
