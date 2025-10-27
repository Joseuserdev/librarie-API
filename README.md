# 🚀 API Node.js + Express + MongoDB

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-darkgreen?logo=mongodb)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-Active-success)

---

## 🧩 Sobre o Projeto

Esta é uma **API REST** desenvolvida em **Node.js** com **Express** e **MongoDB**.  
Ela foi criada com o intuito de representar o consumo de cadastro de uma biblioteca/livraria onde o usuário consiga integrar  e persistir seus dados 
e por meio deles cadastrar livros, acessar e cadastrar novos autores filtrando os mesmos e acessando-os.

---

## ⚙️ Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB / Mongoose**
- **ES Modules**
- **Dotenv**
- **Nodemon** (para desenvolvimento)

---

## 📁 Estrutura de Pastas

```bash
src/
 ├── config/
 ├── controllers/
 └──exceptions/
 └──models/
 ├── db.config/
 ├── routes/
 └── Server.js
```

##🚀 Como Executar o Projeto
1️⃣ Clone o repositório

```bash

git clone https://github.com/Joseuserdev/librarie-API.git
cd librarie-API

```

2️⃣ Instale as dependências
```bash
npm install express mongoose nodemon dotenv
```

3️⃣ Configure o ambiente

Crie um arquivo .env na raiz:

```bash
PORT=3000
MONGO_URI=sua_string_de_conexao_mongodb
```


4️⃣ Execute o servidor através do script manualmente
```bash
node src/routes/Server.js
```
ou com o  script automatico do package.json

```bash
[init:server]
```


Acesse em:
👉 http://localhost:3000

🧑‍💻 Autor
José Gomes da Silva Neto

📜 Licença
Este projeto está sob a licença MIT
 




