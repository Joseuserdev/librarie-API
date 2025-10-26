import { acess_autor } from "./exceptions/AutorExceptController.js";

class ControllerAut{
    
  identificarAutor(request,response) {
       acess_autor.GetAutores(request,response)
     };

       gerarNovoAutor(request,response){
     acess_autor.GerarNovosAutores(request,response)
     };

       atualizarAutor(request,response){
       acess_autor.AtualizarDadosAutor(request,response)
     };

       RemoverAutor(request,response){
       acess_autor.DeletarLivros(request,response)
     }
}
const AutorController= new ControllerAut()
export{AutorController}