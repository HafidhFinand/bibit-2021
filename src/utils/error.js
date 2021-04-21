/**
 * Generic mysql connection error
 */
class ConnectionError extends Error {
  constructor(message) {
    super(message)

    this.message = message
  }
}

class DataBaseError extends Error {
  constructor(message) {
    super(message)

    this.message = message
  }
}

module.exports = { ConnectionError, DataBaseError }

