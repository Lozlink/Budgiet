CREATE DATABASE budgiet;
\c budgiet

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password TEXT
);

CREATE TABLE transactions(
  id SERIAL PRIMARY KEY,
  type TEXT,
  amount INT,
  description TEXT,
  created_on TIMESTAMP,
  user_id TEXT,
  balance NUMERIC,
  category TEXT
);


