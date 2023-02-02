const { sequelize } = require("./models/")
sequelize.sync({ force: true })

require("dotenv").config()
const express = require("express")
const chalk = require("chalk")

const app = express()
app.use(express.json())

// app.use(notFoundMiddleware)
// app.use(errorMiddleware)

const port = process.env.PORT || 8000
app.listen(port, () =>
  console.log(chalk.cyanBright.bold.italic.underline(`server running on port: ${port}`))
)
