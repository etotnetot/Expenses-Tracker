//const mongoose = require('mongoose')

const Sequelize = require('sequelize')
//const mysql = require('mysql')

// const db = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log('DB connected')
//     }
//     catch (error) {
//         console.log('DB failed')
//     }
// }

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'etotnetot123',
//     database: 'tracker'
// })

const sequelize = new Sequelize('tracker', 'root', 'etotnetot123', {
    dialect: "mysql",
    // host: 'loacalhost',
    // user: 'root',
    // password: 'etotnetot123'
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

// module.exports = {
//     sequelize: sequelize,
//     incomes: Incomes
// }

module.exports = {db}