const express = require("express");
const app = express();
require("./database/connection.js");

app.get("/books", function (req, res) {
  //logic to fetch books from database
  res.json({
    message: "Books fetched successfully",
  });
});
app.post("/books", function (req, res) {
  //logic to add new books to database
  res.json({
    message: "Books added successfully",
  });
});
app.patch("/books/:id", function (req, res) {
  res.json({
    message: "book updated successfully",
  });
});

app.listen(3000, function () {
  console.log("server has started at port 3000");
});

// DATABASE_URL="postgresql://postgres.snabnwpfivnoaqbtjwpi:Itachi@123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
