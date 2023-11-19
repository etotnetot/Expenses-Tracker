const express = require('express')
const cors = require('cors')
const { readdirSync } = require('fs')
//const { db, sequelize } = require('./db/db')
const app = express()

const Sequelize = require('sequelize')
const {db} = require('./db/db')

require('dotenv').config()

const PORT = process.env.PORT;

//MIDDLEWARES
app.use(express.json())
app.use(cors())

//ROUTES
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

app.get('/', (req, res) => {
    res.send('Hello world!!!!!!wwww!!!')
})

//test
app.get('/insert', (req, res) => {
    Income.create({
        title: 'Iwe',
        amount: '45',
        category: 'Salary',
        description: 'My income',
        date: '18-10-2020',
    })
})

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log("Listening to port:", PORT)
    })
}

server();