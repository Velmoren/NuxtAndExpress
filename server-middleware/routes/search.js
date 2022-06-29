const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../config.js')

router.get('/', async (req, res) => {
  const str = req.query.str

  const response = await axios(encodeURI(`${api}/Search/${str}`), {
    auth: {username: username, password: password}
  })
  const data = response.data
  return res.json(data)
})

module.exports = router
