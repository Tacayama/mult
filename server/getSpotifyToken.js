var dotenv = require('dotenv');
dotenv.config();

fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
      'client_id': process.env.SPOTIFY_CLIENT_ID,
      'client_secret': process.env.SPOTIFY_CLIENT_SECRET
    })
}).then((response) => response.json().then((data) => console.log(data)));