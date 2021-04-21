const axios = require("axios")

const { createError } = require("@utils/response.js")

const url = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`

 function getData(searchItems, cb) {
   axios.get(url, {
    params: {
      t: searchItems.title,
      y: searchItems.year,
      plot: searchItems.plot,
      i: searchItems.plot
    },
  }).then(({ data }) => {
    cb(null, data)
  }).catch(err => {
    console.log(err)
    throw createError(err.name, err.message)
  })
}

module.exports = getData