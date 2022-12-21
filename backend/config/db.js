import mongoose from 'mongoose'
import user from '../models/usersModel.js'

const connectDB = async () => {
    try {
        //database Name
        const databaseName='demomern';
        const con = await mongoose.connect(`mongodb+srv://natalyaiskanderova:nat00@mongocluster.gtehv.mongodb.net/Test?retryWrites=true&w=majority`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB