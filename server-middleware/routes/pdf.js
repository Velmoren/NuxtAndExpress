const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password, base_url} = require('../config.js')


router.get('/', async (req, res) => {
  const id = req.query.id

  const response = await axios(encodeURI(`${api}/GetOrderInvoice/${id}`), {
    auth: {username: username, password: password}
  })


  const data = response.data

  if (data['Invoice']) {
    data['Invoice'] = base_url + data['Invoice'].substr(12).replace(/\\/gi, '/')
  }

  return res.json(data)
})

module.exports = router
