const getUrlImage = (url) => {
   return "http://pic.standart.by/" + url.substr(12).replace(/\\/gi, '/')
}

const dateNow = () => {
  const today = new Date()
  return today.toISOString().slice(0, 10)
}

module.exports = {getUrlImage, dateNow}

