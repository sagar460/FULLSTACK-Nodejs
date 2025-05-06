//hami ya database connection ko code /logic lekhcham

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres.snabnwpfivnoaqbtjwpi:Itachi@123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authentication done,connected database");
  })
  .catch((err) => {
    console.log(err);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.books = require("./models/book.model.js")(sequelize, DataTypes);
db.users = require("./models/user.model.js")(sequelize, DataTypes);
db.products = require("./models/product.model.js")(sequelize, DataTypes);

//migrate code chai yo ho hai
sequelize.sync({ force: false }).then(() => {
  console.log("Migrate successfully done");
});
module.exports = db;
