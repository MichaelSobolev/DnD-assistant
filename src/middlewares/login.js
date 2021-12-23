const checkRegister = (req, res, next) => {
  console.log(req.session)
  if (!req.session.userId) {
    res.redirect('/user/login')
  }

  next()
}

module.exports = checkRegister
