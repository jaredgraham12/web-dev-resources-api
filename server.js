const express = require('express')
const app = express()
const PORT = 8003

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})