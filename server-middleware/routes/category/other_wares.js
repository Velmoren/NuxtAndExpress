const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../../config.js')

router.get('/', async (req, res) => {
  const response = await axios(`${api}/StandartsByType/66784aac-577c-11e7-bc71-c4e98402e535`, {
    auth: {username: username, password: password}
  })

  return res.json(response.data)
})

module.exports = router
