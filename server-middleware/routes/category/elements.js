const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../../config.js')


router.get('/', async (req, res) => {
  const response = await axios(`${api}/StandartsByType/145ad2fc-394b-11e9-9fa8-00155d0e072e`, {
    auth: {username: username, password: password}
  })

  return res.json(response.data)
})

module.exports = router
