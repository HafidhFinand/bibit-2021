const httpStatus = require("http-status-codes")
const { createFailed } = require("@utils/response.js")

module.exports = (err, req, res, next) => {
  switch (err.name) {
    case "Bad Request":
      res.status(httpStatus.BAD_REQUEST).send(responseUtils.failed(err.message))
      break
    case "Unauhtorized":
      res
        .status(httpStatus.UNAUTHORIZED)
        .send(responseUtils.failed(err.message))
      break
    case "SequelizeDatabaseError":
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(responseUtils.failed(err.message))
      break
    case "Not Found":
      res.status(httpStatus.NOT_FOUND).send(responseUtils.failed(err.message))
      break
    default:
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(responseUtils.failed(err.message))
  }
}
