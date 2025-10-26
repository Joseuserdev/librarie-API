import iniciateSchema from "../../db.config/models/LeitorLivro.js";

class LeitorController{

async acharleitorpeloIdUnico(request,response){
    try{

 const acessarLeitor= await iniciateSchema.findById(id)
 response.status(200).json({'leitor':acessarLeitor})
    }
   catch{
    response.status(400).send('leitor não encontrado ')
   }}

async gerarUmNovoLeitor(request,response){
    try{
 const gerarNovoLeitor= new iniciateSchema(request.body)
   await gerarNovoLeitor.save()
   return response.status(200).json({'leitorCriado!':gerarNovoLeitor})
    }
   catch{
    response.status(400).send('não foi possivel gerar novo leitor')
   }}

async atualizarinformaçoesDoLeitor(request,response){
try{
  const {id}= request.params
        const atualizarPorid = await iniciateSchema.findByIdAndUpdate(id,request.body,{new:true})
       return response.status(200).json(atualizarPorid)
}
catch{
       return response.status(400).send('erro ao tentar atualizar leitor')

}}

async deletarInformaçoesSobreOLeitor(request,response){
try { 
        const {id}= request.params
        const deletarinforDoLeitor= await iniciateSchema.findByIdAndDelete(id);
        response.status(203).send(`${deletarinforDoLeitor}....foi removido`) }
    catch{  
     return response.status(400).json({messege:'erro ao deletar livro'})
    }}

}

const acess_Leitor= new LeitorController()

export { acess_Leitor}