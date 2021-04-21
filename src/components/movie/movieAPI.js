const route = require("express").Router()

const movieServices = require("./movieServices")

route.get("/search", (req, res, next) => {

  const searchParameter = {
    title: req.query.title ? req.query.title : "",
    year: req.query.year ? req.query.title : "",
    plot: req.query.plot ? req.query.plot : ""
  }

  movieServices.search(searchParameter, (error, result) => {
    if (error) {
      next(error)
    } else {
      console.log("Successfully Find Movie by Search Item")
      res.status(200).send(result)
    }
  })
})

route.get("/", (req, res, next) => {

  const searchParameter = {
    id: req.query.id ? req.query.id : "",
    plot: req.query.plot ? req.query.plot : ""
  }

  movieServices.findById(searchParameter, (error, result) => {
    if (error) {
      next(error)
    } else {
      console.log("Successfully Find Movie by Search Item")
      res.status(200).send(result)
    }
  })
})

module.exports = route