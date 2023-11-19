const Sequelize = require('sequelize')

const sequelize = new Sequelize('tracker', 'root', 'etotnetot123', {
    dialect: "mysql"
})

const Incomes = require('../models/Income')(sequelize)

const db = async () => {
    try {
        await sequelize.authenticate();
        Incomes.sync()
        console.log('DB connected')
    }
    catch (error) {
        console.log('DB failed')
    }
}

module.exports = {db, Incomes}