import { config } from '../config/Constants'
import mongoose from 'mongoose'

export class MongoConnection {
    public async connect(): Promise<void> {
        try {

            mongoose.connect(config.MONGO_CONNECTION)
            console.log('Database connection established')

        } catch (error) {
            console.error(error.message)
            process.exit(1)
        }
    }
}