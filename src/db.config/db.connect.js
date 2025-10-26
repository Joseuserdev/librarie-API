
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

class connectMongo{
    constructor(){
        this.db=null
    }

    async autenticar(){
        try{
            this.db= mongoose.connect(process.env.DB_CREDENCIALS);
            console.log("conexão com o banco de dados feita com sucesso!"); 
            return this.db
        } 
        catch{
         (error)=> console.log("erro ao tentar conectar ao banco ",error)
         throw error;
        }
    }
}

const connect= new connectMongo()
export{connect}