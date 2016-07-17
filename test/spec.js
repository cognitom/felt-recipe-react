import test from 'ava'
import Nightmare from 'nightmare'
import server from 'felt/lib/server'
import configBuilder from 'felt/lib/config-builder'
import recipeReact from '../felt.config.js'

test('renders React components', async function(t) {
  const
    port = 3333,
    opts = configBuilder(recipeReact, { src: 'fixture', port, debug: true }),
    url = `http://localhost:${ port }/index.html`,
    myServer = await server(opts),
    text = await Nightmare()
      .goto(url)
      .wait()
      .evaluate(() => document.querySelector('h1').innerText)
      .end()

  t.is(text, 'Hi from DummyComponent.')
  myServer.close()
})
