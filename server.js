const express = require('express');
const request = require('request');

const app = express();
const urls = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'; 

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/photos', (req, res) => {
  request(
    { url: urls },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

