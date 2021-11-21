const express = require('express')
const app = express()
const port = 8080
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://dbUser:dbPass@cluster0.9nvvf.mongodb.net/yt-ratings?retryWrites=true&w=majority";
const client = new MongoClient(uri);

client.connect();


app.get('/', async (req, res) => {

})

app.get('/getRatings/:id', async (req, res) => {
    let id = req.params.id

    const result = await client.db("yt-ratings").collection("ratings").findOne({ ytid: id });
    if (result == null) {
        res.send({
            dislikes: 0,
            likes: 0
        })
    } else {
        res.send(result)
    }
})

app.post('/setRatings/:id', (req, res) => {
    let id = req.body
    res.send({
        result: 401
    })
})

app.listen(port, () => {
    console.log(`Your app listening at http://localhost:${port}`)
})