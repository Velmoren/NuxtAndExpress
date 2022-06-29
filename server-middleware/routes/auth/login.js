const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../../config.js')

router.get('/', async (req, res) => {
  const login = req.query.login
  const pass = req.query.password

  const response = await axios(`${api}/ClientLogin/${login}/${pass}`, {
    auth: {username: username, password: password}
  })

  return res.json(response.data)
})

module.exports = router
