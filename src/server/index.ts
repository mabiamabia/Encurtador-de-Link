import express from 'express'
import cors from 'cors'
import { URLController } from '../../controllers/URLController'
import { MongoConnection } from '../../database/MongoConnection'

const api = express()

// Middlewares
api.use(cors())
api.use(express.json())

// Conectar ao MongoDB
const mongoConnection = new MongoConnection()
mongoConnection.connect()

// Rotas
const urlController = new URLController()
api.post("/api/shorten", urlController.shorten)
api.get("/api/:hash", urlController.redirect)

// Rota de teste da API
api.get("/api", (req, res) => {
    res.json({ message: "Encurtador de Links API funcionando!" })
})

// Servir arquivos estáticos do frontend
api.use(express.static('public'))

// Rota para o frontend
api.get("/", (req, res) => {
    res.sendFile('public/index.html', { root: '.' })
})

api.listen(5000, () => console.log('🚀 Servidor rodando na porta 5000'))
