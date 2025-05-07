const express = require("express");
const { books } = require("./database/connection.js");
const app = express();
require("./database/connection.js");

app.use(express.json());

app.get("/books", async function (req, res) {
  //logic to fetch books from database
  const datas = await books.findAll();
  res.json({
    message: "Books fetched successfully",
    datas,
  });
});
app.post("/books", async function (req, res) {
  //logic to add new books to database goes here..
  //console.log(req.body)
  //const bookName=req.body.bookName
  //const bookPrice=req.body.bookPrice
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  await books.create({
    bookName,
    bookPrice,
    bookAuthor,
    bookGenre,
  });
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
