const express = require("express");
const bookRoute = require("./routes/bookRoute.js");
const cors = require("cors");

const app = express();
require("./database/connection.js");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

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
