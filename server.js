const app = require("express")();

app.get("/", (req, res) => {
  res.send("Test");
});

app.get("/aidin", (req, res) => {
  res.send("Aidin");
});

app.listen(3000, () => {
  console.log("Radi");
});
