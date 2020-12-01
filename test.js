const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root', 'Clarice1', {
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Postagem.create({
//    titulo: "Treinamento de NodeJS",
//    conteudo: "Este é um treinamento online hospedado no YouTube sobre NodeJS"
//})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "João",
    sobrenome: "Lima",
    idade: 20,
    email: "teste@hotmail.com"
})

//Postagem.sync({force: true})
//Usuario.sync({force: true})

//sequelize.authenticate().then(function(){
//    console.log("Conectado com sucesso!")
//}).catch(function(erro){
//    console.log("Falha ao se conectar: " + erro)
//})