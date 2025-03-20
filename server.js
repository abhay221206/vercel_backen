import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is start port no : 5000");
});

app.listen(5000, () => {
  console.log("server is started");
});
