import { Application, Router } from '$oak/mod.ts'
import { tryUtil } from './utils/try-util.ts'

const router = new Router()

router.get('/', ctx => {
  return (ctx.response.body = `
    <html>
      <head>
      <title>Deno Oak Boilerplate</title>
      </head>
      <body>
        <h1>
          Deno Oak Boilerplate
        </h1>
        <script>
          console.log('Deno Oak Boilerplate')
        </script>
      </body>
    </html>
  `)
})

router.get('/api/heart', ctx => {
  return (ctx.response.body = { heart: 'beating' })
})

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

const signal = new AbortController()

tryUtil(app.listen({ port: 8000, signal: signal.signal }))
