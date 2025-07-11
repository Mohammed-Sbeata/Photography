require('dotenv').config();
const { Pool } = require('pg');

const {
  NODE_ENV, DB_URL, DEV_DB_URL, T_DB_URL,
} = process.env;

console.log(DB_URL, NODE_ENV, DEV_DB_URL);

let dburl = '';
if (process.env =='test'){
  dburl = T_DB_URL
}else if (process.env =='development'){
  dburl = DEV_DB_URL
}else{
  dburl = DB_URL
}
const options = {
  connectionString: dburl,
  ssl:  false,
};
const connection = new Pool(options);

module.exports = connection;