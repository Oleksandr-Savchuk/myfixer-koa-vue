START TRANSACTION;
  create table "user"(
    id serial PRIMARY KEY ,
    fname varchar NOT NULL ,
    lname varchar NOT NULL ,
    username varchar NOT NULL    
  );

COMMIT;