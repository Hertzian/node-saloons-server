const Event = require('../../models/Event')

// @desc    events view
// @route   GET /events/
// @access  Private
exports.eventView = (req, res, next) => {
  res.render('pages/events/events',{
    eventActive: true
  })
}

// @desc    events data
// @route   GET /events/events
// @access  Private
exports.getEvents = async (req, res, next) => {
  try {
    const events = await Event.find()

    console.log(events)
    res.status(200).json(events)
    
  } catch (err) {
    console.log(err)
  }
}

// @desc    new event
// @route   GET /events/new-event
// @access  Private
exports.newEvent = async (req, res, next) => {
  try {
    const event = await Event.create({req.body})

    res.redirect('')
  } catch (err) {
    
  }
}