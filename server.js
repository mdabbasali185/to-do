const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors())

const port = process.env.PORT || 5000



app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/users', (req, res) => {
    res.send(require('./users.json'))
})
app.get('/to-do', (req, res) => {
    res.send(require('./todo.json'))
})

app.listen(port)
