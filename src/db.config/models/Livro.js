import mongoose from 'mongoose'
import AutorSchema from './AutorLivro.js'

const livroSchema= new mongoose.Schema({
    id:{ type:mongoose.Schema.Types.ObjectId},
    nome:{type:String,required:true},
    autor: { type: mongoose.Schema.Types.ObjectId, ref: AutorSchema },
    paginas:{type:Number}
}, {versionKey:false});


const livro=mongoose.model('Livros',livroSchema);

export default livro;

