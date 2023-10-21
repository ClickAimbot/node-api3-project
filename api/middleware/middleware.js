function logger(req, res, next) {
  // DO YOUR MAGIC
}

async function validateUserId(req, res, next) {
  try {
    const { id } = req.params
    const user = await Users.getById(id)
    if (!user) {
      res.status(404).json({
        message: 'user not found',
      })
    } else {
      req.user = user
      next()
    }
  } catch (err) {
    next(err)
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

module.exports = { logger, validateUserId, validateUser, validatePost }
