const chalk = require("chalk")

module.exports = (req, res, next) => {
  console.log(chalk.redBright("status(404) resource not found on this server"));
  res
    .status(404)
    .json({ message: "resource not found on this server" });
};
