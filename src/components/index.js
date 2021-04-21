const route = require("express").Router()

const routeList = {
  "movie": "movie/movieAPI",
}

for (const item in routeList) {
  route.use("/" + item, require("../../src/components/" + routeList[item]))
}

module.exports = route
