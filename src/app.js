// const { Category } = require("./models")
// Category.sync({ alter: true })

require("dotenv").config()
const express = require("express")
const chalk = require("chalk")
const morgan = require("morgan")
const cors = require("cors")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const authRoute = require("./routes/auth-route")
const tableRoute = require('./routes/table-route')
const notFoundMiddleware = require("./middlewares/not-found")
const errorMiddleware = require("./middlewares/error");
const authenticate = require("./middlewares/authenticate");

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10000, // Limit each IP to 10000 requests per `window`
  })
)
app.use(helmet())
app.use(express.json())

app.use("/auth", authRoute)
app.use('/table',authenticate, tableRoute)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 8000
app.listen(port, () =>
  console.log(
    chalk.cyanBright.bold.italic.underline(
      `server running on port: ${port}`
    )
  )
)
