const express = require ('express')
const app = express()
const cors = require ('cors')

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 4040

app.get('/quest', (req, res) => {
    res.status(200).send('Hello World')
})

app.post('/quest', (req, res) => {
    console.log('req.body: ', req.body)

    res.status(200).send(req.body)
})

app.listen(port, () => {
    console.log(`I see a ship coming at port ${port}!`)
})