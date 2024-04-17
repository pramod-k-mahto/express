const express = require("express");
require("dotenv").config();

const app = express();
const port =3000;

app.get("/", (req, res) => {
  res.json({ Name: "Pramod" });
});

app.listen(process.env.PORT, () => {
  console.log("App is listing port 3000");
});
