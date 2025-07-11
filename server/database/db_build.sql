BEGIN;
DROP TABLE IF EXISTS users, photographer CASCADE;

CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL,
    phone TEXT NOT NULL,
    country VARCHAR(100),
    city VARCHAR(100) ,
    purpose VARCHAR(100) NOT NULL,
    booking_date DATE  NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO users (name, email, phone, booking_date,city, purpose) VALUES
('shatha', 'shatha@gmail.com', '0097567042924','2023-02-02', 'Khan Younis', 'Other'),
('moh', 'moh123@gmail.com', '00971452379284','2024-02-02','Gaza', 'Commercial');


CREATE TABLE IF NOT EXISTS photographer(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);



INSERT INTO photographer (name) VALUES ('shatha');

COMMIT;