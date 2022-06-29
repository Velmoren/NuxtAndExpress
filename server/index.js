const express = require('express')
const consola = require('consola')
const dotenv = require('dotenv')
const { Nuxt, Builder } = require('nuxt')

dotenv.config()

const app = express()

const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(nuxt.render)

  app.listen(port, host)

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
}

start().then()

module.exports = app;
