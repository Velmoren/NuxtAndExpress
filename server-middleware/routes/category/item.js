const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../../config.js')


router.get('/', async (req, res) => {
  const id = req.query.id
  const current = req.query.currentPage
  const count = req.query.countPage

  const response = await axios(`${api}/Standart/${id}?offset=${current}&count=${count}`, {
    auth: {username: username, password: password}
  })

  return res.json(response.data)
})

module.exports = router
