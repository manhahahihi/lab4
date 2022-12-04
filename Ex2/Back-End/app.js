const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const cards = require('./model/cards')

const app = express();
const port = process.env.PORT || 8001
const connection_url = ('mongodb+srv://tinder:15102303@tinderphakeeedb.cxff8dj.mongodb.net/test');

//middleware
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//API Endpoints
app.get('/', (req, res) => res.status(200).send("Nguyen Duc Manh"))

app.post('/dating/cards', (req,res) => {
  const dbCard = req.body
  cards.create(dbCard, (err, data) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.get('/dating/cards', (req,res) => {
  cards.find((err, data) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.listen(port, () => {
  console.log(`Server Starting at: ${port}`);
});