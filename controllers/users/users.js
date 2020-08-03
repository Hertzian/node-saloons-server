
// @desc    profile view
// @route   GET /users/profile
// @access  Private
exports.profileView = (req, res, next) => {
  res.render('pages/users/users')
}