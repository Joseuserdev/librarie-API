
import {readRoute }from './Livroroutes.js'


import { connect } from '../db.config/db.connect.js'
import express from 'express'
import { LeitorRoute } from './LeitorRoutes.js'

  class initServer {
    constructor(Server,port){
      this.Server= Server
      this.port=port
      this.middleware()
      this.routes()
      this.StartServer()
    }

    middleware(){
        this.Server.use(express.json())
    }

    routes(){
        this.Server.use('/',readRoute.router)
        this.Server.use('/',LeitorRoute.router)
    }

   async StartServer(){
    
     await connect.autenticar();

        this.Server.listen(this.port,()=>{
            try{
               console.log(`servidor rodando na porta ${this.port}`);
            }
            catch{
                console.error('não foi possivel conectar ao servidor ');
            }});
    }};

const run = new initServer(express(),3000)
export default run

 

