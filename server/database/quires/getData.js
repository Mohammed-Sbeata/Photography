const connection = require('../db_connection');

const getDataQuery = () =>  connection.query('SELECT name, email, phone,booking_date, city, purpose FROM users;');

module.exports = getDataQuery;
