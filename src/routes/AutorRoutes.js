import { Router } from "express";
import { AutorController } from "../controllers/controllerAut.js";

class RouteAutor{
    construtor(){

    this.router=Router()
    this.router.get('/:autores',AutorController.identificarAutor.bind(AutorController))
    this.router.post('/:autores',AutorController.gerarNovoAutor.bind(AutorController));
    this.router.put('/:autores/:id',AutorController.atualizarAutor.bind(AutorController));
    this.router.delete('/:autores/:id',AutorController.RemoverAutor.bind(AutorController))

    }

}

const routeAutor= new RouteAutor()
export{routeAutor}

