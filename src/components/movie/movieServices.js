const { createSuccess } = require("@utils/response.js")
const getData = require("@utils/axios.js")


module.exports = {
  search: async (searchItems, cb) => {
    try {
      getData(searchItems, (error, result) => {
        if (error) {
          cb(error, null)
        } else {
          const response = {
            search: result
          }
          cb(null, response)
        }
      })

    } catch (error) {
      console.log(error)
      cb(error, null)
    }
  },
  findById: async (searchItems, cb) => {
    try {
      getData(searchItems, (error, result) => {
        if (error) {
          cb(error, null)
        } else {
          const response = { movie: result }
          cb(null, response)
        }
      })
    } catch (error) {
      console.log(error)
      cb(error, null)
    }
  }
}