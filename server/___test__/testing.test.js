const  dbBuild  = require("../database/db_build.js");
const connection = require("../database/db_connection.js");
const getData = require("../database/quires/getData.js");
const postData = require("../database/quires/postData.js");

beforeEach(() => dbBuild());

afterAll(() => connection.end());

describe('Just trying to create some tests', () => {
  test('Testing the getUser query', (done) => {
    getData()
      .then((data) => data.rows)
      .then((rows) => {
        const [obj1, obj2, obj3] = rows; 

        expect(Array.isArray(rows)).toBe(true);
        expect(obj1.name).toBe('shatha');
        expect(obj1.city).toBe('Khan Younis');
        return done()
      })
      .catch((error) => done(error));
  });

  test('Testing the post data query', (done) => {
   postData({ name: 'shatha', email: 'shatha@gmail.com',phone:'0097567042924',purpose:'Other',booking_date:'2023-02-02' })
      .then(({ rowCount, rows }) => {
        expect(rows[0].name).toBe("shatha")
        expect(rows[0].email).toBe("shatha@gmail.com")
        expect(rows[0].phone).toBe("0097567042924")
        expect(rows[0].purpose).toBe("Other")

      return done()
      })
      .catch((err) => done(err));
  });
});