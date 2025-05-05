//books,bookName,bookAuthor,bookPrice,bookGenre

const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookAuthor: {
      type: DataTypes.STRING,
      defaultValue: "Lucifer",
    },
    bookGenre: {
      type: DataTypes.STRING,
      defaultValue: "All",
    },
  });
  return Book;
};
module.exports = bookModel;
// export default bookModel
