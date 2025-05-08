const {
  fetchBooks,
  addBook,
  deleteBook,
  updateBook,
  fetchSingleBook,
} = require("../controllers/bookController");

const router = require("express").Router();

router.route("/books").get(fetchBooks).post(addBook);
router
  .route("/books/:id")
  .delete(deleteBook)
  .patch(updateBook)
  .get(fetchSingleBook);

// router.get("books",fetchBooks);
// router.post("books",addBook)    can be done this way too

module.exports = router;
