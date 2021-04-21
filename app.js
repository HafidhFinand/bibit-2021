require("module-alias/register")

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  require("dotenv").config()
}

const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const cors = require("cors")
const errorHandler = require("./src/middlewares/errorHandler.js")
const morgan = require("morgan")
const indexRoutes = require("./src/components/index.js")

app.use(morgan("tiny"))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/", indexRoutes)
// app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})
