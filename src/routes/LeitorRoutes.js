import { Router } from "express";
import { leitor_Controller } from "../controllers/LeitorController.js";


class LeitorRouter{
    constructor(){
     this.router=Router()

     this.router.get('/:leitores',leitor_Controller.identificarLeitorPeloIdDeUsuario.bind(leitor_Controller))
     this.router.post('/:leitores',leitor_Controller.gerarCadastroDeLeitor.bind(leitor_Controller))
     this.router.put('/:leitores/:id',leitor_Controller.atualizarInformaçoesdoLeitor.bind(leitor_Controller))
     this.router.delete('/:leitores/:id',leitor_Controller.deletarInformaçoesEspecificasDoLeitor.bind(leitor_Controller))
    }
}

const LeitorRoute= new LeitorRouter()

export{LeitorRoute}