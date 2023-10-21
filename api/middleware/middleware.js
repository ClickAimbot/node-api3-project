function logger(req, res, next) {
  const timestamp = new Date().toLocaleString()
  const method = req.method
  const url = req.originalUrl
  // console.log(`[${timestamp}] ${method} to ${url}`)
  next()
}

function validateUserId(req, res, next) {
  next()
}

function validateUser(req, res, next) {
  next()
}

function validatePost(req, res, next) {
  next()
}

module.exports = { logger, validateUserId, validateUser, validatePost }
