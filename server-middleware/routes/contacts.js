const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../config.js')

router.get('/', async (req, res) => {
  const response = await axios(`${api}/GetOrganization`, { auth: {username: username, password: password} })

  return res.json(response.data)
})

module.exports = router
