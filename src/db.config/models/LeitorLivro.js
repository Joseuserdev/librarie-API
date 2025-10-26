import mongoose from 'mongoose'
import livro from './Livro.js'

const LeitorSchema= new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    nomeCompleto:{type:String},
    dataNascimento:{type:Number},
    livroAtualDeLeitura:{type: mongoose.Schema.Types.ObjectId,ref:livro}

})

const iniciateSchema= new mongoose.model('leitores',LeitorSchema)

export default iniciateSchema