import express from 'express'
import cors from 'cors'
import path from 'path'
import { URLController } from '../../controllers/URLController'
import { MongoConnection } from '../../database/MongoConnection'

const api = express()

// Middlewares
api.use(cors())
api.use(express.json())

// Conectar ao MongoDB
const mongoConnection = new MongoConnection()
mongoConnection.connect()

// Rotas da API
const urlController = new URLController()
api.post("/api/shorten", urlController.shorten)
api.get("/api/:hash", urlController.redirect)

// Rota de teste da API
api.get("/api", (req, res) => {
    res.json({ message: "Encurtador de Links API funcionando!" })
})

// Servir arquivos estáticos do frontend
api.use(express.static(path.join(__dirname, '../../../interface')))

// Rota para o frontend (deve vir depois das rotas da API)
api.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../../../interface/index.html'))
})

// Rota para qualquer outra página (SPA)
api.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../../interface/index.html'))
})

api.listen(5000, () => console.log('🚀 Servidor rodando na porta 5000'))
