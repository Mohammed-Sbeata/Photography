const connection = require('../db_connection');

const postDataQuery = (data) => {
  const dataArray = [data.name, data.email, data.phone, data.booking_date, data.city, data.purpose];
  return connection.query(
    'INSERT INTO users (name, email, phone , booking_date, city, purpose) VALUES ($1 ,$2 ,$3 ,$4 ,$5 ,$6) RETURNING *;',
    dataArray,
  );
};

module.exports = postDataQuery;
