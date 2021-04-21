module.exports = {
  createSuccess: (message, data) => {
    return {
      status: "Success",
      message: message,
      data: data,
    }
  },
  createFailed: (message, data) => {
    return {
      status: "Failed",
      message: message,
    }
  },
  createError: (errorName, message) => {
    const error = new Error(message)
    error.name = errorName

    return error
  },
}