import mongoose from 'mongoose'


const dbConnection = async()=>{
    try {
        
        await mongoose.connect(process.env.DB);
        console.log('DB on line');
        

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la base de datos')
    }
}

export default dbConnection