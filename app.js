const express = require('express')
const cors = require('cors')
const { readdirSync } = require('fs')
const app = express()
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

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log("Listening to port:", PORT)
    })
}

server();