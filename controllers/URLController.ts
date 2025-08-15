import { Request, Response } from "express"
import shortId from 'shortid'
import { config } from '../config/Constants'
import { URLModel } from '../database/URL'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        try {
            const { originURL } = req.body
            
            if (!originURL) {
                response.status(400).json({ error: 'URL de origem é obrigatória' })
                return
            }

            // Verificar se a URL já existe
            const existingURL = await URLModel.findOne({ originURL })
            if (existingURL) {
                response.json(existingURL)
                return
            }

            // Criar o hash para essa URL
            const hash = shortId.generate()
            const shortURL = `${config.API_URL}/${hash}`

            // Salvar a URL no banco
            const newURL = await URLModel.create({
                hash,
                originURL,
                shortURL
            })

            // Retornar a URL que salvamos
            response.status(201).json(newURL)
        } catch (error) {
            console.error('Erro ao encurtar URL:', error)
            response.status(500).json({ error: 'Erro interno do servidor' })
        }
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        try {
            const { hash } = req.params

            // Buscar a URL no banco de dados
            const url = await URLModel.findOne({ hash })
            
            if (!url) {
                response.status(404).json({ error: 'URL não encontrada' })
                return
            }

            // Redirecionar para a URL original
            response.redirect(url.originURL)
        } catch (error) {
            console.error('Erro ao redirecionar:', error)
            response.status(500).json({ error: 'Erro interno do servidor' })
        }
    }
}
