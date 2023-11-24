import jsonServer from 'json-server'
import cors from 'cors'
import crypto from 'node:crypto'

const server = jsonServer.create()
const router = jsonServer.router('./src/backend/db.json')
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)
server.use(cors())

server.post("/login", (req, res) => {
  const { usuario, senha } = req.body

  const user = router.db.get('usuarios').find({ usuario, senha }).value()
  console.log(req.body)

  if (!user) {
    res.status(401).json({ error: 'Usuário não autenticado' })
    return
  }

  const token = crypto.randomUUID()

  res.status(200).json({ token })
})

server.use(middlewares)
server.use(router)

server.listen(3001, () => {
  console.log('JSON Server is running')
})