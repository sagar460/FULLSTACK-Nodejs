const express = require("express");

const { books } = require("./database/connection.js");
const {
  fetchBooks,
  addBook,
  deleteBook,
  updateBook,
  fetchSingleBook,
} = require("./controllers/bookController.js");

const app = express();
require("./database/connection.js");

const bookRoute = require("./routes/bookRoute.js");

app.use(express.json());

app.use("/api/", bookRoute);

// app.get("/books", fetchBooks);
// app.post("/books", addBook);
// app.delete("/books/:id", deleteBook);
// app.patch("/books/:id", updateBook);

app.listen(3000, function () {
  console.log("server has started at port 3000");
});

// DATABASE_URL="postgresql://postgres.snabnwpfivnoaqbtjwpi:Itachi@123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
