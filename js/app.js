const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'page_db',
  password: 'qwertymasad',
  port: 5432,
});

client.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  
  client.query('INSERT INTO users (name, email, message) VALUES ($1, $2, $3)', [name, email, message], (err, result) => {
    if (err) {
      res.status(400).send('Error inserting data');
    } else {
      res.status(200).send('Data inserted successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});