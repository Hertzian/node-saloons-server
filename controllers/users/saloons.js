// @desc    saloons view
// @route   GET /saloons
// @access  Private
exports.saloonsView = (req, res, next) => {
  res.render('pages/saloons/saloons')
}