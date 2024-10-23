const { getGuild, createChannel } = require ('./controllers/discord');

const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  user: process.env.SUPABASE_USERNAME,
  host: process.env.SUPABASE_HOST,
  database: process.env.SUPABASE_NAME,
  password: process.env.SUPABASE_PASSWORD,
  port: process.env.SUPABASE_PORT,
});

const getUsers = async () => {
  try {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      });
    });
  } catch (err) {
    console.error('Erreur de connexion:', err);
  }
};

var users = getUsers();
console.log(users);
// users.forEach(element => {
//   createChannel(element.name);
// });