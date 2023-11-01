-- Database: bookstore

-- DROP DATABASE IF EXISTS bookstore;

CREATE DATABASE bookstore
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_India.1252'
    LC_CTYPE = 'English_India.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

    	
	
	CREATE TABLE books (
    id serial PRIMARY KEY,
    title varchar(255),
    author varchar(255),
    price numeric(10, 2),
    quantity integer,
    isbn varchar(13),
    publisher varchar(255)
);
