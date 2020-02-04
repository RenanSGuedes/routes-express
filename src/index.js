const express = require('express')
const app = express()
const cors = require('cors')

const routes = require('./routes')

const url = new URL('https://127.0.0.1:8094/')

app.use(cors())
app.use(express.json())
app.use(routes)
    
app.listen(url.port, () => {
    console.log("Server connected with sucess in " + url.href)
})