-- database for the application
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    -- key for id
id INTEGER NOT NULL AUTO_INCREMENT,
-- key for burger name
burger_name VARCHAR(255) NOT NULL,
-- key if burger has been eaten or not
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);