const axios = require('axios');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { response } = require('express');
const app = express();

app.use(cors());

app.get('/word', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    params: {
      count: '1',
      wordLength: '5',
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(respond => {
      console.log(respond.data);
      res.json(respond.data[0]);
    })
    .catch(error => console.error(error));
});

app.get('/check', (req, res) => {
  const word = req.query.word;

  const options = {
    method: 'GET',
    url: 'https://api.datamuse.com/words',
    params: {
      sp: word,
    },
  };

  axios
    .request(options)
    .then(response => {
      const foundWord = response.data.find(item => item.word === word);
      if (foundWord) {
        res.json({ isValid: true });
      } else {
        res.json({ isValid: false });
      }
    })
    .catch(error => console.error(error));
});

module.exports = app;
