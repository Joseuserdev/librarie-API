import { acess_Leitor } from "./exceptions/LeitorExceptController.js";

class LeitorController{
    identificarLeitorPeloIdDeUsuario(request,response){
    acess_Leitor.acharleitorpeloIdUnico(request,response)
    }

    gerarCadastroDeLeitor(request,response){
     acess_Leitor.gerarUmNovoLeitor(request,response)
    }

    atualizarInformaçoesdoLeitor(request,response){
    acess_Leitor.atualizarinformaçoesDoLeitor(request,response)
    }

    deletarInformaçoesEspecificasDoLeitor(request,response){
     acess_Leitor.deletarInformaçoesSobreOLeitor(request,response)
    }
}

const leitor_Controller= new LeitorController()
export{leitor_Controller}