import { Router } from 'express';
import { controller} from '../controllers/controller.js';

  class createRoutes{
   constructor(){
   this.router=Router()

    this.router.get('/:livros',controller.LerLivro.bind(controller))
    this.router.post('/:livros',controller.criarLivro.bind(controller));
    this.router.put('/:livros/:id',controller.atualizarLivro.bind(controller));
    this.router.delete('/:livros/:id',controller.deletarLivro.bind(controller))

   
}
   }
      

 const readRoute= new createRoutes()

export{readRoute}
 