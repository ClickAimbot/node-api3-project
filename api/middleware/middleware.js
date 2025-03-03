const User = require('../users/users-model')

function logger(req, res, next) {
  const timestamp = new Date().toLocaleString()
  const method = req.method
  const url = req.originalUrl
  console.log(`[${timestamp}] ${method} to ${url}`)
  next()
}

async function validateUserId(req, res, next) {
  try {
    const { id } = req.params
    const user = await User.getById(id)
    if (!user) {
      res.status(400).json({
        message: "user not found",
      })
    } else {
      req.user = user
      next()
    }
  } catch (err) {
    res.status(500).json({
      message: "problem finding user",
    })
  }
}

function validateUser(req, res, next) {
  const { name } = req.body
  if (!name || !name.trim()) {
    res.status(400).json({
      message: "missing required name field",
    })
  } else {
    req.name = name.trim()
    next()
  }
}

function validatePost(req, res, next) {
  const { text } = req.body
  if (!text || !text.trim()) {
    res.status(400).json({
      message: "missing required text field",
    })
  } else {
    req.text = text.trim()
    next()
  }
  next()
}

module.exports = { logger, validateUserId, validateUser, validatePost }
