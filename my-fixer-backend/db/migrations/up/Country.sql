START TRANSACTION;
  create table "country"(
    id serial PRIMARY KEY ,    
    name varchar NOT NULL
  );

  INSERT INTO "country" (name) VALUES ('Ukraine');
  INSERT INTO "country" (name) VALUES ('Kazakstan');
  INSERT INTO "country" (name) VALUES ('France');
  INSERT INTO "country" (name) VALUES ('Egypt');

  ALTER TABLE "user" ADD COLUMN countryId int DEFAULT 1;
  ALTER TABLE "user" ADD CONSTRAINT fk_country FOREIGN KEY (countryId) REFERENCES "country"(id); 
COMMIT;"