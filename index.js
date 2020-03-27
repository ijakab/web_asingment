const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(express.static('web'))
app.use(bodyParser.json())

const payments = []

app.post('/payments', function (req, res) {
    const data = req.body
    data.fullPrice = 1.25 * data.mainPrice
    data.pdvPrice = data.fullPrice - data.mainPrice
    payments.push(data)
    return res.json(payments)
})

app.listen(3000)
