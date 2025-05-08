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
  res.json({
    message: "book updated successfully",
  });
};

exports.updateBook = async function (req, res) {
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
