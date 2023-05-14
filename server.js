const app = require("express")();

app.get("/", (req, res) => {
  res.send("Test");
});

app.listen(3000, () => {
  console.log("Radi");
});
