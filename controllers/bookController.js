const { books } = require("../database/connection");

exports.fetchBooks = async function (req, res) {
  //logic to fetch books from database
  const data = await books.findAll();
  res.json({
    message: "Books fetched successfully",
    data,
  });
};

exports.addBook = async function (req, res) {
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
};

exports.deleteBook = async function (req, res) {
  const id = req.params.id; //const {id}=req.params
  try {
    const deleted = await books.destroy({
      where: { id: id },
    });
    if (deleted) {
      res.json({ message: "Book deleted successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

exports.updateBook = async function (req, res) {
  const id = req.params.id;
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  await books.update(
    { bookName, bookPrice, bookAuthor, bookGenre },
    {
      where: {
        id, //same key and value
      },
    }
  );
  res.json({
    message: "book updated successfully",
  });
};

exports.fetchSingleBook = async function (req, res) {
  const id = req.params.id;
  const data = await books.findByPk(id); //always returns object
  // const data = await books.findAll({
  //   where: {
  //     id: id,
  //   },
  // });
  res.json({
    message: "Single book fetched successfully",
    data,
  });
};
