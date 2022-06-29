const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../../config.js')

router.post('/', async (req, res) => {
  const order = req.body.data

  const response = await axios({
    method: "post",
    url: `${api}/Order`,
    auth: {
      username: username,
      password: password,
    },
    data: order,
  })

  const data = response.data
  return res.json(data)
})

module.exports = router
