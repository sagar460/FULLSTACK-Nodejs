const {
  fetchBooks,
  addBook,
  deleteBook,
  fetchSingleBook,
  updateBook,
} = require("../controllers/bookController");

const router = require("express").Router();

router.route("/").get(fetchBooks).post(addBook);
router.route("/:id").delete(deleteBook).patch(updateBook).get(fetchSingleBook);

// router.get("/books",fetchBooks)
// router.post("/books",addBook)
// router.delete("/books",deleteBook) another way of doing it

module.exports = router;
