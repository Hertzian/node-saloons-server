const User = require("../../models/User")

// @desc    profile view
// @route   GET /users/profile
// @access  Private
exports.profileView = async (req, res, next) => {
  try {
    const user = await User.findById({_id: req.user.id}).lean()

    if(user) return res.render('pages/users/profile', {user, userActive: true})

    res.render('pages/users/profile',)
    
  } catch (err) {
    console.log(err)
    req.flash('error', 'Ocurrió un error')
    res.redirect('/users/profile')
  }
}

// @desc    profile process
// @route   POST /users/profile
// @access  Private
exports.profile = async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
      {_id: req.user.id},
      req.body,
      // {new: true, runValidators: true}
    )    

    req.flash('success', 'Tu perfil se editó correctamente')
    res.redirect('/users/profile')
  } catch (err) {
    console.log(err)
    req.flash('error', 'Ocurrió un error')
    res.redirect('/users/profile')
  }
}