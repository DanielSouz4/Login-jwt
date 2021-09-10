const User = require('../models/User')
const bcrypt = require('bcryptjs')

const userController = {
  register: async (req, res) => {
    const selectedUser = await User.findOne({ email: req.body.email })
    if (selectedUser) {
      return res.status(400).send('Email already exists')
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password)
    })

    try {
      const savedUser = await user.save()
      res.send(savedUser)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  login: (req, res) => {
    console.log('login')
    res.send('login')
  }
}

module.exports = userController
