import { Request, Response } from "express"
import shortId from 'shortid'
import { config } from '../config/Constants'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        //ver se a URL ja não existe
        //criar o hash pra essa url

        console.log(req.body)
        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = '${config.API_URL}/${hash}'
        //salvar a url no banco
        //retornar a url que a gente salvou
        response.json({ originURL, hash, shortURL })

    }
    public async redirect(req: Request, response: Response): Promise<void> {

        const { hash } = req.params
        const url = {
            "https://cloud.mongodb.com/v2/611e5578a5cede2a603464ed#clusters",
            hash: 'CUSD3DgEB',
            shortURL: "http://localhost:5000/CUSD3DgEB"
        }
        response.redirect("url.originURL")
    }
}