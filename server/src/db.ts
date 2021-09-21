import { connect } from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

async function run(): Promise<void> {
    await connect(process.env.MONGODB as string)
}   

export default run