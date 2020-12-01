const Sequelize = require('sequelize')
// Conexão com banco de dados MySql
const sequelize = new Sequelize('postagens','root', 'Clarice1', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
