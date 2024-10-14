var dotenv = require('dotenv');
dotenv.config();

function getSpotifyCurrentTrack(req, res) {
    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + process.env.SPOTIFY_ACCESS_TOKEN,
            'Content-Type': 'application/json',
        }
    }).then((response) => response.json().then((data) => console.log(data)));
};

getSpotifyCurrentTrack();