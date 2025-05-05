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

module.exports = db;
