import mongoose from 'mongoose'
import { config } from '../config/Constants'

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION)
            console.log('✅ MongoDB conectado com sucesso!')
        } catch (error) {
            console.error('❌ Erro ao conectar com MongoDB:', error)
            process.exit(1)
        }
    }
}
    
