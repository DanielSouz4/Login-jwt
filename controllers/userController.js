const userController = {
  register: (req, res) => {
    console.log('register')
    res.send('register')
  },

  login: (req, res) => {
    console.log('login')
    res.send('login')
  }
}

module.exports = userController
