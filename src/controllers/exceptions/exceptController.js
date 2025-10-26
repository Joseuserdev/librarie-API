
import livro from "../../db.config/models/Livro.js";


class LivrosController{

 async GetLivros(request,response){
 try{
  const listarLivros= await livro.find({});
   return response.status(200).json(listarLivros);
    } 
    catch{  
     return response.status(400).send('nao foi possivel ao listar livros ')
    }};
   

  async CriarLivros(request,response){
  try{
       const criarLivro= new livro(request.body);
       await criarLivro.save()
      return response.status(201).json(criarLivro);
    }
    catch{
        return response.status(400).send('erro ao tentar gerar livro ')
    }}
    
   async  AtualizarLivros(request,response){
     try{
      const {id}= request.params
        const atualizarPorid = await livro.findByIdAndUpdate(id,request.body,{new:true})
       return response.status(200).json(atualizarPorid)
    }
    catch{
       return response.status(400).send('erro ao tentar atualizar livro')
    }}
    
   async  DeletarLivros(request,response){
    try { 
        const {id}= request.params
        const livros= await livro.findByIdAndDelete(id);
        response.status(203).send(`${livros.nome}....foi removido`)
           if(!livros.id){
        return response.status(404).json({messege:`${livros.nome} não encontrado`})
      }
    }
    catch{  
     return response.status(400).json({messege:'erro ao deletar livro'})
    }}
  }


const LivrosControllers= new LivrosController()

export{LivrosControllers}