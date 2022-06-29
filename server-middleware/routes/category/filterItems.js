const {Router} = require('express')
const router = Router()
const axios = require('axios')
const {api, username, password} = require('../../config.js')


router.get('/', async (req, res) => {
  const id = req.query.id
  const current = req.query.currentPage
  const count = req.query.countPage
  const mat = req.query.mat
  const cov = req.query.cov
  const dimA = req.query.dimA
  const dimB = req.query.dimB

  await axios.get(`${api}/Standart/${id}?mat=${mat}&cov=${cov}&form=&dimA=${dimA}&dimB=${dimB}&dimC=&offset=${current}&count=${count}`, {
    auth: {username: username, password: password}
  }).then(response => {
    return res.json(response.data)
  }).catch(e => {
    return res.status(200).send('Товар отсутствует')
  })
})

module.exports = router
