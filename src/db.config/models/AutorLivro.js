import mongoose from 'mongoose'

const UseAutor= new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    nome:{type:String},
    nacionalidade:{type:String}
})
     
const AutorSchema= mongoose.model('Autores',UseAutor)

export default AutorSchema