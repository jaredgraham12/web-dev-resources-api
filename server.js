const express = require('express')
const app = express()
const resources = require('./resources.js')
const PORT = 8003

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/resources', (req, res) => {
    res.json(resources)
})

app.get('/api/resources/:topic', (req, res) => {
    const topic = req.params.topic
    if (resources[topic]) {
        res.json(resources[topic])
    } else {
        res.json({error: 'topic not found'})
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})