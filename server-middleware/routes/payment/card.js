const {Router} = require('express')
const router = Router()
const axios = require('axios')
const crypto = require('crypto')
const qs = require('querystring')
const {api, username, password, expressApiKey, expressApi} = require('../../config.js')

router.post('/', async (req, res) => {
  const num = req.body.num
  const sum = req.body.sum
  const cur = req.body.cur
  const info = req.body.info

  let nowDate =new Date();
  nowDate.setMonth(nowDate.getMonth() + 1)
  let stringNowDate = nowDate.toISOString().slice(0,10).replace(/-/g,"");
  const secret = ''

  // параметры
  const params = {
    "serviceid": 5735,
    "accountno": String(num),
    "amount": String(sum),
    "currency": String(cur),
    "expiration": String(stringNowDate),
    "info": String(info),
    "surname": "",
    "firstname": "",
    "patronymic": "",
    "city": "",
    "street": "",
    "house": "",
    "building": "",
    "apartment": "",
    "isnameeditable": "",
    "isaddresseditable": "",
    "isamounteditable": "",
    "emailnotification": "",
    "smsphone": "",
    "returntype": "json",
    "returnurl": "http://site.standart.by",
    "failurl": "http://site.standart.by",
    "returninvoiceurl": 1
  }

  // формирование сигнатуры
  const signa = getSignature(expressApiKey, params, secret)
  // вписывание сигнатуры в параметры
  params["signature"] = signa

  const response = await axios({
    method: "post",
    url: `${expressApi}/web_cardinvoices`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(params),
  })
  const data = response.data
  return res.json(data)
})

// функция формирования сигнатуры
function getSignature(token, params, secretWord) {
  const normalizedParams = params;

  const arrSet = [
    "serviceid",
    "accountno",
    "amount",
    "currency",
    "expiration",
    "info",
    "surname",
    "firstname",
    "patronymic",
    "city",
    "street",
    "house",
    "building",
    "apartment",
    "isnameeditable",
    "isaddresseditable",
    "isamounteditable",
    "emailnotification",
    "smsphone",
    "returntype",
    "returnurl",
    "failurl",
    "returninvoiceurl"
  ]

  let result = token;

  for(let param in arrSet) {
    result += normalizedParams[arrSet[param]]
  }

  return crypto.createHmac('sha1', secretWord).update(result, 'utf8').digest('hex').toUpperCase()
}

module.exports = router
