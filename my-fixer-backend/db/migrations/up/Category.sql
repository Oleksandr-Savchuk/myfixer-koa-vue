START TRANSACTION;
  create table "category"(
    id serial PRIMARY KEY ,
    name varchar NOT NULL
  );
  INSERT INTO "category" (name) VALUES ('Bronze');
  INSERT INTO "category" (name) VALUES ('Diamond');
  INSERT INTO "category" (name) VALUES ('Gold');
  INSERT INTO "category" (name) VALUES ('Silver');
  
  ALTER TABLE "user" ADD COLUMN categoryId int DEFAULT 1;
  ALTER TABLE "user" ADD CONSTRAINT fk_category FOREIGN KEY (categoryId) REFERENCES "category"(id); 

COMMIT;