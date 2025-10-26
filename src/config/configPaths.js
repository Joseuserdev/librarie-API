
import * as path from  'path';
import { fileURLToPath } from 'url';


const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

const  definePath={

config: path.resolve(__dirname,'src','config','config.js'),
controllers: path.resolve(__dirname,'src','controllers','controller.js'),
controllers: path.resolve(__dirname,'src','controllers','controllerAut.js'),
controllers: path.resolve(__dirname,'src','controllers','LeitorController.js'),

expections:path.resolve(__dirname,'src','controllers','exceptions','exceptController.js'),
exceptions:path.resolve(__dirname,'src','controllers','exceptions','AutorExceptController.js'),
exceptions:path.resolve(__dirname,'src','controllers','exceptions','LeitorExceptController.js'),

data_base:path.resolve(__dirname,'src','db.config','db.connect.js'),

data_base_Schema:path.resolve(__dirname,'src','db.config','models','Livro.js'),
data_base_Schema:path.resolve(__dirname,'src','db.config','models','AutorLivro.js'),
data_base_Schema:path.resolve(__dirname,'src','db.config','models','LeitorLivro.js'),

routes: path.path.resolve(__dirname,'src','routes','routes.js'),
routes:path.path.resolve(__dirname,'src','routes','AutorRoutes.js'),
routes:path.path.resolve(__dirname,'src','routes','LeitorRoutes.js'),
server:path.resolve(__dirname,'src','routes','Server.js')

}

export{definePath} 