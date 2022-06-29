const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../../config.js')
const {dateNow} =  require('../../../assets/js/helpers.js')

router.get('/', async (req, res) => {
  const id = req.query.id
  const offset = req.query.currentPage
  const count = req.query.countPage
  const startData = req.query['startData'] !== "" ?
    `&DateStart=${req.query['startData'].split('-').join('')}` :
    ""
  const endData = req.query['endData']!== "" ?
    `&DateEnd=${req.query['endData'].split('-').join('')}` :
    `&DateEnd=${dateNow().split('-').join('')}`

  const response = await axios(`${api}/GetPaymentByClient/${id}?offset=${offset}&count=${count}${startData}${endData}`, {
    auth: {username: username, password: password}
  })

  return res.json(response.data)
})

module.exports = router
