const chalk = require("chalk");

module.exports = (err, req, res, next) => {
  console.log(chalk.bgRedBright(err));
  if (err.name === "ValidationError") {
    err.statusCode = 400;
  } else if (err.name === "TokenExpiredError") {
    err.statusCode = 401;
  } else if (err.name === "JsonWebTokenError") {
    err.statusCode = 401;
  } else if (err.name === "SequelizeForeignKeyConstraintError") {
    err.statusCode = 400
  }
  console.log(chalk.magentaBright.italic(`Error: (${err.statusCode}) message: ${err.message}`));

  res.status(err.statusCode || 500).json({ message: err.message });
};
