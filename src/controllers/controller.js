import { LivrosControllers } from "./exceptions/exceptController.js";


class Controllers{
   
      LerLivro(request,response) {
       LivrosControllers.GetLivros(request,response)
     };

       criarLivro(request,response){
        LivrosControllers.CriarLivros(request,response)
     };

       atualizarLivro(request,response){
        LivrosControllers.AtualizarLivros(request,response)
     };

       deletarLivro(request,response){
        LivrosControllers.DeletarLivros(request,response)
     }
}


const controller= new Controllers();

export{ controller}
