const express = require('express')
const app = express()
const Homo = require('../../packages/core/lib')

const homo = new Homo({
  mode: 'development'
  // mode: 'production'
})

async function start () {

  await homo.setup()

  if (homo.isProd) {
    app.get('/_homo_/*', (req, res, ...args) => {
      req.url = req.url.replace(/^\/_homo_/, '')
      express.static('dist', {
        dotfiles: 'allow',
        index: false
      })(req, res, ...args)
    })
  }

  app.use(express.static('public', { index: false }))

  app.get('*', (req, res) => {
    homo.render(req, res)
  })

  app.listen(9999, () => console.log('Server running at: http://127.0.0.1:9999')) // eslint-disable-line
}

start()
