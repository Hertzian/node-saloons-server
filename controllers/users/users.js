const User = require("../../models/User")

// @desc    profile view
// @route   GET /users/profile
// @access  Private
exports.profileView = async (req, res, next) => {
  try {
    const user = await User.findById({_id: req.user.id}).lean()

    if(user) return res.render('pages/users/profile', {user, userActive: true})

    res.render('pages/users/profile')
    
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
    let {name, email, phone, password, password2, about, picprofile} = req.body
    console.log(req.body)
    let editedPass;
    if(password && password === password2) {
      editedPass = password
    }else{
      editedPass = req.user.password
    }

    await User.findOneAndUpdate(
      {_id: req.user.id},
      {name, email, phone, password: editedPass, about, picprofile},
      {new: true, runValidators: true}
    )    

    req.flash('success', 'Tu perfil se editó correctamente')
    res.redirect('/users/profile')
  } catch (err) {
    console.log(err)
    req.flash('error', 'Ocurrió un error')
    res.redirect('/users/profile')
  }
}