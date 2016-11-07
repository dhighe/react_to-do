DROP TABLE IF EXISTS task;

CREATE TABLE task (
  id SERIAL PRIMARY KEY,
  name VARCHAR (64) NOT NULL,
  description VARCHAR(255),
  date_created TIMESTAMP NOT NULL DEFAULT NOW(),
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  date_complete TIMESTAMP,
  deleted BOOLEAN NOT NULL DEFAULT FALSE,
  date_deleted TIMESTAMP
);

-- create a index

CREATE INDEX name_idx
ON task (name);

