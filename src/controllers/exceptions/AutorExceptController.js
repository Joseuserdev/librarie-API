
import AutorSchema from "../../db.config/models/Livro.js";


class AutorController{

 async GetAutores(request,response){
 try{
  const listarAutores= await AutorSchema.find({})
  response.status(200).json(listarAutores)

} 
    catch{  
     return response.status(400).send('nao foi possivel ao listar livros ')
    }};
   

  async GerarNovosAutores(request,response){
  try{
       const criarNovoAutor= new AutorSchema(request.body);
       await criarNovoAutor.save()
      return response.status(201).json(criarNovoAutor);
    }
    catch{
        return response.status(400).send('erro ao tentar gerar livro ')
    }}
    
   async  AtualizarDadosAutor(request,response){
     try{
      const {id}= request.params
        const atualizarPorid = await AutorSchema.findByIdAndUpdate(id,request.body,{new:true})
       return response.status(200).json(atualizarPorid)
    }
    catch{
       return response.status(400).send('erro ao tentar atualizar livro')
    }}
    
   async  DeletarLivros(request,response){
    try { 
        const {id}= request.params
        const  autor= await AutorSchema.findByIdAndDelete(id);
        response.status(203).send(`${autor.nome}....foi removido`)
           if(!autor.id){
        return response.status(404).json({messege:`${autor.nome} não encontrado`})
      }
    }
    catch{  
     return response.status(400).json({messege:'erro ao deletar livro'})
    }}
  }
const acess_autor= new AutorController()
 export{acess_autor}